'use client'
import Image, {StaticImageData} from "next/image";

type SearchProps = {

    url: StaticImageData;
    titulo: string;
    texto : string;

}

export const SearchBox = ({url, titulo, texto} : SearchProps) => {

    return(

        <div className="bg-branco border-laranja border-[1px] w-[290px] h-[310px] items-center justify-center font-semibold">
            <div className="flex flex-col gap-y-3 items-center max-w-[290px] mx-auto">
                <div><Image src={url} alt="Icone de diferencial" width={60} height={60} /></div>
                <div>{titulo}</div>
                <div className="text-cinzaEscuro">{texto}</div>
            </div>
        </div>

    )

} 