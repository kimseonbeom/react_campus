import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../commons/modalStore";
import { useEffect } from "react";

export function RedirectAfterLogin() {
  const navigate = useNavigate();
  const user = useAuthStore(state => state.user);

useEffect(() => {
  if (user?.mem_id) {
    const searchParams = new URLSearchParams(window.location.search);
    const currentMemId = searchParams.get("memId");

    if (currentMemId !== user.mem_id) {
      // URL을 항상 현재 계정으로 업데이트
      navigate(`/?memId=${user.mem_id}`, { replace: true });
    }
  }
}, [user, navigate]);

  return null; // 렌더링할 내용 없음
}