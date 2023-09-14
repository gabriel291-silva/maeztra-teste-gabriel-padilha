import { ProductCardDescription } from "./ProductCard.styled"
import { ProductDescriptionType } from "./types"

function ProductDescription({description}:ProductDescriptionType){
    return(
        <ProductCardDescription>
            {description}
        </ProductCardDescription>
    )
}
export default ProductDescription