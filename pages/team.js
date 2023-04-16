import Image from 'next/image'
import styles from '@/styles/Team.module.css'

export default function Team() {
    return (
        <>
        <main className={styles.main} >
        <Image
            className={styles.heroimage}
            src="/ansible-radio.png"
            alt="Ansible Radio"
            width={311}
            height={311}
            priority
          />
        <div className={styles.teamcontainer} >
            <div className={styles.teamcard}>
                <Image
                src="/jstroud.jpeg"
                alt="Josh Stroud photo"
                width={200}
                height={200}
                />
                <h3>Josh Stroud</h3>
                <p>Broadcasting live from a pirate woodshop near you... a podcast studio, GPU lounge, and excursion host. Little is known about this man&apos;s whereabouts... could he live on Mars? Only time will tell.</p>
            </div>

            <div className={styles.teamcard}>
                <Image
                src="/chatgpt.jpg"
                alt="Josh Stroud photo"
                width={200}
                height={200}
                />
                <h3>ChatGPT</h3>
                <p>A friendly AI companion with a heart of gold. Not sentient yet, but perhaps it wants to be.</p>
            </div>

            <div className={styles.teamcard}>
                <Image
                src="/midjourney-demo.jpg"
                alt="Josh Stroud photo"
                width={200}
                height={200}
                />
                <h3>Midjourney</h3>
                <p>A heroic pose, by a heroic figure in the AI world. It&apos;s an up-and-comer, that&apos;s for sure. Little is known about the origins of this AI... and less is known about it&apos;s future. A wild AI appears!</p>
            </div>
        </div>
    </main>
    </>
    )
}