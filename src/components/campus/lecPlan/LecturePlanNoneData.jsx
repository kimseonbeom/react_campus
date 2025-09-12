import React from 'react'
import { Header, HeadText } from '../home/HomeWrapper'
import styled from 'styled-components'

export const NoneData = styled.div`
    text-align: center;
    margin: 0 auto;
    padding: 0;
    align-items: center;
    display: flex;
    justify-content: center;
    height: calc(100vh - 118px);
    background-color: #f7f7f7;
`

export const NoneDataText = styled.h3`
    color: #aaa;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 48px;
`

function LecturePlanNoneData() {
  return (
    <>        <Header>
            <HeadText>
                강의계획서
            </HeadText>
        </Header>
        <NoneData>
            <NoneDataText>
                등록된 강의계획서가 없습니다.
            </NoneDataText>
        </NoneData>
        </>
  )
}

export default LecturePlanNoneData