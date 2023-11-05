'use client'/*Transformando em client components*/ 
import Image from "next/image"/*Importando o hook Image*/
import logoBranco from "../../public/images/logoBranco.png"/*Importando logo*/
import menuHamburguer from "../../public/images/menuHamburguer.png"/*Importando menu hamburguer*/
import xIcon from "../../public/images/xIcon.png"/*Importando icone de fechar*/
import { useState } from "react";/*Importando hook useState*/
export default function Header(){
    const[menuAtivado, setMenuAtivado] = useState(false);/* */
    function abrirMenu() {
        if (menuAtivado == false) {setMenuAtivado(true);}
        else {setMenuAtivado(false);}}/*estrutura de condição para menu hamburguer*/
    return(
        <header className="bg-roxoClaro w-full h-14 items-center border-b-white text-center" id="Header">{/* HEADER */}
            <div className="w-full p-2 flex justify-between max-w-[1700px] mx-auto">{/* DIV PRINCIPAL */}
                <div className=""> {/* LOGO SADE BRANCO */}
                    <Image src={logoBranco} alt={"Logo Sade Branco"} className=""/>
                </div>
                <div id="menu" className={`text-cinza flex gap-7 md:gap-20 items-center md:flex-col md:right-[0] ${menuAtivado? 'animate-showsidebar md:bg-roxoClaro md:p-4 md:absolute md:w-40 md:h-full md:mr-[-400px]' : 'md:hidden md:mt-[-400px]'}}`}>{/* DIV DE LINKS */}
                    <button className="items-center hidden md:block justify-center border-#fff  border-1" onClick={abrirMenu}>{/* FECHAR MENU HAMBURGUER */}
                        <Image src={xIcon} alt={"Ícone para cancelar"}/>
                    </button>
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">HOME</a>{/* LINK */}
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">SOBRE</a>{/* LINK */}
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">DOCUMENTOS</a>{/* LINK */}
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">PLANOS</a>{/* LINK */}
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">CONTATO</a>{/* LINK */}
                </div>
                <div className="items-center hidden md:block">{/* MENU HAMBURGUER */}
                    <button className="items-center hidden md:block justify-center mt-2" onClick={abrirMenu}>
                        <Image src={menuHamburguer} alt={"Menu Hamburguer"}/>
                    </button>
                </div> 
            </div>
        </header>
    )
}