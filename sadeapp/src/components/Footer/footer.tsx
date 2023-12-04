'use client'/*Transformando em client components*/ 
import Image from "next/image"/*Importando o hook Image*/
import logoBranco from "../../../public/images/Logo/logoBranco.png"/*Importando logo*/
import FacebookIcon from "../../../public/icons/FooterIcons/FacebookIcon.png"/*Importando ícone do facebook*/
import InstaIcon from "../../../public/icons/FooterIcons/InstaIcon.png"/*Importando ícone do Instagram*/
import TwitterIcon from "../../../public/icons/FooterIcons/TwitterIcon.png"/*Importando ícone do Twitter*/

export const Footer = () => {
    
    return(
        <footer className="bg-gradient-to-t from-darkPurple to-lightPurple h-[270px] md:h-[450px] w-full text-grayMain md-w-full mm:h-[840px]">{/* RODAPÉ PRINCIPAL */}
            <div className="w-full p-2 flex justify-between max-w-[1700px] mx-auto items-center md-w-full md:flex-col md:items-center">{/* DIV PRINCIPAL */}
                <div>
                    <div className="flex flex-col md:items-center">{/* DIV ITENS */}
                        <div className="mb-4 md:mb-10">{/* LOGO SADE */}
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
                <div className="md:w-full md:text-center md:flex md:justify-center md:mt-10">{/* DIV INFORMAÇÕES */}
                    <div className=" flex text-center gap-16 mm:gap-6 mm:flex-wrap">{/* DIV LINKS */}
                        <div className="flex flex-col gap-3 w-full md:w-full mm:gap-1.5">{/* BOX LINKS */}
                            <h1 className="font-semibold">SOBRE</h1>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                        </div>
                        <div className="flex flex-col gap-3 w-full md:w-full mm:gap-1.5">{/* BOX LINKS */}
                            <h1 className="font-semibold">RECURSOS</h1>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                        </div>
                        <div className=" flex flex-col gap-3 w-full md:w-full mm:gap-1.5">{/* BOX LINKS */}
                            <h1 className="font-semibold">EXTRA</h1>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                            <a href="#" className="hover:text-darkPurple duration-[0.5s]">Lorem</a>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="flex justify-center border-t-2 border-white bg-darkPurple p-3">{/* COPYRIGHT */}
                <p className="text-xs">©2023 SADE, Todos os direitos reservados</p>
            </div>
        </footer>
        )}