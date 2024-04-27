import Homelayout from "../layouts/Homelayout";

function Aboutus (){
    return(
        <>
        <Homelayout>
           <div className="pl-20 pt-20 pb-20 flex flex-col bg-blue-100 text-black">
            <div className="flex-col items-center gap-6 mx-10">
                <h1 className="text-4xl text-yellow-600 font-bold">
                        Afordable And Quality Education For Every One
                </h1>
                <p className="flex items-center gap-5 mx-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet adipisci eligendi fuga saepe voluptate facere commodi quas? Tempore blanditiis, nihil explicabo alias dignissimos molestiae id aperiam quis omnis deserunt dolores, quas in molestias. Veniam labore, quasi commodi saepe rerum consequatur? Sint atque nam debitis quisquam eaque totam, sunt dolorum.
                </p>
            </div>

            
           </div>

        </Homelayout>

        </>
    );
}

export default Aboutus;