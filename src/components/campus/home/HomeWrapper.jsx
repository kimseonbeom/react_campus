import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Hr } from '../menu/SideMenu';
import { go } from '../img';
import { useAuthStore } from '../commons/modalStore';

export const Container = styled.div`
    margin: 0 auto;
    padding: 4px 21px 20px 21px;
    background-color: #f7f7f7;
    height: 100%;
    min-height: 100vh; 
`
export const ContentBox = styled.div`
    width: 100%;
    height: 209px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 5px;
    &:last-child {
    margin-bottom: 0; 
  }
`
export const Header = styled.div`
    width: 100%;
    height: 48px;
    padding: 13px 21px 17px 21px;
 
    display: flex;
`
export const HeadText = styled.h3`
    font-size: 18px;
    font-weight: bold;
    line-height: 29px;
`
export const Contents = styled.div`
    padding: 19px 24px 0 24px; 
`
export const Content = styled.div`
    width: 100%;
    height: 11px;
    display: flex;
`
export const CirCle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: #2ec4b6;
    margin-top: 4px;
`
export const Days =styled.div`
    width: 52px;
    height: 14px;
    margin-left: 18px;
`
export const Day = styled.h3`
    color: #ef4141;
    font-size: 13px;
    font-weight: 700;
`
export const LecText = styled.h3`
    font-size: 13px;
    font-weight: 600;
`
export const Times = styled.div`
    width: 68px;
    height: 14px;
`
export const Lecture = styled.div`
    height: 14px;
`
export const IconBox = styled.div`
    width: 20px;
    height: 20px;
    margin-left: auto;
    line-height: 23px;
`
const Gauge = styled.div`
    border-radius: 8px;
    width: 335px;
    height: 17px;
    background-color: #d9d9d9;
`
const Status = styled.div`
    width: 2px;
    height: 36px;
    background-color: #2ec4b6;
