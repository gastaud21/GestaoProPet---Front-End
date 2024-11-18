"use client"

export function Entrada() {
    



    return(




<div className=" w-full p-1 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 0 y-700 ">
    <form className="space-y-6" action="#">
    <div className="flex">
    <div className=" absolute -right-2 -top-1 ">
                
                <svg width="61" height="35" viewBox="0 0 61 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_192_862)">
                        <path d="M31.2628 33.125L19.8252 23.1876L23.6377 19.875L31.2628 26.5001L38.8877 19.875L42.7002 23.1876L31.2628 33.125Z" fill="black" />
                    </g>
                </svg>
                </div>
        <div className="mr-4">
            <label className="block mb-2 text-sm font-semibold text-gray-900 ">Nome</label>
            <input type="text" name="text" id="text" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0 y-500 r-gray-400 "
              placeholder="name" required />
        </div>
        <div className="mr-4">
            <label className="block mb-2 text-sm font-semibold text-gray-900 ">Valor</label>
            <input type="number" name="valoo" id="valor" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0 y-500 r-gray-400 "
              placeholder="Valor" required />
        </div>
        <div >
            <label className="block mb-2 text-sm font-semibold text-gray-900 ">Data</label>
            <input type="date" name="data" id="data" 
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0 y-500 r-gray-400 "
               required />
        </div>
        </div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900 ">Descrição</label>
            <input type="textarea" id="descição" placeholder="Descrição..." 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0 y-500 
             r-gray-400 h-16" required />
        </div>
        
    </form>
</div>











    );
}

