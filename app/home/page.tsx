"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Container = styled.div`
  height: 80vh;
  background-color: #ffff;
  .btn {
    background-color: red;
    color: white;
    padding: 18px;
    border-radius: 5px;
  }
`;
const HomePage = () => {
  const router = useRouter();
  return (
    <Container>
      <button
        className={"btn"}
        onClick={() => {
          router.push(`/home/1`);
        }}
      >
        Click me
      </button>
    </Container>
  );
};

export default HomePage;
