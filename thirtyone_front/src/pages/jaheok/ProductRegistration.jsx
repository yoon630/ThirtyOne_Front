import React from 'react';
import styled from 'styled-components';

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
    margin-top: 40px;
`;

const BackIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

const Form = styled.div`
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
    return (
        <Background>
            <Header>
                <BackIcon src="./src/assets/prev.svg" alt="Back" />
                상품 등록
                <div></div> {/* Placeholder for spacing */}
            </Header>
            <Form>
                <FormItem>
                    <Label>상품 사진</Label>
                    <UploadBox>사진을 첨부해주세요</UploadBox>
                </FormItem>
                <FormItem>
                    <Label>상품명</Label>
                    <Input type="text" placeholder="상품명을 입력해주세요" />
                </FormItem>
                <FormItem>
                    <Label>상품 카테고리</Label>
                    <Select>
                        <option value="">카테고리를 선택해주세요</option>
                        <option value="category1">카테고리 1</option>
                        <option value="category2">카테고리 2</option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Label>상품 가격</Label>
                    <Input type="text" placeholder="상품 가격을 입력해주세요" />
                </FormItem>
                <FormItem>
                    <Label>할인 가격</Label>
                    <Input type="text" placeholder="할인 가격을 입력해주세요" />
                </FormItem>
                <FormItem>
                    <Label>수량</Label>
                    <Input type="text" placeholder="수량을 입력해주세요" />
                </FormItem>
                <FormItem>
                    <Label>상품 설명</Label>
                    <TextArea placeholder="상품 설명을 입력해주세요" rows="4" />
                </FormItem>
                <SubmitButton>등록 완료</SubmitButton>
            </Form>
        </Background>
    );
};

export default ProductRegistration;
