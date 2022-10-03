import SearchInput  from "../../components/Inputs/SearchInput";
import useFilter from "../../hooks/useFilter";
import useProduct from "../../hooks/useProduct";
import { Container } from "./styles";

function Home() {

    const { products } = useProduct();
    const { search, setSearch, filteredData } = useFilter(products, 'name');

    console.log(filteredData)

    return (
        <Container>
            <SearchInput 
                name="search" value={search || ''}
                onChange={(e) => setSearch(e.target.value)}
                margin={'0 0 50px 0'}
            />
            {
                filteredData.map((product) => {
                    return (
                        <div key={product.id}>
                            {product.name}
                        </div>
                    )
                })
            }
        </Container>
    );
};

export default Home;