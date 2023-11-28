'use client'/*CONVERTENDO PARA CLIENT COMPONENTS*/
import Image, { StaticImageData } from "next/image";/*IMPORTANDO O HOOK DE IMAGE E TYPE*/
import { Button } from "../../Button/page";/*IMPORTANDO COMPONENT DO BOTÃO*/

/*TIPAGEM*/
type DifferentialProps = {

    url: StaticImageData;
    titulo : string;
    texto : string;
    
}

export const DifferentialBadge = ({url, titulo, texto} : DifferentialProps) => {

    return(
        
        <div className="bg-branco rounded-xl flex border-dark border-[1px] border-darkPurple w-[290px] h-[310px] items-center justify-center font-semibold text-center">{/*DIV PRINCIPAL*/}

            <div className="flex flex-col gap-y-3 items-center max-w-[290px] mx-auto">{/*DIV SECUNDARIA*/}

                <div className=""><Image src={url} alt="Ícone de diferencial" width={60} height={60} /></div>{/*IMAGEM DO BOX*/}

                <div className="text-2xl">{titulo}</div>{/*TITULO DO BOX*/}

                <div className="text-darkGray">{texto}</div>{/*TEXTO DO BOX*/}

                {/*<div><Button>Leia Mais</Button></div>*/}{/*Botão*/}

            </div>

        </div>

    )
}