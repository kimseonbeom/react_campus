import React from 'react'
import { Header, HeadText } from '../home/HomeWrapper'
import { NoneData, NoneDataText } from '../lecPlan/LecturePlanNoneData'
import { RegistButton } from '../commons/WHComponent'
import { useLecPlanRegistModalStore } from '../commons/modalStore'

function LecturePlanNoneDataPro() {
    const registPlan = useLecPlanRegistModalStore((state) => state.showModal)

  return (
    <>        <Header>
            <HeadText>
                강의계획서
            </HeadText>
        </Header>
        <NoneData>
            <div>
            <NoneDataText style={{marginBottom:'16px'}}>
                등록된 강의계획서가 없습니다.
            </NoneDataText>
            <RegistButton style={{width:'48px', height:'26px', cursor:'pointer'}} onClick={registPlan}>
                등록
            </RegistButton>
            </div>
        </NoneData>
        </>
  )
}

export default LecturePlanNoneDataPro