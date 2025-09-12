import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Content, ContentBox, Header, HeadText, } from '../home/HomeWrapper'
import { Button, CatTitle, CheckBox, CheckContainer, CheckMark, CheckText, CustomInput,
        DropHeader, DropList, DropOption, FlexDiv, ListHeader, PageArrowButton, PageNation,
        PageNumberButton, PageNumText, PageText, SearchBar, SearchDrop, SearchText
} from '../commons/WHComponent';
import { Hr } from '../menu/SideMenu';
import { dropdownArrow, searchIcon, pageArrow1, pageArrow2, pageArrow3, pageArrow4,
        calender, 
} from '../img';

export const GreenBox = styled.div`
  width: 63px;
  height: 22px;
  border: 1px solid #2ec4b6;
  border-radius: 5px;
  background-color: #fff;
  color: #2ec4b6;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
`
const GrayBox = styled.div`
  width: 63px;
  height: 22px;
  border: 1px solid #aaa;
  border-radius: 5px;
  background-color: #fff;
  color: #aaa;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
`
export const ContentText = styled.h3`
  font-size: 13px;
  font-weight: 700;
  margin: 0;
`
export const OverviewText = styled.h3`
  font-size: 13px;
  font-weight: 700;
  color: #aaa;
  margin: 0;
`
function ProjectObjectProjectList() {
   const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("전체");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const startInputRef = useRef(null);
    const endInputRef = useRef(null);
    const [checked, setChecked] = useState(false);

    const toggleOpen = () => setOpen(!open);

    // 옵션 선택
    const handleSelect = (value) => {
        setSelected(value);
        setOpen(false);
  };
  return (
     <>
            <div style={{width:"100%", minHeight:"731px", backgroundColor:"#f7f7f7"}}>
            <ListHeader style={{height:'146px'}}>
                <FlexDiv style={{marginLeft:'10px'}}>
                    <CatTitle>결과물</CatTitle>
                </FlexDiv>
                <FlexDiv style={{marginTop:'8px'}} >
                    <div style={{ display: "flex", alignItems: "center", width: "152px", height: "36px" }} >
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="시작일"
                            dateFormat="yyyy-MM-dd" customInput={<CustomInput ref={startInputRef}/>}
                        />
                        <img src={calender} style={{width:'25px', marginLeft:'-35px', position:'relative'}} alt="calendar"/>
                    </div>
                    <div style={{marginLeft:'33px', marginTop:'5px'}}>
                        ~
                    </div>
                    <div style={{ display: "flex", alignItems: "center", width: "152px", height: "36px", marginLeft:'7px'}}>
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} placeholderText="마감일"
                            dateFormat="yyyy-MM-dd" customInput={<CustomInput ref={endInputRef}/>}
                        />
                        <img src={calender} style={{width:'25px', marginLeft:'-35px', position:'relative'}} alt="calendar"/>
                    </div>
                </FlexDiv>
                <FlexDiv>
                    <SearchDrop>
                        <DropHeader onClick={toggleOpen}>
                            {selected}
                            <img src={dropdownArrow} style={{width:"13px", height:"8px", marginLeft:'auto', display:'block', marginTop:'8px'}}></img>
                        </DropHeader>
                        {open && (
                            <DropList>
                                <DropOption onClick={() => handleSelect("전체")}>전체</DropOption>
                                <DropOption onClick={() => handleSelect("옵션1")}>옵션1</DropOption>
                                <DropOption onClick={() => handleSelect("옵션2")}>옵션2</DropOption>
                                <DropOption onClick={() => handleSelect("옵션3")}>옵션3</DropOption>
                            </DropList>
                        )}
                    </SearchDrop>
                    <SearchBar>
                        <img src={searchIcon} style={{width:'15px', height:'16px', marginBottom:"8px"}}></img>
                        <SearchText placeholder='검색어를 입력해 주세요.'></SearchText>
                    </SearchBar>
                </FlexDiv>
            </ListHeader>
            <CheckContainer>
                <label style={{display: "flex", justifyContent:'end', marginRight:'14px'}}>
                    <CheckBox type='checkbox' checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
                    <CheckMark/>
                    <CheckText>미완료 (1)</CheckText>
                </label>
            </CheckContainer>
            <ContentBox style={{width:'386px', height:'140px', margin:'0 auto', border:'1px solid #ccc', marginBottom:'10px'}}>
                        <Header style={{paddingTop:'4px', paddingBottom:'11px', height:'37px'}}>
                          <HeadText style={{fontSize:'14px'}}>
                            Camp_us
                          </HeadText>
                          <GreenBox style={{marginLeft:'auto',marginTop:'5px'}}>
                            평가완료
                          </GreenBox>
                        </Header>
                        <Hr style={{margin:'0 auto', width:'366px'}}/>
                        <FlexDiv style={{marginLeft:'27px', marginTop:'12px'}}>
                          <ContentText>
                            학기
                          </ContentText>
                          <div style={{marginLeft:'14px'}}>
                          <OverviewText>
                            2학기
                          </OverviewText>
                          </div>
                        </FlexDiv>
                        <FlexDiv style={{marginLeft:'27px', marginTop:'12px'}}>
                          <ContentText>
                            기간
                          </ContentText>
                          <div style={{marginLeft:'14px'}}>
                          <OverviewText>
                            2025-09-02 ~ 2025-09-22
                          </OverviewText>
                          </div>
                        </FlexDiv>
                        <FlexDiv style={{marginLeft:'27px', marginTop:'12px'}}>
                          <ContentText>
                            팀장
                          </ContentText>
                          <div style={{marginLeft:'14px'}}>
                          <OverviewText>
                            김원희
                          </OverviewText>
                          </div>
                        </FlexDiv>
            </ContentBox>
            <ContentBox style={{width:'386px', height:'140px', margin:'0 auto', border:'1px solid #ccc',marginBottom:'10px'}}>
                        <Header style={{paddingTop:'4px', paddingBottom:'11px', height:'37px'}}>
                          <HeadText style={{fontSize:'14px'}}>
                            Camp_us
                          </HeadText>
                          <GreenBox style={{marginLeft:'auto',marginTop:'5px',border:'1px solid #ff5e5e',color:'#ff5e5e'}}>
                            미평가
                          </GreenBox>
                        </Header>
                        <Hr style={{margin:'0 auto', width:'366px'}}/>
                        <FlexDiv style={{marginLeft:'27px', marginTop:'12px'}}>
                          <ContentText>
                            학기
                          </ContentText>
                          <div style={{marginLeft:'14px'}}>
                          <OverviewText>
                            2학기
                          </OverviewText>
                          </div>
                        </FlexDiv>
                        <FlexDiv style={{marginLeft:'27px', marginTop:'12px'}}>
                          <ContentText>
                            기간
                          </ContentText>
                          <div style={{marginLeft:'14px'}}>
                          <OverviewText>
                            2025-09-02 ~ 2025-09-22
                          </OverviewText>
                          </div>
                        </FlexDiv>
                        <FlexDiv style={{marginLeft:'27px', marginTop:'12px'}}>
                          <ContentText>
                            팀장
                          </ContentText>
                          <div style={{marginLeft:'14px'}}>
                          <OverviewText>
                            김원희
                          </OverviewText>
                          </div>
                        </FlexDiv>
            </ContentBox>
            <ContentBox style={{width:'386px', height:'140px', margin:'0 auto', border:'1px solid #ccc',marginBottom:'10px'}}>
                        <Header style={{paddingTop:'4px', paddingBottom:'11px', height:'37px'}}>
                          <HeadText style={{fontSize:'14px'}}>
                            Camp_us
                          </HeadText>
                          <GreenBox style={{marginLeft:'auto',marginTop:'5px',border:'1px solid #aaa',color:'#aaa'}}>
                            평가완료
                          </GreenBox>
                        </Header>
                        <Hr style={{margin:'0 auto', width:'366px'}}/>
                        <FlexDiv style={{marginLeft:'27px', marginTop:'12px'}}>
                          <ContentText>
                            학기
                          </ContentText>
                          <div style={{marginLeft:'14px'}}>
                          <OverviewText>
                            2학기
                          </OverviewText>
                          </div>
                        </FlexDiv>
                        <FlexDiv style={{marginLeft:'27px', marginTop:'12px'}}>
                          <ContentText>
                            기간
                          </ContentText>
                          <div style={{marginLeft:'14px'}}>
                          <OverviewText>
                            2025-09-02 ~ 2025-09-22
                          </OverviewText>
                          </div>
                        </FlexDiv>
                        <FlexDiv style={{marginLeft:'27px', marginTop:'12px'}}>
                          <ContentText>
                            팀장
                          </ContentText>
                          <div style={{marginLeft:'14px'}}>
                          <OverviewText>
                            김원희
                          </OverviewText>
                          </div>
                        </FlexDiv>
            </ContentBox>
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

export default ProjectObjectProjectList