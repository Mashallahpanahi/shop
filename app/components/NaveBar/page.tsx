'use client'


import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../container/Container";





const navLinks = [
    { href: "/", pathName: "Home" },
    { href: "/components/store", pathName: "Store" },
]


const NaveBar = () => {

    const pathName = usePathname();
    console.log(pathName)

    return (

        <nav className="shadow-md h-10 flex items-center ">
            <Container>
                <div className="flex gap-4 ">
                    {navLinks.map((item) => (<Link className={` ${pathName === item.href ? "text-sky-400" : ""}`} key={item.href} href={item.href}>{item.pathName}</Link>))}

                </div>

            </Container>
        </nav>

    )
}

export default NaveBar;