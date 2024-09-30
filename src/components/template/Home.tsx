

"use client"
import { BsFacebook, BsWhatsapp, BsEnvelope, BsTelephone, BsLinkedin, BsTwitter, BsTwitterX, BsInstagram, BsSun, BsMoon, BsMap, BsMessenger} from "react-icons/bs";
import { Tab } from '@headlessui/react'
import { useEffect, useState } from "react";
import ProductCard from "../Product";
import { useRouter }  from 'next/navigation';
import { ResponseData } from "@/models/ResponseData";
import axios from "axios";
import { baseUrl } from "../url";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { BiMessage, BiSolidMessage } from "react-icons/bi";
import CatalogueCard from "../Catalogue";


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
    const [color, setColor] = useState<string | undefined>("#0022ff");
    const [textColor, setTextColor] = useState<string | undefined>("#FFFFFF");
    const [vcf , setVcf]= useState<string | undefined>();  
   
  
  
    useEffect(()=>{
      axios.post(`${baseUrl}accounts/key/web/scan`,{key : slug}).then((response)=>{
        let data = response.data.data;
        let color =data.account.color; 
        if(color == "#FFFFFF" ){
          setTextColor("#1F2937");
        }
       //  setColor(color);
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
      return(
        <div 
        className={` text-xs md:text-base md:px-24 px-2 md:pt-12 pt-2 pb-12
         text-slate-800 flex justify-center flex-col items-center`}>
            <div className="md:shadow-xl rounded-md bg-gray-100 py-3">
            <div className="flex justify-center items-center mb-2">
                <img src={user?.picture}   alt="Image" className="md:h-96 md:w-96 h-48 w-48 rounded-full"/>
           </div>
           <div className="bg-gray-200 py-5 flex justify-center font-bold md:text-2xl text-xs">
                {user?.businessName}
           </div>
           <div  className="font-bold my-3 md:text-7xl text-3xl text-center">{user?.firstName}</div>
            <div onClick={()=>openLink("tel: " + user?.phone)}
                        className="flex justify-center my-2 py-3 space-x-4 bg-gray-200 cursor-pointer">
                            <span className="uppercase ">Appelez moi ici</span>
                             <BsTelephone  style={{color : color, borderColor : color}} 
                             className="text-2xl border py-1 rounded-full" /> 
                             <span className="mt-1 truncate text-wrap md:mt-0">{user?.phone}</span>
            </div>
            <div onClick={()=>openLink("mailto: " + user?.email)}
                        className="flex flex-col justify-center items-center mt-3 cursor-pointer">
                            <BsEnvelope style={{color : color, borderColor : color}} className="text-2xl font-bold border py-1 rounded-full"/> 
                            <span className="break-words whitespace-normal mt-1 md:mt-0">{user?.email}</span>
                </div>
                {user?.address && <div 
                        className="lex flex-col justify-center items-center mt-3 cursor-pointer">
                            <BsMap/> <span style={{color : color, borderColor : color}} className="text-2xl font-bold border py-1 rounded-full">{user?.address}</span>
                        </div>}
          
          <div className="flex justify-center">
          <div className="mt-5 rounded-xl  p-4  grid gap-4 md:grid-cols-5 grid-cols-4">
           <div onClick={()=>openLink("sms:" + user?.phone)} className="
                        flex text-center justify-center  rounded-full px-2 py-1 items-center  space-x-2  cursor-pointer">
                                <BiMessage className="text-yellow-500 text-2xl"/> 
                                <span className="hidden md:flex">SMS</span>
                        </div> 
            {user?.facebook &&  
                        <div onClick={()=>openLink(user?.facebook ?? '')} className=" flex
                        rounded-full px-2 text-center justify-center  py-1 items-center  space-x-2  cursor-pointer">
                            <BsFacebook className="text-blue-700 text-2xl"/> <span className="hidden md:flex">Facebook</span>
                        </div>} 
                        {user?.whatsapp && 
                        <div onClick={()=>openLink("https://wa.me/" + user?.whatsapp+ "/?text=Bonjour, j'espère que vous allez bien. J'ai pris votre numéro sur votre site web. Pourrions-nous échanger?")} className="
                         flex text-center justify-center  rounded-full px-2 py-1 items-center  space-x-2  cursor-pointer">
                                <BsWhatsapp className="text-green-700 text-2xl"/> <span className="hidden md:flex">Whatsapp</span>
                        </div>  } 
                        {user?.linkedin &&  
                        <div onClick={()=>openLink(user?.linkedin ?? '')} className="flex
                        rounded-full px-2 text-center  justify-center py-1 items-center  space-x-2  cursor-pointer">
                            <BsLinkedin/> <span className="hidden md:flex">LinkedIn</span>
                        </div>}   
                        {user?.twitter &&  
                        <div onClick={()=>openLink(user?.twitter ?? '')} className="flex
                        rounded-full px-2 text-center  py-1 items-center justify-center  space-x-2  cursor-pointer">
                            <BsTwitterX className="text-2xl"/> <span className="hidden md:flex">X(Twitter)</span>
                        </div>}                  
                        {user?.instagram &&  
                        <div onClick={()=>openLink(user?.twitter ?? '')} className=" flex
                        rounded-full px-2 text-center justify-center  py-1 items-center  space-x-2  cursor-pointer">
                            <BsInstagram className="text-fuchsia-700 text-2xl"/> <span className="hidden md:flex">Instagram</span>
                        </div>}  
           </div>
          </div>
                    
          <div className="flex justify-center">
            <div className="flex flex-row justify-center w-4/5"> 
                    <div onClick={()=>openVcf()}  
                        className={"border text-white md:h-16  mt-7 text-center rounded-md md:p-4 p-2    text-xs md:text-xl md:w-1/2 cursor-pointer "} style={{backgroundColor : color}}>
                            Telecharger mon contact
                    </div>
                    <div onClick={()=>openCarte()}   
                    className={"border text-white md:h-16  mt-7 text-center rounded-md md:p-4 p-2  text-xs md:text-xl md:w-1/2 cursor-pointer "} style={{backgroundColor : color}}>
                            Telercharger la carte
                    </div>
                </div>
          </div>
          
        <div className="md:mt-12 mt-5 md:pt-8 pt-4  rounded-xl">
        <div className="flex justify-center font-bold  md:text-5xl text-2xl">
                Catalogue
            </div>
        <div className="flex justify-center px-2" id="catalogue"> 
            <div className="md:w-[900px] w-full  px-2 md:py-16 py-5 sm:px-0   ">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl border border-black p-1">
                    
                    {Object.keys(categories).map((category) => (
                        <Tab
                        key={category}
                        className={({ selected }) =>
                            classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium',
                            selected
                                ? ''
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
                        className={'rounded-xl p-3'}
                        >
                          {posts.length == 0 && <div className="flex justify-center  text-black font-bold">Aucun items disponible</div>}
                        <ul className="grid gap-4 md:grid-cols-3 grid-cols-1">
                            {posts.map((post, index) => (
                              post.title == "CATALOG" ?<CatalogueCard 
                              whatsapp={user?.whatsapp} title={post.title} email={user?.email} image={post.picture}/> :
                            <ProductCard key={index} whatsapp={user?.whatsapp} 
                            image={post.picture} title={post.title} color={color}
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
        

        </div>
    )
         
}

