"use client"
import { BsFacebook, BsWhatsapp, BsEnvelope, BsTelephone, BsLinkedin, BsTwitter, BsTwitterX, BsInstagram, BsSun, BsMoon, BsMap, BsMessenger} from "react-icons/bs";
import { Tab } from '@headlessui/react'
import { useEffect, useState } from "react";
import ProductCard from "./Product";
import { useRouter }  from 'next/navigation';
import { ResponseData } from "@/models/ResponseData";
import axios from "axios";
import { baseUrl } from "./url";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { BiSolidMessage } from "react-icons/bi";
import { saveAs } from 'file-saver';


//@ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  type Categorie = {
    Produits: Product[],
    Services:  Product[],
    Catalogues: Product[]
  }
export default function Page({slug} : {slug: string}){
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState<User>();
    const [carte , setCarte] = useState<string>();
    const [categories, setCategories] = useState<Categorie>({Produits : [],Services : [],Catalogues : []})
    const [color, setColor] = useState<string | undefined>();
    const [textColor, setTextColor] = useState<string | undefined>("#FFFFFF");
    const [vcf , setVcf]= useState<string | undefined>();
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
         // Créer un nouveau Blob contenant le texte
      const blob = new Blob([vcf ?? ''], { type: "text/plain;charset=utf-8" });
      var vcfURL = URL.createObjectURL(blob);
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Si c'est un appareil mobile, ouvrez le fichier VCF dans une nouvelle fenêtre
        window.open(vcfURL, '_blank');
    } else {
        // Si c'est un ordinateur de bureau, téléchargez le fichier VCF
        var a = document.createElement('a');
        a.href = vcfURL;
        a.download = slug + '.vcf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
      // Enregistrer le fichier en tant que "example.txt"
     // saveAs(blob, slug +".vcf");

      }
      const openCarte = () =>{
        window.open(carte, '_blank');
      }
      return(
        <div 
        className={`bg-orange-800	 text-xs md:text-base md:px-24 px-2 md:pt-12 pt-8 pb-12 text-white`}>
           <div className="shadow-xl md:px-12 px-2 md:py-20 py-6 bg-gradient-to-tr from-orange-700 via-orange-700 to-orange-400 rounded-xl flex md:flex-row flex-row-reverse">
              <div className="md:w-3/5 w-1/2"> 
                <div className="md:text-7xl hidden md:flex">AGNO</div>
                <div className="`font-bold mb-2 md:mt-12 mt-2 md:text-6xl text-sm">{user?.firstName}</div>
                <div className="md:text-2xl text-xs">{user?.businessName}</div>
                <div className="md:text-xl space-y-2 text-sm ">
                <div onClick={()=>openLink("mailto: " + user?.email)}
                        className=" md:mt-12 md:px-2 py-1 space-x-2 cursor-pointer   text-xs md:text-base flex items-center">
                            <BsEnvelope className=""/> <span className="truncate">{user?.email}</span>
                </div>
                  <div onClick={()=>openLink("tel: " + user?.email)}
                        className="md:px-2 py-1 space-x-2 cursor-pointer text-xs md:text-base flex items-center ">
                             <BsTelephone /> <span className="truncate text-wrap">{user?.phone}</span>
                  </div>
  
                    {user?.address && <div onClick={()=>openLink("mailto: " + user?.email)}
                        className="flex md:px-2 py-1 items-center space-x-2 text-xs md:text-base cursor-pointer">
                            <BsMap/> <span className="truncate text-wrap">{user?.address}</span>
                        </div>}
                  
                  </div>
                  <div onClick={()=>openVcf()}  className="border md:mt-12 mt-7 text-center rounded-md md:p-4 p-2 hover:bg-orange-600 text-xs md:text-xl md:w-1/2 cursors-pointer">
                           Telecharger mon contact
                  </div>
                  <div onClick={()=>openCarte()}   className="border md:mt-4 mt-2 text-center rounded-md md:p-4 p-2 hover:bg-orange-600 text-xs md:text-xl md:w-1/2">
                          Telercharger la carte
                  </div>
               
              </div>

              <div className="md:w-2/5 w-1/2 p-2">
              <img src={user?.picture} alt="" 
                     className="md:h-[500px] md:w-96  h-48 w-56 rounded-lg md:mr-24" />
              </div>
           </div>
           
           <div className="md:mt-12 mt-5 shadow-xl rounded-xl md:p-12 p-4 bg-gradient-to-tr from-orange-700 via-orange-700 to-orange-400 grid gap-4 md:grid-cols-5 grid-cols-4">
           <div onClick={()=>openLink("sms:" + user?.phone)} className="
                        bg-orange-600 flex text-center justify-center  rounded-full px-2 py-1 items-center  space-x-2  cursor-pointer">
                                <BiSolidMessage/> <span className="hidden md:flex">SMS</span>
                        </div> 
           {user?.facebook &&  
                        <div onClick={()=>openLink(user?.facebook ?? '')} className="bg-orange-600 flex
                        rounded-full px-2 text-center justify-center  py-1 items-center  space-x-2  cursor-pointer">
                            <BsFacebook/> <span className="hidden md:flex">Facebook</span>
                        </div>} 
                        {user?.whatsapp && 
                        <div onClick={()=>openLink("https://wa.me/" + user?.whatsapp+ "/?text=Bonjour, j'espère que vous allez bien. J'ai pris votre numéro sur votre site web. Pourrions-nous échanger?")} className="
                        bg-orange-600 flex text-center justify-center  rounded-full px-2 py-1 items-center  space-x-2  cursor-pointer">
                                <BsWhatsapp/> <span className="hidden md:flex">Whatsapp</span>
                        </div>  } 
                        {user?.linkedin &&  
                        <div onClick={()=>openLink(user?.linkedin ?? '')} className="bg-orange-600 flex
                        rounded-full px-2 text-center  justify-center py-1 items-center  space-x-2  cursor-pointer">
                            <BsLinkedin/> <span className="hidden md:flex">LinkedIn</span>
                        </div>}   
                        {user?.twitter &&  
                        <div onClick={()=>openLink(user?.twitter ?? '')} className="bg-orange-600 flex
                        rounded-full px-2 text-center  py-1 items-center justify-center  space-x-2  cursor-pointer">
                            <BsTwitterX/> <span className="hidden md:flex">X(Twitter)</span>
                        </div>}                  
                        {user?.instagram &&  
                        <div onClick={()=>openLink(user?.twitter ?? '')} className="bg-orange-600 flex
                        rounded-full px-2 text-center justify-center  py-1 items-center  space-x-2  cursor-pointer">
                            <BsInstagram/> <span className="hidden md:flex">Instagram</span>
                        </div>}  
           </div>
          
          
        <div className="md:mt-12 mt-5 md:pt-8 pt-4 bg-gradient-to-tr from-orange-700 via-orange-700 to-orange-400 rounded-xl ">
        <div className="flex justify-center font-bold  md:text-5xl text-2xl">
                Catalogue
            </div>
        <div className="flex justify-center" id="catalogue"> 
            <div className="md:w-[900px] w-full  px-2 md:py-16 py-5 sm:px-0   ">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl border border-white p-1">
                    
                    {Object.keys(categories).map((category) => (
                        <Tab
                        key={category}
                        className={({ selected }) =>
                            classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium hover:bg-orange-600',
                            selected
                                ? 'bg-orange-600'
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
                        className={'rounded-xl p-3 bg-blue-900/20'}
                        >
                          {posts.length == 0 && <div className="flex justify-center  text-black font-bold">Aucun items disponible</div>}
                        <ul className="grid gap-4 md:grid-cols-3 grid-cols-2">
                            {posts.map((post, index) => (
                            <ProductCard key={index} image={post.picture} title={post.title} description={post.description}/>
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

