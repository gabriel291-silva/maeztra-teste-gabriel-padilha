export interface HeaderLogoType{
    logoUrl:string
    logoLink: string
}

export interface HeaderCategorysType{
    categorys:HeaderCategoryType[],
}

export interface HeaderCategoryType{
            categoryColorText:string,
            categoryText:string,
            categoryUrl:string,
            categoryIcon:string

}

export interface HeaderIconType{
    iconUrl:string,
    iconText:string
}