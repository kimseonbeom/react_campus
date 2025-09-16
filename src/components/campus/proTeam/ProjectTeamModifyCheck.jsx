import React, { useRef, useState, forwardRef, useEffect } from "react";
import styled from "styled-components";
import DOMPurify from "dompurify";
import { Cancle } from "../img";
import { useProjectTeamModifyCheckModalStore } from "../commons/modalStore";
import { getModifyCheck, modifyProjectTeamCheck } from "../api";
import { Overlay } from "../proObject/ProjectObjectFeedback";

// ------------------ 스타일 ------------------
const Page = styled.div`width: 412px; margin: 0 auto; font-family: 'Noto Sans KR','Noto Sans',sans-serif;`;
const Container = styled.div`display: flex; justify-content: space-between; align-items: center; padding: 0 16px; height: 56px; background: #fff; box-sizing: border-box;`;
const ExitButton = styled.button`width: 28px; height: 28px; background: url(${Cancle}) center / 24px 24px no-repeat transparent; border: none; cursor: pointer;`;
const Button = styled.button`padding: 4px 12px; border-radius: 5px; font-weight: 500; border: none; cursor: pointer; background-color: ${({ bg }) => bg || "#2EC4B6"}; color: #fff; margin-left: ${({ ml }) => ml || "0"};`;
const Section = styled.div`background: #fff;`;
const SectionInner = styled.div`padding: 16px; box-sizing: border-box;`;
const Row = styled.div`display: flex; align-items: center; gap: 8px; margin-bottom: 10px;`;
const Label = styled.div`width: 72px; font-size: 13px; font-weight: 600; color: #3b3b3b;`;
const EditBox = styled.div`flex: 1; border: 1px solid #CED4DA; border-radius: 5px; background-color: #E9ECEF; height: 34px; display: flex; align-items: center; padding: 0 8px;`;
const BeforeText = styled.span`color: #B7B7B7; text-decoration: line-through; margin-right: 10px; font-size: 13px;`;
const AfterText = styled.span`font-size: 13px; color: #333;`;
const BodyText = styled.textarea`width: 100%; height: ${({ h }) => h}px; border: 0; resize: none; outline: none; font-size: 13px; color: #606060; background: transparent;`;
const TestDiv = styled.div`width: 100%; border: 1px solid #bdbdbd; border-radius: 5px; height: 80px; background-color: #e9ecef; padding: 5px 10px; font-size: 13px; color: #606060;`;
const SubHeader = styled.div`font-size: 14px; font-weight: 600; color: #444; padding-bottom: 8px; border-bottom: 2px solid #2EC4B6;`;
const Gap = styled.div`height: 12px; background: #f3f3f3;`;
const BottomLine = styled.div`height: 1px; background: #e5e5e5; margin-top: 14px;`;

// ------------------ 유틸 ------------------
const formatMembers = (members) => {
  if (!members) return "";
  if (Array.isArray(members)) return members.join(", ");
  return members;
};
const formatDate = (d) => (d ? new Date(d).toISOString().slice(0, 10) : "");
const stripHtmlTags = (html) => html?.replace(/<\/?[^>]+(>|$)/g, "") || "";

