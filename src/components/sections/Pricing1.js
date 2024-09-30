import Link from "next/link"


export default function Pricing1({ open}) {


    return (
        <>
            <section id="pricing-1" className="bg-lightgrey wide-100 pricing-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">Débloquer toute la puissance d'Agno</h3>
                            {/* Text */}
                            <p className="p-md">Personnel ou entreprise, Agno a une offre adaptée à vos besoins.</p>
                        </div>
                    </div> {/* END SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-12 col-xl-12">
                            <div className="row">
                                {/* PRICE PLAN FREE */}
                                <div className="col-md-4" id="prix">
                                    <div className="pricing-table wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                        {/* Icon  */}
                                        <div className="price-icon">
                                            <img className="img-130" src="/images/icons/airship.png" alt="price-icon" />
                                        </div>
                                        {/* Plan Price  */}
                                        <div className="pricing-plan mb-10">
                                            <h5 className="h5-lg">Agno <span>Standard</span></h5>
                                            <sup>$</sup>
                                            <span className="price">0</span>
                                            <sup className="validity">/an</sup>
                                        </div>
                                        {/* Pricing Plan Features  */}
                                        <ul className="features">
                                            <li>6 cartes de visite</li>
                                            <li>Echanger vos cartes et enregistrer vos contact</li>
                                            <li className="disabled-option">Une carte NFC</li>
                                            <li className="disabled-option">Analyse avancée</li>
                                            <li className="disabled-option">Reseautage</li>
                                            <li className="disabled-option">Site web</li>
                                            <li className="disabled-option">Catalogue de service et produit</li>
                                        </ul>
                                        {/* Pricing Table Button  */}
                                        <button onClick={open} className="btn btn-tra-black black-hover">Telecharger</button>
                                    </div>
                                </div> {/* END PRICE PLAN FREE */}
                                {/* PRICE PLAN PRO */}
                                <div className="col-md-4">
                                    <div className="pricing-table wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                        {/* Icon  */}
                                        <div className="price-icon">
                                            <img className="img-130" src="/images/carte-de-credit.png" alt="price-icon" />
                                        </div>
                                        {/* Plan Price  */}
                                        <div className="pricing-plan mb-10">
                                            <h5 className="h5-lg">Agno <span>Pro</span></h5>
                                            <sup>$</sup>
                                            <span className="price">45</span>
                                            <sup className="validity">/an</sup>
                                        </div>
                                        {/* Pricing Plan Features  */}
                                        <ul className="features">
                                            <li>Cartes de visite ilimité</li>
                                            <li>Echanger vos cartes et enregistrer vos contact</li>
                                            <li>Une carte NFC</li>
                                            <li>Analyse avancée</li>
                                            <li>Reseautage</li>
                                            <li>Site web</li>
                                            <li>Catalogue de service et produit</li>
                                        </ul>
                                        {/* Pricing Table Button  */}
                                        <button onClick={open} className="btn btn-green black-hover">Telecharger</button>
                                    </div>
                                </div> {/* END PRICE PLAN PRO */}
                                 {/* PRICE PLAN ENTREPRISE */}
                                 <div className="col-md-4" id="entreprise">
                                    <div className="pricing-table wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                        {/* Icon  */}
                                        <div className="price-icon">
                                            <img className="img-130" src="/images/office-building.png" alt="price-icon" />
                                        </div>
                                        {/* Plan Price  */}
                                        <div className="pricing-plan mb-10">
                                            <h5 className="h5-lg">Agno <span>Entreprise</span></h5>
                                            <span className="validity">Faire la demande</span>
                                            <sup></sup>
                                            <span className="price"></span>
                                            <sup className="validity"></sup>
                                            {/*<sup className="validity">A la demande</sup>*/}
                                        </div>
                                        {/* Pricing Plan Features  */}
                                        <ul className="features">
                                            <li>Une carte entreprise</li>
                                            <li>Des cartes NFC pour vos employés</li>
                                            <li>Gestion de vos employés</li>
                                            <li>Gestion des contacts</li>
                                            <li>Agno pro pour Vos employés</li>
                                            <li>Site web</li>
                                            <li>Catalogue de service et produit</li>
                                        </ul>
                                        {/* Pricing Table Button  */}
                                        <Link href="/entreprise" className="btn btn-tra-black black-hover">Faire une demande</Link>
                                    </div>
                                </div> {/* END PRICE PLAN PRO */}
                            </div> {/* End row */}
                            
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>

        </>
    )
}
