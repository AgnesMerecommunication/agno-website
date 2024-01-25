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

export default function ProductCard({image, title , description, email , whatsapp} : 
    {image : string, title : string, description : string, email? : string , whatsapp? : string}){
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
            router.push("https://wa.me/" +whatsapp+ "/?text=Bonjour, j'espère que vous allez bien. Je viens de voire " + title + " sur votre site web. Pourrions-nous échanger?");
        }else {
            router.push("mailto: " + email);
        }
        onClose();
    }
    return(
        <div className="text-black">
            <div>
                <img src={image} className="rounded-md" alt="" />
            </div>
            <div className="text-center font-bold h-12 md:text-sm text-xs">
                {truncateData(title)}
            </div>
            <div>
                <div onClick={()=>{
                    onOpen();
                }} className="p-2 text-center shadow rounded-md cursor-pointer w-full bg-[#ff6201] font-bold text-white">Voir</div>
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