import React, { useState } from 'react'
import styled from 'styled-components';
import { campus } from '../img';
import { useAuthStore } from '../commons/modalStore';
import axios from 'axios';
import Toast from '../commons/Toast';

const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
  max-width: 360px;
  padding: 200px 30px 24px;
`;

const Logo = styled.img`
  display: block;
  width: 180px;
  margin: 0 auto 40px; 
`;

const MiddleMent = styled.div`
  font-size: 12px;
  color: #555;
  text-align: center;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 12px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #2ec4b6;
  }
`;

const Help = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 8px 0 16px;
  color: #666;
`;

const FindLink = styled.a`
  color: #2ec4b6;
  text-decoration: none;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 42px;
  background: #2ec4b6;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #1fa99c;
  }
`;
function Login() {
    const login = useAuthStore(state => state.login)
      const [id, setId] = useState('')
      const [pw, setPw] = useState('')
      const [toastMsg, setToastMsg] = useState("");

        const handleLogin = async () => {
    try {
      const res = await axios.post(
        '/api/login/index',
        { id, pwd: pw },
        { withCredentials: true } 
      )
      login(res.data);
      sessionStorage.setItem('user', JSON.stringify(res.data));
      const memId = res.data.mem_id;
    navigate(`/?memId=${res.data.mem_id}`);
      setToastMsg("로그인 성공");
    } catch (err) {
      setToastMsg(err.response?.data || '로그인 실패')
    }
  }
      
    return (
    <PageWrap>
      <Body>
        <Logo src={campus} alt="CAMPUS" />
        <MiddleMent>회원님의 아이디와 비밀번호를 정확히 입력해주세요.</MiddleMent>

        <Input type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)}/>
        <Input type="password" placeholder="PASSWORD" value={pw} onChange={e => setPw(e.target.value)} />
        
        <Help>
          <span>비밀번호를 잊어버리셨나요?</span>
          <FindLink>비밀번호 찾기</FindLink>
        </Help>

        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </Body>
      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
    </PageWrap>

  )
}

export default Login;