import { ProductCarImage } from "./ProductCard.styled"
import { ProductImageType } from "./types"

function ProductImage({imageUrl}:ProductImageType){
    return(
        
            <ProductCarImage src={imageUrl} alt="" />
    )
}
export default ProductImage