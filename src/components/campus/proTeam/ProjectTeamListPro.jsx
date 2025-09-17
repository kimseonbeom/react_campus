import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ContentBox, Contents, Header, HeadText, } from '../home/HomeWrapper'
import { CatTitle, CheckBox, CheckContainer, CheckMark, CheckText, CustomInput, DropHeader,
        DropList, DropOption, FlexDiv, ListHeader, PageArrowButton, PageNation,
        PageNumberButton, PageNumText, PageText, RegistButton, SearchBar, SearchDrop, SearchText
        } from '../commons/WHComponent';
import { calender, dropdownArrow, searchIcon, pageArrow1, pageArrow2, pageArrow3, pageArrow4,
         } from '../img';
import { Hr } from '../menu/SideMenu';
import { ContentText, OverviewText } from '../proObject/ProjectObjectProjectList';
import { Flex } from '../home/HomeWrapperPro';
import { getProjectTeamListPro, getUserSession } from '../api';
import { useLocation } from 'react-router-dom';
import useModalStore, { useProjectDetailModalStore, useProjectTeamModifyCheckModalStore, useProjectTeamModifyModalStore, useProjectTeamRegistModalStore } from '../commons/modalStore';
import { ProjectNameText } from './ProjectTeamList';

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
    color: #fff;
    background-color: #2ec4b6;
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
function ProjectTeamListPro() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("전체");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const startInputRef = useRef(null);
    const endInputRef = useRef(null);
    const [checked, setChecked] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchSamester, setSearchSamester] = useState('');
    const [searchProjectName, setSearchProjectName] = useState('');
    const { showModal: showModifyModal } = useProjectTeamModifyCheckModalStore();
    const { showModal: showRegistModal } = useProjectTeamRegistModalStore();
    const showConfirm = useModalStore((state) => state.showConfirm);
    const toggleOpen = () => setOpen(!open);
    const location = useLocation();
  const query = new URLSearchParams(location.search);
  const memId = query.get('memId');
  const user = getUserSession();
  const [projectEditStatusMap, setEditStatusMap] = useState({});
  const { showModal } = useProjectTeamModifyModalStore();
   const { showModal: showDetailModal } = useProjectDetailModalStore();
  const [pageMaker, setPageMaker] = useState({
    page: 1,
    perPageNum: 3,
    displayPageNum: 10,
    totalCount: 0,
    startPage: 1,
    endPage: 1,
    realEndPage: 1,
    prev: false,
    next: false
  });

  useEffect(() => {
    if (memId) getProjectTeamData(memId, 1,'', '','','');
  }, [memId]);
