import PlanosCompo from "../PlanosCompo";
import { TitlePlanos } from "../Title/title planos";

export default function Planos() {

    return(

        <>

            <TitlePlanos/>

            <div className="flex items-center justify-center gap-5 px-5">

                <PlanosCompo title="Plano 1" benefits="dada"/>
            </div>
        </>
    );
};
