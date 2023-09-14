import { VariantItem, VariantsContainer } from "./ProductCard.styled"
import { ProductVariantType, ProductVariantesType } from "./types"

function ProductVariant({variants}:ProductVariantesType){
    console.log(variants)
    return(
        <VariantsContainer>
            {variants?.map((item:ProductVariantType,key:any)=>{
                return(
                    <VariantItem $color={item.codigoColor} key={key} ></VariantItem>
                )
            })}

        </VariantsContainer>
    )
}
export default ProductVariant