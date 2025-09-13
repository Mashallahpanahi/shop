
// import axios from "axios";
// import Link from "next/link";
// import Container from "../container/Container";
// import ProductItems from "../container/ProductItems";

// export interface girlsType {
//     id: string,
//     src: string,
//     name: string,
//     age: number,
//     location: string,
//     cost: number
// }
// async function Store() {
//     const g = await axios.get<girlsType[]>(`http://localhost:5000/girlsData`);
//     const girls = g.data;

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




// using paginate   ****************************************************



import axios from "axios";
import Link from "next/link";
import Container from "../container/Container";
import ProductItems from "../container/ProductItems";
import Pagination from "../container/Pagination";

export interface girlsType {
    id: string,
    src: string,
    name: string,
    age: number,
    location: string,
    cost: number
}

export interface iProductList {
    first: number | null,
    prev: number | null,
    next: number | null,
    last: number | null,
    pages: number,
    items: number | null,
    data: girlsType[]
}

export interface iStoreProps {
    params: Promise<{}>,
    searchParams: Promise<{ page: string, per_page: string }>
}
async function Store({ searchParams }: iStoreProps) {
    // fro pagination we use searchParams to coach the value and then use 
    const page = (await searchParams).page ?? "1";
    const per_page = (await searchParams).per_page ?? "3"


    const g = await axios.get<iProductList>(`http://localhost:5000/girlsData?_page=${page}&_per_page=${per_page}`);
    const girls = g.data;
    console.log(girls)

    return (
        <Container >
            <div className="grid grid-cols-3 w-[90%] mx-auto mt-20 gap-4">
                {girls.data.map((girl) => (
                    <Link key={girl.id} href={`/components/store/${girl.id}`} >
                        <ProductItems {...girl} />
                    </Link>
                ))}
            </div>
            <Pagination pageCount={girls.pages} />
        </Container>
    )
}

export default Store;