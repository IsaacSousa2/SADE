import iconFacebook from "../../public/icons/iconFacebook.png"
import iconInstagram from "../../public/icons/iconInstagram.png"
import iconTwitter from "../../public/icons/iconTwitter.png"
import Image from "next/image"

export default function Contacts(){

    return(
        <div className="flex w-full max-w-[1500px] mx-auto gap-12 justify-between my-12 bg-branco">
            <Image src={iconInstagram} alt="Ícone do Instagram" className="h-16 w-16"/>
            <Image src={iconTwitter} alt="Ícone do Twitter" className="h-16 w-16"/>
            <Image src={iconFacebook} alt="Ícone do Facebook" className="h-16 w-16"/>
        </div>
    )

}