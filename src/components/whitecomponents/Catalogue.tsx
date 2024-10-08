import { Tab } from '@headlessui/react'
import ProductCard from "../Product";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import CatalogueCard from "../Catalogue";
// components/MonComposant.js
type Categorie = {
    Produits: Product[],
    Services:  Product[],
    Catalogues: Product[],
    Portfolio : Product[]
  }
//@ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Catalogue = ({ categories, user } : {categories : Categorie, user? : User}) => {
    return   <Tab.Group>
    <Tab.List className="flex space-x-1 rounded-xl border border-black p-1">
        {Object.keys(categories).map((category) => (
            <Tab key={category} className={({ selected }) => 
            classNames('w-full rounded-lg py-2.5 text-sm font-medium hover:bg-slate-300', selected ? 'bg-slate-300' : '')}>
                {category}
            </Tab>
        ))}
    </Tab.List>
    <Tab.Panels className="mt-2">
        {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className={'rounded-xl p-3 bg-slate-300'}>
                {posts.length === 0 && <div className="flex justify-center text-black font-bold">Aucun items disponible</div>}
                <ul className="grid gap-4 md:grid-cols-3 grid-cols-1">
                    {posts.map((post, index) => (
                        post.title === "CATALOG" ? <CatalogueCard whatsapp={user?.whatsapp} title={post.title} email={user?.email} image={post.picture} /> :
                        <ProductCard key={index} whatsapp={user?.whatsapp} image={post.picture} title={post.title} description={post.description} email={user?.email} />
                    ))}
                </ul>
            </Tab.Panel>
        ))}
    </Tab.Panels>
</Tab.Group>;
  };
  
  export default Catalogue;

