import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Content, ContentBox, Contents, Header, HeadText, IconBox, LecText } from '../home/HomeWrapper'
import { Flex, GrayHr } from '../home/HomeWrapperPro'
import { Hr } from '../menu/SideMenu'
import { unRead, read, go, Cancle } from '../img'
import { useMailModalStore } from '../commons/modalStore'
import { Button, MailDashBox, RegistButton } from '../commons/WHComponent'
import { Container } from '../topNav/TopNav'
import MailNavBar from './MailNavBar'
import { useSearchParams } from 'react-router-dom'

export const MainContainer = styled.div`
    /* position: fixed; */
  top: 0;
  left: 50%;
  /* transform: translateX(-50%); */
  width: 412px;
  height: 100vh;
  background-color: #f7f7f7;
  z-index: 999;
  display: flex;
  flex-direction: column;
`

const MiniIconBox = styled.div`
    width: 22px;
    height: 17px;
    line-height: 20px;
`
const Post = styled.div`
    position: absolute;
    width: 84px;
    height: 84px;
    border-radius: 80px;
    background-color: #2ec4b6;
    bottom: 87px;
    right: 26px;
    display: flex;               
    justify-content: center;      
    align-items: center; 
`
function MailDashBoard() {
//     const modal = useMailModalStore((state) => state);
//     const [searchParams, setSearchParams] = useSearchParams();
//     const modalParam = searchParams.get("modal")

//     useEffect(() => {
//     if (modalParam === "dashboard") {
//       if (!modal.visible) modal.showModal();
//     } else {
//       if (modal.visible) modal.hideModal();
//     }
//   }, [modalParam]);

//     if (!modal.visible) return null;
    
//     const closeModal = () => {
//   modal.hideModal();                   // Zustand 상태 먼저 닫기
//   const newParams = new URLSearchParams(searchParams);
//   newParams.delete("modal");           // modal 키 삭제
//   setSearchParams(newParams);          // URL 업데이트
// };

    const [isModalOpen, setIsModalOpen] = useState(false);

    // 페이지 로드 시 sessionStorage 값으로 모달 상태 복원
    useEffect(() => {
        const saved = sessionStorage.getItem("mailModalOpen");
        if (saved === "true") setIsModalOpen(true);
    }, []);

    // 모달 상태가 바뀔 때 sessionStorage에 저장
    useEffect(() => {
        sessionStorage.setItem("mailModalOpen", isModalOpen);
    }, [isModalOpen]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <>        
     {/* <MainContainer style={{height:'100%'}}> */}
        <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <img src={Cancle} style={{width:'19px', height:'19px', cursor:'pointer'}} onClick={closeModal}></img>
            <Button style={{width:'65px'}}>메일 작성</Button>
        </Container>
        <GrayHr style={{margin:0, backgroundColor:'#ddd'}}/>
        <MailNavBar/>

      <MailDashBox style={{marginTop:'13px', height:'308px'}}>
        <Header>
            <HeadText>
                받은 메일함
            </HeadText>
            <IconBox>
                <img src={go} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
            </IconBox>
        </Header>
        <Hr style={{margin:'0 auto', width:'344px'}}></Hr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <MiniIconBox>
                <img src={unRead} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
            </MiniIconBox>
            <div style={{marginLeft:'12px'}}>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{marginLeft:'34px', marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <MiniIconBox>
                <img src={unRead} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
            </MiniIconBox>
            <div style={{marginLeft:'12px'}}>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{marginLeft:'34px', marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <MiniIconBox>
                <img src={unRead} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
            </MiniIconBox>
            <div style={{marginLeft:'12px'}}>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{marginLeft:'34px', marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <MiniIconBox>
                <img src={unRead} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
            </MiniIconBox>
            <div style={{marginLeft:'12px'}}>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{marginLeft:'34px', marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
      </MailDashBox>
      
      <MailDashBox style={{marginTop:'13px', height:'308px'}}>
        <Header>
            <HeadText>
                보낸 메일함
            </HeadText>
            <IconBox>
                <img src={go} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
            </IconBox>
        </Header>
        <Hr style={{margin:'0 auto', width:'344px'}}></Hr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <div>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{ marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <div>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <div>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <div>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{ marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
      </MailDashBox>
        {/* <Post>
            <img src={go} style={{width:"70%", height: "70%", objectFit:'contain'}}/>
        </Post> */}
    {/* </MainContainer> */}
    </>

  )
}

export default MailDashBoard