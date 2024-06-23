import { MdMessage } from "react-icons/md"
import { MdCall } from "react-icons/md"
import { MdEmail } from "react-icons/md"
import { useState } from "react"
import Button from "../Button/Button"
import styles from "./ContactForm.module.css"


function ContactForm() {

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [cover, setCover] = useState(" ");

    const onSubmit = (event) => {
        event.preventDefault();
        
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setCover(event.target[2].value);
        
    }

  return (
   <section className={styles.container}>
    <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button
            text="VIA SUPPORT CHAT" 
            icon={<MdMessage fontSize="24px" />}
        />
        <Button
            text="VIA CALL" 
            icon={<MdCall fontSize="24px" />}
        />
        </div>
        
        <Button
            isOutline={true}
            text="VIA EMAIL FORM" 
            icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="cover">Cover Letter</label>
                <textarea name="cover" id="cover" rows={5}></textarea>
            </div>
            <div 
            style={{
                display: "flex",
                justifyContent: "end",
            }}>
                <Button text="SUBMIT BUTTON" />
            </div>
            <div>
                {name} <br />
                {email} <br />
                {cover}
            </div>

        </form>
       
    </div>
    <div className={styles.contactImage}>
        <img src="/images/contact.jpg" alt="image" />
    </div>

   </section>
  )
}

export default ContactForm