"use client"

import { useState } from "react"

export default function InputEmail(){

    const [email, setEmail] = useState("")

    const handleEmail = () => {

        if(!email.trim()){
            alert("Não esqueça de colocar o email")
            return
        }

        const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")

        if(!emailRegex.test(email)){
            alert("Email inválido, insira um email válido")
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
            <input className="p-1 rounded-lg self-center text-center bg-white" placeholder="Digite seu e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={handleEmail} className="p-2 rounded-lg bg-yellow-400 self-center">Inscreva-se</button>
        </div>
    )
}