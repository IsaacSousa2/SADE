'use client'
import Image, { StaticImageData } from "next/image"
import { Button } from "../../Button/page"

type DifferentialProps = {
    url: StaticImageData,
    titulo : string;
    texto : string;
}

export const BenefitsBadgeOrange = ({url, titulo, texto} : DifferentialProps) => {
    return(

        <div className="text-white bg-gradient-to-t from-darkOrange to-lightOrange rounded-xl flex  border-[1px] w-[290px] h-[330px] items-center justify-center font-semibold">{/*DIV PRIMARIA*/}

            <div className="flex flex-col gap-y-6 items-center max-w-[250px] text-center mx-auto p-3">{/*DIV SECUNDARIA*/}

                <div className=""><Image src={url} alt="´=Icone de diferencial" width={60} height={68} /></div>{/*IMAGEM DO BOX*/}

                <div className="text-3xl text-branco">{titulo}</div>{/*TITULO OD BOX*/}

                <div className="text-branco">{texto}</div>{/*TEXTO DO BOX*/}

              {/* 
                <div>
                    <a href="#">
                        <Button className="bg-branco text-darkPfrom-darkPurple w-[140px] h-[40px] rounded-md hover:bg-lightPurple  duration-[0.7s]">Leia Mais</Button>
                    </a>
                </div>
                 */} {/*Botão*/}
                

            </div>

        </div>
    )
}