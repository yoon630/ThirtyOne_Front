import styled from "styled-components";
import React from "react";

const Box = styled.div`
  width: 320px;
  height: 120px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 3px #e0e0e0;
  border-radius: 20px;
  border: 3px solid #f8f8f8;
  margin: auto;
  background-color: white;
`;
const Image = styled.img`
  width: 100px;
  height: 80px;
  margin: 5px;
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

// Home에서 현재 떨이 중인 가게 보여주는 컴포넌트
const Store = ({ store, photo, tel, open_time, close_time }) => {
  return (
    <Box>
      <Image src={photo}></Image>
      <TitleBox>
        <Text>{store}</Text>
        <Text>전화번호 :{tel} </Text>
        <Text>오픈 시간:{open_time} </Text>
        <Text>마감 시간:{close_time} </Text>
      </TitleBox>
    </Box>
  );
};

export default Store;
