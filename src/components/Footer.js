import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`

width: 100%;
padding : 20px;
color: black;
font-size: 15px;
text-align: right; //오른쪽 정렬
position: fixed; //화면에 고정
bottom: 0;
right: 0;
background-color: #f8f8f8;
border-top: 1px solid #ddd;
`;


function Footer () {

  return(

    <FooterContainer>
      Copyright &copy; ChoiYongJun, All Rights Reserved.
    </FooterContainer>

  );

}

export default Footer;