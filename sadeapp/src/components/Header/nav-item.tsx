import Link from "next/link";

type NavItemProps = {
    label : string
    href : string
    image : string
}

export const NavItem = ({label, href, image}: NavItemProps ) => {
    return(
        <Link href={href}>
            <span className="">{image}</span>
            {label}
        </Link>
    )
}