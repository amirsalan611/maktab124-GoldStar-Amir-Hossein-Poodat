"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleDarkMode } from "../redux/reducers/darkMode";

const DarkModeButton = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: any) => state.darkMode.isDarkMode);

  return (
    <StyledWrapper>
      <button
        className={`toggle-btn ${isDark ? "dark-mode" : ""}`}
        onClick={() => dispatch(toggleDarkMode())}
      >
        <div className="sun-rays" />
        <div className="main-circle" />
      </button>
    </StyledWrapper>
  );
};

export default DarkModeButton;

const StyledWrapper = styled.div`
  .toggle-btn {
    --bg: #e8e8e8;
    --fg: #212121;
    background-color: rgb(71, 71, 71);
    border-radius: 16px;
    --dimensions: 50px;
    width: var(--dimensions);
    height: var(--dimensions);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    cursor: pointer;
    position: relative;
    transition: background-color 0.3s ease;
  }

  .toggle-btn .main-circle {
    --dimensions: 20px;
    width: var(--dimensions);
    height: var(--dimensions);
    background-color: var(--fg);
    border-radius: 50%;
    position: absolute;
    transition: transform 0.4s ease 0.2s;
  }

  .toggle-btn .main-circle::after {
    content: "";
    background-color: rgb(71, 71, 71);
    border-radius: 50%;
    --dimensions: 15px;
    width: var(--dimensions);
    height: var(--dimensions);
    position: absolute;
    top: 1px;
    right: -1px;
    transform-origin: right top;
    transform: scale(0);
    transition: transform 0.4s ease 0.2s;
  }

  .toggle-btn .sun-rays {
    display: grid;
    place-items: center;
    transition: transform 0.4s ease 0.2s;
  }

  .toggle-btn .sun-rays,
  .toggle-btn .sun-rays::after,
  .toggle-btn .sun-rays::before {
    --width: 3px;
    --height: 6px;
    width: var(--width);
    height: var(--height);
    background-color: var(--fg);
    position: absolute;
    box-shadow: 0 16px 0 var(--fg), 0 -16px 0 var(--fg);
  }

  .toggle-btn .sun-rays::after {
    content: "";
    transform: rotate(120deg);
  }

  .toggle-btn .sun-rays::before {
    content: "";
    transform: rotate(240deg);
  }

  .toggle-btn.dark-mode {
    --bg: #212121;
    --fg: #e8e8e8;
  }

  .toggle-btn.dark-mode .main-circle {
    transform: scale(1.2);
  }

  .toggle-btn.dark-mode .main-circle::after {
    transform: scale(1);
  }

  .toggle-btn.dark-mode .sun-rays {
    transform: scale(0);
  }

  @media (prefers-color-scheme: dark) {
    .toggle-btn {
      --bg: #212121;
      --fg: #e8e8e8;
    }
  }
`;
