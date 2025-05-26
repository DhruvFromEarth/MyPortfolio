import { useState } from 'react'
import './Navbar.css'


const NavbarLinks = ({ setShowList }) => {

  const handleLinkClick = () => {
    const menuPage = document.getElementById('menu-page');
    menuPage.classList.remove('active');
    setShowList(false);
  }

  return <ul>
    <li onClick={handleLinkClick}><a href='#intro'>Home</a></li>
    <li onClick={handleLinkClick}><a href='#about'>About</a></li>
    <li onClick={handleLinkClick}><a href='#skills'>Skills</a></li>
    <li onClick={handleLinkClick}><a href='#projects'>Projects</a></li>
    <li onClick={handleLinkClick}><a href='#contact'>Contact</a></li>
  </ul>
}
const MenuPage = ({ isActive , setShowList }) => {
  return (
    <div id='menu-page' className={isActive ? 'active' : ''}>
      <NavbarLinks setShowList={setShowList} />
    </div>
  )
}

export const Navbar = () => {
  const [showList, setShowList] = useState(false);

  return (
    <>
      <div id='navbar'>
        <div id='navbar-name'>
          PORTFOLIO
        </div>
        <div id='navbar-links'>
          <NavbarLinks setShowList={setShowList}/>
        </div>
        <div id='navbar-toggle'>
          <div id='navbar-toggle-icon' onClick={() => setShowList(!showList)}>
            {showList ? '✖' : '☰'}
          </div>
        </div>
      </div>
      <MenuPage isActive={showList} setShowList={setShowList} />
    </>
  )
}
