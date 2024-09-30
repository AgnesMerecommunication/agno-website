

import { useState } from 'react'
export default function Faqs1({ style }) {

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section id="faqs-1" className="wide-100 faqs-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">Have Questions? Look Here.</h3>
                            {/* Text */}
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero tempus, blandit posuere ligula varius magna congue cursus porta
                            </p>
                        </div>
                    </div>
                    {/* QUESTIONS HOLDER */}
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div id="accordion" role="tablist">
                                {/* ACCORDION CARD #1 */}
                                <div className="card wow fadeInUp" data-wow-delay="0.3s">
                                    {/* Card Title */}
                                    <div className="card-header" role="tab" id="headingOne">
                                        <h5 className="h5-sm" onClick={() => handleToggle(1)}>
                                            <a className={isActive.key == 1 ? "collapsed" : ""} role="button" aria-expanded="true" aria-controls="collapseOne">
                                                Do you have a free trial?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Card Content */}
                                    <div id="collapseOne" className={isActive.key == 1 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            {/* Text */}
                                            <p>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo.
                                                Velna
                                                vitae
                                                auctor eros congue magna nihil impedit ligula risus. Mauris donec ociis et
                                                magnis sapien
                                                etiam sapien sem sagittis congue tempor gravida donec enim ipsum porta justo
                                                integer at
                                                odio velna congue integer vitae auctor eros dolor luctus odio placerat massa
                                                magna
                                            </p>
                                            {/* Text */}
                                            <p>Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien
                                                egestas,
                                                congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas
                                                neque
                                                vitae
                                                auctor eros dolor luctus odio placerat magna cursus
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* END ACCORDION CARD #1 */}
                                {/* ACCORDION CARD #2 */}
                                <div className="card wow fadeInUp" data-wow-delay="0.5s">
                                    {/* Card Title */}
                                    <div className="card-header" role="tab" id="headingTwo">
                                        <h5 className="h5-sm" onClick={() => handleToggle(2)}>
                                            <a className={isActive.key == 2 ? "collapsed" : ""} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseTwo">
                                                How can I update or cancel my personal information?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Card Content */}
                                    <div id="collapseTwo" className={isActive.key == 2 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque
                                                vel
                                                laoreet
                                                turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar
                                                consectetur
                                                nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce
                                                eu
                                                cursus est.
                                                Fusce non nulla vitae massa placerat vulputate vel a purus
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* END ACCORDION CARD #2 */}
                                {/* ACCORDION CARD #3 */}
                                <div className="card wow fadeInUp" data-wow-delay="0.7s">
                                    {/* Card Title */}
                                    <div className="card-header" role="tab" id="headingThree">
                                        <h5 className="h5-sm" onClick={() => handleToggle(3)}>
                                            <a className={isActive.key == 3 ? "collapsed" : ""} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseThree">
                                                How do I download videos from online viewing?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Card Content */}
                                    <div id="collapseThree" className={isActive.key == 3 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">
                                            {/* Text */}
                                            <p>Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien
                                                egestas,
                                                congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas
                                                neque
                                                vitae
                                                auctor eros dolor luctus odio placerat magna cursus
                                            </p>
                                            {/* List */}
                                            <ul className="txt-list">
                                                <li>Vitae auctor integer congue magna at pretium purus pretium ligula rutrum
                                                    luctus
                                                    risus eros dolor auctor
                                                </li>
                                                <li>Sagittis congue augue egestas volutpat egestas magna suscipit egestas
                                                    magna
                                                    ipsum
                                                    vitae purus efficitur ipsum primis in cubilia laoreet augue egestas
                                                    luctus
                                                    donec
                                                    diam.Tempor sapien gravida donec enim ipsum blandit magna at purus
                                                    pretium
                                                    ligula
                                                    rutrum luctus gravida donec porta justo integer
                                                </li>
                                                <li>Justo odio integer a velna lectus aenean magna and mauris lectus pretium
                                                    ligula rutrum
                                                    luctus risus ac risus auctor gravida donec congue tempor gravida donec
                                                    enim
                                                    ipsum porta
                                                    justo integer
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> {/* END ACCORDION CARD #3 */}
                                {/* ACCORDION CARD #4 */}
                                <div className="card wow fadeInUp" data-wow-delay="0.9s">
                                    {/* Card Title */}
                                    <div className="card-header" role="tab" id="headingFour">
                                        <h5 className="h5-sm" onClick={() => handleToggle(4)}>
                                            <a className={isActive.key == 4 ? "collapsed" : ""} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseFour">
                                                Why do you require Bluetooth to be on?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Card Content */}
                                    <div id="collapseFour" className={isActive.key == 4 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div className="card-body">
                                            {/* Text */}
                                            <p>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo.
                                                Velna
                                                vitae
                                                auctor eros congue magna nihil impedit ligula risus. Mauris donec ociis et
                                                magnis sapien
                                                etiam sapien sem sagittis congue tempor gravida donec enim ipsum porta justo
                                                integer at
                                                odio velna congue integer vitae auctor eros dolor luctus odio placerat
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* END ACCORDION CARD #4 */}
                                {/* ACCORDION CARD #5 */}
                                <div className="card wow fadeInUp" data-wow-delay="1.1s">
                                    {/* Card Title */}
                                    <div className="card-header" role="tab" id="headingFive">
                                        <h5 className="h5-sm" onClick={() => handleToggle(5)}>
                                            <a className={isActive.key == 5 ? "collapsed" : ""} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseFive">
                                                Will there be a NextApp Android app?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Card Content */}
                                    <div id="collapseFive" className={isActive.key == 5 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
                                        <div className="card-body">
                                            {/* Text */}
                                            <p>Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit
                                                tristique justo
                                                ut aliquam. Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non
                                                molestie sed purus,
                                                venenatis nec. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt
                                                massa,
                                                et porttitor
                                            </p>
                                            {/* Text */}
                                            <p>Nullam non scelerisque lectus. In at mauris vel nisl convallis porta at vitae
                                                dui. Nam lacus
                                                ligula, vulputate molestie bibendum quis, aliquet elementum massa.
                                                Vestibulum ut
                                                sagittis odio
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* END ACCORDION CARD #5 */}
                            </div> {/* END ACCORDION */}
                        </div>
                    </div> {/* END QUESTIONS HOLDER */}
                    {/* MORE QUESTIONS BUTTON */}
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="more-questions wow fadeInUp" data-wow-delay="1.3s">
                                <h5 className="h5-xs">Still have a question? <a href="/faqs">Ask your question here</a></h5>
                            </div>
                        </div>
                    </div>
                </div> {/* End container */}
            </section>

        </>
    )
}
