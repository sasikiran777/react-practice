import {useFetch} from "./hook/useFetch";
import Products from "./components/Products";

const PropTypeBasics = () => {
    const { loading, products } = useFetch('local')
    return (
        <>
            {
                loading ? 'Loading...':
                    products.map((product) => {
                        return <Products key={product.id} {...product}/>
                    })
            }
        </>
    )
}

export default PropTypeBasics
