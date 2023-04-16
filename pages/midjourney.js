import Image from 'next/image'
import styles from '@/styles/Job.module.css'

export default function Job() {
    return (
        <>
        <main className={styles.main} >
            <Image className={styles.image}
                src="/midjourney-main-top.png"
                alt="Midjourney app top"
                width={1278}
                height={1244}
            />

            <Image className={styles.image}
                src="/midjourney-main-bottom.png"
                alt="Midjourney app bottom"
                width={1277}
                height={1252}
            />
        </main>
    </>
    )
}