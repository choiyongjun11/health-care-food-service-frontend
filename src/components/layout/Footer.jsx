import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 20px;
  color: black;
  font-size: 14px;
  text-align: right;
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;
  

  //position: fixed; //화면고정
  //bottom: 0;
  //left: 0;
  //right: 0;
`;

function Footer () {

  return(

    <FooterContainer>
      Copyright &copy; ChoiYongJun, All Rights Reserved
    </FooterContainer>

  );

}

export default Footer;