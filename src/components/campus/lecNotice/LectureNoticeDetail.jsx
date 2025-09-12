import React from "react";
import styled from "styled-components";
import { clip } from "../img";

const MobileShell = styled.div`
  width: 100vw;
  padding: 12px 20px 24px;
  background: #fff;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px 0 10px;
`;

const PageTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
`;

const TopActions = styled.div`
  display: flex;
  gap: 8px;
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
width: 372px;
  height: 2px;
  background: #2EC4B6;
  opacity: .6;
  border-radius: 2px;
  margin-bottom: 14px;
`;

const Card = styled.div`
  background: #fff;
`;

const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 6px;
  line-height: 1.4;
  margin-left: 10px;
`;

const ViewCount = styled.span`
  font-size: 13px;
  color: #98a1a8;
  margin-right: 10px;
`;

const DateText = styled.div`
  font-size: 12px;
  color: #98a1a8;
  margin-left: 10px;
`;

const CardHr = styled.div`
width: 372px;
  height: 1px;
  background: #D9D9D9;
  border: 0;
  margin: 12px 0 10px;
`;

const GrayLine = styled.div`
width: 372px;
  height: 1px;
  background: #D9D9D9;
  border: 0;
  margin: 9px auto 14px;
`;

const BodyText = styled.div`
  font-size: 13px;
  color: #212121;
  line-height: 1.5;
  white-space: pre-line;
  margin-left: 10px;
`;

const Attachment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  margin-top: 100px;
`;

const AttachmentIcon = styled.img`
  display: block;
  width: 14px;
  height: 14px;
  background: #fff;
  object-fit: contain;
  margin-left: 10px;
`;

const AttachmentName = styled.div`
  font-size: 13px;
  color: #444;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardFooter = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  border: 1px solid #2EC4B6;
  background: #fff;
  color: #2EC4B6;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
`;

function LectureNoticeDetail() {
  return (
      <MobileShell>
        <TopBar>
          <PageTitle>공지사항</PageTitle>
          <TopActions>
            <DeleteBtn>삭제</DeleteBtn>
            <ModifyBtn>수정</ModifyBtn>
          </TopActions>
        </TopBar>
        <PageDivider />

        <Card>
          <CardHead>
            <CardTitle>로그인 비밀번호 초기화 안내</CardTitle>
            <ViewCount>조회수: 341</ViewCount>
          </CardHead>

          <DateText>2025-09-01</DateText>

          <CardHr />

          <BodyText>
            로그인을 위해 시스템 비밀번호 초기화 후 로그인 해주시기 바랍니다.
            {"\n\n"}-권장 브라우저: 크롬(portal.aaa.ac.kr)
          </BodyText>

          <Attachment>
            <AttachmentIcon src={clip}/>
            <AttachmentName>첨부파일.pdf</AttachmentName>
          </Attachment>
          <GrayLine />
          <CardFooter>
            <Button>목록</Button>
          </CardFooter>
        </Card>
      </MobileShell>
  );
}

export default LectureNoticeDetail