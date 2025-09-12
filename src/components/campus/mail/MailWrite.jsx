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
  padding: 24;
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
  width: 28px; height: 28px;
  padding: 0; border: none;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  cursor: pointer;
  margin-top: 15px;
  font-size: 0; color: transparent;
`;

const Spacer = styled.div` flex: 1; `;

const SendBtn = styled.button`
  width:62px; height:26px;
  background:#2EC4B6; color:#fff; border:0; border-radius:5px;
  font-weight:500; cursor:pointer;
`;

const Body = styled.div`
  padding: 0 24px 24px;
  box-sizing: border-box;
`;

const ReceiverField = styled.div`
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #909090;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ReceiverLabel = styled.div`
  width: 72px;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
`;
const ReceiverInput = styled.input`
  flex: 1; min-width: 0;
  border: 0; outline: none; background: transparent;
  font-size: 14px; color: #333;
  ::placeholder { color: #BDBDBD; }
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

const Divider = styled.div`
  height: 1px; background: #e5e5e5; margin: 12px 0;
`;

const EditorWrap = styled.div`
  .note-editor.note-frame { border:0; box-shadow:none; font-family:'Noto Sans KR','Noto Sans',sans-serif; }
  .note-toolbar { border:0; padding:6px 0; }
  .note-statusbar { display:none; }
  .note-editable { min-height:305px; line-height:1.5; }
`;

const FileRow = styled.div` margin-top: 16px; `;
const FileDivider = styled.div` height:1px; background:#D9D9D9; margin-bottom:14px; `;
const HiddenFile = styled.input.attrs({ type:"file", id:"mailFile" })` display:none; `;
const FileLabel = styled.label`
  display:inline-block; width:74px; height:25px; text-align:center; align-content:center;
  border:1px solid #bdbdbd; border-radius:5px; font-size:12px; cursor:pointer; user-select:none;
  background:#f4f4f4; margin-right:10px;
`;
const FileText = styled.span` font-size:12px; color:#707070; `;

export default function MailWrite() {
  const [receiver, setReceiver] = useState("");             
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

  const handleSend = () => {
    const current = $(editorRef.current).summernote("code");
    console.log("받는 사람:", receiver);
    console.log("메일 본문 HTML:", current);
  };

  return (
    <div>
        <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
               <img src={Cancle} style={{width:'19px', height:'19px', cursor:'pointer'}}></img>
               <Button>보내기</Button>
           </Container>
     
      <Body>
        <ReceiverField>
          <ReceiverLabel>받는 사람</ReceiverLabel>
          <ReceiverInput
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            placeholder="이메일 또는 이름을 입력하세요"
          />
        </ReceiverField>

        <TitleInput placeholder="제목을 입력해주세요." />

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
          <FileLabel htmlFor="mailFile">파일선택</FileLabel>
          <FileText>{fileName}</FileText>
        </FileRow>
      </Body>
    </div>
  );
}