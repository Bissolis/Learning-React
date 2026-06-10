export default function Header(){
    return(
        <header className="absolute w-full bg-neutral-900 text-white flex flex-row items-center px-3 py-4 justify-between">
            <h2 className="text-2xl">PetShop</h2>
            <nav className="w-60">
                <ol className="flex gap-8 text-center justify-center items-center">
                    <li className="border-b transition duration-300 ease-in-out border-transparent hover:border-white cursor-pointer">Pedidos</li>
                    <li className="border-b transition duration-300 ease-in-out border-transparent hover:border-white cursor-pointer">Contato</li>
                    <li className="border-b transition duration-300 ease-in-out border-transparent hover:border-white cursor-pointer">Sobre</li>
                </ol>
            </nav>
        </header>
    );
}