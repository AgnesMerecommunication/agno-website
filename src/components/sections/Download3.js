import Link from "next/link"


export default function Download3({ style }) {
    return (
        <>
            <section id="download-3" className="bg-lightdark download-section division">
                <div className="container white-color">
                    <div className="row">
                        {/* DOWNLOAD TXT */}
                        <div className="col-md-12 text-center">
                            <div className="download-txt">
                                <div className="d-line d-flex align-items-center wow fadeInUp" data-wow-delay="0.3s">
                                    {/* Title */}
                                    <h5 className="h5-xl">Valide sur toute les plateformes mobiles Ios et Android</h5>
                                    {/* DOWNLOAD STORE BADGES */}
                                    <div className="stores-badge">
                                        {/* AppStore */}
                                        <Link  href="https://apps.apple.com/ci/app/agno/id6480207321" target="_blank" className="store">
                                            <img className="appstore-original" src="/images/store_badges/appstore.png" alt="appstore-logo" />
                                        </Link>
                                        <Link  href="https://play.google.com/store/apps/details?id=com.agnoapp&hl=fr&gl=US"  target="_blank" className="store">
                                            <img className="googleplay-original" src="/images/store_badges/googleplay.png" alt="googleplay-logo" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
