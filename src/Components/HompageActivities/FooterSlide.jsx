import bgImage from '../../assets/pngwing.png';

const FooterSlide = () => {
  const slides = Array.from({ length: 10 }); // Repeat the same card for demo

  return (
    <div className="w-full overflow-hidden h-auto pb-8">
        <h1 className='text-gray-700 pl-4 font-bold text-2xl mb-4'>Grand Prize Winners</h1>
      <div className="flex gap-6 animate-slide whitespace-nowrap">
        {slides.map((_, index) => (
          <div key={index} className="flex flex-col  flex-shrink-0">
            <div
              className="relative text-white px-6 py-2 rounded-lg shadow-md h-24 w-56 rounded-br-[4rem]"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gray-800/90 bg-opacity-60 rounded-lg rounded-br-[4rem]"></div>

              <div className="relative z-10">
                <p className="text-sm">2*******670 won</p>
                <h1 className="text-2xl font-bold text-green-600">GHS 5,756.05</h1>
                <p className="text-sm">in Sports</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-1 text-left">2 minutes ago</p>
          </div>
        ))}

        {/* Duplicate for seamless loop */}
        {slides.map((_, index) => (
          <div key={`copy-${index}`} className="flex flex-col items-center flex-shrink-0">
            <div
              className="relative text-white px-6 py-4 rounded-lg shadow-md h-40 w-56 rounded-br-[2rem]"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gray-800 bg-opacity-60 rounded-lg"></div>

              <div className="relative z-10">
                <p className="text-sm">2*******670 won</p>
                <h1 className="text-2xl font-bold">GHS 5,756.05</h1>
                <p className="text-sm">in Sports</p>
              </div>
            </div>
            <p className="text-xs text-gray-300 mt-1">2 minutes ago</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSlide;
