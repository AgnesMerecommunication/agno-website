import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
        <div id="page-hero" className="bg-fixed page-hero-section division" />

            <div id="breadcrumb" className="division">
                <div className="container">
                    <div className="row">
                        {/* BREADCRUMB NAV */}
                        <div className="col">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="/">Acceuil</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{breadcrumbTitle}</li>
                                </ol>
                            </nav>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </div>

        </>
    )
}
