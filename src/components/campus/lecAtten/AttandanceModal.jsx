// ConfirmModal.js
import React, { useState } from "react";
import styled from "styled-components";
import { useAttendanceModalStore, usePasswordModalStore } from "../commons/modalStore";
import { Flex, GrayHr } from "../home/HomeWrapperPro";
import { Cancle } from "../img";


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

`;

const ModalBox = styled.div`
  background: white;
  border-radius: 12px;
  width: 346px;
  height: 170px;
  text-align: center;
    margin-bottom: 50px;
`;
export const ExitButton = styled.button`
    border: none;
    font-size: 12px;
    width: 30px;
    height: 30px;
    font-weight: bold;
    background:none;
    margin-left: auto;
    padding-bottom: 5px;
    
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
 const Label = styled.p`
  font-size: 12px;
  text-align: left;
  margin: 10px 0 4px;
`;
 const ConfirmInput =styled.input`
    width: 100%;
    border-radius: 3px;
    height: 27px;
    font-size: 13px;
    border: 1px solid #aaa;
    &:focus {
    outline: none;
    border-color: #2ec4b6;
    }
 `
 const Information = styled.span`
    color: #aaa;
    font-size: 12px;
 `
function AttandanceModal() {
    const { visible, message, onCancel, hideModal } = useAttendanceModalStore();

     if (!visible) return null;

  const handleCancel = () => {
    if (onCancel) onCancel();
    hideModal();
  };
  return (
    <>
        <Overlay>
      <ModalBox>
        <Flex style={{padding:'0 20px 0 20px', height:'48px',alignItems:'center'}}>
          <span style={{fontSize:'14px'}}>이의 신청이 반려되었습니다.</span>
        
        <ExitButton onClick={handleCancel}>
          <img src={Cancle} style={{width:'100%', height:'100%', objectFit:'contain'}} />
        </ExitButton>
        </Flex>
        <GrayHr style={{width: '319px', margin:'0 auto'}}></GrayHr>
        <Flex style={{justifyContent:'start', marginTop:'17px', marginLeft:'20px'}}>
        {message && <p style={{fontSize:'13px'}}>{message}</p>}
        </Flex>
      </ModalBox>
    </Overlay>
    </>
  );
}

export default AttandanceModal;