import { Title } from "../Title/titleAbout"
import Image from "next/image"
import BackIcons from "../../../public/images/Backgrounds/BackICons.png"
import SadeImage from "../../../public/images/pc.png"

export const AboutUs = () => {

    return(
        <div className="px-2" id="Sobre">
            <Title />
            <div className="flex flex-col gap-3">

                <div className="flex justify-center">
                    <Image src={SadeImage} alt="Imagem do Software" className="w-full max-w-[800px]" />
                </div> {/*Foto do sistema*/}

                <div className="flex justify-center pt-5">
                    <p className="max-w-[1000px] text-xl indent-10 text-justify">Software para gestão de atendimento integrado a equipamentos de imagem, doravante SADE. A implantação contempla a configuração de máquinas e servidores, testes e treinamento de pessoal. A essência do nosso propósito está na missão de facilitar o cotidiano dos profissionais de saúde, promovendo eficiência, precisão e acessibilidade. Acreditamos que a tecnologia pode ser a aliada definitiva na busca por uma saúde mais inteligente e centrada no paciente.</p>
                </div> {/*Texto*/}

            </div>
        </div>
    )
}