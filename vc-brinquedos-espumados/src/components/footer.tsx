// Necessário importar as imagens, chuto que é umas 10
// Preciso fazer a lógica de ida ao whatsapp e email de contato sem usar um use effect, vou pesquisar mais caso não ache nada vou perguntar pra IA mesmo sobre isso
// Resolver o problema de padding top e margin top não estarem funcionando

export default function Footer (){
    return(
        <>
            {/*  1° parte do footer */}
            <section className="flex flex-col xl:flex-row bg-[#6C85B3]">
                <div className="">
                    <div>
                        {/* Entre en contato */}
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col bg-white gap-3 p-5 m-5 rounded-lg">
                            <p className="font-medium">Nome Completo</p>
                            <input className="p-1 border-solid border-1 border-blue-300 rounded-lg" placeholder="Nome Completo" type="text"/>
                            <p className="font-medium">Email</p>
                            <input className="p-1 border-solid border-1 border-blue-300 rounded-lg" placeholder="seu@email.com" type="email"/>
                            <p className="font-medium">Mensagem</p>
                            <input className="pl-8 border-solid border-1 border-blue-300 rounded-lg" type="text"/>
                            <button className="p-2 mb-5 rounded-lg bg-yellow-400 self-center">Enviar Mensagem</button>
                        </div>
                        <div className="p-5 text-center">
                            <div className="flex flex-row pb-5">
                                {/* parte superior */}
                                <div className="w-1/2 xl:1/4">
                                    {/* Icone do email */}
                                    <h1 className="font-medium">Email</h1>
                                    <h3 className="py-2 font-medium">Nossa equipe está pronta para ajudar.</h3>
                                    <p className="text-{sm}">vcbrinquedos@gmail.com</p>
                                </div>
                                <div className="w-1/2 xl:1/4">
                                    {/* icone do whatsapp */}
                                    <h1 className="font-medium">Whatsapp</h1>
                                    <h3 className="py-2 font-medium">Entre em contato conosco via Whatsapp.</h3>
                                    <button className="p-1 border-solid border-2 border-black-400 rounded-lg ">Começar chat</button>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                {/* parte inferior */}
                                <div className="w-1/2 xl:1/4">
                                    {/* icone de localização */}
                                    <h1 className="font-medium">Loja</h1>
                                    <h3 className="py-2 font-medium">Venha dizer olá na sede do noso escritório.</h3>
                                    <p className="text-{sm}">Cep: 12345-000 Curitiba - PR</p>
                                </div>
                                <div className="w-1/2 xl:1/4">
                                    {/* icone de telefone */}
                                    <h1 className="font-medium">Telefone</h1>
                                    <h3 className="py-2 font-medium">Seg.-Sext.8hrs ás 18hrs</h3>
                                    <p className="text-{sm}">(000) 12345-6789</p>
                                </div>
                                {/* imagem que tem dentro do footer */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2° parte do footer */}
            <section className="bg-[#7DACFF]">
                <div className="flex flex-col p-5 gap-5">
                    {/* Mensagem superior */}
                    <div>
                        <h3 className="py-2 font-medium">Fique por dentro!</h3>
                        <p>Seja o primeiro a receber as últimas novidades sobre promoções, descontos e ofertas.</p>
                    </div>
                    <input className="p-1 rounded-lg self-center text-center bg-white" placeholder="Digite seu e-mail" type="email"/>
                    <button className="p-2 rounded-lg bg-yellow-400 self-center">Inscreva-se</button>
                </div>
                <div>
                    {/* Mensagem inferior */}
                    <div className="flex flex-col text-center">
                        <div className="py-3">
                            <div>
                                {/* Imagem logo */}
                                <h1 className="font-medium">Brinquedos Espumados</h1>
                            </div>
                            <p>O mundo mágico dos brinquedos macios começa aqui!</p>
                        </div>
                        <div className="">
                            <div className="py-2">
                                <h3 className="font-medium">Pós-vendas</h3>
                                <h3 className="font-medium">Seg-Sex - 8:00 até 18:00</h3>
                                <h3 className="font-medium">Sab - 08:00 até 14:00</h3>
                                <h3 className="font-medium">+00 12345-1234</h3>
                                <h3 className="font-medium">vcbrinquedos@gmail.com</h3>
                            </div>
                            <div className="py-2">
                                <h3 className="font-medium">Navegação</h3>
                                <h3 className="font-medium">Promoções</h3>
                                <h3 className="font-medium">Termos de Serviço</h3>
                                <h3 className="font-medium">Políticas de Entrega</h3>
                                <h3 className="font-medium">Políticas de Reembolso</h3>
                                <h3 className="font-medium">FAQ</h3>
                            </div>
                            <div className="py-2">
                                <h3 className="font-medium">Social</h3>
                                <h3 className="font-medium">Twitter</h3>
                                <h3 className="font-medium">Facebook</h3>
                                <h3 className="font-medium">Instagram</h3>
                            </div>
                        </div>
                    </div>
                    {/* imagem de divisão */}
                    <div className="pt-10">
                        <div>
                            {/* Icones de redes sociais */}
                        </div>
                        <p>© 2025 VC Brinquedos Espumados. Todos os direitos reservados.</p>
                    </div>
                </div>
            </section>
        </>
    )
}