import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup({style}) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            {style === 13 &&
                <a className="video-popup1" onClick={() => setOpen(true)}>
                    <div className="video-btn play-icon-rose">
                        <div className="video-block-wrapper"><i className="fas fa-play" /></div>
                    </div>
                    <img className="img-fluid" src="/images/hero-13-img.png" alt="video-preview" />
                </a>
            }


            {style === 18 &&
                <a className="video-popup1" onClick={() => setOpen(true)}>
                    <div className="video-btn play-icon-rose">
                        <div className="video-block-wrapper"><i className="fas fa-play" /></div>
                    </div>
                    <img className="img-fluid" src="/images/hero-18-img.png" alt="video-preview" />
                </a>
            }

            {style === 19 &&
                <a className="video-popup1" onClick={() => setOpen(true)}>
                    <div className="video-btn play-icon-rose">
                        <div className="video-block-wrapper"><i className="fas fa-play" /></div>
                    </div>
                    <img className="img-fluid" src="/images/hero-19-img.png" alt="video-preview" />
                </a>
            }
            {style === 20 &&
                <a className="video-popup2" onClick={() => setOpen(true)}>
                    <div className="video-btn play-icon-tra">
                        <div className="video-block-wrapper"><i className="fas fa-play" /></div>
                    </div>
                </a>
            }
            {style === 6 &&
                <a onClick={() => setOpen(true)} className="video-popup2 btn btn-green black-hover mt-20">
                    See the NextApp in action
                </a>
            }
            {style === 8 &&
                <a onClick={() => setOpen(true)} className="video-popup1 btn btn-yellow tra-hover mt-20">
                    See the NextApp in action
                </a>
            }
            {style === 7 &&
                <a className="video-popup1"  onClick={() => setOpen(true)}>
                <div className="video-btn play-icon-tra">
                    <div className="video-block-wrapper">
                        <i className="fas fa-play" />
                    </div>
                </div>
                <img className="img-fluid" src="/images/blog/post-7-img.jpg" alt="blog-post-image" />
            </a>
            }
            {style === 5 &&
                <a className="video-popup1"  onClick={() => setOpen(true)}>
                <div className="video-btn play-icon-tra">
                    <div className="video-block-wrapper">
                        <i className="fas fa-play" />
                    </div>
                </div>
                <img className="img-fluid" src="/images/blog/post-5-img.jpg" alt="blog-post-image" />
            </a>
            }




            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="W2ib79OoK2k" onClose={() => setOpen(false)} />
        </>
    )
}