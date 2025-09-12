
import React, { useState } from "react";
import styled from "styled-components";

import { Cancle, clip } from "../img";
import { Container } from "../topNav/TopNav";
import { Button } from "../commons/WHComponent";


const TopBar = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 24px;
  box-sizing: border-box;
`;
const CloseBtn = styled.button`
  width: 28px; height: 28px;
  padding: 0; border: 0;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  cursor: pointer; margin-top: 25px;
  font-size: 0; color: transparent;
`;
const Spacer = styled.div` flex: 1; `;
const SubmitBtn = styled.button`
  width: 48px; height: 26px;
  background: #2EC4B6; color: #fff; border: 0;
  border-radius: 5px; font-weight: 700; cursor: pointer;
  margin-top: 20px;
`;

const Body = styled.div`
  box-sizing: border-box;
  background-color: #f7f7f7;
`;

const GuideWrap = styled.div`
  margin: 15px 0;           
`;

const GuideCard = styled.div`
  width: 100%;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  padding: 14px 14px 10px;
  background: #fff;
  box-sizing: border-box;
`;
const GuideTitle = styled.span`
  font-size: 12px; color: #333;
  b { color: #d35454; font-weight: 700; }
`;
const GuideList = styled.ol`
  margin: 10px 0 0; padding-left: 18px;
  li { font-size: 12px; color: #555; line-height: 1.6; }
`;

const DownloadRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;           
`;
const DownloadLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 0; background: transparent;
  color: #9a9a9a; font-size: 12px;
  cursor: pointer;
`;
const DownloadIcon = styled.img`
  width: 15px; height: 15px; object-fit: contain;
  opacity: 0.85;             
`;

const UploadSection = styled.div`
  width: 100%; background: #fff;
`;
const UploadHeader = styled.div`
  font-size: 14px; font-weight: 600; color: #444;
  padding: 10px 0 8px;
  border-bottom: 2px solid #2EC4B6;
`;
const FileArea = styled.div` padding-top: 12px; `;
const HiddenFile = styled.input.attrs({ type: "file", id: "planFile" })`
  display: none;
`;
const FileLabel = styled.label`
  width: 74px; height: 25px; display: inline-block;
  text-align: center; align-content: center;
  border: 1px solid #bdbdbd; border-radius: 5px;
  font-size: 12px; cursor: pointer; user-select: none;
  background: #f4f4f4; margin-right: 10px;
`;
const FileText = styled.span`
  font-size: 12px; color: #707070;
`;

export default function LecturePlanRegist() {
  const [fileName, setFileName] = useState("선택된 파일이 없습니다.");

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
            <DownloadLink>
              <DownloadIcon src={clip} alt="" />
              양식 다운로드
            </DownloadLink>
          </DownloadRow>
        </GuideWrap>
        </div>

        <div style={{backgroundColor:'#fff', padding: '16px 29px', marginTop:'20px'}}>
        <UploadSection>
          <UploadHeader>업로드</UploadHeader>
          <FileArea>
            <HiddenFile
              onChange={(e) => {
                const f = e.target.files?.[0];
                setFileName(f ? f.name : "선택된 파일이 없습니다.");
              }}
            />
            <FileLabel htmlFor="planFile">파일선택</FileLabel>
            <FileText>{fileName}</FileText>
          </FileArea>
        </UploadSection>
        </div>
      </Body>
    </div>
  );
}