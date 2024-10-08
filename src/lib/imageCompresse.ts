import sharp from "sharp";
import fetch from "node-fetch";
export  async function compresseFile(link : string){
    // Télécharger l'image depuis l'URL
    const response = await fetch(link);
    const buffer = await response.buffer();
    const compressedImageBuffer = await sharp(buffer)
    .resize({ width: 800 }) // Ajuste la largeur selon tes besoins
    .jpeg({ quality: 80 }) // Ajuste la qualité
    .toBuffer();

// Convertir le buffer en base64 pour l'inclure dans les props
const compressedImageBase64 = compressedImageBuffer.toString('base64');
const imageSrc = `data:image/jpeg;base64,${compressedImageBase64}`;
 return imageSrc;
}