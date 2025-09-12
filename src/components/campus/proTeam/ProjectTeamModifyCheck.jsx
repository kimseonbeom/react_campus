import React, { useRef, useState, forwardRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Cancle, searchIcon, calender, radioCheck, searchbtn } from "../img";
import { Container } from "../topNav/TopNav";
import { Button } from "../commons/WHComponent";

const Page = styled.div`
  width: 412px;
  margin: 0 auto;
  overflow-x: hidden;
  font-family: 'Noto Sans KR','Noto Sans',sans-serif;
`;

const TopBar = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  gap: 16px;
`;

const CloseArea = styled.div`
  width: 54px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseBtn = styled.button`
  width: 28px; height: 28px; padding: 0; border: 0;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  cursor: pointer; font-size: 0; color: transparent;
  margin-top: 15px;
`;

const Spacer = styled.div` flex: 1; `;
const RightButtons = styled.div`
  display: flex; align-items: center; gap: 6px;
`;

const MutedBtn = styled.button`
  width: 48px; height: 26px;
  background: #AAAAAA; color: #fff; border: 0; border-radius: 5px;
  font-weight: 500; cursor: pointer; margin-right: 8px;
`;

const ApproveBtn = styled.button`
  width: 48px; height: 26px;
  background: #2EC4B6; color: #fff; border: 0; border-radius: 5px;
  font-weight: 500; cursor: pointer;
`;

const Section = styled.div`
  background: #fff;
  box-sizing: border-box;
`;
const TopSection = styled(Section)` `;
const BottomSection = styled(Section)` height: 265px; margin-top: 20px;`;
const SectionInner = styled.div`
  padding: 24px;
  height: 100%;
  box-sizing: border-box;
  margin-top: -20px;
`;
const Gap = styled.div` height: 12px; background: #f3f3f3; `;

const Row = styled.div`
  display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
`;
const Label = styled.div`
  width: 72px; font-size: 13px; font-weight: 600; color: #3b3b3b;
`;

const Input = styled.input`
  flex: 1; height: 34px;
  border: 1px solid #d6d6d6; border-radius: 5px;
  padding: 0 10px; font-size: 13px; color: #333; outline: none;
  ::placeholder { color: #bdbdbd; }
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  column-gap: 8px;
  align-items: center;
  margin-bottom: 10px;
`;

const DPWrap = styled.div`
  position: relative;
  min-width: 0;
  .react-datepicker-wrapper,
  .react-datepicker__input-container { width: 100%; min-width: 0; }
`;

const DateField = styled.input`
  width: 230px;; height: 34px;
  border: 1px solid #d6d6d6; border-radius: 5px;
  padding: 0 40px 0 10px; 
  font-size: 13px; color: #333;
  background: #fff; outline: none; cursor: pointer;
`;


const CalendarIconBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  width: 24px; height: 24px;
  border: 0; padding: 0;
  background: transparent url(${calender}) center / 18px 18px no-repeat;
  cursor: pointer;
`;

const Radios = styled.div`
  display: flex; align-items: center; gap: 16px; font-size: 13px; color: #333;
`;
const RadioLabel = styled.label`
  display: flex; align-items: center; gap: 6px; cursor: pointer;
`;
const RadioButton = styled.input.attrs({ type: "radio" })` display: none; `;
const RadioMark = styled.span`
  width: 13px; height: 13px; cursor: pointer;
  border: 1px solid #bbb; border-radius: 8px; background-color: #fff;
  display: inline-block; margin-top: 2px;
  ${RadioButton}:checked + & {
    background-image: url(${radioCheck});
    background-size: 65%; background-repeat: no-repeat; background-position: center;
  }
`;

const SearchBtn = styled.button`
  width: 34px; height: 34px; border: 0; padding: 0;
  background: url(${searchbtn}) center / 100% 100% no-repeat transparent;
  cursor: pointer;
`;

const Divider = styled.div`
  height: 1px; background: #e5e5e5; margin: 8px 0 12px;
`;

const BodyText = styled.textarea`
  width: 100%;
  height: ${({ h }) => h}px;
  border: 0; padding: 0; resize: none; outline: none;
  font-size: 13px; color: #606060; background: transparent;
`;

const SubHeader = styled.div`
  font-size: 14px; font-weight: 600; color: #444;
  padding-bottom: 8px; border-bottom: 2px solid #2EC4B6;
`;
const BottomLine = styled.div` height: 1px; background: #e5e5e5; margin-top: 14px; `;

const DPInput = forwardRef(({ value, onClick, placeholder }, ref) => (
  <DateField
    ref={ref}
    onClick={onClick}
    value={value || ""}
    placeholder={placeholder || "YYYY-MM-DD"}
    readOnly
  />
));

export default function ProjectTeamModifyCheck() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate,   setEndDate]   = useState(new Date());
  const startRef = useRef(null);
  const endRef   = useRef(null);

  return (
    <Page>
      <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <img src={Cancle} style={{width:'19px', height:'19px', cursor:'pointer'}} alt="close" />
        <Button style={{backgroundColor:'#aaa', marginRight:'-200px'}}>거부</Button>
        <Button>승인</Button>
      </Container>

      <TopSection>
        <SectionInner>
          <Row>
            <Label>프로젝트명</Label>
            <Input defaultValue="클라우드 기반 협업 플랫폼" />
          </Row>

          <DateGrid>
            <Label>시작일</Label>
            <DPWrap>
              <DatePicker
                selected={startDate}
                onChange={setStartDate}
                dateFormat="yyyy-MM-dd"
                customInput={<DPInput ref={startRef} />}
              />
              <CalendarIconBtn
                aria-label="시작일 달력 열기"
                onClick={() => startRef.current?.setFocus()}
              />
            </DPWrap>
          </DateGrid>

          {/* 종료일 */}
          <DateGrid>
            <Label>종료일</Label>
            <DPWrap>
              <DatePicker
                selected={endDate}
                onChange={setEndDate}
                dateFormat="yyyy-MM-dd"
                customInput={<DPInput ref={endRef} />}
              />
              <CalendarIconBtn
                aria-label="종료일 달력 열기"
                onClick={() => endRef.current?.setFocus()}
              />
            </DPWrap>
          </DateGrid>

          <Row>
            <Label>학기</Label>
            <Radios>
              <RadioLabel>
                <RadioButton name="term" defaultChecked />
                <RadioMark />
                <span>1학기</span>
              </RadioLabel>
              <RadioLabel>
                <RadioButton name="term" />
                <RadioMark />
                <span>2학기</span>
              </RadioLabel>
            </Radios>
          </Row>

          <Row>
            <Label>담당교수</Label>
            <Input defaultValue="서형원" />
          </Row>

          <Row>
            <Label>팀장</Label>
            <Input defaultValue="김원희" />
            <SearchBtn aria-label="팀장 검색" />
          </Row>

          <Row>
            <Label>팀원</Label>
            <Input defaultValue="권오규, 김민주, 김선범" />
            <SearchBtn aria-label="팀원 검색" />
          </Row>

          <Label>내용</Label>
          <Divider />
          <BodyText h={112} defaultValue="내용입니다." />
        </SectionInner>
      </TopSection>

      <Gap />

      <BottomSection>
        <SectionInner>
          <SubHeader>수정 사유</SubHeader>
          <BodyText style={{marginTop:'10px'}} h={149} defaultValue="일정 변경 요청합니다." />
          <BottomLine />
        </SectionInner>
      </BottomSection>
    </Page>
  );
}