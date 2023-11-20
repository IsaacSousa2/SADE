import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, ...props} : ButtonProps) => {
    return(
        <a href="#">
            <Button {...props} className={`bg-roxoEscuro text-branco w-[140px] h-[40px] rounded-md hover:bg-roxoClaro  duration-[0.7s]`}>
                {children}
            </Button>
        </a>
    )
}