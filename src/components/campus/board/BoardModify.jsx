import React, { useState } from "react";
import styled from "styled-components";

const Phone = styled.div`
  width: 412px;
  height: 800px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 24px rgba(0,0,0,0.08);
  overflow: hidden;
  box-sizing: border-box;
`;

const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #e9eff6;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 24px 0;
  box-sizing: border-box;
`;

const TopBar = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
`;

const CloseBtn = styled.button`
  border: 0;
  background: transparent;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  color: #707070;
`;
const Spacer = styled.div` flex: 1; `;
const SubmitBtn = styled.button`
  background: #2EC4B6;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 8px 14px;
  font-weight: 700;
  cursor: pointer;
`;

const Body = styled.div`
  padding: 16px;
  box-sizing: border-box;
`;

const TitleInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px 2px;
  font-size: 14px;
  outline: none;
  ::placeholder { color: #BDBDBD; }
`;

const ContentArea = styled.textarea`
  width: 100%;
  height: 305px;
  border: 0;
  border-bottom: 1px solid #dcdcdc;
  padding: 12px 2px 14px;
  font-size: 14px;
  outline: none;
  resize: none;
  line-height: 1.5;
  ::placeholder { color: #BDBDBD; }
`;

const FileRow = styled.div`
  margin-top: 16px;
`;

const HiddenFile = styled.input.attrs({ type: "file", id: "boardFile" })`
  display: none;
`;

const FileLabel = styled.label`
  display: inline-block;
  padding: 6px 10px;
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

export default function BoardModify() {
  const [fileName, setFileName] = useState("선택된 파일이 없습니다.");

  return (
    <Screen>
      <Phone>
        <TopBar>
          <CloseBtn aria-label="닫기">×</CloseBtn>
          <Spacer />
          <SubmitBtn>등록</SubmitBtn>
        </TopBar>

        <Body>
          <TitleInput placeholder="제목을 입력해주세요." />
          <div style={{ height: 16 }} />
          <ContentArea placeholder="내용을 입력해주세요." />

          <FileRow>
            <HiddenFile
              onChange={(e) => {
                const f = e.target.files?.[0];
                setFileName(f ? f.name : "선택된 파일이 없습니다.");
              }}
            />
            <FileLabel htmlFor="boardFile">파일선택</FileLabel>
            <FileText>{fileName}</FileText>
          </FileRow>
        </Body>
      </Phone>
    </Screen>
  );
}
