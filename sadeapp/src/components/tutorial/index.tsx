import Image from "next/image";
import { FaHandPointUp } from "react-icons/fa";

type TutorialProps = {

    number: number,
    text: string,
    imageUrl: any,
};

export default function Tutorial({ number, text, imageUrl }: TutorialProps) {

    return (

        <div className={`${number % 2 == 0 ? "flex flex-row-reverse" : "flex"} bg-darkPurple p-2 py-4 rounded-3xl max-w-full flex-wrap gap-3 px-5 items-center my-9`}>

            <div className={`${number % 2 == 0 ? "flex" : "flex"} max-w-full gap-3`}>

                <div className="flex items-center justify-center bg-darkOrange w-10 h-10 rounded-full">

                    <p className="text-white">{number}</p>

                </div> {/*Numeracao*/}

                <p className="text-white max-w-full w-[400px]">{text}</p> {/*Texto*/}
            </div> {/*Textos*/}

            <div className="overflow-hidden relative">

                <div className="absolute rounded-3xl w-full h-full bg-black/20 cursor-pointer duration-[0.2s] opacity-0 hover:opacity-1">

                    <FaHandPointUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-white"/>
                </div>
                <Image src={imageUrl} alt="Imagem guia" draggable="false" loading="eager" className="max-w-full w-[600px] rounded-3xl"/> {/*Imagem guia*/}

            </div>

        </div>
    );
};
