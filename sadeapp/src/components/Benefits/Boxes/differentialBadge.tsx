'use client'
import Image, { StaticImageData } from "next/image";
import { Button } from "../../Button/page";

type BenefitsProps = {

    url: StaticImageData;
    titulo : string;
    texto : string;
    
}

export const BenefitsBadge = ({url, titulo, texto} : BenefitsProps) => {
    return(
        <div className="bg-branco rounded-xl flex border-dark border-[1px] border-darkOrange w-[290px] h-[330px] items-center justify-center font-semibold">
            <div className="flex flex-col gap-y-6 items-center max-w-[250px] text-center mx-auto">
                <div className=""><Image src={url} alt="Ícone de diferencial" width={60} height={68} /></div>
                <div className="text-3xl">{titulo}</div>
                <div className="text-darkGray">{texto}</div>
                {/*<div><Button>Leia Mais</Button></div>*/}{/*Botão*/}
            </div>
        </div>
    )
}