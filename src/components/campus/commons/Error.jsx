import React from 'react'
import { NoneData, NoneDataText } from '../lecPlan/LecturePlanNoneData'

function Error() {
  return (
    <>
    <NoneData style={{height:'calc(100vh - 70px)'}}>
        <NoneDataText>
            옳지 않은 경로입니다.
        </NoneDataText>
    </NoneData>
    </>
  )
}

export default Error