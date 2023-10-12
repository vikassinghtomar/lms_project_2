import{FaFreeCodeCamp,FaCode} from "react-icons/fa";

function Navbar(){
    return(
    <>
        <nav className="relative flex flex-row items-center h-12 justify-between py-8 bg-emerald-600 w-100% gap-5 text-white">
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
            


           <div className="relative bg-emerald-600 w-120 h-12 flex flex-row gap-5 right-5 items-center justify-between">
           <input type="text" placeholder="Search Courses" className="input relative rounded-2xl h-9 text-black border-white w-80 "/>
           
           <img src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" className="relative h-8 w-9 rounded-full w-fit content-fit"/>
        
           </div>


        </nav>
    </>
    );
}

export default Navbar;