import Image from "next/image";


// components/MonComposant.js
const ImageHeader = ({ imageUrl } : {imageUrl : string}) => {
    return  <div className="md:w-2/5 w-full p-2 flex flex-col justify-center items-center">
    <div className="md:h-96 md:w-96 h-56 w-56">
         <Image src={imageUrl} alt="Image de profil" loading="lazy" height={384} width={384} 
         className="rounded-full" sizes="(max-width: 768px) 100vw"/>
    </div>
</div>;
  };
  
  export default ImageHeader;