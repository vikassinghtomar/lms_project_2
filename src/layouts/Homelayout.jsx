import {FiMenu} from "react-icons/fi";
import {AiFillCloseCircle} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../components/navbar";
import { Children } from 'react';
import Footer from "../components/Footer"
import { useDispatch, useSelector } from "react-redux";

function Homelayout({children}){
  
  const dispach = useDispatch();
  const nevigate = useNavigate();

  const Isloggedin = useSelector((state) => state?.auth?.Isloggedin);

  const role = useSelector((state) => state?.auth?.role);

  function changewidth(){
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hidedrawer(){
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 0;
  }

  async function handlelogout(e){
    e.preventDefault();
     
    const res = await dispach(logout());
    if(res?.payload?.success){
      nevigate("/");
    }
     
  }



    return(
      <div className="min-h-[90vh]">
        <div className="drawer absolute left-0 z-50 w-fit">
          <input className="drawer-toggle" id="my-drawer" type="checkbox"/>
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="cursor-ponter relative">
              <FiMenu 
              onClick={changewidth}
              size={"32px"}
              className="font-bold text-white m-4"
              />

            </label>
          </div>
          <div className="drawer-side w-0">
            <label htmlFor="my-drawer" className="drawer-overlay"/>
            <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-100 text-base-content relative">
              <li className="w-fit absolute right-2 z-50">
                <button onClick={hidedrawer}>
                  <AiFillCloseCircle size={"24px"}/>
                </button>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              {Isloggedin && role == "Admin" && (
                <li>
                  <Link to="/admin/deshboard">Admin Deshboard</Link>
                </li>
              )}
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/content">Content</Link>
              </li>
              <li>
                <Link to="/aboutus">Aboutus</Link>
              </li>
              
              {!Isloggedin && (
                <li className="absolute bottom-0 w-[80%] ">
                <div className="w-full flex items-center justify-center">
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                    <Link to="/login">Login</Link>
                  </button>
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                    <Link to="/sinup">Sinup</Link>
                  </button>
                  
                </div>
                </li>
              )}


              {Isloggedin && (
                <li className="absolute bottom-4 w-[80%] ">
                <div className="w-full flex items-center justify-center">
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                    <Link to="/user/profile">Profile</Link>
                  </button>
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                    <Link onClick={handlelogout}>Logout</Link>
                  </button>
                  
                </div>
                </li>
              )}


              

            </ul>

          </div>

        </div>

        <Navbar />

         {children}
        
        <Footer/>
         
      </div>
    );
}

export default Homelayout;