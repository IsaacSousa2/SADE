type PlanosCompoProps = {

    title: string,
    benefits: string,
};

export default function PlanosCompo({title, benefits}: PlanosCompoProps) {

    return(

        <div className="bg-darkPurple p-2 rounded-3xl w-[320px] h-[500px]">
            <p className="text-white text-4xl">{title}</p>
            <p className="text-white">{benefits}</p>
        </div>
    );
};
