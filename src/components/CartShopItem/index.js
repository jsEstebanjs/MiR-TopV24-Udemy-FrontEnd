import { Link } from "react-router-dom";

function CartShopItem({title,price,img}){
    const deleteItemShop=()=>{
        console.log("is delete")
    }
    return(
        <div onClick={deleteItemShop} className="main-container-cart-shop-item">
        <div className="container-img-title-shop-item">

            <div className="container-img-shop-item">
                <img className="img-shop-item" src={img} alt={title}/>
            </div>
            <div className="container-title-shop-item">
                <Link className="p-title-price-shop-item-link">{title}</Link>
            </div>
        </div>
            <div className="container-price">
                <p className="p-title-price-shop-item" >{price}</p>
            </div>
        </div>
    )

}
export default CartShopItem;