// ------------------ 컴포넌트 ------------------
export default function ProjectTeamModifyCheck() {
  const [loading, setLoading] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const [editList, setEditList] = useState([]);
  const { visible, hideModal, project_id } = useProjectTeamModifyCheckModalStore();

  useEffect(() => {
    if (!visible || !project_id) return;

    const fetchModifyCheck = async () => {
      try {
        const res = await getModifyCheck(project_id);
        const { projectList, editList } = res.data;
        setProjectData(projectList?.[0] || null);
        setEditList(editList || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchModifyCheck();
  }, [visible, project_id]);

  if (!visible) return null;
  const edit = editList?.[0];
  if (!projectData || !edit) return null;

  // ------------------ 승인 처리 ------------------
  const handleApprove = async () => {
    setLoading(true);
    try {
      const payload = {
        project: {
          project_id: edit.project_id,
          project_name: edit.project_name || projectData.project_name,
          project_stdate: edit.project_stdate || projectData.project_stdate,
          project_endate: edit.project_endate || projectData.project_endate,
          profes_id: projectData.profes_id,
          team_id: projectData.team_id,
          project_desc: projectData.project_desc
        },
        team: {
          team_id: projectData.team_id,
          team_leader: edit.team_leader || projectData.team_leader
        },
        team_member_ids: edit.team_member_ids || [], // 배열
        before_id: edit.before_id,
        edit_content: edit.edit_content
      };
      const res = await modifyProjectTeamCheck(payload);
      if (res.data.status === "success") {
        alert("프로젝트 수정 승인 완료");
        hideModal();
      } else {
        alert("승인 처리 실패");
      }
    } catch (err) {
      console.error(err);
      alert("승인 처리 실패");
    } finally {
      setLoading(false);
    }
  };

  // ------------------ 거부 처리 ------------------
  const handleReject = async () => {
    setLoading(true);
    try {
      const payload = {
        project: projectData,
        team: { team_id: projectData.team_id, team_leader: projectData.team_leader },
        team_member_ids: [],
        before_id: edit.before_id
      };
      await modifyProjectTeamCheck(payload);
      alert("수정 거부 완료");
      hideModal();
    } catch (err) {
      console.error(err);
      alert("거부 처리 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Overlay>
      <Page>
        <Container>
          <ExitButton onClick={hideModal} />
          <div style={{ display: "flex" }}>
            <Button bg="#aaa" onClick={handleReject} disabled={loading}>거부</Button>
            <Button ml="8px" onClick={handleApprove} disabled={loading}>승인</Button>
          </div>
        </Container>

        <Section>
          <SectionInner>
            <Row><Label>프로젝트명</Label>
              <EditBox>
                {edit.project_name !== projectData.project_name && <BeforeText>{projectData.project_name}</BeforeText>}
                <AfterText>{edit.project_name || projectData.project_name}</AfterText>
              </EditBox>
            </Row>

            <Row><Label>시작일</Label>
              <EditBox>
                {formatDate(edit.project_stdate) !== formatDate(projectData.project_stdate) && <BeforeText>{formatDate(projectData.project_stdate)}</BeforeText>}
                <AfterText>{formatDate(edit.project_stdate) || formatDate(projectData.project_stdate)}</AfterText>
              </EditBox>
            </Row>

            <Row><Label>마감일</Label>
              <EditBox>
                {formatDate(edit.project_endate) !== formatDate(projectData.project_endate) && <BeforeText>{formatDate(projectData.project_endate)}</BeforeText>}
                <AfterText>{formatDate(edit.project_endate) || formatDate(projectData.project_endate)}</AfterText>
              </EditBox>
            </Row>

            <Row><Label>학기</Label>
              <EditBox>
                {edit.samester !== projectData.samester && <BeforeText>{projectData.samester}</BeforeText>}
                <AfterText>{edit.samester || projectData.samester}</AfterText>
              </EditBox>
            </Row>

            <Row><Label>담당교수</Label>
              <EditBox><AfterText>{projectData.profes_name}</AfterText></EditBox>
            </Row>

            <Row><Label>팀장</Label>
              <EditBox>
                {edit.leader_name !== projectData.leader_name && <BeforeText>{projectData.leader_name}</BeforeText>}
                <AfterText>{edit.leader_name || projectData.leader_name}</AfterText>
              </EditBox>
            </Row>

            <Row><Label>팀원</Label>
              <EditBox>
                {formatMembers(edit.team_member_names) !== projectData.mem_name?.join(', ') && <BeforeText>{formatMembers(projectData.mem_name)}</BeforeText>}
                <AfterText>{formatMembers(edit.team_member_names) || formatMembers(projectData.mem_name)}</AfterText>
              </EditBox>
            </Row>

            <Label>내용</Label>
            <TestDiv>{stripHtmlTags(projectData.project_desc)}</TestDiv>
          </SectionInner>
        </Section>

        <Gap />

        <Section>
          <SectionInner>
            <SubHeader>수정 사유</SubHeader>
            <BodyText h={149} value={edit.edit_content || ""} readOnly />
            <BottomLine />
          </SectionInner>
        </Section>
      </Page>
    </Overlay>
  );
}
