


"use client";

import { ChangeEvent, useState } from "react";
import Container from "../components/container/Container";
import axios from "axios";
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const rout = useRouter();

    const [newProduct, setNewProduct] = useState({
        src: "",
        name: "",
        age: "",
        location: "",
        cost: "",
    });

    // ✅ Handle input and select changes
    const handleChangeProdect = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, name } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: value,
        });
    };

    // ✅ Add new product to DB
    const handleCreatProduct = async () => {
        if (!newProduct.src || !newProduct.name || !newProduct.age || !newProduct.location || !newProduct.cost) {
            alert("Please fill all fields!");
            return;
        }

        await axios.post("http://localhost:5000/girlsData", {
            id: (Math.floor(Math.random() * 1000)).toString(),
            src: newProduct.src,
            name: newProduct.name,
            age: newProduct.age,
            location: newProduct.location,
            cost: newProduct.cost,
        });

        // ✅ Reset form after submit
        setNewProduct({
            src: "",
            name: "",
            age: "",
            location: "",
            cost: "",
        });

        rout.refresh();
    };

    return (
        <Container>
            <div className="bg-slate-100 ">
                <div className="flex flex-col p-4 gap-4 mt-[100px] shadow-md rounded-md">
                    <h1 className="font-bold text-lg">Add item to shop</h1>

                    {/* ✅ Image Select */}
                    <select
                        name="src"
                        onChange={handleChangeProdect}
                        value={newProduct.src}
                        className="border p-2 rounded"
                    >
                        <option value="">-- Select an Image --</option>
                        <option value="../images/girl1.jpg">girl1.jpg</option>
                        <option value="../images/girl2.jpg">girl2.jpg</option>
                        <option value="../images/girl3.jpg">girl3.jpg</option>
                        <option value="../images/girl4.jpg">girl4.jpg</option>
                        <option value="../images/girl5.jpg">girl5.jpg</option>
                        <option value="../images/girl6.jpg">girl6.jpg</option>
                        <option value="../images/girl7.jpg">girl7.jpg</option>
                        <option value="../images/girl8.jpg">girl8.jpg</option>
                        <option value="../images/girl9.jpg">girl9.jpg</option>
                    </select>

                    {/* ✅ Image Preview */}
                    {newProduct.src && (
                        <img
                            src={newProduct.src}
                            alt="Preview"
                            className="w-[120px] h-[120px] object-cover rounded-md border"
                        />
                    )}

                    {/* ✅ Other Inputs */}
                    <input
                        onChange={handleChangeProdect}
                        value={newProduct.name}
                        type="text"
                        name="name"
                        placeholder="name"
                        className="border p-2 rounded"
                    />
                    <input
                        onChange={handleChangeProdect}
                        value={newProduct.age}
                        type="number"
                        name="age"
                        placeholder="age"
                        className="border p-2 rounded"
                    />
                    <input
                        onChange={handleChangeProdect}
                        value={newProduct.location}
                        type="text"
                        name="location"
                        placeholder="location"
                        className="border p-2 rounded"
                    />
                    <input
                        onChange={handleChangeProdect}
                        value={newProduct.cost}
                        type="number"
                        name="cost"
                        placeholder="cost"
                        className="border p-2 rounded"
                    />

                    {/* ✅ Submit Button */}
                    <button
                        onClick={handleCreatProduct}
                        className="bg-green-500 text-white w-[200px] h-[40px] mx-auto rounded hover:bg-green-600"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;






























// first try and code by myselfe
// "use client"


// import { ChangeEvent, useState } from "react";
// import Container from "../components/container/Container";
// import axios from "axios";
// import { useRouter } from "next/navigation";



// const Dashboard = () => {
//     const rout = useRouter()

//     const [newProduct, setNewProduct] = useState({

//         src: "",
//         name: "",
//         age: "",
//         location: "",
//         cost: ""
//     }
//     )

//     const handleChangeProdect = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { value, name } = e.target
//         setNewProduct({
//             ...newProduct,
//             [name]: value
//         })
//     }

//     const handleCreatProduct = () => {
//         axios({
//             method: "POST",
//             url: ('http://localhost:5000/girlsData'),
//             data: {
//                 id: Math.floor(Math.random() * 1000),
//                 src: newProduct.src,
//                 name: newProduct.name,
//                 age: newProduct.age,
//                 location: newProduct.location,
//                 cost: newProduct.cost

//             }
//         })
//         rout.refresh();
//     }
//     return (
//         <Container>

//             <div className="bg-orange-50 ">
//                 <div className=" flex flex-col p-4 gap-4 mt-[100px] shadow-md rounded-md">
//                     <h1 className="font-bold">Add item to shop </h1>
//                     {/* <input onChange={handleChangeProdect} type="text" name="src" placeholder="image url like ../images/girl1.jpg" /> */}
//                     <select name="src"
//                         onChange={handleChangeProdect}
//                         value={newProduct.src}
//                         className="border p-2 rounded" >
//                         <option value="../images/girl1.jpg">girl1.jpg</option>
//                         <option value="../images/girl2.jpg">girl2.jpg</option>
//                         <option value="../images/girl3.jpg">girl3.jpg</option>
//                         <option value="../images/girl4.jpg">girl4.jpg</option>
//                         <option value="../images/girl5.jpg">girl5.jpg</option>
//                         <option value="../images/girl6.jpg">girl6.jpg</option>
//                         <option value="../images/girl7.jpg">girl7.jpg</option>
//                         <option value="../images/girl8.jpg">girl8.jpg</option>
//                         <option value="../images/girl9.jpg">girl9.jpg</option>
//                     </select>
//                     <input onChange={handleChangeProdect} type="text" name="name" placeholder="name" />
//                     <input onChange={handleChangeProdect} type="number" name="age" placeholder="age" />
//                     <input onChange={handleChangeProdect} type="text" name="location" placeholder="location" />
//                     <input onChange={handleChangeProdect} type="number" name="cost" placeholder="cost" />
//                     <button onClick={handleCreatProduct} className="bg-green-300 w-[200px] h-[40px] mx-auto">submit</button>
//                 </div>

//             </div>

//         </Container>
//     )
// }
// export default Dashboard;





