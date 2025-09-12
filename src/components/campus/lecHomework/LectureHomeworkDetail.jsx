import React from "react";
import styled from "styled-components";
import { clip } from "../img";


const MobileShell = styled.div`
  width: 100vw;
  background: #f7f7f7;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0 10px;
`;

const PageTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
`;

const TopActions = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
`;

const DeleteBtn = styled.button`
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  border: 1px solid #dfe5ea;
  background: #fff;
  color: #59636b;
  border-radius: 5px;
  cursor: pointer;
`;

const ModifyBtn = styled.button`
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  border: 1px solid #2EC4B6;
  background: #2EC4B6;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;


const PageDivider = styled.div`
  height: 2px;
  background: #2ec4b6;
  opacity: .6;
  border-radius: 2px;
  margin-top: 18px;
  margin-bottom: 14px;
`;

/* ===== Card ===== */
const Card = styled.div`
  background: #fff;
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

const CardFooter = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
  gap: 2px;
`;

const CardHr = styled.div`
  width: 372px;
  height: 1px;
  background: #D9D9D9;
  border: 0;
  margin: 12px 0 10px;
`;

const AssignBody = styled.div`
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  margin-bottom: 100px;
  margin-left: 10px;
  margin-right: 10px;
`;

/* ===== Buttons ===== */
const Button = styled.button`
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  border: 1px solid #dfe5ea;
  background: #fff;
  color: #59636b;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 40px;
  margin-right: 10px;
`;

const PrimaryButton = styled(Button)`
  background: #2ec4b6;
  color: #fff;
  border-color: #2ec4b6;
  margin-bottom: 10px;
  margin-top: 40px;
`;

/* ===== Submission ===== */
const SubmissionHead = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
`;

export const SubmissionAuthor = styled.span`
  white-space: nowrap;
  font-size: 13px;
  margin-left: 10px;
`;

const SubmissionTime = styled.span`
  white-space: nowrap;
  font-size: 12px;
  color: #98a1a8;
`;

const SubmissionActions = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
  white-space: nowrap;
`;

const Chip = styled.span`
  display: inline-block;
  padding: 4px 9px;
  font-size: 12px;
  line-height: 1;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #e3e7ec;
  color: #8b95a1;
`;

const ChipBrand = styled(Chip)`
  border-color: #2ec4b6;
  color: #1a998d;
  margin-right: 10px;
`;

const SubmissionText = styled.div`
  font-size: 14px;
  color: #47525b;
  line-height: 1.7;
  margin: 10px 0 12px;
  margin-left: 10px;
`;

const Attachment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  margin-left: 10px;
`;

const AttachmentIcon = styled.img`
  display: block;
  width: 14px;
  height: 14px;
  background: #fff;
  object-fit: contain;
`;

const AttachmentName = styled.div`
  font-size: 13px;
  color: #444;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Line = styled.div`
  width: 100%;
  height: 12px; 
  color: #666666;
`;

const Meta = styled.div`
  font-size: 12px;
  color: #98a1a8;
`;

export default function LectureHomeworkDetail() {
  return (
      <MobileShell>
        <div style={{padding: '5px 20px 24px', backgroundColor:'#fff'}}>
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
            <br />
            팀원 간 역할 분담 (서론/논점 정리, 주장, 반론 대응 등) 필수
            <br />
            토론 직후 개인별로 간단한 자기평가서(자유양식, A4 1장 내외) 제출
          </AssignBody>
          <CardHr />
          <CardFooter>
            <PrimaryButton>제출</PrimaryButton>
            <Button>목록</Button>
          </CardFooter>
        </Card>
        </div>

        <div style={{padding: '1px 20px 24px', backgroundColor:'#fff', marginTop:'20px'}}>
        <PageDivider />
        <Card>
          <SubmissionHead>
            <SubmissionAuthor>권오규</SubmissionAuthor>
            <Meta>ㅣ</Meta>
            <SubmissionTime>제출 시간 : 2025-07-31 23:56</SubmissionTime>
            <SubmissionActions>
              <Chip>삭제</Chip>
              <ChipBrand>수정</ChipBrand>
            </SubmissionActions>
          </SubmissionHead>

          <SubmissionText>
            안녕하세요. 20220001 권오규입니다. 과제 제출합니다.
          </SubmissionText>
          <CardHr />
          <Attachment>
            <AttachmentIcon src={clip}/>
            <AttachmentName>자바프로그래밍 권오규 7주차.hwp</AttachmentName>
          </Attachment>
        </Card>
        </div>
      </MobileShell>
  );
}