import React from 'react'
import Modal from 'react-modal'
import styles from "./styles/EnquireModal.module.css"

const EnquireModal = ({isOpen, setIsOpen}) => {
   const customStyles = {
      overlay: {
         backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
      content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)',
         width: '600px'
      }
   }
   return (
      <div>
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
            <div className={styles.header}>Download Brochure Now</div>
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