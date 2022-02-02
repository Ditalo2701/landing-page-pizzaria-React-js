import React, {useState} from 'react'
import Navbar2 from '../Navbar2'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContain, HeroH1, HeroP, HeroBtn } from './Hero.Styled'

function Hero() {

  const [isOpen, setIsOpen] = useState (false);

  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  
  return (

    <>
      <HeroContainer>
        <Navbar2 toggle = {toggle}/> 
        <Sidebar isOpen = {isOpen} toggle = {toggle}/>
        <HeroContain>
          <HeroH1> melhor <span>pizza </span> </HeroH1>
          <HeroP> feita em 60 segundos </HeroP>
          <HeroBtn> pedidos </HeroBtn>
        </HeroContain>
      </HeroContainer>
      
    </>
  )
}

export default Hero
