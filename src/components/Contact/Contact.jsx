import "./Contact.scss"

import { useState, useRef , lazy } from "react"
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser"
// import EarthCanvas from "./Earth";

const EarthCanvas = lazy(() => import("./Earth"))


const Contact = () => {
  const formRef = useRef()
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [ form, setForm]= useState({
    name: "",
    email: "",
    message: ""
  })
  const [ loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const curretValue = e.target.value
    const currentformname = e.target.name
    setForm({
      ...form,
      [currentformname]: curretValue
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // public key sa__1ikK-yBdTvt8Y
  // privite key CAjyGXGqkyiTGFPE1r4Xh
  // Template id template_hf9u5hj
  // service id service_z3v2x4q
    emailjs.send(
      'service_z3v2x4q',
      'template_hf9u5hj',
      {
        from_name: form.name,
        to_name: "Giorgi",
        from_email: form.email,
        // to_email: "gkapanadze76@yahoo.com",
        message: form.message,
      },
      'sa__1ikK-yBdTvt8Y'
    )
    .then(()=>{
      setLoading(false)
      alert("Thank You for your response, I will contact you as soon as possible.")
      setForm({
        name: "",
        email: "",
        message: ""
      })
    },(err)=>{
      console.log(err);
      alert("somethin wrong! :(")
    })
  }

  return(
    <div
    className="ContactConteiner"
    id="Contact"
    >
      

      <div
      className="GEtinTouchContactConteiner"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
        <p className="TextGetinTouch">Get in Touch</p>
        <h3 className="TextContact">Contact.
        </h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="Form"
        >
          <label
           className ="TextinputLable"
           >Your Name
          </label>
          <input
         
          className="TextInput"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          />

        <label className ="TextinputLable">Your Email
          </label>
          <input
          className="TextInput"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email?"
          />

          <label className ="TextinputLable">Your Message
          </label>
          <textarea
          spellCheck = {false}
          rows={7}
          className="TextInput"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What do you want to say?..."
          />

          <button
          type="submit"
          className="SubmitButton"
          >
            {loading? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      
      {/* 3D Erth Conteiner */}
      <div 
      className="ErthConteiner"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(+200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      
      >
        <EarthCanvas />
      </div>
      
    </div>
  )
}
 
export default Contact;