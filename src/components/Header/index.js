// This will contain the website's header
import React from "react";
import { StyledHeader } from "./Header.style.js";

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
