'use client'
import Image from "next/image"
import logoBranco from "../../public/images/logoBranco.png"
import menuHamburguer from "../../public/images/menuHamburguer.png"
import xIcon from "../../public/images/xIcon.png"
import { useState } from "react";
export default function Header(){
    const[menuAtivado, setMenuAtivado] = useState(false);
    function abrirMenu() {
    
        if (menuAtivado == false) {
            setMenuAtivado(true);
        }
        else {
            setMenuAtivado(false);
        }
    }
    return(
        <header className="bg-roxoClaro w-full h-14 items-center border-b-white text-center" id="Header">
            <div className="w-full p-2 flex justify-between max-w-[1700px] mx-auto">
                <div className="">
                    <Image src={logoBranco} alt={"Logo Sade Branco"} className=""/>
                </div>
                <div id="menu" className={`text-cinza flex gap-7 md:gap-20 items-center md:flex-col md:duration-[0.7s] md:right-[0] ${menuAtivado? 'animate-showsidebar md:bg-roxoClaro md:p-4 md:absolute md:w-40 md:h-full md:mr-[-400px]' : 'animate-removesidebar md:hidden md:mt-[-400px]'}}`}>
                    <button className="items-center hidden md:block justify-center border-#fff border-solid border-2" onClick={abrirMenu}>
                        <Image src={xIcon} alt={"Ícone para cancelar"}/>
                    </button>
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">HOME</a>
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">SOBRE</a>
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">DOCUMENTOS</a>
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">PLANOS</a>
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">CONTATO</a>
                </div>
                <div className="items-center hidden md:block">
                    <button className="items-center hidden md:block justify-center border-#fff border-solid border-2 mt-1" onClick={abrirMenu}>
                        <Image src={menuHamburguer} alt={"Menu Hamburguer"}/>
                    </button>
                </div> 
            </div>
        </header>
    )
}