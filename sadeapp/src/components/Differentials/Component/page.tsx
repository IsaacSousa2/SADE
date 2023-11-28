'use client'
import ImgFolder from "../../../../public/icons/DifferencesIcons/FolderIcon.png"
import ImgGrafic from "../../../../public/icons/DifferencesIcons//GraficIcon.png"
import ImgMessage from "../../../../public/icons/DifferencesIcons//MessageICon.png"
import ImgPc from "../../../../public/icons/DifferencesIcons//PcIcon.png"
import ImgPillIcon from "../../../../public/icons/DifferencesIcons//PillIcon.png"
import ImgSecurity from "../../../../public/icons/DifferencesIcons//SecurityIcon.png"
import { DifferentialBadge } from "@/components/Differentials/Boxes/differentialBadges"
import { DifferentialBadgePurple } from "@/components/Differentials/Boxes/differentialcolor"
import { Title } from "@/components/Title/title"


export const Differences = () => {

    return(
        <div>
            <Title />
            <div className="items-center justify-center flex w-full max-w-[1500px] mx-auto">
                <div className="grid grid-cols-3 xl:grid-cols-2 md:flex md:flex-wrap md:gap-y-24 justify-center gap-y-32 gap-x-36">
                    <DifferentialBadge url={ImgPillIcon} titulo={"Acessibilidade"} texto={"Capacidade de integração com sistemas de prontuário eletrônico, laboratórios, sistemas de diagnóstico por imagem e outros componentes do ecossistema de saúde."} />
                    <DifferentialBadgePurple url={ImgMessage} titulo={"Integração"} texto={"A capacidade de se integrar perfeitamente a uma variedade de equipamentos de imagem, como scanners, impressoras, câmeras e outros dispositivos"} />
                    <DifferentialBadge url={ImgSecurity} titulo={"Segurança"} texto={"Destaque a segurança robusta dos dados do paciente, conformidade com regulamentações e medidas proativas para proteger a privacidade das informações de saúde."} />
                    <DifferentialBadge url={ImgPc} titulo={"Automatização"} texto={"Automação avançada para otimizar os fluxos de trabalho relacionados a atendimento e gerenciamento de documentos pode economizar tempo e recursos"} />
                    <DifferentialBadge url={ImgFolder} titulo={"Escalabilidade"} texto={"A capacidade de dimensionar o software para atender às necessidades crescentes de uma empresa, especialmente para empresas em crescimento."} />
                    <DifferentialBadge url={ImgGrafic} titulo={"Evolução Contínua"} texto={"Um compromisso contínuo com atualizações regulares e ciclos ágeis de desenvolvimento, assegurando que o software esteja sempre alinhado."} />
                </div>
            </div>
        </div>
    )

}