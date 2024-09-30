import dynamic from 'next/dynamic'
import Link from "next/link"
const Review3Filter = dynamic(() => import('../elements/Review3Filter'), {
    ssr: false,
})

export default function Reviews3({ style }) {
    return (
        <>
            <section id="reviews-3" className="wide-100 reviews-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">Que disent nos clients</h3>
                            {/* Text */}
                            <p className="p-md">Partout dans le monde des gens utilisent notre application , decouvrez l'avis de certain d'entre eux</p>
                        </div>
                    </div>
                    {/* TESTIMONIALS CONTENT */}
                    <div className="row">
                        <div className="col-md-12 reviews-grid">
                            <Review3Filter />
                        </div>
                    </div> {/* END TESTIMONIALS CONTENT */}
                    {/* ALL REVIEWS LINK */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="more-reviews text-center wow fadeInUp" data-wow-delay="0.9s">
                                <h5 className="h5-xs"><Link href="/reviews">See what <span>more people</span> are saying about
                                    NextApp</Link></h5>
                            </div>
                        </div>
                    </div>
                </div> {/* End container */}
            </section>

        </>
    )
}
