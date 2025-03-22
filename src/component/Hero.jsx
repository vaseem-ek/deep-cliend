import { useNavigate } from "react-router-dom";

export default function Hero() {
  const nav=useNavigate()
  return (
    <div 
      className="w-full min-h-[400px] md:min-h-[500px] bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('https://qul.imgix.net/5330d267-8385-4c52-80b7-d5743f9ef4f3/675614_sld.jpg')" }}
    >
      <div className="w-full h-full bg-gradient-to-b from-black/50 to-black/50 flex flex-col justify-center items-center px-4 md:px-10">
        <h1 className="text-2xl md:text-4xl font-bold">MENU</h1>
        <p className="text-sm md:text-lg mt-2 max-w-xl text-center">
          Please take a look at our menu featuring food, drinks, and brunch. If you would like to place an order, use the order online button located below the menu.
        </p>

        <div className="flex justify-center gap-3 mt-5">
          <button onClick={()=>nav('/menu')} className="px-6 py-2 border border-blue-500 text-white bg-black  hover:bg-blue-700 transition">FOOD</button>
          <button onClick={()=>nav('/menu')} className="px-6 py-2 border border-blue-500 text-white bg-blue-500 hover:bg-blue-700 transition">DRINKS</button>
          <button onClick={()=>nav('/menu')} className="px-6 py-2 border border-blue-500 text-white bg-black  hover:bg-blue-700 transition">BRUNCH</button>
        </div>
      </div>
    </div>
  );
}
