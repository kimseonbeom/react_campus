import { useEffect } from 'react';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useModalStore = create((set) => ({
  // Confirm
  confirmVisible: false,
  confirmMessage: "",
  onConfirm: null,
  showConfirm: (message, callback) =>
    set({ confirmVisible: true, confirmMessage: message, onConfirm: () => { callback(); set({ confirmVisible: false }); } }),
  hideConfirm: () => set({ confirmVisible: false }),

  // Alert
  alertVisible: false,
  alertMessage: "",
  showAlert: (message) => set({ alertVisible: true, alertMessage: message }),
  hideAlert: () => set({ alertVisible: false }),
}));
export const usePasswordModalStore = create((set) => ({
  visible: false,             // 모달 표시 여부
  message: "",                // 필요시 메시지
  onConfirm: null,            // 확인 콜백
  onCancel: null,             // 취소 콜백

  showModal: (message, onConfirm, onCancel) =>
    set({ visible: true, message, onConfirm, onCancel }),

  hideModal: () => set({ visible: false, message: "", onConfirm: null, onCancel: null }),
}));
export const useAttendanceModalStore = create((set) => ({
  visible: false,       // 모달 보이기 여부
  message: "",          // 모달 메시지
  onCancel: null,       // 취소 시 실행할 함수
  viewModal: (message = "", onCancel = null) =>
    set({ visible: true, message, onCancel }),
  hideModal: () =>
    set({ visible: false, message: "", onCancel: null }),
}));

export const useProjectFeedbackModalStore = create((set) => ({
    visible: false,
    rm_id: null,
    project_id: null,
    memId: null,
    showModal: ({ rm_id, project_id, memId }) => set({ visible: true, rm_id, project_id, memId }),
    hideModal: () => set({ visible: false, rm_id: null, project_id: null, memId: null }),
}));
export const useProjectFeedbackModifyModalStore = create((set) => ({
  visible: false,
  rm_id: null,
  project_id: null,
  eval_id: null,
  memId: null,
  showModal: ({ rm_id, project_id, eval_id, memId }) =>
    set({ visible: true, rm_id, project_id, eval_id, memId }),
  hideModal: () =>
    set({ visible: false, rm_id: null, project_id: null, eval_id: null, memId: null }),
}));
export const useMypageModalStore = create((set) => ({
  visible: false,
  showModal: () => set({ visible: true }),
  hideModal: () => set({ visible: false }),
}));
export const useSideMenuModalStore = create((set) => ({
  visible: false,
  showModal: () => set({ visible: true }),
  hideModal: () => set({ visible: false }),
}));
export const useSideMenuStore = create((set) => ({
  isOpen: false,
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
export const useMailModalStore = create((set) => ({
  visible: false,
  showModal: () => set({ visible: true }),
  hideModal: () => set({ visible: false }),
}));
export const useLecPlanModalStore = create((set) => ({
  visible: false,
  showModal: () => set({ visible: true }),
  hideModal: () => set({ visible: false }),
}));
export const useLecPlanRegistModalStore = create((set) => ({
  visible: false,
  showModal: () => set({ visible: true }),
  hideModal: () => set({ visible: false }),
}));
export const useLecNoticeRegistModalStore = create((set) => ({
  visible: false,
  showModal: () => set({ visible: true }),
  hideModal: () => set({ visible: false }),
}));
export const useAuthStore = create(
  persist(
    set => ({
      isLoggedIn: false,
      user: null, // 로그인한 사용자 정보
      login: (userData) => set({ isLoggedIn: true, user: userData }),
      logout: () => set({ isLoggedIn: false, user: null })
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
export const useProjectTeamModifyModalStore = create((set) => ({
  visible: false,
  project_id: null,
  showModal: (project_id) => set({ visible: true, project_id }), 
  hideModal: () => set({ visible: false, project_id: null }),
}));
export const useProjectTeamModifyCheckModalStore = create((set) => ({
  visible: false,
  project_id: null,
  showModal: (id) => set({ visible: true, project_id: id }),
  hideModal: () => set({ visible: false, project_id: null }),
}));
export const useProjectDetailModalStore = create((set) => ({
  visible: false,
  project_id: null,
  showModal: (id) => set({ visible: true, project_id: id }),
  hideModal: () => set({ visible: false, project_id: null }),
}));
export const useProjectTeamRegistModalStore = create((set) => ({
  visible: false,
  showModal: () => set({ visible: true }),
  hideModal: () => set({ visible: false }),
}));
export const useTeamSearchModalStore = create((set) => ({
  visible: false,
  selectedTeamLeader: null,
  showModal: () => set({ visible: true }),
  hideModal: () => set({ visible: false }),
   setSelectedTeamLeader: (prof) => set({ selectedTeamLeader: prof })
}));
export const useTeamMemberModalStore = create((set) => ({
  visible: false,
  selectedTeamMember: [],
  showModal: () => set({ visible: true }),
  hideModal: () => set({ visible: false }),
  // prof 혹은 members 중 하나를 전달
  setSelectedTeamMember: (membersOrProf) =>
    set({
      selectedTeamMember: Array.isArray(membersOrProf)
        ? membersOrProf
        : [membersOrProf], // 단일 객체도 배열로 감싸서 저장
    }),
}));
export const useTeamProfessorModalStore = create((set) => ({
  visible: false,
  selectedProfessor: null,
  showModal: () => set({ visible: true }),
  hideModal: () => set({ visible: false }),
  setSelectedProfessor: (prof) => set({ selectedProfessor: prof })
}));
export const useToastStore = create((set) => ({
  message: "",
  showToast: (msg) => set({ message: msg }),
  hideToast: () => set({ message: "" }),
}));
export default useModalStore;