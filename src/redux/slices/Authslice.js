import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosinstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}

};

export const createAccount = createAsyncThunk("/auth/sinup" , async(data)=>{
    try{
       const res = axiosInstance.post("user/register", data);
       toast.promise(res,{
        loading: "Wait Account is creating...",
        succsess: (data)=>{
            return data?.data?.message;
        },
        error: "Failed to create Account"
       })

       return (await res).data;
       
    }catch(error){
        toast.error(error?.response?.data?.message)
    }
})

export const login = createAsyncThunk("/auth/login" , async(data)=>{
    try{
       const res = axiosInstance.post("user/login", data);
       toast.promise(res,{
        loading: "Login...",
        succsess: (data)=>{
            return data?.data?.message;
        },
        error: "Failed to login"
       })

       return (await res).data;
       
    }catch(error){
        toast.error(error?.response?.data?.message)
    }
})

export const logout = createAsyncThunk("/auth/logout" , async()=>{
    try{
        const res = axiosInstance.post("user/logout");
        toast.promise(res,{
         loading: "Logout in process...",
         succsess: (data)=>{
            return data?.data?.message;
         },
         error: "Failed to logout"
        })
 
        return (await res).data;
        
    }catch(error){
        toast.error(error?.response?.data?.message)
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(login.fulfilled, (state,action)=>{
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role;
        });
        builder.addCase(logout.fulfilled, (state)=>{
            localStorage.clear();
            state.data = {};
            state.isLoggedIn = false;
            state.role = "";

        });
    }
});

export default authSlice.reducer;