import Item from "./Item"

function Product() {
    const productsArr = [
        { name: '상품1', price: 1000},
        { name: '상품2', price: 2000},
        { name: '상품3', price: 3000},
    ]
    
    return (
        <div>
            <h1>
                Product List
            </h1>
            <ul>
                {/* 배열이름.map() */}
                {productsArr.map((item, index) => (
                    <Item key={index} item={item}/>
                ))}
                {/* <li>
                    <strong>{productsArr[0].name}</strong>
                    <strong>{productsArr[0].price}</strong>
                </li>
                <li>
                    <strong>{productsArr[1].name}</strong>
                    <strong>{productsArr[1].price}</strong>
                </li>
                <li>
                    <strong>{productsArr[2].name}</strong>
                    <strong>{productsArr[2].price}</strong>
                </li> */}
            </ul>
        </div>
    )
}

export default Product