
"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { PiPhone } from "react-icons/pi";


export default function CatalogueCard({title ,image, whatsapp, email} : 
    {title : string,image? : string,whatsapp? : string, email? : string}){
    const truncateData = (texte : string)=>{
        if (texte.length <= 49) {
            return texte;
          } else {
            const texteReduit = texte.slice(0, 49 - 3) + "...";
            return texteReduit;
          }
    }
    const router = useRouter();
    const openLink = ()=>{
        if(whatsapp != null){
            var URL = "https://wa.me/" +whatsapp+ "/?text=Bonjour, j'espère que vous allez bien. Je viens de voire " + title + " sur votre site web. Pourrions-nous échanger?";
            window.open(URL, '_blank');
        }else {
            router.push("mailto: " + email);
        }
    }
    return(
        <div className="text-black  p-1 rounded-xl flex justify-between border">
            <div className="flex space-x-2 items-center">
                <img src="dossiers.png" className="rounded-md md:h-[30px]  w-[30px]" alt="" />
                <div>
                <div className="text-left font-bold md:text-sm text-xs text-white">
                    {truncateData(title)}
                </div>
                <div className="text-white text-sm">Document</div>

            </div>
            </div>
            <div className="flex items-center flex-col space-y-1 justify-center">
                <a href={image} target="_blank" 
                    className="px-1 h-7 text-center shadow rounded-md cursor-pointer w-full hover:bg-[#ff6201] border border-white font-bold text-white">
                    Voir
                </a>
                <PiPhone onClick={()=>{
                    openLink();
                }} className=" h-6 text-center shadow rounded-md cursor-pointer w-full hover:bg-[#ff6201] border border-white font-bold text-white"/>
                   
                
         </div>
        </div>
    )
}