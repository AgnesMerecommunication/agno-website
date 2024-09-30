
import Isotope from "isotope-layout"
import Link from 'next/link'
import { useEffect, useRef, useState } from "react"

export default function FaqMasonary() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid-loaded", {
                itemSelector: ".question-category",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".question-category",
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
            <div className="masonry-wrap1 grid-loaded">
                                        {/* GENERAL QUESTIONS */}
                                        <div className="question-category">
                                            <div className="questions-wrap">
                                                {/* CATEGORY TITLE  */}
                                                <h5 className="h5-md">General Questions</h5>
                                                {/* QUESTION #1 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">Getting started with NextApp</h5>
                                                    {/* Answer */}
                                                    <p>Congue leo metus. Vitae arcu mollis blandit ultrice ligula egestas magna
                                                        suscipit lectus magna suscipit luctus undo blandit
                                                    </p>
                                                </div>
                                                {/* QUESTION #2 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">Download NextApp for Mac
                                                    </h5>
                                                    {/* Answer */}
                                                    <p>An augue egestas an ipsum vitae emo ligula volute ante ipsum primis in
                                                        purus ipsum primis in cubilia laoreet augue egestas
                                                    </p>
                                                </div>
                                                {/* QUESTION #3 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">Will there be a NextApp Android app?</h5>
                                                    {/* Answer */}
                                                    <p>Praesent semper, lacus sed cursus porta, odio augue ligula massa risus laoreet.
                                                        Laoreet auctor massa varius undo egestas mauris suscipit semper lacus sed cursus
                                                        porta feugiat primis
                                                    </p>
                                                </div>
                                            </div>
                                        </div>	{/* END GENERAL QUESTIONS */}
                                        {/* DATA SYNC & BACKUP */}
                                        <div className="question-category">
                                            <div className="questions-wrap">
                                                {/* CATEGORY TITLE  */}
                                                <h5 className="h5-md">Data Sync  Backup</h5>
                                                {/* QUESTION #1 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">How do I download videos from online viewing?</h5>
                                                    {/* Answer */}
                                                    <p>Etiam sit amet mauris suscipit sit amet in odio. Integer congue leo metus.
                                                        Vitae arcu mollis blandit ultrice ligula egestas at suscipit lectus magna
                                                        suscipit luctus undo blandit vitae purus
                                                    </p>
                                                </div>
                                                {/* QUESTION #2 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">What file types can be recovered with NextApp?</h5>
                                                    {/* Answer */}
                                                    <p>An augue egestas an ipsum vitae emo ligula volute ante ipsum primis in faucibus
                                                        sit ametn in odio. Integer congue leo metus, eu mollis lorem viverra suscipit
                                                        lectus magna. Ultrice ligula magna and suscipit lectus gestas augue into cubilia
                                                        luctus impedit
                                                    </p>
                                                </div>
                                                {/* QUESTION #3 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">How do I download videos from online viewing?</h5>
                                                    {/* Answer */}
                                                    <p>Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices
                                                        posuere cubilia curae. Semper lacus cursus porta, feugiat primis luctus ultrice
                                                        tellus neque dolor primis magna nullam
                                                    </p>
                                                </div>
                                            </div>
                                        </div>	{/* END DATA SYNC & BACKUP */}
                                        {/* COMING SOON FEATURES */}
                                        <div className="question-category">
                                            <div className="questions-wrap">
                                                {/* CATEGORY TITLE  */}
                                                <h5 className="h5-md">Coming Soon Features</h5>
                                                {/* QUESTION #1 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">Feature Overview - Stores  Filters</h5>
                                                    {/* Answer */}
                                                    <p>Integer congue leo metus. Vitae arcu mollis blandit ultrice ligula egestas
                                                        magna suscipit lectus magna suscipit luctus blandit
                                                    </p>
                                                </div>
                                                {/* QUESTION #2 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">How does NextApp deliver messaging?
                                                    </h5>
                                                    {/* Answer */}
                                                    <p>An augue egestas an ipsum vitae emo ligula volute ante ipsum primis in faucibus
                                                        sit ametn congue leo metus, eu mollis lorem viverra suscipit lectus magna at augue
                                                        egestas magna
                                                    </p>
                                                </div>
                                                {/* QUESTION #3 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">Does NextApp support live streaming?</h5>
                                                    {/* Answer */}
                                                    <p>Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere
                                                        cubilia curae. Semper lacus cursus porta
                                                    </p>
                                                </div>
                                                {/* QUESTION #4 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">Do I have the access to my media files?</h5>
                                                    {/* Answer */}
                                                    <p>Praesent semper, lacus sed cursus porta, odio augue ligula massa risus laoreet.
                                                        Laoreet auctor massa varius egestas amet
                                                    </p>
                                                    <p>At sagittis congue augue magna ipsum vitae purus ipsum primis laoreet augue
                                                        egestas luctus and donec ociis magna and suscipit lectus gestas augue into
                                                        cubilia luctus impedit undo magna
                                                    </p>
                                                </div>
                                            </div>
                                        </div>	{/* END COMING SOON FEATURES */}
                                        {/* PRICING QUESTIONS */}
                                        <div className="question-category">
                                            <div className="questions-wrap">
                                                {/* CATEGORY TITLE  */}
                                                <h5 className="h5-md">Pricing Questions</h5>
                                                {/* QUESTION #1 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">Do you have a free trial?</h5>
                                                    {/* Answer */}
                                                    <p>Etiam sit amet mauris suscipit sit amet in odio. Integer congue leo metus.
                                                        Vitae arcu mollis blandit ultrice ligula egestas
                                                    </p>
                                                </div>
                                                {/* QUESTION #2 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">What payment methods do you accept?</h5>
                                                    {/* Answer */}
                                                    <p>An augue egestas an ipsum vitae emo ligula volute ante ipsum primis in faucibus
                                                        sit ametn in odio. Integer congue leo metus, eu mollis lorem viverra suscipit
                                                        lectus magna a sagittis augue
                                                    </p>
                                                </div>
                                                {/* QUESTION #3 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">What is included in the price?</h5>
                                                    {/* Answer */}
                                                    <p>Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices
                                                        posuere cubilia curae. Semper lacus cursus porta, feugiat primis luctus ultrice
                                                        tellus neque dolor primis magna nullam
                                                    </p>
                                                </div>
                                                {/* QUESTION #4 */}
                                                <div className="question">
                                                    {/* Question */}
                                                    <h5 className="h5-xs">Can I change my subscription at any time?</h5>
                                                    {/* Answer */}
                                                    <p>Praesent semper, lacus sed cursus porta, odio augue ligula massa risus laoreet.
                                                        Laoreet auctor massa varius egestas amet
                                                    </p>
                                                </div>
                                            </div>
                                        </div>	{/* END PRICING QUESTIONS */}
                                    </div>

        </>
    )
}
