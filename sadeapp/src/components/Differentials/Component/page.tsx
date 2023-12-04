'use client'
import { FaRegFolder } from "react-icons/fa";/*PASTA ICON*/
import { BsGraphUpArrow } from "react-icons/bs";/*GRAFICO ICON*/
import { FiMessageCircle } from "react-icons/fi";/*MENSAGEM ICON*/
import { RiComputerLine } from "react-icons/ri";/*PC ICON*/
import { LuPill } from "react-icons/lu";/*PILL ICON*/
import { IoLockClosedOutline } from "react-icons/io5";/*SECURITY ICON*/
import { DifferentialBadgePurple } from "@/components/Differentials/Boxes/differentialcolor"/*BOX DE DIFERENCIAL COLORIDO*/
import { Title } from "@/components/Title/title"/*TITULO*/


export const Differences = () => {

    return(

        <div>

            <Title />{/*COMPONENTE DE TITULO*/}

            <div className="items-center justify-center flex w-full max-w-[1500px] mx-auto">{/*DIV PRIMARIA */}

                <div className="grid grid-cols-3 xl:grid-cols-2 md:flex md:flex-wrap md:gap-y-24 justify-center gap-y-32 gap-x-36">{/*DIV SECUNDARIA */}

                    <DifferentialBadgePurple icon={<FaRegFolder size={50} className="font-bold" />} titulo={"Acessibilidade"} texto={"Capacidade de integração com sistemas de prontuário eletrônico, laboratórios, sistemas de diagnóstico por imagem e outros componentes do ecossistema de saúde."} />{/*BOX DE DIFERENCIAL */}

                    <DifferentialBadgePurple icon={<FiMessageCircle size={50} className="font-bold"  />} titulo={"Integração"} texto={"A capacidade de se integrar de maneira fluida e eficiente a uma ampla gama de dispositivos de imagem, tais como scanners, impressoras, câmeras e outros equipamentos similares."} />{/*BOX DE DIFERENCIAL COLORIDO*/}

                    <DifferentialBadgePurple icon={<IoLockClosedOutline size={50} className="font-bold" />} titulo={"Segurança"} texto={"Destaque a segurança robusta dos dados do paciente, conformidade com regulamentações e medidas proativas para proteger a privacidade das informações de saúde."} />{/*BOX DE DIFERENCIAL */}

                    <DifferentialBadgePurple icon={<RiComputerLine size={50} className="font-bold" />} titulo={"Automatização"} texto={"Automação avançada para otimizar os fluxos de trabalho relacionados a atendimento e gerenciamento de documentos pode economizar tempo e recursos"} />{/*BOX DE DIFERENCIAL */}

                    <DifferentialBadgePurple icon={<LuPill size={50} className="font-bold" />} titulo={"Escalabilidade"} texto={"A capacidade de dimensionar o software para atender às necessidades crescentes de uma empresa, especialmente para empresas em crescimento."} />{/*BOX DE DIFERENCIAL */}

                    <DifferentialBadgePurple icon={<BsGraphUpArrow size={50} className="font-bold" />} titulo={"Evolução Contínua"} texto={"Um compromisso contínuo com atualizações regulares e ciclos ágeis de desenvolvimento, assegurando que o software esteja sempre alinhado."} />{/*BOX DE DIFERENCIAL */}

                </div>

            </div>

        </div>
    )

}