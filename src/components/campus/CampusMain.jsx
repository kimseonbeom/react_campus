import React, { useEffect, useState } from 'react'
import TopNav from './topNav/TopNav'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import SideMenu from './menu/SideMenu'

import Mypage from './mypage/Mypage'
import MypagePro from './mypage/MypagePro'
import ChangePasswordModal from './mypage/ChangePasswordModal'

import MailDashBoard from './mail/MailDashBoard'
import MailDetail from './mail/MailDetail'
import MailNavBar from './mail/MailNavBar'
import MailNavItem from './mail/MailNavItem'
import MailReceive from './mail/MailReceive'
import MailSend from './mail/MailSend'
import MailWaste from './mail/MailWaste'
import MailWasteDetail from './mail/MailWasteDetail'
import MailWrapper from './mail/MailWrapper'
import MailWrite from './mail/MailWrite'

import HomeWrapper from './home/HomeWrapper'
import HomeWrapperPro from './home/HomeWrapperPro'

import LectureNoticeWrapper from './lecNotice/LectureNoticeWrapper'
import LectureNoticeDetail from './lecNotice/LectureNoticeDetail'
import LectureNoticeRegist from './lecNotice/LectureNoticeRegist'
import LectureNoticeList from './lecNotice/LectureNoticeList'
import LectureNoticeModify from './lecNotice/LectureNoticeModify'

import LectureOnlineWrapper from './lecOnline/LectureOnlineWrapper'
import LectureOnlineDetail from './lecOnline/LectureOnlineDetail'
import LectureOnlineModify from './lecOnline/LectureOnlineModify'
import LectureOnlineList from './lecOnline/LectureOnlineList'
import LectureOnlineRegist from './lecOnline/LectureOnlineRegist'

import LecturePlanWrapper from './lecPlan/LecturePlanWrapper'
import LecturePlanModify from './lecPlan/LecturePlanModify'
import LecturePlanDetail from './lecPlan/LecturePlanDetail'
import LecturePlanDetailPro from './lecPlan/LecturePlanDetailPro'
import LecturePlanRegist from './lecPlan/LecturePlanRegist'
import LecturePlanNoneData from './lecPlan/LecturePlanNoneData'
import LecturePlanNoneDataPro from './lecPlan/LecturePlanNoneDataPro'

import LectureHomeworkDetailFeedback from './lecHomework/LectureHomeworkDetailFeedback'
import LectureHomeworkList from './lecHomework/LectureHomeworkList'
import LectureHomeworkProDetail from './lecHomework/LectureHomeworkProDetail'
import LectureHomeworkRegist from './lecHomework/LectureHomeworkRegist'
import LectureHomeworkStuDetail from './lecHomework/LectureHomeworkStuDetail'
import LectureHomeworkStuDetailFeedbackSubmit from './lecHomework/LectureHomeworkStuDetailFeedbackSubmit'
import LectureHomeworkSubmit from './lecHomework/LectureHomeworkSubmit'
import LectureHomeworkWrapper from './lecHomework/LectureHomeworkWrapper'

import LecturePdsWrapper from './lecPds/LecturePdsWrapper'
import LecturePdsDetail from './lecPds/LecturePdsDetail'
import LecturePdsList from './lecPds/LecturePdsList'
import LecturePdsRegist from './lecPds/LecturePdsRegist'
import LecturePdsModify from './lecPds/LecturePdsModify'

import LectureAttendanceWrapper from './lecAtten/LectureAttendanceWrapper'
import LectureAttendanceChange from './lecAtten/LectureAttendanceChange'
import LectureAttendanceListPro from './lecAtten/LectureAttendanceListPro'
import LectureAttendanceListStu from './lecAtten/LectureAttendanceListStu'
import LectureAttendanceModify from './lecAtten/LectureAttendanceModify'

import ProjectObjectList from './proObject/ProjectObjectList'
import ProjectObjectWrapper from './proObject/ProjectObjectWrapper'
import ProjectObjectDetailFeedback from './proObject/ProjectObjectDetailFeedback'
import ProjectObjectFeedback from './proObject/ProjectObjectFeedback'
import ProjectObjectProjectList from './proObject/ProjectObjectProjectList'
import ProjectObjectRegist from './proObject/ProjectObjectRegist'

