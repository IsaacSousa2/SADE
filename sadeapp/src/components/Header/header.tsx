'use client'/*Transformando em client components*/ 
import Image from "next/image"/*Importando o hook Image*/
import logoBranco from "../../../public/images/logoBranco.png"/*Importando logo*/
import { MdMenu } from "react-icons/md";/*Importando menu hamburguer*/
import { IoCloseSharp } from "react-icons/io5";/*Importando icone de fechar*/
import { IoMdHome } from "react-icons/io";
import { FaDesktop } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { GiDiamonds } from "react-icons/gi";
import { useState } from "react";/*Importando hook useState*/

export default function Header(){

    const[menuAtivado, setMenuAtivado] = useState(false);/* */

    function abrirMenu() {

        if (menuAtivado == false) {setMenuAtivado(true);}

        else {setMenuAtivado(false);}}/*estrutura de condição para menu hamburguer*/

    return(
        <header className=" w-full h-16 items-center border-b-white" id="Header">{/* HEADER */}

            <div className=" bg-darkOrange w-[95%] rounded-lg p-2 flex justify-between max-w-[1700px] mx-auto">{/* DIV PRINCIPAL */}

                <div className="ml-9"> {/* LOGO SADE BRANCO */}

                    <Image src={logoBranco} alt={"Logo Sade Branco"} className=""/>

                </div>

                <div id="menu" className={`mr-9 lg:mr-0 lg:gap-3 transition-all text-white flex gap-7 md:gap-28 items-center md:flex-col md:right-[0] md:top-0 ${menuAtivado? 'animate-showSideBar duration-[0.7s] backdrop-blur-sm mr-[-1px] md:bg-darkOrange md:absolute md:w-52 md:h-full md:mr-0' : 'duration-[0.7s] md:hidden md:mr-[-400px]'}}`}>{/* DIV DE LINKS */}

                    <button className="items-center hidden md:block justify-center border-1 font-bold" onClick={abrirMenu}>{/* FECHAR MENU HAMBURGUER */}

                        <IoCloseSharp alt="Icone para fechar" className="text-3xl text-white mt-5 " />

                    </button>

                    <div className="flex gap-[2px] justify-center hover:bg-lightOrange p-[6px] rounded-md duration-[0.7s]">
                        <IoMdHome className="text-2xl items-center" />
                        <a href="#" className="duration-[0.5s] text-xl font-bold">HOME</a>{/* LINK */}
                    </div>

                    <div className="flex gap-[2px] justify-center hover:bg-lightOrange p-[6px] rounded-md duration-[0.7s]">
                        <GiDiamonds className="text-2xl items-center" />
                        <a href="#" className="duration-[0.5s] text-xl font-bold">PLANOS</a>{/* LINK */}
                    </div>

                    <div className="flex gap-[6px] justify-center hover:bg-lightOrange p-[6px] rounded-md duration-[0.7s]">
                        <FaDesktop className="text-2xl items-center" />
                        <a href="#" className="duration-[0.5s] text-xl font-bold ">INFORMAÇÕES</a>{/* LINK */}
                    </div>

                    <div className="flex gap-[6px] justify-center hover:bg-lightOrange p-[6px] rounded-md duration-[0.7s]">
                        <BsTelephoneFill className="text-2xl items-center" />
                        <a href="#" className="duration-[0.5s] text-xl font-bold">CONTATO</a>{/* LINK */}
                    </div>


                </div>

                <div className="items-center hidden md:block">{/* MENU HAMBURGUER */}

                    <button className="items-center hidden md:block justify-center mt-2" onClick={abrirMenu}>

                        <MdMenu alt="menu Hamburguer" className="text-white text-2xl" />

                    </button>

                </div> 

            </div>

        </header>
    )
}