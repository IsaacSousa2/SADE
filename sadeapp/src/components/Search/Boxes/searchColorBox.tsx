'use client'
import Image, { StaticImageData } from 'next/image';

type ColorProps = {

    url : StaticImageData;
    titulo : string;
    texto : string;

}


export const SearchColorBox = ({url, titulo, texto} : ColorProps) => {

    return(

        <div className='bg-gradient-to-t from-laranja to-laranjaClaro border-laranja rounded-lg border-[1px] w-[290px] h-[310px] items-center justify-center font-semibold'>
            <div className='flex flex-col gap-y-3 items-center max-w-[250px] mx-auto text-xl'>
                <div className=''><Image src={url} alt='diferencial' width={60} height={60} /></div>
                <div className='text-branco text-3xl'>{titulo}</div>
                <div className='text-branco'>{texto}</div>
            </div>
        </div>

    )

}