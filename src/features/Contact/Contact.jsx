// styles
import './Contact.scss'

import { images } from '../../constants' 

function Contact() {
    return (
        <div className="contact">

            <h1 className="contact__title">
                Contact 
            </h1>

            <div className="contact__content">

                <section className="contact__form">

                    <label>
                        
                        Name 
                        
                        <input
                            placeholder='harsh tomar'
                        />

                    </label>

                    <label>
                        
                        Email
                        
                        <input
                            placeholder='harsh@gmail.com'
                        />

                    </label>

                    <label>
                        
                        Message
                        
                        <textarea
                            placeholder='lorem ispum...'
                        />

                    </label>

                    <button>
                        send
                    </button>

                </section>

                <aside className="contact__links">

                    <p>
                    <img src={images.phone} alt="phone image" /> 9582594496
                    </p>

                    <p>
                    <img src={images.mail} alt="mail image" /> harshtomar@gmail.com
                    </p>

                    <p>
                        <img src={images.github} alt="github image" /> github.harshtomar.com
                    </p>
                    
                    <p>
                        <img src={images.linkedin} alt="linkedin image" /> linkedin.harshtomar.com
                    </p>

                </aside>

            </div>

        </div>
    )
}

export default Contact