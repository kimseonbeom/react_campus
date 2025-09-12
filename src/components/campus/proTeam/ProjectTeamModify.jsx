import React, { useState, forwardRef, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Cancle, searchIcon, calender, radioCheck, searchbtn } from "../img";
import { Container } from "../topNav/TopNav";
import { Button, CustomInput, FlexDiv, MJCustomInput } from "../commons/WHComponent";

const GlobalFix = createGlobalStyle`
  .react-datepicker-wrapper,
  .react-datepicker__input-container { width: 100%; }
  .react-datepicker-popper { z-index: 9999; }
`;

const Page = styled.div`
  width: 412px;
  margin: 0 auto;
  max-width: 100%;
  overflow-x: hidden;
`;

export const TopBar = styled.div`
  height: 56px; 
  display: flex; 
  align-items: center; 
  padding: 0 16px; 
  box-sizing: border-box;
`;

const CloseArea = styled.div`
  width: 72px;
  height: 56px;
  display: flex; 
  align-items: center;
  padding-left: 8px;
`;
const CloseBtn = styled.button`
  width: 28px; height: 28px;
  padding: 0; border: 0;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  cursor: pointer; margin-top: 25px;
  font-size: 0; color: transparent;
`;
const Spacer = styled.div` flex: 1; `;
const RequestBtn = styled.button`
  width: 48px; height: 26px;
  background: #2EC4B6; color: #fff; border: 0;
  border-radius: 5px; font-weight: 700; cursor: pointer;
  margin-top: 20px;
`;

const Section = styled.div` background: #fff; `;
const TopSection = styled(Section)`
  height: 490px;
  display: flex; 
  flex-direction: column;
  box-sizing: border-box;
`;
const TopContent = styled.div` padding: 27px; box-sizing: border-box; overflow: hidden; 
  margin-top: -20px;
`;
const BottomSection = styled(Section)` height: 298px; padding: 19px; box-sizing: border-box; `;
const SectionGap = styled.div` height: 12px; background: #f3f3f3; `;

const Row = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px; 
  margin-bottom: 10px;
`;
const Label = styled.div`
  width: 72px;
  font-size: 13px; 
  font-weight: 600;
  color: #3b3b3b;
`;
const Input = styled.input`
  flex: 1; min-width: 0;           
  height: 32px;                    
  border: 1px solid #d6d6d6; border-radius: 4px;
  padding: 0 10px; font-size: 13px; color: #333; outline: none;
  ::placeholder { color: #bdbdbd; }
`;

const RowTwoCols = styled.div`
  display: flex; 
  gap: 8px; 
  margin-bottom: 10px; 
  align-items: flex-start;
`;
const FieldCol = styled.div`
  flex: 1 1 0; 
  min-width: 0;    
  display: flex; 
  flex-direction: column; 
  gap: 6px;
`;
const FieldLabel = styled.div` font-size: 12px; color: #6b6b6b; font-weight: 600; `;

const DateField = styled.div`
  position: relative;
  width: 100%;
`;
const DateInput = styled(Input)`
  height: 29px;          
  padding-right: 10px;   
`;
const CalendarBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 20px;           
  height: 20px;
  padding: 0;
  border: 0;
  background: transparent url(${calender}) center / 18px 18px no-repeat;
  cursor: pointer;
`;

const SearchBtn = styled.button`
  width: 32px; 
  height: 32px;       
  padding: 0; 
  border: none; 
  border-radius: 4px;
  background: url(${searchbtn}) center / 100% 100% no-repeat; cursor: pointer;
`;

export const RadioWrap = styled.div`
  display: flex; 
  align-items: center; 
  gap: 16px; 
  font-size: 13px; 
  color: #333;
`;
export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;
export const RadioButton = styled.input.attrs({ type: "radio" })`
  display: none;
`;
export const RadioMark = styled.span`
  width: 13px;
  height: 13px;
  border: 1px solid #bbb;
  border-radius: 8px;
  background-color: #fff;
  display: inline-block;
  margin-top: 2px;

  ${RadioButton}:checked + & {
    background-color: #fff;
    background-image: url(${radioCheck});
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const SectionLabel = styled.div` font-size: 13px; font-weight: 600; color: #3b3b3b; margin-top: 6px; `;
const Divider = styled.div` height: 1px; background: #e5e5e5; margin: 8px 0 12px; `;
const PlainText = styled.div` font-size: 13px; color: #808080; `;
const SubHeader = styled.div` font-size: 14px; font-weight: 600; color: #444; padding-bottom: 8px; border-bottom: 2px solid #2EC4B6; `;

const ReasonArea = styled.textarea`
  width: 100%; 
  height: 170px;     
  margin-top: 12px;
  border: 0; 
  background: transparent;
  padding: 0;
  font-size: 13px; 
  color: #333; 
  outline: none; 
  resize: none; 
  line-height: 1.5;
  ::placeholder { color: #bdbdbd; }
`;
const BottomLine = styled.div` height: 1px; background: #e5e5e5; margin-top: 12px; `;

const DateInputWithButton = forwardRef(({ value, onClick, placeholder }, ref) => (
  <DateField>
    <DateInput ref={ref} value={value || ""} readOnly onClick={onClick} placeholder={placeholder} />
    <CalendarBtn type="button" aria-label="달력 열기" onClick={onClick} />
  </DateField>
));

export default function ProjectTeamModify() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const startInputRef = useRef(null);
  const endInputRef = useRef(null);

  return (
    <Page>
      <GlobalFix />

      <TopSection>
        <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <img src={Cancle} style={{width:'19px', height:'19px', cursor:'pointer'}}></img>
            <Button>등록</Button>
        </Container>

        <TopContent>
          <Row>
            <Label>프로젝트명</Label>
            <Input placeholder="클라우드 기반 협업 플랫폼" />
          </Row>
          <FlexDiv style={{marginBottom:'-5px'}}>
            <Label>시작일</Label>
            <Label style={{marginLeft:'120px'}}>마감일</Label>
          </FlexDiv>

          <FlexDiv style={{marginTop:'8px', marginBottom:'5px'}} >
              <div style={{ display: "flex", alignItems: "center", width: "152px", height: "36px", marginLeft:'-4px' }} >
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="시작일"
                      dateFormat="yyyy-MM-dd" customInput={<MJCustomInput ref={startInputRef}/>}
                  />
                  <img src={calender} style={{width:'20px', marginLeft:'-15px', position:'relative', marginBottom:'1px'}} alt="calendar"/>
              </div>
              <div style={{marginLeft:'25px', marginTop:'5px'}}>
                  ~
              </div>
              <div style={{ display: "flex", alignItems: "center", width: "152px", height: "36px", marginLeft:'7px'}}>
                  <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} placeholderText="마감일"
                      dateFormat="yyyy-MM-dd" customInput={<MJCustomInput ref={endInputRef}/>}
                  />
                  <img src={calender} style={{width:'20px', marginLeft:'-15px', position:'relative', marginBottom:'1px'}} alt="calendar"/>
              </div>
          </FlexDiv>

          <Row>
            <Label>학기</Label>
            <RadioWrap>
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
            </RadioWrap>
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

          <SectionLabel>내용</SectionLabel>
          <Divider />
          <PlainText>내용입니다.</PlainText>
        </TopContent>
      </TopSection>

      <SectionGap />

      <BottomSection>
        <SubHeader>수정 사유</SubHeader>
        <ReasonArea placeholder="수정 사유를 입력해주세요." />
        <BottomLine />
      </BottomSection>
    </Page>
  );
}