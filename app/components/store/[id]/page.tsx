
import axios from "axios";
import { girlsType } from "../page";
import AddToCart from "../../container/AddToCart";

interface oneGirlType {
    params: { id: string },
    searchParams?: {}
}

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
                </p>
                <div>
                    <AddToCart id={id} />
                </div>
            </div>
        </div>
    );
}

export default OneGirl;
