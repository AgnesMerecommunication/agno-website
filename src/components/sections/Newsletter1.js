

export default function Newsletter1({ style, cls }) {
    return (
        <>
            <section id="newsletter-1" className={`${cls ? cls : "bg-lightgrey"} bg-fixed   wide-70 newsletter-section division`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Section ID */}
                            <span className="section-id id-color">Grab NextApp for the best price today</span>
                            {/* Title 	*/}
                            <h3 className="h3-lg">Subscribe For Updates</h3>
                            {/* Text */}
                            <p className="p-md">Subscribe to our newsletter now and our delivery owl will bring you
                                our best deals, ideas and news about NextApp App
                            </p>
                        </div>
                    </div>
                    {/* NEWSLETTER FORM */}
                    <div className="row">
                        <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                            <div className="newsletter-txt text-center">
                                <form className="newsletter-form">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Your email address" required id="s-email" />
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn btn-green black-hover">Sign Up</button>
                                        </span>
                                    </div>
                                    {/* Small Text */}
                                    <p className="p-sm">14-day free trial and no credit card required.</p>
                                    {/* Newsletter Form Notification */}
                                    <label htmlFor="s-email" className="form-notification" />
                                </form>
                            </div>
                        </div>
                    </div> {/* END NEWSLETTER FORM */}
                </div> {/* End container */}
            </section>
        </>
    )
}
