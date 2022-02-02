import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';


export const Nav = styled.nav`
  
   heigth: 80px;
  
   display: flex;
   justify-content: center;
   padding: 2vh 15%;

   @media screen and (max-width:960px){

      transition: .8s all ease;
   }
  

`;

export const Navlogo = styled(LinkR)`
   color: #fff;
   font-size: 2rem;
   display: flex;
   cursor: pointer;
   align-items: center;
  
   @media screen and (max-width:480px){
     position: absolute;
     top: 10px;
     left: 25px;

    }  

`;

export const NavIcon = styled.div`
  
      display: block;
     
      position: absolute;
      top: 15px;
      right:15px;

      transforme: translate (-100%, 60%);
      font-size: 1.7rem;
      cursor: pointer;

      p{
        transform: translate (-175%, 100%);
      }


   }
 
`;

export const Bars = styled (FaPizzaSlice)`
  font-size: 2.5rem;
  transform: translate (50%, -15%);
  color: #ffc500;


`



   


 