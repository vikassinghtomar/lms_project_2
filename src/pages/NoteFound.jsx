function NoteFound(){
    return(
        <div className="h-screen w-full flex flex-col justify-center items-center bg-yellow-50">
            <h1 className="text-9xl text-red font-extrabold items-center justify-center">
                404
            </h1>
            <p className="text-xl text-green-600 font-bold items-center justify-center">
                !OOPS Page Is Not Exists 
            </p>
        </div>
    );
}

export default NoteFound;
