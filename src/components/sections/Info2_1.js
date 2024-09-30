

export default function Info2_1() {
    return (
        <div>
            <section id="info-2" className="info-2-row wide-60 info-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block pl-45 mb-40 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <img className="img-fluid" src="images/image-01.png" alt="info-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block pc-45 mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Section ID */}
                                <span className="section-id id-color">Carte de visite</span>
                                {/* Title */}
                                <h3 className="h3-lg">Carte  virtuelle et Carte NFC(Near Field Communication)</h3>
                                {/* List */}
                                <ul className="txt-list mb-30">
                                    Explorez une gamme de designs exclusifs et de fonctionnalités avancées pour des cartes de visite qui captivent. Bénéficiez d'une carte physique intégrant la technologie NFC pour simplifier l'échange de coordonnées professionnelles. Grâce à la carte NFC, vos contacts peuvent simplement toucher leur smartphone compatible NFC avec votre carte pour accéder instantanément à vos informations de contact ainsi qu'à votre catalogue de produits et services.
                                   
                                </ul>
                                {/* Button */}
                                <a href="#fonctionnalite" className="btn btn-tra-grey black-hover">Apprendre plus</a>
                            </div>
                        </div> {/* END TEXT BLOCK */}
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>

        </div>
    )
}
