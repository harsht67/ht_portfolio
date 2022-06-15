// styles
import './Contact.scss'

// icons
import { TiSocialGithubCircular, TiSocialLinkedinCircular, TiSocialAtCircular } from 'react-icons/ti'
import { RiPhoneFill } from 'react-icons/ri'

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
                        <RiPhoneFill/> 9582594496
                    </p>

                    <p>
                        <TiSocialAtCircular/> harshtomar@gmail.com
                    </p>

                    <p>
                        <TiSocialGithubCircular/> github.harshtomar.com
                    </p>
                    
                    <p>
                        <TiSocialLinkedinCircular/> linkedin.harshtomar.com
                    </p>

                </aside>

            </div>

        </div>
    )
}

export default Contact