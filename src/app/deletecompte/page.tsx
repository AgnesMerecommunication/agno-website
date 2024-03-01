

export default function DeleteCompte(){


    return(
        <div className="flex justify-center items-center h-screen">
            <div className="md:w-1/2 w-full mx-12">
                <div className="font-bold text-2xl text-center mb-2">Suppression de compte pour Agno</div>
Nous comprenons que vous puissiez souhaiter supprimer votre compte Agno. Pour ce faire, veuillez suivre les étapes ci-dessous :


<ol className="list-decimal mb-2">
    <li>Connectez-vous à votre compte Agno.</li>
    <li>Sur la page d'Acceuil cliquer sur votre photo de profil   <a href="agnoapp://profil" className="text-blue-500 md:hidden"> ou cliquer ici</a> </li>
    <li>Cliquez sur "Supprimer mon compte".</li>
    <li>Confirmez votre demande de suppression.</li>
</ol>

Données supprimées : En supprimant votre compte, toutes les données personnelles associées à votre compte seront définitivement supprimées de nos serveurs. Cela inclut vos informations de profil, vos cartes de visite, et tout historique de transactions.
Données conservées : Pour des raisons légales, nous pouvons conserver certaines informations de transaction pour une période de 6 mois après la suppression de votre compte.
Si vous avez des questions concernant la suppression de votre compte ou la gestion de vos
 données, n'hésitez pas à nous contacter à info@agno.com.


            </div>
           
        </div>
    )
}