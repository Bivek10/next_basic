import React from "react";
import styled from "styled-components";

const Footersection = styled.div`
  height: 100px;
  width: 100%;
  background-color: #454343;
  display: flex;
  justify-content: center;
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    flex-direction: column;
  }
`;

function Footer() {
  return (
    <Footersection>
      <div className={"footer-content"}>
        <h4>Creator: Tester.com</h4>
        <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
      </div>
    </Footersection>
  );
}

export default Footer;
