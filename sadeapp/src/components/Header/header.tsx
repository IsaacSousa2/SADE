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

export const Header = () => {

    const[menuAtivado, setMenuAtivado] = useState(false);

    function abrirMenu() {

        menuAtivado ? setMenuAtivado(false) : setMenuAtivado(true);
    }

     return(

        <>

            <div className="z-10 fixed w-full px-2 pt-2">

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

            <div className={`fixed top-0 flex flex-col items-center bg-darkOrange w-[300px] h-screen p-4 mdMin:hidden duration-[0.2s] justify-between ${menuAtivado ? "ml-0" : "ml-[-300px]"}`}>

            <div>
                <Image src={logoBranco} alt="Logo da Sade" draggable="false" loading="eager" width={120}/> {/*Logo*/}
            </div>


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

                <div onClick={abrirMenu} className="text-white">
                    <IoMdCloseCircle className="text-3xl" />
                </div>

            </div> {/*Header para telas menores*/}   

        </>
    )
}