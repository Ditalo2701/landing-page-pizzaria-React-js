import styled from "styled-components";
import imgFeature from "../../components/image/Feature-1.jpg"



export const FeatureContainer = styled.section`

 
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${imgFeature}); no-repeat;
  height: 100vh;
  background-position: center; 
  background-size: cover;
  
  max-height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;  

 
`;

export const FeatureButton = styled.button`
  background: red;
  padding: 1rem 4rem;
  color: white;
  cursor: pointer;


`

