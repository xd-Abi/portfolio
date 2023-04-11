export default function Hero() {
  return (
    <div className="flex min-h-screen text-white bg-black overflow-x-hidden">
      <div className="basis-full flex items-center justify-center">
        {/* <div className="absolute top-80 left-96 w-56 h-56 bg-indigo-400 rounded-full"></div> */}
        {/* <div className="absolute top-72 left-80 w-56 h-56 bg-purple-400 rounded-full"></div> */}
        {/* <div className="absolute top-80 left-80 w-32 h-32 bg-red-400 rounded-full"></div> */}

        <div className="relative text-center">
          <div className="filter blur-3xl opacity-80 animate-blob absolute w-64 h-64 -left-12 bg-purple-900 rounded-full"></div>
          <div className="filter blur-3xl opacity-80 animate-blob absolute w-64 h-64 left-32 bg-red-600 rounded-full"></div>
          <div className="filter blur-3xl opacity-80 animate-blob absolute w-64 h-64 -left-2 -top-24 bg-pink-900 rounded-full"></div>
          <div className="relative">
            <p className="font-sans font-semibold text-2xl text-gray-400">
              Welcome, I am
            </p>
            <p className="pt-2 font-sans font-bold text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
              xd Abi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
