import styled from "styled-components";
const fontTitillium =" 'Titillium Web',sans-serif;`"


export const WrapperPopUp = styled.div<{ $open?:boolean; }>`
    display: ${props => props.$open ? "flex" : "none"};;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.70);
    z-index: 2;
`

export const PopUpContent = styled.div<{ $open?:boolean; }>`
    display: flex;
    position: fixed;
    background: #fff;
    z-index: 3;
    width: 100%;
    max-width: 848px;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 379px;
    height: 100%;
    max-height: 529px;
    display: ${props => props.$open ? "flex" : "none"};
    @media only screen and (max-width: 600px) {
        width: 80%;
        max-height: 307px;
        top: 106px;
    }
`
export const PopUpImageContainer = styled.div`
    max-width: 424px;
    overflow: hidden;
    align-items: center;
    overflow: hidden;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`

export const PopUpImageItem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
   
`

export const PopUpTextContainer = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column; 
`

export const PopUpConteudoContainer = styled.div`
    padding: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 600px) {
       padding: 20px;
    }

`
export const PopUpTextContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const PopUptextTitle = styled.div`
    color: var(--Color-2, #464B54);
    text-align: center;
    font-family: ${fontTitillium};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; 
    text-transform: uppercase;
    margin-top: 12px;
    margin-bottom: 12px;
`
export const PopUptext = styled.div`
    color: var(--Color-4, #787D83);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    font-family: ${fontTitillium};
    text-align: center;
    margin-bottom: 25px;
    @media only screen and (max-width: 600px) {
        font-size: 15px;

    }

`
export const PopUpInput = styled.input`
    border-radius: 10px;
    border: 1px solid var(--cor-neutra-color-5500-bebebe, #C4C4C4);
    background: var(--Branco, #FFF);
    padding: 10px 13px;
    width: 91%;
    margin-bottom: 12px;
`

export const PopUpButton = styled.button`
    border-radius: 10px;
    background: #FAA500;
    padding: 10px 0px;
    width: 100%;
    border: none;
    color:#fff;
`

export const PopUpCloseBtn = styled.div`
position: absolute;
    right: 0;
    top: -22px;
    color: var(--Branco, #FFF);
    font-family: ${fontTitillium};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-transform: uppercase;
`