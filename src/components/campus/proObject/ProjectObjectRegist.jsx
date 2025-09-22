import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cancle, dropdownArrow } from "../img";
import { Button, DropHeader, DropList, DropOption, SearchDrop } from "../commons/WHComponent";
import { Container } from "../topNav/TopNav";
import { getRegistForm, getUserSession, registRoadmap } from "../api";
import { Overlay } from "./ProjectObjectFeedbackModify";
import useModalStore, { useObjectRegist, useToastStore } from "../commons/modalStore";
import { ExitButton } from "../lecAtten/AttandanceModal";

const TopBar = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  gap: 16px;
  background: #fff;
`;
const CloseArea = styled.div`
  width: 54px; height: 45px;
  display: flex; align-items: center; justify-content: center;
`;
const CloseBtn = styled.button`
  width: 28px; height: 28px; padding: 0; border: 0;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  cursor: pointer; font-size: 0; color: transparent;
  margin-top: 15px;
`;
const Spacer = styled.div` flex: 1; `;
const RegisterBtn = styled.button`
  width: 62px; height: 26px;
  background: #2EC4B6; color: #fff; border: 0; border-radius: 5px;
  font-weight: 500; cursor: pointer;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;     
  overflow: hidden;   
  background-color: #f7f7f7;
`;

const TopBox = styled.div`
  background: #fff;
  height: 263px;
  box-sizing: border-box;
  padding: 24px;
`;

const Title = styled.div`
  font-weight: 700;
  color: #444;
  margin-bottom: 10px;
  margin-top: -10px;
`;
const TitleLine = styled.div`
  height: 2px;
  background: #2EC4B6;
  margin-bottom: 14px;
`;

const Row = styled.div`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  &:last-child { border-bottom: 0; }
`;
const Label = styled.div`
  width: 72px;
  color: #777;
  font-weight: 700;
  font-size: 14px;
`;
const Value = styled.div`
  flex: 1;
  color: #555;
`;

const Gap = styled.div`
  height: 15px;
  background: #f3f3f3;
`;

const Editor = styled.div`
  flex: 1;               
  background: #fff;
  padding: 24px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;   
`;

const CategorySelect = styled.select`
  width: 167px;
  height: 29px;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  padding: 0 8px;
  font-size: 13px;
  color: #333;
  background: #fff;
  outline: none;
`;

const TitleInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 0 10px;
  margin-top: 12px;
  font-size: 14px;
  outline: none;
  ::placeholder { color: #bdbdbd; }
`;

const BodyWrap = styled.div`
  margin-left: -24px;
  margin-right: -24px;
  padding: 0 24px;
  border-bottom: 1px solid #e5e5e5;
`;

const BodyArea = styled.textarea`
  width: 100%;           
  max-width: 412px;      
  height: 216px;
  border: 0;
  resize: none;
  outline: none;
  padding: 16px 0 8px;
  box-sizing: border-box;
  font-size: 14px;
  color: #333;
  ::placeholder { color: #bdbdbd; }
`;

const FileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 14px;
  color: #777;
  font-size: 13px;
`;
const FileButton = styled.label`
  display: inline-block; width: 74px; height: 25px; text-align: center; align-content: center;
  border: 1px solid #bdbdbd; border-radius: 5px; font-size: 12px; cursor: pointer; user-select: none;
  background: #f4f4f4; margin-right: 10px;
