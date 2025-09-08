

"use client"

import { useShoppingContext } from "@/app/context/ShoppingContext";

type idType = {
    id: string
}

function AddToCart({ id }: idType) {
    //here coach th funtion for using
    const {
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct } = useShoppingContext();


    return (
        <div>
            <div className="flex w-[250px] mx-auto justify-center p-6 font-bold">
                <h1 className="pr-10">number: </h1>
                <div className="flex justify-between w-[200px]">
                    <button
                        onClick={() => handleIncreaseProductQty(parseInt(id))}
                        className="w-[30px] rounded-sm bg-green-300"
                    >
                        +
                    </button>

                    <h1>{getProductQty(parseInt(id))}</h1>
                    <button onClick={() => handleDecreaseProductQty(parseInt(id))} className="w-[30px] rounded-sm bg-red-100">−</button>
                </div>
            </div>
            <button onClick={() => handleRemoveProduct(parseInt(id))} className="bg-red-100 px-4 py-2 rounded-full shadow-md ">delete from box</button>
        </div>
    );
}

export default AddToCart;
