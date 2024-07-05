import{FaFreeCodeCamp,FaCode} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar(){

    const [search,setSearch] = useState("");

    const items = [
        // Your array of items (e.g., fetched from an API or hardcoded)
        { id: 1, name: 'data science' },
        { id: 2, name: 'web development ' },
        { id: 3, name: 'app development' },
        // ... other items
    ];

    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    function userInputHandeler(e){
        e.preventDefault();
        const search = e.target.value;
        setSearch(search);
    }


    return(
    <div className="relative absolute top-0 left-0 right-0">
        <nav className="relative flex flex-row items-center h-12 justify-between py-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-100% gap-5 text-white">
            <ul className="relative flex flex-row items-center justify-between gap-5 left-20">
                <li className="cursor-pointer hover:text-cyan-800 hover:text-lg hover:font-bold">Courses</li>
                <li className="cursor-pointer hover:text-cyan-800 hover:text-lg hover:font-bold">Content</li>
                <li className="cursor-pointer hover:text-cyan-800 hover:text-lg hover:font-bold">Tutorials</li>
                <li className="cursor-pointer hover:text-cyan-800 hover:text-lg hover:font-bold">Practice</li>
                <li className="cursor-pointer hover:text-cyan-800 hover:text-lg hover:font-bold" >Job</li>
            </ul>

            <div className="relative flex flex-row items-center">
            <FaFreeCodeCamp className="h-9 w-12 text-rose-700"/>
            <h1 className="text-lg text-orange-900 font-bold">Coder'sHub</h1>
            <FaCode className="h-9 w-12 text-rose-700"/>
        
            </div>
            
            <div className="flex flex-row">

            <div className="relative w-120 h-12 flex flex-row gap-5 right-5 items-center">
              <div className="dropdown dropdown-between">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <input
                
                   type="text" 
                   placeholder="Search Courses" 
                   className="input relative rounded-2xl h-9 text-black border-white w-80 bg-white "
                   value={search}
                   onChange={userInputHandeler}

                />

               </div>
            
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-3 shadow gap-2">
                {filteredItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
                </ul>

                </div>

                
             
           
    
        
            </div>

            <div className="dropdown dropdown-end mr-5">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                     alt="Tailwind CSS Navbar component"
                     src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <ul
                 tabIndex={0}
                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                 <li>
                   <a className="justify-between">
                     Profile
                    <span className="badge">New</span>
                   </a>
                 </li>
                 <li><a>Settings</a></li>
                 <li><a>Logout</a></li>
                </ul>
            </div>

            </div>


        </nav>
    </div>
    );
}

export default Navbar;