import styled from "styled-components";
const fontTitillium =" 'Titillium Web',sans-serif;`"

export const ContainerTarjetaHeader = styled.div`
    text-align: center;
    background-color: #353535;
    @media only screen and (max-width: 600px) {
        height: 24px;
    }
`

export const TextTarjetaHeader = styled.a`
    color: #FFF;
    text-align: center;
    font-family: ${fontTitillium};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-decoration: none;
    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`