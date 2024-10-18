"use client";
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { useClienteStore } from "@/context/cliente";

type Inputs = {
  email: string;
  senha: string;
  manter: boolean;
}



export function CardLogin() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { logaCliente } = useClienteStore();
  const router = useRouter();

  async function verificaLogin(data: Inputs) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/clientes/login`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ emai: data.email, senha: data.senha }),
    })

    if (response.status == 200) {
      const dados = await response.json()
      logaCliente(dados);

      if (dados.manter) {
        localStorage.setItem("client_key", dados.id);

      } else {
        if (localStorage.getItem("client_key")) {
          localStorage.removeItem("client_key");
        }
      }
      router.push("/")
    } else {
      alert("Erro... Login ou senha incorretos")
    }
  }
    return (


      <div className="flex justify-center items-center h-screen  ">
        <img src="logo.svg" alt="" className=" absolute mr-96 w-3/6 -z-0" />

        <div className="w-full max-w-sm p-4 border-1 bg-white rounded-lg shadow sm:p-6 md:p-8 z-20">
          <form className="space-y-6" action="#"
            onSubmit={handleSubmit(verificaLogin)}
            >
            <div className="flex justify-center items-center text-black">
              <img src="logo.svg" className=" w-88" />
              <h1 className=" text-3xl font-bold">GestãoProPet</h1>
            </div>
            <div>

              <label aria-describedby="num" className="block mb-2 text-sm font-medium text-gray-900 ">
                Subdomínio
              </label>

              <input type="num" name="subdominio" id="subdominio" className="bg-gray-50 
            border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-2.5 dark:border-gray-9000=
              dark:placeholder-gray-400 dark:text-white" placeholder="123...." required />
            </div>
            <div>
              <label aria-describedby="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
             p-2.5  dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"
                required
                // {...register("email")}
                 />
            </div>
            <div>
              <label aria-describedby="password" className="block mb-2 text-sm font-medium text-gray-900 ">Senha</label>
              <input type="password" name="password" id="password" placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 
             dark:text-white" required
                {...register("senha")} 
                />
            </div>
            <div className="text-sm font-medium text-gray-500 text-primary-letra">
              Entrar com e-mail do usuário

            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border
                 accent-emerald-700
                 " required
                    {...register("manter")} 
                    />
                </div>

                <label aria-describedby="remember" className="ms-2 text-sm font-medium text-black">Lembrar-me</label>
              </div>
              <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                Esqueci a senha</a>
            </div>
            <button type="submit" className="w-full text-white bg-blue-700
           hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
           font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-800
            dark:hover:bg-green-900 dark:focus:ring-green-700">ENTRAR</button>

          </form>
        </div>
      </div>
    

    )
}
