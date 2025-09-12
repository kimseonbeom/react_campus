import React, { useState } from 'react'
import MailNavBar from './MailNavBar'
import { Container } from '../topNav/TopNav'
import { searchIcon, listArrow, pageArrow1, pageArrow2, pageArrow3,
        pageArrow4, allSelect, trash, radioCheck, replace, read, unRead, unImp, imp,
        unLock, lock, Cancle } from '../img'
import { 
    ListHeader, FlexDiv, SearchBar, SearchText,
    DateBox, Title, Button,
    PageNation, PageArrowButton, PageNumText, PageNumberButton, PageText, 
    WHContainer, RegistButton,
    CheckText, MailView, CheckBox, CheckMark
    }
    from '../commons/WHComponent'
import { GrayHr } from '../home/HomeWrapperPro'
import styled from 'styled-components'

const BoxButton = styled.input`
    width: 22px;
    height: 22px;
    border: 1px solid #aaa;
    border-radius: 3px;
    background-color: #fff;
    background-image: url(${allSelect});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    outline: none;
`
const RadioButton = styled.input`
    display: none;
`
const RadioMark = styled.span`
    width: 13px;
    height: 13px;
    cursor: pointer;
    border: 1px solid #bbb;
    border-radius:8px;
    background-color: white;
    display: block;
    margin-top: 2px;
    

    ${RadioButton}:checked + &{
        background-color: #fff;
        background-image: url(${radioCheck});
        background-size: 65%;
        background-repeat: no-repeat;
        background-position: center;
    }
`

