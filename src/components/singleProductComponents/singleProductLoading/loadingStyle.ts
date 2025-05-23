"use client";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    width: 70px;
    height: 70px;
  }

  .loader-large {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    background-color: #d4adfc;
    border-radius: 10px;
    animation: loading 2s infinite;
  }

  .loader-small {
    position: absolute;
    width: 50%;
    height: 50%;
    inset: 0;
    margin: auto;
    background-color: #5c469c;
    z-index: 2;
    border-radius: 6px;
    animation: loading 2s infinite reverse;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotateY(180deg);
    }

    100% {
      transform: rotateX(180deg);
    }
  }
`;

export default StyledWrapper;
