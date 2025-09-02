// import Link from "next/link";
// import Container from "../container/Container"
// import ProductItems from "../container/ProductItems";

// const girls = [
//     { id: 1, src: "../images/girl1.jpg", name: "Shkilla", age: 23, location: "London" },
//     { id: 2, src: "../images/girl2.jpg", name: "Shokuria", age: 18, location: "Afghanistan" },
//     { id: 3, src: "../images/girl3.jpg", name: "Shazia", age: 22, location: "Artralia" },
//     { id: 4, src: "../images/girl4.jpg", name: "Shahrzad", age: 30, location: "Iran" },
//     { id: 5, src: "../images/girl5.jpg", name: "Shaima", age: 23, location: "Africa" },
//     { id: 6, src: "../images/girl6.jpg", name: "ShabName", age: 23, location: "Qatar" },
//     { id: 7, src: "../images/girl7.jpg", name: "Shereen", age: 20, location: "Germen" },
//     { id: 8, src: "../images/girl8.jpg", name: "ShahrNanoo", age: 25, location: "Sevis" },
//     { id: 9, src: "../images/girl9.jpg", name: "Shakora", age: 26, location: "Turkia" },

// ]
// const Store = () => {
//     return (
//         <Container >
//             <div className="grid grid-cols-3 w-[90%] mx-auto mt-20 gap-4">
//                 {girls.map((girl) => (
//                     <Link key={girl.id} href={`/components/store/${girl.id}`} >
//                         <ProductItems {...girl} />
//                     </Link>
//                 ))}
//             </div>
//         </Container>
//     )
// }

// export default Store;







import Link from "next/link";
import Container from "../container/Container"
import ProductItems from "../container/ProductItems";
import axios from "axios";

export interface girlsType {
    id: string,
    src: string,
    name: string,
    age: number,
    location: string
}
async function Store() {
    const g = await axios.get<girlsType[]>(`http://localhost:5000/girlsData`);
    const girls = g.data;
    console.log(girls)
    return (
        <Container >
            <div className="grid grid-cols-3 w-[90%] mx-auto mt-20 gap-4">
                {girls.map((girl) => (
                    <Link key={girl.id} href={`/components/store/${girl.id}`} >
                        <ProductItems {...girl} />
                    </Link>
                ))}
            </div>
        </Container>
    )
}

export default Store;