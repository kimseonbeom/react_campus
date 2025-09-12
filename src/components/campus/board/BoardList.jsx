import React, { useState } from 'react'
import {dropdownArrow, searchIcon, pageArrow1, pageArrow2, pageArrow3,
        pageArrow4, clip,
        } from '../img'
import { ListHeader, CatTitle, FlexDiv, Writer,
        SearchBar, SearchDrop, SearchText,
        DropHeader, DropList, DropOption,
        WHContainer, DateBox, Title, Button,
        PageNation, PageArrowButton, PageNumText, PageNumberButton, PageText,
        } from '../commons/WHComponent'



function BoardList() {
    const [searchOpen, serSearchOpen] = useState(false);
    const [searchSelected, setSearchSelected] = useState("전체");
    const [listOpen, serListOpen] = useState(false);
    const [listSelected, setListSelected] = useState("전체");

    const toggleSearchOpen = () => serSearchOpen(!searchOpen);
    const toggleListOpen = () => serListOpen(!listOpen);

    // 옵션 선택
    const handleSearchSelect = (value) => {
        setSearchSelected(value);
        serSearchOpen(false);
    };
    const handleListSelect = (value) => {
        setListSelected(value);
        serListOpen(false);
    };

  return (
    <>
        <div style={{width:"100%", minHeight:"100vh", backgroundColor:"#f7f7f7"}}>
            <ListHeader style={{height:'146px'}}>
                <FlexDiv>
                    <CatTitle>게시판</CatTitle>
                    <Button>글쓰기</Button>
                </FlexDiv>
                <FlexDiv>
                    <SearchDrop>
                        <DropHeader onClick={toggleSearchOpen}>
                            {searchSelected}
                            <img src={dropdownArrow}
                                style={{width:"13px", height:"8px", marginLeft:'auto', display:'block', marginTop:'8px'}}></img>
                        </DropHeader>
                        {searchOpen && (
                            <DropList>
                                <DropOption onClick={() => handleSearchSelect("전체")}>전체</DropOption>
                                <DropOption onClick={() => handleSearchSelect("옵션1")}>옵션1</DropOption>
                                <DropOption onClick={() => handleSearchSelect("옵션2")}>옵션2</DropOption>
                                <DropOption onClick={() => handleSearchSelect("옵션3")}>옵션3</DropOption>
                            </DropList>
                        )}
                    </SearchDrop>
                    <SearchBar>
                        <img src={searchIcon} style={{width:'15px', height:'16px', marginBottom:"8px"}}></img>
                        <SearchText placeholder='검색어를 입력해 주세요.'></SearchText>
                    </SearchBar>
                </FlexDiv>
                <FlexDiv>
                    <FlexDiv style={{width:'668px'}}>
                        <div style={{marginTop:'16px', fontSize:'14px'}}>총 게시물 80건</div>
                        <div style={{marginTop:'16px', marginLeft:'13px', fontSize:'14px'}}>페이지 1/20</div>
                    </FlexDiv>
                    <SearchDrop>
                        <DropHeader onClick={toggleListOpen} style={{borderTop:'1px solid #ccc', width:'70px', height:'28px', marginTop:'15px', lineHeight:'15px'}}>
                            {listSelected}
                            <img src={dropdownArrow} style={{width:"13px", height:"8px", marginLeft:'auto', display:'block', marginTop:'5px'}}></img>
                        </DropHeader>
                        {listOpen && (
                            <DropList style={{width:'70px'}}>
                                <DropOption onClick={() => handleListSelect("전체")}>전체</DropOption>
                                <DropOption onClick={() => handleListSelect("옵션1")}>옵션1</DropOption>
                                <DropOption onClick={() => handleListSelect("옵션2")}>옵션2</DropOption>
                                <DropOption onClick={() => handleListSelect("옵션3")}>옵션3</DropOption>
                            </DropList>
                        )}
                    </SearchDrop>
                </FlexDiv>
            </ListHeader>
            <WHContainer style={{height:"83px"}}>
                <div style={{width:'350px'}}>
                    <DateBox>2025-09-01</DateBox>
                    <FlexDiv>
                        <Title>[자유] 실습자료 제공</Title>
                        <img src={clip} style={{height:'12px', marginTop:'6px', marginLeft:'8px'}}></img>
                    </FlexDiv>
                    <Writer>권오규</Writer>
                </div>
                <div>
                    <div style={{width:"28px", height:"28px", border:"1px solid #ccc", borderRadius:"14px", marginTop:"11px"}}>
                        <span style={{display:'block', fontSize:'12px', textAlign:'center', lineHeight:'25px', color:'#2EC4B6', fontWeight:'700'}}>1</span>
                    </div>
                </div>
            </WHContainer>
            <WHContainer style={{height:"83px"}}>
                <div style={{width:'350px'}}>
                    <DateBox>2025-09-01</DateBox>
                    <FlexDiv>
                        <Title>[자유] 실습자료 제공</Title>
                        <img src={clip} style={{height:'12px', marginTop:'6px', marginLeft:'8px'}}></img>
                    </FlexDiv>
                    <Writer>권오규</Writer>
                </div>
                <div>
                    <div style={{width:"28px", height:"28px", border:"1px solid #ccc", borderRadius:"14px", marginTop:"11px"}}>
                        <span style={{display:'block', fontSize:'12px', textAlign:'center', lineHeight:'25px', color:'#2EC4B6', fontWeight:'700'}}>1</span>
                    </div>
                </div>
            </WHContainer>
            <WHContainer style={{height:"83px"}}>
                <div style={{width:'350px'}}>
                    <DateBox>2025-09-01</DateBox>
                    <FlexDiv>
                        <Title>[자유] 실습자료 제공</Title>
                        <img src={clip} style={{height:'12px', marginTop:'6px', marginLeft:'8px'}}></img>
                    </FlexDiv>
                    <Writer>권오규</Writer>
                </div>
                <div>
                    <div style={{width:"28px", height:"28px", border:"1px solid #ccc", borderRadius:"14px", marginTop:"11px"}}>
                        <span style={{display:'block', fontSize:'12px', textAlign:'center', lineHeight:'25px', color:'#2EC4B6', fontWeight:'700'}}>1</span>
                    </div>
                </div>
            </WHContainer>
            <WHContainer style={{height:"83px"}}>
                <div style={{width:'350px'}}>
                    <DateBox>2025-09-01</DateBox>
                    <FlexDiv>
                        <Title>[자유] 실습자료 제공</Title>
                        <img src={clip} style={{height:'12px', marginTop:'6px', marginLeft:'8px'}}></img>
                    </FlexDiv>
                    <Writer>권오규</Writer>
                </div>
                <div>
                    <div style={{width:"28px", height:"28px", border:"1px solid #ccc", borderRadius:"14px", marginTop:"11px"}}>
                        <span style={{display:'block', fontSize:'12px', textAlign:'center', lineHeight:'25px', color:'#2EC4B6', fontWeight:'700'}}>1</span>
                    </div>
                </div>
            </WHContainer>
            <WHContainer style={{height:"83px"}}>
                <div style={{width:'350px'}}>
                    <DateBox>2025-09-01</DateBox>
                    <FlexDiv>
                        <Title>[자유] 실습자료 제공</Title>
                        <img src={clip} style={{height:'12px', marginTop:'6px', marginLeft:'8px'}}></img>
                    </FlexDiv>
                    <Writer>권오규</Writer>
                </div>
                <div>
                    <div style={{width:"28px", height:"28px", border:"1px solid #ccc", borderRadius:"14px", marginTop:"11px"}}>
                        <span style={{display:'block', fontSize:'12px', textAlign:'center', lineHeight:'25px', color:'#2EC4B6', fontWeight:'700'}}>1</span>
                    </div>
                </div>
            </WHContainer>
            <WHContainer style={{height:"83px"}}>
                <div style={{width:'350px'}}>
                    <DateBox>2025-09-01</DateBox>
                    <FlexDiv>
                        <Title>[자유] 실습자료 제공</Title>
                        <img src={clip} style={{height:'12px', marginTop:'6px', marginLeft:'8px'}}></img>
                    </FlexDiv>
                    <Writer>권오규</Writer>
                </div>
                <div>
                    <div style={{width:"28px", height:"28px", border:"1px solid #ccc", borderRadius:"14px", marginTop:"11px"}}>
                        <span style={{display:'block', fontSize:'12px', textAlign:'center', lineHeight:'25px', color:'#2EC4B6', fontWeight:'700'}}>1</span>
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

export default BoardList