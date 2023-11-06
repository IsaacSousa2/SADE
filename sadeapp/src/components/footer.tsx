'use client'/*Transformando em client components*/ 
import Image from "next/image"/*Importando o hook Image*/
import logoBranco from "../../public/images/logoBranco.png"/*Importando logo*/
import FacebookIcon from "../../public/icons/FacebookIcon.png"/*Importando ícone do facebook*/
import InstaIcon from "../../public/icons/InstaIcon.png"/*Importando ícone do Instagram*/
import TwitterIcon from "../../public/icons/TwitterIcon.png"/*Importando ícone do Twitter*/
export default function Footer(){
    return(
        <footer className="mt-24 bg-gradient-to-t from-roxoEscuro to-roxoClaro h-[270px] md:h-[450px] w-full text-cinza md-w-full mm:h-[840px]">
            <div className="w-full p-2 flex justify-between max-w-[1700px] mx-auto items-center md-w-full md:flex-col md:items-center">
                <div>
                    <div className="flex flex-col md:items-center">
                        <div className="mb-4 md:mb-10">
                            <Image src={logoBranco} alt={"Logo Sade Branco"} className=""/> 
                        </div>
                        <div className="mb-28 md:mb-6">
                            <p className="font-semibold">SISTEMA DE GERENCIAMENTO</p>
                        </div>
                        <div className="flex gap-5">
                            <a href="#" className=""><Image src={FacebookIcon} alt="Ícone do facebook" className="h-8 w-8"/></a>
                            <a href="#" className=""><Image src={InstaIcon} alt="Ícone do instagram" className="h-8 w-8"/></a>
                            <a href="#" className=""><Image src={TwitterIcon} alt="Ícone do twitter" className="h-8 w-8"/></a>
                        </div>
                    </div>
                </div>          
                <div className="md:w-full md:text-center md:flex md:justify-center md:mt-10">
                    <div className="flex text-center gap-16 mm:gap-6 mm:flex-wrap">
                        <div className="flex flex-col gap-3 w-full md:w-full mm:gap-1.5">
                            <h1 className="font-semibold">SOBRE</h1>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                        </div>
                        <div className="flex flex-col gap-3 w-full md:w-full mm:gap-1.5">
                            <h1 className="font-semibold">RECURSOS</h1>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                        </div>
                        <div className=" flex flex-col gap-3 w-full md:w-full mm:gap-1.5">
                            <h1 className="font-semibold">EXTRA</h1>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">Lorem</a>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="flex justify-center border-t-2 border-white bg-roxoEscuro p-3">
                <p className="text-xs">©2023 SADE, Todos os direitos reservados</p>
            </div>
        </footer>
        )}