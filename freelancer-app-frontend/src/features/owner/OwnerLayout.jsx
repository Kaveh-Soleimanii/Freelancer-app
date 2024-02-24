import AppLayout from "../../ui/AppLayout"
import Sidebar from "../../ui/Sidebar"
import CustomNavLink from "../../ui/CustomNavLink"
import { HiCollection, HiHome } from "react-icons/hi"



function OwnerLayout() {
    return (
        <div>
            <AppLayout>
                <Sidebar>
                    <CustomNavLink to="dashboard">
                        <HiHome />
                        <span>داشبورد</span>
                    </CustomNavLink>
                    <CustomNavLink to="projects">
                        <HiCollection />
                        <span>پروژه ها</span>
                    </CustomNavLink>
                    </Sidebar>
            </AppLayout>
        </div>
    )
}

export default OwnerLayout