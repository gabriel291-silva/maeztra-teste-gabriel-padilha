import styled from "styled-components";
const fontTitillium =" 'Titillium Web',sans-serif;`"

export const ContainerProductCars = styled.div`
        max-width: 254px;
    margin: 0 auto;
`
export const ProductCarImage = styled.img`
    max-width: 254px;
`
export const ProductCardPrice = styled.div`
    color: var(--color-2-500, #353535);
    font-family: ${fontTitillium};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 2px;
`
export const ProductCardTitle = styled.div`
    color: var(--color-2-900, #000);
    font-family:  ${fontTitillium};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 8px;
`
export const ProductCardDescription = styled.div`
    color: var(--color-2-900, #000);
    font-family:  ${fontTitillium};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 254px;
    margin-bottom: 8px;
`

export const ProductCardButtonAddToCard = styled.button`
    border-radius: 4px;
    background: var(--color-1500-faa-500, #FAA500);
    color: #FFF;
    text-align: center;
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 254px;
    height: 35px;
    border: none;

`
export const VariantItem = styled.div<{ $color?:string; }>`
    background: ${props => props.$color ? props.$color : "#fff"};
    height: 27px;
    width: 27px;
    border-radius: 5px;
`
export const VariantsContainer = styled.div`
    display: flex;
    gap: 8px;
    padding: 8px 0;
`
