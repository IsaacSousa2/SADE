import { IoArrowDownCircle } from "react-icons/io5";

export default function Introducao() {

    return(

        <div className="flex flex-col gap-20 bg-darkPurple h-[700px] p-5 pt-40">

            <div className="flex flex-col w-[400px] mt-16 max-w-full px-2">

                <p className="max-w-full text-5xl text-white font-bold mm:text-3xl">Facilite o seu trabalho, e salve vidas.</p>
                <p className="text-gray-300 text-justify">Um sistema para administrar atendimentos de forma integrada a dispositivos de imagem, a partir de agora referido como SADE.</p>

            </div> {/*Textos*/}

            <div className="flex items-center gap-3">

                <IoArrowDownCircle className="text-5xl text-white"/>
                <p className="text-gray-300">Continue navegando</p>

            </div> {/*Continue navegando*/}
        
        </div>
    );
};
