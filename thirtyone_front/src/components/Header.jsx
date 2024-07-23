import styled from "styled-components";
import logo from "../assets/Logo";
import bell from "../assets/bell";

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

const Bell = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
`;

const Header = () => {
  return (
    <Container>
      <Title>{logo}</Title>
      <Bell src={bell} />
    </Container>
  );
};

export default Header;