function MailSend() {
    const [checked, setChecked] = useState("");
    const [boxChecked, setBoxChecked] = useState([]);

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (boxChecked.includes(value)) {
            setBoxChecked(boxChecked.filter((v) => v != value));
        } else {
            setBoxChecked([...boxChecked, value])
        }
    }

  return (
    <>  
        <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <img src={Cancle} style={{width:'19px', height:'19px'}}></img>
            <RegistButton>메일 작성</RegistButton>
        </Container>
        <GrayHr style={{margin:0, backgroundColor:'#ddd'}}/>
        <MailNavBar/>
        <div style={{width:"100%", minHeight:"100vh", backgroundColor:"#f7f7f7"}}>
            <ListHeader style={{height:'97px', padding:'13px 25px'}}>
                <FlexDiv style={{justifyContent:'center'}}>
                    <SearchBar style={{marginTop:'3px', marginLeft:'0px', width:'378px', justifyContent:'flex-start'}}>
                        <img src={searchIcon} style={{width:'15px', height:'16px', marginBottom:"8px"}}></img>
                        <SearchText placeholder='검색어를 입력해 주세요.' style={{width:'310px'}}></SearchText>
                    </SearchBar>
                </FlexDiv>
                <FlexDiv style={{marginTop:'10px'}}>
                    <BoxButton></BoxButton>
                    <BoxButton style={{backgroundImage:`url(${trash})`, marginLeft:'8px'}}></BoxButton>
                    <BoxButton style={{backgroundImage:`url(${replace})`, marginLeft:'8px'}}></BoxButton>
                    <FlexDiv style={{width:'307px', justifyContent:'end', marginTop:'3px'}}>
                        <label style={{display:'flex', marginRight:'10px'}}>
                            <RadioButton type='radio' name="mail" value="imp" checked={checked === "imp"} onChange={(e) => setChecked(e.target.value)}/>
                            <RadioMark/>
                            <CheckText style={{color:'#707070'}}>중요 메일</CheckText>
                        </label>
                        <label style={{display:'flex'}}>
                            <RadioButton type='radio' name="mail" value="lock" checked={checked === "lock"} onChange={(e) => setChecked(e.target.value)}/>
                            <RadioMark/>
                            <CheckText style={{color:'#707070'}}>잠긴 메일</CheckText>
                        </label>
                    </FlexDiv>
                </FlexDiv>
            </ListHeader>
            <WHContainer>
                <MailView>
                    <img src={unLock} style={{height:'20px', marginTop:'8px'}}></img>
                </MailView>
                <div>
                    <FlexDiv>
                        <label style={{display: "flex", justifyContent:'end', marginLeft:'10px'}}>
                            <CheckBox type='checkbox' name="check"  value="1" checked={boxChecked.includes("1")} onChange={handleCheckboxChange}/>
                            <CheckMark/>
                        </label>
                        <Title style={{marginLeft:'10px', marginTop:'-2px'}}>김나연</Title>
                        <DateBox style={{marginLeft:'10px'}}>20220022</DateBox>
                    </FlexDiv>
                    <Title style={{width:'200px', marginLeft:'37px', marginTop:'-3px', fontWeight:'400'}}>과제 질문 있습니다~</Title>
                </div>
                <div style={{marginLeft:'auto', marginTop:'-2px'}}>
                    <DateBox>25-08-21</DateBox>
                    <div>
                        <img src={unImp} style={{width:'18px',height:'18px', marginLeft:'32px', cursor:'pointer'}}></img>
                    </div>
                </div>
            </WHContainer>
            <WHContainer>
                <MailView>
                    <img src={lock} style={{height:'20px', marginTop:'8px'}}></img>
                </MailView>
                <div>
                    <FlexDiv>
                        <label style={{display: "flex", justifyContent:'end', marginLeft:'10px'}}>
                            <CheckBox type='checkbox' name="check" value="2" checked={boxChecked.includes("2")} onChange={handleCheckboxChange}/>
                            <CheckMark/>
                        </label>
                        <Title style={{marginLeft:'10px', marginTop:'-2px'}}>김나연</Title>
                        <DateBox style={{marginLeft:'10px'}}>20220022</DateBox>
                    </FlexDiv>
                    <Title style={{width:'200px', marginLeft:'37px', marginTop:'-3px', fontWeight:'400'}}>과제 질문 있습니다~</Title>
                </div>
                <div style={{marginLeft:'auto', marginTop:'-2px'}}>
                    <DateBox>25-08-21</DateBox>
                    <div>
                        <img src={imp} style={{width:'18px',height:'18px', marginLeft:'32px', cursor:'pointer'}}></img>
                    </div>
                </div>
            </WHContainer>
            <WHContainer>
                <MailView>
                    <img src={lock} style={{height:'20px', marginTop:'8px'}}></img>
                </MailView>
                <div>
                    <FlexDiv>
                        <label style={{display: "flex", justifyContent:'end', marginLeft:'10px'}}>
                            <CheckBox type='checkbox' name="check"  value="3" checked={boxChecked.includes("3")} onChange={handleCheckboxChange}/>
                            <CheckMark/>
                        </label>
                        <Title style={{marginLeft:'10px', marginTop:'-2px'}}>김나연</Title>
                        <DateBox style={{marginLeft:'10px'}}>20220022</DateBox>
                    </FlexDiv>
                    <Title style={{width:'200px', marginLeft:'37px', marginTop:'-3px', fontWeight:'400'}}>과제 질문 있습니다~</Title>
                </div>
                <div style={{marginLeft:'auto', marginTop:'-2px'}}>
                    <DateBox>25-08-21</DateBox>
                    <div>
                        <img src={imp} style={{width:'18px',height:'18px', marginLeft:'32px', cursor:'pointer'}}></img>
                    </div>
                </div>
            </WHContainer>
            <WHContainer>
                <MailView>
                    <img src={unLock} style={{height:'20px', marginTop:'8px'}}></img>
                </MailView>
                <div>
                    <FlexDiv>
                        <label style={{display: "flex", justifyContent:'end', marginLeft:'10px'}}>
                            <CheckBox type='checkbox' name="check" value="4" checked={boxChecked.includes("4")} onChange={handleCheckboxChange}/>
                            <CheckMark/>
                        </label>
                        <Title style={{marginLeft:'10px', marginTop:'-2px'}}>김나연</Title>
                        <DateBox style={{marginLeft:'10px'}}>20220022</DateBox>
                    </FlexDiv>
                    <Title style={{width:'200px', marginLeft:'37px', marginTop:'-3px', fontWeight:'400'}}>과제 질문 있습니다~</Title>
                </div>
                <div style={{marginLeft:'auto', marginTop:'-2px'}}>
                    <DateBox>25-08-21</DateBox>
                    <div>
                        <img src={unImp} style={{width:'18px',height:'18px', marginLeft:'32px', cursor:'pointer'}}></img>
                    </div>
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

export default MailSend