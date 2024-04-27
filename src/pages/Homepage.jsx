import Homelayout from "../layouts/Homelayout";

function Homepage(){
    return(
        <>
            <Homelayout>
              <div className="relative bg-green-100 items-center">
                <div className="items-center flex gap-10 py-7">
                <img src="https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?s=612x612&w=0&k=20&c=Ib8RLw3_eCOo9N3YE4pvp9rcb_WmirjS-9x9R-vTd68=" className="object-cover rounded-3xl"/>
                <div className="relative justify-between flex-col items-center ">
                <h1 className="text-4xl text-yellow-600 font-bold">
                  Afordable And Quality Education For Every One
                </h1>

                <p className="flex items-center gap-5 mt-10 mr-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet adipisci eligendi fuga saepe voluptate facere commodi quas? Tempore blanditiis, nihil explicabo alias dignissimos molestiae id aperiam quis omnis deserunt dolores, quas in molestias. Veniam labore, quasi commodi saepe rerum consequatur? Sint atque nam debitis quisquam eaque totam, sunt dolorum.
                </p>
                </div>
                </div>
                
              </div>
            </Homelayout>
        </>
    );
}

export default Homepage;