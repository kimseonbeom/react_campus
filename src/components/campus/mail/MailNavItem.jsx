import React from 'react'
import styled from 'styled-components'

const Text = styled.h3`
    font-size: 15px;
    color: #aaa;
    font-weight: bold;
    margin-top: 7px;
    line-height: 1;
`

const Container = styled.div`
    display: flex;
    height: 48px;
    align-items: center;
    text-align: center;

     &:hover ${Text}{
        color: #2ec4b6;
    }
`

function MailNavItem({name}) {
  return (
    <Container>
        <Text>{name}</Text>
        </Container>
  )
}

export default MailNavItem