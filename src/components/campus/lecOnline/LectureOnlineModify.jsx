import React, { useRef, useState } from 'react'
import { Container } from '../topNav/TopNav'
import { Flex, GrayHr } from '../home/HomeWrapperPro'
import { Cancle, dropdownArrow } from '../img'
import { ContentBox, Header } from '../home/HomeWrapper'
import { Hr } from '../menu/SideMenu'
import { DropHeader, DropList, DropOption, SearchDrop, RegistButton } from '../commons/WHComponent'
import useModalStore, { useAttendanceModalStore } from '../commons/modalStore'
import { FileBtn, Filefont, Head, Headtext, RegistInput, RegistTextarea, Title, Wrap
    } from '../lecOnline/LectureOnlineRegist'
import Toast from '../commons/Toast'


function LectureOnlineModify() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("주차선택");
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const thumbInputRef = useRef(null);
    const [thumbFile, setThumbFile] = useState(null);
    const toggleOpen = () => setOpen(!open);
    const { showConfirm } = useModalStore();
    const [toastMsg, setToastMsg] = useState("");
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
      setToastMsg("MP4 파일만 업로드 가능합니다.");
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
  showConfirm("온라인 강의를 수정하시겠습니까?", () => {
    setToastMsg("강의가 수정되었습니다!");
  });
};

    return (
        <>
            <Container style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <img src={Cancle} style={{ width: '19px', height: '19px' }}></img>
                <RegistButton style={{ width: '48px', height: '26px', marginTop:'5px' }} onClick={handleRegister} >수정</RegistButton>
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

export default LectureOnlineModify