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
  margin-bottom: 14px;
  margin-top: 10px;
`;

/* ===== Card ===== */
const Card = styled.div`
  background: #fff;
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 2px 10px 8px;
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
  gap: 8px;
  margin-right: 10px;
`;

const CardHr = styled.div`
  width: 372px;
  height: 1px;
  background: #D9D9D9;
  border: 0;
  margin: 15px 0 10px;
`;

const AssignBody = styled.div`
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  margin-bottom: 100px;
  margin-left: 10px;
  margin-right: 10px;
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
  margin-top: 40px;
`;

const PrimaryButton = styled(Button)`
  background: #2ec4b6;
  color: #fff;
  border-color: #2ec4b6;
  margin-bottom: 10px;
  margin-top: 40px;
`;

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
  margin-right: 10px;
`;

const Chip = styled.span`
  display: inline-block;
  padding: 4px 9px;
  font-size: 12px;
  line-height: 1;
  border-radius: 999px;
  background: #fff;
  border: 1px solid #e3e7ec;
  color: #8b95a1;
`;

const ChipBrand = styled(Chip)`
  border-color: #2ec4b6;
  color: #1a998d;
`;

const SubmissionText = styled.div`
  font-size: 14px;
  color: #47525b;
  line-height: 1.7;
  margin: 10px 10px 12px;
`;

const Attachment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  margin-bottom: 20px;
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

/* ===== Feedback Section ===== */
const SectionTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  margin: 15px 0 6px;
  color: #707070;
  margin-left: 10px;
  
`;
const SectionDivider = styled.div`
  height: 2px;
  background: #2ec4b6;
  opacity: .6;
  border-radius: 2px;
  margin-bottom: 12px;
`;
const FeedbackHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
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
`;
const FeedbackName = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #374151;
`;
const FeedbackTime = styled.span`
  font-size: 12px;
  color: #98a1a8;
`;
const FeedbackText = styled.div`
  font-size: 14px;
  color: #6b7680;
  line-height: 1.7;
  white-space: pre-line;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;
const Meta = styled.div`
  font-size: 12px;
  color: #98a1a8;
`;
export default function LectureHomeworkDetailFeedback() {
  return (
      <MobileShell>
        <div style={{backgroundColor:'#fff',marginBottom:'12px' ,padding:'1px 20px 0'}}>
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

              <div style={{backgroundColor:'#fff',marginBottom:'10px' ,padding:'1px 20px 15px'}}>
              <Card>
              <PageDivider style={{marginTop: '20px'}}/>
                <SubmissionHead>
                  <SubmissionAuthor>권오규</SubmissionAuthor>
                  <Meta>ㅣ</Meta>
                  <SubmissionTime>제출 시간 : 2025-07-31 23:56</SubmissionTime>
                  <SubmissionActions>
                    <DeleteBtn>삭제</DeleteBtn>
                    <ModifyBtn>수정</ModifyBtn>
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

        <div style={{backgroundColor:'#fff', padding:'1px 20px 24px'}}>
        <SectionTitle>피드백</SectionTitle>
        <SectionDivider />
        <Card>
          <FeedbackHead>
            <Avatar>김</Avatar>
            <FeedbackName>김형민</FeedbackName>
            <Meta>ㅣ</Meta>
            <FeedbackTime>2025-07-31 23:56</FeedbackTime>
          </FeedbackHead>
          <FeedbackText>
            조원 간 역할 분담이 비교적 명확하고, 논리적인 주장 구성도 인상적이었습니다.
            다만, 반론 대응에서 다소 아쉬운 점이 보였습니다.
            다음에는 다양한 관점을 미리 대비해보는 전략도 고려해보면 좋겠습니다.
          </FeedbackText>
        </Card>
        </div>
      </MobileShell>
  );
}