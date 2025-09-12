import React, { useRef, useState } from 'react'
import { Container } from '../topNav/TopNav'
import { Flex, GrayHr } from '../home/HomeWrapperPro'
import { Cancle, dropdownArrow } from '../img'
import { ContentBox, Header } from '../home/HomeWrapper'
import styled from 'styled-components'
import { Hr } from '../menu/SideMenu'
import { DropHeader, DropList, DropOption, SearchDrop, RegistButton } from '../commons/WHComponent'
import useModalStore from '../commons/modalStore'
import Toast from '../commons/Toast'

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
`
export const Title = styled.h3`
    font-size: 14px;
    font-weight: bold;
    line-height: 40px;
`
export const Head = styled.div`
    width: 100%;
    height: 37px;
    padding: 0 21px 0 19px;

    display: flex;
`
export const Headtext = styled.h3`
    font-size: 14px;
    font-weight: bold;
    margin: 0;
`
export const FileBtn = styled.button`
    width: 74px;
    height: 25px;
    font-size: 13px;
    background-color: #e7e7e7;
    border: 1px solid #707070;
    border-radius: 5px;
    margin-top: 10px;
`
export const Filefont = styled.span `
    font-size: 13px;
    font-weight: 500;
    line-height: 23px;
    margin-top: 10px;
    margin-left: 10px;
`
export const RegistInput = styled.input`
    font-size: 13px;
    border: none;
    width: 100%;
`
export const RegistTextarea = styled.textarea`
    font-Size: 13px;
        border : none;
        width: 100%;
        height: 300px;
        resize: none ;
        outline:none;
`
function LectureOnlineRegist() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("주차선택");
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const thumbInputRef = useRef(null);
    const [thumbFile, setThumbFile] = useState(null);
    const [toastMsg, setToastMsg] = useState("");
    const toggleOpen = () => setOpen(!open);
    const { showConfirm } = useModalStore();

    // 옵션 선택
    const handleSelect = (value) => {
        setSelected(value);
        setOpen(false);
    };
    const handleButtonClick = () => {fileInputRef.current.click();};
    const handleThumbBtnClick = () => {thumbInputRef.current.click();};
    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
    const ext = selectedFile.name.split(".").pop().toLowerCase();
    if (ext !== "mp4") {
      setToastMsg("mp4 형식의 파일만 업로드 가능합니다.");
      e.target.value = "";
      setFile(null);
      return;
    }
    setFile(selectedFile);
  }
};
 const handleThumbChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const ext = selectedFile.name.split(".").pop().toLowerCase();
      if (!["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) {
        setToastMsg("이미지 파일만 업로드 가능합니다.");
        e.target.value = "";
        setThumbFile(null);
        return;
      }
      setThumbFile(selectedFile);
    }
  };
const handleRegister = () => {
  showConfirm("온라인 강의를 등록하시겠습니까?", () => {
    setToastMsg("강의가 등록되었습니다!");
  });
};

    return (
        <>
            <Container style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <img src={Cancle} style={{ width: '19px', height: '19px' }}></img>
                <RegistButton style={{ width: '48px', height: '26px', marginTop:'5px' }} onClick={handleRegister}>등록</RegistButton>
            </Container>
                <Wrap>
                    <ContentBox style={{ height: '255px' , marginBottom:'10px', padding:'0 20px'}}>
                        <Head>
                            <Title>
                                자바프로그래밍
                            </Title>
                        </Head>
                        <Hr style={{ width: '373px', margin: '0 auto' }}></Hr>
                        <Header style={{padding:'0', height: '55px', textAlign:'center', alignItems:'center', marginLeft:'18px' }}>
                            <Headtext>주차</Headtext>
                            <SearchDrop>
                                <DropHeader onClick={toggleOpen} style={{margin:'0', marginLeft:'55px', width:'142px',border:'1px solid #aaa', borderRadius:'7px'}}>
                                    {selected}
                                    <img src={dropdownArrow} style={{ width: "13px", height: "8px", marginLeft: 'auto', display: 'block', marginTop: '8px' }}></img>
                                </DropHeader>
                                {open && (
                                    <DropList style={{marginLeft:'55px', width:'142px', textAlign:'start'}}>
                                        <DropOption onClick={() => handleSelect("주차선택")} >주차선택</DropOption>
                                        <DropOption onClick={() => handleSelect("1주차")}>1주차</DropOption>
                                        <DropOption onClick={() => handleSelect("2주차")}>2주차</DropOption>
                                        <DropOption onClick={() => handleSelect("3주차")}>3주차</DropOption>
                                    </DropList>
                                )}
                            </SearchDrop>
                        </Header>
                        <GrayHr style={{ width: '369px', margin: '0 auto' }}></GrayHr>
                        <Head style={{paddingTop:'18px'}}>
                            <Headtext>
                                영상업로드
                            </Headtext>
                        </Head>
                        <Flex style={{paddingLeft:'18px'}}>
                                <input type="file" accept="video/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
                                <FileBtn onClick={handleButtonClick}>파일선택</FileBtn>
                                {file ? (<Filefont>{file.name}</Filefont>) : (<Filefont style={{ color: "#888" }}>선택된 파일이 없습니다.</Filefont> )}
                        </Flex>
                        <Head style={{paddingTop:'18px'}}>
                            <Headtext>
                                썸네일 등록
                            </Headtext>
                        </Head>
                        <Flex style={{paddingLeft:'18px'}}>
                                <input type="file" accept="image/*" ref={thumbInputRef} onChange={handleThumbChange} style={{ display: "none" }} />
                                <FileBtn onClick={handleThumbBtnClick}>파일선택</FileBtn>
                                {thumbFile  ? (<Filefont>{thumbFile.name}</Filefont>) : (<Filefont style={{ color: "#888" }}>선택된 파일이 없습니다.</Filefont> )}
                        </Flex>
                    </ContentBox>
                    <ContentBox style={{height:'473px', padding:'0 20px'}}>
                                <Head style={{paddingTop:'19px'}}>
                                    <RegistInput placeholder='제목을 입력하세요.'></RegistInput>
                                </Head>
                                <GrayHr style={{ width: '369px', margin: '0 auto', marginTop:'14px'}}></GrayHr>
                                <Head style={{paddingTop:'19px'}}>
                                    <RegistTextarea placeholder='내용을 입력하세요.'></RegistTextarea>
                                </Head>
                    </ContentBox>
                    
                    
                </Wrap>
                {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}

        </>
    )
}

export default LectureOnlineRegist