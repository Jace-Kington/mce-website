
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import MeetUs from '../components/Meet-us'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;0,900;1,800;1,900&display=swap" rel="stylesheet"/>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <meta name="HandheldFriendly" content="true" />

        <title>My Coat Electrical</title>
      </head>
      <Navbar/>
      <Services/>
      <MeetUs/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}
