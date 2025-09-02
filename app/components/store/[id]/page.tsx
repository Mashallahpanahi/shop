
import axios from "axios";
import { girlsType } from "../page";

interface oneGirlType {
    params: Promise<{ id: string }>,
    searhParams: Promise<{}>
}

//ok because fatching data should done on server side we can't use hooke like useParams instate of that we take the id by props and passing that by children an by this way we cna coach the id and take that
async function OneGirl({ params }: oneGirlType) {
    const { id } = await params;

    const g = await axios.get<girlsType>(`http://localhost:5000/girlsData/${id}`);
    const oneGirl = g.data;
    return (
        <div className="grid grid-cols-10 mt-10 gap-4 p-4 shadow-sm">

            <div className="col-span-4 grid items-center justify-center">
                <img
                    src={`../${oneGirl.src}`}
                    alt={oneGirl.name}
                    className="rounded-xl"
                />
            </div>
            <div className="col-span-6 text-center mt-14">
                <h1 className="text-2xl font-bold">Name: {oneGirl.name}</h1>
                <h3 className="text-lg">Age: {oneGirl.age}</h3>
                <h3 className="text-lg">Location: {oneGirl.location}</h3>
                <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio nam illum praesentium est itaque assumenda esse
                    obcaecati quo! Suscipit ipsum cumque libero repudiandae
                    dolor nihil voluptate, molestias fuga ex in?
                </p>
                <div className="flex w-[250px] mx-auto justify-center p-6 font-bold">
                    <h1 className="pr-10">cost: </h1>
                    <p className="flex justify-between  w-[200px]">
                        <button className="w-[30px] bg-green-300">+</button>
                        <h1>500</h1>
                        <button className="w-[30px] bg-red-100">−</button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OneGirl;
