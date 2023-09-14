export interface ProducTitleType{
    titleProduct:string
}

export interface ProductDescriptionType{
    description:string
}

export interface ProductPriceType{
    price:string
}

export interface ProductImageType{
    imageUrl:string
}

export interface ProductVariantesType{
    variants:ProductVariantType[]
}

export interface ProductVariantType{
    codigoColor:string
}

export interface ProductDataType{
    imageUrl:string,
    variants:ProductVariantType[],
    price:string,
    titleProduct:string,
    description:string
}