import React from "react";
import styled from "styled-components";
import Layout from "../../pages/dongjae/Layout";

const Logo_wrapper = styled.img`
position: absolute;
width: 321px;
height: 141px;
left: 30px;
top: 174px;
`

const Logo = () => {
    return(
        <>
            <Logo_wrapper src="assets/logo_text.svg">
            </Logo_wrapper>
        </>
    );
};

export default Logo;