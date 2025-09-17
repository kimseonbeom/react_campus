import React, { useEffect, useState } from 'react'
import { MemberList, ModalBackground, Overlay, UserImage, UserName, UserNameText, Wrap } from './TeamSearch'
import { Container } from '../topNav/TopNav'
import { ExitButton } from '../lecAtten/AttandanceModal'
import { CatTitle, FlexDiv, RegistButton } from '../commons/WHComponent'
import { Hr } from '../menu/SideMenu'
import { Flex, GrayHr } from '../home/HomeWrapperPro'
import { useTeamMemberModalStore } from '../commons/modalStore'
import { Cancle } from '../img'
import { TextInput } from './ProjectTeamRegist'
import { getProjectRegistData } from '../api'

function TeamMemberSearch() {
     const { visible, hideModal, selectedTeamMember, setSelectedTeamMember} = useTeamMemberModalStore();
     const [teamMemberList, setTeamMemberList] = useState([]);
     const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() => {
            if (!visible) return;
            getProjectRegistData()
              .then(res => {
                setTeamMemberList(res.data.studentList || []);
              })
              .catch(err => console.error("학생 목록 불러오기 실패:", err));
          }, [visible]);
const handleSelect = (prof) => {
  // 이미 선택된 경우 제거, 아니면 추가
  const exists = selectedTeamMember.find(m => m.mem_id === prof.mem_id);
  if (exists) {
    setSelectedTeamMember(selectedTeamMember.filter(m => m.mem_id !== prof.mem_id));
  } else {
    setSelectedTeamMember([...selectedTeamMember, prof]);
  }
};
const handleConfirm = () => {
  if (!selectedTeamMember) {
    alert("학생을 선택해주세요.");
    return;
  }
  setSelectedTeamMember(selectedTeamMember); 
  hideModal(); // 모달 닫기
  console.log(selectedTeamMember);
};
const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };
  const filteredList = teamMemberList.filter(prof =>
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
                       <RegistButton style={{ width: '48px', height: '26px', marginTop: '5px' }} onClick={handleConfirm}>확인</RegistButton>
                    </Container>
                    <FlexDiv style={{marginLeft:'10px', marginBottom:'10px'}}>
                        <CatTitle>학생 검색</CatTitle>
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
                                   <div key={prof.mem_id} style={{ backgroundColor: selectedTeamMember.some(m => m.mem_id === prof.mem_id) ? '#e0f7fa' : 'transparent'}}>
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

export default TeamMemberSearch