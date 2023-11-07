import BlockIcon from "../../public/icons/BlockIcon.png"
import PcIcon from "../../public/icons/PcIcon.png"
import HeartICon from "../../public/icons/HeartICon.png"
import BackIcons from "../../public/images/BackICons.png"
import Image from "next/image"

export default function AboutUs(){

    return(
        <div className="h-[800px] bg-cinza w-full md:w-full lg:w-full lg:h-[600px] mm:h-[800px] mm:w-full">
            <div className="flex justify-center w-full flex-wrap">
                <h1 className="px-4 py-3 font-semibold text-3xl my-10 ">QUEM</h1>
                <h1 className="text-branco py-3 my-10 px-3 bg-laranja rounded-md font-semibold text-3xl">SOMOS</h1>
            </div>
            <div className="w-full">
                <div className="lg:hidden w-full">
                    <Image src={BackIcons} alt="Imagem de fundo" className="h-[660px] w-[933px] absolute"/>
                </div>
                <div className="absolute flex flex-col pt-16 lg:hidden w-full">
                    <Image src={BlockIcon} alt="Ícone de cadeado" className="pt-16"/>
                    <Image src={HeartICon} alt="Ícone de coração" className="pt-12"/>
                    <Image src={PcIcon} alt="Ícone de computador" className="pt-12"/>
                </div>
            </div>
            <div className="w-full flex justify-end lg:justify-center md:text-center">
                <p className="text-3xl w-[600px] my-24 md:text-2xl">Software para gestão de atendimento Integrado a equipamentos de  imagem, doravante SADE. A implantação contempla configuração de máquinas e servidores, testes e treinamento de pessoal.</p>
            </div>
            <div className="bg-laranja hidden lg:flex lg:flex-row justify-between lg:mx-auto lg:w-full lg:h-32 md:h-36 lg:items-center md:items-center mm:hidden">
                    <Image src={BlockIcon} alt="Ícone de cadeado" className="h-14 w-14"/>
                    <Image src={HeartICon} alt="Ícone de coração" className="h-14 w-14"/>
                    <Image src={PcIcon} alt="Ícone de computador" className="h-14 w-14"/>
                </div>
        </div>
    )

}