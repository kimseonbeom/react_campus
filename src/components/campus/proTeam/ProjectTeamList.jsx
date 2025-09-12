import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ContentBox, Contents, Header, HeadText,  } from '../home/HomeWrapper'
import { CatTitle, CustomInput, DropHeader, DropList, DropOption, FlexDiv, ListHeader,
        PageArrowButton, PageNation, PageNumberButton, PageNumText, PageText, SearchBar,
        SearchDrop, SearchText, RegistButton,
        } from '../commons/WHComponent';
import { calender, dropdownArrow, searchIcon, pageArrow1, pageArrow2, pageArrow3, pageArrow4,
         } from '../img';
import { Hr } from '../menu/SideMenu';
import { ContentText, OverviewText } from '../proObject/ProjectObjectProjectList';
import { Flex } from '../home/HomeWrapperPro';
import useModalStore from '../commons/modalStore';
import Toast from '../commons/Toast';

const LengthLine = styled.div`
    background-color: #aaa;
    width: 1px;
    height: 53px;
    margin: 0;
`
const GreenBtn = styled.button`
    width: 359px;
    height: 26px;
    border: 1px solid #2ec4b6;
    color: #2ec4b6;
    background-color: #fff;
    text-align: center;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
`
const ModifyingBtn = styled.button`
    width: 359px;
    height: 26px;
    border: 1px solid #9fcec9;
    color: #fff;
    background-color: #9fcec9;
    text-align: center;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
`
const ObjectBtn = styled.button`
    width: 359px;
    height: 26px;
    border: 1px solid #e7e7e7;
    color: #212121;
    background-color: #e7e7e7;
    text-align: center;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
`
function ProjectTeamList() {
    const [open, setOpen] = useState(false);
        const [selected, setSelected] = useState("전체");
        const [startDate, setStartDate] = useState(null);
        const [endDate, setEndDate] = useState(null);
        const startInputRef = useRef(null);
        const endInputRef = useRef(null);
        const [checked, setChecked] = useState(false);
        const showConfirm = useModalStore((state) => state.showConfirm);
        const toggleOpen = () => setOpen(!open);
        const [toastMsg, setToastMsg] = useState("");


        // 옵션 선택
        const handleSelect = (value) => {
            setSelected(value);
            setOpen(false);
      };
    const handleRegister = () => {
  showConfirm("정말 등록하시겠습니까?", () => {
    console.log("팀 등록 확인됨");
    setToastMsg("팀이 등록되었습니다 ! ");
  });
};
  return (
    <>
    <div style={{width:"100%", minHeight:"731px", backgroundColor:"#f7f7f7"}}>
                <ListHeader style={{height:'146px'}}>
                    <FlexDiv style={{marginLeft:'10px'}}>
                        <CatTitle>팀목록</CatTitle>
                        <RegistButton style={{marginLeft:'auto'}} onClick={handleRegister}>팀등록</RegistButton>
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
                <ContentBox style={{width:'386px', height:'160px', margin:'0 auto', border:'1px solid #ccc', marginBottom:'10px',marginTop:'13px'}}>
                    <Header style={{paddingTop:'20px', paddingBottom:'11px', height:'37px', alignItems:'center'}}>
                        <HeadText style={{fontSize:'14px'}}>
                            1학기
                        </HeadText>
                        <OverviewText style={{marginLeft:'17px',marginBottom:'4px'}}>
                            2025-09-02 ~ 2025-09-22
                        </OverviewText>
                        <HeadText style={{marginLeft:'auto',fontSize:'14px'}}>
                            Camp_us
                        </HeadText>
                    </Header>
                    <Hr style={{margin:'0 auto', width:'366px'}}></Hr>
                    <Contents style={{paddingTop:'10px'}}>
                        <Flex style={{justifyContent: 'flex-start'}}>
                            <div style={{marginTop:'7px',marginRight:'56px'}}>
                            <ContentText style={{marginBottom:'15px'}}>
                            로드맵
                            </ContentText>
                            <ContentText>
                            피드백
                            </ContentText>
                            </div>
                            <div style={{marginTop:'7px',marginRight:'28px'}}>
                            <ContentText style={{marginBottom:'15px', color:'#2ec4b6'}}>
                            미제출
                            </ContentText>
                            <ContentText style={{color:'#aaa'}}>
                            미등록
                            </ContentText>
                            </div>
                             <LengthLine />
                            <div style={{marginTop:'7px',marginLeft:'28px',marginRight:'54px'}}>
                            <ContentText style={{marginBottom:'15px'}}>
                            담당교수
                            </ContentText>
                            <ContentText>
                            팀장
                            </ContentText>
                            </div>
                            <div style={{marginTop:'7px'}}>
                            <ContentText style={{marginBottom:'15px',color:'#aaa'}}>
                            서형원
                            </ContentText>
                            <ContentText style={{color:'#aaa'}}>
                            김원희
                            </ContentText>
                            </div>
                        </Flex>
                    </Contents>
                    <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'15px'}}>
                    <GreenBtn>
                        수정 요청
                    </GreenBtn>
                    </div>
                </ContentBox>
                <ContentBox style={{width:'386px', height:'160px', margin:'0 auto', border:'1px solid #ccc', marginBottom:'10px'}}>
                    <Header style={{paddingTop:'20px', paddingBottom:'11px', height:'37px', alignItems:'center'}}>
                        <HeadText style={{fontSize:'14px'}}>
                            1학기
                        </HeadText>
                        <OverviewText style={{marginLeft:'17px',marginBottom:'4px'}}>
                            2025-09-02 ~ 2025-09-22
                        </OverviewText>
                        <HeadText style={{marginLeft:'auto',fontSize:'14px'}}>
                            Camp_us
                        </HeadText>
                    </Header>
                    <Hr style={{margin:'0 auto', width:'366px'}}></Hr>
                    <Contents style={{paddingTop:'10px'}}>
                        <Flex style={{justifyContent: 'flex-start'}}>
                            <div style={{marginTop:'7px',marginRight:'56px'}}>
                            <ContentText style={{marginBottom:'15px'}}>
                            로드맵
                            </ContentText>
                            <ContentText>
                            피드백
                            </ContentText>
                            </div>
                            <div style={{marginTop:'7px',marginRight:'28px'}}>
                            <ContentText style={{marginBottom:'15px', color:'#2ec4b6'}}>
                            미제출
                            </ContentText>
                            <ContentText style={{color:'#aaa'}}>
                            미등록
                            </ContentText>
                            </div>
                             <LengthLine />
                            <div style={{marginTop:'7px',marginLeft:'28px',marginRight:'54px'}}>
                            <ContentText style={{marginBottom:'15px'}}>
                            담당교수
                            </ContentText>
                            <ContentText>
                            팀장
                            </ContentText>
                            </div>
                            <div style={{marginTop:'7px'}}>
                            <ContentText style={{marginBottom:'15px',color:'#aaa'}}>
                            서형원
                            </ContentText>
                            <ContentText style={{color:'#aaa'}}>
                            김원희
                            </ContentText>
                            </div>
                        </Flex>
                    </Contents>
                    <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'15px'}}>
                    <ModifyingBtn>
                        요청중
                    </ModifyingBtn>
                    </div>
                </ContentBox>
                <ContentBox style={{width:'386px', height:'160px', margin:'0 auto', border:'1px solid #ccc', marginBottom:'10px'}}>
                    <Header style={{paddingTop:'20px', paddingBottom:'11px', height:'37px', alignItems:'center'}}>
                        <HeadText style={{fontSize:'14px'}}>
                            1학기
                        </HeadText>
                        <OverviewText style={{marginLeft:'17px',marginBottom:'4px'}}>
                            2025-09-02 ~ 2025-09-22
                        </OverviewText>
                        <HeadText style={{marginLeft:'auto',fontSize:'14px'}}>
                            Camp_us
                        </HeadText>
                    </Header>
                    <Hr style={{margin:'0 auto', width:'366px'}}></Hr>
                    <Contents style={{paddingTop:'10px'}}>
                        <Flex style={{justifyContent: 'flex-start'}}>
                            <div style={{marginTop:'7px',marginRight:'56px'}}>
                            <ContentText style={{marginBottom:'15px'}}>
                            로드맵
                            </ContentText>
                            <ContentText>
                            피드백
                            </ContentText>
                            </div>
                            <div style={{marginTop:'7px',marginRight:'28px'}}>
                            <ContentText style={{marginBottom:'15px', color:'#2ec4b6'}}>
                            미제출
                            </ContentText>
                            <ContentText style={{color:'#aaa'}}>
                            미등록
                            </ContentText>
                            </div>
                             <LengthLine />
                            <div style={{marginTop:'7px',marginLeft:'28px',marginRight:'54px'}}>
                            <ContentText style={{marginBottom:'15px'}}>
                            담당교수
                            </ContentText>
                            <ContentText>
                            팀장
                            </ContentText>
                            </div>
                            <div style={{marginTop:'7px'}}>
                            <ContentText style={{marginBottom:'15px',color:'#aaa'}}>
                            서형원
                            </ContentText>
                            <ContentText style={{color:'#aaa'}}>
                            김원희
                            </ContentText>
                            </div>
                        </Flex>
                    </Contents>
                    <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'15px'}}>
                    <ObjectBtn>
                        결과물
                    </ObjectBtn>
                    </div>
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
                {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
                </>
  )
}

export default ProjectTeamList