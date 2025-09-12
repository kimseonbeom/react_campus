import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { imp, trash, unImp, clip, Cancle } from "../img";
import { Container } from "../topNav/TopNav";

const MobileShell = styled.div`
  width: 100vw;
  background: #fff;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 6px 0 6px;
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

const PageTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const TopActions = styled.div`
  margin-left: auto;
`;

const TopBtn = styled.button`
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  border: 1px solid #dfe5ea;
  background: #fff;
  color: #59636b;
  border-radius: 8px;
  cursor: pointer;
`;

const SubHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0 10px;
  font-size: 12px;
  color: #98a1a8;
`;
const TimeText = styled.div`
font-size: 12px;
  flex: 1;
  margin-left: 10px;
`;
const MiniIconBtn = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid #e1e7ec;
  background: #fff;
  color: #6b7680;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const StarBtn = styled.button`
  padding: 0;
  margin: 0;
  width: 22px;
  height: 22px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const StarImg = styled.img`
  width: 22px;
  height: 22px;
  display: block;
`;

const MailTitle = styled.h3`
  flex: 1;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 2px;
  line-height: 1.4;
`;

const CardHr = styled.div`
  width: 372px;
  height: 1px;
  background: #D9D9D9;
  border: 0;
  margin: 12px 0 16px;
`;

const Meta = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  row-gap: 8px;
  column-gap: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 10px;
`;

const MetaLabel = styled.div`
  font-size: 12px;
  line-height: 28px;
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  background: #DFFCF9;
  border: 1px solid #e0e7ec;
  font-size: 12px;
  color: #1f2937;
`;
const ChipName = styled.span`
  font-weight: 600;
`;
const ChipEmail = styled.span`
`;

const BodyText = styled.div`
  height: 200px;
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  white-space: pre-line;
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
  color: #707070;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardFooter = styled.div`
  margin-top: 14px;
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

export default function MailDetail({ onClose }) {
  const [isStarred, setIsStarred] = useState(false);
  const toggleStar = () => setIsStarred(v => !v);
  const receivedAt = "2025-08-29 21:49";

  useEffect(() => {
    // 로컬 스토리지 유지 예시 (제목을 key로 사용)
    const saved = localStorage.getItem("mail-starred:LMS-0829");
    if (saved === "1") setIsStarred(true);
  }, []);
  useEffect(() => {
    localStorage.setItem("mail-starred:LMS-0829", isStarred ? "1" : "0");
  }, [isStarred]);

  const handleClose = () => {
    if (onClose) onClose();
    else window.history.back();
  };

  return (
      <MobileShell>
        <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <img src={Cancle} style={{width:'19px', height:'19px', cursor:'pointer'}} onClick={handleClose}></img>
        </Container>

        <div style={{padding: '12px 20px 24px'}}>
        <SubHeader>
          <TimeText>{receivedAt}</TimeText>
          <CloseBtn aria-label="닫기" onClick={handleClose}>
          <img src={trash} alt="닫기" style={{ width: 14, height: 14 }} />
          </CloseBtn>
        </SubHeader>

        <PageDivider />

        <Card>
          <TitleRow>
            <StarBtn
              aria-label={isStarred ? "즐겨찾기 해제" : "즐겨찾기 추가"}
              aria-pressed={isStarred}
              onClick={toggleStar}
            >
             <StarImg src={isStarred ? imp : unImp} alt={isStarred ? "starred" : "star"} />
            </StarBtn>
            <div>
              <MailTitle>LMS 자료 접근 확인 요청</MailTitle>
            </div>
          </TitleRow>

          <Meta>
            <MetaLabel>보낸 사람</MetaLabel>
            <ChipRow>
              <Chip>
                <ChipName>한서윤</ChipName>
                <ChipEmail>20220025@campus.com</ChipEmail>
              </Chip>
            </ChipRow>

            <MetaLabel>받는 사람</MetaLabel>
            <ChipRow>
              <Chip>
                <ChipName>김민준</ChipName>
                <ChipEmail>20220001@campus.com</ChipEmail>
              </Chip>
            </ChipRow>
          </Meta>

          <CardHr />
          <BodyText>{"LMS 자료 접근 가능 여부 확인 부탁드립니다."}</BodyText>

          <Attachment>
            <AttachmentIcon src={clip}/>
            <AttachmentName>자바프로그래밍 권오규 10주차.hwp</AttachmentName>
          </Attachment>

          <CardHr />

          <CardFooter>
            <Button>목록</Button>
          </CardFooter>
        </Card>
        </div>
      </MobileShell>
  );
}