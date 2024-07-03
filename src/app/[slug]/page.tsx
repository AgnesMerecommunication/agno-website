import Data from "@/components/Data";
import { baseUrl } from "@/components/url";
import { User } from "@/models/User";
import axios from "axios";
import { Metadata } from "next";  
    type Props = {
      params: { slug: string }
    }
  
    export async function generateMetadata(
      { params }: Props
    ): Promise<Metadata> {
      const slug = params.slug
      
      const response = await   axios.post(`${baseUrl}accounts/key/web/scan`,{key : slug});
      let user : User = response.data.data.account
      return {
        title:user ? (user.firstName) : '' ,
        description: "Découvrez mon parcours, mes services sur mesure et les produits innovants que je propose, en visitant mon site web.",
        applicationName  : "Agno",
        robots : "Agno",
        icons : user.picture
      }
    }
export default  function Page({ params }: { params: { slug: string } }){

    return (
         <Data slug={params.slug}/>
    )
}