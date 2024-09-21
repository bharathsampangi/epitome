import PriceBox from "./PriceBox";
import styles from "./styles/Pricing.module.css"

export default function Pricing({openModal}) {
    return (
        <section className={styles.container} id="pricing">
            <div className={styles.element}>
                <h3 className={styles.header}>Pricing Structure</h3>
                <div className={styles.priceContainer}>
                    <PriceBox unitName='2 BHK' unit='2 BHK' area='1270 Sq.Ft.' price='1.27 Cr* Onwards' openModal={openModal}/>
                    <PriceBox unitName='2 BHK + STUDY' unit='2.5 BHK' area='1545 - 1610 Sq.Ft.' price='1.54 Cr* Onwards' openModal={openModal}/>
                    <PriceBox unitName='Classic 3 BHK ' unit='3 BHK' area='1670 - 1830 Sq.Ft.' price='1.67 Cr* Onwards' openModal={openModal}/>
                    <PriceBox unitName='3.5 BHK + STUDY' unit='3.5 BHK' area='2075 Sq.Ft.' price='2.07 Cr* Onwards' openModal={openModal}/>
                </div>
            </div>
        </section>
    )
} 