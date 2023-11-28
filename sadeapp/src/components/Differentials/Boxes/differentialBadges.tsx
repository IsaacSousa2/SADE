'use client'
import Image, { StaticImageData } from "next/image";
import { Button } from "../../Button/page";

type DifferentialProps = {

    url: StaticImageData;
    titulo : string;
    texto : string;
    
}

export const DifferentialBadge = ({url, titulo, texto} : DifferentialProps) => {
    return(
        <div className="bg-branco rounded-xl flex border-dark border-[1px] border-darkPurple w-[290px] h-[310px] items-center justify-center font-semibold text-center">
            <div className="flex flex-col gap-y-3 items-center max-w-[290px] mx-auto">
                <div className=""><Image src={url} alt="Ícone de diferencial" width={60} height={60} /></div>
                <div className="text-2xl">{titulo}</div>
                <div className="text-darkGray">{texto}</div>
                {/*<div><Button>Leia Mais</Button></div>*/}{/*Botão*/}
            </div>
        </div>
    )
}