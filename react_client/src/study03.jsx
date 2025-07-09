
const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 }
]

const item = products.map(product => <li id={product.id}>{product.title}</li>);
export default function ListUl() {
    return(
        <ul>
            {item}
        </ul>
    )
}