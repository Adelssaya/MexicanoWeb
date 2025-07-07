const Table = () => {
  return (
  <div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-300">
    <thead className="bg-green-600 text-white">
      <tr>
        <th className="py-2 px-4 border-b">Platillo</th>
        <th className="py-2 px-4 border-b">Precio</th>
        <th className="py-2 px-4 border-b">Disponible</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-green-100">
        <td className="py-2 px-4 border-b">Pozole</td>
        <td className="py-2 px-4 border-b">$90</td>
        <td className="py-2 px-4 border-b">Sí</td>
      </tr>
      <tr className="hover:bg-green-100">
        <td className="py-2 px-4 border-b">Tacos de birria</td>
        <td className="py-2 px-4 border-b">$75</td>
        <td className="py-2 px-4 border-b">Sí</td>
      </tr>
      <tr className="hover:bg-green-100">
        <td className="py-2 px-4 border-b">Tamales</td>
        <td className="py-2 px-4 border-b">$35</td>
        <td className="py-2 px-4 border-b">No</td>
      </tr>
    </tbody>
  </table>
</div>
  );
};

export default Table;
