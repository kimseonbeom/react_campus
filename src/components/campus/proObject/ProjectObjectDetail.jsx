import React from "react";
import styled from "styled-components";
import { clip } from "../img";

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
  return (
      <MobileShell>
        <Crumb>
          <CrumbDim>결과물</CrumbDim>
          <CrumbSep>›</CrumbSep>
          <CrumbAccent>Camp_us</CrumbAccent>
        </Crumb>
        <Divider />

        <TitleRow>
          <GrayTag>[산출물]</GrayTag>
          <Title>Camp_us 컴포넌트 명세서</Title>
        </TitleRow>

        <MetaRow>
          <span>김원희</span>
          <span>ㅣ</span>
          <span>2025-09-22 09:40</span>
        </MetaRow>

        <Hr />

        <Body>Camp_us 컴포넌트 명세서 입니다.</Body>

        <AttachRow>
          <AttachmentIcon src={clip}/>
          <FileName>자바프로그래밍 권오규 10주차.hwp</FileName>
        </AttachRow>

        <Hr />

        <Footer>
          <Primary>평가하기</Primary>
          <Button>목록</Button>
        </Footer>
      </MobileShell>
  );
}