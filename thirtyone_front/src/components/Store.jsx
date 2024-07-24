// Home에서 현재 떨이 중인 가게 보여주는 컴포넌트
import styled from "styled-components";
import React from "react";

const Box = styled.div`
  width: 100%;
  height: 120px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  box-shadow: 3px 3px 3px #e0e0e0;
  border-radius: 20px;
  border: 3px solid #f8f8f8;
`;
const Image = styled.img`
  width: 96px;
  height: 80px;
`;

const TitleBox = styled.div`
  width: 160px;
  height: 85px;
  padding: 5px;
  margin: 5px;
  box-sizing: border-box;
`;
const Text = styled.div`
  width: 150px;
  height: 25px;
  font-size: 12px;
  color: #d94844;
  font-weight: bold;
`;

const Store = () => {
  return (
    <Box>
      <Image src="assets/store.png"></Image>
      <TitleBox>
        <Text>파리바게트 인하대점</Text>
        <Text>전화번호 : </Text>
        <Text>영업시간 : </Text>
      </TitleBox>
    </Box>
  );
};

export default Store;
