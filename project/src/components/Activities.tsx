import React from 'react';
import { Calendar, CalendarDays, FileText } from 'lucide-react';

export interface Activity {
  title: string;
  date: string;
  description: string;
  image?: string;
  documentLink?: {
    url: string;
    label: string;
  };
}

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border-l-4 border-amber-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      {activity.image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-800">{activity.title}</h3>

        <div className="mt-3 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <CalendarDays size={16} className="mr-2 text-amber-500" />
            <span>{activity.date}</span>
          </div>
        </div>

        <p className="mt-4 text-gray-700">{activity.description}</p>

        {activity.documentLink && (
          <a
            href={activity.documentLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-amber-600 hover:text-amber-700 transition-colors"
          >
            <FileText size={16} className="mr-2" />
            {activity.documentLink.label}
          </a>
        )}
      </div>
    </div>
  );
};

const Activities = () => {
  const activities: Activity[] = [
    {
      title: "Tutor Interview and Test",
      date: "May 11, 2025",
      description:
        "On 11th May 2025, Karnataka Incubation Foundation (KIF) conducted a tutor selection test for the Akshar Prabhavam initiative at Adarsh Balika School. A total of 29 enthusiastic candidates participated in the test, aiming to become tutors who will support children in their academic and personal growth. The test focused on evaluating candidates' subject knowledge, communication skills, and their commitment to working with rural students. KIF follows a standard and structured process to ensure the selection of high-quality tutors. This includes a written test, personal interviews, and training sessions before final deployment. The process is designed to identify individuals who are not only academically sound but also compassionate and capable of mentoring students in a village setting. The commitment to quality ensures that the children enrolled in Akshar Prabhavam receive consistent and impactful guidance throughout the year.",
      image: "/images/activities/Interview.jpg",
      documentLink: {
        url: "/publicationDocs/interview.pdf",
        label: "View Interview Report",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-amber-100 pattern-bg-yellow py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-4xl font-bold text-center text-amber-900">Our Activities</h2>
        </div>

        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Join us for these upcoming activities and be part of our community. We regularly host
          events that bring people together for learning, networking, and making a difference.
        </p>

        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index}>
              <ActivityCard activity={activity} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
