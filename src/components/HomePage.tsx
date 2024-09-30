"use client"
import Layout from "@/components/layout/Layout"
import Download3 from "@/components/sections/Download3"
import Feature2_1 from "@/components/sections/Feature2_1"
import Hero1 from "@/components/sections/Hero1"
import Info2_1 from "@/components/sections/Info2_1"
import Info6_1 from "@/components/sections/Info6_1"
import Media1 from "@/components/sections/Media1"
import Pricing1 from "@/components/sections/Pricing1"
import Process3 from "@/components/sections/Process3"
import Reviews3 from "@/components/sections/Reviews3"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import 'swiper/css'
import "/public/css/bootstrap.min.css"
import "/public/css/flaticon.css"
import "/public/css/fontawesome.min.css"
import "/public/css/magnific-popup.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "/public/css/slick-theme.css"
import "/public/css/slick.css"
import "/public/css/animate.css"
import "/public/css/spinner.css"
import "/public/css/demo.css"
import "/public/css/style.css"
import "/public/css/responsive.css"

export default function HomePage() {
   const routeur = useRouter();
   useEffect(()=>{
    // alert(navigator?.userAgent.includes('Mac OS'))
   },[]) 
   const open = ()=> {
        const  userAgent = navigator?.userAgent || "";
        if (userAgent.includes("Macintosh") || userAgent.includes("iOS")) {
          //@ts-ignore
            routeur.push("https://apps.apple.com/fr/app/agno/id6480207321",'a','_blank');
        } else {
            routeur.push("https://play.google.com/store/apps/details?id=com.agnoapp&hl=fr&gl=US")
        } 
        

   }
    return (
        <>   {/*@ts-ignore*/}
            <Layout headerStyle={1} footerStyle={1}>   {/*@ts-ignore*/}
                <Hero1 />
                <Info2_1 />
                <Info6_1 />
                <Feature2_1 />   {/*@ts-ignore*/}
                <Process3 />   {/*@ts-ignore*/}
                <Reviews3 />   {/*@ts-ignore*/}
                <Pricing1  open={open}/>   {/*@ts-ignore*/}
                <Media1/>   {/*@ts-ignore*/}
                <Download3/>
             
            </Layout>
        </>
    )
}