import PlanosCompo from "../PlanosCompo";
import { TitlePlanos } from "../Title/title planos";
import { GiDiamonds } from "react-icons/gi";

export default function Planos() {

    return(

        <>

            <TitlePlanos/>

            <div className="flex flex-wrap items-center justify-center gap-5 px-5">

                <PlanosCompo title="Pacs" benefits={
                    <>
                        <div className="flex items-center gap-3">  

                            <GiDiamonds className="text-2xl text-white"/>
                            <p className="text-white">Lorem</p> 
                        </div>
                        <div className="flex items-center gap-3">  

                            <GiDiamonds className="text-2xl text-white"/>
                            <p className="text-white">Lorem</p> 
                        </div>
                        <div className="flex items-center gap-3">  

                            <GiDiamonds className="text-2xl text-white"/>
                            <p className="text-white">Lorem</p> 
                        </div>
                    </>
                }/>
                <PlanosCompo title="Worklists" benefits={
                    <>
                        <div className="flex items-center gap-3">  

                            <GiDiamonds className="text-2xl text-white"/>
                            <p className="text-white">Lorem</p> 
                        </div>
                        <div className="flex items-center gap-3">  

                            <GiDiamonds className="text-2xl text-white"/>
                            <p className="text-white">Lorem</p> 
                        </div>
                        <div className="flex items-center gap-3">  

                            <GiDiamonds className="text-2xl text-white"/>
                            <p className="text-white">Lorem</p> 
                        </div>
                    </>
                }/>
                <PlanosCompo title="Laudos" benefits={
                    <>
                        <div className="flex items-center gap-3">  

                            <GiDiamonds className="text-2xl text-white"/>
                            <p className="text-white">Lorem</p> 
                        </div>
                        <div className="flex items-center gap-3">  

                            <GiDiamonds className="text-2xl text-white"/>
                            <p className="text-white">Lorem</p> 
                        </div>
                        <div className="flex items-center gap-3">  

                            <GiDiamonds className="text-2xl text-white"/>
                            <p className="text-white">Lorem</p> 
                        </div>
                    </>
                }/>
            </div>
        </>
    );
};
