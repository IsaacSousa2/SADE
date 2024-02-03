import Image from "next/image";

type ZoomImagemProps = {

    image: any,
};

export default function ZoomImagem({image}: ZoomImagemProps) {

    return(

        <div className="z-20 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-2 max-w-full">

            <div className="max-w-full w-[1000px]">

                <Image src={image} alt="Imagem de tutorial" className="max-w-full"/>
            
            </div>

        </div>
    );
};
