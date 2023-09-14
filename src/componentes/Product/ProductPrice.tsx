import { ProductCardPrice } from "./ProductCard.styled"
import { ProductPriceType } from "./types"

function ProductPrice({price}:ProductPriceType){
    return(
        <ProductCardPrice>
            {price}
        </ProductCardPrice>
    )
}
export default ProductPrice