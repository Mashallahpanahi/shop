'use client'


import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../container/Container";
import { useShoppingContext } from "@/app/context/ShoppingContext";




const navLinks = [
    { href: "/", pathName: "Home" },
    { href: "/components/store", pathName: "Store" },

]


const NaveBar = () => {

    const pathName = usePathname();
    const { cartTotalQty } = useShoppingContext()

    return (

        <nav className="shadow-md h-10 flex items-center ">
            <Container>
                <div className="flex justify-between">
                    <div className="flex gap-4 ">
                        {navLinks.map((item) => (
                            <Link className={` ${pathName === item.href ? "text-sky-400" : ""}`}
                                key={item.href} href={item.href}>{item.pathName}</Link>))}

                    </div>
                    <div>
                        <span className="bg-green-300 px-2 py-1 rounded-full ">{cartTotalQty}</span>
                        <Link className={` ${pathName === "/components/cart" ? "text-sky-400" : ""}`} href={'/components/cart'}>Shopping</Link>
                    </div>
                </div>


            </Container>
        </nav>

    )
}

export default NaveBar;