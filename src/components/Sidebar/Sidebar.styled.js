import styled from "styled-components";
import { Link  } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';



export const SidebarContainer = styled.aside`
  position: fixed;
  top:0;
  z-index: 999;
  
  display: grid;
  width: 350px;
  height: 100%;

  background:  #ffc500;
  // box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.8 );
  align-items: center;
  transition: 0.3s ease-in-out;

  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px' )};

  @media screen and (max-width: 480px){
    width: 100%;
  
  }
 
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;

`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;

    backgroud: tranparente;
    font-size: 2rem;
    cursor: pointer
   
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat (6, 120px);
  
  @media screen and (max-width: 480px ){
    grid-template-rows: repeat (3, 80px);
    
  }  
`

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  font-size: 1.5rem;
  

  
  
  transition: 0.2s ease-in-out;
 
  color: #000;
  cursor: pointer;

  &:hover{
    color:  #ffc500;
    transition: 0.2s ease-in-out;
  }

`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;

`;

export const SidebarRouter = styled(Link)`
  border-radius:1rem;
  background: red;
  color: #fff;
  padding: .5rem 1rem;
  font-size: 1.3rem;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
 
    color:  #ffc500;
}

`;