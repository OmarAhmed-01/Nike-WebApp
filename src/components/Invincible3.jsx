import { Models } from "../constants";

const Invincible_3 = () => {
  if (!Models) {
    return <div>Loading...</div>; // Or handle the case where Models is undefined
  }

  const Invincible_3_Details = Models[0].links.find(product => product.name === 'Invincible 3');

  if (!Invincible_3_Details) {
    return <div>Product not found</div>; // Or handle the case where Invincible_3_Details is undefined
  }
   
  return (
    <div className="flex justify-center items-center min-h-screen max-lg:h-full">
      <div className="container w-full h-[80vh] flex flex-row justify-center -ml-[20px] max-lg:justify-center max-lg:items-center max-lg:flex max-lg:flex-col">
        <div className="w-[50%] flex justify-center items-center overflow-hidden rounded-[20px] max-lg:w-[80%] max-lg:mt-[300px] max-lg:rounded-[20px] max-lg:overflow-visible">
          <img className=" max-lg:rounded-[20px]" src={Invincible_3_Details.imgURL} width={950} height={950} alt={Invincible_3_Details.name} />
        </div>
        <div className="w-[30%] flex flex-col justify-start max-lg:w-[80%]">
          <h1 className="font-montserrat m-5 text-4xl w-[100%] text-start max-lg:text-3xl">{Invincible_3_Details.name}</h1>
          <p className="font-montserrat text-2xl ml-5 w-[80%]">{`$${Invincible_3_Details.price}`}</p>
          <p className="font-montserrat text-2xl w-[80%] m-5">Select Size <br/> 
            <ul className="flex flex-wrap justify-start mt-2 w-full">
              {Invincible_3_Details.sizes.map((size, index) => (
                <li className="text-3xl bg-transparent border-gray-300 border rounded-[10px] my-2 mr-2 hover:border-gray-600 max-lg:text-xl" key={index}>
                  <button className="w-[90px] h-auto rounded-[10px] font-montserrat transition duration-100 ease-all hover:ease-in max-lg:w-[40px] max-lg:h-[30px]">{size}</button>
                </li>
              ))}
            </ul>
          </p>
          <div className="font-montserrat text-2xl w-[80%] mx-5">
            <p className="m-0 p-0 text-base">4 interest-free payments of $32.50 with</p>
            <p className="font-bold mt-2">Klarna.</p>
          </div>
          <div className="flex flex-row mx-5 my-10">
            <button className="mr-10 px-10 py-3 bg-black text-white rounded-full hover:bg-zinc-500">Add to Bag</button>
            <button className="px-10 py-3 bg-transparent text-black rounded-full border border-gray-300 hover:border-black">Favourite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invincible_3;