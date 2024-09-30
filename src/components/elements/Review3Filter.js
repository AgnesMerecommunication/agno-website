
import Isotope from "isotope-layout"
import Link from 'next/link'
import { useEffect, useRef, useState } from "react"

export default function Review3Filter() {
    // Isotope
    const isotope = useRef()
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid-loaded", {
                itemSelector: ".review-3",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".review-3",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])


    return (
        <>
            <div className="masonry-wrap grid-loaded">
                {/* TESTIMONIAL #1 */}
                <div className="review-3 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="review-3-txt">
                        {/* Title */}
                        <h5 className="h5-md">Awesome Design!</h5>
                        {/* Text */}
                        <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit
                            magna tempus an aliquet porta
                        </p>
                        {/* Rating */}
                        <div className="app-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        {/* Testimonial Author */}
                        <div className="testimonial-author">
                            <p>Scott Boxer - <Link href="#">@sc_boxer96</Link></p>
                        </div>
                    </div>
                </div> {/*END  TESTIMONIAL #1 */}
                {/* TESTIMONIAL #2 */}
                <div className="review-3 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="review-3-txt">
                        {/* Title */}
                        <h5 className="h5-md">Simple and Useful!</h5>
                        {/* Text */}
                        <p>At sagittis congue augue magna ipsum vitae purus ipsum primis laoreet augue
                            egestas luctus and donec ociis a ultrice ligula magna and suscipit lectus gestas
                            augue into cubilia luctus impedit undo magna dolor vitae risus
                        </p>
                        {/* Rating */}
                        <div className="app-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        {/* Testimonial Author */}
                        <div className="testimonial-author">
                            <p>A.Peterson - <Link href="#">@alex_p92</Link></p>
                        </div>
                    </div>
                </div> {/* END TESTIMONIAL #2 */}
                {/* TESTIMONIAL #3 */}
                <div className="review-3 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="review-3-txt">
                        {/* Title */}
                        <h5 className="h5-md">Great Flexibility!</h5>
                        {/* Text */}
                        <p>Mauris donec ociis magnis sapien an etiam sapien congue augue egestas et ultrice
                            ligula an egestas magna suscipit justo a velna vitae auctor integer
                        </p>
                        {/* Rating */}
                        <div className="app-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        {/* Testimonial Author */}
                        <div className="testimonial-author">
                            <p>M.Scanlon - <Link href="#">@ms_brooklyn</Link></p>
                        </div>
                    </div>
                </div> {/* END TESTIMONIAL #3 */}
                {/* TESTIMONIAL #4 */}
                <div className="review-3 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="review-3-txt">
                        {/* Title */}
                        <h5 className="h5-md">I love this App!</h5>
                        {/* Text */}
                        <p>Mauris donec ociis magnis sapien an etiam sapien congue augue a pretium ligula
                            egestas magna suscipit
                        </p>
                        {/* Rating */}
                        <div className="app-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        {/* Testimonial Author */}
                        <div className="testimonial-author">
                            <p>M.Scanlon - <Link href="#">@ms_brooklyn</Link></p>
                        </div>
                    </div>
                </div> {/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #5 */}
                <div className="review-3 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="review-3-txt">
                        {/* Testimonial Title */}
                        <h5 className="h5-md">Supper Support!</h5>
                        {/* Testimonial Text */}
                        <p>An augue in cubilia laoreet magna and suscipit egestas magna ipsum at purus
                            ipsum primis in augue ultrice ligula and egestas magna suscipit lectus
                        </p>
                        {/* Rating */}
                        <div className="app-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                        </div>
                        {/* Testimonial Author */}
                        <div className="testimonial-author">
                            <p>Jeremy Kruse - <Link href="#">@jeremy_kruse</Link></p>
                        </div>
                    </div>
                </div> {/* END TESTIMONIAL #5 */}
                {/* TESTIMONIAL #6 */}
                <div className="review-3 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="review-3-txt">
                        {/* Title */}
                        <h5 className="h5-md">Best App for Around!</h5>
                        {/* Text */}
                        <p>An augue cubilia laoreet undo magna a suscipit egestas magna an ipsum ligula
                            vitae purus ipsum primis in cubilia
                        </p>
                        {/* Rating */}
                        <div className="app-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        {/* Testimonial Author */}
                        <div className="testimonial-author">
                            <p>V.Colon - <Link href="#">@vcolon_1994</Link></p>
                        </div>
                    </div>
                </div> {/* END TESTIMONIAL #6 */}
            </div>

        </>
    )
}
