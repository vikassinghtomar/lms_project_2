import { useState } from "react";

import Homelayout from "../layouts/Homelayout";
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { createAccount } from "../redux/slices/Authslice";


function Login(){

    const nevigate = useNavigate();
    const dispach = useDispatch();
    

    const [loginData,setloginData] = useState({
        email: "",
        password: "",
    });

    function userInputHandeler(event){
        event.preventDefault();
        const {name,value} = event.target;
        setloginData({
            ...loginData,
            [name]: value
        })
    }



   async function onlogin(event){
        event.preventDefault();

        if(!loginData.email || !loginData.password ){
            toast.error("please fill all details");
            return;
        }
        
        if(!loginData.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )){
            toast.error("Invalide email ID");
            return;
        }

        

        const response = await dispach(login(FormData));

        if(response?.payload?.success){
            nevigate("/");
        }

        setloginData({
            
            email: "",
            password: "",
    
        });

        

    }
    return(
        <>
        <Homelayout>
            <div className="relative flex items-center justify-between h-[100vh] overflow-x-auto w-100% ">
                <img src="https://img.freepik.com/vecteurs-libre/mon-illustration-concept-mot-passe_114360-4294.jpg?size=626&ext=jpg&ga=GA1.1.1894639607.1694851729&semt=ais" className="relative left-20"></img>
                <form noValidate onSubmit={onlogin} className="relative right-20 flex flex-col justify-center gap-3 rounded-lg p-10 w-130 shadow-[0_0_10px_orange]">
                    <h1 className="text-center text-2xl font-bold">Login</h1>

                    

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-samibold">Email</label>

                        <input
                            type="email"
                            required
                            name="email"
                            id="email"
                            placeholder="Enter your email..."
                            className="bg-transparent px-2 py-1 border w-60"
                            onChange={userInputHandeler}
                            value={loginData.email}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-samibold">Password</label>

                        <input
                            type="password"
                            required
                            name="password"
                            id="password"
                            placeholder="Enter your password..."
                            className="bg-transparent px-2 py-1 border w-60"
                            onChange={userInputHandeler}
                            value={loginData.password}
                        />
                    </div>

                    <button type="submit" className="bg-green-700 text-white p-2 hover:bg-green-800 font-bold">
                        Login Account
                    </button>

                    <p > 
                        Not having Account ? <Link to="/sinup" className="link text-accent">Sinup</Link> 

                    </p>
                </form>
            </div>

        </Homelayout>
         
        </>
    );
}

export default Login;