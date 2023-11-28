import PurpleFace from "../../../public/icons/ContactIcons/PurpleFace.png";
import PurpleInsta from "../../../public/icons/ContactIcons/PurpleInsta.png";
import PurpleTwitter from "../../../public/icons/ContactIcons/PurpleTwitter.png";
import Image from "next/image";

export default function Contacts(){

    return(
        <div className=" flex w-full  my-12 bg-purpleBg h-24 items-center mm:h-[350px] ">
            <div className="max-w-[1350px] mx-auto flex justify-between w-full mm:gap-12 mm:flex-col mm:items-center">
                <Image src={PurpleInsta} alt="Ícone do Instagram" className="h-16 w-16"/>
                <Image src={PurpleTwitter} alt="Ícone do Twitter" className="h-16 w-16"/>
                <Image src={PurpleFace} alt="Ícone do Facebook" className="h-16 w-16"/>
            </div>
        </div>
    )

}