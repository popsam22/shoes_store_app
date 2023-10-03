import { services } from "./index"
import ServicesCard from './ServicesCard'
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
        {services.map(service => (
          <ServicesCard key={service.label} {...service}/>
        ))}
    </section>
  )
}

export default Services