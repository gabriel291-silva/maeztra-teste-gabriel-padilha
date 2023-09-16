export interface PopUpButtonTextType{
    popUpTextButton:string
}
export interface PopUpImageType{
    popUpImage:string
}

export interface PopUpIcon{
    popUpIcon:string
}
export interface PopUpTextType{
    popUpText:string,
    popUpTitle:string,
    popUpTextBold:string
}
export interface PopUpData{
    popUpTextButton:PopUpButtonTextType,
    popUpImage:PopUpImageType
    popUpIcon:PopUpIcon
    popUpText:PopUpTextType
}