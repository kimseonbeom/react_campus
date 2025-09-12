import React from 'react'
import { CatTitle, FlexDiv, RegistButton } from '../commons/WHComponent'
import { Table, TableOverView, TableText, TableTitle, TitleText, Wrap } from '../mypage/Mypage'
import { ContentBox, Header } from '../home/HomeWrapper'
import { ContentText } from '../proObject/ProjectObjectProjectList'
import { Hr } from '../menu/SideMenu'
import styled from 'styled-components'
import { GrayHr } from '../home/HomeWrapperPro'
import { useLecPlanModalStore } from '../commons/modalStore'

const MiniTable = styled.table`
    border: 1px solid #aaa;
    width: 270px;
    margin: 0 auto;
    height: 84px;
    border-collapse: collapse;
    td {
        border: 1px solid #aaa;  
    }
`
const MiniTitle = styled.td`
    text-align: center;
    width: 93px;
    height: 28px;
    min-width:  93px;
    max-width: 93px;
`
const MiniTitleText = styled.h3`
    font-size: 13px;
`
const MiniOverView = styled.td`
    width: 176px;
    max-width: 176px;
`
const MiniOverViewText = styled.h3`
    font-size: 13px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 23px;
`
export const TableTitles = styled.td`
    min-width: 77px;
    width: 77px;
    height: 30px;
    border-right: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    text-align: center;
    align-items: center;
    
`
export const TitleTexts = styled.h3`
    font-size: 14px;
    font-weight: 500;
    margin-top: 7px;
`
function LecturePlanDetailPro() {
    const modifyPlan = useLecPlanModalStore((state) => state.showModal)

    return (
        <>
            <FlexDiv style={{ marginLeft: '27px', justifyContent: 'space-between', marginRight: '21px', alignItems: 'center', height: '46px' }}>
                <CatTitle>강의계획서</CatTitle>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <RegistButton style={{ width: '48px', height: '26px', backgroundColor: '#fff', border: '1px solid #2ec4b6', color: '#2ec4b6' }}>PDF</RegistButton>
                    <RegistButton style={{ width: '48px', height: '26px', cursor:'pointer' }} onClick={modifyPlan}>수정</RegistButton>
                </div>
            </FlexDiv>
            <Wrap>
                <div style={{ height: '10px' }}></div>
                <ContentBox style={{ height: '233px', marginBottom: '10px' }}>
                    <Header style={{ paddingTop: '18px', alignItems: 'center', paddingLeft: '26px' }}>
                        <ContentText style={{ fontSize: '14px' }}>
                            교수정보
                        </ContentText>
                    </Header>
                    <Hr style={{ width: '372px', margin: '0 auto' }} />
                    <Table>
                        <tr>
                            <TableTitle>
                                <TitleText>
                                    교수명
                                </TitleText>
                            </TableTitle>
                            <TableOverView>
                                <TableText>
                                    김형민
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitle>
                                <TitleText>
                                    교수학과
                                </TitleText>
                            </TableTitle>
                            <TableOverView>
                                <TableText>
                                    전자정부풀스택
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitle>
                                <TitleText>
                                    연락처
                                </TitleText>
                            </TableTitle>
                            <TableOverView>
                                <TableText>
                                    010-1234-1234
                                </TableText>
                            </TableOverView>
                        </tr>
                    </Table>
                </ContentBox>
                <ContentBox style={{ height: '595px', marginBottom: '10px' }}>
                    <Header style={{ paddingTop: '18px', alignItems: 'center', paddingLeft: '26px' }}>
                        <ContentText style={{ fontSize: '14px' }}>
                            수업정보
                        </ContentText>
                    </Header>
                    <Hr style={{ width: '372px', margin: '0 auto' }} />
                    <Table>
                        <tr>
                            <TableTitle>
                                <TitleText>
                                    수업ID
                                </TitleText>
                            </TableTitle>
                            <TableOverView>
                                <TableText>
                                    JAVA101
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitle>
                                <TitleText>
                                    교과목명
                                </TitleText>
                            </TableTitle>
                            <TableOverView>
                                <TableText>
                                    독서와 토론
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitle>
                                <TitleText>
                                    교과시간
                                </TitleText>
                            </TableTitle>
                            <TableOverView>
                                <TableText>
                                    주 2시간 / 2학점
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitle>
                                <TitleText>
                                    수업목표
                                </TitleText>
                            </TableTitle>
                            <TableOverView>
                                <TableText>
                                    다양한 텍스트를 비판적으로 이해하고, 자신의 생각을 논리적으로 표현하며 타인과 소통하는 능력을 기를 수 있다.
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitle>
                                <TitleText>
                                    수업개요
                                </TitleText>
                            </TableTitle>
                            <TableOverView>
                                <TableText>
                                    이 수업은 다양한 분야의 글을 읽고 토론하며, 비판적 사고와 논리적 표현력, 공감적 소통 능력을 함양하는 데 중점을 둔다.
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitle>
                                <TitleText>
                                    수업방식
                                </TitleText>
                            </TableTitle>
                            <TableOverView>
                                <TableText>
                                    토의
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitle>
                                <TitleText>
                                    수강대상
                                </TitleText>
                            </TableTitle>
                            <TableOverView>
                                <TableText>
                                    교양 역량을 강화하고 싶은 학생
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitle>
                                <TitleText>
                                    핵심역량
                                </TitleText>
                            </TableTitle>
                            <TableOverView>
                                <TableOverView>
                                    <MiniTable style={{ margin: '10px 10px' }}>
                                        <tr>
                                            <MiniTitle>
                                                실용/융합
                                            </MiniTitle>
                                            <MiniOverViewText>
                                                60%
                                            </MiniOverViewText>
                                        </tr>
                                        <tr>
                                            <MiniTitle>
                                                창의
                                            </MiniTitle>
                                            <TableOverView>
                                                <MiniOverViewText>
                                                    20%
                                                </MiniOverViewText>
                                            </TableOverView>
                                        </tr>
                                        <tr>
                                            <MiniTitle>
                                                소통
                                            </MiniTitle>
                                            <MiniOverView>
                                                <MiniOverViewText>
                                                    20%
                                                </MiniOverViewText>
                                            </MiniOverView>
                                        </tr>
                                    </MiniTable>
                                </TableOverView>
                            </TableOverView>
                        </tr>
                    </Table>
                </ContentBox >
                <ContentBox style={{ height: '1750px', marginBottom: '10px' }}>
                    <Header style={{ paddingTop: '18px', alignItems: 'center', paddingLeft: '26px' }}>
                        <ContentText style={{ fontSize: '14px' }}>
                            주차정보
                        </ContentText>

                    </Header>
                    <Hr style={{ width: '372px', margin: '0 auto' }} />
                    <Table>
                        <tr>
                            <TableTitle style={{ backgroundColor: '#f9f9f9', textAlign: 'center' }}>
                                <TitleText style={{ marginLeft: '0' }}>
                                    순번
                                </TitleText>
                            </TableTitle>
                            <TableOverView style={{ backgroundColor: '#f9f9f9', textAlign: 'center' }}>
                                <TableText>
                                    강의주제 및 내용
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles style={{ textAlign: 'center' }}>
                                <TitleTexts>
                                    1
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    오리엔테이션 및 과목 소개 : 수업 목표, 평가 방식 안내, 독서와 토론의 의미 이해
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    -
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    2
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    독서의 기초 I – 읽기의 전략 : 목적에 맞는 읽기, 핵심 정보 찾기, 요약 연습
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    간단한 독서 계획서 작성
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    3
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    독서의 기초 II – 비판적 읽기 : 관점 파악, 주장과 근거 구분, 논리적 오류 찾기
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    지정 글 요약 + 주장/근거/논점 정리
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    4
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    텍스트 분석 실습 : 지정된 글 읽고 요지 정리 및 발표
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    토론을 위한 글 1편 분석 보고서 제출
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    5
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    토론의 기초 I – 토론의 구조와 규칙 : 찬반 구조, 역할 분담, 토론 절차 이해
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    토론 입장 정하기 및 근거 조사
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    6
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    찬반 구조, 역할 분담, 토론 절차 이해 : 주장 구성, 근거 제시, 반론 대응 훈련
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    짧은 주장문 작성 및 피드백 제출
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    7
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    글쓰기 I – 주장문 작성법 : 논리적 글쓰기 구조, 논거 배열, 초안 작성
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    주장문 초안 작성 및 피어리뷰
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    8
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    중간 발표 및 피드백 : 소그룹 토론 시연, 피드백 중심 수업
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    토론 참여 후 자기평가 리포트 제출
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    9
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    다양한 장르의 독서 : 문학, 시사, 철학, 과학 등 장르별 독해 접근
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    관심 있는 주제의 글 1편 요약
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    10
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    이슈 중심 토론 I – 시사 토론 : 최근 사회 이슈를 주제로 토론 준비 및 실습
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    팀별로 시사 주제 조사 및 토론자료 작성
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    11
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    이슈 중심 토론 II – 윤리적 딜레마 : 사례 기반 토론, 다중 관점 고려
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    윤리적 문제에 대한 자신의 입장문 작성
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    12
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    글쓰기 II – 토론문 및 에세이 : 입장 정리, 비교 논증, 결론 도출 글쓰기
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    최종 토론문 또는 입장 에세이 제출
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    13
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    종합 토론 발표 준비 : 조별 주제 선정, 자료 조사 및 구조화
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    팀 발표 자료 정리 및 발표 스크립트 완성
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    14
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    종합 토론 발표 : 팀별 발표 및 질의응답, 상호 평가
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    발표로 대체
                                </TableText>
                            </TableOverView>
                        </tr>
                        <tr>
                            <TableTitles>
                                <TitleTexts>
                                    15
                                </TitleTexts>
                            </TableTitles>
                            <TableOverView>
                                <TableText>
                                    성찰 및 정리 : 학습 성과 정리, 자기 평가 및 피드백 공유
                                </TableText>
                                <GrayHr style={{ width: '275px', margin: '0 auto' }} />
                                <TableText>
                                    수업 성찰 에세이 작성
                                </TableText>
                            </TableOverView>
                        </tr>
                    </Table>
                </ContentBox>
            </Wrap>
        </>
    )
}

export default LecturePlanDetailPro