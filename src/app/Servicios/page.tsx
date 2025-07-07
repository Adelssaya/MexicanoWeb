import Navbar from "../components/Navbar";

export default function Servicios() {
  return (
    <>
      <Navbar />
      <main className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-green-700">Nuestros Servicios</h2>
        <p>En <strong>El Sazón Mexicano</strong> ofrecemos:</p>
        <ul className="list-disc list-inside">
          <li>Servicio a domicilio</li>
          <li>Banquetes para eventos</li>
          <li>Menú ejecutivo diario</li>
          <li>Servicio en el local con mariachi en vivo</li>
        </ul>
      </main>
    </>
  );
}
