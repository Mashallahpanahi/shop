
// "use client"

// import { useState } from "react";
// import Container from "../components/container/Container";
// import axios from "axios";
// import Cookie from 'js-cookie'
// import { redirect } from "next/navigation";


// const Login = () => {
//     const [userName, setUserName] = useState("")
//     const [password, setPassword] = useState("")


//     function handleLogin() {
//         //this is for real backend when you want to chack the user is login or not
//         // const data = axios({
//         //     url: "/login",
//         //     method: "POST",
//         //     data: {
//         //         userName: userName,
//         //         password: password
//         //     }
//         // })

//         const respons = {
//             token: {
//                 userName: "panahi",
//                 password: "123"
//             },
//             expire: 7
//         }
//         Cookie.set("token", respons.token.userName && respons.token.password, { expires: respons.expire })     //make cookie as nameOf token and give the value
//         redirect('/dashboard')
//     }

//     return (
//         <Container>
//             <div className="flex flex-col gap-4 max-w-[400px] mx-auto mt-[150px] p-8 shadow-lg bg-slate-100 rounded-md">
//                 <input onChange={(e) => setUserName(e.target.value)} className="p-2" type="text" placeholder="user Name" />
//                 <input onChange={(e) => setPassword(e.target.value)} className="p-2" type="password" placeholder="password" />
//                 <button onClick={handleLogin} className="bg-green-300 p-2">Login</button>
//             </div>
//         </Container>
//     )
// }

// export default Login;














"use client"

import { useState } from "react";
import Container from "../components/container/Container";
import Cookie from 'js-cookie'
import { useRouter } from "next/navigation";

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();

    function handleLogin() {
        // fake response for demo
        const respons = {
            token: {
                userName: "panahi",
                password: "123"
            },
            expire: 7
        }

        // check if username & password are correct
        if (userName === respons.token.userName && password === respons.token.password) {
            // set cookie with username as value
            Cookie.set("token", userName, { expires: respons.expire });
            router.push("/dashboard");
        } else {
            alert("Invalid username or password");
        }
    }

    return (
        <Container>
            <div className="flex flex-col gap-4 max-w-[400px] mx-auto mt-[150px] p-8 shadow-lg bg-slate-100 rounded-md">
                <input onChange={(e) => setUserName(e.target.value)} className="p-2" type="text" placeholder="user Name=panahi" />
                <input onChange={(e) => setPassword(e.target.value)} className="p-2" type="password" placeholder="password=123" />
                <button onClick={handleLogin} className="bg-green-300 p-2">Login</button>
            </div>
        </Container>
    )
}

export default Login;
