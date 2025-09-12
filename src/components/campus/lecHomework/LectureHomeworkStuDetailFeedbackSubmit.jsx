import React from "react";
import styled from "styled-components";
import { clip } from "../img";
import { Cancle } from "../img";
import { Container } from "../topNav/TopNav";

const MobileShell = styled.div`
  width: 100%;
  background: #f7f7f7;
`;

const CloseBtn = styled.button`
  width: 29px;
  height: 26px;
  border: 0;
  background: transparent;
  font-size: 20px;
  line-height: 1;
  color: #7b8794;
  cursor: pointer;
`;
const Title = styled.h1`
  margin: 10px 10px 15px;
  font-size: 18px;
  font-weight: 700;
  color: #111;

`;
const BrandDivider = styled.div`
  height: 2px;
  background: #2ec4b6;
  border-radius: 2px;
  opacity: 0.6;
  margin-bottom: 12px;
`;

/* ===== Meta Row ===== */
const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #98a1a8;
  margin-bottom: 10px;
`;
const Avatar = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  overflow: hidden;
  background: #e9eef2;
  margin-left: 10px;
`;
const Name = styled.span`
  color: #4a4a4a;
`;

const Attachment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
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

const BodyText = styled.div`
  height: 200px;
  margin: 0 0 20px;
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  white-space: pre-line;
  margin-left: 10px;
  margin-right: 10px;
`;

const DividerGray = styled.div`
  height: 1px;
  background: #d9d9d9;
  border-radius: 1px;
  margin: 10px 0 12px;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const GhostBtn = styled.button`
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

const SectionHead = styled.div`
  margin-top: 15px;
`;
const SectionTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #707070;
  margin-left: 10px;
`;

const FbCard = styled.div`
  padding: 10px 12px 12px;
  background: #fff;
`;
const FbHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
`;
const FbAvatar = styled(Avatar)`
  width: 26px;
  height: 26px;
  background: #f0d6d6;
`;
const FbName = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #333;
`;
const FbTextarea = styled.textarea`
  width: 100%;
  min-height: 84px;
  border: 1px solid #e9eef2;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 13px;
  color: #444;
  outline: none;
  resize: none;
  ::placeholder {
    color: #c0c7ce;
  }
  background: #fff;
  margin-top: 2px;
`;
const SubmitWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;
const SubmitBtn = styled.button`
  background: #2ec4b6;
  color: #fff;
  border: 0;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 13px;
  cursor: pointer;
  margin-right: 10px;
`;
const Meta = styled.div`
  font-size: 12px;
  color: #98a1a8;
`;

const CardHr = styled.div`
  width: 372px;
  height: 1px;
  background: #D9D9D9;
  border: 0;
  margin: 15px 0 15px;
`;

export default function LectureHomeworkStuDetailFeedbackSubmit() {
  return (
      <MobileShell>
          <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <img src={Cancle} style={{width:'19px', height:'19px'}}></img>
                    </Container>  
        <div style={{backgroundColor:'#fff',marginBottom:'12px' ,padding:'1px 20px 24px'}}>
        <Title>과제제출</Title>
        <BrandDivider />

        <MetaRow>
          <Avatar />
          <Name>권오규</Name>
          <Meta>｜</Meta>
          <span>2025-08-29 21:49</span>
        </MetaRow>
        <CardHr/>

        <BodyText>
          교수님 안녕하세요! 20171339 권오규입니다!
          {"\n"}10주차 과제 제출하였습니다 확인 부탁드립니다.
        </BodyText>
        <Attachment>
                  <AttachmentIcon src={clip}/>
                  <AttachmentName>자바프로그래밍 권오규 10주차.hwp</AttachmentName>
        </Attachment>
        <DividerGray />
        <Right>
          <GhostBtn>목록</GhostBtn>
        </Right>
        </div>
        <div style={{backgroundColor:'#fff',marginBottom:'12px' ,padding:'1px 20px 24px'}}>
        <SectionHead>
          <SectionTitle>피드백 작성</SectionTitle>
          <BrandDivider/>
        </SectionHead>

        <FbCard>
          <FbHeader>
            <FbAvatar />
            <FbName>김형민</FbName>
          </FbHeader>
          <FbTextarea placeholder="피드백을 작성해주세요" />
        </FbCard>

        <SubmitWrap>
          <SubmitBtn>등록</SubmitBtn>
        </SubmitWrap>
        </div>
      </MobileShell>
  );
}