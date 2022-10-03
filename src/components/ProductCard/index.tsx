import { IProduct } from "../../domain/IProduct";
import { Container, ContentContainer, Image, ProductDesc, ProductName } from "./styles";

interface IProductCard {
    product: IProduct,
    margin?: string
};

function ProductCard({ product, margin }: IProductCard) {
    return (
        <Container margin={margin}>
            <Image src={product.image as string} alt={product.name} />
            <ContentContainer>
                <ProductName>
                    {product.name}
                </ProductName>
                <ProductDesc>
                    {product.description}
                </ProductDesc>
            </ContentContainer>
        </Container>
    );
};

export default ProductCard;