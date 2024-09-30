import Link from "next/link"


export default function Media1({ style }) {
    return (
        <>
            <section id="media-1" className="wide-60 media-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">Ils nous font confiance.</h3>
                            {/* Text */}
                            <p className="p-md">Ces entreprises utilisent Agno avec succès</p>
                        </div>
                    </div>
                    {/* MEDIA LOGOS HOLDER */}
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="row">
                                {/* BRAND LOGO IMAGE */}
                                <div className="col-sm-6 col-md-3">
                                    <div className="brand-logo wow fadeInUp" data-wow-delay="0.3s">
                                        <Link href="https://www.agnesmere-communication.com" target="_index"><img className="img-fluid" src="/images/logo_agnes_mere.png"  alt="brand-logo" /></Link>
                                    </div>
                                </div>
                                {/* BRAND LOGO IMAGE */}
                                <div className="col-sm-6 col-md-3">
                                    <div className="brand-logo wow fadeInUp" data-wow-delay="0.7s">
                                        <Link href="#"><img className="img-fluid" src="/images/brand-3.png" alt="brand-logo" /></Link>
                                    </div>
                                </div>
                               
                                
                                {/* BRAND LOGO IMAGE */}
                                <div className="col-sm-6 col-md-3">
                                    <div className="brand-logo wow fadeInUp" data-wow-delay="0.7s">
                                        <Link href="#"><img className="img-fluid" src="/images/brand-6.png" alt="brand-logo" /></Link>
                                    </div>
                                </div>
                                {/* BRAND LOGO IMAGE */}
                                <div className="col-sm-6 col-md-3">
                                    <div className="brand-logo wow fadeInUp" data-wow-delay="0.9s">
                                        <Link href="#"><img className="img-fluid" src="/images/brand-1.png" alt="brand-logo" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>	 {/* END MEDIA LOGOS HOLDER */}
                </div>	  {/* End container */}
            </section>
        </>
    )
}
