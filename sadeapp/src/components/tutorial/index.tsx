import Image from "next/image";

type TutorialProps = {

    number: number,
    text: string,
    imageUrl: any,
};

export default function Tutorial({ number, text, imageUrl }: TutorialProps) {

    return (

        <div className={`${number % 2 == 0 ? "flex flex-row-reverse" : "flex"} max-w-full flex-wrap gap-3 px-5 items-center my-9`}>

            <div className={`${number % 2 == 0 ? "flex flex-row-reverse" : "flex"} max-w-full gap-3`}>

                <div className="flex items-center justify-center bg-darkPurple w-10 h-10 rounded-full">

                    <p className="text-white">{number}</p>

                </div> {/*Numeracao*/}

                <p className="max-w-full w-[400px]">{text}</p> {/*Texto*/}
            </div> {/*Textos*/}

            <Image src={imageUrl} alt="Imagem guia" draggable="false" loading="eager" className="max-w-full w-[600px] rounded-3xl"/> {/*Imagem guia*/}

        </div>
    );
};
