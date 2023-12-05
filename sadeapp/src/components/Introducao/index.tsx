import { IoArrowDownCircle } from "react-icons/io5";

export default function Introducao() {

    return(

        <div className="flex flex-col gap-96 bg-darkPurple h-auto p-5 pt-40">

            <div className="flex flex-col w-80 max-w-full px-2">

                <p className="max-w-full text-5xl text-white font-bold mm:text-3xl">Facilite o seu trabalho, e salve vidas.</p>
                <p className="text-gray-300 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div> {/*Textos*/}

            <div className="flex items-center gap-3">

                <IoArrowDownCircle className="text-5xl text-white"/>
                <p className="text-gray-300">Continue navegando</p>
            </div> {/*Continue navegando*/}
        
        </div>
    );
};
