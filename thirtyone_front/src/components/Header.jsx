import styled from "styled-components";
import logo from "../assets/Logo";

const Container = styled.div`
  width: 376px;
  height: 50px;
  padding: 20px;
`;
const Icon = styled.img``;

const Header = () => {
  return (
    <Container>
      <Icon src={logo}></Icon>
    </Container>
  );
};

export default Header;
