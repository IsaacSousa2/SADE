'use client'/*Transformando em client components*/ 
import Image from "next/image"/*Importando o hook Image*/
import logoBranco from "../../../public/images/Logo/logoBranco.png"/*Importando logo*/
import { MdMenu } from "react-icons/md";/*Importando menu hamburguer*/
import { IoMdCloseCircle } from "react-icons/io";
import { RiHome5Fill } from "react-icons/ri";
import { FaDesktop } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { GiDiamonds } from "react-icons/gi";
import { useState } from "react";/*Importando hook useState*/

export default function Header(){

    const[menuAtivado, setMenuAtivado] = useState(true);

    function abrirMenu() {

        if (menuAtivado == false) {setMenuAtivado(true);}

        else {setMenuAtivado(false);}
    }/*estrutura de condição para menu hamburguer*/

    function fecharMenu() {

        if (menuAtivado == true) {setMenuAtivado(false);}

        else {setMenuAtivado(false);}
    }/*estrutura de condição para fechar menu hamburguer*/

    return(

        <>

            <div className="fixed w-full px-5 ">

                <div className="flex items-center justify-evenly bg-darkOrange w-full h-12 rounded-2xl">

                    <Image src={logoBranco} alt="Logo da Sade" draggable="false" loading="eager" className="w-16"/> {/*Logo*/}

                    <div className="flex items-center gap-2 md:hidden">

                        <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                            <RiHome5Fill className="text-2xl text-white"/> 
                            <p className="text-white font-bold uppercase">Home</p>
                        </div> {/*Btn home*/}
                        <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                            <GiDiamonds className="text-2xl text-white"/> 
                            <p className="text-white font-bold uppercase">Planos</p>
                        </div> {/*Btn planos*/}
                        <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                            <FaDesktop className="text-2xl text-white"/> 
                            <p className="text-white font-bold uppercase">Como usar</p>
                        </div> {/*Btn como usar*/}
                        <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                            <BsTelephoneFill className="text-2xl text-white"/> 
                            <p className="text-white font-bold uppercase">Contato</p>
                        </div> {/*Btn contato*/}

                    </div> {/*Btns*/}

                    <MdMenu onClick={abrirMenu} className="hidden md:flex text-3xl cursor-pointer text-white duration-[0.2s] p-1 rounded-lg hover:bg-lightOrange"/> {/*Btn para abrir menu*/}

                </div>

            </div> {/*Header*/}
            
            <div className={`fixed flex flex-col p-3 items-center bg-darkOrange w-[300px] h-screen mt-[-65px] mdMin:hidden duration-[0.2s] justify-center ${menuAtivado ? "ml-0" : "ml-[-300px]"}`}>

            <Image src={logoBranco} alt="Logo da Sade" draggable="false" loading="eager" className="w-16 absolute -mt-[1250px]"/> {/*Logo*/}

                <div className="flex flex-col gap-12 mt-20">

                    <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                            <RiHome5Fill className="text-2xl text-white"/> 
                            <p className="text-white font-bold uppercase">Home</p>

                    </div> {/*Btn home*/}

                    <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                        <GiDiamonds className="text-2xl text-white"/> 
                        <p className="text-white font-bold uppercase">Planos</p>

                    </div> {/*Btn planos*/}

                    <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                        <FaDesktop className="text-2xl text-white"/> 
                        <p className="text-white font-bold uppercase">Como usar</p>

                    </div> {/*Btn como usar*/}

                    <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                        <BsTelephoneFill className="text-2xl text-white"/> 
                        <p className="text-white font-bold uppercase">Contato</p>

                    </div> {/*Btn contato*/}

                </div> {/*Btns*/}

            </div> {/*Header para telas menores*/}   

        </>
    )
}