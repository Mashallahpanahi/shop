
export interface girlType {
    id: string,
    src: string,
    name: string,
    age: number,
    location: string,
    cost: number
}

const ProductItems = ({ id, src, name, age, location, cost }: girlType) => {
    return (
        <div className=" grid justify-center shadow-sm">
            <div>
                <img className="w-[200px] h-[200px] pt-4" src={src} alt="" />
                <div>
                    <h1>Name: {name}</h1>
                    <h3>Age: {age}</h3>
                    <h3>Locaion: {location}</h3>
                    <h3>cost: {cost}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductItems;