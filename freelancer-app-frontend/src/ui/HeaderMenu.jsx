import { HiOutlineUser } from "react-icons/hi"
import { Link } from "react-router-dom"
import DarkModeToggle from "./DarkModeToggle"
import Loguot from "../features/authentication/Loguot"


function HeaderMenu() {
    return (
        <ul className="flex gap-x-4 items-center">
            <li className="flex">
                <Link to="dashboard" about="dsgfsdg">
                    <HiOutlineUser className="w-5 h-5 text-primary-800" />
                </Link>
            </li>
            <li className="flex">
                <DarkModeToggle />
            </li>
            <li className="flex">
                <Loguot />
            </li>
        </ul>
    )
}

export default HeaderMenu