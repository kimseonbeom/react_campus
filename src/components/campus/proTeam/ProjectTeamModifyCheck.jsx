import React, { useRef, useState, forwardRef, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DOMPurify from 'dompurify';
import { Cancle, calender, searchbtn, radioCheck } from "../img";
import { useProjectTeamModifyCheckModalStore } from "../commons/modalStore";
import { getModifyCheck, modifyProjectTeamCheck } from "../api";
import { Overlay } from "../proObject/ProjectObjectFeedback";

// ------------------ 스타일 ------------------
const Page = styled.div`
  width: 412px;
  margin: 0 auto;
  font-family: 'Noto Sans KR','Noto Sans',sans-serif;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 56px;
  background: #fff;
  box-sizing: border-box;
`;

const ExitButton = styled.button`
  width: 28px;
  height: 28px;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 4px 12px;
  border-radius: 5px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background-color: ${({ bg }) => bg || "#2EC4B6"};
  color: #fff;
  margin-left: ${({ ml }) => ml || "0"};
`;

const Section = styled.div` background: #fff; `;
const SectionInner = styled.div` padding: 16px; box-sizing: border-box; `;
const Row = styled.div` display: flex; align-items: center; gap: 8px; margin-bottom: 10px; `;
const Label = styled.div` width: 72px; font-size: 13px; font-weight: 600; color: #3b3b3b; `;

const EditBox = styled.div`
  flex: 1;
  border: 1px solid #CED4DA;
  border-radius: 5px;
  background-color: #E9ECEF;
  height: 34px;
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

const BeforeText = styled.span`
  color: #B7B7B7;
  text-decoration: line-through;
  margin-right: 10px;
  font-size: 13px;
`;

const AfterText = styled.span`
  font-size: 13px;
  color: #333;
`;

const BodyText = styled.textarea`
  width: 100%;
  height: ${({ h }) => h}px;
  border: 0; resize: none; outline: none;
  font-size: 13px; color: #606060; background: transparent;
`;
const TestDiv = styled.div`
  width: 100%;
  border: 0; resize: none; outline: none;
  font-size: 13px; color: #606060; background: transparent;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  height: 80px;
  background-color: #e9ecef;
  padding: 5px 10px;
;
`
const SubHeader = styled.div`
  font-size: 14px; font-weight: 600; color: #444;
  padding-bottom: 8px; border-bottom: 2px solid #2EC4B6;
`;

const Gap = styled.div` height: 12px; background: #f3f3f3; `;
const BottomLine = styled.div` height: 1px; background: #e5e5e5; margin-top: 14px; `;

const DPInput = forwardRef(({ value, onClick, placeholder }, ref) => (
  <input
    ref={ref}
    value={value || ""}
    onClick={onClick}
    placeholder={placeholder || "YYYY-MM-DD"}
    readOnly
    style={{
      width: "100%",
      height: "34px",
      border: "1px solid #d6d6d6",
      borderRadius: "5px",
      padding: "0 10px",
      fontSize: "13px",
      color: "#333",
      background: "#fff",
      cursor: "pointer",
    }}
  />
));
const formatMembers = (members) => {
  if (!members) return "";
  if (Array.isArray(members)) return members.join(', ');
  return members; // 이미 문자열이면 그대로 반환
};
// ------------------ 유틸 ------------------
const formatDate = (d) => d ? new Date(d).toISOString().slice(0,10) : '';
const stripHtmlTags = (html) => html?.replace(/<\/?[^>]+(>|$)/g, "") || "";
// ------------------ 컴포넌트 ------------------
// ...import, styled 정의는 그대로

export default function ProjectTeamModifyCheck() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const [editList, setEditList] = useState([]);

  const { visible, hideModal, project_id } = useProjectTeamModifyCheckModalStore();

  const fetchModifyCheck = async (project_id) => {
    try {
      const res = await getModifyCheck(project_id);
      const { projectList, editList } = res.data;
      const project = projectList?.[0] || null;
      setProjectData(project);
      setEditList(editList || []);
      if (project) {
        setStartDate(project.project_stdate ? new Date(project.project_stdate) : null);
        setEndDate(project.project_endate ? new Date(project.project_endate) : null);
      }
    } catch (err) {
      console.error(err);
    }
  };

 const handleApprove = async () => {
  if (!projectData || !edit) return;
  setLoading(true);

  try {
    // team_member_ids 문자열 → 배열 처리
    const teamMemberIds = edit.team_member_ids.split(',').map(id => id.trim());

// 문자열로 합치지 말고 개별 ID 그대로 배열 유지
const payload = {
  project: {
    ...projectData,
    ...edit,
    team_id: edit.team_id || projectData.team_id,
  },
  team: {
    ...projectData.team,
    ...(edit.team || {}),
    team_id: edit.team_id || projectData.team?.team_id,
    team_leader: edit.team_leader || projectData.team_leader,
  },
  team_member_ids: teamMemberIds, // 배열 그대로
  before_id: edit.before_id,
};

    console.log("승인 요청 payload:", payload);

    const res = await modifyProjectTeamCheck(payload);
    if (res.data.status === "success") {
      alert("프로젝트 수정 승인 완료");
      if (typeof window.refreshProjectTeamList === "function") {
        window.refreshProjectTeamList();
      }
      hideModal();
    }
  } catch (err) {
    console.error("승인 처리 실패:", err);
    alert("승인 처리 실패");
  } finally {
    setLoading(false);
  }
};





  const handleReject = async () => {
    if (!editList?.length) return;
    setLoading(true);
    try {
      const edit = editList[0];
      await modifyProjectTeamCheck({
        project: null,
        team: null,
        team_member_ids: [],
        before_id: edit.before_id
      });
      alert("수정 거부 완료");
      hideModal();
    } catch (err) {
      console.error(err);
      alert("거부 처리 실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (visible && project_id) fetchModifyCheck(project_id);
  }, [visible, project_id]);

  if (!visible) return null;

  const edit = editList?.[0] || {};

  return (
    <Overlay>
      <Page>
        <Container>
          <ExitButton onClick={hideModal} style={{ marginTop: '10px' }} />
          <div style={{ display: "flex", marginTop: '10px' }}>
            <Button bg="#aaa" onClick={handleReject} disabled={loading}>거부</Button>
            <Button ml="8px" onClick={handleApprove} disabled={loading}>승인</Button>
          </div>
        </Container>

        <Section>
          <SectionInner>
            {/* 프로젝트명 */}
            <Row>
              <Label>프로젝트명</Label>
              <EditBox>
                {edit.project_name !== projectData?.project_name && (
                  <BeforeText>{projectData?.project_name}</BeforeText>
                )}
                <AfterText>{edit.project_name || projectData?.project_name}</AfterText>
              </EditBox>
            </Row>

            {/* 시작일 */}
            <Row>
              <Label>시작일</Label>
              <EditBox>
                {formatDate(edit.project_stdate) !== formatDate(projectData?.project_stdate) && (
                  <BeforeText>{formatDate(projectData?.project_stdate)}</BeforeText>
                )}
                <AfterText>{formatDate(edit.project_stdate) || formatDate(projectData?.project_stdate)}</AfterText>
              </EditBox>
            </Row>

            {/* 마감일 */}
            <Row>
              <Label>마감일</Label>
              <EditBox>
                {formatDate(edit.project_endate) !== formatDate(projectData?.project_endate) && (
                  <BeforeText>{formatDate(projectData?.project_endate)}</BeforeText>
                )}
                <AfterText>{formatDate(edit.project_endate) || formatDate(projectData?.project_endate)}</AfterText>
              </EditBox>
            </Row>

            {/* 학기 */}
            <Row>
              <Label>학기</Label>
              <EditBox>
                {edit.samester !== projectData?.samester && (
                  <BeforeText>{projectData?.samester}</BeforeText>
                )}
                <AfterText>{edit.samester || projectData?.samester}</AfterText>
              </EditBox>
            </Row>

            {/* 담당교수 */}
            <Row>
              <Label>담당교수</Label>
              <EditBox>
                <AfterText>{projectData?.profes_name}</AfterText>
              </EditBox>
            </Row>

            {/* 팀장 */}
            <Row>
              <Label>팀장</Label>
              <EditBox>
                {edit.leader_name !== projectData?.leader_name && (
                  <BeforeText>{projectData?.leader_name}</BeforeText>
                )}
                <AfterText>{edit.leader_name || projectData?.leader_name}</AfterText>
              </EditBox>
            </Row>

            {/* 팀원 */}
            <Row>
              <Label>팀원</Label>
              <EditBox>
                {formatMembers(edit.team_member_names) !== projectData?.mem_name?.join(', ') && (
                  <BeforeText>{formatMembers(projectData?.mem_name)}</BeforeText>
                )}
                <AfterText>{formatMembers(edit.team_member_names) || formatMembers(projectData?.mem_name)}</AfterText>
              </EditBox>
            </Row>

            {/* 내용 */}
            <Label>내용</Label>
            <TestDiv>
              <BeforeText>{stripHtmlTags(projectData?.project_desc)}</BeforeText>
              <AfterText></AfterText>
            </TestDiv>
          </SectionInner>
        </Section>

        <Gap />

        <Section>
          <SectionInner>
            <SubHeader>수정 사유</SubHeader>
            <BodyText h={149} value={edit.edit_content || ''} readOnly />
            <BottomLine />
          </SectionInner>
        </Section>
      </Page>
    </Overlay>
  );
}