useEffect(() => {
  window.refreshProjectTeamList = () => {
    const stDate = startDate ? startDate.toISOString().split('T')[0] : '';
    const enDate = endDate ? endDate.toISOString().split('T')[0] : '';
    getProjectTeamData(memId, 1, searchSamester, searchProjectName, stDate, enDate); 
  };
  return () => { window.refreshProjectTeamList = undefined; };
}, [memId, searchSamester, searchProjectName, startDate, endDate]);


  const fetchProjectTeamData = async (memId, page = 1, samester = '', projectName = '',projectStDate = '', projectEnDate = '') => {
  setLoading(true);
  try {
    console.log({ memId, page, samester, projectName, projectStDate, projectEnDate });
    const response = await getProjectTeamListPro(memId, page, samester, projectName || '',projectStDate || '', projectEnDate || ''); 
    const resData = response.data;
    
    console.log('API Response:', resData);
    setData(resData.projectListpro || []); 
    setEditStatusMap(resData.projectEditStatusMap || {});
    setPageMaker(resData.pageMaker || {});
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
}

  const getProjectTeamData = async (memId, page = 1, samester = '', projectName = '',projectStDate = '', projectEnDate = '') => {
    await fetchProjectTeamData(memId, page, samester, projectName,projectStDate,projectEnDate);
  }

  const handleSelect = (value) => {
    setSelected(value);
  if (value === "전체") {
    setSearchSamester("");
  } else {
    setSearchSamester(value);
  }
  setOpen(false);
};

  const handleRegister = () => {
    showConfirm("정말 등록하시겠습니까?", () => {
      setToastMsg("팀이 등록되었습니다!");
    });
  }

const formatDate = (dateValue) => dateValue ? new Date(dateValue).toLocaleDateString("sv-SE") : "";

  const handlePageChange = (newPage) => {
  if (!pageMaker) return;
  if(newPage < 1 || newPage > pageMaker.realEndPage) return;
 const stDate = startDate ? startDate.toISOString().split('T')[0] : '';
  const enDate = endDate ? endDate.toISOString().split('T')[0] : '';

  getProjectTeamData(memId, newPage, searchSamester, searchProjectName,stDate, enDate);
}
const handleSearch = () => {
    const stDate = startDate ? startDate.toISOString().split('T')[0] : '';
  const enDate = endDate ? endDate.toISOString().split('T')[0] : '';
  getProjectTeamData(memId, 1, searchSamester, searchProjectName, stDate, enDate); // 1페이지부터 검색
}
  return (
    <div style={{width:"100%", minHeight:"731px", backgroundColor:"#f7f7f7"}}>
                <ListHeader style={{height:'146px'}}>
                    <FlexDiv style={{marginLeft:'10px'}}>
                        <CatTitle>팀목록</CatTitle>
                        <RegistButton style={{ marginLeft: 'auto' }} onClick={showRegistModal}>팀등록</RegistButton>
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
                                    <DropOption onClick={() => handleSelect("1학기")}>1학기</DropOption>
                                    <DropOption onClick={() => handleSelect("2학기")}>2학기</DropOption>
                                </DropList>
                            )}
                        </SearchDrop>
                        <SearchBar>
                            <img src={searchIcon} style={{ width: '15px', height: '16px', marginBottom: "8px" }} alt="search" />
                            <SearchText
                                placeholder='검색어를 입력해 주세요.'
                                value={searchProjectName}
                                onChange={(e) => setSearchProjectName(e.target.value)}
                                onKeyDown={(e) => { if(e.key === 'Enter') handleSearch(); }}
                            />
                        </SearchBar>
                    </FlexDiv>
                </ListHeader>
                <CheckContainer>
                                <label style={{display: "flex", justifyContent:'start', marginLeft:'14px'}}>
                                    <CheckBox type='checkbox' checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
                                    <CheckMark/>
                                    <CheckText>수정요청</CheckText>
                                </label>
                            </CheckContainer>
                            {data?.length > 0 ? (
          data
          .filter(project => !checked || projectEditStatusMap[project.project_id]?.[0] === '요청중')
          .map((project) => {
            const isPastEndDate = new Date(project.project_endate) < new Date();
            
            const editStatus = projectEditStatusMap[project.project_id]?.[0];
            console.log("editStatus:", editStatus, "project_id:", project.project_id);
            
            return (
                <ContentBox 
                onClick={() => showDetailModal(project.project_id)}
                style={{width:'386px', height: editStatus === '요청중' ? '160px' : '124px', margin:'0 auto', border:'1px solid #aaa', marginBottom:'10px',marginTop:'13px'}}>
                    <Header style={{paddingTop:'20px', paddingBottom:'11px', height:'37px', alignItems:'center'}}>
                        <HeadText style={{fontSize:'14px'}}>
                            {project.samester}
                        </HeadText>
                        <OverviewText style={{marginLeft:'17px',marginBottom:'4px'}}>
                           {formatDate(project.project_stdate)} ~ {formatDate(project.project_endate)}
                        </OverviewText>
                        <ProjectNameText style={{marginLeft:'auto',fontSize:'14px'}}>
                            {project.project_name}
                        </ProjectNameText>
                    </Header>
                    <Hr style={{margin:'0 auto', width:'366px'}}></Hr>
                    <Contents style={{paddingTop:'10px'}}>
                        <Flex style={{justifyContent: 'flex-start'}}>
                            <div style={{marginTop:'7px',marginRight:'68px'}}>
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
                            {project.profes_name}
                            </ContentText>
                            <ContentText style={{color:'#aaa'}}>
                            {project.leader_name}
                            </ContentText>
                            </div>
                        </Flex>
                    </Contents>
                    {editStatus === '요청중' ? (
                    <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'15px'}}>
                        
                    <GreenBtn onClick={(e) => {
    e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
    showModifyModal(project.project_id);}}>
                        수정 요청
                    </GreenBtn>
                        
                    </div>
                    )
                    : null

          }
                </ContentBox>
                );
          })
        ) : (
          <p style={{ textAlign: 'center' }}>등록된 프로젝트가 없습니다.</p>
        )}
                
                
               {pageMaker && (
                         <nav>
                           <PageNation>
                             <PageArrowButton disabled={pageMaker.page === 1} onClick={() => handlePageChange(1)}>
                               <PageText>
                                 <img src={pageArrow1} style={{ width: "13px", height: "10px", marginLeft: '6px' }} alt="first" />
                               </PageText>
                             </PageArrowButton>
               
                             
                             <PageArrowButton disabled={!pageMaker.prev} onClick={() => handlePageChange(pageMaker.startPage - 1)}>
                               <PageText>
                                 <img src={pageArrow2} style={{ width: "6px", height: "10px", marginLeft: '10px' }} alt="prev-block" />
                               </PageText>
                             </PageArrowButton>
               
                            
               {Array.from({ length: pageMaker.endPage - pageMaker.startPage + 1 }, (_, i) => {
                 const page = pageMaker.startPage + i;
                 if(page > pageMaker.realEndPage) return null;
                 return (
                   <PageNumberButton
                     key={page}
                     active={page === pageMaker.page}
                     onClick={() => handlePageChange(page)}
                   >
                     {page}
                   </PageNumberButton>
                 );
               })}
                             <PageArrowButton disabled={!pageMaker.next} onClick={() => handlePageChange(pageMaker.endPage + 1)}>
                               <PageText>
                                 <img src={pageArrow3} style={{ width: "6px", height: "10px", marginLeft: '10px' }} alt="next-block" />
                               </PageText>
                             </PageArrowButton>
               
                             
                             <PageArrowButton disabled={pageMaker.page === pageMaker.realEndPage} onClick={() => handlePageChange(pageMaker.realEndPage)}>
                               <PageText>
                                 <img src={pageArrow4} style={{ width: "13px", height: "10px", marginLeft: '6px' }} alt="last" />
                               </PageText>
                             </PageArrowButton>
                           </PageNation>
                         </nav>
                       )}
               
                </div>
  )
}

export default ProjectTeamListPro