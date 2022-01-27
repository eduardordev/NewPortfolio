import Image from 'next/image'
import mypic from '../../public/stormtrooper.png'

export const Profile = () => {
    return(
        <div className="w-1/3 bg-zinc-900 p-4 rounded-xl justify-center items-center flex flex-col">
          <h1 className="text-2xl font-bold text-white font-montserrat">
            Eduardo Ramírez
          </h1>
          <div>
                <Image
                    src={mypic}
                    className=""
                    width="144px"
                    height="144px"
                />
            </div>
          <h2 className="text-zinc-400 font-work-sans font-normal text-base text-center">Web Developer | UX/UI Design Computer Science Student</h2>
          <hr className="w-full border-zinc-700 my-4 rounded-xl"/>
          <p className="text-zinc-400 font-work-sans font-normal text-base text-justify p-2">este es un texto donde podre poner mi descripcion y todo lo que hago xd</p>
          
        </div>
    );
};