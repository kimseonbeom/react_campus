import React from "react";
import styled from "styled-components";
import { clip } from "../img";
import { Title } from "../commons/WHComponent";

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
  background: #2EC4B6;
  margin-bottom: 13px;
`;

const Card = styled.div`
  background: #fff;
`;
const CardHead = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px;
  line-height: 1.4;
  margin-left: 10px;
`;
const Meta = styled.div`
  font-size: 12px;
  color: #98a1a8;
  margin-bottom: 12px;
  margin-left: 10px;
`;
const BodyText = styled.div`
  font-size: 14px;
  color: #6b7680;
  line-height: 1.7;
  margin-bottom: 14px;
  white-space: pre-line;
  margin-bottom: 100px;
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

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  width: 50px;
  height: 26px;
  padding: 0 12px;
  font-size: 12px;
  border: 1px solid #aaa;
  background: #fff;
  color: #aaa;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;

const CommentSection = styled.div`
  margin-top: 18px;
`;
const CommentCount = styled.div`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #707070;
  margin-left: 10px;
`;
const CommentCard = styled.div`
  background: #fff;
  margin-left: 10px;
`;
const CommentHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  font-size: 12px;
  color: #98a1a8;
`;
const CommentName = styled.span`
  font-weight: 600;
  color: #333;
  margin-right: 6px;
  font-size: 14px;
`;
const CommentTime = styled.span`
  margin-left: auto;
`;
const CommentBody = styled.div`
  font-size: 13px;
  color: #444;
  margin-bottom: 8px;
`;
const CommentActions = styled.div`
  margin-left: auto;
  display: flex;
  gap: 6px;
  margin-right: 10px;
`;
const SmallBtn = styled.button`
  font-size: 11px;
  border: 1px solid #dfe5ea;
  background: #fff;
  color: #59636b;
  border-radius: 6px;
  padding: 2px 6px;
  cursor: pointer;
`;
const EditBtn = styled(SmallBtn)`
  border-color: #2ec4b6;
  color: #2ec4b6;
`;

/* ===== Comment Input ===== */
const CommentInputWrap = styled.div`
  background: #fff;
  border: 1px solid #e9eef2;
  padding: 10px 12px;
`;
const Input = styled.textarea`
  width: 100%;
  border: none;
  font-size: 13px;
  resize: none;
  outline: none;
  color: #444;
  margin-bottom: 10px;
  margin-top: 2px;
`;
const SubmitWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const SubmitBtn = styled.button`
  background: #2ec4b6;
  border: none;
  color: #fff;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
`;
const CardHr = styled.div`
  width: 372px;
  height: 1px;
  background: #D9D9D9;
  border: 0;
  margin: 15px 0 15px;
`;
const Line = styled.div`
  width: 372px;
  height: 12px;
  color: #444444;
  margin-top: 20px;
`
const GrayBar = styled.div`
  width: 412px;
  height: 20px;
  background-color: #f7f7f7;
  margin: 0;
  top: 490px;
  left: 0;
  position: absolute;
  z-index: 999;
`


export default function BoardDetail() {
  return (
      <MobileShell>
        <div style={{padding: '5px 20px 24px', backgroundColor:'#fff'}}>
        <TopBar>
          <PageTitle>게시판</PageTitle>
          <TopActions>
            <DeleteBtn>삭제</DeleteBtn>
            <ModifyBtn>수정</ModifyBtn>
          </TopActions>
        </TopBar>
        <PageDivider />

        <Card>
          <CardHead>[자유] 주변 가공할만한 카페 있을까요</CardHead>
          <Meta>권오규 ｜ 2025-09-01</Meta>
          <CardHr/>
          <BodyText>
            이제 진짜 열심히 공부해보려고 하는데 주변 괜찮은 카페 추천해주세요{"\n\n"}
            제목 맛집도 ㅋㅋ
          </BodyText>
          <CardHr/>
          <Attachment>
          <AttachmentIcon src={clip}/>
          <AttachmentName>자료.pdf</AttachmentName>
          </Attachment>
          <CardFooter>
            <Button>목록</Button>
          </CardFooter>
        </Card>
        </div>

        <div style={{padding: '1px 20px 24px', backgroundColor:'#fff', marginTop:'20px'}}>
        <CommentSection>
          <CommentCount>댓글 3</CommentCount>
          <PageDivider />
          <CommentCard>
            <CommentHead>
              <CommentName>김선범</CommentName>
              <span>｜ 2025-09-01 13:42</span>
              <CommentActions>
                <DeleteBtn>삭제</DeleteBtn>
                <ModifyBtn>수정</ModifyBtn>
              </CommentActions>
            </CommentHead>
            <CommentBody>제육 곱빼기 드시나요?</CommentBody>
          </CommentCard>
<CardHr/>
          <CommentCard>
            <CommentHead>
              <CommentName>김민주</CommentName>
              <span>｜ 2025-09-01 13:42</span>
              <CommentActions>
                <DeleteBtn>삭제</DeleteBtn>
                <ModifyBtn>수정</ModifyBtn>
              </CommentActions>
            </CommentHead>
            <CommentBody>집에서 하세요</CommentBody>
          </CommentCard>
<CardHr/>
          <CommentCard>
            <CommentHead>
              <CommentName>김원희</CommentName>
              <span>｜ 2025-09-01 13:42</span>
              <CommentActions>
                <DeleteBtn>삭제</DeleteBtn>
                <ModifyBtn>수정</ModifyBtn>
              </CommentActions>
            </CommentHead>
            <CommentBody>공부랑 제육이랑 무슨 상관인가요</CommentBody>
          </CommentCard>
        </CommentSection>
<CardHr/>
        <CommentInputWrap>
          <Title>김선범</Title>
          <Input rows="2" placeholder="댓글을 작성해주세요" />
          <SubmitWrap>
            <SubmitBtn>등록</SubmitBtn>
          </SubmitWrap>
        </CommentInputWrap>
        </div>
      </MobileShell>
  );
}