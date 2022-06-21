// styles
import './Contact.scss'

import { images } from '../../constants' 

import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        msg: '',
    })

    // validation schema for form data
    const schema = Yup.object().shape({
        name: Yup.string().required('field is required'), 
        email: Yup.string().required('field is required').email('invalid email'),
        msg: Yup.string().required('field is required').min(3, 'must be at least 3 characters')
    })

    const { handleSubmit, handleChange, handleBlur, touched, values, errors } = useFormik({
        initialValues: formData, 
        validationSchema: schema,
        onSubmit: (values) => {console.log(JSON.stringify(values))}
    })

    // handles updates to form data 
    const changeHandler = (e) => {
        handleChange(e)

        const { name, value } = e.target 

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const { name, email, msg } = formData

    return (
        <div className="contact">

            <h1 className="contact__title title">
                Contact 
            </h1>

            <div className="contact__content f7">

                <form 
                    className="contact__form"
                    onSubmit={handleSubmit}
                >

                    <label>
                        
                        Name 
                        
                        <input
                            name="name"
                            value={name}
                            onChange={changeHandler}
                            onBlur={handleBlur}
                            placeholder='harsh tomar'
                        />

                        {touched.name && errors.name 
                            ? <div>{errors.name}</div>
                            : null
                        }

                    </label>

                    <label>
                        
                        Email
                        
                        <input
                            name="email"
                            value={email}
                            onChange={changeHandler}
                            onBlur={handleBlur}
                            placeholder='harsh@gmail.com'
                        />

                        {touched.email && errors.email 
                            ? <div>{errors.email}</div>
                            : null
                        }

                    </label>

                    <label>
                        
                        Message
                        
                        <textarea
                            name="msg"
                            value={msg}
                            onChange={changeHandler}
                            onBlur={handleBlur}
                            placeholder='lorem ispum...'
                        />

                        {touched.msg && errors.msg
                            ? <div>{errors.msg}</div>
                            : null
                        }

                    </label>

                    <button className="button text">
                        send
                    </button>

                </form>

                <aside className="contact__links lg-text">

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