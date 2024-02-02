import Carrosel from "./carrosel";
import { IoArrowDownCircle } from "react-icons/io5";

export default function Introducao() {

    return(

        <div className="flex items-center justify-between bg-darkPurple p-5 pb-40 pt-20 xl:flex-col">

            <div className="flex flex-col gap-20 max-w-full">

                <div className="flex flex-col w-[400px] mt-16 max-w-full px-2">

                    <p className="max-w-full text-5xl text-white font-bold mm:text-3xl">Facilite o seu trabalho, e salve vidas.</p>
                    <p className="text-gray-300 text-justify">Um sistema para administrar atendimentos de forma integrada a dispositivos de imagem, a partir de agora referido como SADE.</p>

                </div> {/*Textos*/}

                <a href="#Sobre">
                    <div className="flex items-center gap-3 duration-[0.2s] cursor-pointer hover:scale-105">

                        <IoArrowDownCircle className="text-5xl text-white"/>
                        <p className="text-gray-300">Continue navegando</p>

                    </div> {/*Continue navegando*/}
                </a>

            </div>

            <Carrosel/>
        
        </div>
    );
};
