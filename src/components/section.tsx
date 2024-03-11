export const Sections = () => {
    return <div className="flex gap-10 max-w-5xl justify-center items-center mx-auto mt-12">
        <ItemSection />
        <ItemSection />
        <ItemSection />
        <ItemSection />
    </div>
}

const ItemSection = () => {
    return <div className="flex flex-col items-center justify-center bg-gray-50 text-gray-700 p-5 shadow-md rounded-ee-[50px]">
        <img src="/circle.png" alt="" className="w-16 h-16"/>
        <h3 className="font-semibold">Atención de lesiones</h3>
        <span className="text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</span>
    </div>
}