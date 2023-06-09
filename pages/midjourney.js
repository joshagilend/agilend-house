import Image from 'next/image'
import styles from '@/styles/Job.module.css'
import Head from 'next/head'


export default function Job() {
    return (
        <>
      <Head>
        <title>Dragon Toon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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