import React from 'react';
import { Nav, Navlogo, NavIcon, Bars } from './Navbar2.Styled'

function Navbar2({toggle}) {
  return (
    <>
        <Nav>

          <Navlogo to='/'> kiPizza </Navlogo> 

          <NavIcon onClick={toggle}>
            
            <Bars />
          </NavIcon>
     
          
        </Nav>

    </>   
  );
}

export default Navbar2;