`
function HomeWrapper() {
    const user = useAuthStore(state => state.user);
useEffect(() => {
  if (user?.mem_id) {
    // API 호출 등 mem_id 사용
  }
}, [user]);
  return (
    <Container>
        <ContentBox style={{marginTop:'15px'}}>
            <Header>
                <HeadText>예정 강의</HeadText>
            </Header>
            <Hr style={{margin:'0 auto', width:'344px'}}></Hr>
            <Contents>
                <Content>
                    <CirCle></CirCle>
                    <Days>
                        <Day>D-Day</Day>
                    </Days>
                    <Times>
                        <LecText>14 : 00</LecText>
                    </Times>
                    <Lecture>
                        <LecText>독서와 토론</LecText>
                    </Lecture>
                </Content>
                <Content style={{marginTop:'25px'}}>
                    <CirCle style={{backgroundColor:'#aaa'}}></CirCle>
                    <Days>
                        <Day style={{color:'#aaa'}}>D-2</Day>
                    </Days>
                    <Times>
                        <LecText style={{color:'#aaa'}}>09 : 00</LecText>
                    </Times>
                    <Lecture>
                        <LecText style={{color:'#aaa'}}>글쓰기와 프레젠테이션</LecText>
                    </Lecture>
                </Content>
                <Content style={{marginTop:'25px'}}>
                    <CirCle style={{backgroundColor:'#aaa'}}></CirCle>
                    <Days>
                        <Day style={{color:'#aaa'}}>D-4</Day>
                    </Days>
                    <Times>
                        <LecText style={{color:'#aaa'}}>15 : 00</LecText>
                    </Times>
                    <Lecture>
                        <LecText style={{color:'#aaa'}}>자바 스크립트</LecText>
                    </Lecture>
                </Content>
                <Content style={{marginTop:'25px'}}>
                    <CirCle style={{backgroundColor:'#aaa'}}></CirCle>
                    <Days>
                        <Day style={{color:'#aaa'}}>D-5</Day>
                    </Days>
                    <Times>
                        <LecText style={{color:'#aaa'}}>09 : 00</LecText>
                    </Times>
                    <Lecture>
                        <LecText style={{color:'#aaa'}}>자료 구조</LecText>
                    </Lecture>
                </Content>
            </Contents>
        </ContentBox>
        <ContentBox style={{height:'247px'}}>
            <Header>
                <HeadText>
                    금주의 출결
                </HeadText>
                <IconBox>
                    <img src={go} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
                </IconBox>
            </Header>
            <Hr style={{margin:'0 auto', width:'344px'}}></Hr>
            <div style={{display:'flex', justifyContent:'center', marginTop:'17px', marginBottom:'21px'}}>
                <Gauge></Gauge>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly', width:'390px' ,alignItems:'center'}}>
            <div style={{width:'20%', textAlign:'center'}}>
            <LecText>2025-09-01</LecText>
            </div>
            <div style={{width:'20%', textAlign:'center'}}>
                <LecText>자료구조</LecText>
            </div>
            <div style={{width:'20%', textAlign:'center'}}>
                <LecText>김현수</LecText>
            </div>
            <div style={{width:'10%'}}>
                <CirCle style={{width:'16px',height:'16px',marginTop:'-7px'}}></CirCle>
            </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly', width:'390px' ,alignItems:'center', marginTop:'10px' }}>
            <div style={{width:'20%', textAlign:'center'}}>
            <LecText>2025-09-01</LecText>
            </div>
            <div style={{width:'20%', textAlign:'center'}}>
                <LecText>자료구조</LecText>
            </div>
            <div style={{width:'20%', textAlign:'center'}}>
                <LecText>김현수</LecText>
            </div>
            <div style={{width:'10%'}}>
                <CirCle style={{width:'16px',height:'16px',marginTop:'-7px'}}></CirCle>
            </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly', width:'390px' ,alignItems:'center',marginTop:'10px'}}>
            <div style={{width:'20%', textAlign:'center'}}>
            <LecText>2025-09-01</LecText>
            </div>
            <div style={{width:'20%', textAlign:'center'}}>
                <LecText>자료구조</LecText>
            </div>
            <div style={{width:'20%', textAlign:'center'}}>
                <LecText>김현수</LecText>
            </div>
            <div style={{width:'10%'}}>
                <CirCle style={{width:'16px',height:'16px',marginTop:'-7px',backgroundColor:'#ffeeb3'}}></CirCle>
            </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly', width:'390px' ,alignItems:'center',marginTop:'10px'}}>
            <div style={{width:'20%', textAlign:'center'}}>
            <LecText>2025-09-01</LecText>
            </div>
            <div style={{width:'20%', textAlign:'center'}}>
                <LecText>자료구조</LecText>
            </div>
            <div style={{width:'20%', textAlign:'center'}}>
                <LecText>김현수</LecText>
            </div>
            <div style={{width:'10%'}}>
                <CirCle style={{width:'16px',height:'16px',marginTop:'-7px', backgroundColor:'#ef7c7c'}}></CirCle>
            </div>
            </div>
        </ContentBox>
        <ContentBox style={{height:'288px'}}>
            <Header>
                <HeadText>
                    미제출 과제
                </HeadText>
                <IconBox>
                    <img src={go} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
                </IconBox>
            </Header>
            <Hr style={{margin:'0 auto', width:'344px'}}></Hr>
            <div style={{display:'flex', width:'333px' ,alignItems:'center', marginTop:'17px', marginLeft:'17px'}}>
            <Status></Status>
            <Day style={{margin:0, width:'73px',textAlign:'center'}}>D-Day</Day>
            <div style={{margin:0}}>
                <span style={{fontSize:'14px', fontWeight:'bold'}}>
                    1주차 과제제출입니다.
                </span>
                <LecText style={{fontSize:'12px', color:'#aaa', margin:0}}>
                    자바프로그래밍
                </LecText>
            </div>
            <div style={{width:'71px', marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa', textAlign:'right', margin:0}}>2025-09-03 23:59:59</LecText>
            </div>
            </div>
            <div style={{display:'flex', width:'333px' ,alignItems:'center', marginTop:'17px', marginLeft:'17px'}}>
            <Status style={{backgroundColor:'#aaa'}}></Status>
            <Day style={{margin:0, width:'73px',textAlign:'center',color:'#aaa'}}>D-1</Day>
            <div style={{margin:0}}>
                <span style={{fontSize:'14px', fontWeight:'bold'}}>
                    1주차 과제제출입니다.
                </span>
                <LecText style={{fontSize:'12px', color:'#aaa', margin:0}}>
                    자바프로그래밍
                </LecText>
            </div>
            <div style={{width:'71px', marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa', textAlign:'right', margin:0}}>2025-09-03 23:59:59</LecText>
            </div>
            </div>
            <div style={{display:'flex', width:'333px' ,alignItems:'center', marginTop:'17px', marginLeft:'17px'}}>
            <Status style={{backgroundColor:'#aaa'}}></Status>
            <Day style={{margin:0, width:'73px',textAlign:'center',color:'#aaa'}}>D-1</Day>
            <div style={{margin:0}}>
                <span style={{fontSize:'14px', fontWeight:'bold'}}>
                    1주차 과제제출입니다.
                </span>
                <LecText style={{fontSize:'12px', color:'#aaa', margin:0}}>
                    자바프로그래밍
                </LecText>
            </div>
            <div style={{width:'71px', marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa', textAlign:'right', margin:0}}>2025-09-03 23:59:59</LecText>
            </div>
            </div>
            <div style={{display:'flex', width:'333px' ,alignItems:'center', marginTop:'17px', marginLeft:'17px'}}>
            <Status style={{backgroundColor:'#aaa'}}></Status>
            <Day style={{margin:0, width:'73px',textAlign:'center',color:'#aaa'}}>D-1</Day>
            <div style={{margin:0}}>
                <span style={{fontSize:'14px', fontWeight:'bold'}}>
                    1주차 과제제출입니다.
                </span>
                <LecText style={{fontSize:'12px', color:'#aaa', margin:0}}>
                    자바프로그래밍
                </LecText>
            </div>
            <div style={{width:'71px', marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa', textAlign:'right', margin:0}}>2025-09-03 23:59:59</LecText>
            </div>
            </div>
        </ContentBox>
    </Container>
   
  )
}

export default HomeWrapper