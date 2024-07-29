import React from "react";
import styled from "styled-components";
import Layout from "../../pages/dongjae/Layout";
import { useNavigate } from "react-router-dom";

const Log_wrapper = styled.div`

box-sizing: border-box;

position:relative;
width: 336px;
height: 215px;
left:8px;
top:88px;

background: #FFFFFF;
border: 2px solid #E0E0E0;
border-radius: 10px;
`
const Food_Img = styled.img`
position: relative;
width: 60px;
height: 63px;
left: 15px;
top: 15px;
`

const Text1 = styled.div`
    /* ABC 정육 */

position: relative;
width: 92px;
height: 24px;
left: 100px;
top: -55px;

/* TItle/20px/Bold */
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 27px;

/* 팝업or알림 */
color: rgba(217, 72, 68, 0.77);
`
const Text2 = styled.div`
position: relative;
width: 194px;
height: 23px;
left: 100px;
top: -35px;

/* Body/12px/Bold */
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;

/* 팝업or알림 */
color: rgba(217, 72, 68, 0.77);
`
const Text3 = styled.div`
    /* 주문시간 | 오늘 오후 8:47 */

position: relative;
width: 194px;
height: 23px;
left: 100px;
top: -20px;

/* Body/12px/Bold */
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;

/* 팝업or알림 */
color: rgba(217, 72, 68, 0.77);
`
const Text4 = styled.div`
    /* 주문수량 | 1개 */

position: relative;
width: 194px;
height: 23px;
left: 100px;
top:-5px;

/* Body/12px/Bold */
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;

/* 팝업or알림 */
color: rgba(217, 72, 68, 0.77);


`
const Text5 = styled.div`
    position: relative;
width: 194px;
height: 23px;
left: 100px;
top: 15px;

/* Body/12px/Bold */
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;

/* 팝업or알림 */
color: rgba(217, 72, 68, 0.77);
`

const Pickup = styled.div`
position: relative;
width: 93px;
height: 21px;
left: 263px;
top: -170px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;

/* main */
color: #D94844;
`

const Cancle = styled.button`
padding: 0px;
gap: 10px;

position: relative;
width: 56px;
height: 27px;
left: 260px;
top: -35px;
border:none;
/* main */
background: #D94844;
border-radius: 15px;
cursor:pointer;

/* Caption/12px/Regular */
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;

color: #FFFFFF;

`

const Log = (props) => {
    return(
        <>
            <Log_wrapper>
                <Food_Img />
                <Text1>{props.store.name}</Text1>
                <Text2>{props.sale_product.name}</Text2>
                <Text3>주문시간 ㅣ {props.created_at}</Text3>
                <Text4>주문수량 ㅣ {props.amount}</Text4>
                <Text5>남은시간</Text5>
                <Pickup>픽업 대기 중</Pickup>
                <Cancle>취소</Cancle>
            </Log_wrapper>
        </>
    );
};

export default Log;