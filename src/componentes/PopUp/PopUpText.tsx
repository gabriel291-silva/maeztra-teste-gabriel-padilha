import { PopUpTextContent,PopUptext,PopUptextTitle } from "./PopUp.styled"
import { PopUpTextType } from "./type"

function PopUpText({popUpText,popUpTitle,popUpTextBold}:PopUpTextType){
    return(
        <PopUpTextContent>   
            <PopUptextTitle>{popUpTitle}</PopUptextTitle>
            <PopUptext> {popUpText}<br></br>
            <b>{popUpTextBold}</b>
            </PopUptext>
        </PopUpTextContent>
    )
}

export default PopUpText