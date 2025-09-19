import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { clip } from "../img";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getRoadMapDetail, getUserSession } from "../api";
import { Avatar, DividerBrand, FbBody, FbBodyWrap, FbHeader, FbMeta, FbName, FbScore, FbTop, ModifyBtn, SectionAction, SectionHead, SectionTitle } from "./ProjectObjectDetailFeedback";
import { useProjectFeedbackModalStore, useProjectFeedbackModifyModalStore } from "../commons/modalStore";

const MobileShell = styled.div`
  width: 100vw;
  padding: 12px 20px 24px;
  background: #fff;
`;

const Crumb = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  color: #6b7680;
  font-weight: 600;
  margin: 2px 0 20px;
`;
const CrumbDim = styled.span`
font-size : 18px;
margin-left: 10px;
`;

const CrumbSep = styled.span`
font-size : 18px;
color:#9aa5b1;
`;

const CrumbAccent = styled.span`
font-size: 14px;
color:#2ec4b6;
`;

const Divider = styled.div`
width: 373px;
  height: 2px;
  background: #2ec4b6;
  border-radius: 2px;
  opacity: .6;
  margin-bottom: 15px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const GrayTag = styled.span`
  font-size: 16px;
  border-radius: 4px;
  background: #f3f5f7;
  color: #8b95a1;
  font-weight: 700;
  margin-left: 10px;
`;
const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #222;
  line-height: 1.5;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #98a1a8;
  margin-top: 6px;
  margin-left: 10px;
`;

const Hr = styled.div`
  width: 372px;
  height: 1px;
  background: #D9D9D9;
  border: 0;
  margin: 12px 0 10px;
`;

const Body = styled.div`
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  white-space: pre-line;
  margin-bottom: 175px;
  margin-left: 10px;
`;

const AttachRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #8b95a1;
  font-size: 13px;
  margin-top: 16px;
  margin-bottom: 15px;
  margin-left: 10px;
`;
const AttachmentIcon = styled.img`
  display: block;
  width: 14px;
  height: 14px;
  background: #fff;
  object-fit: contain;
`;
const FileName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
`;
const Button = styled.button`
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  border: 1px solid #dfe5ea;
  background: #fff;
  color: #59636b;
  border-radius: 8px;
  cursor: pointer;
`;
const Primary = styled(Button)`
  background: #2ec4b6;
  color: #fff;
  border-color: #2ec4b6;
`;

export default function ProjectObjectDetail() {
  const { project_id, rm_id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const memId = new URLSearchParams(location.search).get("memId");
  const [memName, setMemName] = useState('');
  const [roadMap, setRoadMap] = useState(null);
  const [projectList, setProjectList] = useState([]);
  const [evalList, setEvalList] = useState([]);
  const [evalProfessorNames, setEvalProfessorNames] = useState({});
  const { showModal:FeedbackRegist } = useProjectFeedbackModalStore();
  const { showModal:FeedbackModify } = useProjectFeedbackModifyModalStore();
  const user = getUserSession();
  const stripHtmlTags = (html) => html?.replace(/<\/?[^>]+(>|$)/g, "") || "";
  const fetchEvalList = () => {
    if (!rm_id || !memId) return;
    getRoadMapDetail(rm_id, memId)
      .then((data) => {
        setEvalList(data.eval);
        setEvalProfessorNames(data.evalProfessorNames);
      })
      .catch((err) => console.error(err));
  };

  
  useEffect(() => {
    if (!rm_id || !memId) return;

    getRoadMapDetail(rm_id, memId)
      .then((data) => {
        setRoadMap(data.roadMap);
        
        
        setProjectList(data.projectList);
        setEvalList(data.eval);
        setMemName(data.mem_name);
        setEvalProfessorNames(data.evalProfessorNames);
        console.log(data.eval);
      })
      .catch((err) => console.error(err));
      window.refreshProjectTeamList = fetchEvalList;  
  }, [rm_id, memId]);
  
const handleOpenModal = () => {
  FeedbackRegist({
    rm_id: roadMap.rm_id,
    project_id: projectList[0].project_id,
    memId: memId
  });
};
  const handleOpenModifyModal = (eval_id) => {
    FeedbackModify({
      rm_id: roadMap.rm_id,
      project_id: projectList[0].project_id,
      eval_id: eval_id,
      memId: memId
    });
    console.log(eval_id,rm_id);
    
  };
  if (!roadMap) return <MobileShell>등록된 결과물이 없습니다.</MobileShell>;

  return (
    <MobileShell>
      <Crumb>
        <CrumbDim>결과물</CrumbDim>
        <CrumbSep>›</CrumbSep>
        <CrumbAccent>{projectList[0].project_name}</CrumbAccent>
      </Crumb>
      <Divider />

      <TitleRow>
        <GrayTag style={{backgroundColor:'#fff'}}>[{roadMap.rm_category}]</GrayTag>
        <Title>{roadMap.rm_name}</Title>
      </TitleRow>

      <MetaRow>
        <span>{memName}</span>
        <span>ㅣ</span>
        <span>{new Date(roadMap.rm_regdate).toLocaleString()}</span>
      </MetaRow>

      <Hr />

      <Body>{stripHtmlTags(roadMap.rm_content) || "내용이 없습니다."}</Body>

     {roadMap.attachList && roadMap.attachList.length > 0 && (
  <>
    {roadMap.attachList.map((file) => {
      const originalName = file.fileName.includes("$$")
        ? file.fileName.split("$$")[1]
        : file.fileName;

      return (
        <AttachRow key={file.ano}>
          <AttachmentIcon src={clip} />
          <a
            href={`/api/roadmap/getFile?ano=${file.ano}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileName>{originalName}</FileName>
          </a>
        </AttachRow>
      );
    })}
    <Hr />
  </>
)}

      <Footer>
        {user?.mem_auth?.includes("ROLE02") && !evalList.length && (
    <Primary onClick={handleOpenModal}>
      평가하기
    </Primary>
  )}


        <Button onClick={() => navigate(-1)}>목록</Button>
      </Footer>
      <SectionHead>
  <SectionTitle>피드백</SectionTitle>
  <SectionAction>
     {user?.mem_auth?.includes("ROLE02") && evalList.length > 0 && (
    <ModifyBtn onClick={() => handleOpenModifyModal(evalList[0].eval_id)}>
      수정
    </ModifyBtn>
  )}
  </SectionAction>
</SectionHead>
<DividerBrand />

{evalList.length > 0 ? (
  evalList.map((evalItem) => (
    <React.Fragment key={evalItem.eval_id}>
      <FbHeader>
        <Avatar >
          <img src = {`http://localhost:8081/campus/member/getPicture?id=${evalItem.profes_id}`} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%'}}/>
        </Avatar>
        <FbMeta>
          <FbTop>
            <FbName>{evalProfessorNames[evalItem.profes_id] || evalItem.profes_id}</FbName>
            <FbScore>| 평가 점수 : {evalItem.eval_score}</FbScore>
          </FbTop>
        </FbMeta>
      </FbHeader>

      <FbBodyWrap>
        <FbBody>{evalItem.eval_content}</FbBody>
      </FbBodyWrap>
    </React.Fragment>
  ))
) : (
  <Body>등록된 피드백이 없습니다.</Body>
)}
    </MobileShell>
  );
}