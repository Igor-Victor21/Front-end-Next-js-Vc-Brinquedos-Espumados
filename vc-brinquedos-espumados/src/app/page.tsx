import Image from "next/image";
import btnImg from './assets/images/btnStar.png'
import btnTT from './assets/images/ttBlueStars.png'
import banner from './assets/images/bannerLP.png'
import onmStore  from './assets/images/ornamentStore.png'
import Navbar from "../components/nav";
import Footer from '../components/footer'
import CardListServer from "@/components/listCardsStore";



export default function Home() {


  return (
    <section className="w-full h-170">
      <section className="relative w-full h-170">
            <Image src={banner} alt="" draggable="false" className='w-full h-170 object-cover'/>       
            <Navbar/> 
          <div className="mt-25 md:mt-35 ml-10  absolute inset-0 flex flex-col">
            <h1 className="cursor-default font-extrabold text-3xl text-red-50">Brincar com <br />
            Segurança Nunca <br />
            Foi Tão Divertido!</h1><br />
            <p className="cursor-default text-red-50 font-semibold">
              Bem-vindo à VC Brinquedos Espumados, a loja onde a criatividade encontra a proteção! <br />
              Aqui você encontra brinquedos espumados coloridos, seguros e cheios de possibilidades <br />
              para transformar qualquer espaço em um mundo de alegria. Tudo pensado para estimular <br />
              a imaginação com conforto e confiança!
              </p>
            <button className="flex items-center cursor-pointer p-5 font-medium w-50 h-15 self-start mt-20 border-1 rounded-4xl border-white text-red-50 hover:scale-108 transition">
              Ver Brinquedos 
              <Image src={btnImg} alt="" draggable="false" className='w-8 h-8 object-cover ml-3'/>
              </button>
          </div>
      </section>

      <section className="flex w-full h-200 justify-center">
        <div className="flex flex-col">
          <div className="flex w-[90vw] h-30 pb-5 align-end justify-center border-b ">
            <Image src={btnTT} alt="" draggable="false" className='w-7 h-7 self-end'></Image>
            <h1 className="font-normal text-4xl self-end">Loja</h1>
          </div>
          
          <div className="w-[85vw] min-h-150 mt-5 border-b border-t self-center">
            <div>
              <h1 className="text-2xl font-bold tracking-wide p-5 mt-5">Nova Coleção</h1>
            </div>

            <div className="flex justify-center">
              <input type="text" placeholder="Pesquisar" className="border p-1 rounded-2xl"/>
            </div>

            <div className="flex flex-row gap-5 mt-[2vh] justify-center">
              <button className="w-25 border p-1 rounded-md cursor-pointer">Todos</button>
              <button className="w-25 border p-1 rounded-md cursor-pointer">kits</button>
              <button className="w-25 border p-1 rounded-md cursor-pointer">Promoções</button>
            </div>

            <div className="flex flex-row gap-5">
              <CardListServer/>
            </div>
          </div>
        </div>        
      </section>

      <section className="flex w-full h-200 justify-center">
        <div className="flex flex-col">
          <div className="flex w-[90vw] h-30 pb-5 align-end justify-center border-b ">
            <Image src={btnTT} alt="" draggable="false" className='w-7 h-7 self-end'></Image>
            <h1 className="font-normal text-4xl self-end">Kits</h1>
          </div>
          
        <div className="w-[85vw] h-150 mt-5 border self-center">            
            <div>
              {/* cards KITS*/}
            </div>
          </div>          
        </div>
      </section>

      <section className="flex w-full h-200 justify-center">
        <div className="flex flex-col">
          <div className="flex w-[90vw] h-30 pb-5 align-end justify-center border-b ">
            <Image src={btnTT} alt="" draggable="false" className='w-7 h-7 self-end'></Image>
            <h1 className="font-normal text-4xl self-end">Sobre Nós</h1>
          </div>
          
        <div className="w-[85vw] h-190 mt-5 border-b border-t self-center">            
            <div className="text-center p-5">
             <p className="font-medium">
                Na VC Brinquedos Espumados, acreditamos que brincar é uma 
                das partes mais importantes da infância — e deve ser feita com 
                segurança, criatividade e alegria!
              </p>
              <br />
              <p className="font-medium">                
                Somos uma loja especializada na produção e venda de brinquedos 
                espumados, ideais para escolas, creches, brinquedotecas, espaços 
                recreativos e ambientes que priorizam o bem-estar das crianças. <br /> 
                Nossos produtos são desenvolvidos com materiais macios, duráveis e 
                coloridos, pensados para estimular o aprendizado, o movimento e a 
                imaginação de forma segura.
              </p>
              <br />
              <p className="font-medium">
                Nosso compromisso vai além da diversão: prezamos pela qualidade, 
                resistência e segurança, sempre seguindo normas rigorosas para 
                garantir tranquilidade a pais, educadores e instituições.
              </p>
              <br />
              <p className="font-medium">
                Cada peça da VC Brinquedos Espumados é criada com carinho e 
                responsabilidade, porque sabemos que brincar é coisa séria
                — e também a forma mais bonita de crescer.
              </p>
            </div>
          </div>          
        </div>
      </section>

      <section className="flex w-full h-200 justify-center">
        <div className="flex flex-col">
          <div className="flex w-[90vw] h-30 pb-5 align-end justify-center border-b ">
            <Image src={btnTT} alt="" draggable="false" className='w-7 h-7 self-end'></Image>
            <h1 className="font-normal text-4xl self-end">Entre em contato</h1>
          </div>
          
        <div className="w-[85vw] h-150 mt-5 border self-center">            
            <div>
              {/* estrutura do footer, provavelmente dividida em 2 partes: img com background e parte abaixo dela*/}
              <Footer/>
            </div>
          </div>          
        </div>
      </section>

    </section>
    

  );
}


