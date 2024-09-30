import Link from "next/link"


export default function Faqs2({ style }) {
    return (
        <>
            <section id="faqs-2" className="wide-100 faqs-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">Frequently Asked Questions</h3>
                            {/* Text */}
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero tempus, blandit posuere ligula varius magna congue cursus porta
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {/* QUESTIONS HOLDER */}
                        <div className="col-lg-6">
                            <div className="questions-holder">
                                {/* QUESTION #1 */}
                                <div className="question wow fadeInUp" data-wow-delay="0.3s">
                                    {/* Question */}
                                    <h5 className="h5-xs">Do you have a free trial?</h5>
                                    {/* Answer */}
                                    <p>Etiam sit amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu
                                        mollis blandit
                                        ultrice ligula egestas magna suscipit lectus magna suscipit luctus undo blandit
                                        vitae purus laoreet
                                    </p>
                                </div>
                                {/* QUESTION #2 */}
                                <div className="question wow fadeInUp" data-wow-delay="0.5s">
                                    {/* Question */}
                                    <h5 className="h5-xs">How can I update or cancel my personal information?</h5>
                                    {/* Answer */}
                                    <ul className="txt-list mb-35">
                                        <li>Vitae auctor integer congue magna at pretium</li>
                                        <li>Integer congue magna at pretium purus pretium ligula rutrum luctus risus eros
                                            dolor auctor ipsum blandit purus
                                        </li>
                                        <li>Sagittis congue augue egestas volutpat egestas magna</li>
                                    </ul>
                                </div>
                                {/* QUESTION #3 */}
                                <div className="question wow fadeInUp" data-wow-delay="0.7s">
                                    {/* Question */}
                                    <h5 className="h5-xs">How do I download videos from online viewing?</h5>
                                    {/* Answer */}
                                    <p>Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere
                                        cubilia curae</p>
                                </div>
                                {/* QUESTION #4 */}
                                <div className="question wow fadeInUp" data-wow-delay="0.9s">
                                    {/* Question */}
                                    <h5 className="h5-xs">Why do you require Bluetooth to be on? </h5>
                                    {/* Answer */}
                                    <p>Praesent semper, lacus sed cursus porta, odio augue ligula massa risus laoreet.
                                        Laoreet auctor massa
                                        varius amet
                                    </p>
                                </div>
                            </div>
                        </div> {/* END QUESTIONS HOLDER */}
                        {/* QUESTIONS HOLDER */}
                        <div className="col-lg-6">
                            <div className="questions-holder ind-30">
                                {/* QUESTION #5 */}
                                <div className="question wow fadeInUp" data-wow-delay="0.3s">
                                    {/* Question */}
                                    <h5 className="h5-xs">How do I add a photo to an item?</h5>
                                    {/* Answer */}
                                    <p>Feugiat eros ligula massa lipsum primis in orci luctus et ultrices posuere cubilia
                                        curae
                                        congue lorem. ante ipsum primis in faucibus bibendum sit amet in odio
                                    </p>
                                </div>
                                {/* QUESTION #6 */}
                                <div className="question wow fadeInUp" data-wow-delay="0.5s">
                                    {/* Question */}
                                    <h5 className="h5-xs">How do I edit a filter to modify which items it shows?</h5>
                                    {/* Answer */}
                                    <p>Praesent semper lacus sed cursus porta, feugiat primis in orci luctus ligula eros ac
                                        ligula
                                        massa in faucibus orci luctus et ultrices posuere ante ipsum primis in faucibus
                                        bibendum sit
                                        amet in odio.
                                    </p>
                                </div>
                                {/* QUESTION #6 */}
                                <div className="question wow fadeInUp" data-wow-delay="0.7s">
                                    {/* Question */}
                                    <h5 className="h5-xs">Feature Overview - Stores  Filters</h5>
                                    {/* Answer */}
                                    <p>Praesent semper, lacus sed cursus porta,feugiat primis in faucibus orci luctus
                                        tincidunt ligula
                                        ultrice sapien egestas lobortis magna
                                    </p>
                                </div>
                                {/* QUESTION #7 */}
                                <div className="question wow fadeInUp" data-wow-delay="0.9s">
                                    {/* Question */}
                                    <h5 className="h5-xs">Will there be a NextApp Android app?</h5>
                                    {/* Answer */}
                                    <p>Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere
                                        cubilia curae
                                        integer congue leo metus, eu mollis lorem primis in orci
                                    </p>
                                </div>
                            </div>
                        </div> {/* END  QUESTIONS HOLDER */}
                    </div> {/* End row */}
                    {/* MORE QUESTIONS BUTTON */}
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="more-questions wow fadeInUp" data-wow-delay="1.1s">
                                <h5 className="h5-xs">Still have a question? <Link href="/faqs">Ask your question here</Link></h5>
                            </div>
                        </div>
                    </div>
                </div> {/* End container */}
            </section>
        </>
    )
}
