import SearchInput  from "../../components/Inputs/SearchInput";
import ProductCard from "../../components/ProductCard";
import useFilter from "../../hooks/useFilter";
import useProduct from "../../hooks/useProduct";
import { Container, ProductsContainer } from "./styles";

function Home() {

    const { products } = useProduct();
    const { search, setSearch, filteredData } = useFilter(products, 'name');

    return (
        <Container>
            <SearchInput 
                name="search" value={search || ''}
                onChange={(e) => setSearch(e.target.value)}
                margin={'0 0 50px 0'}
            />
            <ProductsContainer>
                {
                    filteredData.map((product) => {
                        return (
                            <ProductCard 
                                key={product.id} 
                                product={product}
                                margin={'10px'}
                            />
                        )
                    })
                }
            </ProductsContainer>
        </Container>
    );
};

export default Home;