import React, { useEffect, useState } from 'react';
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
    width: 100px;
    height: 90px;
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
    const [store, setStore] = useState({});
    const navigate = useNavigate();
    const typeMapping = {
        'BAK': '빵 & 간식류',
        'BUT': '정육 제품',
        'FRU': '과일류',
        'VEG': '채소류',
        'SID': '반찬 가게',
        'ETC': '기타',
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://13.125.100.193/store/home/', {
                    withCredentials: true
                });
                const item = {
                    ...response.data,
                    type: typeMapping[response.data.type] || response.data.type,
                };
                item.open_time= item.open_time.slice(0, -3);
                item.close_time = item.close_time.slice(0, -3);
                setStore(item);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Background>
            <Header>
                내 가게
            </Header>
            <InfoBox>
                <Image src="../assets/store.png" alt="Store" />
                <InfoItem>{store.name}</InfoItem>
                <InfoItem>업종: {store.type}</InfoItem>
                <InfoItem>전화번호: {store.tel}</InfoItem>
                <InfoItem>영업 시간: {store.open_time} ~ {store.close_time} </InfoItem>
            </InfoBox>
            <BtnBox>
                <Btn onClick={() => navigate('/productregi')}>
                    <Icon src="./src/assets/discount.svg" alt="Discount" />
                    떨이하기
                </Btn>
                <Btn onClick={() => navigate('/sellingmanage')}>
                    <Icon src="./src/assets/apple.svg" alt="Manage Product" />
                    상품관리
                </Btn>
                <Btn onClick={() => navigate('/sellinghistory')}>
                    <Icon src="./src/assets/receipt.svg" alt="Sales History" />
                    판매내역
                </Btn>
                <Btn onClick={() => navigate('/dashboard')}>
                    <Icon src="../assets/user.svg" alt="My Info" />
                    판매 관리
                </Btn>
            </BtnBox>
            <div style={{marginLeft:"10px",marginTop:"240px", fontSize:"14px", color:"gray"}}>
            Copyright CarrotCake in Inha Univ, All Right Reserved.
            </div>
        </Background>
    );
};

export default SellerHome;
