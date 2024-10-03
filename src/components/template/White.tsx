

"use client"
import { BsFacebook, BsWhatsapp, BsEnvelope, BsTelephone, BsLinkedin, BsTwitterX, BsInstagram, BsMap} from "react-icons/bs";
import { Tab } from '@headlessui/react'
import { useEffect, useState } from "react";
import ProductCard from "../Product";
import { useRouter }  from 'next/navigation';
import { ResponseData } from "@/models/ResponseData";
import axios from "axios";
import { baseUrl } from "../url";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { BiMessage } from "react-icons/bi";
import CatalogueCard from "../Catalogue";
import Image from "next/image";

//@ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  type Categorie = {
    Produits: Product[],
    Services:  Product[],
    Catalogues: Product[],
    Portfolio : Product[]
  }
export default function Page({slug} : {slug: string}){
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState<User>();
    const [carte , setCarte] = useState<string>();
    const [categories, setCategories] = useState<Categorie>({Produits : [],Services : [], Portfolio : [],Catalogues : []})
    const [color, setColor] = useState<string | undefined>();
    const [textColor, setTextColor] = useState<string | undefined>("#FFFFFF");
    const [vcf , setVcf]= useState<string | undefined>();  
    const [loading,setLoading] = useState(true);
   
  
  
    useEffect(()=>{
      axios.post(`${baseUrl}accounts/key/web/scan`,{key : slug}).then((response)=>{
        let data = response.data.data;
        let color =data.account.color; 
        if(color == "#FFFFFF" ){
          setTextColor("#1F2937");
        }
        setColor(color);
        let responseData : ResponseData = {
          products : data.products,
          user : data.account,
          carte : data.businessCardPicture,
          carteInformation : data.businessCard,
          vcf : data.vcf
        }
        setUser(responseData.user);
        setCarte(responseData.carte);
        setVcf(responseData.vcf);
        if(responseData.products){
          setCategories({
            Produits: responseData.products.filter((item)=>item.type == "PRODUCT"),
            Services: responseData.products.filter((item)=>item.type == "SERVICE"),
            Portfolio :responseData.products.filter((item)=>item.type == "PORTFOLIO"),
            Catalogues: responseData.products.filter((item)=>item.type == "CATALOG"),
          })
        }
        setLoading(false);
      }).catch(error=>{
        setColor("#242834");
      });
    },[])
      const openLink = (link : string)=>{
        router.push(link);
      }
      const openVcf = ()=>{
        var contactsUrl = 'data:text/x-vcard;charset=utf-8,' + encodeURIComponent(vcf ?? '');
        window.location.href = contactsUrl; 
      }
      const openCarte = () =>{
        window.open(carte, '_blank');
      }

      if(loading)
        return(
          <div className="h-screen flex justify-center items-center relative">
          <div className="relative">
              <Image src="/logoagno.png" alt="Logo d'Agno" width={100} height={50} />
              <div className="loader"></div>
          </div>
      
          <style jsx>{`
              .loader {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  width: 150px; /* Ajuste la taille du cercle de chargement */
                  height: 150px;
                  border: 5px solid rgba(255, 255, 255, 0.5);
                  border-top: 5px solid #EA7D0A; /* Couleur du cercle */
                  border-radius: 50%;
                  animation: spin 1s linear infinite;
                  transform: translate(-50%, -50%);
              }
      
              @keyframes spin {
                  0% { transform: translate(-50%, -50%) rotate(0deg); }
                  100% { transform: translate(-50%, -50%) rotate(360deg); }
              }
          `}</style>
      </div>
      
        )
      return(
        <div 
        className={`bg-white text-xs md:text-base md:px-24 px-2 md:pt-12 pt-8 pb-12 text-slate-800`}>
           <div className="shadow-xl md:px-12 px-2 md:py-20 py-6 bg-gradient-to-tr from-slate-200 via-slate-200
            to-slate-50 rounded-xl flex md:flex-row flex-col-reverse">
              <div className="md:w-3/5 w-full"> 
                <div className="`font-bold mb-2 md:mt-12 md:text-7xl text-4xl flex justify-center md:justify-start">
                  {user?.firstName}
                </div>
                <div className="md:text-2xl text-xs flex justify-center md:justify-start">{user?.businessName}</div>
                <div className="md:text-xl space-y-2 text-sm ">
                  <div onClick={()=>openLink("mailto: " + user?.email)}
                          className=" md:mt-12 md:px-2 py-1 space-x-2 cursor-pointer 
                            text-xs md:text-base flex items-center  justify-center md:justify-start">
                              <BsEnvelope className=""/> 
                              <span className="break-words whitespace-normal">{user?.email}</span>
                  </div>
                  <div onClick={()=>openLink("tel: " + user?.email)}
                        className="md:px-2 py-1 space-x-2 cursor-pointer text-xs md:text-base flex items-center  justify-center md:justify-start">
                             <BsTelephone /> <span className="truncate text-wrap">{user?.phone}</span>
                  </div>
                    {user?.address && <div onClick={()=>openLink("mailto: " + user?.email)}
                        className="flex md:px-2 py-1 items-center space-x-2 text-xs md:text-base cursor-pointer  justify-center md:justify-start">
                            <BsMap/> <span className="truncate text-wrap">{user?.address}</span>
                        </div>}
                </div>
                <div onClick={()=>openVcf()}  className="border md:mt-12 mt-7 text-center rounded-md md:p-4 p-2 bg-slate-300  text-xs md:text-xl md:w-1/2 cursor-pointer">
                           Telecharger mon contact
                </div>
                <div onClick={()=>openCarte()}   className="border md:mt-4 mt-2 text-center rounded-md md:p-4 p-2 bg-slate-300 text-xs md:text-xl md:w-1/2 cursor-pointer">
                          Telercharger la carte
                </div>
              </div>
              <div className="md:w-2/5 w-full p-2 flex flex-col justify-center items-center">
              <img src={user?.picture} alt="" 
                     className="md:h-96 md:w-96  h-56 w-56 rounded-full" />
              </div>
           </div>
           
           <div className="md:mt-12 mt-5 shadow-xl rounded-xl md:p-12 p-4 bg-gradient-to-tr from-slate-200 via-slate-200 to-slate-50 grid gap-4 md:grid-cols-5 grid-cols-4">
           <div onClick={()=>openLink("sms:" + user?.phone)} className="
                        bg-slate-300 flex text-center justify-center  rounded-full px-2 py-1 items-center  space-x-2  cursor-pointer">
                                <BiMessage className="text-yellow-500"/> <span className="hidden md:flex">SMS</span>
                        </div> 
            {user?.facebook &&  
                        <div onClick={()=>openLink(user?.facebook ?? '')} className="bg-slate-300 flex
                        rounded-full px-2 text-center justify-center  py-1 items-center  space-x-2  cursor-pointer">
                            <BsFacebook className="text-blue-700"/> <span className="hidden md:flex">Facebook</span>
                        </div>} 
                        {user?.whatsapp && 
                        <div onClick={()=>openLink("https://wa.me/" + user?.whatsapp+ "/?text=Bonjour, j'espère que vous allez bien. J'ai pris votre numéro sur votre site web. Pourrions-nous échanger?")} className="
                        bg-slate-300 flex text-center justify-center  rounded-full px-2 py-1 items-center  space-x-2  cursor-pointer">
                                <BsWhatsapp className="text-green-700"/> <span className="hidden md:flex">Whatsapp</span>
                        </div>  } 
                        {user?.linkedin &&  
                        <div onClick={()=>openLink(user?.linkedin ?? '')} className="bg-slate-300 flex
                        rounded-full px-2 text-center  justify-center py-1 items-center  space-x-2  cursor-pointer">
                            <BsLinkedin/> <span className="hidden md:flex">LinkedIn</span>
                        </div>}   
                        {user?.twitter &&  
                        <div onClick={()=>openLink(user?.twitter ?? '')} className="bg-slate-300 flex
                        rounded-full px-2 text-center  py-1 items-center justify-center  space-x-2  cursor-pointer">
                            <BsTwitterX/> <span className="hidden md:flex">X(Twitter)</span>
                        </div>}                  
                        {user?.instagram &&  
                        <div onClick={()=>openLink(user?.twitter ?? '')} className="bg-slate-300 flex
                        rounded-full px-2 text-center justify-center  py-1 items-center  space-x-2  cursor-pointer">
                            <BsInstagram className="text-fuchsia-700"/> <span className="hidden md:flex">Instagram</span>
                        </div>}  
           </div>
          
          
        <div className="md:mt-12 mt-5 md:pt-8 pt-4 bg-gradient-to-tr from-slate-200 via-slate-200 to-slate-50 rounded-xl ">
        <div className="flex justify-center font-bold  md:text-5xl text-2xl">
                Catalogue
            </div>
        <div className="flex justify-center" id="catalogue"> 
            <div className="md:w-[900px] w-full  px-2 md:py-16 py-5 sm:px-0   ">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl border border-black p-1">
                    
                    {Object.keys(categories).map((category) => (
                        <Tab
                        key={category}
                        className={({ selected }) =>
                            classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium hover:bg-slate-300',
                            selected
                                ? 'bg-slate-300'
                                : ''
                            )
                          }
                        >
                        {category}
                        </Tab>
                    ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                      
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                        key={idx}
                        className={'rounded-xl p-3 bg-slate-300'}
                        >
                          {posts.length == 0 && <div className="flex justify-center  text-black font-bold">Aucun items disponible</div>}
                        <ul className="grid gap-4 md:grid-cols-3 grid-cols-1">
                            {posts.map((post, index) => (
                              post.title == "CATALOG" ?<CatalogueCard 
                              whatsapp={user?.whatsapp} title={post.title} email={user?.email} image={post.picture}/> :
                            <ProductCard key={index} whatsapp={user?.whatsapp} 
                            image={post.picture} title={post.title} 
                            description={post.description} email={user?.email}/>
                            ))}
                        </ul>
                        </Tab.Panel>
                    ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
        </div>

        </div>
    )
         
}

