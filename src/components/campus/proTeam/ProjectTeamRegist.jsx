import React, { useRef, useState, forwardRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Cancle, searchIcon, calender, searchbtn } from "../img";
import { Container } from "../topNav/TopNav";
import { Button } from "../commons/WHComponent";
import { RadioButton, RadioLabel, RadioMark, RadioWrap } from "./ProjectTeamModify";

const Page = styled.div`
  width: 412px;
  margin: 0 auto;
  overflow-x: hidden;
`;

const TopBar = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
`;
const CloseBtn = styled.button`
  width: 28px; height: 28px; padding: 0; border: 0;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  cursor: pointer; font-size: 0; color: transparent;
`;
const Spacer = styled.div` flex: 1; `;
const SubmitBtn = styled.button`
  background: #2EC4B6; color: #fff; border: 0; border-radius: 5px;
  padding: 8px 14px; font-weight: 700; cursor: pointer;
`;

const Section = styled.div`
  background: #fff;
  box-sizing: border-box;
`;
const TopSection = styled(Section)` height: 320px; `;
const BottomSection = styled(Section)` height: 465px; `;
const SectionInner = styled.div`
  padding: 24px;
  height: 100%;
  box-sizing: border-box;
`;
const Gap = styled.div` height: 15px; background: #f3f3f3; `;

const Row = styled.div`
  display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
`;
const Label = styled.div`
  width: 64px; font-size: 13px; font-weight: 600; color: #3b3b3b; 
`;



export const DPWrap = styled.div`
  min-width: 0;
  .react-datepicker-wrapper,
  .react-datepicker__input-container { width: 100%; min-width: 0; }
`;
const DateField = styled.input`
  width: 100%; height: 34px;
  border: 1px solid #d6d6d6; border-radius: 5px;
  padding: 0 34px 0 10px; 
  font-size: 13px; color: #333;
  background: #fff; outline: none; cursor: pointer;
`;

export const DatesRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 10px;
`;
export const DateCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;
export const FieldTopLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #6b6b6b;
`;
const CalendarInsideBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  width: 20px; height: 20px;
  border: 0; padding: 0;
  background: transparent url(${calender}) center / 18px 18px no-repeat;
  cursor: pointer;
`;
const DateInputBox = styled.div`
  position: relative;
  width: 100%;
`;

const Radios = styled.div`
  display: flex; align-items: center; gap: 16px; font-size: 13px; color: #333;
  input { margin-right: 6px; }
`;

const TextInput = styled.input`
  flex: 1; height: 34px;
  border: 1px solid #d6d6d6; border-radius: 5px;
  padding: 0 10px; font-size: 13px; color: #333; outline: none;
  ::placeholder { color: #bdbdbd; }
`;
const SearchBtn = styled.button`
  width: 34px; height: 34px; border: 0; padding: 0;
  background: url(${searchbtn}) center / 100% 100% no-repeat transparent;
  cursor: pointer;
`;

const UnderlineInput = styled.input`
  width: 100%; border: 0; border-bottom: 1px solid #e5e5e5;
  padding: 12px 2px; font-size: 14px; outline: none;
  ::placeholder { color: #BDBDBD; }
`;
const UnderlineArea = styled.textarea`
  width: 100%; height: 180px; resize: none;
  border: 0; padding: 12px 2px; outline: none; font-size: 14px; color: #333;
  ::placeholder { color: #BDBDBD; }
`;
const BottomLine = styled.div` height: 1px; background: #e5e5e5; margin-top: 14px; `;

const DPInput = forwardRef(({ value, onClick, placeholder }, ref) => (
  <DateInputBox>
    <DateField
      ref={ref}
      onClick={onClick}
      value={value || ""}
      placeholder={placeholder || "YYYY-MM-DD"}
      readOnly
    />
    <CalendarInsideBtn type="button" aria-label="달력 열기" onClick={onClick} />
  </DateInputBox>
));

export default function ProjectTeamRegist() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate]     = useState(new Date());
  const startRef = useRef(null);
  const endRef   = useRef(null);

  return (
    <Page>
      <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <img src={Cancle} style={{width:'19px', height:'19px', cursor:'pointer'}}></img>
          <Button>등록</Button>
      </Container>

      <TopSection style={{marginTop:'-20px'}}>
        <SectionInner>

          <DatesRow>
            <DateCol>
              <FieldTopLabel>시작일</FieldTopLabel>
              <DPWrap>
                <DatePicker
                  selected={startDate}
                  onChange={setStartDate}
                  dateFormat="yyyy-MM-dd"
                  customInput={<DPInput ref={startRef} />}
                />
              </DPWrap>
            </DateCol>

            <DateCol>
              <FieldTopLabel>종료일</FieldTopLabel>
              <DPWrap>
                <DatePicker
                  selected={endDate}
                  onChange={setEndDate}
                  dateFormat="yyyy-MM-dd"
                  customInput={<DPInput ref={endRef} />}
                />
              </DPWrap>
            </DateCol>
          </DatesRow>

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
            <TextInput placeholder="담당교수를 등록해주세요." />
            <SearchBtn aria-label="담당교수 검색" />
          </Row>

          <Row>
            <Label>팀장</Label>
            <TextInput placeholder="팀장을 등록해주세요." />
            <SearchBtn aria-label="팀장 검색" />
          </Row>

          <Row>
            <Label>팀원</Label>
            <TextInput placeholder="팀원을 등록해주세요." />
            <SearchBtn aria-label="팀원 검색" />
          </Row>
        </SectionInner>
      </TopSection>

      <Gap />

      <BottomSection>
        <SectionInner>
          <UnderlineInput style={{marginTop:"-10px"}} placeholder="프로젝트명을 입력해주세요." />
          <UnderlineArea placeholder="내용을 입력해주세요." />
          <BottomLine />
        </SectionInner>
      </BottomSection>
    </Page>
  );
}