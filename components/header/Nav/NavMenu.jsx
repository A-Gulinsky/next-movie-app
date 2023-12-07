'use client'

import { usePathname } from "next/navigation"
import {Li, Nav, NavLinkStyled, Ul } from "./NavMenu.styled"

const NavMenu = ({navLinks}) => {
  const pathname = usePathname()

  return (
    <Nav>
      <Ul>
        {navLinks.map(link => {
          const isActive = pathname === link.href

          return (
            <Li key={link.label}>
              <NavLinkStyled
                href={link.href}
                style={{color: isActive ? '#0c91d9' : 'initial'}}
              >
                {link.label}
              </NavLinkStyled>
            </Li>
          )
        })}
      </Ul>
    </Nav>
  )
}

export {NavMenu}