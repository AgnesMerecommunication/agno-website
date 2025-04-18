"use client";
import { BsFacebook, BsWhatsapp, BsEnvelope, BsTelephone, BsLinkedin, BsTwitter, BsTwitterX, BsInstagram, BsSun, BsMoon, BsMap, BsMessenger, BsGeo, BsGeoAlt } from "react-icons/bs";
import { Tab } from '@headlessui/react';
import { useEffect, useState } from "react";
import ProductCard from "../Product";
import { useRouter } from 'next/navigation';
import { ResponseData } from "@/models/ResponseData";
import axios from "axios";
import { baseUrl } from "../url";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { BiMessage, BiSolidMessage } from "react-icons/bi";
import CatalogueCard from "../Catalogue";

// @ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

type Categorie = {
    Produits: Product[],
    Services: Product[],
    Catalogues: Product[],
    Portfolio: Product[]
};

export default function Page({ slug }: { slug: string }) {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState<User>();
    const [carte, setCarte] = useState<string>();
    const [categories, setCategories] = useState<Categorie>({ Produits: [], Services: [], Portfolio: [], Catalogues: [] });
    const [color, setColor] = useState<string | undefined>("#0022ff");
    const [textColor, setTextColor] = useState<string | undefined>("#FFFFFF");
    const [vcf, setVcf] = useState<string | undefined>();

    useEffect(() => {
        axios.post(`${baseUrl}accounts/key/web/scan`, { key: slug }).then((response) => {
            let data = response.data.data;
            let color = data.account.color; 
            if (color === "#FFFFFF") {
                setTextColor("#1F2937");
            }
          //  setColor(color); // Uncomment this line to set the color state

            let responseData: ResponseData = {
                products: data.products,
                user: data.account,
                carte: data.businessCardPicture,
                carteInformation: data.businessCard,
                vcf: data.vcf
            };
            setUser(responseData.user);
            setCarte(responseData.carte);
            setVcf(responseData.vcf);

            if (responseData.products) {
                setCategories({
                    Produits: responseData.products.filter((item) => item.type === "PRODUCT"),
                    Services: responseData.products.filter((item) => item.type === "SERVICE"),
                    Portfolio: responseData.products.filter((item) => item.type === "PORTFOLIO"),
                    Catalogues: responseData.products.filter((item) => item.type === "CATALOG"),
                });
            }
        }).catch(error => {
            setColor("#242834");
        });
    }, []);

    const openLink = (link: string) => {
        router.push(link);
    };

    const openVcf = () => {
        const contactsUrl = 'data:text/x-vcard;charset=utf-8,' + encodeURIComponent(vcf ?? '');
        window.location.href = contactsUrl; 
    };

    const openCarte = () => {
        window.open(carte, '_blank');
    };


    return (
        <>
            <div className={` bg-orange-300 text-xs md:text-base md:pb-12 md:mx-28 
        border text-black`}>
           <div className="md:flex md:flex-row bg-orange-300 flex-col-reverse justify-start md:justify-center items-start md:items-center relative">
           <svg 
                width="100%" 
                className="absolute md:mt-[800px] md:h-[1000px] bg-orange-300 z-0 hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="100%" className="md:h-[400px]" fill={color} />
                <ellipse cx="50%" cy="30%" rx="55%" ry="240" className="md:h-[700px]" fill={color} />
            </svg>
    <svg 
        width="100%" 
        className="absolute md:mt-[800px] md:h-[1000px] bg-orange-300 z-0  md:hidden"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="100%" className="md:h-[400px]" fill={color} />
        <ellipse cx="50%" cy="30%" rx="80%" ry="100" className="md:h-[600px] h-[300px]" fill={color} />
    </svg>
    <div className="absolute z-10 md:mt-[650px] mt-[70px] flex justify-center w-full">
        <img 
            src={user?.picture} 
            alt="Image" 
            className="md:h-[500px] md:w-[500px] h-32 w-32 rounded-full border-[8px] md:border-[12px]" 
            style={{ borderColor: "white" }} 
        />
    </div>
        <div className="absolute z-10 mt-[130px] md:mt-[1650px] flex justify-center items-center flex-col  w-full"> {/* Ajustement de la marge pour aligner avec l'image */}
            <div className="w-full flex justify-center flex-col items-center"> 
                <div className="font-bold mb-2 md:mt-12 md:text-6xl text-2xl text-center uppercase">
                    {user?.firstName}
                </div>
                <div className="md:text-2xl text-xs">{user?.businessName}</div> 
            </div>
            <div className="bg-white mx-3 md:w-[900px] py-5 px-5 md:px-32 rounded-md mt-8">
                {user?.address && <div className="mb-3 md:mb-5 text-xs md:text-xl">
                    <div className="flex items-center justify-left space-x-1 text-xs font-bold md:text-xl"> 
                        <BsGeoAlt className="h-3 w-3 font-bold" color={color}/> <span>Adresse</span></div>
                    <div className="mt-1"> <span className="text-sm">{user?.address}</span></div>
                </div>}
                <div onClick={() => openLink("mailto:" + user?.email)}  className="mb-4 md:mb-6 text-xs md:text-xl">
                    <div className="flex items-center justify-left space-x-1 text-xs md:text-xl font-bold"> 
                        <BsEnvelope className="md:h-8 md:w-8 h-3 w-3" color={color}/> <span>Email</span></div>
                    <div className="mt-1">  <span>{user?.email}</span></div>
                </div>
                <div  onClick={() => openLink("tel:" + user?.phone)} className="mb-2 md:mb-6 text-xs md:text-xl">
                    <div  className="flex items-center justify-left space-x-1  font-bold">   
                        <BsTelephone className="md:h-8 md:w-8 h-3 w-3" color={color} />  
                        <span>Contact</span>
                    </div>
                    <div className="mt-1">  <span>{user?.phone}</span></div>
                </div>
                

                <div className="md:mt-5 rounded-xl md:py-12 px-10  p-2 grid gap-4 md:grid-cols-5 grid-cols-4">
                        <div onClick={() => openLink("sms:" + user?.phone)} className="flex text-center justify-center rounded-full px-2 py-1 items-center space-x-2 cursor-pointer">
                            <BiMessage className="text-yellow-500  h-4 w-4 md:h-5 md:w-5" /> 
                            <span className="hidden md:flex">SMS</span>
                        </div> 
                        {user?.facebook &&  
                            <div onClick={() => openLink(user.facebook ?? '')} className="flex rounded-full px-2 text-center justify-center py-1 items-center space-x-2 cursor-pointer">
                                <BsFacebook className="text-blue-700 h-4 w-4 md:h-5 md:w-5 " /> <span className="hidden md:flex">Facebook</span>
                            </div>
                        } 
                        {user?.whatsapp && 
                            <div onClick={() => openLink("https://wa.me/" + user.whatsapp + "/?text=Bonjour, j'espère que vous allez bien. J'ai pris votre numéro sur votre site web. Pourrions-nous échanger?")} className="flex text-center justify-center rounded-full px-2 py-1 items-center space-x-2 cursor-pointer">
                                <BsWhatsapp className="text-green-700   h-4 w-4 md:h-5 md:w-5" /> 
                                <span className="hidden md:flex">Whatsapp</span>
                            </div>
                        } 
                        {user?.linkedin &&  
                            <div onClick={() => openLink(user.linkedin ?? '')} className="flex rounded-full px-2 text-center justify-center py-1 items-center space-x-2 cursor-pointer">
                                <BsLinkedin className=" h-4 w-4 md:h-5 md:w-5"/> 
                                <span className="hidden md:flex">LinkedIn</span>
                            </div>
                        }   
                        {user?.twitter &&  
                            <div onClick={() => openLink(user.twitter ?? '')} className="flex rounded-full px-2 text-center py-1 items-center justify-center space-x-2 cursor-pointer">
                                <BsTwitterX className=" h-4 w-4 md:h-5 md:w-5" /> 
                                <span className="hidden md:flex">X (Twitter)</span>
                            </div>
                        }                  
                        {user?.instagram &&  
                            <div onClick={() => openLink(user.instagram ?? '')} className="flex rounded-full px-2 text-center justify-center py-1 items-center space-x-2 cursor-pointer">
                                <BsInstagram className="text-fuchsia-700  h-4 w-4 md:h-5 md:w-5" /> 
                                <span className="hidden md:flex">Instagram</span>
                            </div>
                        }  
                    </div>

                <div className="flex space-x-2 md:mt-3  justify-center w-full">
                    <div onClick={openVcf} className="border text-white text-center rounded-md md:p-4 p-2 text-xs md:text-xl cursor-pointer" style={{ backgroundColor: color }}>
                        Télécharger mon contact
                    </div>
                    <div onClick={openCarte} className="border text-white text-center rounded-md md:p-4 p-2 text-xs md:text-xl cursor-pointer" style={{ backgroundColor: color }}>
                        Télécharger la carte
                    </div>
                </div>
            </div>
            
        </div>
    </div>
            <div className="md:mt-[1100px] mt-[500px] bg-orange-300 z-50">
               
                <div className="md:mt-12 mt-2 md:pt-8 pt-2 rounded-xl">
                    <div className="flex justify-center font-bold md:text-5xl text-2xl">
                        Catalogue
                    </div>
                    <div className="flex justify-center" id="catalogue"> 
                        <div className="md:w-[900px] w-full px-2 md:py-16 py-5 sm:px-0">
                            <Tab.Group>
                                <Tab.List color={color}  
                                className="flex space-x-1 rounded-xl border border-black p-1">
                                    {Object.keys(categories).map((category) => (
                                        <Tab 
                                            key={category}
                                            className={({ selected }) =>
                                                classNames(
                                                    'w-full rounded-lg py-2.5 text-sm font-medium',
                                                    selected ? ' text-black ' : 'text-black'
                                                )
                                            } 
                                            
                                        >
                                            {category}
                                        </Tab>
                                    ))}
                                </Tab.List>
                                <Tab.Panels className="mt-2">
                                    {Object.values(categories).map((posts, idx) => (
                                        <Tab.Panel key={idx} className={'rounded-xl p-3'}>
                                            {posts.length === 0 && <div className="flex justify-center text-black font-bold">Aucun items disponible</div>}
                                            <ul className="grid gap-4 md:grid-cols-3 grid-cols-1">
                                                {posts.map((post, index) => (
                                                    post.title === "CATALOG" ? (
                                                        <CatalogueCard key={index} whatsapp={user?.whatsapp} title={post.title} email={user?.email} image={post.picture} />
                                                    ) : (
                                                        <ProductCard key={index} whatsapp={user?.whatsapp} image={post.picture} title={post.title} color={color} description={post.description} email={user?.email} />
                                                    )
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
        </>
    );
}
