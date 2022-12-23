import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Widget } from '@typeform/embed-react'

const data = {
  rows: [
      {
          title: "How long will it take to reveal my NFT?",
          content: `This may take some time, depending on the complexity of the input photo and the workload of the algorithm (it could take up to 4 hours for each NFT); once it's done, your NFT will automatically reveal.`,
      },
      {
        title: "What will happen to the pictures I uploaded?",
        content: "We only utilize your photos to train our AI model, create your avatars, and then promptly delete both the original photos and the AI model from our servers and the GPU API's servers (where it is processed) within 24 hours. It is important to be aware of other apps that generate profile photos and avatars, as many of them store your data indefinitely and use it for various purposes, including generating fake images featuring your face. Some of these apps may even be affiliated with foreign governments and may potentially access your data.!"
      },
      {
        title: "Can I get a refund?",
        content: "We immediately start training the AI with your photos after uploading your photos and incur high costs for doing that. Therefore we can't offer refunds after that happens. If you need support email us at support@web3me.ai"
      },
      {
        title: "Total Supply? Price? What about Rarity?",
        content: "Our NFT collection is limited to 10,000 one-of-a-kind anime artworks, each of which has been carefully crafted using AI priced at 0.05 eth/each. But we don't stop there. After generating all of these artworks, we'll embark on a massive effort to give each NFT its own traits manually. This extra step helps to ensure that each NFT in our collection is truly special and adds even more value for collectors."
      }
  ],
};


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WEB3ME</title>
        <meta name="description" content="Your Web3 version drawn by an Artificial Intelligence." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div>
          <a href="/">
            <img className={styles.logo} src="web3me-logo.png"/>
          </a>
        </div>
        <>
          <h2 className="uploadTitle">Upload your data so AI can start work on it!</h2>
          <Widget id="zebfZ3ox" style={{ width: '100%', height: '800px' }} className="my-form" />
          </>
        <div className={"faqSection"}>
          <h2>FAQ</h2>
         
          <div className={"faqList"}>
          <Faq
                data={data}
            />
          </div>
        </div>
        <footer>
          <a href="#">Verified Smart Contract 0x123213123213213123</a>
        </footer>
      </>
    </div>
  )
}
