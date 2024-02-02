'use client'
import { FaFolder } from "react-icons/fa";/*PASTA ICON*/
import { BsFillFileBarGraphFill } from "react-icons/bs";/*GRAFICO ICON*/
import { MdMessage } from "react-icons/md";/*MENSAGEM ICON*/
import { RiComputerFill } from "react-icons/ri";/*PC ICON*/
import { CgPill } from "react-icons/cg";/*PILL ICON*/
import { FaLock } from "react-icons/fa";/*SECURITY ICON*/
import { DifferentialBadgePurple } from "@/components/Differentials/Boxes/differentialcolor"/*BOX DE DIFERENCIAL COLORIDO*/
import { Title } from "@/components/Title/title"/*TITULO*/


export const Differences = () => {

    return(

        <div>

            <Title />{/*COMPONENTE DE TITULO*/}

            <div className="items-center justify-center flex w-full max-w-[1500px] mx-auto">{/*DIV PRIMARIA */}

                <div className="grid grid-cols-3 xl:grid-cols-2 md:flex md:flex-wrap px-5 justify-center gap-y-5 gap-x-5">{/*DIV SECUNDARIA */}

                    <DifferentialBadgePurple icon={<FaFolder size={50} className="font-bold" />} titulo={"Acessibilidade"} texto={"Capacidade de integração com sistemas de prontuário eletrônico, laboratórios, sistemas de diagnóstico por imagem e outros componentes do ecossistema de saúde."} />{/*BOX DE DIFERENCIAL */}

                    <DifferentialBadgePurple icon={<MdMessage size={50} className="font-bold"  />} titulo={"Integração"} texto={"A capacidade de se integrar de maneira fluida e eficiente a uma ampla gama de dispositivos de imagem, tais como scanners, impressoras, câmeras e outros equipamentos similares."} />{/*BOX DE DIFERENCIAL COLORIDO*/}

                    <DifferentialBadgePurple icon={<FaLock size={50} className="font-bold" />} titulo={"Segurança"} texto={"Destaque a segurança robusta dos dados do paciente, conformidade com regulamentações e medidas proativas para proteger a privacidade das informações de saúde."} />{/*BOX DE DIFERENCIAL */}

                    <DifferentialBadgePurple icon={<RiComputerFill size={50} className="font-bold" />} titulo={"Automatização"} texto={"Automação avançada para otimizar os fluxos de trabalho relacionados a atendimento e gerenciamento de documentos pode economizar tempo e recursos"} />{/*BOX DE DIFERENCIAL */}

                    <DifferentialBadgePurple icon={<CgPill size={50} className="font-bold" />} titulo={"Escalabilidade"} texto={"A capacidade de dimensionar o software para atender às necessidades crescentes de uma empresa, especialmente para empresas em crescimento."} />{/*BOX DE DIFERENCIAL */}

                    <DifferentialBadgePurple icon={<BsFillFileBarGraphFill size={50} className="font-bold" />} titulo={"Evolução Contínua"} texto={"Um compromisso contínuo com atualizações regulares e ciclos ágeis de desenvolvimento, assegurando que o software esteja sempre alinhado."} />{/*BOX DE DIFERENCIAL */}

                </div>

            </div>

        </div>

    )

}