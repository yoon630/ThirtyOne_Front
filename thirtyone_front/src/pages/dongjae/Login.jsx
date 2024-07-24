import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../components/dongjae/Logo";

const Background = styled.div`
    width:393px;
    height:852px;
    background-color:#D94844;
`

const Login = () => {
    return(
        <>
            <Background>
                <Logo></Logo>
            </Background>
        </>
    )
};

export default Login;