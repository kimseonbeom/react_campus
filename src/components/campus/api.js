import axios from "axios";

export function getHomeworklist() {
  return axios.get('/api/homework/list');
}

export function getStudent(memId){
  return axios.get(`/api/student?memId=${memId}`)
}
export function getProjectTeamList(memId, page = 1) {
  return axios.get(`/api/project/list/stu?memId=${memId}&page=${page}`);
}
export function checkSession() {
  return axios.get('/api/login/check');
}

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