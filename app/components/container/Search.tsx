
"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
    const [search, setSearch] = useState("")

    const router = useRouter()
    const searchParams = useSearchParams()

    function handleClick() {
        const currentSearchParams = new URLSearchParams(searchParams.toString())
        currentSearchParams.set("name", search)
        router.push(`/components/store?${currentSearchParams.toString()}`)
    }
    return (
        <div>
            <button onClick={handleClick} className="bg-green-400 p-2 rounded-full ">Search</button>
            <input onChange={(e) => setSearch(e.target.value)} className="bg-slate-100 p-2 w-[50%] rounded-full" type="text" placeholder="Srarch" />

        </div>
    )
}
export default Search;