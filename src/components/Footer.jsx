import { BsFacebook,BsLinkedin,BsInstagram,BsTwitter, BsGithub } from "react-icons/bs";

const currentyear = new Date();
const year = currentyear.getFullYear();
function Footer(){

    return(
        <>
           <footer className="relative flex justify-center bottom-0 bg-blue-800 align-center text-white py-5 items-center justify-between">

            <section className="relative left-12">
                CopyRight@{year} All Right Reserved.
                <section className="relative flex gap-10 h-12 items-center">
                <BsInstagram className="hover:text-yellow-600 h-9 w-6" />
                <BsLinkedin className="hover:text-blue-400 cursor-pointer h-9 w-6" />
                <BsTwitter className="hover:text-green-600 h-9 w-6"/>
                <BsFacebook className="hover:text-blue-600 h-9 w-6"/>
                
                </section>
            
            </section>

            <section>
                <h1 className="text-lg text-orange-400">
                    COURSES
                </h1>
                <ul className="relative top-2 flex flex-col right-20 text-green-400">
                    <li className="cursor-pointer hover:text-rose-950 hover:text-bold">Data structures and Algorithms</li>
                    <li>Web Development</li>
                    <li>Data Science</li>
                    <li>Machine Learning and AI</li>
                    <li>Robotics Process Automations</li>
                    <li>Android Development</li>
                </ul>
            </section>

            <section>
                <h1 className="text-lg text-orange-400">
                    WEB Development
                </h1>
                <ul className="relative top-2 flex flex-col right-20 text-green-400 cursor-pointer">
                    <li>HTML</li>
                    <li>css</li>
                    <li>JavaScript</li>
                    <li>react JS</li>
                    <li>Bootstrap</li>
                    <li>Angular JS</li>
                    <li>Tailwind CSS</li>
                    <li>Express JS</li>
                    <li>Node Js</li>
                </ul>
            </section>

            <section>
                <h1 className="relative right-3 text-lg text-orange-400">
                    Languages
                </h1>
                <ul className="relative top-2 flex flex-col right-20 text-green-400 cursor-pointer">
                    <li>HTML</li>
                    <li>css</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>Ruby</li>
                    <li>C</li>
                    <li>c#</li>
                    <li>PHP</li>
                    <li>GoLang</li>

                </ul>
            </section>

           </footer>
           <section className="relative flex justify-center bg-orange-400 align-center text-white py-2 items-center justify-between">
               <h2 className="relative left-20"> @Coder'sChoise,ShivShakti Education Private Limited,All right reserved.</h2>

              <h1 className="flex flex-row items-center relative right-20 gap-5"> Github <BsGithub className="h-9 w-6"/></h1> 
              
           </section>
        </>
    );

}

export default Footer;