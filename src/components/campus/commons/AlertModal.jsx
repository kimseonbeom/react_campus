import React from 'react';
import styled from 'styled-components';
import useModalStore from './modalStore';

const Overlay = styled.div`
  position: fixed;
  top:0; left:0; width:100vw; height:100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content:center;
  align-items:center;
  z-index: 9999;
`;

const ModalBox = styled.div`
  background:#fff;
  padding: 20px 30px;
  border-radius: 8px;
  min-width: 250px;
  text-align: center;
`;

const ConfirmBtn = styled.button`
  margin-top: 20px;
  padding: 5px 15px;
  background-color: #2ec4b6;
  color: #fff;
  border: none;
  border-radius: 4px;
`;

const AlertModal = () => {
  const { alertVisible, alertMessage, hideAlert } = useModalStore();

  if (!alertVisible) return null;

  return (
    <Overlay>
      <ModalBox>
        <p>{alertMessage}</p>
        <ConfirmBtn onClick={hideAlert}>확인</ConfirmBtn>
      </ModalBox>
    </Overlay>
  );
};

export default AlertModal;