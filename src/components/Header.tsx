import Cafe from "../icons/Cafe"
const Header = () => {
    return (
        <>
            <header className="container p-3 mt-5 mx-auto border-b border-red-300 flex items-center justify-around">
                <Cafe className="size-20" />
                <nav className="px-10 gap-x-5 flex text-[#ddc613] font-semibold">
                    <a href="#" className="hover:text-red-200/80 transition" >Inico</a>
                    <a href="#" className="hover:text-red-200/80 transition" >Propinas</a>
                    <a href="#" className="hover:text-red-200/80 transition" >Mas info</a>
                </nav>
            </header>
        </>
    )
}

export default Header