export const Banner = () => {
    return <div className="flex flex-col h-[calc(100vh-96px)] w-full justify-center items-center relative">
        <h1 className="text-6xl text-white font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Tu bienestar es </h1>
        <h1 className="text-6xl text-white font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">nuestra prioridad </h1>

        <div className="absolute bottom-12">
            <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="indicator"/>
            <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="indicator"/>
            <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="indicator"/>
        </div>
    </div>
}