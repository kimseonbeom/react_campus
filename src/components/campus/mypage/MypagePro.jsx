import React from 'react'
import { Container } from '../topNav/TopNav'
import { Cancle, pictureMdfBtn, user11 } from '../img'
import { CatTitle, FlexDiv, RegistButton } from '../commons/WHComponent'
import { ContentBox, Header, HeadText } from '../home/HomeWrapper'
import { ContentText, GreenBox } from '../proObject/ProjectObjectProjectList'
import { Hr } from '../menu/SideMenu'
import { Picture, PictureContainer, PictureModifyBtn, Table, TableOverView,
        TableText, TableTitle, TitleText, Wrap,
} from '../mypage/Mypage'



function MypagePro() {
  return (
    <>
   <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
           <img src={Cancle} style={{width:'19px', height:'19px'}}></img>           
    </Container>
    
           <FlexDiv style={{marginLeft:'27px',justifyContent:'space-between',marginRight:'21px'}}>
                <CatTitle>마이페이지</CatTitle>
                
                <RegistButton style={{width:'48px', height:'26px'}}>저장</RegistButton>
            </FlexDiv>
        <PictureContainer>
            <div>
            <Picture>
                <img src={user11} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%',display:'block'}}/>
                <PictureModifyBtn>
                    <img src={pictureMdfBtn} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                </PictureModifyBtn>
            </Picture>
            <HeadText style={{marginTop:'12px'}}>20181001</HeadText>
            <HeadText>김민주</HeadText>
            </div>
        </PictureContainer>
        <Wrap>
        <ContentBox style={{height:'270px', marginBottom:'10px'}}>
            <Header style={{paddingTop:'18px', alignItems:'center',paddingLeft:'26px'}}>
            <ContentText>
                개인정보
            </ContentText>
            <GreenBox style={{width:'97px', height:'26px', lineHeight:'23px', marginLeft:'auto'}}>
                비밀번호 변경
            </GreenBox>
            </Header>
            <Hr style={{width:'372px', margin:'0 auto'}}/>
        <Table>
            <tr>
                <TableTitle>
                    <TitleText>
                    생년월일
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    2000-01-01
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    이메일
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    ohgyu@naver.com
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
            <tr>
                <TableTitle>
                    <TitleText>
                    주소
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    대전광역시 중구 중앙로121번길 20 방산빌딩 2층, 3층(일부), 5층
                    </TableText>
                    </TableOverView>
            </tr>
        </Table>
        </ContentBox>
        <ContentBox style={{height:'207px', marginBottom:'10px'}}>
            <Header style={{paddingTop:'18px', alignItems:'center',paddingLeft:'26px'}}>
            <ContentText>
                학사정보
            </ContentText>
            </Header>
            <Hr style={{width:'372px', margin:'0 auto'}}/>
        <Table>
            <tr>
                <TableTitle>
                    <TitleText>
                    직위
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    교수
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    소속대학
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    DW대학
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    소속학과
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    컴퓨터공학과
                    </TableText>
                    </TableOverView>
            </tr>
        </Table>
        </ContentBox>
        </Wrap>
        </>
        )
        }
        export default MypagePro