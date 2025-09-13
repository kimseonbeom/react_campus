import React, { useRef, useState } from 'react'
import { Container } from '../topNav/TopNav'
import { Cancle, pictureMdfBtn, user11 } from '../img'
import { CatTitle, FlexDiv, RegistButton } from '../commons/WHComponent'
import { ContentBox, Header, HeadText } from '../home/HomeWrapper'
import { ContentText, GreenBox } from '../proObject/ProjectObjectProjectList'
import { Hr } from '../menu/SideMenu'
import { Picture, PictureContainer, PictureModifyBtn, Table, TableOverView,
        TableText, TableTitle, TitleText, Wrap,
} from '../mypage/Mypage'
import { useMypageModalStore, usePasswordModalStore } from '../commons/modalStore'
import { ExitButton } from '../lecAtten/AttandanceModal'
import { Overlay } from '../proObject/ProjectObjectFeedback'
import Toast from '../commons/Toast'



function MypagePro() {
    const { showModal } = usePasswordModalStore();
        const { visible, hideModal } = useMypageModalStore();
        const [toastMsg, setToastMsg] = useState("");
        const [imgSrc, setImgSrc] = useState(user11);
        const fileInputRef = useRef(null);
        const handleBtnClick = () => {
        fileInputRef.current.click();
        }
        const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImgSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
    const openModal = () => {
    showModal("비밀번호를 변경", (form) => {
      console.log("확인 클릭됨:", form);
    });
  };
  if (!visible) return null;
  return (
    
    <>
    <Overlay>
   <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <ExitButton style={{width:'19px', height:'19px', margin:'0'}} onClick={hideModal}>
                   <img src={Cancle} style={{ width: '19px', height: '19px' }} />
               </ExitButton>         
       </Container>
    
           <FlexDiv style={{marginLeft:'27px',justifyContent:'space-between',marginRight:'21px'}}>
                <CatTitle>마이페이지</CatTitle>
                
                <RegistButton style={{width:'48px', height:'26px'}}>저장</RegistButton>
            </FlexDiv>
        <PictureContainer>
            <div>
            <Picture>
                <img src={imgSrc} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%',display:'block'}}/>
                <PictureModifyBtn onClick={handleBtnClick}>
                 <img src={pictureMdfBtn} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                 </PictureModifyBtn>
                 <input type="file" accept="image/*" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
                        </Picture>
            <HeadText style={{marginTop:'12px', marginBottom:'2px'}}>20191396</HeadText>
            <HeadText>김민주</HeadText>
            </div>
        </PictureContainer>
        <Wrap>
        <ContentBox style={{height:'270px', marginBottom:'10px'}}>
            <Header style={{paddingTop:'18px', alignItems:'center',paddingLeft:'26px'}}>
            <ContentText>
                개인정보
            </ContentText>
           <GreenBox style={{width:'97px', height:'26px', lineHeight:'23px', marginLeft:'auto'}} onClick={openModal}>
                비밀번호 변경
            </GreenBox>
            </Header>
            <Hr style={{width:'372px', margin:'0 auto'}}/>
        <Table>
            <tr>
                <TableTitle>
                    <TitleText>
                    생년월일
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    2000-01-01
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    이메일
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    ohgyu@naver.com
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    연락처
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    010-1234-1234
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    주소
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    대전광역시 중구 중앙로121번길 20 방산빌딩 2층, 3층(일부), 5층
                    </TableText>
                    </TableOverView>
            </tr>
        </Table>
        </ContentBox>
        <ContentBox style={{height:'207px', marginBottom:'10px'}}>
            <Header style={{paddingTop:'18px', alignItems:'center',paddingLeft:'26px'}}>
            <ContentText>
                학사정보
            </ContentText>
            </Header>
            <Hr style={{width:'372px', margin:'0 auto'}}/>
        <Table>
            <tr>
                <TableTitle>
                    <TitleText>
                    직위
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    교수
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    소속대학
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    DW대학
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    소속학과
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    컴퓨터공학과
                    </TableText>
                    </TableOverView>
            </tr>
        </Table>
        </ContentBox>
        </Wrap>
        </Overlay>
        {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
        </>
        )
        }
        export default MypagePro