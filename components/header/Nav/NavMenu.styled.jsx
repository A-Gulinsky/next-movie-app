'use client'

import styled from "@emotion/styled"
import Link from "next/link"

export const Nav = styled.nav`
  margin-left: 30px;
`

export const Ul = styled.ul`
  display: flex;
  gap: 25px;
`

export const Li = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
`

export const NavLinkStyled = styled(Link)`
  padding-top: 10px;
  padding-bottom: 10px;

  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: #0c91d9;
  };
`