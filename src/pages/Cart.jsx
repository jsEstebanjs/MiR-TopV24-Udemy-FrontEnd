import Footer from "../components/Footer";
import Nav from "../components/Nav";

var handler = window.ePayco.checkout.configure({
    key: 'ba2787cf058fe4931c78108fb6f8e551',
    test: true
  });
  
  const handleClick = () => {
    handler.open(data)
  }
  
  const data={
    //Parametros compra (obligatorio)
    name: "Vestido Mujer Primavera",
    description: "Vestido Mujer Primavera",
    invoice: "12345", //como número de factura, no repetirlo.  
    currency: "cop", // ó usd
    amount: "12000", // development: max 200.000
    tax_base: "0",
    tax: "0",
    country: "co",
    lang: "en",
  
    //Onpage="false"(Modal) - Standard="true" 
    external: "false",
  
  
    //Atributos opcionales de la reserva
    extra1: "extra1",
    extra2: "extra2",
    extra3: "extra3",
    // confirmation: "http://secure2.payco.co/prueba_curl.php",
    // response: "http://secure2.payco.co/prueba_curl.php", //Redirección
    response: "http://localhost:3000/response", //Redirección además agrega: ?ref_payco=...
    // Seguir el tutorial de epayco checkout -> medios de pagos de prueba
    // luego se hace una peticion GET a la ruta señalada en páginas personalizadas del tutorial.
    // VER STRIPE
  
    //Atributos cliente, recomienda localstorage
    name_billing: "Andres Perez",
    address_billing: "Carrera 19 numero 14 91",
    type_doc_billing: "cc",
    mobilephone_billing: "3050000000",
    number_doc_billing: "100000000",
  
   //atributo deshabilitación metodo de pago
    // methodsDisable: ["TDC", "PSE","SP","CASH","DP"]
    methodsDisable: ["SP"]
  
    }

const Cart = () => {
    return (
      <>
        <Nav />
        <div className="cart-maincontainer">
          <h1>Shopping Cart</h1>
          <div className="cart-container">
            <h2>Courses in Cart</h2>
            <div className="courses-container">

            </div>
            <div className="checkout-container">
              <h3>Total:</h3>
              <button onClick={handleClick}>Checkout</button>
            </div>
          </div>
          
        </div>
        <Footer />
      </>
       
      );
}

export default Cart;



