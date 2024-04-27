import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import Homelayout from "../layouts/Homelayout";
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { createAccount } from "../redux/slices/Authslice";

function Sinup(){

    const nevigate = useNavigate();
    const dispach = useDispatch();
    const [previewImage, setPreviewImage] = useState("");

    const [sinupData,setsinupData] = useState({
        fullName: "",
        email: "",
        password: "",
        avatar: ""
    });

    function userInputHandeler(event){
        event.preventDefault();
        const {name,value} = event.target;
        setsinupData({
            ...sinupData,
            [name]: value
        })
    }

    function imageHandeler(event){
        event.preventDefault();

        const uploadedImage = event.target.files[0];

        if(uploadedImage){
            setsinupData({
                ...sinupData,
                avatar: uploadedImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load" , function(){
                setPreviewImage(this.result);
            })
        }
    }

   async function createNewAccount(event){
        event.preventDefault();

        if(!sinupData.email || !sinupData.password || !sinupData.fullName){
            toast.error("please fill all details");
            return;
        }
        if(sinupData.fullName.length<5){
            toast.error("Name should be atleast five charecter");
            return;
        }
        if(!sinupData.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )){
            toast.error("Invalide email ID");
            return;
        }

        const formdata = new FormData();
        formdata.append("fullName",sinupData.fullName);
        formdata.append("email",sinupData.email);
        formdata.append("password",sinupData.password);
        formdata.append("avatar",sinupData.avatar);

        const response = await dispach(createAccount(FormData));

        if(response?.payload?.success){
            nevigate("/");
        }

        setsinupData({
            fullName: "",
            email: "",
            password: "",
            avatar: ""
        });

        setPreviewImage("");

    }
    return(
        <>
        <Homelayout>
            <div className="relative flex items-center justify-between h-[100vh] overflow-x-auto w-100% ">
                <img src="https://img.freepik.com/vecteurs-libre/mon-illustration-concept-mot-passe_114360-4294.jpg?size=626&ext=jpg&ga=GA1.1.1894639607.1694851729&semt=ais" className="relative left-20"></img>
                <form noValidate onSubmit={createNewAccount} className="relative right-20 flex flex-col justify-center gap-3 rounded-lg p-10 w-130 shadow-[0_0_10px_orange]">
                    <h1 className="text-center text-2xl font-bold">Registration</h1>
                    <label htmlFor="image_upload" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage}/>
                        ):(
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto"/>
                        )}
                        <input
                            onChange={imageHandeler}
                            className="hidden" 
                            type="file"
                            name="image_upload"
                            id="image_upload"
                            accept=".jpg,.jpeg,.png,.svg"
                        />
                    </label>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-samibold">Name</label>

                        <input
                            type="text"
                            required
                            name="fullName"
                            id="fullName"
                            placeholder="Enter your name..."
                            className="bg-transparent px-2 py-1 border w-60"
                            onChange={userInputHandeler}
                            value={sinupData.fullName}
                        />
                    </div>

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
                            value={sinupData.email}
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
                            value={sinupData.password}
                        />
                    </div>

                    <button type="submit" className="bg-green-700 text-white p-2 hover:bg-green-800 font-bold">
                        Create Account
                    </button>

                    <p > 
                        Already Have An Account ? <Link to="/login" className="link text-accent">Login</Link> 

                    </p>
                </form>
            </div>

        </Homelayout>
         
        </>
    );
}

export default Sinup;