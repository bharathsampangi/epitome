import PriceBox from "./PriceBox";
import styles from "./styles/Pricing.module.css"

export default function Pricing() {
    return (
        <section className={styles.container}>
            <div className={styles.element}>
                <h3 className={styles.header}>Pricing Structure</h3>
                <div className={styles.priceContainer}>
                    <PriceBox unitName='2 BHK' unit='2 BHK' area='1270 Sq.Ft.' price='1.27 Cr* Onwards'/>
                    <PriceBox unitName='3 BHK (Smart)' unit='3 BHK' area='1545 - 1610 Sq.Ft.' price='1.54 Cr* Onwards'/>
                    <PriceBox unitName='3 BHK (Classic)' unit='3 BHK' area='1670 - 1830 Sq.Ft.' price='1.67 Cr* Onwards'/>
                    <PriceBox unitName='4 BHK' unit='4 BHK' area='2075 Sq.Ft.' price='2.07 Cr* Onwards'/>
                </div>
            </div>
        </section>
    )
} 