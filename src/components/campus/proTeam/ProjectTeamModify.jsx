import React, { useState, forwardRef, useRef, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Cancle, searchIcon, calender, radioCheck, searchbtn } from "../img";
import { Container } from "../topNav/TopNav";
import { Button, CustomInput, FlexDiv, MJCustomInput } from "../commons/WHComponent";
import { ExitButton } from "../lecAtten/AttandanceModal";
import { Overlay } from "../proObject/ProjectObjectFeedback";
import { useProjectTeamModifyModalStore, useTeamMemberModalStore, useTeamProfessorModalStore, useTeamSearchModalStore } from "../commons/modalStore";
import { getProjectDetail, requestProjectModify } from "../api";

const GlobalFix = createGlobalStyle`
  .react-datepicker-wrapper,
  .react-datepicker__input-container { width: 100%; }
  .react-datepicker-popper { z-index: 9999; }
`;

const Page = styled.div`
  width: 412px;
  margin: 0 auto;
  max-width: 100%;
  overflow-x: hidden;
`;

export const TopBar = styled.div`
  height: 56px; 
  display: flex; 
  align-items: center; 
  padding: 0 16px; 
  box-sizing: border-box;
`;

const CloseArea = styled.div`
  width: 72px;
  height: 56px;
  display: flex; 
  align-items: center;
  padding-left: 8px;
`;
const CloseBtn = styled.button`
  width: 28px; height: 28px;
  padding: 0; border: 0;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  cursor: pointer; margin-top: 25px;
  font-size: 0; color: transparent;
`;
const Spacer = styled.div` flex: 1; `;
const RequestBtn = styled.button`
  width: 48px; height: 26px;
  background: #2EC4B6; color: #fff; border: 0;
  border-radius: 5px; font-weight: 700; cursor: pointer;
  margin-top: 20px;
`;

const Section = styled.div` background: #fff; `;
const TopSection = styled(Section)`
  height: 490px;
  display: flex; 
  flex-direction: column;
  box-sizing: border-box;
`;
const TopContent = styled.div` padding: 27px; box-sizing: border-box; overflow: hidden; 
  margin-top: -20px;
`;
const BottomSection = styled(Section)` height: 298px; padding: 19px; box-sizing: border-box; `;
const SectionGap = styled.div` height: 12px; background: #f3f3f3; `;

const Row = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px; 
  margin-bottom: 10px;
`;
const Label = styled.div`
  width: 72px;
  font-size: 13px; 
  font-weight: 600;
  color: #3b3b3b;
