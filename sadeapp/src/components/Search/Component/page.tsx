import { SearchBox } from "../Boxes/seachBox"
import { SearchColorBox } from "../Boxes/searchColorBox"
import ImgCheck from "../../../../public/icons/SearchIcon/CheckIcon.png"
import ImgCell from "../../../../public/icons/SearchIcon/CellIcon.png"
import ImgGallery from "../../../../public/icons/SearchIcon/GalleryIcon.png"
import ImgClock from "../../../../public/icons/SearchIcon/ClockIcon.png"

export const Search = () => {

    return(
    <div className="w-full">
        <div className="justify-between  w-full max-w-[1400px] mx-auto flex">
            <SearchBox url={ImgCheck} titulo="Teste" texto="Altos padrões de segurança de dados, incluindo criptografia, autenticação e conformidade com regulamentações." />
            <SearchColorBox url={ImgCell} titulo="Teste" texto="Altos padrões de segurança de dados, incluindo criptografia, autenticação e conformidade com regulamentações." />
            <SearchBox url={ImgGallery} titulo="Teste" texto="Altos padrões de segurança de dados, incluindo criptografia, autenticação e conformidade com regulamentações." />
            <SearchBox url={ImgClock} titulo="Teste" texto="Altos padrões de segurança de dados, incluindo criptografia, autenticação e conformidade com regulamentações." />
        </div>
    </div>
    )
}