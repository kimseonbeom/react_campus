import React, { useEffect, useRef, useState, forwardRef } from "react";
import styled from "styled-components";
import $ from "jquery";
window.$ = window.jQuery = $;
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Cancle, calender } from "../img";
import { Button } from "../commons/WHComponent";
import { Container } from "../topNav/TopNav";

const MJContainer = styled.div`
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
  width: 28px; height: 28px; padding: 0; border: none;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  cursor: pointer; font-size: 0; color: transparent;
`;
const Spacer = styled.div` flex: 1; `;
const SubmitBtn = styled.button`
  background: #2EC4B6; color: #fff; border: 0;
  border-radius: 5px; padding: 8px 14px; font-weight: 700; cursor: pointer;
`;

const Body = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

const TitleInput = styled.input`
  width: 100%;
  border: 0; border-bottom: 1px solid #dcdcdc;
  padding: 10px 2px; font-size: 14px; outline: none;
  ::placeholder { color: #BDBDBD; }
`;

const Row = styled.div`
  display: flex; align-items: center; gap: 6px;
  margin-top: ${({ mt }) => mt || 12}px;
  min-width: 0;
`;
const Label = styled.div`
  width: 52px; font-size: 12px; font-weight: 600; color: #4a4a4a;
`;
const DateBox = styled.div`
  display: flex; align-items: center; gap: 6px; flex: 1; min-width: 0;
`;
const DatePickerWrap = styled.div`
  flex: 1; min-width: 0;
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    width: 100%;
    min-width: 0;
  }
`;

/* ── 변경된 부분: 아이콘을 입력칸 안쪽에 오버레이 ─────────────────── */
const DateInputBox = styled.div`
  position: relative;
  width: 100%;
`;
const DateField = styled.input`
  width: 100%; height: 34px;
  border: 1px solid #d6d6d6; border-radius: 5px;
  padding: 0 34px 0 10px;  
  font-size: 13px; color: #333;
  background: #fff; outline: none; cursor: pointer;
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


const TimeSelect = styled.select`
  width: 56px; height: 34px;
  border: 1px solid #d6d6d6; border-radius: 5px;
  background: #fff; color: #333; font-size: 13px; padding: 0 8px; outline: none;
`;
const Colon = styled.span`
  color: #9e9e9e; font-weight: 600;
`;

const EditorWrap = styled.div`
  margin-top: 12px;
  .note-editor.note-frame {
    width: 100%; max-width: 100%; 
    border: 0; box-shadow: none;
    font-family: 'Noto Sans KR','Noto Sans',sans-serif;
  }
  .note-toolbar { border: 0; padding: 6px 0; }
  .note-statusbar { display: none; }
  .note-editable { min-height: 265px; font-size: 14px; line-height: 1.5; }
`;

const FileRow = styled.div` margin-top: 16px; `;
const FileDivider = styled.div` height: 1px; background: #D9D9D9; margin-bottom: 14px; `;
const HiddenFile = styled.input.attrs({ type: "file", id: "hwFile" })` display: none; `;
const FileLabel = styled.label`
  display: inline-block; padding: 6px 10px; border: 1px solid #bdbdbd;
  border-radius: 5px; font-size: 12px; cursor: pointer; user-select: none;
  background: #f4f4f4; margin-right: 10px;
`;
const FileText = styled.span` font-size: 12px; color: #707070; `;

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

export default function LectureHomeworkRegist() {
  const [fileName, setFileName] = useState("선택된 파일이 없습니다.");

  const [startDate, setStartDate] = useState(new Date());
  const [startHour, setStartHour] = useState(16);
  const [startMinute, setStartMinute] = useState(0);

  const [endDate, setEndDate] = useState(new Date());
  const [endHour, setEndHour] = useState(23);
  const [endMinute, setEndMinute] = useState(59);

  const editorRef = useRef(null);

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  useEffect(() => {
    const $el = $(editorRef.current);
    $el.summernote({
      placeholder: "내용을 입력해주세요.",
      height: 265, minHeight: 265,
      toolbar: [
        ["style", ["bold", "underline", "clear"]],
        ["para", ["ul", "ol", "paragraph"]],
        ["insert", ["picture", "link"]],
        ["view", ["codeview"]],
      ],
    });
    return () => { try { $el.summernote("destroy"); } catch (_) {} };
  }, []);

  const composeDateTime = (date, h, m) => {
    const d = new Date(date);
    d.setHours(h); d.setMinutes(m); d.setSeconds(0); d.setMilliseconds(0);
    return d.toISOString();
  };

  const handleSubmit = () => {
    const html = $(editorRef.current).summernote("code");
    const startISO = composeDateTime(startDate, startHour, startMinute);
    const endISO   = composeDateTime(endDate, endHour, endMinute);
    console.log({ html, startISO, endISO, fileName });
    // TODO: API
  };

  return (
    <MJContainer>
      <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <img src={Cancle} style={{width:'19px', height:'19px', cursor:'pointer'}}></img>
          <Button>등록</Button>
      </Container>

      <Body>
        <TitleInput placeholder="제목을 입력해주세요." />

        <Row mt={16}>
          <Label>시작일</Label>
          <DateBox>
            <DatePickerWrap>
              <DatePicker
                selected={startDate}
                onChange={setStartDate}
                dateFormat="yyyy-MM-dd"
                customInput={<DPInput />}
              />
            </DatePickerWrap>
            <TimeSelect value={startHour} onChange={e => setStartHour(+e.target.value)}>
              {hours.map(h => <option key={h} value={h}>{String(h).padStart(2,"0")}</option>)}
            </TimeSelect>
            <Colon>:</Colon>
            <TimeSelect value={startMinute} onChange={e => setStartMinute(+e.target.value)}>
              {minutes.map(m => <option key={m} value={m}>{String(m).padStart(2,"0")}</option>)}
            </TimeSelect>
          </DateBox>
        </Row>

        <Row>
          <Label>마감일</Label>
          <DateBox>
            <DatePickerWrap>
              <DatePicker
                selected={endDate}
                onChange={setEndDate}
                dateFormat="yyyy-MM-dd"
                customInput={<DPInput />}
              />
            </DatePickerWrap>
            <TimeSelect value={endHour} onChange={e => setEndHour(+e.target.value)}>
              {hours.map(h => <option key={h} value={h}>{String(h).padStart(2,"0")}</option>)}
            </TimeSelect>
            <Colon>:</Colon>
            <TimeSelect value={endMinute} onChange={e => setEndMinute(+e.target.value)}>
              {minutes.map(m => <option key={m} value={m}>{String(m).padStart(2,"0")}</option>)}
            </TimeSelect>
          </DateBox>
        </Row>

        <EditorWrap>
          <div ref={editorRef} />
        </EditorWrap>

        <FileRow>
          <FileDivider />
          <HiddenFile
            onChange={(e) => {
              const f = e.target.files?.[0];
              setFileName(f ? f.name : "선택된 파일이 없습니다.");
            }}
          />
          <FileLabel htmlFor="hwFile">파일선택</FileLabel>
          <FileText>{fileName}</FileText>
        </FileRow>
      </Body>
    </MJContainer>
  );
}