import "./app.css"
import { useEffect } from "react"
import { Swiper,SwiperSlide } from "swiper/react"
import {Autoplay,Parallax} from "swiper/modules"
import img from "./assets/baixados.jpg"
import img2 from "./assets/Café Landwer, Peterborough, Ontario.jpg"
import img3 from "./assets/1.jpg"
import img4 from "./assets/cafe.jpg"
import img5 from "./assets/Field day.jpg"
import img6 from "./assets/baixados (2).jpg"
import footerMobile from "./footer/div.png"
import footerDesktop from "./footer/div.col-12 (1).png"



export default function App() {
    
    
  useEffect(() => {
       const menuDown = document.querySelector(".menuDown")
       const menuUp = document.querySelector(".menuUp")
       menuDown.addEventListener("mouseover", () => {
            menuUp.style.filter = "blur(5px)"  
       })   
       menuDown.addEventListener("mouseout", () => {
            menuUp.style.filter = "blur(0)"  
       })   
   },[])

  return(
    <main className="w-full flex flex-col items-center bg-backgroundLight">  

         <div className="w-full flex flex-col h-screen md:flex-row items-start justify-center relative">
              
             {/* MOBILE MENU  */}
             <div className="w-full fixed top-0 flex flex-col absolute items-end md:hidden">

                  <input type="checkbox" className="menu-btn hidden" id="menu-btn"/>
                  <label htmlFor="menu-btn" className="menu-icon">
                       <i class="ri-menu-fill text-3xl"></i>       
                  </label>  
      
                  <nav id="menuMobile" className="w-full text-base font-medium uppercase px-5 flex flex-col items-end bg-backgroundGray gap-3">
                      <a className="w-full py-2 px-1 text-end border-b-2 border-gray-400" href="#">Restaurante</a>         
                      <a className="w-full py-2 px-1 text-end border-b-2 border-gray-400" href="#">Menu</a>         
                      <a className="w-full py-2 px-1 text-end border-b-2 border-gray-400" href="#">Localização</a>         
                      <a className="w-full py-2 px-1 text-end border-b-2 border-gray-400" href="#">Maria Hernandez</a>         
                  </nav>                            
              </div>  
               {/* MOBILE MENU  */}

              <div className="w-full max-w-7xl flex flex-col md:max-w-5xl md:translate-y-14 items-start justify-center px-5 py-3 gap-4 mt-32 md:gap-10">
                  <h2 className="font-bold font-josefin text-2xl md:text-4xl tracking-wide">
                      Café Mariah   
                  </h2>   
                  <div className="w-full flex flex-col items-start gap-7">
                      <span className="font-extrabold font-josefin uppercase text-sm md:text-xl md:max-w-2xl text-start tracking-wider leading-7">
                          uma jornada de sabores artesanais.
                          transformação de grãos cuidadosamente.
                          de blends suaves a expressos intensos.
                          tudo é café mariah.    
                      </span>  
                      <p className="text-xs text-start md:max-w-3xl md:text-sm">
                           Maria Hernandez, apaixonada por café e culinária,
                            deu vida ao Cafe Mariah. Inspirada por um café 
                            encantador que descobriu em suas viagens, Maria 
                            abriu as portas, oferecendo cafés artesanais e sobremesas 
                            caseiras. Logo, o aroma irresistível e o ambiente acolhedor 
                            transformaram o Cafe Mariah em um ponto de encontro querido pelos moradores. 
                            Com cada xícara, Maria compartilha não apenas seu amor pelo café, mas também 
                            a história de um refúgio gastronômico que começou com sua paixão.
                      </p>
                   </div>
              </div> 

             
                  <div className="hidden md:flex flex-col text-lg gap-2 text-colorCafe w-48 items-start absolute right-0 top-5">
                       <a className="link font-semibold py-2" href="#restaurante">Restaurante</a>  
                       <a className="link font-semibold py-2" href="#menu">Menu</a>  
                       <a className="link font-semibold py-2" href="#">Localização</a>  
                       <a className="link font-semibold py-2" href="#">Maria Hernandez</a>  
                       
                       <div className="circle w-40 h-40 bg-colorCafeWeak absolute right-0 top-2">
                       </div>
                       <div className="w-full flex gap-2 items-center justify-center">
                           <i class="icon ri-instagram-fill text-2xl cursor-pointer"></i>
                           <i class="icon ri-facebook-box-fill text-2xl cursor-pointer"></i>
                        </div> 

                        <div  className="divMug w-full flex flex-col items-center justify-center mt-2">
                            <svg className="mug" width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M14.032 5H5.96802C5.52939 4.99999 5.15087 4.99998 4.83762 5.02135C4.50779 5.04386 4.17788 5.09336 3.85195 5.22836C3.11687 5.53285 2.53285 6.11687 2.22836 6.85195C2.09336 7.17788 2.04386 7.50779 2.02135 7.83762C1.99998 8.15087 1.99999 8.52934 2 8.96797V15.6667C2 17.7784 2.16809 19.6089 3.56583 20.7366C4.24347 21.2833 5.11558 21.5861 6.14322 21.7617C7.17262 21.9377 8.44648 22 10 22C11.5535 22 12.8274 21.9377 13.8568 21.7617C14.8844 21.5861 15.7565 21.2833 16.4342 20.7366C17.528 19.8541 17.8688 18.5412 17.9652 17H19C20.6569 17 22 15.6569 22 14V11C22 9.34315 20.6569 8 19 8H17.9877C17.9852 7.94407 17.9822 7.88994 17.9787 7.83762C17.9561 7.50779 17.9066 7.17788 17.7716 6.85195C17.4672 6.11687 16.8831 5.53285 16.1481 5.22836C15.8221 5.09336 15.4922 5.04386 15.1624 5.02135C14.8491 4.99998 14.4706 4.99999 14.032 5ZM18 10V15H19C19.5523 15 20 14.5523 20 14V11C20 10.4477 19.5523 10 19 10H18Z" fill="#323232"/>
                            </svg>        
                   
                        </div>           
                  </div>   
           </div>   


           <div id="restaurante" className="w-full flex flex-col items-center h-[350px] md:h-[700px] bg-colorIce mt-32 md:mt-20 mb-20">
               <div className="w-full flex max-w-7xl px-2 items-center h-full">
                          
                     <Swiper
                         modules={[Autoplay,Parallax]}
                         spaceBetween={40}
                         slidesPerView={1}
                         autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                         }}
                         parallax={true}
                         speed={700}
                         className="wrapper-slider"
                      >
                       
                        <SwiperSlide className="w-full flex items-center justify-center">
                           <div className="w-full md:h-full gap-2 md:gap-5 py-2 grid grid-cols-5 grid-rows-2 md:grid-rows-4">
                                <span className="drop-shadow-lg font-josefin absolute text-lg md:text-2xl translate-x-20 translate-y-40 font-extrabold text-colorCafe tracking-widest md:tracking-[15px] uppercase">
                                    Cafe Mariah
                                </span>
                                <span className="drop-shadow-lg hidden font-josefin md:flex absolute text-lg md:text-2xl translate-x-96 translate-y-96 font-extrabold text-colorCafe tracking-widest md:tracking-[15px] uppercase">
                                    Cafe Mariah
                                </span>
                               <img className="w-full rounded-sm shadow-xl max-h-40 md:max-h-max h-full object-cover col-start-2 col-end-4 md:row-start-1 md:row-end-3" src={img} alt="img"/>     
                               <img className="w-full rounded-sm shadow-xl max-h-40 md:max-h-max h-full object-cover col-start-4 col-end-6 md:row-start-1 md:row-end-5" src={img2} alt="img2"/>     
                               <img className="w-full rounded-sm shadow-xl h-full max-h-40 md:max-h-max -z-10 -translate-y-8 md:translate-x-10 object-cover row-start-2 row-end-3 col-start-1 col-end-4 md:col-end-3 md:row-start-3 md:row-end-5" src={img3} alt="img3"/>     
                           </div>

                        </SwiperSlide>

                        <SwiperSlide className="w-full flex items-center justify-center">
                               <div className="w-full md:h-full gap-2 md:gap-5 py-2 grid grid-cols-8 grid-rows-3 md:grid-rows-4">
                                    <span className="drop-shadow-lg font-josefin absolute text-lg md:text-2xl translate-x-5 translate-y-40 font-extrabold text-colorCafe tracking-widest md:tracking-[15px] uppercase">
                                            Cafe Mariah
                                    </span>   
                                    <span className="drop-shadow-lg font-josefin absolute text-lg md:text-2xl translate-x-[800px] translate-y-96 font-extrabold text-colorCafe tracking-widest md:tracking-[15px] uppercase">
                                            Cafe Mariah
                                    </span>   
                                     <img className="w-full rounded-sm shadow-xl h-full max-h-40 object-cover md:max-h-max col-start-1 col-end-6 md:col-end-5 row-start-1 row-end-2 md:row-start-1 md:row-end-3" src={img6} alt="img" />  
                                     <img className="w-full rounded-sm shadow-xl h-full max-h-40 object-cover md:max-h-max col-start col-start-6 col-end-9 row-start-1 row-end-2 md:row-start-1 md:row-end-3" src={img4} alt="img" />  
                                     <img className="w-full rounded-sm shadow-xl h-full max-h-40 object-cover md:max-h-max col-start-3 col-end-8 md:col-end-7 md:-translate-y-20 -z-10 row-start-2 row-end-4 md:row-start-3 md:row-end-5" src={img5} alt="img" />  

                               </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-full flex items-center justify-center">
                               <div className="w-full md:h-full gap-2 md:gap-5 py-2 grid grid-cols-8 grid-rows-3 md:grid-rows-4">
                                    <span className="drop-shadow-lg font-josefin absolute text-lg md:text-2xl translate-x-5 translate-y-40 font-extrabold text-colorCafe tracking-widest md:tracking-[15px] uppercase">
                                            Cafe Mariah
                                    </span>   
                                    <span className="drop-shadow-lg font-josefin absolute text-lg md:text-2xl translate-x-[800px] translate-y-96 font-extrabold text-colorCafe tracking-widest md:tracking-[15px] uppercase">
                                            Cafe Mariah
                                    </span>   
                                     <img className="w-full rounded-sm shadow-xl h-full max-h-40 object-cover md:max-h-max col-start-1 col-end-6 md:col-end-5 row-start-1 row-end-2 md:row-start-1 md:row-end-3" src={img} alt="img" />  
                                     <img className="w-full rounded-sm shadow-xl h-full max-h-40 object-cover md:max-h-max col-start col-start-6 col-end-9 row-start-1 row-end-2 md:row-start-1 md:row-end-3" src={img3} alt="img" />  
                                     <img className="w-full rounded-sm shadow-xl h-full max-h-40 object-cover md:max-h-max col-start-3 col-end-8 md:col-end-7 md:-translate-y-20 -z-10 row-start-2 row-end-4 md:row-start-3 md:row-end-5" src={img5} alt="img" />  

                               </div>
                        </SwiperSlide>
                                          
                      </Swiper>  
               </div>           
           </div>   

           <div id="menu" className="w-full flex flex-col items-center justify-center h-[400px] px-5 md:mt-32 mb-20">
                  <div className="w-full flex max-w-7xl items-center relative gap-5 md:gap-0">
                     <div className="w-full flex items-center justify-center">
                        <span className="w-full text-sm md:text-base block text-center max-w-xs">
                           Reserve a mesa pelo WhatsApp ou aproveite o serviço de entrega
                        </span>
                     </div>

                    <div className="hidden lg:flex absolute w-[1px] rounded-md h-[400px] bg-colorCafeWeak translate-x-[650px]">
                    </div>

                     <div className="father w-full flex flex-col items-center justify-center gap-16">
                         <div className="menuUp w-full flex flex-col  items-center">
                              <a className="font-josefin text-center md:text-start font-extrabold text-lg md:text-xl uppercase tracking-wider" href="#">Menu do restaurante</a>
                              <a className="linkMenu" href="#">Vizualizar Menu</a>   
                         </div>  
                         <div className="menuDown w-full flex flex-col items-center">
                              <a className="font-josefin text-center md:text-start font-extrabold text-lg md:text-xl uppercase tracking-wider" href="#">Expressos Mariah</a>
                              <a className="linkMenu" href="#">Vizualizar Menu</a>     
                         </div> 
                    </div>

                  </div>
             </div>
              
             <div className="w-full flex flex-col items-center bg-colorIce py-10 md:p-0 md:mt-20">
                  <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-5 md:gap-5">
                        <img className="w-full shadow-md md:hidden" src={footerMobile} alt="footer"/>  
                        <img className="w-full hidden  max-w-[350px] h-[800px] object-cover md:flex" src={footerDesktop} alt="footer"/>  
                        <div className="w-full flex gap-2 items-center justify-center md:text-2xl md:font-black md:absolute md:translate-y-48 md:-translate-x-40">
                           <i class="icon2 ri-instagram-fill text-2xl cursor-pointer"></i>
                           <i class="icon2 ri-facebook-box-fill text-2xl cursor-pointer"></i>
                        </div>    
                         <div className="w-full flex flex-col items-center md:items-start gap-2 md:gap-4  text-sm md:text-base uppercase">
                               <span>Rua das flores</span>       
                               <span>Bairro encantado</span>       
                               <span>Cidade dos sabores,Est ,Panaa</span>       
                                <div className="flex flex-col items-center gap-2 font-bold md:mt-20">
                                    <span className="flex gap-2">
                                        Whatsapp
                                        <i class="ri-whatsapp-fill"></i>
                                    </span>

                                    <span>99 9236-8365</span>
                                </div>       

                        </div>     
                  </div>
             </div>
        
    </main>
  );
}
