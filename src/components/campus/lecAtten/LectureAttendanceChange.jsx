import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TopBar } from "../proTeam/ProjectTeamModify";

import $ from "jquery";
window.$ = window.jQuery = $;
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";

import { Cancle, dropdownArrow } from "../img";
import { Container } from "../topNav/TopNav";
import { Button, DropHeader, DropList, DropOption, SearchDrop } from "../commons/WHComponent";

const CloseArea = styled.div`
  width: 54px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CloseBtn = styled.button`
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  cursor: pointer;
  margin-top: 25px;
  font-size: 0;
  color: transparent;
`;

const Spacer = styled.div` flex: 1; `;
const SubmitBtn = styled.button`
width: 48px;
height: 26px;   
  background: #2EC4B6;
  color: #fff;
  border: 0;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 20px;
`;

const Body = styled.div`
  padding: 16px;
  box-sizing: border-box;
`;

const SelectWrap = styled.div`
  position: relative;
  width: 167px;
  height: 29px;
`;
const Select = styled.select`
  width: 100%;
  height: 100%;
  padding: 0 30px 0 10px;
  border: 1px solid #999999;
  border-radius: 5px;
  background: #fff;
  color: #999999;
  font-size: 13px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
const Arrow = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 12px;
  color: #999999;
`;

const TitleInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #909090;
  padding: 14px 2px 12px;
  font-size: 14px;
  outline: none;
  ::placeholder { color: #BDBDBD; }
`;


const EditorWrap = styled.div`
  margin-top: 8px;
  .note-editor.note-frame {
    border: 0;
    box-shadow: none;
  }
  .note-toolbar { border: 0; padding: 6px 0; }
  .note-statusbar { display: none; }           
  .note-editable {
    min-height: 305px;                         
    font-size: 14px;
    line-height: 1.5;
  }

`;


const FileRow = styled.div`
  margin-top: 16px;
`;
const FileDivider = styled.div`
  height: 1px;
  background: #D9D9D9;   
  margin-bottom: 14px;
`;
const HiddenFile = styled.input.attrs({ type: "file", id: "attFile" })`
  display: none;
`;
const FileLabel = styled.label`
  width: 74px;
  height: 25px;
  text-align: center;
  align-content: center;
  display: inline-block;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  background: #f4f4f4;
  margin-right: 10px;
`;
const FileText = styled.span`
  font-size: 12px;
  color: #707070;
`;

export default function LectureAttendanceChange() {
  const [fileName, setFileName] = useState("선택된 파일이 없습니다.");
  const editorRef = useRef(null);     
  const [html, setHtml] = useState(""); 
  const [dropOpen, setDropOpen] = useState(false);
  const [dropSelected, setDropSelected] = useState("전체");

  const toggleOpen = () => setDropOpen(!dropOpen);
  
  const handleDropSelect = (value) => {
        setDropSelected(value);
        setDropOpen(false);
    }

  useEffect(() => {
    const $el = $(editorRef.current);
    $el.summernote({
      placeholder: "내용을 입력해주세요.",
      height: 305,
      minHeight: 305,
      toolbar: [
        ["style", ["bold", "underline", "clear"]],
        ["para", ["ul", "ol", "paragraph"]],
        ["insert", ["picture", "link"]],
        ["view", ["codeview"]]
      ],
      callbacks: {
        onChange: (contents) => setHtml(contents),
      },
    });

    return () => {
      try { $el.summernote("destroy"); } catch (_) {}
    };
  }, []);

  const handleSubmit = () => {
   
    const current = $(editorRef.current).summernote("code");
    console.log("제출 HTML:", current);
   
  };

  return (
    <div>
       <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <img src={Cancle} style={{width:'19px', height:'19px', cursor:'pointer'}}></img>
          <Button>등록</Button>
      </Container>

      <Body>
       
        <SearchDrop style={{marginTop:'-9px', position:'absolute', zIndex:'1'}}>
            <DropHeader style={{width:'131px', height:'27px', borderTop: '1px solid #ccc', borderRadius:'5px', fontSize:'13px', lineHeight:'16px'}} onClick={toggleOpen}>
                {dropSelected}
                <img src={dropdownArrow} style={{width:"13px", height:"8px", marginLeft:'auto', display:'block', marginTop:'4px'}}></img>
            </DropHeader>
            {dropOpen && (
                <DropList style={{width:'131px'}}>
                    <DropOption style={{padding:'8px 10px', fontSize:'13px'}} onClick={() => handleDropSelect("전체")}>전체</DropOption>
                    <DropOption style={{padding:'8px 10px', fontSize:'13px'}} onClick={() => handleDropSelect("옵션1")}>옵션1</DropOption>
                    <DropOption style={{padding:'8px 10px', fontSize:'13px'}} onClick={() => handleDropSelect("옵션2")}>옵션2</DropOption>
                    <DropOption style={{padding:'8px 10px', fontSize:'13px'}} onClick={() => handleDropSelect("옵션3")}>옵션3</DropOption>
                </DropList>
            )}
        </SearchDrop>


        <TitleInput placeholder="제목을 입력해주세요." style={{marginTop:'30px'}}/>

       
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
          <FileLabel htmlFor="attFile">파일선택</FileLabel>
          <FileText>{fileName}</FileText>
        </FileRow>
      </Body>
    </div>
  );
}