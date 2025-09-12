import React from "react";
import styled from "styled-components";
import { clip } from "../img";

const MobileShell = styled.div`
  width: 100%;
  background: #f7f7f7;
`;

const Breadcrumb = styled.div`
  font-size: 18px;
  color: #98a1a8;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 6px;
  & > span:last-child {
    color: #6b7680;
  }
  margin-left: 10px;
`;
const DividerBrand = styled.div`
  height: 2px;
  background: #2ec4b6;
  opacity: 0.6;
  border-radius: 2px;
  margin: 10px 0 14px;
`;

/* 공통 회색 구분선 (#D9D9D9) */
const DividerGray = styled.div`
  height: 1px;
  background: #d9d9d9;
  border-radius: 1px;
  margin: 10px 0;
`;

/* ===== Card ===== */
const Card = styled.div`
  background: #fff;
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px;
  line-height: 1.4;
  margin-left: 10px;
`;
const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #98a1a8;
  margin-bottom: 8px;
  margin-left: 10px;
`;
const Dot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #c8d0d6;
  display: inline-block;
`;
const BodyText = styled.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  margin-bottom: 150px;
  margin-left: 10px;
`;

const Attachment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  margin-top: 100px;
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

/* ===== Footer ===== */
const Footer = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;
const Btn = styled.button`
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  border: 1px solid #dfe5ea;
  background: #fff;
  color: #59636b;
  border-radius: 8px;
  cursor: pointer;
`;

const SectionHead = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 10px;
`;
const SectionTitle = styled.div`
  font-weight: 700;
  color: #707070;
  margin-left: 10px;
`;
const SectionAction = styled.div`
  margin-left: auto;
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
  margin-right: 5px;
`;

const FbHeader = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #e9eef2;
  margin-right: 10px;
  margin-left: 10px;
`;
const FbMeta = styled.div`
  flex: 1;
  min-width: 0;
`;
const FbTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;
const FbName = styled.span`
  font-weight: 700;
  color: #333;
  font-size: 13px;
`;
const FbScore = styled.span`
  font-size: 12px;
  color: #98a1a8;
`;
const FbTime = styled.span`
  margin-left: auto;
  font-size: 12px;
  color: #98a1a8;
`;
const FbBodyWrap = styled.div`
  padding-top: 10px;
  border-top: 1px solid #d0d0d0;
  margin-top: 13px;
`;
const FbBody = styled.div`
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  white-space: pre-line;
  margin-left: 10px;
  margin-right: 10px;
`;

const Line = styled.div`
  width: 372px;
  height: 12px;
  color: #444444;
  margin-top: 20px;
`

const Meta = styled.div`
  font-size: 12px;
  color: #98a1a8;
`;

export default function ProjectObjectDetailFeedback() {
  return (
      <MobileShell>
        <div style={{backgroundColor:'#fff',marginBottom:'12px' ,padding:'10px 20px 24px'}}>
        <Breadcrumb>
          <span>결과물</span> <span>›</span> <span style={{color:"#2EC4B6"}}>Camp_us</span>
        </Breadcrumb>
        <DividerBrand />

        <Card>
          <Title><span style={{color:"#888888"}}>[산출물]</span> Camp_us 컴포넌트 명세서</Title>

          <MetaRow>
            <span>김원희</span>
            <Meta>ㅣ</Meta>
            <span>2025-09-22 09:40</span>
          </MetaRow>

          <DividerGray />

          <BodyText>Camp_us 컴포넌트 명세서 입니다.</BodyText>

          <Attachment>
            <AttachmentIcon src={clip}/>
            <AttachmentName>자바 프로그래밍 권오규 10주차.hwp</AttachmentName>
          </Attachment>

          <DividerGray />

          <Footer>
            <Btn>목록</Btn>
          </Footer>
        </Card>
        </div>
        
        <div style={{backgroundColor:'#fff', padding:'1px 20px 24px', marginTop:'20px'}}>
        <SectionHead>
          <SectionTitle>피드백</SectionTitle>
          <SectionAction>
            <ModifyBtn>수정</ModifyBtn>
          </SectionAction>
        </SectionHead>
        <DividerBrand />
          <FbHeader>
            <Avatar />
            <FbMeta>
              <FbTop>
                <FbName>김형민</FbName>
                <FbScore>| 평가 점수 : 25</FbScore>
              </FbTop>
            </FbMeta>
          </FbHeader>

          <FbBodyWrap>
            <FbBody>
              전제적으로 컴포넌트의 역할과 기능이 잘 구분되어 있어서 이해하기가 수월했습니다. 다만 일부 컴포넌트의 입력 값과 출력 값 정의가 조금 모호하게 서술된 부분이 있습니다. 특히 사용자 입력을 처리하는 부분에서는 예외 상황에 대한 처리 로직도 함께 기술해 주시면 더 완성도가 높아질 것 같습니다. 또한 컴포넌트 간 데이터 흐름을 조금 더 구체적으로 표현해 주시면 다른 팀원이 명세서를 보고 구현할 때 혼동이 줄어들 것으로 보입니다.
            </FbBody>
          </FbBodyWrap>
          </div>
      </MobileShell>
  );
}