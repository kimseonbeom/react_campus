import "react-datepicker/dist/react-datepicker.css";
import React, { useRef, useState } from 'react'
import DatePicker from "react-datepicker";
import { dropdownArrow, searchIcon, calender, pageArrow1, pageArrow2, pageArrow3,
        pageArrow4 } from '../img'
import { 
    ListHeader, CatTitle, FlexDiv, Writer,
    SearchBar, SearchDrop, SearchText,
    DropHeader, DropList, DropOption,
    WHContainer, DateBox, Title, Button, CheckButton, 
    PageNation, PageArrowButton, PageNumText, PageNumberButton, PageText,
    CustomInput, CheckContainer, CheckBox, CheckMark, CheckText }
    from '../commons/WHComponent'

function ProjectObjectList() {
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
        <div style={{width:"100%", minHeight:"100vh", backgroundColor:"#f7f7f7"}}>
            <ListHeader style={{height:'156px'}}>
                <FlexDiv>
                    <CatTitle>결과물</CatTitle>
                    <Button style={{width:'65px'}}>자료제출</Button>
                </FlexDiv>
                <FlexDiv style={{marginTop:'8px'}} >
                    <div style={{ display: "flex", alignItems: "center", width: "110px", height: "36px" }} >
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="시작일"
                            dateFormat="yyyy-MM-dd" customInput={<CustomInput ref={startInputRef}/>}
                        />
                        <img src={calender} style={{width:'25px', marginLeft:'-35px', position:'relative'}} alt="calendar"/>
                    </div>
                    <div style={{marginLeft:'65px', marginTop:'5px'}}>
                        ~
                    </div>
                    <div style={{ display: "flex", alignItems: "center", width: "110px", height: "36px", marginLeft:'12px'}}>
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
            <WHContainer>
                <div style={{width:'37px', lineHeight:'35px'}}>
                    1
                </div>
                <div style={{width:'230px'}}>
                    <Title style={{marginTop:'-2px'}}>[산출물] Camp_us 컴포넌트 명세서</Title>
                    <Writer>김원희</Writer>
                </div>
                <div style={{width:'100px'}}>
                    <DateBox style={{textAlign:'end', marginTop:'-3px'}}>2025-09-22</DateBox>
                    <CheckButton style={{height:'21px', marginTop:'2px', lineHeight:'19px',border:'1px solid #2EC4B6', color:'#2EC4B6'}}>완료</CheckButton>
                </div>
            </WHContainer>
            <WHContainer>
                <div style={{width:'37px', lineHeight:'35px'}}>
                    1
                </div>
                <div style={{width:'230px'}}>
                    <Title style={{marginTop:'-2px',}}>[산출물] Camp_us 컴포넌트 명세서</Title>
                    <Writer>김원희</Writer>
                </div>
                <div style={{width:'100px'}}>
                    <DateBox style={{textAlign:'end', marginTop:'-3px'}}>2025-09-22</DateBox>
                    <CheckButton style={{height:'21px', marginTop:'2px', lineHeight:'19px'}}>미완료</CheckButton>
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

export default ProjectObjectList