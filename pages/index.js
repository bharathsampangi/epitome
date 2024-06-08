import Head from 'next/head'
import Main from '../components/main/Main'
import FloatingHeader from '../components/floating/FloatingHeader'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sumadhura Epitome Rachenahalli, Price/Reviews by Sumadhura Group</title>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta name="description" content="Sumadhura Epitome is a Brand New Residential Project at Bangalore by Sumadhura Group. It Offers 2 & 3 BHK Apartments. For More Details Contact Us Now." />
        <meta name="keywords" content="Sumadhura Epitome,Sumadhura Epitome Rachenahalli,Sumadhura epitome price, Sumadhura epitome location,Sumadhura Epitome Reviews,Sumadhura Group,Sumadhura Epitome Thanisandra,Sumadhura Epitome North Bangalore, sumadhura epitome Brochures "/>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sumadhuraepitome.in.net/"></link>
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="shortlink" href="https://sumadhuraepitome.in.net/"></link>
      </Head>

      <Main />
    </div>
  )
}
