import { EntrepriseType } from "@/models/EntrepriseType";
import axios from "axios";


const url = "https://staging.agno-api.agnesmere-sarl.com";
//const url = "http://localhost:3001";



export async function sendDemandeEntreprise(entreprise : EntrepriseType){
    let res = await axios.post(url + "/accounts/entreprise/demande", entreprise);
    return res.data;
}