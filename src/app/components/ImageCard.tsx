import Image from "next/image";

const ImageCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fffaf0]">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <Image
          src="/images/tacos.jpg"
          alt="Tacos al pastor"
          className="w-full object-cover"
          width={400}  
          height={300} 
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-red-700">Tacos al Pastor</div>
          <p className="text-gray-700 text-base">
            Tortilla suave con carne de cerdo adobada, piña, cebolla y cilantro fresco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;