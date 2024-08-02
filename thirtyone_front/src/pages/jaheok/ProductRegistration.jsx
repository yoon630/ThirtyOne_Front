import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Background = styled.div`
    width: 100%;
    max-width: 376px;
    height: 100vh;
    background-color: #ffffff;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 30px;
`;

const BackIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-sizing: border-box;
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-sizing: border-box;
    resize: none;
`;

const Select = styled.select`
    width: 100%;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-sizing: border-box;
`;

const UploadBox = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e0e0e0;
    cursor: pointer;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 15px;
    background-color: #d9534f;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
`;

const ProductRegistration = () => {
    const [photo, setPhoto] = useState(null);
    const [name, setName] = useState('');
    const [productType, setProductType] = useState('');
    const [price, setPrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [amount, setAmount] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('name', name);
        formData.append('product_type', productType);
        formData.append('price', price);
        formData.append('sale_price', salePrice);
        formData.append('amount', amount);
        formData.append('content', content);

        try {
            const response = await axios.post('http://13.125.100.193/store/create/1/product', formData);
            console.log('Product registered successfully:', response.data);
        } catch (error) {
            console.error('Error registering product:', error);
        }
    };

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    return (
        <Background>
            <Header>
                <BackIcon src="../assets/prev.svg" alt="Back" />
                상품 등록
                <div></div> {/* Placeholder for spacing */}
            </Header>
            <Form onSubmit={handleSubmit}>
                <FormItem>
                    <Label>상품 사진</Label>
                    <Input type="file" onChange={handlePhotoChange} />
                </FormItem>
                <FormItem>
                    <Label>상품명</Label>
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="상품명을 입력해주세요" />
                </FormItem>
                <FormItem>
                    <Label>상품 카테고리</Label>
                    <Select value={productType} onChange={(e) => setProductType(e.target.value)}>
                        <option value="">카테고리를 선택해주세요</option>
                        <option value="BAK">빵&간식류</option>
                        <option value="BUT">정육제품</option>
                        <option value="FRU">과일류</option>
                        <option value="VEG">채소류</option>
                        <option value="SID">반찬가게</option>
                        <option value="ETC">기타</option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Label>상품 가격</Label>
                    <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="상품 가격을 입력해주세요" />
                </FormItem>
                <FormItem>
                    <Label>할인 가격</Label>
                    <Input type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} placeholder="할인 가격을 입력해주세요" />
                </FormItem>
                <FormItem>
                    <Label>수량</Label>
                    <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="수량을 입력해주세요" />
                </FormItem>
                <FormItem>
                    <Label>상품 설명</Label>
                    <TextArea value={content} onChange={(e) => setContent(e.target.value)} placeholder="상품 설명을 입력해주세요" rows="4" />
                </FormItem>
                <SubmitButton type="submit">등록 완료</SubmitButton>
            </Form>
        </Background>
    );
};

export default ProductRegistration;
