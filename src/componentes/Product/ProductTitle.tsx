import { ProductCardTitle } from "./ProductCard.styled"
import { ProducTitleType } from "./types"

function ProductTitle({titleProduct}:ProducTitleType){
    return(
        <ProductCardTitle>
            {titleProduct}
        </ProductCardTitle>
    )
}
export default ProductTitle