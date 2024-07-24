import styled from "styled-components";

const Container = styled.div`
  width: 376px;
  height: 50px;
  padding: 20px;
`;
const Title = styled.div`
  // 여기에 저 Logo.svg 들어가야됨
  width: 100px;
  height: 30px;
`;
const Logo = styled.img``;
const Bell = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
`;

const Header = () => {
  return (
    <Container>
      <Title>
        <Logo src="assets/Logo.svg" />
      </Title>
      <Bell src="assets/bell.svg" />
    </Container>
  );
};

export default Header;