`;
const Input = styled.input`
  flex: 1; min-width: 0;           
  height: 32px;                    
  border: 1px solid #d6d6d6; border-radius: 4px;
  padding: 0 10px; font-size: 13px; color: #333; outline: none;
  ::placeholder { color: #bdbdbd; }
`;

const RowTwoCols = styled.div`
  display: flex; 
  gap: 8px; 
  margin-bottom: 10px; 
  align-items: flex-start;
`;
const FieldCol = styled.div`
  flex: 1 1 0; 
  min-width: 0;    
  display: flex; 
  flex-direction: column; 
  gap: 6px;
`;
const FieldLabel = styled.div` font-size: 12px; color: #6b6b6b; font-weight: 600; `;

const DateField = styled.div`
  position: relative;
  width: 100%;
`;
const DateInput = styled(Input)`
  height: 29px;          
  padding-right: 10px;   
`;
const CalendarBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 20px;           
  height: 20px;
  padding: 0;
  border: 0;
  background: transparent url(${calender}) center / 18px 18px no-repeat;
  cursor: pointer;
`;

const SearchBtn = styled.button`
  width: 32px; 
  height: 32px;       
  padding: 0; 
  border: none; 
  border-radius: 4px;
  background: url(${searchbtn}) center / 100% 100% no-repeat; cursor: pointer;
`;

export const RadioWrap = styled.div`
  display: flex; 
  align-items: center; 
  gap: 16px; 
  font-size: 13px; 
  color: #333;
`;
export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;
export const RadioButton = styled.input.attrs({ type: "radio" })`
  display: none;
`;
export const RadioMark = styled.span`
  width: 13px;
  height: 13px;
  border: 1px solid #bbb;
  border-radius: 8px;
  background-color: #fff;
  display: inline-block;
  margin-top: 2px;

  ${RadioButton}:checked + & {
    background-color: #fff;
    background-image: url(${radioCheck});
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const SectionLabel = styled.div` font-size: 13px; font-weight: 600; color: #3b3b3b; margin-top: 6px; `;
const Divider = styled.div` height: 1px; background: #e5e5e5; margin: 8px 0 12px; `;
const PlainText = styled.div` font-size: 13px; color: #808080; `;
const SubHeader = styled.div` font-size: 14px; font-weight: 600; color: #444; padding-bottom: 8px; border-bottom: 2px solid #2EC4B6; `;

const ReasonArea = styled.textarea`
  width: 100%; 
  height: 170px;     
  margin-top: 12px;
  border: 0; 
  background: transparent;
  padding: 0;
  font-size: 13px; 
  color: #333; 
  outline: none; 
  resize: none; 
  line-height: 1.5;
  ::placeholder { color: #bdbdbd; }
`;
const BottomLine = styled.div` height: 1px; background: #e5e5e5; margin-top: 12px; `;

const DateInputWithButton = forwardRef(({ value, onClick, placeholder }, ref) => (
  <DateField>
    <DateInput ref={ref} value={value || ""} readOnly onClick={onClick} placeholder={placeholder} />
    <CalendarBtn type="button" aria-label="달력 열기" onClick={onClick} />
  </DateField>
));

export default function ProjectTeamModify() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const startInputRef = useRef(null);
  const endInputRef = useRef(null);
const { visible, hideModal,project_id  } = useProjectTeamModifyModalStore();
const [project, setProject] = useState(null);
const [reason, setReason] = useState("");
const [loading, setLoading] = useState(false);
  const { selectedProfessor } = useTeamProfessorModalStore();
const { selectedTeamLeader } = useTeamSearchModalStore();
const { selectedTeamMember } = useTeamMemberModalStore();
  const { showModal: openTeamLeaderModal } = useTeamSearchModalStore();
  const { showModal: openTeamMemberModal } = useTeamMemberModalStore();
  const stripHtmlTags = (html) => html?.replace(/<\/?[^>]+(>|$)/g, "") || "";
const [projectName, setProjectName] = useState("");
const [samester, setSamester] = useState(""); // 학기
const [projectDesc, setProjectDesc] = useState("");
const [leaderName, setLeaderName] = useState("");
const [memberNames, setMemberNames] = useState([]);

useEffect(() => {
  if (visible && project_id) {
    setLoading(true); 
    getProjectDetail(project_id).then((res) => {
      const p = res.data.projectList?.[0];
      setProject(p);

      if (p?.project_stdate) setStartDate(new Date(p.project_stdate));
      if (p?.project_endate) setEndDate(new Date(p.project_endate));

      setProjectName(p?.project_name || "");
      setSamester(p?.samester || "1학기");
      setProjectDesc(p?.project_desc || "");
      setLeaderName(p?.leader_name || "");
      setMemberNames(
        Array.isArray(p?.mem_name) ? p.mem_name : (p?.mem_name ? [p.mem_name] : [])
      );
    })
    .finally(() => setLoading(false));
  }
}, [visible, project_id]);
const handleSubmit = async () => {
  if (!project) return;

  try {
    const payload = {
  project_id: project.project_id,
  project_name: projectName,
  profes_id: project.profes_id,
  samester: samester,
  project_desc: projectDesc,
  project_stdate: startDate
    ? startDate.toISOString().split("T")[0]
    : project.project_stdate,
  project_endate: endDate
    ? endDate.toISOString().split("T")[0]
    : project.project_endate,
  team_id: project.team_id,
  team_member_ids: project.mem_id || "",
  team_member_names:
    selectedTeamMember?.length > 0
      ? selectedTeamMember.map((m) => m.mem_name).join(", ")
      : memberNames.join(", "),
  team_leader: project.team_leader,
  leader_name: selectedTeamLeader?.mem_name ?? leaderName,
  edit_content: reason,
};
    await requestProjectModify(payload);
    alert("수정 요청이 등록되었습니다.");
    if (typeof window.refreshProjectTeamList === "function") {
      window.refreshProjectTeamList();
    }
    hideModal();
  } catch (err) {
    console.error("수정 요청 실패:", err);
    alert("수정 요청에 실패했습니다.");
  }
};
  if (!visible) return null;
  return (
    <Overlay>
      {loading ? (
      <div style={{ padding: 20, textAlign: "center" }}>Loading...</div>
    ) : (
    <Page>
      <GlobalFix />

      <TopSection>
        <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <ExitButton style={{width:'19px', height:'19px', margin:'0'}} onClick={hideModal}>
                            <img src={Cancle} style={{ width: '19px', height: '19px' }} />
                        </ExitButton>
            <Button onClick={handleSubmit}>등록</Button>
        </Container>

        <TopContent>
          <Row>
            <Label>프로젝트명</Label> 
            <Input value={projectName}
    onChange={(e) => setProjectName(e.target.value)} />
          </Row>
          <FlexDiv style={{marginBottom:'-5px'}}>
            <Label>시작일</Label>
            <Label style={{marginLeft:'120px'}}>마감일</Label>
          </FlexDiv>

          <FlexDiv style={{marginTop:'8px', marginBottom:'5px'}} >
              <div style={{ display: "flex", alignItems: "center", width: "152px", height: "36px", marginLeft:'-4px' }} >
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="시작일"
                      dateFormat="yyyy-MM-dd" customInput={<MJCustomInput ref={startInputRef}/>}
                  />
                  <img src={calender} style={{width:'20px', marginLeft:'-15px', position:'relative', marginBottom:'1px'}} alt="calendar"/>
              </div>
              <div style={{marginLeft:'25px', marginTop:'5px'}}>
                  ~
              </div>
              <div style={{ display: "flex", alignItems: "center", width: "152px", height: "36px", marginLeft:'7px'}}>
                  <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} placeholderText="마감일"
                      dateFormat="yyyy-MM-dd" customInput={<MJCustomInput ref={endInputRef}/>}
                  />
                  <img src={calender} style={{width:'20px', marginLeft:'-15px', position:'relative', marginBottom:'1px'}} alt="calendar"/>
              </div>
          </FlexDiv>

          <Row>
            <Label>학기</Label>
            <RadioWrap>
              <RadioLabel>
                <RadioButton  name="term"
        checked={samester === "1학기"}
        onChange={() => setSamester("1학기")}
      />
                <RadioMark />
                <span>1학기</span>
              </RadioLabel>
              <RadioLabel>
                <RadioButton  name="term"
        checked={samester === "2학기"}
        onChange={() => setSamester("2학기")} />
                <RadioMark />
                <span>2학기</span>
              </RadioLabel>
            </RadioWrap>
          </Row>

          <Row>
            <Label>담당교수</Label>
            <Input defaultValue={project?.profes_name || ""} readOnly/>
          </Row>

          <Row>
            <Label>팀장</Label>
            <Input  value={
      selectedTeamLeader?.mem_name ?? project?.leader_name ?? ""
    }  readOnly/>
            <SearchBtn aria-label="팀장 검색" onClick={openTeamLeaderModal} />
          </Row>

          <Row>
            <Label>팀원</Label>
             <Input
    value={
      selectedTeamMember?.length > 0
        ? selectedTeamMember.map((m) => m.mem_name).join(", ")
        : memberNames.join(", ")
    }
    readOnly
  />
            <SearchBtn aria-label="팀원 검색" onClick={openTeamMemberModal}/>
          </Row>

          <SectionLabel>내용</SectionLabel>
          <Divider />
          <textarea 
  value={stripHtmlTags(projectDesc)}
  onChange={(e) => setProjectDesc(e.target.value)}
  style={{ width: "100%", height: "100px", fontSize:'14px'}}
  readOnly
/>
        </TopContent>
      </TopSection>

      <SectionGap />

      <BottomSection>
        <SubHeader>수정 사유</SubHeader>
        <ReasonArea placeholder = "수정 사유를 입력해주세요."
            value={reason}
            onChange={(e) => setReason(e.target.value)}/>
        <BottomLine />
      </BottomSection>
    </Page>
    )}
    </Overlay>
  );
}