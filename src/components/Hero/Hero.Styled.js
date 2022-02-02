import styled from "styled-components";
import imgbg from '../../components/image/Hero-1.jpg'

export const HeroContainer  = styled.div`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${imgbg});
  min-height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  
`;

export const HeroContain = styled.div`
 
  Displex: flex;
  flex-direction: column;
  justify: center;
  align-items: flex-start;
 
  margin-top: 15%;
  margin-left: 5%;
 
 

  @media screen and (max-width: 650px){
    margin-top: 20%;
    margin-left: 5%;
  }

`;
  

  

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem); 
  font-weght: 600;
  color: #fff;

  span {
    color: #ffc500;
  }

`;


export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  color: #fff;
  
 

`;
export const HeroBtn = styled.button`
  font-size: 1.2rem;
  padding: 1rem 4rem;
  background: red;
  color: #fff;
  cursor: pointer;
  border-radius: .5rem;

  transition: .4s ease-out;

  &:hover{
    background: #ffc500
  }
  

`;




