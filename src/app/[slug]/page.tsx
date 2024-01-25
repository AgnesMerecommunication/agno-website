import Data from "@/components/Data";

export default  function Page({ params }: { params: { slug: string } }){

    return (
        <Data slug={params.slug}/>
    )
}