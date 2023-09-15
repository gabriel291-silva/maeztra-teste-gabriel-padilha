import { Footer } from ".";
import { FooterData } from "../../data/footerData";
import { 
    ContainerFooter,
    ContainerCategoryes, 
    TarjetaContainerFooter
} from "./Footer.styled";
import { FooterCategoryItemType } from "./typez";

export function FooterContainer() {
    const data = FooterData;
    return (
        <>
        <ContainerFooter>
            <ContainerCategoryes>
                {data.categories.map((item: FooterCategoryItemType) => {
                    return (
                        <Footer.categories subcategories={item.subcategories} title={item.title} />
                    );
                })}
            </ContainerCategoryes>
        </ContainerFooter>
        <TarjetaContainerFooter>
            <Footer.information/>
        </TarjetaContainerFooter>
        </>


    );
}
