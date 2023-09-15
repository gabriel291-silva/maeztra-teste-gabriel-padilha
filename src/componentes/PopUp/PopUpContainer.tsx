import { PopUp } from "."
import { PopUpData } from "../../data/popUpData"

function PopUpContainer(){
    const data = PopUpData
    console.log(data)
    
    return(
        <div>
            <div>
                <PopUp.Image/>
                <div>
                    <PopUp.text/>
                    <PopUp.form/>
                    <PopUp.button/>
                    
                </div>
            </div>
            <PopUp.wrapper/>
        </div>
    )
}

export default PopUpContainer