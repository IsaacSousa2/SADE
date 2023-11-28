'use client'/*CONVERTENDO PARA CLIENT COMPONENTS*/
import Image, { StaticImageData } from "next/image";/*IMPORTANDO O HOOK DE IMAGE E TYPE*/
import { Button } from "../../Button/page";/*IMPORTANDO COMPONENT DO BOTÃO*/

/*TIPAGEM*/
type BenefitsProps = {

    url: StaticImageData;
    titulo : string;
    texto : string;
    
}

export const BenefitsBadge = ({url, titulo, texto} : BenefitsProps) => {

    return(

        <div className="bg-branco rounded-xl flex border-dark border-[1px] border-darkOrange w-[290px] h-[330px] items-center justify-center font-semibold">{/*DIV PRINCIPAL*/}

            <div className="flex flex-col gap-y-6 items-center max-w-[250px] text-center mx-auto">{/*DIV SECUNDARIA*/}

                <div className=""><Image src={url} alt="Ícone de diferencial" width={60} height={68} /></div>{/*IMAGEM DO BOX*/}

                <div className="text-3xl">{titulo}</div>{/*TITULO DO BOX*/}

                <div className="text-darkGray">{texto}</div>{/*TEXTO DO BOX*/}

                {/*<div><Button>Leia Mais</Button></div>*/}{/*BOTÃO*/}

            </div>

        </div>

    )
}