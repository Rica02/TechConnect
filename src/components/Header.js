// This will contain the website's header
import React from "react";
import { StyledHeader } from "../styles/Header.style";

function Header(props) {
    return (
      <StyledHeader headerBanner={props.headerBanner}  >
        <div className="header-title">
          {props.headerTitle}
        </div>
      </StyledHeader>
    );
}

export default Header;
