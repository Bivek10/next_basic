import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavSection = styled.div`
  background-color: #454343;
  padding: 20px 20px 20px 0px;
  ul,
  li {
    display: flex;
    gap: 20px;
    justify-content: end;
  }
`;

function NavBar() {
  return (
    <NavSection>
      <ul>
        <li>
          <Link href={"#"}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </NavSection>
  );
}

export default NavBar;
