export interface FooterInformationItemType{
    icon:string,
    texte:string
}
export interface FooterInformationsType{
    information:FooterInformationItemType[]
}

export interface FooterPagamentoItemType{
    icon:string
}

export interface FooterpagamentosType{
    pagamento:FooterPagamentoItemType[]
}

export interface FooterRedesItemType{
    icon:string
}

export interface FooterRedesType{
    redes:FooterPagamentoItemType[]
}

export interface FooterSubCategoryItemType{
    tititulosubcategory:string
}

export interface FooterCategoryItemType{
    title:string,
    subcategories:FooterSubCategoryItemType[]
}

export interface FooterCategoryType{
    categories:FooterCategoryItemType[]
}