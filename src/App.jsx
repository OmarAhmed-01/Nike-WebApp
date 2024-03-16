//imports
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import ShoeCard from "./components/ShoeCard";
import { Layout } from "./components/Layout";


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Layout/>
      </>
    )
  },
  {
    path: '/:productId',
    element: (
      <>
        <ShoeCard/>
      </>
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


// {
  //   path: '/',
  //   element: 
  //     <>
  //       <main className="relative">
  //         <Nav/>
  //         <section className="xl:padding-l wide:padding-r padding-b">
  //           <Hero/>
  //         </section>
  //         <section className="padding">
  //           <PopularProducts/>
  //         </section>
  //         <section className="padding">
  //           <SuperQuality/>
  //         </section>
  //         <section className="padding-x py-10">
  //           <Services/>
  //         </section>
  //         <section className="padding">
  //           <SpecialOffers/>
  //         </section>
  //         <section className=" bg-pale-blue padding">
  //           <CustomerReviews/>
  //         </section>
  //         <section className="padding-x sm:py-32 py-16 w-full">
  //           <Subscribe/>
  //         </section>
  //         <section className=" bg-black padding-x padding-t pb-8">
  //           <Footer/>
  //         </section>
  //       </main>
  //     </>
  // },
  // {
  //   path: '/airforceone',
  //   element: (
  //     <div>
  //       <AirForce_One/>
  //     </div>
  //   )
  // },
  // {
  //   path: '/airmax',
  //   element: (
  //     <AirMax/>
  //   )
  // },
  // {
  //   path: '/airforcehigh',
  //   element: (
  //     <AirForce_High/>
  //   )
  // },
  // {
  //   path: '/dunklow',
  //   element: (
  //     <Dunk_Low/>
  //   )
  // },
  // {
  //   path: '/gammaforce',
  //   element: (
  //     <Gamma_Force/>
  //   )
  // },
  // {
  //   path: '/jordanmid',
  //   element: (
  //     <AirJordan_Mid/>
  //   )
  // },
  // {
  //   path: '/invincible3',
  //   element: (
  //     <Invincible_3/>
  //   )
  // },
  // {
  //   path: '/revolution6',
  //   element: (
  //     <Revolution6/>
  //   )
  // },
  // {
  //   path: '/killshot2',
  //   element: (
  //     <Killshot2/>
  //   )
  // }