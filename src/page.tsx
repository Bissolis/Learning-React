import Image from "./components/Image";
import doguinho from "./assets/images/doguinho.png"

export default function HomePage(){
  return(
    <main className="bg-neutral-800 w-full h-full grid grid-cols-32 grid-rows-32">
      <h1 className="text-[var(--backtext)] text-8xl col-start-1 row-start-4 col-span-32 text-center font-American">Trazendo conforto e alivio ao seu fiel amigo</h1>
      <div className="bg-[var(--redback)] rounded-[42%_58%_70%_30%/30%_30%_70%_70%] col-start-19 row-start-8 col-span-6 row-span-12 z-1"></div>
      <div className="bg-[var(--purpleback)] rounded-[59%_41%_70%_30%/38%_86%_14%_62%] col-start-24 row-start-8 col-span-6 row-span-12 z-2"></div>
      <div className="bg-[var(--yellowback)] rounded-[82%_18%_82%_18%/60%_52%_48%_40%] col-start-21 row-start-14 col-span-8 row-span-14 z-0"></div>
      <img src={doguinho} alt="imagem de cachorro" className="col-start-19 row-start-8 w-200 col-span-12 z-10"/>
      <p className="text-white col-start-5 row-start-12 text-6xl col-span-10 font-American">um petshop sempre esperando um novo animal para ser cuidado</p>
    </main>
  );
}