`;
const HiddenFile = styled.input` display: none; `;

export default function ProjectObjectRegist() {
  const [dropOpen, setDropOpen] = useState(false);
  const [dropSelected, setDropSelected] = useState("회의록");
   const { visible, hideModal, projectId } = useObjectRegist();
  const [member, setMember] = useState(null);
  const [teammembers, setTeammembers] = useState("");
  const [professorList, setProfessorList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const { showToast } = useToastStore();
  const user = getUserSession();
  const showConfirm = useModalStore((state) => state.showConfirm);

  const memId = user.mem_id;
  useEffect(() => {
  console.log("useEffect 실행", visible, projectId);
  
  if (!visible) return; // projectId 없어도 일단 호출 테스트
  
  getRegistForm(memId, projectId)
    .then((res) => {
      console.log("API 응답", res.data);
      const { member, teammembers, professorList, studentList, projectList } = res.data;
      setMember(member);
      setTeammembers(teammembers);
      setProfessorList(professorList);
      setStudentList(studentList);
      setProjectList(projectList);
    })
    .catch((err) => console.error("등록 초기 데이터 로딩 실패:", err));
}, [visible, memId, projectId]);

  const toggleOpen = () => setDropOpen(!dropOpen);

    const handleDropSelect = (value) => {
        setDropSelected(value);
        setDropOpen(false);
    }
    const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
  if (!title || !content) {
    showToast("제목과 내용을 입력해주세요.");
    return;
  }

  // 1️⃣ 컨펌 모달 띄우기
  showConfirm("결과물을 등록하시겠습니까?", () => {
    // 2️⃣ 확인 버튼 클릭 시 실행
    const formData = new FormData();
    formData.append("rm_name", title);
    formData.append("rm_content", content);
    formData.append("rm_category", dropSelected);
    formData.append("project_id", projectId);
    formData.append("mem_id", memId);
    formData.append("team_id", projectList[0]?.team_id || "");
    formData.append("eval_status", "0");
    formData.append("writer", memId);
    if (file) formData.append("uploadFile", file);

    registRoadmap(formData)
      .then(res => {
        showToast("결과물이 등록되었습니다.");
        if (typeof window.refreshProjectTeamList === "function") {
          window.refreshProjectTeamList(); // 리스트 새로고침
        }
        hideModal(); // 모달 닫기
      })
      .catch(err => {
        console.error("등록 실패:", err);
        showToast("등록에 실패했습니다.");
      });
  });
};
if (!visible) return null;
  return (
    <Overlay>
      <div>
       <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <ExitButton style={{width:'19px', height:'19px', margin:'0'}} onClick={hideModal}>
                                    <img src={Cancle} style={{ width: '19px', height: '19px' }} />
                                </ExitButton>
                <Button onClick={handleSubmit}>등록</Button>
            </Container>
      
        <Content>
        <div>
          <TopBox>
            <Title>{projectList[0]?.project_name ?? "-"}</Title>
            <TitleLine />
            <Row>
  <Label>기간</Label>
  <Value>
    {projectList[0] 
      ? `${new Date(projectList[0].project_stdate).toLocaleDateString()} ~ ${new Date(projectList[0].project_endate).toLocaleDateString()}`
      : "-"}
  </Value>
</Row>

<Row>
  <Label>담당교수</Label>
  <Value>{projectList[0]?.profes_name ?? "-"}</Value>
</Row>

<Row>
  <Label>팀장</Label>
  <Value>{projectList[0]?.leader_name ?? "-"}</Value>
</Row>

<Row>
  <Label>팀원</Label>
  <Value>{teammembers || "-"}</Value>
</Row>
          </TopBox>
        </div>

        <div style={{marginTop:'20px'}}>
          <Editor>
            <SearchDrop style={{marginTop:'-9px'}}>
                <DropHeader style={{width:'131px', height:'27px', borderTop: '1px solid #ccc', borderRadius:'5px', fontSize:'13px', lineHeight:'16px'}} onClick={toggleOpen}>
                    {dropSelected}
                    <img src={dropdownArrow} style={{width:"13px", height:"8px", marginLeft:'auto', display:'block', marginTop:'4px'}}></img>
                </DropHeader>
                {dropOpen && (
                    <DropList style={{width:'131px'}}>
                        <DropOption style={{padding:'8px 10px', fontSize:'13px'}} onClick={() => handleDropSelect("회의록")}>회의록</DropOption>
                        <DropOption style={{padding:'8px 10px', fontSize:'13px'}} onClick={() => handleDropSelect("산출물")}>산출물</DropOption>
                        <DropOption style={{padding:'8px 10px', fontSize:'13px'}} onClick={() => handleDropSelect("업무일지")}>업무일지</DropOption>
                        <DropOption style={{padding:'8px 10px', fontSize:'13px'}} onClick={() => handleDropSelect("최종결과물")}>최종결과물</DropOption>
                    </DropList>
                )}
            </SearchDrop>

            <TitleInput
              placeholder="제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <BodyWrap>
              <BodyArea
                placeholder="내용을 입력해주세요."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </BodyWrap>

            <FileRow>
              <FileButton htmlFor="file">파일선택</FileButton>
              <HiddenFile id="file" type="file" onChange={handleFileChange} />
              <span>{file ? file.name : "선택된 파일이 없습니다."}</span>
            </FileRow>
          </Editor>
          </div>
        </Content>
      </div>
    </Overlay>
  
  );
}