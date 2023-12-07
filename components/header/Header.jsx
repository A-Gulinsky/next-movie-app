import { HeaderContainer } from "./Header.styled"
import { NavMenu } from "./Nav/NavMenu"

const navItems = [
  { label: 'Home', href: '/' },
  {label: 'Movies', href:'/movies'},
]

const Header = () => {
  
  return (
    <HeaderContainer>
      <NavMenu navLinks={navItems} />
    </HeaderContainer>
  )
}

export {Header}