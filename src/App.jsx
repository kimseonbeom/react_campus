import { createGlobalStyle } from 'styled-components'
import CampusMain from './components/campus/CampusMain'
import BoardDetail from './components/campus/board/BoardDetail'
import TopNav from './components/campus/topNav/TopNav'
import LectureAttendenceModify from './components/campus/lecAtten/LectureAttendanceModify'
import LectureHomeworkDetail from './components/campus/lecHomework/LectureHomeworkDetail'
import LectureAttendanceChange from './components/campus/lecAtten/LectureAttendanceChange'
import LectureHomeworkRegist from './components/campus/lecHomework/LectureHomeworkRegist'
import LectureHomeworkProDetail from './components/campus/lecHomework/LectureHomeworkProDetail'
import LecturePdsRegist from './components/campus/lecPds/LecturePdsRegist'
import ProjectTeamModify from './components/campus/proTeam/ProjectTeamModify'
import ProjectTeamRegist from './components/campus/proTeam/ProjectTeamRegist'
import ProjectObjectRegist from './components/campus/proObject/ProjectObjectRegist'
import LectureHomeworkStuDetailFeedbackSubmit from './components/campus/lecHomework/LectureHomeworkStuDetailFeedbackSubmit'
import { BrowserRouter } from 'react-router-dom'
import LectureHomeworkDetailFeedback from './components/campus/lecHomework/LectureHomeworkDetailFeedback'
import LectureHomeworkStuDetail from './components/campus/lecHomework/LectureHomeworkStuDetail'
import LectureNoticeDetail from './components/campus/lecNotice/LectureNoticeDetail'
import LectureOnlineDetail from './components/campus/lecOnline/LectureOnlineDetail'
import LecturePdsDetail from './components/campus/lecPds/LecturePdsDetail'
import MailWasteDetail from './components/campus/mail/MailWasteDetail'
import MailDetail from './components/campus/mail/MailDetail'
import ProjectObjectDetail from './components/campus/proObject/ProjectObjectDetail'
import ProjectObjectDetailFeedback from './components/campus/proObject/ProjectObjectDetailFeedback'
import ProjectTeamDetail from './components/campus/proTeam/ProjectTeamDetail'
import BoardList from './components/campus/board/BoardList'
import BoardRegist from './components/campus/board/BoardRegist'
import LectureHomeworkSubmit from './components/campus/lecHomework/LectureHomeworkSubmit'
import LectureNoticeRegist from './components/campus/lecNotice/LectureNoticeRegist'
import LecturePlanModify from './components/campus/lecPlan/LecturePlanModify'
import LecturePlanRegist from './components/campus/lecPlan/LecturePlanRegist'
import MailWrite from './components/campus/mail/MailWrite'
import ProjectTeamModifyCheck from './components/campus/proTeam/ProjectTeamModifyCheck'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

  }
  body{
    font-family: 'pretendard'
  }
`

function App() {

  return (
    <>
      <GlobalStyle/>
      <CampusMain />
    </>
  )
}

export default App
