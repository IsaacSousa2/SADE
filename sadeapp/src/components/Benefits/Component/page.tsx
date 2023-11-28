'use client'
import { BenefitsBadge } from "@/components/Benefits/Boxes/differentialBadge"
import { BenefitsBadgeOrange } from "@/components/Benefits/Boxes/differentialBadgeColor"
import { Title } from "@/components/Title/titleOrange"
import CheckIcon from "../../../../public/icons/BenefitsIcons/CheckdIConOrange.png"
import ClockIcon from "../../../../public/icons/BenefitsIcons/ClockIconOrange.png"
import GalleryIcon from "../../../../public/icons/BenefitsIcons/GalleryIconOrange.png"
import TellIcon from "../../../../public/icons/BenefitsIcons/TelIConWhite.png"


export const Benefits = () => {

    return(

        <div>

            <Title />{/*COMPONENT DE TITULO*/}

            <div className="items-center justify-center flex w-full max-w-[1500px] mx-auto">{/*DIV PARA ORGANIZAÇÃO DE BOXES*/}

                <div className="grid grid-cols-4 xl:grid-cols-2 md:flex md:flex-wrap justify-center gap-y-24 gap-x-24">{/*DIV PARA ALINHAMENTO*/}

                    <BenefitsBadge url={CheckIcon} titulo={"Segurança"} texto={"Altos padrões de segurança de dados, incluindo criptografia, autenticação, conformidade com regulamentações e atualizações constantes."} />{/*BOX*/}

                    <BenefitsBadgeOrange url={TellIcon} titulo={"Suporte"} texto={"Fornecer suporte técnico ágil e eficaz, juntamente com treinamento especializado para os usuários garantindo uma melhor experiência."} />{/*BOX COLORIDO*/}

                    <BenefitsBadge url={GalleryIcon} titulo={"Resolução"} texto={"A capacidade de integração eficiente e perfeita com uma ampla gama de equipamentos de imagem para amplificar as possibilidades do usuário."} />{/*BOX*/}

                    <BenefitsBadge url={ClockIcon} titulo={"Tempo"} texto={"Um software SADE que seja intuitivo e fácil de usar, com uma interface amigável, pode melhorar a eficiência da equipe e facilitar o uso de ferramentas."} />{/*BOX*/}

                </div>

            </div>

        </div>
        
    )

}