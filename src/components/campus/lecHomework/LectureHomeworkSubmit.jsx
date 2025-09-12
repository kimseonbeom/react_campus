import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import $ from "jquery";
window.$ = window.jQuery = $;                      
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";

import { Cancle } from "../img";
import { Container } from "../topNav/TopNav";
import { Button } from "../commons/WHComponent";

const TopBar = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
`;

const CloseBtn = styled.button`
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  cursor: pointer;

  font-size: 0;
  color: transparent;
`;

const Spacer = styled.div` flex: 1; `;

const SubmitBtn = styled.button`
width:48px;
height:26px;
  background: #2EC4B6;
  color: #fff;
  border: 0;
  border-radius: 5px;
 
  font-weight: 700;
  cursor: pointer;
`;

const ToolsArea = styled.div`
  width: 115px;
  height: 76px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  box-sizing: border-box;
`;

const ToolBtn = styled.button`
  border: 0;
  background: transparent;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  color: #6b6b6b;
`;

const AccentLine = styled.div`
  height: 2px;
  background: #2EC4B6;
  margin: 0 24px;
`;

const Body = styled.div`
  padding: 24px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #212121;
`;

const Period = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: #9e9e9e;
`;

const Divider = styled.div`
  height: 1px;
  background: #e5e5e5;
  margin: 12px 0;
`;

const EditorWrap = styled.div`
  .note-editor.note-frame {
    border: 0;
    box-shadow: none;
    font-family: 'Noto Sans KR','Noto Sans',sans-serif;
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
  background: #e5e5e5;
  margin-bottom: 14px;
`;

const HiddenFile = styled.input.attrs({ type: "file", id: "hwFile" })`
  display: none;
`;

const FileLabel = styled.label`
  display: inline-block;
  width: 74px;
  height: 25px;
  text-align: center;
  align-content: center;
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

export default function LectureHomeworkSubmit() {
  const [fileName, setFileName] = useState("선택된 파일이 없습니다.");
  const [html, setHtml] = useState("");      
  const editorRef = useRef(null);

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
        ["view", ["codeview"]],
      ],
      callbacks: {
        onChange: (contents) => setHtml(contents),
      },
    });

    return () => { try { $el.summernote("destroy"); } catch (_) {} };
  }, []);

  const handleSubmit = () => {
    const current = $(editorRef.current).summernote("code");
    console.log("제출 HTML:", current);
  };

  return (
    <div>
      <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <img src={Cancle} style={{width:'19px', height:'19px', cursor:'pointer'}} onClick={handleSubmit}></img>
          <Button>등록</Button>
      </Container>

      <AccentLine />

      <Body>
        <Title style={{marginTop:'-5px', marginLeft:'10px'}}>7주차 과제 입니다.</Title>
        <Period style={{marginLeft:'10px'}}>2025-08-05 16:00 ~ 2025-08-11 23:59</Period>

        <Divider />

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
    </div>
  );
}