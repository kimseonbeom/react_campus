import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  0% { transform: translateY(100%); opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  90% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
`;

const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  pointer-events: none; /* 클릭 방해 방지 */
  z-index: 10000;
`;

const ToastWrapper = styled.div`
  background-color: rgba(0,0,0,0.85);
  color: #fff;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  opacity: 0;
  animation: ${slideUp} 3s forwards;
`;

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 3000); // 3초 후 자동 닫기
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <ToastContainer>
      <ToastWrapper>{message}</ToastWrapper>
    </ToastContainer>
  );
}

export default Toast;