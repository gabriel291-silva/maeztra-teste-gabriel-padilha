import { headerData } from "../../data/headerData"
import { TextCategoryHeader, LinkCategoryHeader, ContainerCategoryHeader } from "./HeaderStyles.styled";
import { HeaderCategoryType } from "./types";

function HeaderCategory(){
    const categorys = headerData.headerCategory;
    console.log(categorys)
    return(
        <>
        <ContainerCategoryHeader>
            {categorys?.map((category:HeaderCategoryType,key:any)=>{
                console.log(category)
                return(
                    <div key={key}> 
                    <LinkCategoryHeader  href={category.categoryUrl}>
                        <img src={category.categoryIcon} alt="" />
                        <TextCategoryHeader $color={category.categoryColorText}> {category.categoryText}</TextCategoryHeader>
                    </LinkCategoryHeader>
                    </div>
                )
            })}
        </ContainerCategoryHeader>
        </>
    )
}

export default HeaderCategory