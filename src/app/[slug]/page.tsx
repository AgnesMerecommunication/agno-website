import Data from "@/components/Data";
import { baseUrl } from "@/components/url";
import { User } from "@/models/User";
import axios from "axios";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes"


  
    type Props = {
      params: { slug: string }
    }
  
    export async function generateMetadata(
      { params }: Props
    ): Promise<Metadata> {
      const slug = params.slug
      const response = await   axios.get(`${baseUrl}accounts/${slug}/web`);
      let user : User = response.data.data.account
      return {
        title:user ? (user.firstName + " " + user.lastName) : '' ,
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