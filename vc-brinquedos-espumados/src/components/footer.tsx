// Necessário importar as imagens, chuto que é umas 10
// Preciso fazer a lógica de ida ao whatsapp e email de contato sem usar um use effect, vou pesquisar mais caso não ache nada vou perguntar pra IA mesmo sobre isso
// Planejo em fazer o tailwind do footer 19/07

export default function Footer (){
    return(
        <>
            {/*  1° parte do footer */}
            <section>
                <div>
                    <div>
                        <p>Nome Completo</p>
                        <input placeholder="Nome Completo"/>
                        <p>Email</p>
                        <input placeholder="seu@email.com"/>
                        <p>Mensagem</p>
                        <input/>
                        <button>Enviar Mensagem</button>
                    </div>
                    <div>
                        <div>
                            {/* parte superior */}
                            <div>
                                {/* Icone do email */}
                                <h1>Email</h1>
                                <h3>Nossa equipe está pronta para ajudar.</h3>
                                <p>vcbrinquedos@gmail.com</p>
                            </div>
                            <div>
                                {/* icone do whatsapp */}
                                <h1>Whatsapp</h1>
                                <h3>Entre em contato conosco via Whatsapp.</h3>
                                <button>Começar chat</button>
                            </div>
                        </div>
                        <div>
                            {/* parte inferior */}
                            <div>
                                {/* icone de localização */}
                                <h1>Loja</h1>
                                <h3>Venha dizer olá na sede do noso escritório.</h3>
                                <p>Cep: 12345-000 Curitiba - PR</p>
                            </div>
                            <div>
                                {/* icone de telefone */}
                                <h1>Telefone</h1>
                                <h3>Seg.-Sext.8hrs ás 18hrs</h3>
                                <p>(000) 12345-6789</p>
                            </div>
                            {/* imagem que tem dentro do footer */}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2° parte do footer */}
            <section>
                <div>
                    {/* Mensagem superior */}
                    <div>
                        <h3>Fique por dentro!</h3>
                        <p>Seja o primeiro a receber as últimas novidades sobre promoções, descontos e ofertas.</p>
                    </div>
                    <input placeholder="Digite seu e-mail"/>
                    <button>Inscreva-se</button>
                </div>
                <div>
                    {/* Mensagem inferior */}
                    <div>
                        <div>
                            <div>
                                {/* Imagem logo */}
                                <h1>Brinquedos Espumados</h1>
                            </div>
                            <p>O mundo mágico dos brinquedos macios começa aqui!</p>
                        </div>
                        <div>
                            <div>
                                <h1>Pós-vendas</h1>
                                <p>Seg-Sex - 8:00 até 18:00</p>
                                <p>Sab - 08:00 até 14:00</p>
                                <p>+00 12345-1234</p>
                                <p>vcbrinquedos@gmail.com</p>
                            </div>
                            <div>
                                <h1>Navegação</h1>
                                <p>Promoções</p>
                                <p>Termos de Serviço</p>
                                <p>Políticas de Entrega</p>
                                <p>Políticas de Reembolso</p>
                                <p>FAQ</p>
                            </div>
                            <div>
                                <h1>Social</h1>
                                <p>Twitter</p>
                                <p>Facebook</p>
                                <p>Instagram</p>
                            </div>
                        </div>
                    </div>
                    {/* imagem de divisão */}
                    <div>
                        <p>© 2025 VC Brinquedos Espumados. Todos os direitos reservados.</p>
                        <div>
                            {/* Icones de redes sociais */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}