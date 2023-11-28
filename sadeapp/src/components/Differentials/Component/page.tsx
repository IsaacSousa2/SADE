'use client'
import ImgFolder from "../../../../public/icons/DifferencesIcons/FolderIcon.png"/*PASTA ICON*/
import ImgGrafic from "../../../../public/icons/DifferencesIcons//GraficIcon.png"/*GRAFICO ICON*/
import ImgMessage from "../../../../public/icons/DifferencesIcons//MessageICon.png"/*MENSAGEM ICON*/
import ImgPc from "../../../../public/icons/DifferencesIcons//PcIcon.png"/*PC ICON*/
import ImgPillIcon from "../../../../public/icons/DifferencesIcons//PillIcon.png"/*PILL ICON*/
import ImgSecurity from "../../../../public/icons/DifferencesIcons//SecurityIcon.png"/*SECURITY ICON*/
import { DifferentialBadge } from "@/components/Differentials/Boxes/differentialBadges"/*BOX DE DIFERENCIAL*/
import { DifferentialBadgePurple } from "@/components/Differentials/Boxes/differentialcolor"/*BOX DE DIFERENCIAL COLORIDO*/
import { Title } from "@/components/Title/title"/*TITULO*/


export const Differences = () => {

    return(

        <div>

            <Title />{/*COMPONENTE DE TITULO*/}

            <div className="items-center justify-center flex w-full max-w-[1500px] mx-auto">{/*DIV PRIMARIA */}

                <div className="grid grid-cols-3 xl:grid-cols-2 md:flex md:flex-wrap md:gap-y-24 justify-center gap-y-32 gap-x-36">{/*DIV SECUNDARIA */}

                    <DifferentialBadge url={ImgPillIcon} titulo={"Acessibilidade"} texto={"Capacidade de integração com sistemas de prontuário eletrônico, laboratórios, sistemas de diagnóstico por imagem e outros componentes do ecossistema de saúde."} />{/*BOX DE DIFERENCIAL */}

                    <DifferentialBadgePurple url={ImgMessage} titulo={"Integração"} texto={"A capacidade de se integrar perfeitamente a uma variedade de equipamentos de imagem, como scanners, impressoras, câmeras e outros dispositivos"} />{/*BOX DE DIFERENCIAL COLORIDO*/}

                    <DifferentialBadge url={ImgSecurity} titulo={"Segurança"} texto={"Destaque a segurança robusta dos dados do paciente, conformidade com regulamentações e medidas proativas para proteger a privacidade das informações de saúde."} />{/*BOX DE DIFERENCIAL */}

                    <DifferentialBadge url={ImgPc} titulo={"Automatização"} texto={"Automação avançada para otimizar os fluxos de trabalho relacionados a atendimento e gerenciamento de documentos pode economizar tempo e recursos"} />{/*BOX DE DIFERENCIAL */}

                    <DifferentialBadge url={ImgFolder} titulo={"Escalabilidade"} texto={"A capacidade de dimensionar o software para atender às necessidades crescentes de uma empresa, especialmente para empresas em crescimento."} />{/*BOX DE DIFERENCIAL */}

                    <DifferentialBadge url={ImgGrafic} titulo={"Evolução Contínua"} texto={"Um compromisso contínuo com atualizações regulares e ciclos ágeis de desenvolvimento, assegurando que o software esteja sempre alinhado."} />{/*BOX DE DIFERENCIAL */}

                </div>

            </div>

        </div>
    )

}