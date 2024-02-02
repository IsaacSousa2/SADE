'use client'
import { IconBaseProps } from 'react-icons'
import { Button } from "../../Button/page"

type DifferentialProps = {
    icon: IconBaseProps,
    titulo : string;
    texto : string;
}

export const BenefitsBadgeOrange = ({icon, titulo, texto} : DifferentialProps) => {
    return(

        <div className="text-white bg-gradient-to-t from-darkOrange to-lightOrange rounded-xl flex  border-[1px] w-[290px] h-items-center justify-center font-semibold">{/*DIV PRIMARIA*/}

            <div className="flex flex-col gap-y-6 items-center max-w-[270px] text-center mx-auto p-3 justify-center">{/*DIV SECUNDARIA*/}

                <div className=""><>{icon}</></div>{/*IMAGEM DO BOX*/}

                <div className="text-3xl text-branco">{titulo}</div>{/*TITULO OD BOX*/}

                <div className="text-branco">{texto}</div>{/*TEXTO DO BOX*/}

            </div>

        </div>
    )
}