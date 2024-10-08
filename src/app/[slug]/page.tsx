import { baseUrl } from "@/components/url";
import axios from "axios";
import { Metadata } from "next";  
import "../../styles/globals.css";
import { ResponseData } from "@/models/ResponseData";
import { BsFacebook, BsWhatsapp, BsEnvelope, BsTelephone, BsLinkedin, BsTwitterX, BsInstagram, BsMap} from "react-icons/bs";
import { useRouter }  from 'next/navigation';
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { BiMessage } from "react-icons/bi";
import Image from "next/image";
import dynamic from 'next/dynamic';
import WhiteSSR from "@/components/template/WhiteSSR";


const ComponentImageHeader = dynamic(() => import('../../components/whitecomponents/ImageHeader'), {ssr : true});
const ComponentCatalogue = dynamic(() => import('../../components/whitecomponents/Catalogue'),{ssr : true});

type Props = {
    params: { slug: string }
}
export async function generateMetadata(
      { params }: Props
    ): Promise<Metadata> {
      /*const slug = params.slug
      const response = await   axios.post(`${baseUrl}accounts/key/web/scan`,{key : slug});
      let user : User = response.data.data.account*/
      return {
        title:'Mon porfolio' ,
        description: "Découvrez mon parcours, mes services sur mesure et les produits innovants que je propose, en visitant mon site web.",
        applicationName  : "Agno",
        robots : "Agno",
        icons : 'logoagno.png'
      }
    }
export default async  function Page({ params }: { params: { slug: string } }){
  try{
    var response = await axios.post(`${baseUrl}accounts/key/web/scan`,{key : params.slug})
    let data = response.data.data;
      let color =data.account.color; 
      let textColor = color == "#FFFFFF" ? "#1F2937" : null;
      let responseData : ResponseData = {
        products : data.products,
        user : data.account,
        carte : data.businessCardPicture,
        carteInformation : data.businessCard,
        vcf : data.vcf
      }
      let imageUrl = responseData.user!.picture;
      let user = responseData.user;
      let carte = responseData.carte;
      let vcf = responseData.vcf;
      let categories  = {
        Produits: responseData.products.filter((item)=>item.type == "PRODUCT"),
        Services: responseData.products.filter((item)=>item.type == "SERVICE"),
        Portfolio :responseData.products.filter((item)=>item.type == "PORTFOLIO"),
        Catalogues: responseData.products.filter((item)=>item.type == "CATALOG"),
      };
    
  
      return (
        <WhiteSSR slug={params.slug} categories={categories} textColor={textColor!} user={user!} carte={carte!} vcf={vcf!} imageUrl={imageUrl}/>
      )
  }catch(e){
      return (
        <div>Une erreur est sourvennu</div>
      )
  }

}