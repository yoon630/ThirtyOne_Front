import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Background = styled.div`
    width: 100%;
    max-width: 376px;
    height: 100vh;
    background-color: #ffffff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    padding: 20px;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 50px;
`;

const BackIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    left: 20px;
`;

const TabContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 120px;
    margin-left: 40px;
    border-bottom: 1px solid #e0e0e0;
`;

const TabButton = styled.button`
    background: none;
    border: none;
    font-size: 18px;
    font-weight: ${props => (props.active ? 'bold' : 'normal')};
    color: ${props => (props.active ? 'black' : '#888888')};
    padding: 10px;
    cursor: pointer;
    border-bottom: ${props => (props.active ? '2px solid black' : 'none')};

    &:focus {
        outline: none;
    }
`;

const Content = styled.div`
    width: 100%;
    max-width: 393px;
    height: 100%;
    padding: 20px 20px 20px 20px;
    box-sizing: border-box;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
`;

const OrderList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const OrderItem = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
`;

const OrderDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const OrderText = styled.div`
    font-size: 14px;
    margin-bottom: 5px;
`;

const OrderActions = styled.div`
    display: flex;
    gap: 10px;
`;

const ActionButton = styled.button`
    background-color: ${props => (props.approve ? '#4CAF50' : '#f44336')};
    color: white;
    border: none;
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const ordersPending = [
    { date: '7/18 22:29', location: 'A4', customer: '오*솔', product: '모카크림식빵 1' },
    { date: '7/18 22:28', location: 'A3', customer: '장*혁', product: '소보로빵 1' },
    { date: '7/18 22:28', location: 'A2', customer: '김*현', product: '모카크림식빵 1' },
    { date: '7/18 22:26', location: 'A1', customer: '최*선', product: '모카크림식빵 2' }
];

const ordersCompleted = [
    { date: '7/18 22:28', location: 'A2', customer: '김*현', product: '모카크림식빵 1', status: '주문취소' },
    { date: '7/18 22:26', location: 'A1', customer: '최*선', product: '모카크림식빵 2', status: '픽업완료' }
];

const SellingHistory = () => {
    const [activeTab, setActiveTab] = useState('pending');
    const navigate = useNavigate();

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <Background>
            <Header>
                <BackIcon src="./src/assets/prev.svg" alt="Back" onClick={handleBackClick} />
                판매내역
            </Header>
            <TabContainer>
                <TabButton active={activeTab === 'pending'} onClick={() => handleTabClick('pending')}>
                    판매중
                </TabButton>
                <TabButton active={activeTab === 'completed'} onClick={() => handleTabClick('completed')}>
                    판매완료
                </TabButton>
            </TabContainer>
            <Content>
                <OrderList>
                    {activeTab === 'pending' && ordersPending.map((order, index) => (
                        <OrderItem key={index}>
                            <OrderDetails>
                                <OrderInfo>
                                    <OrderText>{order.date}</OrderText>
                                    <OrderText>{order.location}</OrderText>
                                    <OrderText>{order.customer}</OrderText>
                                </OrderInfo>
                                <OrderText>{order.product}</OrderText>
                                <OrderActions>
                                    <ActionButton approve>수락하기</ActionButton>
                                    <ActionButton>거절하기</ActionButton>
                                </OrderActions>
                            </OrderDetails>
                        </OrderItem>
                    ))}
                    {activeTab === 'completed' && ordersCompleted.map((order, index) => (
                        <OrderItem key={index}>
                            <OrderDetails>
                                <OrderInfo>
                                    <OrderText>{order.date}</OrderText>
                                    <OrderText>{order.location}</OrderText>
                                    <OrderText>{order.customer}</OrderText>
                                </OrderInfo>
                                <OrderText>{order.product}</OrderText>
                                <OrderText>{order.status}</OrderText>
                            </OrderDetails>
                        </OrderItem>
                    ))}
                </OrderList>
            </Content>
        </Background>
    );
};

export default SellingHistory;
