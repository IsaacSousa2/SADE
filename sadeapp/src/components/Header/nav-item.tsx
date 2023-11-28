import Link from "next/link";

type NavItemProps = {
    label : string
    link : string
}

export const NavItem = ({label, link}: NavItemProps ) => {
    return(
        <Link href={link}>
            {label}
        </Link>
    )
}