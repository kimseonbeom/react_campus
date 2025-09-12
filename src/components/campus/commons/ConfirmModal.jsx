// ConfirmModal.js
import React from "react";
import styled from "styled-components";
import useModalStore from "./modalStore";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;

`;

const ModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 400px;
  text-align: center;
    margin-bottom: 50px;
`;
const Button = styled.button`
    border: none;
    font-size: 12px;
    font-weight: bold;
    background-color: #fff;
`
const Line = styled.div`
    width: 1px;
    height: 26px;
    background-color: #aaa;
`
 const ConfirmText = styled.p`
    font-size: 12px;
    text-align: left;
    margin-left: 10px;
    line-height: 10px;
 `
function ConfirmModal() {
  const { confirmVisible, confirmMessage, onConfirm, hideConfirm } = useModalStore();

  if (!confirmVisible) return null;

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    hideConfirm(); // 필요 없을 수도 있음, showConfirm 내부에서 이미 false로 설정됨
  };

  return (
    <Overlay>
      <ModalBox>
        <ConfirmText>이 페이지 내용 : </ConfirmText>
        <ConfirmText>{confirmMessage}</ConfirmText>
        <div style={{ marginTop: "20px" ,display:'flex',justifyContent:'space-evenly'}}>
          <Button onClick={hideConfirm} style={{ marginRight: "10px" }}>취소</Button>
          <Line />
          <Button onClick={handleConfirm}>확인</Button>
        </div>
      </ModalBox>
    </Overlay>
  );
}

export default ConfirmModal;