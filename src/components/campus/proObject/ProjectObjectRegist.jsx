import React, { useState } from "react";
import styled from "styled-components";
import { Cancle, dropdownArrow } from "../img";
import { Button, DropHeader, DropList, DropOption, SearchDrop } from "../commons/WHComponent";
import { Container } from "../topNav/TopNav";

const TopBar = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  gap: 16px;
  background: #fff;
`;
const CloseArea = styled.div`
  width: 54px; height: 45px;
  display: flex; align-items: center; justify-content: center;
`;
const CloseBtn = styled.button`
  width: 28px; height: 28px; padding: 0; border: 0;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  cursor: pointer; font-size: 0; color: transparent;
  margin-top: 15px;
`;
const Spacer = styled.div` flex: 1; `;
const RegisterBtn = styled.button`
  width: 62px; height: 26px;
  background: #2EC4B6; color: #fff; border: 0; border-radius: 5px;
  font-weight: 500; cursor: pointer;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;     
  overflow: hidden;   
  background-color: #f7f7f7;
`;

const TopBox = styled.div`
  background: #fff;
  height: 263px;
  box-sizing: border-box;
  padding: 24px;
`;

const Title = styled.div`
  font-weight: 700;
  color: #444;
  margin-bottom: 10px;
  margin-top: -10px;
`;
const TitleLine = styled.div`
  height: 2px;
  background: #2EC4B6;
  margin-bottom: 14px;
`;

const Row = styled.div`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  &:last-child { border-bottom: 0; }
`;
const Label = styled.div`
  width: 72px;
  color: #777;
  font-weight: 700;
  font-size: 14px;
`;
const Value = styled.div`
  flex: 1;
  color: #555;
`;

const Gap = styled.div`
  height: 15px;
  background: #f3f3f3;
`;

const Editor = styled.div`
  flex: 1;               
  background: #fff;
  padding: 24px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;   
`;

const CategorySelect = styled.select`
  width: 167px;
  height: 29px;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  padding: 0 8px;
  font-size: 13px;
  color: #333;
  background: #fff;
  outline: none;
`;

const TitleInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 0 10px;
  margin-top: 12px;
  font-size: 14px;
  outline: none;
  ::placeholder { color: #bdbdbd; }
`;

const BodyWrap = styled.div`
  margin-left: -24px;
  margin-right: -24px;
  padding: 0 24px;
  border-bottom: 1px solid #e5e5e5;
`;

const BodyArea = styled.textarea`
  width: 100%;           
  max-width: 412px;      
  height: 216px;
  border: 0;
  resize: none;
  outline: none;
  padding: 16px 0 8px;
  box-sizing: border-box;
  font-size: 14px;
  color: #333;
  ::placeholder { color: #bdbdbd; }
`;

const FileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 14px;
  color: #777;
  font-size: 13px;
`;
const FileButton = styled.label`
  display: inline-block; width: 74px; height: 25px; text-align: center; align-content: center;
  border: 1px solid #bdbdbd; border-radius: 5px; font-size: 12px; cursor: pointer; user-select: none;
  background: #f4f4f4; margin-right: 10px;
`;
const HiddenFile = styled.input` display: none; `;

export default function ProjectObjectRegist() {
  const [dropOpen, setDropOpen] = useState(false);
  const [dropSelected, setDropSelected] = useState("전체");

  const toggleOpen = () => setDropOpen(!dropOpen);

    const handleDropSelect = (value) => {
        setDropSelected(value);
        setDropOpen(false);
    }

  return (
      <div>
       <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <img src={Cancle} style={{width:'19px', height:'19px', cursor:'pointer'}}></img>
                <Button>등록</Button>
            </Container>
      
        <Content>
        <div>
          <TopBox>
            <Title>클라우드 기반 협업 플랫폼</Title>
            <TitleLine />
            <Row><Label>기간</Label><Value>2025-08-26 ~ 2025-08-26</Value></Row>
            <Row><Label>담당교수</Label><Value>서형원</Value></Row>
            <Row><Label>팀장</Label><Value>김원희</Value></Row>
            <Row><Label>팀원</Label><Value>권오규, 김민주, 김선범</Value></Row>
          </TopBox>
        </div>

        <div style={{marginTop:'20px'}}>
          <Editor>
            <SearchDrop style={{marginTop:'-9px'}}>
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

            <TitleInput placeholder="제목을 입력해주세요" />

            <BodyWrap>
              <BodyArea placeholder="내용을 입력해주세요." />
            </BodyWrap>

            <FileRow>
              <FileButton htmlFor="file">파일선택</FileButton>
              <HiddenFile id="file" type="file" />
              <span>선택된 파일이 없습니다.</span>
            </FileRow>
          </Editor>
          </div>
        </Content>
      </div>
  
  );
}