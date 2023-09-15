import { useState } from "react";
import { CategoriesContent, CategoryTitle } from "./Footer.styled"
import FooterSubCategory from "./FooterSubCategory"
import { FooterCategoryItemType, FooterSubCategoryItemType } from "./typez"

function FooterCategory({title,subcategories}:FooterCategoryItemType){
    const isMobile = window.innerWidth <= 768;
    const [openCategoryMobile,setOpenCategoryMobile] = useState(false)
    return(
        <CategoriesContent>
            {
                isMobile ? 
                <>
                <CategoryTitle onClick={()=>setOpenCategoryMobile(!openCategoryMobile)}>{title} <div>{openCategoryMobile ? "-":"+"}</div></CategoryTitle>
                            { openCategoryMobile ?
                                subcategories?.map((item:FooterSubCategoryItemType,key:any)=>{
                                    return(
                                        <FooterSubCategory key={key}tititulosubcategory={item.tititulosubcategory}/>
                                    )
                                }):
                                ""
                            }

                </>
                :
                <>
                <CategoryTitle>{title}</CategoryTitle>
                            {
                                subcategories?.map((item:FooterSubCategoryItemType,key:any)=>{
                                    return(
                                        <FooterSubCategory key={key}tititulosubcategory={item.tititulosubcategory}/>
                                    )
                                })
                            }

                </>
            }
            
        </CategoriesContent>
    )
}
export default FooterCategory