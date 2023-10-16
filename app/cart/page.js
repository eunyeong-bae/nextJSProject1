import age from './data.js';
import Sample from './Sample.js';

export default function Cart() {
    let cartLists = ['Tomatoes', 'Pasta'];

    return (
        <div>
            <Sample />
            <h4 className="title">Cart</h4>
            { cartLists.map((item, i) => {
                return (
                    <CartItem item={item}/>
                )
            })}
            <Button color='red'/>
            <Button color='blue'/>
        </div>
    )
}

function CartItem({item}) {
    return (
        <div className="cart-item">
            <p>{item} {age}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

function Button({color}) {
   return (
    <button className={`button ${color}`}>Click</button>
   ) 
}