import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 376px;
  height: 140px;
  padding: 20px;
  box-sizing: border-box;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #d94844;
  text-align: center;
`;

const Logo = styled.img`
  width: 25px;
  height: 24px;
  margin-left: 8px;
`;
const Bell = styled.img`
  width: 24px;
  height: 24px;
`;

// 이전 화살표 버튼 없는 그냥 메인 홈 헤더
const MainHeader = () => {
  return (
    <Container>
      <Title>
        떠리원
        <Logo src="assets/logo_red.png" />
      </Title>
      <Bell src="assets/bell.svg" />
    </Container>
  );
};

export default MainHeader;
