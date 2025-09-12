import React from "react";
import styled from "styled-components";
import { clip } from "../img";

const MobileShell = styled.div`
  width: 100%;
  background: #f7f7f7;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
`;
const PageTitle = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
  margin-left: 10px;
`;
const TopActions = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
  margin-right: 10px;
`;
const DeleteBtn = styled.button`
  width: 50px;
  height: 26px;
  padding: 0 12px;
  font-size: 12px;
  border: none;
  background: #BEBEBE;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 8px;
`;

const ModifyBtn = styled.button`
  width: 50px;
  height: 26px;
  padding: 0 12px;
  font-size: 12px;
  border: none;
  background: #2EC4B6;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const PageDivider = styled.div`
  height: 2px;
  background: #2ec4b6;
  opacity: .6;
  border-radius: 2px;
  margin-bottom: 15px;
`;

const Card = styled.div`
  background: #fff;
  & + & {
    position: relative;
    margin-top: 20px;
  }
  & + &::before {
    content: "";
    position: absolute;
    left: 0; right: 0; top: -12px;
    height: 2px;
    background: #2ec4b6;
    border-radius: 2px;
  }
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 2px 0 8px;
  margin-left: 10px;
`;
const CardMeta = styled.div`
  font-size: 12px;
  color: #98a1a8;
  margin-left: 10px;
`;
const CardHr = styled.div`
  width: 372px;
  height: 1px;
  background: #D9D9D9;
  border: 0;
  margin: 16px 0 15px;
`;
const AssignBody = styled.div`
  font-size: 14px;
  color: #6b7680;
  line-height: 1.7;
  margin-bottom: 100px;
  margin-left: 10px;
  margin-right: 10px;
`;

const CardFooter = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
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
  margin-right: 10px;
`;

/* ===== Section Header ===== */
const SectionTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  margin: 15px 10px 6px;
`;
const SectionDivider = styled.div`
  height: 2px;
  background: #2ec4b6;
  opacity: .6;
  border-radius: 2px;
  margin-bottom: 10px;
`;

/* ===== Submission list (학생 제출 목록) ===== */
const List = styled.div`
margin-left: 10px;
`;

const Row = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 10px 0;
  display: grid;
  grid-template-columns: 36px 1fr 16px;
  gap: 10px;
  cursor: pointer;
  &:not(:first-child){
    border-top: 1px solid #eceff1;
  }
  align-items: center;
`;
const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f2f4f6;
  border: 1px solid #e3e7ec;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #6b7680;
  overflow: hidden;
`;
const AttachmentIcon = styled.img`
  display: block;
  width: 14px;
  height: 14px;
  background: #fff;
  object-fit: contain;
  margin-right: 10px;
`;
const AvImg = styled.img`
  width: 100%; height: 100%; object-fit: cover;
`;
const RowMain = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;
const RowTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #374151;
`;
const Time = styled.span`
  font-size: 12px;
  color: #98a1a8;
`;
const Text = styled.div`
  font-size: 13px;
  color: #6b7680;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Meta = styled.div`
  font-size: 12px;
  color: #98a1a8;
`;

export default function LectureHomeworkProDetail() {
  const submissions = [
    {
      id: 1,
      name: "김민주",
      time: "2025-08-31 14:20",
      text: "안녕하세요. 교수님 과제 제출합니다.",
      clip: true,
      avatar: "/img/avatar1.png", 
    },
    {
      id: 2,
      name: "김선범",
      time: "2025-08-30 22:49",
      text: "안녕하세요. 20170102 김선범 입니다. 과제 제출합니다.",
      clip: true,
      avatar: "/img/avatar2.png",
    },
    {
      id: 3,
      name: "김원희",
      time: "2025-08-29 23:12",
      text: "과제 제출합니다.",
      clip: true,
      avatar: "/img/avatar3.png",
    },
    {
      id: 4,
      name: "권오규",
      time: "2025-08-29 21:49",
      text: "교수님 안녕하세요! 20171339 권오규입니다! 10주차 과제 제출합니다.",
      clip: true,
      avatar: "/img/avatar4.png",
    },
  ];

  const openSubmission = (row) => {
    alert(`${row.name} 제출물 열기`);
  };

  return (
      <MobileShell>
        <div style={{backgroundColor:'#fff',marginBottom:'12px' ,padding:'1px 20px 24px'}}>
        <TopBar>
          <PageTitle>과제제출</PageTitle>
          <TopActions>
            <DeleteBtn>삭제</DeleteBtn>
            <ModifyBtn>수정</ModifyBtn>
          </TopActions>
        </TopBar>
        <PageDivider />

        <Card>
          <CardTitle>7주차 과제 입니다.</CardTitle>
          <CardMeta>2025-08-05 16:00 ~ 2025-08-11 23:59</CardMeta>
          <CardHr />
          <AssignBody>
            각 조는 택 1 주제를 선택하여 찬성/반대 중 하나의 입장을 정하고,
            논리적 근거를 바탕으로 토론 준비
            <br />팀원 간 역할 분담 (서론/논점 정리, 주장, 반론 대응 등) 필수
            <br />토론 직후 개인별로 간단한 자기평가서(자유양식, A4 1장 내외) 제출
          </AssignBody>
          <CardHr />
          <CardFooter>
            <Button>목록</Button>
          </CardFooter>
        </Card>
        </div>
        <div style={{backgroundColor:'#fff', padding:'1px 20px 24px'}}>
        <SectionTitle>제출 과제</SectionTitle>
        <SectionDivider />
        <Card>
          <List>
            {submissions.map((s) => (
              <Row key={s.id} onClick={() => openSubmission(s)}>
                <Avatar>
                  {s.avatar ? <AvImg src={s.avatar} alt={s.name} /> : s.name[0]}
                </Avatar>
                <RowMain>
                  <RowTop>
                    <Name>{s.name}</Name>
                    <Meta>ㅣ</Meta>
                    <Time>{s.time}</Time>
                  </RowTop>
                  <Text>
                    {s.text}
                  </Text>
                </RowMain>
                <AttachmentIcon src={clip}/>
              </Row>
            ))}
          </List>
        </Card>
        </div>
      </MobileShell>
  );
}