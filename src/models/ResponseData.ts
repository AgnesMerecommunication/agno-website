import { Product } from "./Product"
import {User} from "./User"

export type ResponseData = {
    products : Product[],
    user? : User
    carte? : string
    carteInformation? : any
  }