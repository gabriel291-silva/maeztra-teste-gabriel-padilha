import { SubCategoryTitle } from "./Footer.styled"
import { FooterSubCategoryItemType } from "./typez"

function FooterSubCategory({tititulosubcategory}:FooterSubCategoryItemType){
   
    return(
        <SubCategoryTitle>
        {tititulosubcategory}
        </SubCategoryTitle>
    )
}
export default FooterSubCategory