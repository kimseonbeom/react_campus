import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { user1, home, homehv, lecture, lecturehv, project, projecthv,
        post, posthv, mypage
} from '../img'
import { useAuthStore, useMypageModalStore, useSideMenuStore } from '../commons/modalStore'
import { Link, useLocation, useParams } from 'react-router-dom'
import Toast from '../commons/Toast'
import { getStudent, getUserSession, logoutUser } from '../api'
import axios from 'axios'

export const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 900;
`


const Container = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  font-family: 'Noto Sans KR', sans-serif;
  color: #212121;
  display: block;
  transition: margin-left .3s ease-in-out,width .3s ease-in-out;
  width: 80%;
  height: 100vh;
  overflow-y: hidden;
  z-index: 1038;
  overflow-x: hidden;
  box-sizing: border-box;
  bottom: 0;
  float: none;
  left: 0;
  position: fixed;
  top: 0;
  border: 1px solid #dedede;
  background-color: #ffffff;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  overflow-y: auto;
`

const UserImage = styled.img`
  margin-left: 30px;
  margin-top: 5px;
  width: 59px;
  height: 59px;
  object-fit: cover;
`

const Profile = styled.div`
  width: 70%;
  height: 18%;
`

const Text = styled.span`
  font-size: 18px;
  font-weight: bold;
`

const Button = styled.button`
  width: 66px;
  height: 26px;
  border-radius: 5px;
  color: #aaaaaa;
  border: 1px solid #aaaaaa;
  background-color: #ffffff;
`

export const Hr = styled.hr`
  background-color: #2ec4b6;
  height: 2px;
`

const Select = styled.select`
  border: 2px solid #2ec4b6;

  &:focus {
    border-color: #2ec4b6;
  }
`

// 아이콘 컴포넌트
const Icon = styled.i`
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url(${props => props.hover ? props.hoverImg : props.defaultImg});
  background-size: contain;
  background-repeat: no-repeat;
  transition: background-image 0.3s;
  transform: translateY(${props => props.translateY || '0px'});
`

const P = styled.p`
  color: ${props => props.hover ? '#2ec4b6' : '#212121'};
  font-weight: bold;
  margin: 0;
  transition: color 0.3s;
`
const MypageIcon = styled.i`
  display: inline-block; 
  width: 12px; /* 이미지 크기 조절 */ 
  height: 12px; 
  background-image: url(${mypage}); 
  background-size: contain;
  background-repeat: no-repeat; 
`
export const Nonebutton = styled.button`
  border: none;
  background: none;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #212121;
  
`


