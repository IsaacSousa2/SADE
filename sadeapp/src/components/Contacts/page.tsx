import PurpleFace from "../../../public/icons/ContactIcons/PurpleFace.png";{/*IMPORTANDO ICONE DO FACEBOOK*/}
import PurpleInsta from "../../../public/icons/ContactIcons/PurpleInsta.png";{/*IMPORTANDO ICONE DO INSTAGRAM*/}
import PurpleTwitter from "../../../public/icons/ContactIcons/PurpleTwitter.png";{/*IMPORTANDO ICONE DO TWITTER*/}
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Contacts = () => {

    return(

        <div className="flex w-full bg-purpleBg h-24 items-center" id="Contato">{/*DIV PRINCIPAL*/}

            <div className="flex justify-evenly w-full px-5">{/*DIV PARA ALINHAMENTO*/}

                <div className="bg-darkPurple p-2 rounded-full duration-[0.2s] cursor-pointer hover:shadow-shadowContacts hover:scale-110">
                    <FaInstagram className=" text-white text-4xl"/>
                </div> {/*Instagram*/}

                <div className="bg-darkPurple p-2 rounded-full duration-[0.2s] cursor-pointer hover:shadow-shadowContacts hover:scale-110">
                    <FaXTwitter className="text-white text-4xl"/>
                </div> {/*Twitter*/}

                <div className="bg-darkPurple p-2 rounded-full duration-[0.2s] cursor-pointer hover:shadow-shadowContacts hover:scale-110">
                    <FaFacebook className="text-white text-4xl"/>
                </div> {/*Facebook*/}

            </div>{/*DIV PARA ALINHAMENTO*/}

        </div>/*DIV PRINCIPAL*/

    )

}