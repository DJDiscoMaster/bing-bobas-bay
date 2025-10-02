const Watermark = () => {
  return (
    <>
      {/* Large center watermark */}
      <div className="fixed inset-0 z-30 pointer-events-none select-none flex items-center justify-center">
        <div className="transform -rotate-45 opacity-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground whitespace-nowrap">
            DEMO WEBSITE
          </h1>
        </div>
      </div>
      
      {/* Top banner */}
      <div className="fixed top-16 left-0 right-0 z-40 pointer-events-none select-none">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-2 px-4 shadow-lg">
          <p className="text-sm md:text-base font-bold animate-pulse">
            🚧 DEMO WEBSITE - NOT FOR COMMERCIAL USE 🚧
          </p>
        </div>
      </div>
      
      {/* Bottom right corner */}
      <div className="fixed bottom-4 right-4 z-40 pointer-events-none select-none">
        <div className="bg-red-500/90 backdrop-blur-sm border-2 border-red-400 rounded-lg px-4 py-3 shadow-lg animate-pulse">
          <p className="text-sm text-white font-bold">
            DEMO ONLY
          </p>
          <p className="text-xs text-red-100">
            Contact to purchase
          </p>
        </div>
      </div>
    </>
  );
};

export default Watermark;
