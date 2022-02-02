import styled from "styled-components";

export const ProductsContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
 
  background: #160f0f;
  color: white;
 

`;

export const ProductWrapper = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;


`;

export const ProductCard = styled.div`
  width: 300px;
  margin: 0 5rem;
 
  
`;


export const ProductImg = styled.img`
  
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  object-fit: cover;
  box-shadow: 8px 8px #ffc500;
  transition: .4s ease-in-out;

  &:hover{
    max-width: 110%;

  }
`;


export const ProductHeading = styled.h1`
  font-size: clamp(2rem, 2vw, 3rem);
  text-align: center;
  margin-bottom: 4rem;
  padding-top: 4rem;
  
 

`;
export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.4rem;


`;


export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem 
  text-align: center;
`;
export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.7rem;
  color: white;
`;

export const ProductButton = styled.button`
  padding: 1rem 3rem;
  background: #e31837;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover{
    background: #ffc500;
    transition: .4s ease-in-out;
  }
`;  

