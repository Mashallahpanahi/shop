"use client"

import { useShoppingContext } from "@/app/context/ShoppingContext";
import CartItem from "../container/CartItem";
import Container from "../container/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { girlsType } from "../store/page";
import { FormatNumberWithCommas } from "@/app/utils/spreatNumber3";



function Cart() {
    const { cartItems } = useShoppingContext()



    const [data, setData] = useState<girlsType[]>([])
    useEffect(() => {
        axios(`http://localhost:5000/girlsData`).then(result => {
            const { data } = result
            setData(data)
        })

    }, [])



    return (
        <Container>
            <div className="flex flex-col gap-4 mt-10">
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}


                <div>
                    <h2>total cost :
                        <span>
                            {
                                FormatNumberWithCommas(cartItems.reduce((total, item) => {

                                    let selectedProduct = data.find((product) => product.id == item.id.toString())
                                    return total + (selectedProduct?.cost || 0) * item.qty

                                }, 0))
                            }
                        </span> </h2>
                </div>
            </div>


        </Container>
    )
}

export default Cart;