import Image from "next/image"
import logoBranco from "../../public/images/logoBranco.png"
import menuHamburguer from "../../public/images/menuHamburguer.png"
export default function Header(){

    return(

        <header className="bg-roxoClaro w-full h-14 items-center border-b-white text-center">
            <div className="w-full p-2 flex justify-between max-w-[1700px] mx-auto">
                <div className="">
                    <Image src={logoBranco} alt={"Logo Sade Branco"} className=""/>
                </div>
                <div className="text-cinza flex-nowrap flex gap-7 items-center md:hidden">
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">HOME</a>
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">SOBRE</a>
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">DOCUMENTOS</a>
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">PLANOS</a>
                    <a href="#" className="hover:text-roxoEscuro duration-[0.5s]">CONTATO</a>
                </div>
                <div className="items-center flex-nowrap flex">
                    <button className="2xl:hidden">
                        <Image src={menuHamburguer} alt={"Menu Hamburguer"}/>
                    </button>
                </div>
            </div>
        </header>

    )

}