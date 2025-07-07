import Navbar from "../components/Navbar";

export default function Contacto() {
  return (
    <>
      <Navbar />
      <main className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-blue-700">Contáctanos</h2>
        <p>Puedes visitarnos o comunicarte por los siguientes medios:</p>
        <ul className="list-inside list-disc">
          <li><strong>Dirección:</strong> Calle México 123, CDMX</li>
          <li><strong>Teléfono:</strong> 55 1234 5678</li>
          <li><strong>Email:</strong> contacto@elsazonmexicano.com</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">¡Gracias por tu interés!</p>
      </main>
    </>
  );
}
