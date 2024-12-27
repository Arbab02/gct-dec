import dbConnect from "@/lib/mongodb";
import Event from "@/lib/models/Event";

export default async function EventsPage() {
  await dbConnect();

  // Fetch events from the database
  const events = await Event.find({}).lean(); // `lean()` improves performance for read-only data
  const gradientCard = 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-800 via-gray-950 to-gray-950';

  return (
    <div className="bg-[#cbd3cb] pt-32 pb-4">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
          Upcoming Events
        </h2>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event._id}
                className={`${gradientCard} text-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300`}
              >
                <img
                  src={event.image || "/default-image.jpg"}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold  mb-3">{event.title}</h3>
                  <p>{event.description}</p>
                  <p className="mt-3">
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {event.time}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No events available.</p>
        )}
      </div>
    </div>
  );
}
