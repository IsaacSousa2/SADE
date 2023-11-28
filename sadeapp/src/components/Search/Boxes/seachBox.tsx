'use client'
import Image, {StaticImageData} from "next/image";

type SearchProps = {

    url: StaticImageData;
    titulo: string;
    texto : string;

}

export const SearchBox = ({url, titulo, texto} : SearchProps) => {

    return(

        <div className="bg-branco border-darkOrange border-[1px] w-[290px] h-[310px] rounded-lg items-center justify-center font-semibold">
            <div className="flex flex-col gap-y-3 items-center max-w-[250px] mx-auto text-xl">
                <div><Image src={url} alt="Icone de diferencial" width={60} height={60} /></div>
                <div className="text-3xl" >{titulo}</div>
                <div className="text-darkGray">{texto}</div>
            </div>
        </div>

    )

} 