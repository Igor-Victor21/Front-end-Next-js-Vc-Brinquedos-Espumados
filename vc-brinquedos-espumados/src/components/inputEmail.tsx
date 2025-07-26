"use client"

import { useState } from "react"

export default function InputEmail(){

    const [email, setEmail] = useState("")

    const [showToast, setShowToast] = useState(false)

    const handleEmail = () => {

        if(!email.trim()){
            setShowToast(true)
            return
        }

        const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")

        if(!emailRegex.test(email)){
            setShowToast(true)
            return
        }

        const to = "igor.victorcontato@gmail.com"
        const subject = `Inscrição nas promoções`
        const mensagem = `Olá, eu gostaria de me manter atualizado(a) nas promoções da VC Brinquedos, gostaria de me cadastrar com o seguinte email:${email}`

        const emailURL = `https://mail.google.com/mail/u/0/?fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(mensagem)}&tf=cm`
        
        window.open(emailURL, "_blank")
    }

    return(
        <div className="flex flex-col gap-5 xl:flex-row ">
            <div className="relative self-center w-screen md:w-[60vw] xl:w-[20vw] bottom-12 xl:left-24">
                {showToast && (
                    <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-[5%] bg-gray-500 p-4 z-40 rounded-lg">
                        <button onClick={() => setShowToast(false)} className="text-white font-bold self-end">X</button>
                        <p className="text-[12px] text-white">Oops, parece que algum dos dados necessários não foi preenchido, preencha antes de continuar.</p>
                    </div>
                )}
            </div>
            <input className="p-1 rounded-lg self-center text-center bg-white" placeholder="Digite seu e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={handleEmail} className="p-2 rounded-lg bg-yellow-400 self-center">Inscreva-se</button>
        </div>
    )
}