// ConfirmModal.js
import React, { useState } from "react";
import styled from "styled-components";
import { usePasswordModalStore } from "../commons/modalStore";
import Toast from "../commons/Toast";

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
  z-index: 3000;

`;

const ModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 346px;
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
function ChangePasswordModal() {
    const { visible, message, onConfirm, onCancel, hideModal } = usePasswordModalStore();
    const [toastMsg, setToastMsg] = useState("");
    const [form, setForm] = useState({ current: "", newPw: "", confirmPw: "" });

     if (!visible) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 const handleConfirm = () => {
    const pwPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

    if (!pwPattern.test(form.newPw)) {
    setToastMsg("비밀번호는 영문 + 숫자 조합, 8~16자여야 합니다.");
    return;
  }
  if (form.newPw !== form.confirmPw) {
    setToastMsg("새 비밀번호와 확인이 일치하지 않습니다.");
    return;
  }

    if (onConfirm) onConfirm(form);
    hideModal();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    hideModal();
  };
  return (
    <>
        <Overlay>
      <ModalBox>
        {message && <p>{message}</p>}
        <Label>현재 비밀번호</Label>
        <ConfirmInput type="password" name="current" value={form.current} onChange={handleChange} />
        <Label>새 비밀번호</Label>
        <ConfirmInput type="password" name="newPw" value={form.newPw} onChange={handleChange} />
        <Information style={{marginRight:'10px'}}>
            비밀번호는 영문 + 숫자 조합, 8 ~ 16 자 입력 해주세요.
        </Information>
        <Label>새 비밀번호 확인</Label>
        <ConfirmInput type="password" name="confirmPw" value={form.confirmPw} onChange={handleChange} />

        <div style={{ marginTop: "20px", display:'flex', justifyContent:'space-evenly' }}>
          <Button onClick={handleCancel}>취소</Button>
          <Line />
          <Button onClick={handleConfirm}>확인</Button>
        </div>
      </ModalBox>
    </Overlay>
    {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
    </>
  );
}

export default ChangePasswordModal;