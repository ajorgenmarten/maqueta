export const Navbar = () => {
    return <nav className="flex flex-row p-4 justify-center gap-14 bg-gradient-to-b from-blue-950 to-[#0000]">
        <a href="" className="w-[147px] h-[27px]">
            <img src="/logo.png" alt="" width={147} height={27}/>
        </a>
       <div className="flex gap-4 lg:gap-10 text-gray-50">
            <a className="hover:text-blue-300" href="">Nuestra compañía</a>
            <a className="hover:text-blue-300" href="">Nuestros Servicios</a>
            <a href="">🏳</a>
            <a className="hover:text-blue-300" href="">Nontáctenos</a>
            <a className="hover:text-blue-300" href="">Portal de pacientes</a>
       </div>
    </nav>
}