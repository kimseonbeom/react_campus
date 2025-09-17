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
    const toggleOpen = () => setOpen(!open);
    const user = getUserSession();
    useEffect(() => {
  const memId = user.mem_id;
  const auth = user.mem_auth;
  console.log('Fetching project list for:', memId, 'auth:', auth);

  if (auth === 'ROLE01') {
    // 학생
    getProjectTeamList(memId)
      .then(res => {
        console.log('학생용 API response:', res.data);
        setProjectList(res.data.projectList || []);
      })
      .catch(err => console.error(err));
  } else if (auth === 'ROLE02') {
    // 교수
    getProjectTeamListProRest(memId)
      .then(res => {
        console.log('교수용 API response:', res.data);
        setProjectList(res.data.projectList || []);
      })
      .catch(err => console.error(err));
  } else {
    console.warn('알 수 없는 권한:', auth);
    setProjectList([]);
  }
}, []);
    // 옵션 선택
    const handleSelect = (value) => {
        setSelected(value);
        setOpen(false);
  };
const formatDate = (timestamp) => {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
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
            {projectList.map((project, idx) => (
  <ContentBox key={project.project_id} style={{width:'386px', height:'140px', margin:'0 auto', border:'1px solid #ccc',marginBottom:'10px'}}>
      <Header style={{paddingTop:'4px', paddingBottom:'11px', height:'37px'}}>
        <HeadText style={{fontSize:'14px'}}>{project.project_name}</HeadText>
        <GreenBox style={{
          marginLeft:'auto',
          marginTop:'5px',
          border: project.eval_status === '미평가' ? '1px solid #ff5e5e' : '1px solid #2ec4b6',
          color: project.eval_status === '미평가' ? '#ff5e5e' : '#2ec4b6'
        }}>
          {project.eval_status}
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