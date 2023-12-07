'use client'

import styled from "@emotion/styled"

export const BackBtnStyled = styled.button`
  display: block;

  padding: 8px 15px;

  color: initial;
  text-decoration: none;
  text-align: center;

  background-color: transparent;
  border: 1px solid black;
  border-radius: 4px;

  transition: 250ms ease-in;

  &:hover {
    transform: scale(1.02);
  }
`