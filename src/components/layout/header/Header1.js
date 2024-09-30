import Link from "next/link"
import { useState } from "react"
export default function Header1({ scroll, isMobileMenu, handleMobileMenu, headerLight }) {
    const [isDropdown, setDropdown] = useState(false)
    const handleDropdown = () => setDropdown(!isDropdown)
    return (
        <>
            <header id="header" className="header">
                <nav className={`navbar fixed-top navbar-expand-md hover-menu ${headerLight ? "navbar-light" : "navbar-dark"} bg-tra white-scroll ${scroll ? "scroll" : ""}`}>
                    <div className="container">
                        {/* LOGO IMAGE */}
                        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 240 x 60 pixels) */}
                        <Link href="/" className="navbar-brand logo-black"><img src="/images/logoagno.png" width={50} height={30} alt="header-logo" /></Link>
                        <Link href="/" className="navbar-brand logo-white"><img src="/images/logoagno.png" width={50} height={30} alt="header-logo" /></Link>
                        {/* Responsive Menu Button */}
                        <button className="navbar-toggler" type="button" onClick={handleMobileMenu}>
                            <span className="navbar-bar-icon"><i className="fas fa-bars" /></span>
                        </button>
                        {/* Navigation Menu */}
                        <div id="navbarContent" className={`collapse navbar-collapse ${isMobileMenu ? "show" : ""}`}>
                            <ul className="navbar-nav ml-auto">
                                
                                <li className="nav-item nl-simple"><Link className="nav-link" href="/">Acceuil</Link></li>
                       
                                <li className="nav-item nl-simple"><Link className="nav-link" href="/#prix">Prix</Link></li>
                           
                            </ul>
                            <span className="navbar-text white-color">
                                <Link href="/#entreprise" className="btn btn-green tra-hover">Entreprise</Link>
                            </span>
                        </div> 
                    </div>
                </nav>
            </header>
        </>
    )
}
