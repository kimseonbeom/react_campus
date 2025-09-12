import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../commons/modalStore";
import { useEffect } from "react";

export function RedirectAfterLogin() {
  const navigate = useNavigate();
  const user = useAuthStore(state => state.user);

 useEffect(() => {
  if (user?.mem_id) {
    navigate(`/?memId=${user.mem_id}`, { replace: true });
  }
}, [user]);

  return null; // 렌더링할 내용 없음
}