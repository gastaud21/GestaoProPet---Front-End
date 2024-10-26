"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Just_Me_Again_Down_Here } from "next/font/google"


const font = Just_Me_Again_Down_Here({
    weight: ['400'],
    subsets: ['latin']
})


export default function cardTest() {
    return (
        <>
            <div className="bg-primary-bg flex justify-center">
                <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white p-5">{/*DIV DO CARD*/}
                    <div className="px-6 py-4 flex">{/*DIV IMAGEM PRINCIPAL + CAMPOS DE IMPUT*/}
                        <div>
                            <img className="w-full rounded-3xl" src="https://www.pedigree.com.br/sites/g/files/fnmzdf2401/files/2023-11/como-ajudar-cao-de-rua%20.jpg" alt="Sunset in the mountains" />
                        </div>
                        <div className={`font-bold text-black text-xl mb-2 ${font.className} text-5xl text-center`}>Dobby</div>
                    </div>
                    <div className="px-6 pt-4 pb-2 text-black">
                        aqui vao ficar as imgagens
                    </div>
                </div>
            </div>
        </>
    )

}