import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { 
    ListHeader, CatTitle, FlexDiv, Profile,
    WHContainer, DateBox, Title, Button, SearchDrop, DropHeader, DropList, DropOption,
    AttenBox, AttenText, AttenChange, NumberContainer,
    PageNation, PageArrowButton, PageNumText, PageNumberButton, PageText,
    CheckContainer, CheckBox, CheckMark, CheckText }
    from '../commons/WHComponent'
import { dropdownArrow, pageArrow1, pageArrow2, pageArrow3, pageArrow4 } from '../img'

const AttenNum = styled.div`
    font-size: 60px;
    font-weight: 700;
    color: #2EC4B6;
    text-align: center;
    line-height: 80px;
`
const Count = styled.div`
    font-size: 20px;
    text-align: center;
`
const Circle = styled.div`
    width: 14px;
    height: 14px;
    background-color: #C2E8B7;
    border-radius: 7px;
    margin-top: 4px;
    margin-right: 10px;
`

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * 900) + 100;
}

function LectureAttendanceList() {
    const [dropOpen, setDropOpen] = useState(false);
    const [dropSelected, setDropSelected] = useState("전체");
    const [isOpen, setIsOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(600);
    const [randomNumber, setRandomNumber] = useState(null);
    const [checked, setChecked] = useState(false);

    const toggleOpen = () => setDropOpen(!dropOpen);

    const handleDropSelect = (value) => {
        setDropSelected(value);
        setDropOpen(false);
    }

    // 옵션 선택
    const handleSelect = () => {
        const rand = getRandomNumber(1, 500);  // 1~500 사이 랜덤
        setRandomNumber(rand);
        setIsOpen(true);
    };

    const handleClose = () => {
    setIsOpen(false);
    setTimeLeft(600);
    setRandomNumber(null);
    };

    useEffect(() => {
    let timer;
    if (isOpen && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // 시간이 끝나면 모달 닫기
      setIsOpen(false);
    }

    return () => clearInterval(timer);
    }, [isOpen, timeLeft]);

  return (
    <>
        <div style={{width:"100%", minHeight:"731px", backgroundColor:"#f7f7f7"}}>
            <ListHeader style={{height:'84px'}}>
                <div>
                    <FlexDiv>
                        <CatTitle>출결</CatTitle>
                        <SearchDrop style={{marginTop:'-9px', marginLeft:'75px'}}>
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
                        {!isOpen ? (
                            <Button onClick={handleSelect}>시작</Button>
                        ) : (
                            <Button onClick={handleClose}>닫기</Button>
                        )}
                    </FlexDiv>
                </div>
                <FlexDiv style={{marginTop:'10px', justifyContent:'center'}}>
                    <FlexDiv style={{marginRight:'10px'}}>
                        <Circle />
                        <DateBox style={{color:'#777', fontSize:'13px'}}>출석 : 17</DateBox>
                    </FlexDiv>
                    <FlexDiv style={{marginRight:'10px'}}>
                        <Circle style={{backgroundColor:'#FFF2B7'}}/>
                        <DateBox style={{color:'#777', fontSize:'13px'}}>출석 : 17</DateBox>
                    </FlexDiv>
                    <FlexDiv>
                        <Circle style={{backgroundColor:'#FFB8B8'}}/>
                        <DateBox style={{color:'#777', fontSize:'13px'}}>출석 : 17</DateBox>
                    </FlexDiv>
                </FlexDiv>
            </ListHeader>
            {isOpen && (
                <NumberContainer style={{height:'159px'}}>
                    <Title style={{textAlign:'center', marginTop:'16px'}}>05-01 8주차 출석</Title>
                    <AttenNum>{randomNumber}</AttenNum>
                    <Count>
                        {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:
                        {String(timeLeft % 60).padStart(2, '0')}
                    </Count>
                </NumberContainer>
            )}
            <CheckContainer>
                <label style={{display: "flex", justifyContent:'end', marginRight:'14px'}}>
                    <CheckBox type='checkbox' checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
                    <CheckMark/>
                    <CheckText>이의신청 (1)</CheckText>
                </label>
            </CheckContainer>
            <WHContainer style={{padding:'12px 22px'}}>
                <Profile></Profile>
                <Title style={{lineHeight:'40px', marginLeft:'15px'}}>20171426 권오규</Title>
                <AttenBox style={{backgroundColor:'#F0F0F0', marginTop:'6px', width:'73px', height:'29px'}}>
                </AttenBox>
            </WHContainer>
            <WHContainer style={{padding:'12px 22px'}}>
                <Profile></Profile>
                <Title style={{lineHeight:'40px', marginLeft:'15px'}}>20171426 권오규</Title>
                <AttenBox style={{backgroundColor:'#C2E8B7', marginTop:'6px', width:'73px', height:'29px'}}>
                    <AttenText style={{marginTop:'4px', fontWeight:'500'}}>출석</AttenText>
                </AttenBox>
            </WHContainer>
            <WHContainer style={{padding:'12px 22px'}}>
                <Profile></Profile>
                <Title style={{lineHeight:'40px', marginLeft:'15px'}}>20171426 권오규</Title>
                <DateBox style={{marginLeft:'40px', marginTop:'11px'}}>2025-05-09 수정</DateBox>
                <AttenBox style={{backgroundColor:'#C2E8B7', marginTop:'6px', width:'73px', height:'29px'}}>
                    <AttenText style={{marginTop:'4px', fontWeight:'500'}}>출석</AttenText>
                </AttenBox>
            </WHContainer>
            <WHContainer style={{padding:'12px 22px'}}>
                <Profile></Profile>
                <Title style={{lineHeight:'40px', marginLeft:'15px'}}>20171426 권오규</Title>
                <AttenChange style={{marginLeft:'65px', marginTop:'9px'}}>이의신청</AttenChange>
                <AttenBox style={{backgroundColor:'#FFF2B7', marginTop:'5px', width:'73px', height:'29px'}}>
                    <AttenText style={{marginTop:'4px', fontWeight:'500', backgroundColor:''}}>지각</AttenText>
                </AttenBox>
            </WHContainer>
            <WHContainer style={{padding:'12px 22px'}}>
                <Profile></Profile>
                <Title style={{lineHeight:'40px', marginLeft:'15px'}}>20171426 권오규</Title>
                <AttenChange style={{marginLeft:'65px', marginTop:'9px'}}>이의신청</AttenChange>
                <AttenBox style={{backgroundColor:'#FFB8B8', marginTop:'5px', width:'73px', height:'29px'}}>
                    <AttenText style={{marginTop:'4px', fontWeight:'500', backgroundColor:''}}>결석</AttenText>
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