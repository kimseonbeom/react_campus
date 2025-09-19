import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { 
    ListHeader, CatTitle, FlexDiv, Writer,
    SearchBar, SearchDrop, SearchText,
    DropHeader, DropList, DropOption,
    WHContainer, DateBox, Title, Button, CheckButton, 
    PageNation, PageArrowButton, PageNumText, PageNumberButton, PageText,
    CustomInput, CheckContainer, CheckBox, CheckMark, CheckText 
} from '../commons/WHComponent';
import { dropdownArrow, searchIcon, calender, pageArrow1, pageArrow2, pageArrow3, pageArrow4 } from '../img';
import { getProjectObjectList, getUserSession } from "../api";

function ProjectObjectList() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("전체");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const startInputRef = useRef(null);
  const endInputRef = useRef(null);
  const [checked, setChecked] = useState(false);
  const { project_id } = useParams();
  const location = useLocation();
  const memId = new URLSearchParams(location.search).get("memId");
    const [searchText, setSearchText] = useState('');
  const [roadMapList, setRoadMapList] = useState([]);
  const [project, setProject] = useState([]);
  const user = getUserSession();
  const navigate = useNavigate();
  const [pageMaker, setPageMaker] = useState({
    page: 1,
    perPageNum: 10,
    displayPageNum: 5,
    totalCount: 0,
    startPage: 1,
    endPage: 1,
    realEndPage: 1,
    prev: false,
    next: false
  });
  const goToDetail = (rm_id) => {
     navigate(`/project/object/${project_id}/list/${rm_id}/detail?memId=${memId}`);
  };
  useEffect(() => {
    if(!project_id || !memId) return;
    getProjectObjectList(project_id, memId)
      .then(res => {
        console.log("로드맵 API 응답:", res.data);
        setProject(res.data.project || []);
        setRoadMapList(res.data.roadMapList || []);
        setPageMaker(res.data.pageMaker || pageMaker);
      })
      .catch(err => console.error(err));
  }, [project_id, memId]);

  const toggleOpen = () => setOpen(!open);

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  // 체크박스 필터
  const filteredList = roadMapList.filter(item => !checked || item.eval_status === "0");
 const handleSearch = (page = pageMaker.page || 1) => {
  if (!project_id || !memId) return;

  if (startDate && endDate && startDate > endDate) {
    alert("시작일이 종료일보다 클 수 없습니다.");
    return;
  }

  const stDate = startDate ? startDate.toISOString().split('T')[0] : '';
  const enDate = endDate ? endDate.toISOString().split('T')[0] : '';
  const category = selected === "전체" ? undefined : selected;

  getProjectObjectList(
    project_id,
    memId,
    category,             // rm_category
    searchText || '',     // rm_name
    stDate || undefined,  // rm_stdate
    enDate || undefined,  // rm_endate
    checked ? '0' : undefined, // eval_status
    page
  )
  .then(res => {
    setRoadMapList(res.data.roadMapList || []);
    setPageMaker(res.data.pageMaker || pageMaker);
  })
  .catch(err => console.error(err));
};

// 페이지 이동
const handlePageChange = (newPage) => {
  handleSearch(newPage);
};
  return (
    <div style={{width:"100%", minHeight:"100vh", backgroundColor:"#f7f7f7"}}>
      {/* 헤더 영역 */}
      <ListHeader style={{height:'156px'}}>
        <FlexDiv>
          <CatTitle>결과물</CatTitle>
          {user?.mem_auth?.includes("ROLE01")&&(
          <Button style={{width:'65px'}}>자료제출</Button>)
}
        </FlexDiv>
        <FlexDiv style={{marginTop:'8px'}} >
          {/* 날짜 선택 */}
          <div style={{ display: "flex", alignItems: "center", width: "110px", height: "36px" }} >
            <DatePicker 
              selected={startDate} 
              onChange={(date) => setStartDate(date)} 
              placeholderText="시작일"
              dateFormat="yyyy-MM-dd" 
              customInput={<CustomInput ref={startInputRef}/>}
            />
            <img src={calender} style={{width:'25px', marginLeft:'-35px', position:'relative'}} alt="calendar"/>
          </div>
          <div style={{marginLeft:'65px', marginTop:'5px'}}>~</div>
          <div style={{ display: "flex", alignItems: "center", width: "110px", height: "36px", marginLeft:'12px'}}>
            <DatePicker 
              selected={endDate} 
              onChange={(date) => setEndDate(date)} 
              placeholderText="마감일"
              dateFormat="yyyy-MM-dd" 
              customInput={<CustomInput ref={endInputRef}/>}
            />
            <img src={calender} style={{width:'25px', marginLeft:'-35px', position:'relative'}} alt="calendar"/>
          </div>
        </FlexDiv>
        <FlexDiv>
          {/* 카테고리 필터 */}
          <SearchDrop>
            <DropHeader onClick={toggleOpen}>
              {selected}
              <img src={dropdownArrow} style={{width:"13px", height:"8px", marginLeft:'auto', display:'block', marginTop:'8px'}} />
            </DropHeader>
            {open && (
              <DropList>
                <DropOption onClick={() => handleSelect("전체")}>전체</DropOption>
                <DropOption onClick={() => handleSelect("회의록")}>회의록</DropOption>
                <DropOption onClick={() => handleSelect("업무일지")}>업무일지</DropOption>
                <DropOption onClick={() => handleSelect("산출물")}>산출물</DropOption>
                <DropOption onClick={() => handleSelect("최종결과물")}>최종결과물</DropOption>
              </DropList>
            )}
          </SearchDrop>
          <SearchBar>
            <img src={searchIcon} style={{width:'15px', height:'16px', marginBottom:"8px"}} />
            <SearchText
              placeholder="검색어를 입력해 주세요."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
            />
          </SearchBar>
        </FlexDiv>
      </ListHeader>

      {/* 미완료 체크 */}
      <CheckContainer>
        <label style={{display: "flex", justifyContent:'end', marginRight:'14px'}}>
          <CheckBox type='checkbox' checked={checked} onChange={(e) => setChecked(e.target.checked)} />
          <CheckMark/>
          <CheckText>미완료</CheckText>
        </label>
      </CheckContainer>

      {/* 산출물 리스트 */}
      {filteredList.length > 0 ? (
  filteredList.map((item, idx) => (
    <WHContainer key={item.rm_id}
    onClick={() => goToDetail(item.rm_id)} 
    style={{ cursor: 'pointer' }}
    >
      <div style={{width:'37px', lineHeight:'35px'}}>{idx + 1}</div>
      <div style={{width:'230px'}}>
        <Title style={{marginTop:'-2px'}}>[{item.rm_category}] {item.rm_name}</Title>
        <Writer>{item.mem_name}</Writer>
      </div>
      <div style={{width:'100px'}}>
        <DateBox style={{textAlign:'end', marginTop:'-3px'}}>
          {formatDate(item.rm_regdate)}
        </DateBox>
        <CheckButton 
          style={{
            height:'21px', 
            marginTop:'2px', 
            lineHeight:'19px', 
            border: item.eval_status === "0" ? '1px solid #ff5e5e' : '1px solid #2EC4B6', 
            color: item.eval_status === "0" ? '#ff5e5e' : '#2EC4B6'
          }}
        >
          {item.eval_status === "0" ? '미완료' : '완료'}
        </CheckButton>
      </div>
    </WHContainer>
  ))
) : (
  <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
    등록된 결과물이 없습니다.
  </div>
)}

      {/* 페이지네이션 */}
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
  );
}

export default ProjectObjectList;
