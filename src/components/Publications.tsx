const publications = [
  {
    title: 'PHC Survey Form',
    category: 'Village Development',
    author: 'Ashwin Bhusare',
    image: 'https://kifdwd.org/wp-content/uploads/2024/07/Village-Survey-Form-2.jpg',
    downloadLink: 'https://kifdwd.org/wp-content/uploads/2024/03/PHC-Survey-Form.pdf'
  },
  {
    title: 'Village Survey Form',
    category: 'Village Development',
    author: 'Ashwin Bhusare',
    image: 'https://kifdwd.org/wp-content/uploads/2024/07/Village-Survey-Form.jpg',
    downloadLink: 'https://kifdwd.org/wp-content/uploads/2024/03/Village-Survey-Form.pdf'
  }
];

const Publications = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Publications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <img
              src={pub.image}
              alt={pub.title}
              className="w-48 h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-1 text-center">{pub.title}</h3>
            {(
              <p className="text-gray-700 text-center text-sm mb-2"></p>
            )}
            <p className="text-sm text-gray-500">{pub.category}</p>
            <p className="text-sm text-gray-500 mb-4">{pub.author}</p>
            <a
              href={pub.downloadLink}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              download
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;