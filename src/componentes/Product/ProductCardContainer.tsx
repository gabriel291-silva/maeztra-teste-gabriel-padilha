import { ProductCard } from "."
import { ContainerProductCars } from "./ProductCard.styled"
import { ProductDataType } from "./types"

function ProductCardContainer({
    imageUrl,
    variants,
    price,
    titleProduct,
    description
}:ProductDataType){
return(
    <ContainerProductCars>
        <ProductCard.Image imageUrl={imageUrl}/>
        <ProductCard.variants variants={variants}/>
        <ProductCard.price price={price}/>
        <ProductCard.title titleProduct={titleProduct}/>
        <ProductCard.description description={description}/>
        <ProductCard.buttonAddToCard/>
    </ContainerProductCars>
)    
}

export default ProductCardContainer