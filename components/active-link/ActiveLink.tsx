'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css"

interface Props {
    path: string;
    label: string;
}

export const ActiveLink = ({ path, label }: Props) => {

    const pathName = usePathname();
    console.log(`[pathName] -> `, pathName);

    return (
        <Link
            className={`${style.link} ${(pathName === path) && style['active-link']}`}
            href={path}>{label}</Link>
    )
}