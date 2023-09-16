import {useEffect } from "react"
import { WrapperPopUp } from "./PopUp.styled"

function PopUpWrapper({openWrapper,setOpenWrapper}:any){

    useEffect(()=>{
        setTimeout(()=>{setOpenWrapper(true)},2000)
    },[])
    return(
        <WrapperPopUp onClick={()=>{setOpenWrapper(!openWrapper)}} $open={openWrapper}></WrapperPopUp>
    )
}

export default PopUpWrapper