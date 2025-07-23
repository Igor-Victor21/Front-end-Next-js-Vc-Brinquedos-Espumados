"use client";

import { useState } from "react";

export default function FormEmail() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  
  const handleEmail = () => {

    if(!nome.trim()){
      alert("Não esqueça de colocar o nome.")
      return
    }
    if(!email.trim()){
      alert("Não esqueça de colocar o email")
      return
    }

    const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")

    if(!emailRegex.test(email)){
      alert("Email inválido, insira um email válido")
      return
    }
    if(!mensagem.trim()){
      alert("Não esqueça de colocar uma mensagem")
      return
    }

    const to = "igor.victorcontato@gmail.com"
    const subject = `Olá, eu sou ${nome}, usuário do email ${email}`
    
    const emailURL = `https://mail.google.com/mail/u/0/?fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(mensagem)}&tf=cm`
    
    window.open(emailURL, "_blank")
  }

  return (
    <div className="z-40 flex flex-col bg-white gap-3 p-5 m-5 rounded-lg md:w-md md:ml-20 xl:w-xl">
        <p className="font-medium">Nome Completo</p>
        <input className="p-1 border-solid border-1 border-blue-300 rounded-lg" placeholder="Nome Completo" type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
        <p className="font-medium">Email</p>
        <input className="p-1 border-solid border-1 border-blue-300 rounded-lg" placeholder="seu@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <p className="font-medium">Mensagem</p>
        <textarea className="h-30 pl-1 border-solid border-1 border-blue-300 rounded-lg md:h-40 xl:h-50" value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
        <button onClick={handleEmail} className="p-2 mb-5 rounded-lg bg-yellow-400 self-center">Enviar Mensagem</button>
    </div>
  )
}