import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRouter } from './Sidebar.styled'


function Sidebar({ isOpen, toggle }) {
  return (
      <>
        <SidebarContainer isOpen = { isOpen } onClick = {toggle} >

          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <SidebarMenu>
            <SidebarLink to = 'pizza'> pizza </SidebarLink> 
            <SidebarLink to = 'sobremesa'> sobremesa </SidebarLink> 
            <SidebarLink to = 'menu'> menu </SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap> 
            <SidebarRouter to ='/enviar'> enviar </SidebarRouter>           
          </SidebarBtnWrap>
         
        </SidebarContainer>
      </>
  )
}

export default Sidebar
