'use client'
import Image, { StaticImageData } from "next/image"
import { Button } from "../../Button/button"

type DifferentialProps = {
    url: StaticImageData,
    titulo : string;
    texto : string;
}

export const DifferentialBadge = ({url, titulo, texto} : DifferentialProps) => {
    return(
        <div className="bg-branco rounded-xl flex border-roxoEscuro border-[1px] w-[290px] h-[310px] items-center justify-center font-semibold text-center">
            <div className="flex flex-col gap-y-3 items-center max-w-[290px] mx-auto">
                <div className=""><Image src={url} alt="Imagem de Pasta" width={60} height={60} /></div>
                <div className="text-2xl">{titulo}</div>
                <div className="text-cinzaEscuro">{texto}</div>
                {/*<div><Button>Leia Mais</Button></div>*/}{/*Botão*/}
            </div>
        </div>
    )
}