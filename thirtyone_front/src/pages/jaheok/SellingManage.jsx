import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    width: 100%;
    max-width: 376px;
    height: 100vh;
    background-color: #ffffff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
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
    margin-top: 60px;
    
`;

const BackIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    left: 20px;
`;

const Content = styled.div`
    width: 100%;
    max-width: 393px;
    height: 100%;
    padding: 80px 20px 20px 20px; /* 헤더 높이만큼 위쪽 패딩 추가 */
    box-sizing: border-box;
    overflow-y: auto; /* 스크롤바가 상품 목록에만 생기도록 설정 */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-left: 40px;
`;

const ProductList = styled.div`
    width: 100%;
    max-width: 370px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ProductItem = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
`;

const ProductImage = styled.div`
    width: 70px;
    height: 70px;
    background-color: #f0f0f0;
    border-radius: 8px;
    margin-right: 10px;
`;

const ProductInfo = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

const ProductName = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const ProductPrice = styled.div`
    font-size: 14px;
    color: #666;
`;

const ProductStock = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #666;
`;

const StockLabel = styled.div`
    margin-right: 5px;
`;

const StockCount = styled.div`
    color: ${props => (props.stock > 0 ? 'red' : 'red')};
`;

const products = [
    {
        name: "모카크림식빵",
        price: "₩3500",
        stock: 3,
        image: "" // 이미지 경로를 여기에 추가
    },
    {
        name: "단팥빵",
        price: "₩2000",
        stock: 0,
        image: "" // 이미지 경로를 여기에 추가
    },
    // 추가적인 상품 정보를 여기에 추가
];

const SellingManage = () => {
    return (
        <Background>
            <Header>
                <BackIcon src="./src/assets/prev.svg" alt="Back" />
                떨이 상품 관리
            </Header>
            <Content>
                <ProductList>
                    {products.map((product, index) => (
                        <ProductItem key={index}>
                            <ProductImage style={{ backgroundImage: `url(${product.image})` }} />
                            <ProductInfo>
                                <ProductName>{product.name}</ProductName>
                                <ProductPrice>{product.price}</ProductPrice>
                            </ProductInfo>
                            <ProductStock>
                                <StockLabel>재고</StockLabel>
                                <StockCount stock={product.stock}>{product.stock}</StockCount>
                            </ProductStock>
                        </ProductItem>
                    ))}
                </ProductList>
            </Content>
        </Background>
    );
};

export default SellingManage;
