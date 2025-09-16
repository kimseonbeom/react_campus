import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ExitButton } from '../lecAtten/AttandanceModal';
import { Container } from '../topNav/TopNav';
import { CatTitle, FlexDiv, RegistButton } from '../commons/WHComponent';
import { Cancle } from '../img'
import { Flex, GrayHr } from '../home/HomeWrapperPro';
import { Label, SearchBtn, TextInput } from './ProjectTeamRegist';
import { useTeamSearchModalStore } from '../commons/modalStore';
import { Hr } from '../menu/SideMenu';
import { getProjectRegistData } from '../api';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5); // 반투명 검정
  z-index: 2500; // Overlay보다 낮게
`;

export const Overlay = styled.div`
  position: fixed;
  top: 120px;
  left: 44px;
  width: 330px;
  height: 408px;
  z-index: 3000;
  overflow-y: auto; /* 내용 스크롤 가능 */
  border: 1px solid #aaa;
`;
export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 10px 24px 37px 24px;

`
export const MemberList = styled.div`
  border: 1px solid #d6d6d6; 
  border-radius: 5px;
  padding: 0; 
  font-size: 13px;
  color: #333;
  height: 214px;
  overflow-y: auto; 
`
export const UserImage = styled.img`
  margin-left: 15px;
  width: 25px;
  height: 25px;
  object-fit: cover;
  border: 1px solid #aaa;
  border-radius: 50%;
`
export const UserName = styled.div`
    margin-left: 18px;
    width: calc(100% - 40px);
    display: flex;
    align-items: center;
`
export const UserNameText = styled.span`
    font-size: 14px;
`
function TeamSearch() {
    const { visible, hideModal, selectedTeamLeader, setSelectedTeamLeader } = useTeamSearchModalStore();
    const [teamLeaderList, setTeamLeaderList] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() => {
        if (!visible) return;
        getProjectRegistData()
          .then(res => {
            setTeamLeaderList(res.data.studentList || []);
          })
          .catch(err => console.error("학생 목록 불러오기 실패:", err));
      }, [visible]);

      const handleSelect = (prof) => {
  setSelectedTeamLeader({ ...prof });  // store 상태 갱신
};

const handleConfirm = () => {
  if (!selectedTeamLeader) {
    alert("학생을 선택해주세요.");
    return;
  }
  setSelectedTeamLeader(selectedTeamLeader)
  hideModal(); // 모달 닫기
  console.log(selectedTeamLeader);
};
const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };
   const filteredList = teamLeaderList.filter(prof =>
    prof.mem_name.toLowerCase().includes(searchKeyword.toLowerCase())
  );
    if (!visible) return null;
  return (
    <ModalBackground>
    <Overlay>
        <Wrap>
             <Container style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding:'0',height:'50px' }}>
                    <ExitButton style={{width:'19px', height:'19px', margin:'0'}} onClick={hideModal}>
                        <img src={Cancle} style={{ width: '19px', height: '19px' }} />
                    </ExitButton>
               <RegistButton style={{ width: '48px', height: '26px', marginTop: '5px' }}  onClick={handleConfirm}>확인</RegistButton>
            </Container>
            <FlexDiv style={{marginLeft:'10px', marginBottom:'10px'}}>
                <CatTitle>팀원 검색</CatTitle>
            </FlexDiv>
            <Hr style={{width:'281px', margin:'0 auto'}}/>
            <Flex style={{margin:'13px 4px 16px 4px'}}>
            <TextInput placeholder="학생명을 입력해주세요." style={{height:'29px', width:'229px'}}
            value={searchKeyword}
            onChange={handleSearchChange}
            />
            </Flex>
           <MemberList>
             {filteredList.map((prof, idx) => (
               <div key={prof.mem_id} style={{backgroundColor: selectedTeamLeader?.mem_id === prof.mem_id ? '#e0f7fa' : 'transparent'}}>
                 <Flex
                   style={{
                     padding: '10px 0 0 0',
                     cursor: 'pointer',
                     
                   }}
                   onClick={() => handleSelect(prof)}
                 >
                   <UserImage src={prof.picture} alt='userimg' />
                   <UserName>
                     <UserNameText>{prof.mem_name}</UserNameText>
                   </UserName>
                 </Flex>
           
                 {idx !== filteredList.length - 1 && (
                   <GrayHr style={{ margin: '10px 0 0 0', color: '#bdbdbd' }} />
                 )}
               </div>
             ))}
           </MemberList>
        </Wrap>
    </Overlay>
    </ModalBackground>
  )
}

export default TeamSearch