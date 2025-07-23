// Necessário importar as imagens, chuto que é umas 10
// Preciso fazer a lógica de ida ao whatsapp e email de contato sem usar um use effect, vou pesquisar mais caso não ache nada vou perguntar pra IA mesmo sobre isso
import Image from 'next/image'

import BtnWpp from './wpp'
import BoxEmail from './formEmail'
import PromoEmail from './inputEmail'

import btnTT from '../app/assets/images/ttBlueStars.png'
import Gmail from '../app/assets/images/IconGmail.png'
import Wpp from '../app/assets/images/IconChat.png'
import Loja from '../app/assets/images/IconPinpoint.png'
import Fone from '../app/assets/images/IconTelefone.png'
import TT from '../app/assets/images/Twitter.png'
import Linkedin from '../app/assets/images/Linkedin.png'
import Face from '../app/assets/images/Facebook.png'
import Github from '../app/assets/images/Github.png'


export default function Footer (){
    return(
        <>
            {/*  1° parte do footer */}
            <section className="flex flex-col bg-gradient-to-l from-[#6C85B3] from-100% to-[#7DACFF] to-0% xl:flex-row justify-center">
                <div className="">
                    <div className="flex w-[90vw] mt-8 ml-4 pb-4 align-center justify-center bg-gradient-to-l from-[#7DACFF] from-0% to-[#7DACFF] to-100% rounded-full">
                        <Image src={btnTT} alt="" draggable="false" className='w-7 h-7 self-end color bg-gray-300'></Image>
                        <h1 className="font-normal text-4xl">Entre em contato</h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-20">
                        <BoxEmail/>
                        <div className="p-5 text-center flex flex-col items-center justify-center">
                            <div className="flex flex-row pb-5">
                                {/* parte superior */}
                                <div className="w-1/2 xl:w-3xs flex items-center flex-col">                               
                                    <Image src={Gmail} alt='' draggable='false' className='h-[26px] w-[26px] mb-4'/>
                                    <h1 className="font-medium">Email</h1>
                                    <h3 className="py-2 font-medium">Nossa equipe está pronta para ajudar.</h3>
                                    <p className="text-{sm}">vcbrinquedos@gmail.com</p>
                                </div>
                                <div className="w-1/2 xl:w-3xs flex items-center flex-col">
                                    <Image src={Wpp} alt='' draggable='false' className='h-[26px] w-[26px] mb-4'/>
                                    <h1 className="font-medium">Whatsapp</h1>
                                    <h3 className="py-2 font-medium">Entre em contato conosco via Whatsapp.</h3>
                                    <BtnWpp/>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                {/* parte inferior */}
                                <div className="w-1/2 xl:w-3xs flex items-center flex-col">
                                    <Image src={Loja} alt='' draggable='false' className='h-[26px] w-[26px] mb-4'/>
                                    <h1 className="font-medium">Loja</h1>
                                    <h3 className="py-2 font-medium">Venha dizer olá na sede do noso escritório.</h3>
                                    <p className="text-{sm}">Cep: 12345-000 Curitiba - PR</p>
                                </div>
                                <div className="w-1/2 xl:w-3xs flex items-center flex-col">
                                    <Image src={Fone} alt='' draggable='false' className='h-[26px] w-[26px] mb-4'/>
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
            <section className="bg-gradient-to-l from-[#6C85B3] to-[#7DACFF] xl:p-8">
                <div className="flex flex-col xl:flex-row xl:justify-between p-5 gap-5">
                    {/* Mensagem superior */}
                    <div>
                        <h3 className="py-2 font-medium">Fique por dentro!</h3>
                        <p>Seja o primeiro a receber as últimas novidades sobre promoções, descontos e ofertas.</p>
                    </div>
                    <PromoEmail/>
                </div>
                <div className="">
                    {/* Mensagem inferior */}
                    <div className="flex flex-col text-center xl:flex-row gap-32 p-4">
                        <div className="py-3">
                            <div>
                                {/* Imagem logo */}
                                <h1 className="font-medium">Brinquedos Espumados</h1>
                            </div>
                            <p>O mundo mágico dos brinquedos macios começa aqui!</p>
                        </div>
                        <div className="flex flex-col xl:flex-row gap-5 xl:gap-32">
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
                    <div className="flex flex-col-reverse pt-10 gap-12 xl:flex-row justify-between gap-0">
                        <p className="pl-2">© 2025 VC Brinquedos Espumados. Todos os direitos reservados.</p>
                        <div className='flex items-center flex-row justify-center gap-4 pb-2'>
                            <a href="https://github.com/Igor-Victor21" target='_blank' rel='noopener noreferrer'><Image src={TT} alt='X' draggable='false' className='h-[26px] w-[26px]'/></a>
                            <a href="https://github.com/Igor-Victor21" target='_blank' rel='noopener noreferrer'><Image src={Linkedin} alt='Linkedin' draggable='false' className='h-[26px] w-[26px]'/></a>
                            <a href="https://github.com/Igor-Victor21" target='_blank' rel='noopener noreferrer'><Image src={Face} alt='Facebook' draggable='false' className='h-[26px] w-[26px]'/></a>
                            <a href="https://github.com/Igor-Victor21" target='_blank' rel='noopener noreferrer'><Image src={Github} alt='Github' draggable='false' className='h-[26px] w-[26px]'/></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}