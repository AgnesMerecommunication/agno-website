import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer id="footer-1" className="wide-50 footer division">
                <div className="container">
                    {/* FOOTER CONTENT */}
                    <div className="row">
                        {/* FOOTER INFO */}
                        <div className="col-xl-4">
                            <div className="footer-info mb-40">
                                {/* Footer Logo */}
                                {/* For Retina Ready displays take a image, with double the amount of pixels that your image will be displayed (e.g 330 x 80 pixels) */}
                                <img src="/images/logoagno.png" width={60} height={40} alt="footer-logo" />
                                {/* Text */}
                                <p className="mt-20">Une application qui vous permer de reseauter autrement</p>
                            </div>
                        </div>
                        {/* FOOTER LINKS */}
                        <div className="col-md-3 col-xl-2">
                            <div className="footer-links">
                                {/* Footer Links */}
                                <ul className="foo-links clearfix">
                                    <li>
                                        <p><Link href="/#fonctionnalite">Fonctionnalité</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="/#prix">Prix</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="/#entreprise">Entreprise</Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
               
                        {/* FOOTER LINKS */}
                        <div className="col-md-3 col-xl-2">
                            <div className="footer-links">
                                {/* Footer Links */}
                                <ul className="foo-links clearfix">
                                    <li>
                                        <p><Link href="#"><i className="fab fa-twitter" /> Twitter</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="#"><i className="fab fa-facebook" /> Facebook</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="#"><i className="fab fa-instagram" /> Instagram</Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* FOOTER STORE BADGES */}
                        <div className="col-md-3 col-xl-2">
                            <div className="footer-stores-badge text-right mb-40">
                                {/* AppStore */}
                                <Link href="https://apps.apple.com/ci/app/agno/id6480207321" target="_blank" className="store">
                                    <img className="appstore-original" src="/images/store_badges/appstore.png" alt="appstore-logo" />
                                </Link>
                                {/* Google Play */}
                                <Link href="https://play.google.com/store/apps/details?id=com.agnoapp&hl=fr&gl=US" target="_blank" className="store">
                                    <img className="googleplay-original" src="/images/store_badges/googleplay.png" alt="googleplay-logo" />
                                </Link>
                            </div>
                        </div> {/* END FOOTER STORE BADGES */}
                    </div> {/* END FOOTER CONTENT */}
                    {/* BOTTOM FOOTER */}
                    <div className="bottom-footer">
                        <div className="row">
                            {/* FOOTER COPYRIGHT */}
                            <div className="col-md-12">
                                <div className="footer-copyright">
                                    <p className="p-sm">© 2024 Agno. Tout droit reservé</p>
                                </div>
                            </div>
                        </div>
                    </div> {/* END BOTTOM FOOTER */}
                </div> {/* End container */}
            </footer>

        </>
    )
}
