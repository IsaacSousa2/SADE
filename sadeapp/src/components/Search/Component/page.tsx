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

            <SearchBox url={ImgCheck} titulo="Segurança" texto="Altos padrões de segurança de dados, incluindo criptografia, autenticação e conformidade com regulamentações." />

            <SearchColorBox url={ImgCell} titulo="Suporte" texto=" Fornecer suporte técnico ágil e eficaz, juntamente com treinamento especializado para os usuários." />

            <SearchBox url={ImgGallery} titulo="Resolução" texto="A capacidade de integração eficiente e perfeita com uma ampla gama de equipamentos de imagem." />
            
            <SearchBox url={ImgClock} titulo="Tempo" texto="Um software SADE que seja intuitivo e fácil de usar, com uma interface amigável, pode melhorar a eficiência da equipe." />

        </div>

    </div>
    )
}