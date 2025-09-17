import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../topNav/TopNav";
import { Cancle } from "../img";
import { Overlay } from "../proObject/ProjectObjectFeedback";
import { useProjectDetailModalStore, useToastStore } from "../commons/modalStore";
import { ExitButton } from "../lecAtten/AttandanceModal";
import { getProjectDetail, removeTeam } from "../api";
import Toast from "../commons/Toast";

const MobileShell = styled.div`
  width: 100vw;
  background: #fff;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 20px;
`;
const CloseBtn = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #e1e7ec;
  background: #fff;
  color: #5f6b72;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1;
  margin-left: 10px;
`;

const TitleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 좌우 끝으로 */
  margin: 0 0 6px;
  gap: 8px;
`;

const Semester = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #6b7680;
  margin-left: 10px;
`;

const HeaderTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #888;
  text-align: right;
  flex: 1;         /* 오른쪽으로 밀착되게 */
  min-width: 0;    /* ellipsis 동작 보장 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 10px;
`;

const PageDivider = styled.div`
  height: 2px;
  background: #2ec4b6;
  opacity: .6;
  border-radius: 2px;
  margin-bottom: 14px;
`;

const Card = styled.div`
  background: #fff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  row-gap: 12px;
  column-gap: 8px;
  margin-left: 10px;
`;
const Label = styled.div`
  font-size: 13px;
  color: #6b7680;
  font-weight: 700;
`;
const Value = styled.div`
  font-size: 13px;
  color: #4b5563;
`;

const Body = styled.div`
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  white-space: pre-line;
`;

const SoftDivider = styled.div`
  width: 372px;
  height: 1px;
  background: #D9D9D9;
  border: 0;
  margin: 16px 0 16px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  border: 1px solid #dfe5ea;
  background: #777777;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
`;

export default function ProjectTeamDetail() {
 
  const { visible, hideModal, project_id } = useProjectDetailModalStore();
  const [detail, setDetail] = useState(null);
  const { showToast } = useToastStore();
  useEffect(() => {
  if (!project_id) return;

  getProjectDetail(project_id)
    .then(res => {
      const project = res.data.projectList.find(p => p.project_id === project_id);

      setDetail({
        ...project,
        team_members: project.mem_name || []
      });
    })
    .catch(err => console.error(err));
}, [project_id]);
const formatDate = (timestamp) => {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};
  if (!visible) return null;
  if (!detail) return null;
  return (
    <Overlay>
      <MobileShell>
        <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <ExitButton style={{width:'19px', height:'19px', margin:'0'}} onClick={hideModal}>
            <img src={Cancle} style={{ width: '19px', height: '19px' }} />
          </ExitButton>
        </Container>

        <div style={{padding: '12px 20px 24px'}}>
          <TitleHeader>
            <Semester>{detail.samester}</Semester>
            <HeaderTitle>{detail.project_name}</HeaderTitle>
          </TitleHeader>

          <PageDivider />

          <Card>
            <Grid>
              <Label>기간</Label>
             <Value>{formatDate(detail.project_stdate)} ~ {formatDate(detail.project_endate)}</Value>

              <Label>담당교수</Label>
              <Value>{detail.profes_name}</Value>

              <Label>팀장</Label>
              <Value>{detail.leader_name}</Value>

              <Label>팀원</Label>
              <Value>{detail.team_members?.join(", ")}</Value>

              <Label>내용</Label>
              <Value>
                <Body style={{ minHeight: "100px" }}>{detail.project_desc}</Body>
              </Value>
            </Grid>

            <SoftDivider />

            <Footer>
              <Button
  onClick={() => {
    removeTeam(detail.team_id)
      .then(() => {
        showToast("팀이 삭제되었습니다."); // 여기서 상태 기반 호출
        hideModal();
        if (typeof window.refreshProjectTeamList === "function") {
          window.refreshProjectTeamList();
        }
      })
      .catch(err => console.error(err));
  }}
>
                삭제
              </Button>
            </Footer>
          </Card>
        </div>
      </MobileShell>
    </Overlay>
  );
}