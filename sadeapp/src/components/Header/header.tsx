'use client'/*Transformando em client components*/ 
import Image from "next/image"/*Importando o hook Image*/
import Link from "next/link";
import logoBranco from "../../../public/images/Logo/logoBranco.png"/*Importando logo*/
import { MdMenu } from "react-icons/md";/*Importando menu hamburguer*/
import { IoMdCloseCircle } from "react-icons/io";
import { RiHome5Fill } from "react-icons/ri";
import { RiComputerFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { GiDiamonds } from "react-icons/gi";
import { useState } from "react";/*Importando hook useState*/

export const Header = () => {

    const[menuAtivado, setMenuAtivado] = useState(false);

    function abrirMenu() {

        menuAtivado ? setMenuAtivado(false) : setMenuAtivado(true);
    }

     return(

        <>

            <div className="z-10 fixed w-full px-2 pt-2 drop-shadow-md">

                <div className="flex items-center justify-evenly bg-darkOrange w-full h-12 rounded-2xl md:justify-between md:px-5">

                    <Image src={logoBranco} alt="Logo da Sade" draggable="false" loading="eager" className="w-16"/> {/*Logo*/}

                    <div className="flex items-center gap-2 md:hidden">

                        <Link href="/">

                            <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                                <RiHome5Fill className="text-2xl text-white"/> 
                                <p className="text-white font-bold uppercase">Home</p>

                            </div> {/*Btn home*/}

                        </Link>

                        <Link href="#Planos">
                            <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                                <GiDiamonds className="text-2xl text-white"/> 
                                <p className="text-white font-bold uppercase">Planos</p>

                            </div> {/*Btn planos*/}
                        </Link>

                        <Link href="/tutorial">
                            
                            <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                                <RiComputerFill className="text-2xl text-white"/> 
                                <p className="text-white font-bold uppercase">Como usar</p>

                            </div> {/*Btn como usar*/}
                        </Link>

                        <Link href="#Sobre">
                            <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                                <IoPerson className="text-2xl text-white"/> 
                                <p className="text-white font-bold uppercase">Sobre Nós</p>

                            </div> {/*Btn contato*/}
                        </Link>

                    </div> {/*Btns*/}

                    <MdMenu onClick={abrirMenu} className="hidden md:flex text-4xl cursor-pointer text-white duration-[0.2s] p-1 rounded-lg hover:bg-lightOrange"/> {/*Btn para abrir menu*/}

                </div>

            </div> {/*Header*/}

            {menuAtivado ? <div className="z-10 fixed w-full h-full bg-black/20"></div> : <></>}

            <div className={`z-10 fixed top-0 flex flex-col items-center bg-darkOrange w-[300px] h-screen p-4 mdMin:hidden duration-[0.2s] justify-between ${menuAtivado ? "ml-0" : "ml-[-300px]"}`}>

                <div>
                    <Image className="w-20" src={logoBranco} alt="Logo da Sade" draggable="false" loading="eager" width={120}/> {/*Logo*/}
                </div>

                <div className="flex flex-col gap-3 mt-20">

                    <Link href="/">
                        <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                            <RiHome5Fill className="text-2xl text-white"/> 
                            <p className="text-white font-bold uppercase">Home</p>

                        </div> {/*Btn home*/}
                    </Link>

                    <Link href="#Planos">
                    <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                        <GiDiamonds className="text-2xl text-white"/> 
                        <p className="text-white font-bold uppercase">Planos</p>

                    </div> {/*Btn planos*/}
                    </Link>

                    <Link href="/tutorial">
                        <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                            <RiComputerFill className="text-2xl text-white"/> 
                            <p className="text-white font-bold uppercase">Como usar</p>

                        </div> {/*Btn como usar*/}
                    </Link>

                    <Link href="#Sobre">
                        <div className="flex items-center gap-1 duration-[0.2s] p-1 rounded-lg cursor-pointer hover:bg-lightOrange">

                            <IoPerson className="text-2xl text-white"/> 
                            <p className="text-white font-bold uppercase">Sobre Nós</p>

                        </div> {/*Btn contato*/}
                    </Link>

                </div> {/*Btns*/}

                <div onClick={abrirMenu} className="text-white">
                    <IoMdCloseCircle className="text-4xl cursor-pointer text-white duration-[0.2s] p-1 rounded-lg hover:bg-lightOrange" />
                </div>

            </div> {/*Header para telas menores*/}   

        </>
    )
}