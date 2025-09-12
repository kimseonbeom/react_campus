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
  showModal: () => set({ visible: true }),
  hideModal: () => set({ visible: false }),
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

export default useModalStore;