'use client';
import { useState } from "react";
import { Header } from "@/components/Header/header";
import Tutorial from "@/components/tutorial";
import ZoomImagem from "@/components/zoomImagem";
import Imagem1 from "../../../public/images//Tutorialimg/Imagem1.png"
import Imagem2 from "../../../public/images//Tutorialimg/Imagem2.png"
import Imagem3 from "../../../public/images//Tutorialimg/Imagem3.png"
import Imagem4 from "../../../public/images//Tutorialimg/Imagem4.png"
import Imagem5 from "../../../public/images//Tutorialimg/Imagem5.png"
import Imagem6 from "../../../public/images//Tutorialimg/Imagem6.png"
import { StaticImageData } from "next/image";
import { IoCloseCircle } from "react-icons/io5";

export default function tutorial() {

    const[ zoom, setZoom ] = useState(false);
    const[ imagem, setImage ] = useState<StaticImageData>();

    return(
        
        <>  
            <Header/>
            { zoom ? <div onClick={() => {setZoom(false)}} className="z-20 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/20 w-full h-full"></div> : <></> } {/*Fundo*/}
            { zoom ? <ZoomImagem image={imagem}/> : <></> }
            
            <div className="flex flex-col items-center pt-40">

                <Tutorial onClick={() => {setImage(Imagem1); setZoom(true)}} number={1} text="1 - Ao abrir o nosso sistema, irá aparecer algumas opções para você, como a aba de pacientes e profissionais." imageUrl={Imagem1}/>
                <Tutorial onClick={() => {setImage(Imagem2); setZoom(true)}} number={2} text="2 - Caso queira ver todos os pacientes cadastrados no seu sistema junto com suas informações, aqui você verá não apenas isso, como poderá adicionar atendimentos, editar e ver históricos de atendimentos. Mas caso queira adicionar outro paciente, clique no botão “Adicionar”." imageUrl={Imagem2}/>
                <Tutorial onClick={() => {setImage(Imagem6); setZoom(true)}} number={3} text="3 - Importante ressaltar que caso queira enviar os dados dos exames para o paciente, clique no botão do acesso, irá aparecer um pop-up com duas opções, escolha a que lhe parecer melhor.”." imageUrl={Imagem6}/>
                <Tutorial onClick={() => {setImage(Imagem3); setZoom(true)}} number={4} text="4 - Após preencher todo o formulário do paciente, clique em salvar para registrar o paciente." imageUrl={Imagem3}/>
                <Tutorial onClick={() => {setImage(Imagem4); setZoom(true)}} number={5} text="5 - Da mesma forma que podemos ver os pacientes, também podemos ver a dos profissionais que estão cadastrados, e caso queira adicionar outro profissional, clique no botão “Adicionar”." imageUrl={Imagem4}/>
                <Tutorial onClick={() => {setImage(Imagem5); setZoom(true)}} number={6} text="6 -  Após preencher todo o formulário do paciente, clique em salvar para registrar o paciente.5 -  Após preencher todo o formulário do paciente, clique em salvar para registrar o paciente.”." imageUrl={Imagem5}/>
                
            </div>

        </>
    );
};
