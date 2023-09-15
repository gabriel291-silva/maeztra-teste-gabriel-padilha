import { CategoriesContent, CategoryTitle } from "./Footer.styled"
import FooterSubCategory from "./FooterSubCategory"
import { FooterCategoryItemType, FooterSubCategoryItemType } from "./typez"

function FooterCategory({title,subcategories}:FooterCategoryItemType){

    return(
        <CategoriesContent>
            <CategoryTitle>{title}</CategoryTitle>
            {
                subcategories?.map((item:FooterSubCategoryItemType,key:any)=>{
                    return(
                        <FooterSubCategory key={key}tititulosubcategory={item.tititulosubcategory}/>
                    )
                })
            }
        </CategoriesContent>
    )
}
export default FooterCategory