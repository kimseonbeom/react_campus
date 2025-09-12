
import React, { useState } from "react";
import styled from "styled-components";
import { Cancle, clip } from "../img";
import { Container } from "../topNav/TopNav";
import { Button } from "../commons/WHComponent";




const TopBar = styled.div`
  height: 56px; display: flex; align-items: center;
  padding: 24px; box-sizing: border-box;
`;
const CloseBtn = styled.button`
  width: 28px; height: 28px; padding: 0; border: 0;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  cursor: pointer; margin-top: 25px; font-size: 0; color: transparent;
`;
const Spacer = styled.div` flex: 1; `;
const SubmitBtn = styled.button`
  width: 48px; height: 26px; background: #2EC4B6; color: #fff; border: 0;
  border-radius: 5px; font-weight: 700; cursor: pointer; margin-top: 20px;
`;

const Body = styled.div` box-sizing: border-box; background-color:#f7f7f7; `;

const GuideWrap = styled.div` margin: 15px 0; `;
const GuideCard = styled.div`
  width: 100%; height: 140px;
  border: 1px solid #e3e3e3; border-radius: 4px;
  padding: 14px 14px 10px; background: #fff; box-sizing: border-box;
`;
const GuideTitle = styled.span`
  font-size: 12px; color: #333; b { color: #d35454; font-weight: 700; }
`;
const GuideList = styled.ol`
  margin: 10px 0 0; padding-left: 18px;
  li { font-size: 12px; color: #555; line-height: 1.6; }
`;
const DownloadRow = styled.div` display: flex; justify-content: flex-end; margin-top: 6px; `;
const DownloadBtn = styled.button`
  display: inline-flex; align-items: center; gap: 6px;
  border: 0; background: transparent; color: #9a9a9a; font-size: 12px; cursor: pointer;
`;
const DownloadIcon = styled.img` width: 15px; height: 15px; object-fit: contain; opacity: .85; `;

const SectionGap = styled.div` height: 13px; `;

const UploadSection = styled.div` width: 100%; background: #fff; `;
const UploadHeader = styled.div`
  font-size: 14px; font-weight: 600; color: #444;
  padding: 10px 0 8px; border-bottom: 2px solid #2EC4B6;
`;

const PickerRow = styled.div`
  display: flex; align-items: center; gap: 10px; padding-top: 12px;
`;
const HiddenFile = styled.input.attrs({ type: "file", id: "uploadFile" })`
  display: none;
`;
const FileLabel = styled.label`
  width: 74px; height: 25px; display: inline-block;
  border: 1px solid #bdbdbd; border-radius: 5px; background: #f4f4f4;
  font-size: 12px; text-align: center; line-height: 25px; cursor: pointer;
`;
const EmptyText = styled.span` font-size: 12px; color: #9a9a9a; `;

const FileList = styled.ul` list-style: none; margin: 8px 0 0; padding: 0; `;
const FileItem = styled.li`
  display: flex; align-items: center; gap: 10px; padding: 8px 0;
`;
const ListIcon = styled.img` width: 16px; height: 16px; object-fit: contain; opacity: .85; `;
const FileName = styled.span`
  font-size: 12px; color: #4a4a4a; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`;
const RemoveBtn = styled.button`
  border: 0; background: transparent; cursor: pointer; font-size: 18px; line-height: 1; color: #9a9a9a;
`;

export default function LecturePlanModify() {
  const [files, setFiles] = useState([
    "2025-1학기_독서와토론_강의계획서.xlsx",
  ]);

  const handlePick = (e) => {
    const f = e.target.files?.[0];
    setFiles(f ? [f.name] : []);   
    e.target.value = "";         
  };

  const handleRemove = (idx) => {
    setFiles([]);                  
  };

  return (
    <div>
         <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <img src={Cancle} style={{width:'19px', height:'19px', cursor:'pointer'}}></img>
                <Button>등록</Button>
            </Container>
      

      <Body>
        <div style={{backgroundColor:'#fff', padding: '1px 29px 16px'}}>
        <GuideWrap>
          <GuideCard>
            <GuideTitle>
              강의계획서는 <b>지정된 양식으로만 제출 가능</b>합니다.
            </GuideTitle>
            <GuideList>
              <li>① ‘양식 다운로드’ 버튼을 눌러 파일을 받은 후,</li>
              <li>② 강의계획서를 작성하시고,</li>
              <li>③ 작성 완료된 파일을 업로드해 주십시오.</li>
            </GuideList>
          </GuideCard>

          <DownloadRow>
            <DownloadBtn>
              <DownloadIcon src={clip} alt="" />
              양식 다운로드
            </DownloadBtn>
          </DownloadRow>
        </GuideWrap>
        </div>

        <div style={{backgroundColor:'#fff', padding: '16px 29px', marginTop:'20px'}}>
        <UploadSection>
          <UploadHeader>업로드</UploadHeader>

          <HiddenFile onChange={handlePick} />

          {files.length === 0 && (
            <PickerRow>
              <FileLabel htmlFor="uploadFile">파일선택</FileLabel>
              <EmptyText>선택된 파일이 없습니다.</EmptyText>
            </PickerRow>
          )}

          {files.length > 0 && (
            <FileList>
              {files.map((name, i) => (
                <FileItem key={i}>
                  <ListIcon src={clip} alt="" />
                  <FileName title={name}>{name}</FileName>
                  <RemoveBtn aria-label="삭제" onClick={() => handleRemove(i)}>×</RemoveBtn>
                </FileItem>
              ))}
            </FileList>
          )}
        </UploadSection>
        </div>
      </Body>
    </div>
  );
}