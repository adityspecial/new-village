interface Event {
  title: string;
  date: string;
  time: string;
  description: string;
}

const events: Event[] = [
  {
    title: "Annual Report Release",
    date: "May 18, 2025",
    time: "5:00 PM",
    description: "Test your knowledge of literature, authors, and genres in this fun quiz night.",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen pattern-bg-yellow py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-10">
          Upcoming Events
        </h2>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-amber-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-amber-800">{event.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {event.date} &middot; {event.time}
              </p>
              <p className="mt-3 text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;