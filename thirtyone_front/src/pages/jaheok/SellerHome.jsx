import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Background = styled.div`
    width: 376px;
    height: 812px;
    background-color: #ffffff;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 40px;
`;

const BellIcon = styled.img`
    width: 24px;
    height: 24px;
    &:active {
        background-color: #e0e0e0;
    }
`;

const InfoBox = styled.div`
    position: relative;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
`;

const EditIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    &:active {
        background-color: #e0e0e0;
    }
`;

const Image = styled.img`
    width: 115px;
    height: 80px;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const InfoItem = styled.div`
    margin: 5px 0;
`;

const BtnBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Btn = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #ffffff;
    font-size: 16px;
    cursor: pointer;

    &:active {
        background-color: #e0e0e0;
    }
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 10px;
`;

const SellerHome = () => {
    return (
        <Background>
            <Header>
                내 가게
                <BellIcon src="./src/assets/bell.svg" alt="Bell Icon" />
            </Header>
            <InfoBox>
                <EditIcon src="./src/assets/pencil.svg" alt="Edit Icon" />
                <Image src="./src/assets/아기사자.png" alt="Store" />
                <InfoItem>가게명: 파리바게트 인하점</InfoItem>
                <InfoItem>업종: 베이커리, 제빵</InfoItem>
                <InfoItem>전화번호: 031-868-8287</InfoItem>
                <InfoItem>영업 시간: 07:30 ~ 23:00</InfoItem>
            </InfoBox>
            <BtnBox>
                <Btn>
                    <Icon src="./src/assets/discount.svg" alt="Discount" />
                    떨이하기
                </Btn>
                <Btn>
                    <Icon src="./src/assets/write.svg" alt="Register Product" />
                    상품 등록하기
                </Btn>
                <Btn>
                    <Icon src="./src/assets/apple.svg" alt="Manage Product" />
                    상품관리
                </Btn>
                <Btn>
                    <Icon src="./src/assets/receipt.svg" alt="Sales History" />
                    판매내역
                </Btn>
                <Btn>
                    <Icon src="./src/assets/user.svg" alt="My Info" />
                    내 정보
                </Btn>
            </BtnBox>
        </Background>
    );
};

export default SellerHome;
