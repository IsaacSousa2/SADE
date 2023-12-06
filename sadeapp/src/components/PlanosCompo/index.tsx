type PlanosCompoProps = {

    title: string,
    benefits: any,
};

export default function PlanosCompo({title, benefits}: PlanosCompoProps) {

    return(

        <div className="flex flex-col justify-between gap-3 bg-gradient-to-b from-lightPurple to-darkPurple px-3 py-3 rounded-3xl w-[320px] h-[420px]">

            <div className="flex flex-col gap-5">
                <p className="text-white text-4xl">{title}</p>

                <div>
                {benefits}
                </div> {/*Beneficio*/}

            </div> {/*Titulo e beneficio*/}

            <div className="bg-white rounded-2xl p-2 duration-[0.2s] cursor-pointer hover:brightness-90">

                <p className="text-darkPurple text-center">Saiba mais</p>
            </div> {/*Btn*/}
        </div>
    );
};
