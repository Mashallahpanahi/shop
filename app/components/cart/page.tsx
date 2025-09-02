import CartItem from "../container/CartItem";
import Container from "../container/Container";



function Cart() {
    return (
        <Container>
            <div className="flex flex-col gap-4 mt-20">
                <CartItem />
                <CartItem />
                <CartItem />
                <div>
                    <h2>total cost : 54$</h2>
                </div>
            </div>


        </Container>
    )
}

export default Cart;