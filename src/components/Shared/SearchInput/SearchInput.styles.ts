import styled from "styled-components";

export const StyledWrapper = styled.div`
  .group {
    display: flex;
    align-items: center;
    position: relative;
    max-width: 500px;
  }

  .input {
    width: 500px;
    height: 45px;
    padding: 0 1rem 0 3rem;
    border: 2px solid transparent;
    border-radius: 10px;
    color: #B2A5FF;
    transition: 0.5s ease;
  }

  .input::placeholder {
    color: #94a3b8;
  }

  .input:focus,
  .input:hover {
    border-color: rgba(129, 140, 248);
    background-color: #fff;
    box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
  }

  .icon {
    position: absolute;
    left: 1rem;
    color: #94a3b8;
    pointer-events: none;
  }
`;
