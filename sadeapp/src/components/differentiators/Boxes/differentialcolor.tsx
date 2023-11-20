'use client'
import Image, { StaticImageData } from "next/image"
import { Button } from "../../Button/page"

type DifferentialProps = {
    url: StaticImageData,
    titulo : string;
    texto : string;
}

export const DifferentialBadgePurple = ({url, titulo, texto} : DifferentialProps) => {
    return(
        <div className="bg-gradient-to-t from-roxoEscuro to-roxoClaro rounded-xl flex  border-[1px] w-[290px] h-[310px] items-center justify-center font-semibold">
            <div className="flex flex-col gap-y-3 items-center max-w-[270px] mx-auto p-3 text-center">
                <div className=""><Image src={url} alt="Imagem de Pasta" width={60} height={60} /></div>
                <div className="text-2xl text-branco">{titulo}</div>
                <div className="text-branco">{texto}</div>
                {/*
                <div>
                    <a href="#">
                        <button className="bg-branco text-roxoEscuro w-[140px] h-[40px] rounded-md hover:bg-roxoClaro  duration-[0.7s]">Leia Mais</button>
                    </a>
                </div>
                */} {/*Botão*/}
                
            </div>
        </div>
    )
}