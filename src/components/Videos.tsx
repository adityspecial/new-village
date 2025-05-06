const Videos = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Our Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Video 1 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-amber-800 mb-4 text-center">Akshar Abhiyan Orientation 2024</h3>
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.youtube.com/embed/4Sl8kWHn4-0"
              title="Control of Inverted Pendulum"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-amber-800 mb-4 text-center">Organic Farming Training</h3>
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.youtube.com/embed/yVPCie_okII"
              title="Two-Link Manipulator Trajectory"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;