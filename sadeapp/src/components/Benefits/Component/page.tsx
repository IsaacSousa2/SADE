'use client'
import { BenefitsBadgeOrange } from "@/components/Benefits/Boxes/BenefitsBadge"
import { Title } from "@/components/Title/titleOrange"
import { FaCheckDouble } from "react-icons/fa";/*Imagem de double check*/
import { FaClock } from "react-icons/fa";/*Imagem de relógio */
import { MdInsertPhoto } from "react-icons/md";/*Imagem de galeira */
import { FaPhoneAlt } from "react-icons/fa";/*Imagem de telefone */

export const Benefits = () => {

    return(

        <div>

            <Title />{/*COMPONENT DE TITULO*/}

            <div className="items-center justify-center flex w-full max-w-[1500px] mx-auto">{/*DIV PARA ORGANIZAÇÃO DE BOXES*/}

                <div className="grid grid-cols-4 xl:grid-cols-2 md:flex md:flex-wrap justify-center px-5 md:gap-y-12 md:gap-x-12 gap-y-32 gap-x-32">{/*DIV PARA ALINHAMENTO*/}

                    <BenefitsBadgeOrange icon={ <FaCheckDouble size={50} /> } titulo={"Segurança"} texto={"Altos padrões de segurança de dados, incluindo criptografia, autenticação, conformidade com regulamentações e atualizações constantes."} />{/*BOX*/}

                    <BenefitsBadgeOrange icon={<FaPhoneAlt size={50} />} titulo={"Suporte"} texto={"Fornecer suporte técnico ágil e eficaz, juntamente com treinamento especializado para os usuários garantindo uma melhor experiência."} />{/*BOX COLORIDO*/}

                    <BenefitsBadgeOrange icon={<MdInsertPhoto size={50} />  } titulo={"Resolução"} texto={"A capacidade de integração eficiente e perfeita com uma ampla gama de equipamentos de imagem para amplificar as possibilidades do usuário."} />{/*BOX*/}

                    <BenefitsBadgeOrange icon={<FaClock size={50} />} titulo={"Tempo"} texto={"Um software SADE que seja intuitivo e fácil de usar, com uma interface amigável, pode melhorar a eficiência da equipe e facilitar o uso de ferramentas."} />{/*BOX*/}

                </div>

            </div>

        </div>
        
    )

}