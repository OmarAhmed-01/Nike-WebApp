import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className=" flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className=" flex-1">
        <img src={offer} width={773} height={687} className=' object-contain w-full'/>
      </div>
      <div className=" flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3"> Special&nbsp;</span>
          <span className=" inline-block mt-3">Offers </span>
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with 
          unbeatable deals. From premiem selections to incredible savings. 
          We offer unparalleled value that sets us apart.
        </p>
        <p className=" mt-6 info-text lg:max-w-lg">Navigate a realm of possibilites 
          designed to fulfill your unique desires, surpassing the loftiest expectations. 
          Your journey with us is nothing short of exceptional.
        </p>
        <div className=" mt-11 flex flex-wrap gap-4 max-lg:flex max-lg:justify-center max-lg:items-center">
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
