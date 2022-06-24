// This will contain the website's header
import React from "react";
import { StyledHeader } from "../styles/Header.style";

function Header(props) {
    return (
      <StyledHeader>
        {props.headerTitle}
      </StyledHeader>
    );
}

export default Header;
