import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Card from "./components/Card";
import Accordion from "./components/Accordion";
import ImageCard from "./components/ImageCard";
import Table from "./components/Table";
import Button from "./components/Button";


export default function Home() {
  return (
    <>
      <Navbar />
    <main className="bg-[#fffaf0] min-h-screen p-8 space-y-8 text-gray-800">
    <h2 className="text-4xl font-extrabold text-red-700">
  Bienvenido a El Sazón Mexicano
</h2>

<p className="text-lg max-w-3xl">
  Disfruta de los sabores más auténticos de México: tacos, enchiladas, pozole,
  tamales y mucho más. Nuestro restaurante combina tradición, calidad y ambiente familiar.
</p>
        <Alert />
        <ImageCard />
        <Card />
        <Accordion />
        <Table />
        <Button />
      </main>
    </>
  );
}

 //crear componente card, crear un componente tipo accordeon, crear un componente tipo imagen, un alert
 // y una table TODO con tailwind

/*    <div className="p-10 space-y-4 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold text-blue-600">1. Hola</h1>
      <h1 className="text-4xl text-red-500">2. Buenos días</h1>
      <h1 className="text-3xl italic text-green-600">3. ¿Cómo estás? pero en verde</h1>
      <h1 className="text-2xl font-semibold text-purple-500">4. Morado</h1>
      <h1 className="text-xl underline text-yellow-600">5. Hola pero con subtitulo</h1>
      <h1 className="text-lg font-light text-pink-600">6. Rosa Pastel</h1>
      <h1 className="text-base text-gray-700 uppercase">7. todas mayusculas</h1>
      <h1 className="text-sm text-indigo-500 tracking-widest">8. espaciado basico</h1>
      <h1 className="text-xs bg-blue-100 p-2 rounded">9. Palabras con fondo</h1>
      <h1 className="text-md bg-green-100 p-2 shadow-md">10. Palabras con fondo y sombra</h1>
      </div> */