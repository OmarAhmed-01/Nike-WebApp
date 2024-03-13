import { CustomerReviews, Hero, PopularProducts, SuperQuality, Services, SpecialOffers, Subscribe, Footer } from "./Sections";
import Nav from "./components/Nav";
import AirMax from "./components/AirMax";
import AirForce_One from "./components/AirForce_One";
import { createRoot } from "react-dom/client"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom';
import AirForce_High from "./components/AirForce_High";
import Dunk_Low from "./components/Dunk_Low";
import Gamma_Force from "./components/Gamma_Force";
import AirJordan_Mid from "./components/AirJoran_Mid";
import Invincible_3 from "./components/Invincible3";
import Revolution6 from "./components/Revolution6";
import Killshot2 from "./components/Killshot2";

const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <>
        <main className="relative">
          <Nav/>
          <section className="xl:padding-l wide:padding-r padding-b">
            <Hero/>
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
            <SpecialOffers/>
          </section>
          <section className=" bg-pale-blue padding">
            <CustomerReviews/>
          </section>
          <section className="padding-x sm:py-32 py-16 w-full">
            <Subscribe/>
          </section>
          <section className=" bg-black padding-x padding-t pb-8">
            <Footer/>
          </section>
        </main>
      </>
  },
  {
    path: '/airforceone',
    element: (
      <div>
        <AirForce_One/>
      </div>
    )
  },
  {
    path: '/airmax',
    element: (
      <AirMax/>
    )
  },
  {
    path: '/airforcehigh',
    element: (
      <AirForce_High/>
    )
  },
  {
    path: '/dunklow',
    element: (
      <Dunk_Low/>
    )
  },
  {
    path: '/gammaforce',
    element: (
      <Gamma_Force/>
    )
  },
  {
    path: '/jordanmid',
    element: (
      <AirJordan_Mid/>
    )
  },
  {
    path: '/invincible3',
    element: (
      <Invincible_3/>
    )
  },
  {
    path: '/revolution6',
    element: (
      <Revolution6/>
    )
  },
  {
    path: '/killshot2',
    element: (
      <Killshot2/>
    )
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App




// import { CustomerReviews, Hero, PopularProducts, SuperQuality, Services, SpecialOffers, Subscribe, Footer } from "./Sections";
// import Nav from "./components/Nav";
// import AirMax from "./components/AirMax";
// import AirForce_One from "./components/AirForce_One";

// const App = () => (
  // <main className="relative">
  //   <Nav/>
  //   <section className="xl:padding-l wide:padding-r padding-b">
  //     <Hero/>
  //   </section>
  //   <section className="padding">
  //     <PopularProducts/>
  //   </section>
  //   <section className="padding">
  //     <SuperQuality/>
  //   </section>
  //   <section className="padding-x py-10">
  //     <Services/>
  //   </section>
  //   <section className="padding">
  //     <SpecialOffers/>
  //   </section>
  //   <section className=" bg-pale-blue padding">
  //     <CustomerReviews/>
  //   </section>
  //   <section className="padding-x sm:py-32 py-16 w-full">
  //     <Subscribe/>
  //   </section>
  //   <section className=" bg-black padding-x padding-t pb-8">
  //     <Footer/>
  //   </section>
  // </main>
// );

// export default App;