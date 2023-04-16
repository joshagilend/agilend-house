import Image from 'next/image'
import styles from '@/styles/Bioshock.module.css'

export default function Bioshock() {
    return (
        <>
        <main className={styles.main}>
            <Image className={styles.headerImage}
                src="/bioshock-1.png"
                alt="Bioshock image of pair with monster"
                width={625}
                height={625}
            />
            <h1>A Bioshock Themed Launch Party</h1>
            <p>Brought to you by the team at Dragon Toon house</p>
            <p>Sponsored by Josh Stroud of <a href="https://agilend.net"><u>Agilend</u></a></p>
            <p>** [Contact form here.]</p>
        </main>
        </>
    )
}