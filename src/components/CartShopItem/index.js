import { Link } from "react-router-dom";
import { deleteItemShop } from '../../store/ShopCourses.Slice';
import { useDispatch } from "react-redux";

function CartShopItem({title,price,img}){
    const dispatch = useDispatch()


    return(
        <div onClick={()=> dispatch(deleteItemShop())} className="main-container-cart-shop-item">
            <div className="container-cart-shop-item-delete">
                <button  className="btn-cart-shop-item-delete">Delete</button>
            </div>
        <div className="container-img-title-shop-item">

            <div className="container-img-shop-item">
                <img className="img-shop-item" src={img} alt={title}/>
            </div>
            <div className="container-title-shop-item">
                <Link className="p-title-price-shop-item-link">{title}</Link>
            </div>
        </div>
            <div className="container-price">
                <p className="p-title-price-shop-item" >${price}</p>
            </div>
        </div>
    )

}
export default CartShopItem;