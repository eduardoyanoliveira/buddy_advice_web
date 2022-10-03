import { useNavigate } from "react-router-dom";
import { IProduct } from "../../domain/IProduct";
import { Container, ContentContainer, Image, ProductDesc, ProductName } from "./styles";

interface IProductCard {
    product: IProduct,
    margin?: string
};

function ProductCard({ product, margin }: IProductCard) {

    const navigate = useNavigate();

    return (
        <Container margin={margin} onClick={() => navigate(`/products/${product.id}`)}>
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