


function CartItem() {

    return (
        <div>
            <div className="grid grid-cols-12 ">
                <div className="col-span-4 ">
                    <img src="../images/girl6.jpg" alt="" />
                </div>
                <div className="col-span-8 min-h-6 bg-slate-100 p-4">
                    <h1>product name: </h1>
                    <h2>product price: </h2>
                    <div>
                        <h2> product amount:</h2>
                        <p className="flex justify-between  w-[120px]">
                            <button className="w-[30px] bg-green-300">+</button>
                            <h1>500</h1>
                            <button className="w-[30px] bg-red-100">−</button>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
} export default CartItem;