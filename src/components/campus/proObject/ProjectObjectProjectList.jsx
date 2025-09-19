import React, { useEffect, useRef, useState } from 'react'
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
        user1, 
} from '../img';
import { getProjectTeamList, getProjectTeamListProRest, getProjectTeamListStu, getUserSession } from '../api';
import { useNavigate } from 'react-router-dom';

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
  const [projectList, setProjectList] = useState([]);
  const [searchSamester, setSearchSamester] = useState('');
  const [searchProjectName, setSearchProjectName] = useState('');
  const navigate = useNavigate();
  
  const handleClickProject = (projectId) => {
    const user = getUserSession();
    // 산출물 리스트 페이지로 이동
    navigate(`/project/object/${projectId}/list?memId=${user.mem_id}`);
  };
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

  const toggleOpen = () => setOpen(!open);
  const user = getUserSession();

  // 👉 공통 호출 함수
  const getProjectTeamData = async (
    memId,
    page = 1,
    samester = '',
    projectName = '',
    projectStdate = '',
    projectEndate = '',
    evalStatus = ''
  ) => {
    try {
      let res;
      if (user.mem_auth === 'ROLE01') {
        // 학생
        res = await getProjectTeamListStu(memId, page, samester, projectName, projectStdate, projectEndate,  evalStatus);
      } else if (user.mem_auth === 'ROLE02') {
        // 교수
        res = await getProjectTeamListProRest(memId, page, samester, projectName, projectStdate, projectEndate,  evalStatus);
      } else {
        console.warn('알 수 없는 권한:', user.mem_auth);
        return;
      }
      console.log("API 응답 프로젝트 리스트:", res.data.projectList); // ← 여기
    res.data.projectList.forEach(p => {
      console.log(p.project_name, "eval_status:", p.eval_status); // ← 각 프로젝트 상태 확인
    });
      
      setProjectList(res.data.projectList || []);
      if (res.data.pageMaker) {
        setPageMaker(res.data.pageMaker);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 검색 버튼 눌렀을 때
  const handleSearch = () => {
    const stDate = startDate ? startDate.toISOString().split('T')[0] : '';
    const enDate = endDate ? endDate.toISOString().split('T')[0] : '';
    const evalStatus = checked ? '0,null' : ''; // 서버에서 처리
    getProjectTeamData(user.mem_id, 1, searchSamester, searchProjectName, stDate, enDate,  evalStatus);
  };

  // 페이지 이동
  const handlePageChange = (newPage) => {
    if (!pageMaker) return;
    if (newPage < 1 || newPage > pageMaker.realEndPage) return;

    const stDate = startDate ? startDate.toISOString().split('T')[0] : '';
    const enDate = endDate ? endDate.toISOString().split('T')[0] : '';
    const evalStatus = checked ? '0,null' : ''; 
    getProjectTeamData(user.mem_id, newPage, searchSamester, searchProjectName, stDate, enDate,  evalStatus);
  };

  // 첫 로딩
  useEffect(() => {
    getProjectTeamData(user.mem_id, 1);
  }, []);

  // 옵션 선택
  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
    setSearchSamester(value === "전체" ? '' : value); // 학기 검색값도 세팅
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };
  const filteredProjectList = projectList.filter(project => {
  // 체크박스가 체크되어 있으면 eval_status === '0'만 보여주고
  // 체크박스가 안 되어 있으면 전체 보여주기
   return !checked || project.eval_status === '0' || project.eval_status === null;
});
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
                                <DropOption onClick={() => handleSelect("학기")}>학기</DropOption>
                                <DropOption onClick={() => handleSelect("1학기")}>1학기</DropOption>
                                <DropOption onClick={() => handleSelect("2학기")}>2학기</DropOption>
                            </DropList>
                        )}
                    </SearchDrop>
                    <SearchBar>
                        <img src={searchIcon} style={{width:'15px', height:'16px', marginBottom:"8px"}}></img>
                        <SearchText
  placeholder="검색어를 입력해 주세요."
  value={searchProjectName}
  onChange={(e) => setSearchProjectName(e.target.value)}
  onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
/>
                    </SearchBar>
                </FlexDiv>
            </ListHeader>
            <CheckContainer>
                <label style={{display: "flex", justifyContent:'end', marginRight:'14px'}}>
                    <CheckBox
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
         
        />
                    <CheckMark/>
                    <CheckText>미완료 (1)</CheckText>
                </label>
            </CheckContainer>
            {filteredProjectList.map((project, idx) => (
  <ContentBox key={project.project_id} style={{width:'386px', height:'140px', margin:'0 auto', border:'1px solid #ccc',marginBottom:'10px'}}
  onClick={() => handleClickProject(project.project_id)}
  >
      <Header style={{paddingTop:'4px', paddingBottom:'11px', height:'37px'}}>
        <HeadText style={{fontSize:'14px'}}>{project.project_name}</HeadText>
        <GreenBox style={{
  marginLeft:'auto',
  marginTop:'5px',
  border: (project.eval_status === '0' || project.eval_status === null) ? '1px solid #ff5e5e' : '1px solid #2ec4b6',
  color: (project.eval_status === '0' || project.eval_status === null) ? '#ff5e5e' : '#2ec4b6'
}}>
  {project.eval_status === '0' || project.eval_status === null ? '미완료' : '완료'}
</GreenBox>
      </Header>
      <Hr style={{margin:'0 auto', width:'366px'}}/>
      <FlexDiv style={{marginLeft:'27px', marginTop:'12px'}}>
        <ContentText>학기</ContentText>
        <div style={{marginLeft:'14px'}}>
          <OverviewText>{project.samester}</OverviewText>
        </div>
      </FlexDiv>
      <FlexDiv style={{marginLeft:'27px', marginTop:'12px'}}>
        <ContentText>기간</ContentText>
        <div style={{marginLeft:'14px'}}>
          <OverviewText>
  {formatDate(project.project_stdate)} ~ {formatDate(project.project_endate)}
</OverviewText>
        </div>
      </FlexDiv>
      <FlexDiv style={{marginLeft:'27px', marginTop:'12px'}}>
        <ContentText>팀장</ContentText>
        <div style={{marginLeft:'14px'}}>
          <OverviewText>{project.leader_name}</OverviewText>
        </div>
      </FlexDiv>
  </ContentBox>
))}
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
            </>
  )
}

export default ProjectObjectProjectList