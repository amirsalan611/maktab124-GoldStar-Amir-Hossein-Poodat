import React from "react";
import StyledWrapper from "./loadingStyle";

const SingleProductLoading = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="loader-small" />
        <div className="loader-large" />
      </div>
    </StyledWrapper>
  );
};

export default SingleProductLoading;