export const Submenu = styled.ul`
  max-height: ${({ open }) => (open ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

function SideMenu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [homeHover, setHomeHover] = useState(false)
  const [lectureHover, setLectureHover] = useState(false)
  const [projectHover, setProjectHover] = useState(false)
  const [postHover, setPostHover] = useState(false)
  const { showModal } = useMypageModalStore();
  const { isOpen, closeMenu } = useSideMenuStore();
  const logout = useAuthStore(state => state.logout);
  const [toastMsg, setToastMsg] = useState("");
  const user = getUserSession();
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const memId = query.get('memId');

useEffect(() => {
    if (memId) {
      getStudentData(memId);
    }
  }, [memId]);
async function getStudentData(memId) {
  try{
  const response = await getStudent(memId);
  setStudentData(response.data);
  setLoading(false); 
  console.log(response.data)
  return response.data;
}catch (err) {
  console.error(err);
  setLoading(false);
}
};
  const handleLogout = async () => {
  try {
    await logoutUser(); // 서버 세션 삭제
    logout(); // Zustand 상태 초기화
    sessionStorage.removeItem('user');
    setToastMsg('로그아웃 완료!');
  } catch (err) {
    console.error(err);
    setToastMsg('로그아웃 실패');
  }
};
  return (
    <>
    <Overlay isOpen={isOpen} onClick={closeMenu} />
    <Container  $isOpen={isOpen}>
      <div style={{ display: 'flex' }}>
        <Profile>
          <div style={{ width: "100%", height: "25px" }}></div>
          <UserImage src={user.pictureUrl} className="img-circle img-md" alt="User Image" />
          <div style={{ marginTop: "10px", display: "flex" }}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;{user.mem_name}&nbsp;&nbsp;</Text>
            <Nonebutton onClick={showModal}>
            <MypageIcon style={{marginTop:'8px'}}></MypageIcon>
            </Nonebutton>
          </div>
          <Text style={{ fontSize: "15px", color: "#909090", fontWeight: "500" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.mem_id}
          </Text>
        </Profile>
        <Button style={{ marginTop: '47px', fontSize: "13px" }} onClick={()=> {handleLogout(); closeMenu();}}>로그아웃</Button>
      </div>

      <Hr style={{ width: '290px', marginTop:'22px' }} />

      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">

        {/* HOME */}
        <StyledLink to='/'>
        <li className="nav-item" style={{ display: "flex", alignItems: "center", padding: '5px 15px' }}
          onClick={() => {setActiveMenu("home"); setHomeHover(false); closeMenu();}}
          
        >
          <Icon defaultImg={home} hoverImg={homehv} hover={homeHover || activeMenu === "home"} style={{ marginLeft: '20px', marginRight: "10px" }} />
          <P hover={homeHover || activeMenu === "home"}>&nbsp;&nbsp;HOME</P>
        </li>
      </StyledLink>
        {/* 강의실 */}
        <li className="nav-item" style={{ marginTop: '15px' }}>
  <div
    className="nav-link"
    style={{ display: "flex", alignItems: "center", cursor: "pointer" }}

    onClick={() => {setActiveMenu(activeMenu === "lecture" ? null : "lecture"); setLectureHover(false);}}
  >
    <Icon
      defaultImg={lecture}
      hoverImg={lecturehv}
      hover={lectureHover || activeMenu === "lecture"}
      style={{ marginLeft: '20px', marginRight: "10px", marginTop: '5px' }}
    />
    <P hover={lectureHover || activeMenu === "lecture"}>
      &nbsp;&nbsp;강의실{" "}
      <i
        className={`right fas fa-angle-${activeMenu === "lecture" ? "down" : "left"}`}
        style={{ marginRight: '15px' }}
      />
    </P>
  </div>

  {/* 하위 메뉴 토글 */}
  <Submenu open={activeMenu === "lecture"}>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-9">
          <div className="form-group">
            <Select className="custom-select my-border" style={{ marginLeft: '70px', width: '70%' }}>
  <option value="" >전공을 선택하세요.</option>
  {!loading && studentData?.stulectureList?.map((lec) => (
    <option key={lec.lecId} value={lec.lecId}> 
      {lec.lec_name}
    </option>
  ))}
</Select>
          </div>
        </div>
      </div>

      <StyledLink to='/JAVA101/plan' onClick={closeMenu}>
        <li className="nav-item"><p style={{ marginLeft: '80px' }}>강의계획서</p></li>
      </StyledLink>
      <StyledLink to='/JAVA101/notice' onClick={closeMenu}>
        <li className="nav-item"><p style={{ marginLeft: '80px' }}>공지사항</p></li>
      </StyledLink>
      <StyledLink to='/JAVA101/online' onClick={closeMenu}>
        <li className="nav-item"><p style={{ marginLeft: '80px' }}>실시간 강의</p></li>
      </StyledLink>
      <StyledLink to='/JAVA101/atten' onClick={closeMenu}>
        <li className="nav-item"><p style={{ marginLeft: '80px' }}>온라인 강의</p></li>
      </StyledLink>
      <StyledLink to='/JAVA101/atten' onClick={closeMenu}>
        <li className="nav-item"><p style={{ marginLeft: '80px' }}>출결</p></li>
      </StyledLink>
      <StyledLink to='/JAVA101/homework' onClick={closeMenu}>
        <li className="nav-item"><p style={{ marginLeft: '80px' }}>과제제출</p></li>
      </StyledLink>
      <StyledLink to='/JAVA101/pds' onClick={closeMenu}>
        <li className="nav-item"><p style={{ marginLeft: '80px' }}>자료실</p></li>
      </StyledLink>
  </Submenu>
</li>

        {/* 프로젝트 */}
        <li className="nav-item" style={{ marginTop: '10px' }}>
  <div
    className="nav-link"
    style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    onClick={() => setActiveMenu(activeMenu === "project" ? null : "project")}
  >
    <Icon
      defaultImg={project}
      hoverImg={projecthv}
      hover={projectHover || activeMenu === "project"}
      style={{ marginLeft: '20px', marginRight: "10px", transform: "translateY(5px)" }}
    />
    <P hover={projectHover || activeMenu === "project"}>
      &nbsp;&nbsp;프로젝트{" "}
      <i
        className={`right fas fa-angle-${activeMenu === "project" ? "down" : "left"}`}
        style={{ marginRight: '15px' }}
      />
    </P>
  </div>

  <Submenu open={activeMenu === "project"}>
      <li className="nav-item"><p style={{ marginLeft: '80px', marginTop: '15px'}}>팀 목록</p></li>
      <li className="nav-item"><p style={{ marginLeft: '80px', marginTop: '15px'}}>결과물</p></li>
    </Submenu>
</li>

        {/* 게시판 */}
        <li className="nav-item" style={{marginTop: '10px'}}>
          <a href="#" className="nav-link" style={{ display: "flex", alignItems: "center" }}
            onClick={() => setActiveMenu("post")}
          >
            <Icon defaultImg={post} hoverImg={posthv} hover={postHover || activeMenu === "post"}  style={{ marginLeft: '20px', marginRight: "10px" }} />
            <P hover={postHover || activeMenu === "post"}>&nbsp;&nbsp;게시판</P>
          </a>
        </li>
      </ul>
    </Container>
    {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
    </>
  )
}

export default SideMenu 