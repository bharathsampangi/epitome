import React from 'react'
import Modal from 'react-modal'
import styles from "./styles/EnquireModal.module.css"

const EnquireModal = ({isOpen, setIsOpen}) => {
   return (
      <div>
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} className={styles.modal} overlayClassName={styles.overlay}>
            <div className={styles.header}>Download Brochure</div>
            <form className={styles.form} action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="e0445da9-5959-4e89-88cf-0b1a0d2c5c54" />
                <div className={styles.formGroup}>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Name</label>
                        <input type="text" name="name" required/>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Phone Number</label>
                        <input type="number" name="phone_number" required />
                    </div>
                </div>
                <button type="submit" className={styles.button}>Dowload Brochure</button>
            </form>
            <button className={styles.modalClose} onClick={() => setIsOpen(false)}>❌</button>
         </Modal>
      </div>
   )
}

export default EnquireModal