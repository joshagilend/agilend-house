import styles from '@/styles/DragonTraining.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function DragonTraining() {
    return (
        <>
        <Head>
            <title>Dragon Toon</title>
        </Head>

        <main className={styles.main}>
            <p>What does it mean to train your dragon?</p>
            <br />
            <p>All this and more in the next episode of "How to Train Your Dragon."</p>
            <br />
            <ul>
                <li>To train your dragon, you start with the stuff of legend: the Alchemist's stone.</li>
                <li>You turn the Alchemist's stone into a lens of gold and silver.</li>
                <li>You fill it up with lead to finish the job.</li>
                <li>Now you're left with an empty husk.</li>
                <li>So you grind it into pebbles and bones.</li>
                <li>All that's left is flour, now... nothing left, here.</li>
            </ul>
            <br></br>
            <p>How do you really train your dragon?...</p>
            <br></br>
            <p>There is really only one way. A machine learning model. The stuff of legend in 2023.</p>
            <br></br>
            <p>etc etc.</p>
            <br />
            <footer>
                <p>Reach out if you have any questions. <Link href="/contact">Contact us</Link>.</p>
            </footer>
        </main>
        </>
    )
}