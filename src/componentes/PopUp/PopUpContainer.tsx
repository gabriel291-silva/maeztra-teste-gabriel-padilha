import { PopUp } from "."
import { PopUpData } from "../../data/popUpData"
import {useState } from "react"
import { PopUpCloseBtn, PopUpContent, PopUpConteudoContainer } from "./PopUp.styled"

function PopUpContainer(){
    const {popUpImage, popUpIcon, popUpTitle,popUpText,popUpTextBold, popUpTextButton} = PopUpData
    const [openWrapper,setOpenWrapper] = useState(false)

    return(
        <div>
            <PopUpContent $open={openWrapper}>
                <PopUpCloseBtn onClick={()=>setOpenWrapper(!openWrapper)}>fechar</PopUpCloseBtn>
                <PopUp.Image popUpImage={popUpImage}/>
                <PopUpConteudoContainer>
                    <img src={popUpIcon} alt="" />
                    <PopUp.text popUpTitle={popUpTitle} popUpText={popUpText} popUpTextBold={popUpTextBold}/>
                    <PopUp.form/>
                    <PopUp.button popUpTextButton={popUpTextButton}/>
                </PopUpConteudoContainer>
            </PopUpContent>
            <PopUp.wrapper openWrapper={openWrapper} setOpenWrapper={setOpenWrapper}/>
        </div>
    )
}

export default PopUpContainer