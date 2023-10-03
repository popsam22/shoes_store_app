import Hero from './components/Hero'
import CustomerReview from './components/CustomerReview'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import PopularProducts from './components/PopularProducts'
import Services from './components/Services'
import SpecialOffer from './components/SpecialOffer'
import Subscribe from './components/Subscribe'
import SuperQuality from './components/SuperQuality'

const App = () => (
  <main className="relative">
    <NavBar /> 
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReview/>
    </section>
    <section className="padding-x w-full sm:py-32 py-16">
      <Subscribe/>
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer/>
    </section>
  </main>
)

export default App