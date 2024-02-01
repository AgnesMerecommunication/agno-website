"use client"
import { BsFacebook, BsWhatsapp, BsEnvelope, BsTelephone, BsLinkedin, BsTwitter, BsTwitterX, BsInstagram, BsSun, BsMoon} from "react-icons/bs";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { Tab } from '@headlessui/react'
import { useEffect, useState } from "react";
import ProductCard from "./Product";
import { useRouter }  from 'next/navigation';
import { ResponseData } from "@/models/ResponseData";
import axios from "axios";
import { baseUrl } from "./url";
import { Product } from "@/models/Product";
import { User } from "@/models/User";

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
    useEffect(()=>{
      axios.get(`${baseUrl}accounts/${slug}/web`).then((response)=>{
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
          carteInformation : data.businessCard
        }
        setUser(responseData.user);
        setCarte(responseData.carte);
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
    if(!color)
        return(
            <div>
               Loading...
            </div>
          )
      if(color)
          return(
              <div style={{backgroundColor : color, color : textColor}}
              className={`md:px-24 px-2 md:pt-12 pt-0 pb-12`}>
                  <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} 
                  style={{backgroundColor : color, color : textColor}} maxWidth="full">
                      <NavbarContent>
                          <NavbarMenuToggle
                          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                          className="sm:hidden"
                          />
                          <NavbarBrand>
                            <p className="font-bold text-inherit  md:text-3xl text-xl">{user?.firstName} {user?.lastName}</p>
                          </NavbarBrand>
                      </NavbarContent>
                      <NavbarContent className="hidden sm:flex gap-4  dark:text-white" justify="end">
                          <NavbarItem>
                          <div onClick={()=>openLink("#information")} className=" dark:text-white text-xl cursor-pointer">
                                  Information
                          </div>
                          </NavbarItem>
                          <NavbarItem > 
                          <div onClick={()=>openLink("#catalogue")}   className="dark:text-white text-xl  cursor-pointer">
                                  Catalogue
                          </div>
                          </NavbarItem>
                          <NavbarItem>
                          <div onClick={()=>openLink("#contact")}
                          className="bg-[#ff6201] text-gray-200 px-2 py-1 rounded-2xl  flex 
                                  space-x-2 items-center">
                              <BsTelephone />
                                      <span>Contactez</span>
                          </div>
                          </NavbarItem>
                      </NavbarContent>
                      <NavbarMenu className="dark:bg-white">
                          <NavbarMenuItem key={''}>
                              <div  onClick={()=>{openLink("#information"); setIsMenuOpen(!isMenuOpen);}}
                                    className="font-bold text-xl text-black">
                                  Informations
                              </div>
                          </NavbarMenuItem>
                          <NavbarMenuItem key={''}>
                              <div  onClick={()=>{openLink("#catalogue"); setIsMenuOpen(!isMenuOpen);}}
                                    className="font-bold text-xl text-black">
                                Catalogue
                              </div>
                          </NavbarMenuItem>
                      </NavbarMenu>
                  </Navbar>
                  <div className="flex md:mt-24 mt-12 flex-col md:flex-row" id="information">
                      <div className="md:w-1/2 flex justify-center">
                          <img src={user?.picture} alt="" 
                           className="md:h-96 md:w-96 h-56 w-56 rounded-full md:ml-24" />
                      </div>
                      <div className="md:w-1/2 md:mt-32 mt-12">
                          <div className="md:text-6xl text-5xl font-bold md:text-left text-center">{user?.firstName} {user?.lastName}</div>
                          <div className="mt-4  md:text-3xl text-xl">{user?.businessName ? user?.businessName : ''}</div>
                          <div className="text-white grid gap-2 md:grid-cols-4  grid-cols-1 mt-5 text-xl  pr-5 md:pl-0 pl-5" id="contact">
                              <div onClick={()=>openLink("mailto: " + user?.email)}
                              className="bg-[#ff6201]   flex justify-center rounded-full px-2 py-1 items-center space-x-2 cursor-pointer">
                                  <BsEnvelope/> <span>Email</span>
                              </div>
                              {user?.facebook &&  
                              <div onClick={()=>openLink(user?.facebook ?? '')} className="bg-blue-500 flex
                              rounded-full px-2 text-center justify-center  py-1 items-center  space-x-2  cursor-pointer">
                                  <BsFacebook/> <span>Facebook</span>
                              </div>} 
                              {user?.whatsapp && 
                              <div onClick={()=>openLink("https://wa.me/" + user?.whatsapp+ "/?text=Bonjour, j'espère que vous allez bien. J'ai pris votre numéro sur votre site web. Pourrions-nous échanger?")} className="
                              bg-green-500 flex text-center justify-center  rounded-full px-2 py-1 items-center  space-x-2  cursor-pointer">
                                      <BsWhatsapp/> <span>Whatsapp</span>
                              </div>  } 
                              {user?.linkedin &&  
                              <div onClick={()=>openLink(user?.linkedin ?? '')} className="bg-blue-500 flex
                              rounded-full px-2 text-center  justify-center py-1 items-center  space-x-2  cursor-pointer">
                                  <BsLinkedin/> <span>LinkedIn</span>
                              </div>}   
                              {user?.twitter &&  
                              <div onClick={()=>openLink(user?.twitter ?? '')} className="bg-blue-500 flex
                              rounded-full px-2 text-center  py-1 items-center  space-x-2  cursor-pointer">
                                  <BsTwitterX/> <span>X</span>
                              </div>}                  
                              {user?.instagram &&  
                              <div onClick={()=>openLink(user?.twitter ?? '')} className="bg-blue-500 flex
                              rounded-full px-2 text-center justify-center  py-1 items-center  space-x-2  cursor-pointer">
                                  <BsInstagram/> <span>Instagram</span>
                              </div>}   
                          </div>
                      </div>
                  </div>
              <div> <div className="flex justify-center font-bold md:mt-24 mt-12 md:text-6xl text-3xl">Carte de visite</div></div>
              <div  className="flex justify-center md:mt-12 mt-6 md:ml-12 mr-1  pb-12" id="carte">
                  <img src={carte} alt=""/>
              </div>
              <div className="mt-0">
                  <div> 
                    <div className="flex justify-center font-bold  md:text-6xl text-3xl">
                      Catalogue
                    </div>
                  </div>   
              </div>
              <div className="flex justify-center" id="catalogue"> 
                  <div className="md:w-[900px] w-full  px-2 py-16 sm:px-0  mr-4 ">
                      <Tab.Group>
                          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                          
                          {Object.keys(categories).map((category) => (
                              <Tab
                              key={category}
                              className={({ selected }) =>
                                  classNames(
                                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                  selected
                                      ? 'bg-white dark:text-blue-700 text-black'
                                      : 'dark:text-blue-100 dark:hover:bg-white/[0.12] dark:hover:text-white'
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
                              className={'rounded-xl bg-white p-3'}
                              >
                                {posts.length == 0 && <div className="flex justify-center  text-black font-bold">Aucun items disponible</div>}
                              <ul className="grid gap-4 md:grid-cols-4 grid-cols-2">
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
          )
}

