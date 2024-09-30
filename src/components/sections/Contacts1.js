

export default function Contacts1({ style }) {
    return (
        <>
            <section id="contacts-1" className="bg-fixed bg-map bg-lightgrey wide-100 contacts-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">Need Help? Looking For Support?</h3>
                            {/* Text */}
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero tempus, blandit posuere ligula varius magna congue cursus porta
                            </p>
                        </div>
                    </div>
                    {/* CONTACT FORM */}
                    <div className="row">
                        <div className="col-md-10 col-xl-8 offset-md-1 offset-xl-2">
                            <div className="form-holder">
                                <form name="contactform" className="row contact-form">
                                    {/* Contact Form Input */}
                                    <div id="input-name" className="col-lg-6">
                                        <input type="text" name="name" className="form-control name" placeholder="Your Name*" />
                                    </div>
                                    <div id="input-email" className="col-lg-6">
                                        <input type="text" name="email" className="form-control email" placeholder="Email Address*" />
                                    </div>
                                    {/* Form Select */}
                                    <div id="input-subject" className="col-md-12 input-subject">
                                        <select id="inlineFormCustomSelect1" name="Subject" className="custom-select subject">
                                            <option>This question is about...</option>
                                            <option>Registering/Authorising</option>
                                            <option>Using Application</option>
                                            <option>Troubleshooting</option>
                                            <option>Backup/Restore</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div id="input-message" className="col-lg-12 input-message">
                                        <textarea className="form-control message" name="message" rows={6} placeholder="Your Message ..." />
                                    </div>
                                    {/* Contact Form Button */}
                                    <div className="col-lg-12 mt-15 form-btn text-right">
                                        <button type="submit" className="btn btn-green black-hover submit">Send Your
                                            Message</button>
                                    </div>
                                    {/* Contact Form Message */}
                                    <div className="col-lg-12 contact-form-msg">
                                        <span className="loading" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> {/* END CONTACT FORM */}
                </div> {/* End container */}
            </section>
        </>
    )
}
