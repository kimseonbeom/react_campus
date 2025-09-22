import React, { useState, useEffect } from 'react'
import { Container } from '../topNav/TopNav'
import { RegistButton } from '../commons/WHComponent'
import { Head, RegistTextarea, Title, Wrap } from '../lecOnline/LectureOnlineRegist'
import { ContentBox, HeadText } from '../home/HomeWrapper'
import { Hr } from '../menu/SideMenu'
import { Cancle, right } from '../img'
import useModalStore, { useProjectFeedbackModifyModalStore, useToastStore } from '../commons/modalStore'
import styled from 'styled-components'
import { Table, TableOverView, TableText, TableTitle, TitleText } from '../mypage/Mypage'
import { TableTitles, TitleTexts } from '../lecPlan/LecturePlanDetail'
import { ExitButton } from '../lecAtten/AttandanceModal'
import { getUserSession, getEvaluationForModify, registerEvaluation, modifyEvaluation } from '../api'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 2000;
  overflow-y: auto;
`

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
`

function ProjectObjectFeedbackModify() {
    const { showConfirm } = useModalStore();
    const { showToast } = useToastStore();
    const { visible, rm_id, project_id, eval_id, memId, hideModal } = useProjectFeedbackModifyModalStore();
    const [scores, setScores] = useState([0, 0, 0, 0, 0]);
    const [feedback, setFeedback] = useState('');
    const [projectName, setProjectName] = useState('');
    const user = getUserSession();
    const [total, setTotal] = useState(0);

    // ⚠️ 훅은 항상 호출
    useEffect(() => {
        if (!visible || !eval_id || !rm_id) return;

        getEvaluationForModify(eval_id, rm_id)
            .then(res => {
                const data = res.data;
                setFeedback(data.evaluation.eval_content || '');
                // 하나만 등록되므로 total 점수를 첫 번째 항목에만 넣어줌
                setScores([0, 0, 0, 0, 0]);
                if(data.projectList && data.projectList.length > 0) {
                    setProjectName(data.projectList[0].project_name);
                }
            })
            .catch(err => {
                console.error(err);
                showToast("평가 데이터를 불러오는 중 오류가 발생했습니다.");
            });
    }, [visible, eval_id, rm_id]);

    if (!visible) return null; // 모달 숨김 처리

    const handleScoreChange = (index, value) => {
  let num = parseInt(value, 10);
  if (isNaN(num)) num = 0;
  if (num < 0) num = 0;
  if (num > 5) num = 5;

  const newScores = [...scores];
  newScores[index] = num;
  setScores(newScores);

  // 총점 업데이트
  setTotal(newScores.reduce((a, b) => a + b, 0));
};

    const handleRegister = () => {
    if (!feedback.trim()) {
        showToast("피드백은 필수입니다.");
        return;
    }

    // 컨펌 모달 띄우기
    showConfirm("평가를 수정하시겠습니까?", async () => {
        // 확인 클릭 시 실행
        const payload = {
            rm_id,     // 문자열
            eval_id,   // 문자열
            profes_id: user.mem_id,
            eval_score: total,
            eval_content: feedback,
        };

        try {
            await modifyEvaluation(payload);
            showToast("평가가 수정되었습니다!");
            hideModal();
            if (typeof window.refreshProjectTeamList === "function") {
                window.refreshProjectTeamList();
            }
        } catch (err) {
            console.error(err);
            showToast("평가 등록 중 오류가 발생했습니다.");
        }
    });
};

    return (
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
                        <PointText>{projectName}</PointText>
                    </Head>
                    <Head style={{ paddingLeft: '6px', height: '40px' }}>
                        <Title>피드백</Title>
                    </Head>
                    <Hr style={{ width: '373px', margin: '0 auto' }} />
                    <RegistTextarea
                        placeholder='피드백을 작성해주세요.'
                        style={{ width: '100%', marginLeft: '11px', marginTop: '16px', height: '160px', paddingRight: '21px' }}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                </ContentBox>

                <ContentBox style={{height:'540px', marginBottom: '10px', padding: '0 20px' }}>
                    <Head style={{ paddingLeft: '6px', height: '50px' }}>
                        <Title style={{ lineHeight: '55px' }}>루브릭</Title>
                    </Head>
                    <Hr style={{ width: '373px', margin: '0 auto' }} />
                    <div style={{ margin: '11px 0', display: 'flex', justifyContent: 'flex-end' }}>
                        <Font12>매우좋음 (5) 좋음 (4) 보통 (3) 나쁨 (2) 매우나쁨 (1)</Font12>
                    </div>

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
    )
}

export default ProjectObjectFeedbackModify