"use client"
import axios from "axios"
import { useEffect } from "react"
import { baseUrl } from "./url"

export default function Ol(){
    useEffect(()=>{
        axios.get(`${baseUrl}accounts/dbb71724-9ec4-4787-bd8a-4b9f78d9c148/web`).then(res=>{
            alert(JSON.stringify(res.data));
        })
    },[])
    return(
        <div>

        </div>
    )
}