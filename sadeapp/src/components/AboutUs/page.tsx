import { Title } from "../Title/titleAbout"
import Image from "next/image"
import BackIcons from "../../../public/images/Backgrounds/BackICons.png"
import SadeImage from "../../../public/images/Logo/logoSade.png"

export const AboutUs = () => {

    return(
        <div className="">
            <Title />
            <div className="flex flex-col gap-3">

                <div className="flex justify-center">
                    <Image src={SadeImage} alt="Imagem do Software" className="w-full max-w-[400px]" />
                </div> {/*Foto do sistema*/}

                <div className="flex justify-center pt-5">
                    <p className="max-w-[1000px] font-semibold text-xl indent-10 text-justify">Software para gestão de atendimento Integrado a equipamentos de  imagem, doravante SADE. A implantação contempla configuração de máquinas e servidores, testes e treinamento de pessoal. Na essência do nosso propósito está a missão de facilitar o cotidiano dos profissionais de saúde, promovendo eficiência, precisão e acessibilidade. Acreditamos que a tecnologia pode ser a aliada definitiva na busca por uma saúde mais inteligente e centrada no paciente.</p>
                </div> {/*Texto*/}

                {/*
                <div className="-z-10 -mt-72 lg:hidden">
                    <Image src={BackIcons} alt="" className="w-full max-w-[800px]" />
                </div> Imagem de fundo
                */}

                {/*
                <div className="">
                    <div className="hidden lg:flex h-[160px] w-full bg-gradient-to-t from-darkOrange to-lightOrange"></div>
                </div>Imagem de fundo
                */}

            </div>
        </div>
    )
}