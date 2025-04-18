"use client";
import { HeaderLocalization } from "@/constants/Localizations/Localization";
import { RiSearch2Line } from "react-icons/ri";
import styled from "styled-components";

const SearchInput = () => {
  return (
    <StyledWrapper>
      <div className="group">
        <RiSearch2Line className="icon" />
        <input
          className="input outline-none bg-white"
          type="text"
          placeholder={HeaderLocalization.search}
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
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
    color: #0d0c22;
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
    font-size: 1.2rem;
  }
`;

export default SearchInput;
