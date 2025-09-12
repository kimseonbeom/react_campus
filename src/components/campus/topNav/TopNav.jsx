import React from 'react'
import styled from 'styled-components';
import {menuBar, logoRow, mail} from '../img'
import { Nonebutton, StyledLink } from '../menu/SideMenu';
import { useMailModalStore, useSideMenuStore } from '../commons/modalStore';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap:95px;
  padding: 22px 26px 18px 26px;
  box-sizing: border-box;
`
export const Menu = styled.div`
    width: 20px;
    height: 20px;
`

function TopNav() {
  const toggleMenu = useSideMenuStore((state) => state.toggleMenu);
  const showMail = useMailModalStore((state) => state.showModal);

  return (
    <Container>
      <Nonebutton style={{width:"27px", height: "18px"}}  onClick={toggleMenu}>
      <img src={menuBar} style={{width:"27px", height: "18px", marginTop:"5px"}}/>
      </Nonebutton>

      <StyledLink to='/'>
        <img src={logoRow} style={{width:"116px", height: "27px"}}/>
      </StyledLink>

      <img src={mail} style={{width:"27px", height: "18px", marginTop:"5px", cursor:'pointer'}} onClick={showMail}/>
    </Container>
  )
}

export default TopNav