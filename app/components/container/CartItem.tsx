import axios from "axios";
import { useEffect, useState } from "react";
import { girlType } from "./ProductItems";
import AddToCart from "./AddToCart";

interface carItemPrps {
    id: number,
    qty: number
}

function CartItem({ id, qty }: carItemPrps) {
    const [data, setData] = useState({} as girlType)
    useEffect(() => {
        axios(`http://localhost:5000/girlsData/${id}`).then(result => {
            const { data } = result
            setData(data)
        })

    }, [])

    return (
        <div>
            <div className="grid grid-cols-12  ">
                <div className="col-span-4 ">
                    <img src={data.src} alt="" />
                </div>
                <div className="grid col-span-8 min-h-6 bg-slate-100 p-4 text-center justify-center">
                    <h1>product name:{data.name} </h1>
                    <h2>product price:{data.cost} </h2>
                    <div>
                        <h2> age: {data.age}</h2>

                        <div>
                            <AddToCart id={id.toString()} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
} export default CartItem;