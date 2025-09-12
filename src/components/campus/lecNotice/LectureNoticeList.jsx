import React, { useState } from 'react'
import { dropdownArrow, searchIcon, listArrow, pageArrow1, pageArrow2, pageArrow3,
        pageArrow4 } from '../img'
import { 
    ListHeader, CatTitle, FlexDiv,
    SearchBar, SearchDrop, SearchText,
    DropHeader, DropList, DropOption,
    WHContainer, DateBox, Title, Button,
    PageNation, PageArrowButton, PageNumText, PageNumberButton, PageText }
    from '../commons/WHComponent'
import { useLecNoticeRegistModalStore } from '../commons/modalStore';


function LectureNoticeList() {
    const registNotice = useLecNoticeRegistModalStore((state) => state.showModal);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("전체");

    const toggleOpen = () => setOpen(!open);

    // 옵션 선택
    const handleSelect = (value) => {
        setSelected(value);
        setOpen(false);
  };

  return (
    <>
        <div style={{width:"100%", minHeight:"100vh", backgroundColor:"#f7f7f7"}}>
            <ListHeader>
                <FlexDiv>
                    <CatTitle>공지사항</CatTitle>
                    <Button onClick={registNotice}>글쓰기</Button>
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
            <WHContainer>
                <div style={{width:'350px'}}>
                    <DateBox>2025-09-01</DateBox>
                    <Title>실습자료 제공</Title>
                </div>
                <img src={listArrow} style={{height:'20px', marginTop:'6px'}}></img>
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

export default LectureNoticeList