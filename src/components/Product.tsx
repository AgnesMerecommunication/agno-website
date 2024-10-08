"use client"
import React from "react";
import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    useDisclosure,
    Button
  } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductCard({image, title , description, email , whatsapp, color,background, border } : 
    {image? : string, title : string, description : string, email? : string , whatsapp? : string,
         color? : string, background? : string , border? : string}){
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
    const router = useRouter();
    const truncateData = (texte : string)=>{
        if (texte.length <= 49) {
            return texte;
          } else {
            const texteReduit = texte.slice(0, 49 - 3) + "...";
            return texteReduit;
          }
    }
    const openLink = ()=>{
        if(whatsapp != null){
            var URL = "https://wa.me/" +whatsapp+ "/?text=Bonjour, j'espère que vous allez bien. Je viens de voire " + title + " sur votre site web. Pourrions-nous échanger?";
            window.open(URL, '_blank');
        }else {
            router.push("mailto: " + email);
        }
        onClose();
    }
    return(
        <div className="text-black  p-3 rounded-xl">
            <div>
                <div className="md:h-[250px] w-full flex justify-center">
                    {image && <Image src={image + "?download=true"}  alt="Image de profil" 
                        loading="lazy" height={150} width={210}  
                        sizes="(max-width: 768px) 100vw"
                        className="rounded-md"/>}
                    
                </div>
          
            </div>
            <div className="text-center font-bold h-12 mt-2 md:text-sm text-lg text-black flex items-center justify-center">
                {truncateData(title)}
            </div>
            <div>
                <div onClick={()=>{
                    onOpen();
                }} className="p-2 text-center shadow rounded-md cursor-pointer w-full text-black border border-black font-bold" style={{backgroundColor : border == null ? color : undefined, borderColor : border ?? undefined, color : border ? color : undefined}}>
                    Voir
                </div>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                        <ModalBody>
                            <p> 
                                {description}
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                              Fermer
                            </Button>
                            <Button color="primary" onPress={openLink}>
                              Contactez-moi
                            </Button>
                        </ModalFooter>
                        </>
                    )}
                    </ModalContent>
                </Modal>   
         </div>
        </div>
    )
}