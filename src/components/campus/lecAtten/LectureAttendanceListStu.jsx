import React from 'react'
import styled from 'styled-components'
import { pageArrow1, pageArrow2, pageArrow3, pageArrow4 } from '../img'
import { 
    ListHeader, CatTitle, FlexDiv,
    WHContainer, DateBox, Title, Button, NumberContainer,
    AttenBox, AttenText, AttenChangeIng, AttenChange, AttenPass,
    PageNation, PageArrowButton, PageNumText, PageNumberButton, PageText }
    from '../commons/WHComponent'

const AttenDate = styled.div`
    font-size: 12px;
    text-align: center;
    margin-top: 3.2px;
`
const NumberInput = styled.input`
    width: 319px;
    height: 37px;
    border: 2px solid #2EC4B6;
    border-radius: 0px;
    outline: none;
    text-align: center;
    font-size: 14px;
    margin-left: 23px;
    margin-top: 12px;
    
`

function LectureAttendanceList() {

  return (
    <>
        <div style={{width:"100%", minHeight:"731px", backgroundColor:"#f7f7f7"}}>
            <ListHeader style={{height:'56px'}}>
                <FlexDiv>
                    <CatTitle>출결</CatTitle>
                </FlexDiv>
            </ListHeader>
            <NumberContainer>
                <Title style={{textAlign:'center', marginTop:'13px'}}>05-01 8주차 출석</Title>
                <NumberInput placeholder='숫자를 입력해주세요'></NumberInput>
                <Button style={{width:'84px', height:'30px', lineHeight:'20px', marginLeft:'142px', marginTop:'10px'}}>출석하기</Button>
            </NumberContainer>
            <WHContainer style={{height:'76px'}}>
                <div>
                    <FlexDiv>
                        <Title>1주차</Title>
                        <DateBox style={{marginLeft:'10px', marginTop:'1px'}}>(03-03 ~ 03-08)</DateBox>
                    </FlexDiv>
                    <AttenChange>이의신청</AttenChange>
                </div>
                <AttenBox>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>출석</AttenText>
                </AttenBox>
                <AttenBox style={{backgroundColor:'#FFF2B7'}}>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>지각</AttenText>
                </AttenBox>
            </WHContainer>
            <WHContainer style={{height:'76px'}}>
                <div>
                    <FlexDiv>
                        <Title>1주차</Title>
                        <DateBox style={{marginLeft:'10px', marginTop:'1px'}}>(03-03 ~ 03-08)</DateBox>
                    </FlexDiv>
                </div>
                <AttenBox>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>출석</AttenText>
                </AttenBox>
                <AttenBox>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>출석</AttenText>
                </AttenBox>
            </WHContainer>
            <WHContainer style={{height:'76px'}}>
                <div>
                    <FlexDiv>
                        <Title>1주차</Title>
                        <DateBox style={{marginLeft:'10px', marginTop:'1px'}}>(03-03 ~ 03-08)</DateBox>
                    </FlexDiv>
                    <FlexDiv>
                        <AttenChange>이의신청</AttenChange>
                        <AttenPass></AttenPass>
                    </FlexDiv>
                </div>
                <AttenBox style={{backgroundColor:'#FFB8B8'}}>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>결석</AttenText>
                </AttenBox>
                <AttenBox>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>출석</AttenText>
                </AttenBox>
            </WHContainer>
            <WHContainer style={{height:'76px'}}>
                <div>
                    <FlexDiv>
                        <Title>1주차</Title>
                        <DateBox style={{marginLeft:'10px', marginTop:'1px'}}>(03-03 ~ 03-08)</DateBox>
                    </FlexDiv>
                    <AttenChangeIng>대기중</AttenChangeIng>
                </div>
                <AttenBox style={{backgroundColor:'#FFB8B8'}}>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>결석</AttenText>
                </AttenBox>
                <AttenBox>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>출석</AttenText>
                </AttenBox>
            </WHContainer>
            <nav>
                <PageNation>
                    <PageArrowButton>
                        <PageText href="#">
                            <img src={pageArrow1} style={{width:"13px", height:"10px", marginLeft:'6px'}}></img>
                        </PageText>
                    </PageArrowButton>
                    <PageArrowButton>
                        <PageText href="#">
                            <img src={pageArrow2} style={{width:"6px", height:"10px", marginLeft:'10px'}}></img>
                        </PageText>
                    </PageArrowButton>
                    <PageNumberButton>
                        <PageNumText href="#">1</PageNumText>
                    </PageNumberButton>
                    <PageArrowButton>
                        <PageText href="#">
                            <img src={pageArrow3} style={{width:"6px", height:"10px", marginLeft:'10px'}}></img>
                        </PageText>
                    </PageArrowButton>
                    <PageArrowButton>
                        <PageText href="#">
                            <img src={pageArrow4} style={{width:"13px", height:"10px", marginLeft:'6px'}}></img>
                        </PageText>
                    </PageArrowButton>
                </PageNation>
            </nav>
        </div>

    </>
  )
}

export default LectureAttendanceList