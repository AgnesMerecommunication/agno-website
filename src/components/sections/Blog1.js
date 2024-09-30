import Link from "next/link"


export default function Blog1({ style, cls }) {
    return (
        <>
            <section id="blog-1" className={`wide-60 blog-section division ${cls ? cls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">Our Stories  Latest News</h3>
                            {/* Text */}
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero tempus, blandit posuere ligula varius magna congue cursus porta
                            </p>
                        </div>
                    </div>
                    {/* BLOG POSTS */}
                    <div className="row">
                        {/* BLOG POST #1 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post wow fadeInUp" data-wow-delay="0.3s">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img mb-25">
                                    <img className="img-fluid" src="/images/blog/post-1-img.jpg" alt="blog-post-image" />
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Data */}
                                    <p className="post-meta">Posted by J.Barnes on February 2, 2023</p>
                                    {/* Post Link */}
                                    <h5 className="h5-sm"><Link href="/single-post">A partnership for the future of
                                        mobile-based AI capabilities</Link></h5>
                                    {/* Post Text */}
                                    <p>Aliqum mullam blandit tempor sapien and gravida donec ipsum at justo. Velna vitae
                                        auctor a congue magna tempor sapien eget gravida donec...
                                    </p>
                                </div>
                            </div>
                        </div> {/* END  BLOG POST #1 */}
                        {/* BLOG POST #2 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post wow fadeInUp" data-wow-delay="0.5s">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img mb-25">
                                    <img className="img-fluid" src="/images/blog/post-2-img.jpg" alt="blog-post-image" />
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Data */}
                                    <p className="post-meta">Posted by AliThemes on January 30, 2023</p>
                                    {/* Post Link */}
                                    <h5 className="h5-sm"><Link href="/single-post">NextApp is hiring! Help us with customer
                                        service</Link></h5>
                                    {/* Post Text */}
                                    <p>Aliqum mullam blandit tempor sapien and gravida donec ipsum at justo. Velna vitae
                                        auctor a congue magna tempor sapien eget gravida donec...
                                    </p>
                                </div>
                            </div>
                        </div> {/* END  BLOG POST #2 */}
                        {/* BLOG POST #3 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post wow fadeInUp" data-wow-delay="0.7s">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img mb-25">
                                    <img className="img-fluid" src="/images/blog/post-3-img.jpg" alt="blog-post-image" />
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Data */}
                                    <p className="post-meta">Posted by J.Barnes on January 22, 2023</p>
                                    {/* Post Link */}
                                    <h5 className="h5-sm"><Link href="/single-post">Why you should be using video in
                                        prospecting?</Link></h5>
                                    {/* Post Text */}
                                    <p>Aliqum mullam blandit tempor sapien and gravida donec ipsum at justo. Velna vitae
                                        auctor a congue magna tempor sapien eget gravida donec...
                                    </p>
                                </div>
                            </div>
                        </div> {/* END  BLOG POST #3 */}
                    </div> {/* END BLOG POSTS */}
                </div> {/* End container */}
            </section>

        </>
    )
}
