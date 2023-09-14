import styled from "styled-components";
const fontTitillium =" 'Titillium Web',sans-serif;`"
export const ImgLogoHeader = styled.img`
max-width: 147px;
max-height: 18px;
height: 100%;
width: 100%;
`
export const ContainerLogoHeader = styled.div`
height: auto;
width: auto;
`
export const ContentHeader = styled.div`
    max-width: 1921px;
    max-height: 88px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    width: 100%;
    padding: 21px 0px;
    background: #FFF;
    justify-content: space-between;
    margin-bottom: 11px;
    justify-content: space-evenly;

`
export const ContentHeaderCategory = styled.div`
    max-width: 1921px;
    max-height: 88px;
    display: flex;
    margin: 0 auto;
    width: 100%;
    background: #FFF;
    justify-content: space-evenly;
    padding: 13px 0px;
    
`
export const ContainerHeader = styled.div`
    max-height: 88px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.08);

`

export const ButtonSearch = styled.button`
    font-family: ${fontTitillium};
    background-color: #FAA500;
    color: #fff;
    display: flex;
    width: 119px;
    height: 40px;
    flex-direction: column;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    border-radius: 8px;
    border: none;
    text-align: center;
    justify-content: center;
    align-items: center;



`
export const ContainerSearch = styled.div`
    width: 40%;
    display: flex;
    border-radius: 10px;
    background: #EFEFEF;
    max-width: 767px;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 0 24px;
    height: 40px;
`

export const InputSearch = styled.input`
    width: 80%;
    height: 71%;
    background: transparent;
    border: none;
    padding: 0 16px;
    color: #fff;
`

export const ContainerOptionsHeader = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 422px;
    max-height: 41px;
    justify-content: space-between;
    align-items: center;
`
export const ContentOptionsHeader = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 8px;
            padding: 12px 14px 13px 17px;

    &:hover{
    border: 1px solid var(--color-1500-faa-500, #FAA500);
    border-radius: 8px;
    }
    
`
export const TextOptionsHeader = styled.span`
    color: #353535;
    font-family: ${fontTitillium};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px; 
`

export const TextCategoryHeader = styled.div<{ $color?:string; }>`
text-align: center;
font-family: ${fontTitillium};
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 21px;
color: ${props => props.$color ? props.$color : "##353535"};;

`

export const LinkCategoryHeader = styled.a`
    text-decoration: none;
    display: flex;
    gap: 8px;

`
export const ContainerCategoryHeader = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 1598px;
`