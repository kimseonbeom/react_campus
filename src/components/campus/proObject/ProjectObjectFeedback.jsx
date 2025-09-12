import React, { useState } from 'react'
import { Container } from '../topNav/TopNav'
import { RegistButton } from '../commons/WHComponent'
import { Head, RegistTextarea, Title, Wrap } from '../lecOnline/LectureOnlineRegist'
import { ContentBox, HeadText } from '../home/HomeWrapper'
import { Hr } from '../menu/SideMenu'
import { Cancle, right } from '../img'
import Toast from '../commons/Toast'
import useModalStore, { useProjectFeedbackModalStore } from '../commons/modalStore'
import styled from 'styled-components'
import { Table, TableOverView, TableText, TableTitle, TitleText } from '../mypage/Mypage'
import { TableTitles, TitleTexts } from '../lecPlan/LecturePlanDetail'
import { ExitButton } from '../lecAtten/AttandanceModal'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;  /* 불투명 배경 */
  z-index: 2000;
  overflow-y: auto; /* 내용 스크롤 가능 */
`;

const PointText = styled.h3`
 font-size: 14px;
 color: #2ec4b6;
 line-height: 35px;
`
const FbIconbox = styled.div`
    width: 12px;
    height: 12px;
    margin-left: 9px;
    margin-right: 9px;
`
const Font12 = styled.h3`
    font-size: 12px;
    font-weight: 500;
    color: #aaa;
`
const Font12Black = styled.h3`
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
`
const ScoreInput = styled.input`
    width: 100%;
    height: 50px;
    text-align: center;
    border: none;
    padding: 2px;
    outline: none;
`;

function ProjectObjectFeedback() {
    const { showConfirm } = useModalStore();
    const [toastMsg, setToastMsg] = useState("");
    const { visible, hideModal } = useProjectFeedbackModalStore();
    const [scores, setScores] = useState([0, 0, 0, 0, 0]);

  if (!visible) return null;
    // 각 항목 점수 state (5개)

    const handleScoreChange = (index, value) => {
        let num = parseInt(value, 10);

        // 숫자가 아니면 0
        if (isNaN(num)) num = 0;
        // 0 미만 방지
        if (num < 0) num = 0;
        // 5 초과 방지
        if (num > 5) num = 5;

        const newScores = [...scores];
        newScores[index] = num;
        setScores(newScores);
    };

    const total = scores.reduce((a, b) => a + b, 0);

    const handleRegister = () => {
        showConfirm("평가를 완료하시겠습니까?", () => {
            setToastMsg("평가가 완료되었습니다!");
        });
    };

    return (
        <>
        <Overlay>
            <Container style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ExitButton style={{width:'19px', height:'19px', margin:'0'}} onClick={hideModal}>
                <img src={Cancle} style={{ width: '19px', height: '19px' }} />
                </ExitButton>
                <RegistButton style={{ width: '48px', height: '26px', marginTop: '5px' }} onClick={handleRegister}>평가</RegistButton>
            </Container>
            <Wrap>
                <ContentBox style={{ height: '273px', marginBottom: '10px', padding: '0 20px' }}>
                    <Head style={{ paddingLeft: '6px' }}>
                        <HeadText>결과물</HeadText>
                        <FbIconbox>
                            <img src={right} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </FbIconbox>
                        <PointText>Camp_us</PointText>
                    </Head>
                    <Head style={{ paddingLeft: '6px', height: '40px' }}>
                        <Title>피드백</Title>
                    </Head>
                    <Hr style={{ width: '373px', margin: '0 auto' }} />
                    <RegistTextarea placeholder='피드백을 작성해주세요.' style={{ width: '100%', marginLeft: '11px', marginTop: '16px', height: '160px', paddingRight: '21px' }} />
                </ContentBox>

                <ContentBox style={{height:'540px', marginBottom: '10px', padding: '0 20px' }}>
                    <Head style={{ paddingLeft: '6px', height: '50px' }}>
                        <Title style={{ lineHeight: '55px' }}>루브릭</Title>
                    </Head>
                    <Hr style={{ width: '373px', margin: '0 auto' }} />
                    <div style={{ margin: '11px 0', display: 'flex', justifyContent: 'flex-end' }}>
                        <Font12>매우좋음 (5) 좋음 (4) 보통 (3) 나쁨 (2) 매우나쁨 (1)</Font12>
                    </div>

                    {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}

                    <Table>
                        <tr>
                            <TableTitle style={{ backgroundColor: '#f9f9f9', textAlign: 'center', width: '256px', borderTop: '1px solid #aaa' }}>
                                <TitleText style={{ marginLeft: '0' }}>평가기준</TitleText>
                            </TableTitle>
                            <TableOverView style={{ backgroundColor: '#f9f9f9', textAlign: 'center', width: '117px', borderTop: '1px solid #aaa' }}>
                                <TableText>Camp_us</TableText>
                            </TableOverView>
                        </tr>

                        {[
                            "실제 문제를 얼마나 명확하게 정의하고, 그에 따른 목표를 현실적으로 설정했는가?",
                            "사용자 및 관련 이해관계자의 니즈를 파악하고 반영했는가?",
                            "제안한 솔루션이 기존 방식을 넘어서는 창의적 접근을 포함하며, 문제 해결에 적합하였는가?",
                            "데이터, 사례, 이론 등을 활용한 논리적 의사결정을 했는가?",
                            "각 단계에서 어떤 결과물(문서, 시제품, 보고서 등)이 나오는지 명확하게 제시되었는가?"
                        ].map((q, i) => (
                            <tr key={i}>
                                <TableTitle>
                                    <TitleTexts>
                                        <Font12Black>{q}</Font12Black>
                                    </TitleTexts>
                                </TableTitle>
                                <TableTitles style={{borderRight:'none'}}>
                                    <TitleTexts>
                                        <ScoreInput
                                            type="number"
                                            min={0}
                                            max={5}
                                            value={scores[i]}
                                            onChange={(e) => handleScoreChange(i, e.target.value)}
                                        />
                                    </TitleTexts>
                                </TableTitles>
                            </tr>
                        ))}

                        <tr>
                            <TableTitle style={{ backgroundColor: '#f9f9f9', textAlign: 'center', width: '256px' }}>
                                <TitleText style={{ marginLeft: '0' }}>총점</TitleText>
                            </TableTitle>
                            <TableOverView style={{ backgroundColor: '#f9f9f9', textAlign: 'center', width: '117px' }}>
                                <TableText>{total}</TableText>
                            </TableOverView>
                        </tr>
                    </Table>
                </ContentBox>
            </Wrap>
            </Overlay>
        </>
    )
}

export default ProjectObjectFeedback