import ProjectTeamWrapper from './proTeam/ProjectTeamWrapper'
import ProjectTeamDetail from './proTeam/ProjectTeamDetail'
import ProjectTeamList from './proTeam/ProjectTeamList'
import ProjectTeamListPro from './proTeam/ProjectTeamListPro'
import ProjectTeamModify from './proTeam/ProjectTeamModify'
import ProjectTeamModifyCheck from './proTeam/ProjectTeamModifyCheck'
import ProjectTeamRegist from './proTeam/ProjectTeamRegist'

import BoardWrapper from './board/BoardWrapper'
import BoardDetail from './board/BoardDetail'
import BoardList from './board/BoardList'
import BoardModify from './board/BoardModify'
import BoardRegist from './board/BoardRegist'
import styled from 'styled-components'
import { useAuthStore } from './commons/modalStore'
import Loading from './commons/Loading'
import Login from './commons/Login'
import { RedirectAfterLogin } from './home/RedirectAfterLogin'

function CampusMain() {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn)
  const login = useAuthStore(state => state.login);
  const logout = useAuthStore(state => state.logout);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    // 세션 스토리지에 로그인 정보가 있으면 로그인 처리
    const userData = sessionStorage.getItem('user');
    if (userData) {
      login(JSON.parse(userData));
    } else {
      logout();
    }
    setCheckingSession(false);
  }, []);

  if (checkingSession) return <Loading />;

  const Container = styled.div`
    width: 100vw;
  `
  return (
    <>
    <BrowserRouter>
      {!isLoggedIn ? ( <Login />
          ) : (
      <>
      <RedirectAfterLogin />
      <TopNav />
      <SideMenu/>

      <Routes>
        <Route path='/' element={<HomeWrapper />}></Route>
        <Route path='/JAVA101/plan' element={<LecturePlanWrapper />}>
          <Route index element={<LecturePlanNoneDataPro />}></Route>
        </Route>
        <Route path='/JAVA101/notice' element={<LectureNoticeWrapper />}>
          <Route index element={<LectureNoticeList />}></Route>
          <Route path=':id' element={<LectureNoticeDetail />}></Route>
        </Route>
        <Route path='/JAVA101/online' element={<LectureOnlineWrapper />}>
          <Route index element={<LectureOnlineList />}></Route>
          <Route path=':lecvid_id' element={<LectureOnlineDetail />}></Route>
        </Route>
        <Route path='/JAVA101/atten' element={<LectureAttendanceWrapper />}>
          <Route index element={<LectureAttendanceListStu />}></Route>
        </Route>
        <Route path='/JAVA101/homework' element={<LectureHomeworkWrapper />}>
          <Route index element={<LectureHomeworkList />}></Route>
          <Route path=':hw_no' element={<LectureHomeworkDetailFeedback />}></Route>
        </Route>
        <Route path='/JAVA101/pds' element={<LecturePdsWrapper />}>
          <Route index element={<LecturePdsList />}></Route>
          <Route path=':cf_no' element={<LecturePdsDetail />}></Route>
        </Route>
        <Route path='/project/team' element={<ProjectTeamWrapper />}>
          <Route index element={<ProjectTeamList />}></Route>
          <Route path=':team_id' element={<ProjectTeamDetail />}></Route>
        </Route>
        <Route path='/project/object' element={<ProjectObjectWrapper />}>
          <Route index element={<ProjectObjectProjectList />}></Route>
          <Route path=':project_id/list' element={<ProjectObjectList />}>
            <Route path=':rm_id' element={<ProjectObjectDetailFeedback />}></Route>
          </Route>
        </Route>
        <Route path='/board' element={<BoardWrapper />}>
          <Route index element={<BoardList />}></Route>
          <Route path=':board_id' element={<BoardDetail />}></Route>
        </Route>
      </Routes>

      <Mypage/>
      <MailDashBoard/>
      <LecturePlanModify/>
      <LecturePlanRegist/>
      <LecturePlanRegist/>
      </>
      )}
      

      {/* 
      <LectureNoticeModify/>
      <LectureOnlineRegist/>
      <LectureOnlineModify/>
      <LectureHomeworkRegist/>
      <LectureHomeworkStuDetail/>
      <LectureHomeworkStuDetailFeedbackSubmit/>
      <LectureHomeworkSubmit/>
      <LecturePdsRegist/>
      <LecturePdsModify/>
      <LectureAttendanceChange/>
      <LectureAttendanceModify/>
      <ProjectObjectFeedback/>
      <ProjectObjectRegist/>
      <ProjectTeamModify/>
      <ProjectTeamRegist/>
      <ProjectTeamModifyCheck/>
      <BoardModify/>
      <BoardRegist/> */}

    </BrowserRouter>
    </>
  )
}

export default CampusMain