import { ButtonHTMLAttributes } from 'react'/*IMPORTANDO OS ATRIBUTOS DE BOTÃO*/

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>/*CONVERTENDO A PROPS PARA RECEBER TODOS OS ATRIBUTOS DE BOTÃO*/

{/*FUNÇÃO*/}
export const Button = ({children, ...props} : ButtonProps) => {

    return(

        <a href="#">{/*LINKAGEM*/}

            <Button {...props} className={`bg-darkPurple text-branco w-[140px] h-[40px] rounded-md hover:bg-lightPurple  duration-[0.7s]`}>

                {children}{/*COMPONENT*/}

            </Button>

        </a>

    )
}