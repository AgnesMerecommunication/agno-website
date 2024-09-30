
import Isotope from "isotope-layout"
import { useEffect, useRef } from "react"

export default function DemoReview() {
    // Isotope
    const isotope = useRef()
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid-loaded", {
                itemSelector: ".review",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".review",
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
                <div className="review wow fadeInUp" data-wow-delay="0.1s">
                    <div className="review-txt">
                        <p>Well designed. Clear commenting in the code. Good documentation. Fast response to query. Very happy.</p>
                        <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                        <div className="testimonial-author"><p>Scott Boxer - <span>Themeforest Customer</span></p></div>
                    </div>
                </div>
                {/* TESTIMONIAL #2 */}
                <div className="review wow fadeInUp" data-wow-delay="0.2s">
                    <div className="review-txt">
                        <p>Easy template to work with. A lot of available options gives you ability to create hundreds
                            of variations. Most of  AliThemes was very helpful in their support. Walked me through the
                            answer and made further suggestions. Definitely recommend. I will be buying more licenses of
                            this marketing template as its really helpful to launch my idea instantly.
                        </p>
                        <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                        <div className="testimonial-author"><p>webfulcreations - <span>Themeforest Customer</span></p></div>
                    </div>
                </div>
                {/* TESTIMONIAL #3 */}
                <div className="review wow fadeInUp" data-wow-delay="0.3s">
                    <div className="review-txt">
                        <p>Not only the is the Template well designed and documented. The customer support is also
                            good and you get quick responses. Thank you
                        </p>
                        <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                        <div className="testimonial-author"><p>madhosh - <span>Themeforest Customer</span></p></div>
                    </div>
                </div>
                {/* TESTIMONIAL #4 */}
                <div className="review wow fadeInUp" data-wow-delay="0.4s">
                    <div className="review-txt">
                        <p>Professional looking landing page for a small price. It is written and organized so well that
                            even I, with very little code skills, was able to edit it to fit my needs. Really good job! Recommended
                        </p>
                        <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                        <div className="testimonial-author"><p>lomri - <span>Themeforest Customer</span></p></div>
                    </div>
                </div>
                {/* TESTIMONIAL #5 */}
                <div className="review wow fadeInUp" data-wow-delay="0.5s">
                    <div className="review-txt">
                        <p>Amazingly beautiful, modern and smooth design. Well documented files. Great and fast customer support.</p>
                        <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                        <div className="testimonial-author"><p>7hW9_m6xLd-92_vM - <span>Themeforest Customer</span></p></div>
                    </div>
                </div>
                {/* TESTIMONIAL #6 */}
                <div className="review wow fadeInUp" data-wow-delay="0.6s">
                    <div className="review-txt">
                        <p>Very good support, reactive. Maybe just put some PSD in the package (logo / phone pics). Thanks.</p>
                        <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                        <div className="testimonial-author"><p>FullKit_io - <span>Themeforest Customer</span></p></div>
                    </div>
                </div>
            </div>

        </>
    )
}
