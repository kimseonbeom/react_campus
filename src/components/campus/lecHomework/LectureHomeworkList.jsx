import React from 'react'
import {searchIcon, pageArrow1, pageArrow2, pageArrow3,
        pageArrow4, clip
} from '../img'
import { 
    ListHeader, CatTitle, FlexDiv,
    SearchBar, SearchText,
    WHContainer, DateBox, Title, Button, CheckButton,
    PageNation, PageArrowButton, PageNumText, PageNumberButton, PageText }
    from '../commons/WHComponent'




function LectureHomeworkList() {

  return (
    <>
        <div style={{width:"100%", minHeight:"100vh", backgroundColor:"#f7f7f7"}}>
            <ListHeader>
                <FlexDiv>
                    <CatTitle>과제제출</CatTitle>
                    <Button>글쓰기</Button>
                </FlexDiv>
                <SearchBar style={{width:"363px", marginLeft:'0px', justifyContent: 'start'}}>
                    <img src={searchIcon} style={{width:'15px', height:'16px'}}></img>
                    <SearchText placeholder='검색어를 입력해 주세요.'></SearchText>
                </SearchBar>
            </ListHeader>
            <WHContainer>
                <div style={{width:'37px', lineHeight:'35px'}}>
                    1
                </div>
                <div style={{width:'192px'}}>
                    <DateBox>2025-09-01</DateBox>
                    <FlexDiv>
                        <Title>실습자료 제공</Title>
                        <img src={clip} style={{height:'12px', marginTop:'6px', marginLeft:'8px'}}></img>
                    </FlexDiv>
                </div>
                <CheckButton>미제출</CheckButton>
                <CheckButton>미평가</CheckButton>
            </WHContainer>
            <WHContainer>
                <div style={{width:'37px', lineHeight:'35px'}}>
                    1
                </div>
                <div style={{width:'192px'}}>
                    <DateBox>2025-09-01</DateBox>
                    <FlexDiv>
                        <Title>실습자료 제공</Title>
                        <img src={clip} style={{height:'12px', marginTop:'6px', marginLeft:'8px'}}></img>
                    </FlexDiv>
                </div>
                <CheckButton style={{border:'1px solid #2EC4B6', color:'#2EC4B6'}}>제출</CheckButton>
                <CheckButton style={{border:'1px solid #2EC4B6', color:'#2EC4B6'}}>평가완료</CheckButton>
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

export default LectureHomeworkList