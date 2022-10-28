function CartShopItem({title,price,img}){

    return(
        <div className="main-container-cart-shop-item">
        <div className="container-img-title-shop-item">

            <div className="container-img-shop-item">
                <img className="img-shop-item" src={img} alt={title}/>
            </div>
            <div className="container-title-shop-item">
                <p className="p-title-price-shop-item">{title}</p>
            </div>
        </div>
            <div className="container-price">
                <p className="p-title-price-shop-item" >{price}</p>
            </div>
        </div>
    )

}
export default CartShopItem;