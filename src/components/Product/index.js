import React from 'react'
import { ProductsContainer, ProductHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, 
ProductTitle, ProductDesc, ProductPrice, ProductButton} from './Products'

export default function Products({ heading, data}) {
  return (
    <>
      <ProductsContainer>
        <ProductHeading> { heading } </ProductHeading>
        <ProductWrapper>
          {data.map ((product, index) => {
            return (
              <ProductCard key = {index}>
                <ProductImg src = {product.img} alt={product.alt}/>
                <ProductInfo >
                  <ProductTitle> {product.nome}</ProductTitle>
                  <ProductDesc> {product.desc}</ProductDesc>
                  <ProductPrice> {product.preco}</ProductPrice>
                  <ProductButton> {product.button}</ProductButton>
                

                </ProductInfo>

              </ProductCard>  
            ) 
          })}

        </ProductWrapper>
      </ProductsContainer>

      
    </>
  )
}
