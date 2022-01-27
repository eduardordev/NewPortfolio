import Image from 'next/image'
import mypic from '../../public/stormtrooper.png'

export const Profile = () => {
    return(
        <div className="w-3/5 h-full p-4  justify-center items-center flex flex-row">
            <div className="w-1/2 justify-center items-center flex">
                <Image
                    src={mypic}
                    className=""
                    width="200px"
                    height="200px"
                />
            </div>
            <div className="w-1/2  flex flex-col ">
                <h1 className="text-2xl font-bold text-white font-montserrat">
                Eduardo Ramírez
                </h1>
                <h2 className="text-white font-work-sans font-normal text-xs text-justify">Web Developer | UX/UI Design | Computer Science Student</h2>
                <hr className="w-full border-zinc-700 my-4 rounded-xl"/>
                <p className="text-zinc-400 font-work-sans font-normal text-base text-justify ">este es un texto donde podre poner mi descripcion y todo lo que hago xd</p>
            </div>
          
        </div>
    );
};