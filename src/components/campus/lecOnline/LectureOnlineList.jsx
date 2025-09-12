import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { dropdownArrow, listArrow, pageArrow1, pageArrow2, pageArrow3,
        pageArrow4, thumnail } from '../img'
import { 
    ListHeader, CatTitle, FlexDiv,
    WHContainer, DateBox, Title, Button, SearchDrop, DropHeader, DropList, DropOption,
    PageNation, PageArrowButton, PageNumText, PageNumberButton, PageText}
    from '../commons/WHComponent'

export const Thumnail = styled.div`
    width: 106px;
    height: 64px;
    border-radius: 5px;
    background-image: url(${thumnail});
`

const ProgressContainer = styled.div`
  width: 372px;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: 20%;
  background-color: #2EC4B6;
  text-align: center;
  line-height: 22px;
  color: #212121;
`;

function LectureOnlineList() {
    const [dropOpen, setDropOpen] = useState(false);
    const [dropSelected, setDropSelected] = useState("전체");

    const toggleOpen = () => setDropOpen(!dropOpen);

    const handleDropSelect = (value) => {
        setDropSelected(value);
        setDropOpen(false);
    }


  return (
    <>
        <div style={{width:"100%", minHeight:"100vh", backgroundColor:"#f7f7f7"}}>
            <ListHeader style={{height:'96px'}}>
                <div>
                    <FlexDiv>
                        <CatTitle>온라인 강의</CatTitle>
                        <Button>등록</Button>
                    </FlexDiv>
                </div>
                <FlexDiv style={{marginTop:'10px', justifyContent:'center'}}>
                    <SearchDrop style={{width:'371px',marginTop:'-9px'}}>
                        <DropHeader style={{width:'371px', height:'28px', fontSize:'13px', lineHeight:'16px', justifyContent:'center', gap:'10px'}} onClick={toggleOpen}>
                            <div>{dropSelected}</div>
                            <div>
                                <img src={dropdownArrow} style={{width:"13px", height:"8px", marginLeft:'auto', display:'block', marginTop:'4px'}}></img>
                            </div>
                        </DropHeader>
                        {dropOpen && (
                            <DropList style={{width:'371px', textAlign:'center'}}>
                                <DropOption style={{padding:'8px 10px', fontSize:'13px', textAlign:'center'}} onClick={() => handleDropSelect("전체")}>전체</DropOption>
                                <DropOption style={{padding:'8px 10px', fontSize:'13px', textAlign:'center'}} onClick={() => handleDropSelect("옵션1")}>옵션1</DropOption>
                                <DropOption style={{padding:'8px 10px', fontSize:'13px', textAlign:'center'}} onClick={() => handleDropSelect("옵션2")}>옵션2</DropOption>
                                <DropOption style={{padding:'8px 10px', fontSize:'13px', textAlign:'center'}} onClick={() => handleDropSelect("옵션3")}>옵션3</DropOption>
                            </DropList>
                        )}
                    </SearchDrop>
                </FlexDiv>
            </ListHeader>
            <WHContainer style={{height:'122px', flexDirection:'column'}}>
                <FlexDiv>
                    <Thumnail />
                    <div style={{marginLeft:'15px', display:'flex', flexDirection:'column', gap:'2px'}}>
                        <Title>객체지향 핵심 이해</Title>
                        <DateBox>자바로 배우는 고급 프로그래밍</DateBox>
                        <DateBox>2025-09-02 ~ 2025-09-03</DateBox>
                    </div>
                    <div style={{marginLeft:'auto', marginTop:'8px'}}>
                        <img src={listArrow} style={{height:'20px', marginTop:'6px'}}></img>
                    </div>
                </FlexDiv>
                <div style={{marginTop:'10px'}}>
                    <ProgressContainer>
                        <ProgressFill>20%</ProgressFill>
                    </ProgressContainer>
                </div>
            </WHContainer>
            <WHContainer style={{height:'122px', flexDirection:'column'}}>
                <FlexDiv>
                    <Thumnail />
                    <div style={{marginLeft:'15px', display:'flex', flexDirection:'column', gap:'2px'}}>
                        <Title>객체지향 핵심 이해</Title>
                        <DateBox>자바로 배우는 고급 프로그래밍</DateBox>
                        <DateBox>2025-09-02 ~ 2025-09-03</DateBox>
                    </div>
                    <div style={{marginLeft:'auto', marginTop:'8px'}}>
                        <img src={listArrow} style={{height:'20px', marginTop:'6px'}}></img>
                    </div>
                </FlexDiv>
                <div style={{marginTop:'10px'}}>
                    <ProgressContainer>
                        <ProgressFill>20%</ProgressFill>
                    </ProgressContainer>
                </div>
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

export default LectureOnlineList