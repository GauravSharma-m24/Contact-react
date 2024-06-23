import styles from "./ContactHeader.module.css"

function ContactHeader() {
  return (
    <>
    <div className={`container ${styles.contact_section}`}>
    <h2>CONTACT US</h2>
    <h4>LET'S CONNECT</h4>
    </div>
    </>
  )
}

export default ContactHeader