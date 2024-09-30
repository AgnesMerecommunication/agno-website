import Link from "next/link"


export default function Process3({ style }) {
    return (
        <>
            <section id="process-3" className="bg-fixed bg-dark wide-60 process-section division">
                <div className="container white-color">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">Partagez vos cartes de visite numériques et développez votre réseau professionnel avec Agno.</h3>
                           
                        </div>
                    </div>
                    <div className="row">
                        {/* PROCESS BOX #1 */}
                        <div id="step-1" className="col-sm-4">
                            <div className="pbox-3 text-center icon-xs">
                                {/* Icon */}
                                <div className="pbox-icon">
                                    <img className="img-70" src="/images/icons/add-user.png" alt="process-icon" />
                                </div>
                                {/* Text */}
                                <h5 className="h5-sm">S'inscrire</h5>
                            </div>
                        </div>
                        {/* PROCESS BOX #2 */}
                        <div id="step-2" className="col-sm-4">
                            <div className="pbox-3 text-center icon-xs">
                                {/* Icon */}
                                <div className="pbox-icon">
                                    <img className="img-70" src="/images/icons/settings-4.png" alt="process-icon" />
                                </div>
                                {/* Text */}
                                <h5 className="h5-sm">Personnaliser</h5>
                            </div>
                        </div>
                        {/* PROCESS BOX #3 */}
                        <div id="step-3" className="col-sm-4">
                            <div className="pbox-3 text-center icon-xs">
                                {/* Icon */}
                                <div className="pbox-icon">
                                    <img className="img-70" src="/images/icons/target.png" alt="process-icon" />
                                </div>
                                {/* Text */}
                                <h5 className="h5-sm">Atteigner vos objectifs</h5>
                            </div>
                        </div>
                    </div> {/* End row */}
                    {/* PROCESS BUTTON */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="process-btn text-center">
                                <Link href="#prix" className="btn btn-green tra-hover">Plus d'information</Link>
                            </div>
                        </div>
                    </div>
                </div> {/* End container */}
            </section>

        </>
    )
}
