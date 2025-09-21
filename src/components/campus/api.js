import axios from "axios";

export function getHomeworklist() {
  return axios.get('/api/homework/list');
}

export function getStudent(memId){
  return axios.get(`/api/student?memId=${memId}`)
}
export const registerProject = (payload) => {
  return axios.post("/api/project/regist", payload);
};
export const getProjectRegistData = () => {
  return axios.get("/api/project/regist"); 
};
export const getProjectDetail = (project_id) => {
  return axios.get(`/api/project/modify/stu?project_id=${project_id}`)
}
export const requestProjectModify = (payload) => {
  return axios.post("/api/project/modify/stu", payload);
};
export const getModifyCheck = (project_id) => {
  return axios.get(`/api/project/modify/pro?project_id=${project_id}`)
}
export const modifyProjectTeamCheck = (payload) => {
  return axios.post("/api/project/modify/pro", payload);
  
};
export const removeTeam = (team_id) => {
  return axios.get("/api/project/remove", { params: { team_id } });
};
export const getProjectTeamListPro = (memId, page = 1, samester = '', projectName = '',projectStDate = '',  projectEnDate = '', perPageNum = 3 ) => {
  
  return axios.get('/api/project/list/pro', {
    params: {
      memId,
      page,
      samester,
      project_name: projectName || '', // 검색 안 해도 빈 문자열 보내기
      project_stdate: projectStDate || '',
      project_endate: projectEnDate || '',
      perPageNum
    }
    
  });
}
export const getProjectTeamList = (memId, page = 1, samester = '', projectName = '',projectStDate = '',  projectEnDate = '') => {
  return axios.get('/api/project/list/stu', {
    params: {
      memId,
      page,
      samester,
      project_name: projectName || '', // 검색 안 해도 빈 문자열 보내기
      project_stdate: projectStDate || '',
      project_endate: projectEnDate || ''
    }
  });
}
export function checkSession() {
  return axios.get('/api/login/check');
}
export const getProjectTeamListStu = (
  memId, 
  page = 1, 
  samester = '', 
  projectName = '', 
  projectStDate = '', 
  projectEnDate = '',
  evalStatus,
    perPageNum  = 3
) => {
  return axios.get('/api/roadmap/projectlist/stu', {  // @RestController 경로
    params: {
      memId,
      page,
      samester,
      project_name: projectName || '',
      project_stdate: projectStDate || '',
      project_endate: projectEnDate || '',
      eval_status : evalStatus,
      perPageNum
    }
  });
};
export const getProjectObjectList = (projectId, memId, rmCategory = '', rmName = '', rmStdate = '', rmEndate = '', page = 1) => {
  return axios.get('/api/roadmap/list/stu', {
    params: {
      project_id: projectId,
      memId: memId,
      rm_category: rmCategory,
      rm_name: rmName,
      rm_stdate: rmStdate,
      rm_endate: rmEndate,
      page
    }
  });
};
export const getProjectTeamListProRest = (
  memId,
  page = 1,
  samester = '',
  projectName = '',
  projectStDate = '',
  projectEnDate = '',
  modifyRequest = false

) => {
  return axios.get('/api/roadmap/projectlist/pro', {
    params: {
      memId, // session에서 서버가 받아야 하지만, axios에서는 보내도 무방
      page,
      samester,
      project_name: projectName || '',
      project_stdate: projectStDate || '',
      project_endate: projectEnDate || '',
      modifyRequest
    }
  });
};
export const getRoadMapDetail = async (rm_id, memId, pageMakers = {}, pageMaker = {}) => {
  try {
    const params = {
      rm_id,
      memId,
      ...pageMakers,
      ...pageMaker
    };

    const res = await axios.get("/api/roadmap/detail", { params });
    return res.data;
  } catch (err) {
    console.error("로드맵 상세 조회 실패:", err.response?.data || err);
    throw err;
  }
};
export const getEvaluationForm = (rm_id) => {
  return axios.get("/api/roadmap/evaluation/form", {
    params: { rm_id }
  })
};

export const registerEvaluation = (payload) => {
  return axios.post(`/api/roadmap/evaluation/regist?memId=${payload.profes_id}`, payload)
};
export const getEvaluationForModify = (eval_id, rm_id) => {
  return axios.get(`/api/roadmap/modify?eval_id=${eval_id}&rm_id=${rm_id}`);
};
export const modifyEvaluation = (payload) => {
  return axios.post(
    `/api/roadmap/modify?eval_id=${payload.eval_id}&rm_id=${payload.rm_id}&memId=${payload.profes_id}`,
    payload
  );
};
export const registRoadmap = (formData) => {
  return axios.post("/api/roadmap/regist", formData);
};
export const getRegistForm = (mem_id, project_id) => {
  return axios.get("/api/roadmap/regist", {
    params: {
      mem_id,
      project_id,
    },
  });
};
// 로그아웃
export function logoutUser() {
  return axios.post('/api/login/logout', {});
}
export function loginUser(id, pwd) {
  return axios.post(
    '/api/login/index',
    { id, pwd }
  );
}
export const getUserSession = () => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) return { name: "", id: "", pictureUrl: "" };

    return {
      ...user,
      pictureUrl: user.mem_id 
        ? `http://localhost:8081/campus/member/getPicture?id=${user.mem_id}` 
        : ""
    };
  } catch (err) {
    console.error("세션에서 사용자 정보를 가져오는데 실패:", err);
    return { name: "", id: "", pictureUrl: "/img/user1.png" };
  }

  
};