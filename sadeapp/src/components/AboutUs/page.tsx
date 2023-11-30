import { Title } from "../Title/titleAbout"
import Image from "next/image"
import BackIcons from "../../../public/images/Backgrounds/BackICons.png"
import SadeImage from "../../../public/images/Logo/logoSade.png"

export default function AboutUs(){

    return(
        <div>
            <Title />
            <div className="items-center justify-center flex flex-col">
                <div className="">
                    <Image src={SadeImage} alt="Imagem do Software" className="w-full h-full max-w-[800px] max-h-[450px] m-auto" />
                </div>
                <div className="" >
                    <p className="flex w-full max-w-[900px] mx-auto px-4 text-xl font-semibold py-16">Software para gestão de atendimento Integrado a equipamentos de  imagem, doravante SADE. A implantação contempla configuração de máquinas e servidores, testes e treinamento de pessoal. Na essência do nosso propósito está a missão de facilitar o cotidiano dos profissionais de saúde, promovendo eficiência, precisão e acessibilidade. Acreditamos que a tecnologia pode ser a aliada definitiva na busca por uma saúde mais inteligente e centrada no paciente.</p>
                </div>
            </div>
            <div className="lg:hidden flex mt-[-400px]">
                <Image src={BackIcons} alt="Plano de fundo" className="fixed -z-50"/>
            </div>
            <div>
                <div className="hidden lg:flex h-[160px] w-full bg-gradient-to-t from-darkOrange to-lightOrange"></div>
            </div>
        </div>
    )
}