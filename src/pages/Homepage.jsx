import Homelayout from "../layouts/Homelayout";

function Homepage(){
    return(
        <div>
            <Homelayout>
              <div className="relative bg-green-100 w-100% justify-between items-center">
                <div className="relative mt-6 mb-7">
                <img src="https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?s=612x612&w=0&k=20&c=Ib8RLw3_eCOo9N3YE4pvp9rcb_WmirjS-9x9R-vTd68=" className="relative rounded-3xl"/>
                </div>
              </div>
            </Homelayout>
        </div>
    );
}

export default Homepage;