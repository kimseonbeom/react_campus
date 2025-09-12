import React from 'react'
import { Container, ContentBox, Header, HeadText,        
         Content, Contents, CirCle, Days, Day, Times, Lecture, LecText, IconBox
} from '../home/HomeWrapper'
import { go } from '../img'
import styled from 'styled-components'
import { Hr } from '../menu/SideMenu'

export const Flex = styled.div`
    display: flex;
`
export const RedBox = styled.div`
    border: 2px solid #ef7c7c;
    border-radius: 3px;
    width: 49px;
    height: 20px;
    text-align: center;
    line-height: 13px;
` 
export const RedBoxFont = styled.span`
    font-size: 12px;
    color: #ef7c7c;
    font-weight: 700;
    `
export const GrayHr = styled.hr`
    background-color: #ccc;
`
function HomeWrapperPro() {
     
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
            <ContentBox style={{height:'315px'}}>
                <Header>
                    <HeadText>미등록 피드백</HeadText>
                    <IconBox>
                        <img src={go} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
                    </IconBox>
                </Header>
                <Hr style={{margin:'0 auto', width:'344px'}}></Hr>
                <div style={{marginLeft:'21px', width:'329px', marginBottom:'13px'}}>
            <Flex style={{margin:'17px 0 0 0'}}>
                <LecText style={{margin:0}}>독서 기반 토론: 사고력과 표현력의 확장</LecText>
                <RedBox style={{marginLeft:'auto'}}>
                    <RedBoxFont>
                        30%
                    </RedBoxFont>
                </RedBox>
            </Flex>
            <LecText style={{margin:0, color:'#aaa', fontSize:'12px', fontWeight:'500'}}>독서와 토론</LecText>
            <span style={{margin:0,fontSize:'11px',color:'#aaa'}}>2025-09-03 23:59:59</span>
            </div>
            <GrayHr style={{margin:'0 auto', width:'344px'}}/>
            <div style={{marginLeft:'21px', width:'329px', marginBottom:'13px'}}>
            <Flex style={{margin:'17px 0 0 0'}}>
                <LecText style={{margin:0}}>독서 기반 토론: 사고력과 표현력의 확장</LecText>
                <RedBox style={{marginLeft:'auto'}}>
                    <RedBoxFont>
                        30%
                    </RedBoxFont>
                </RedBox>
            </Flex>
            <LecText style={{margin:0, color:'#aaa', fontSize:'12px', fontWeight:'500'}}>독서와 토론</LecText>
            <span style={{margin:0,fontSize:'11px',color:'#aaa'}}>2025-09-03 23:59:59</span>
            </div>
            <GrayHr style={{margin:'0 auto', width:'344px'}}/>
            <div style={{marginLeft:'21px', width:'329px', marginBottom:'13px'}}>
            <Flex style={{margin:'17px 0 0 0'}}>
                <LecText style={{margin:0}}>독서 기반 토론: 사고력과 표현력의 확장</LecText>
                <RedBox style={{marginLeft:'auto'}}>
                    <RedBoxFont>
                        30%
                    </RedBoxFont>
                </RedBox>
            </Flex>
            <LecText style={{margin:0, color:'#aaa', fontSize:'12px', fontWeight:'500'}}>독서와 토론</LecText>
            <span style={{margin:0,fontSize:'11px',color:'#aaa'}}>2025-09-03 23:59:59</span>
            </div>
            </ContentBox>
            <ContentBox style={{height:'329px'}}>
                <Header>
                    <HeadText>출결 이의신청</HeadText>
                    <IconBox>
                        <img src={go} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
                    </IconBox>
                </Header>
                <Hr style={{margin:'0 auto', width:'344px'}}></Hr>
                <div style={{marginLeft:'21px', width:'329px', marginBottom:'6px'}}>
                    <Flex style={{margin:'17px 0 0 0'}}>
                        <LecText>출결 이의신청있습니다.</LecText>
                        <LecText style={{fontWeight:'500',fontSize:'12px',marginLeft:'auto'}}>20220001 김민준</LecText>
                    </Flex>
                    <Flex>
                        <LecText style={{fontSize:'12px',color:'#aaa'}}>독서와 토론</LecText>
                        <LecText style={{fontSize:'11px',color:'#aaa', marginLeft:'auto'}}>2025-09-03 23:59:59</LecText>
                    </Flex>
                </div>
                <GrayHr style={{margin:'0 auto', width:'344px'}}/>
                <div style={{marginLeft:'21px', width:'329px', marginBottom:'6px'}}>
                    <Flex style={{margin:'17px 0 0 0'}}>
                        <LecText>출결 이의신청있습니다.</LecText>
                        <LecText style={{fontWeight:'500',fontSize:'12px',marginLeft:'auto'}}>20220001 김민준</LecText>
                    </Flex>
                    <Flex>
                        <LecText style={{fontSize:'12px',color:'#aaa'}}>독서와 토론</LecText>
                        <LecText style={{fontSize:'11px',color:'#aaa', marginLeft:'auto'}}>2025-09-03 23:59:59</LecText>
                    </Flex>
                </div>
                <GrayHr style={{margin:'0 auto', width:'344px'}}/>
                <div style={{marginLeft:'21px', width:'329px', marginBottom:'9px'}}>
                    <Flex style={{margin:'17px 0 0 0'}}>
                        <LecText>출결 이의신청있습니다.</LecText>
                        <LecText style={{fontWeight:'500',fontSize:'12px',marginLeft:'auto'}}>20220001 김민준</LecText>
                    </Flex>
                    <Flex>
                        <LecText style={{fontSize:'12px',color:'#aaa'}}>독서와 토론</LecText>
                        <LecText style={{fontSize:'11px',color:'#aaa', marginLeft:'auto'}}>2025-09-03 23:59:59</LecText>
                    </Flex>
                </div>
                <GrayHr style={{margin:'0 auto', width:'344px'}}/>
                <div style={{marginLeft:'21px', width:'329px', marginBottom:'13px'}}>
                    <Flex style={{margin:'17px 0 0 0'}}>
                        <LecText>출결 이의신청있습니다.</LecText>
                        <LecText style={{fontWeight:'500',fontSize:'12px',marginLeft:'auto'}}>20220001 김민준</LecText>
                    </Flex>
                    <Flex>
                        <LecText style={{fontSize:'12px',color:'#aaa'}}>독서와 토론</LecText>
                        <LecText style={{fontSize:'11px',color:'#aaa', marginLeft:'auto'}}>2025-09-03 23:59:59</LecText>
                    </Flex>
                </div>
            </ContentBox>
            </Container>
  )
}

export default HomeWrapperPro