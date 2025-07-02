import React from 'react';

export function Experience() {
  const exp = [
    {
      position: 'Training & Placement Coordinator',
      organisation: 'Training & Placement Cell, Assam Engineering College',
      duration: 'Nov 2024 – Current',
      location: 'On-Site, Guwahati',
      achieve1:
        'Looking after placements and internships for students of the 2026 batch.',
      achieve2:
        'Successfully fetched summer internships for 57 students of the 2026 ECE batch.',
    },
    {
      position: 'Technical Coordinator - App Dev',
      organisation:
        'Google Developer Students Club, Assam Engineering College',
      duration: 'Aug 2023 – July 2024',
      location: 'On-Site, Guwahati',
      achieve1: 'Conducted and managed app dev sessions in college.',
      achieve2: 'Assisted senior leads in delivering workshops.',
    },
    {
      position: 'Event Management Team',
      organisation: 'AEC Coding Club, Assam Engineering College',
      duration: 'Aug 2023 – July 2024',
      location: 'On-Site, Guwahati',
      achieve1: 'Hosted welcome events for first-year students.',
      achieve2:
        'Managed "Code Wars" — a coding and hackathon event with 45+ participants from Northeast India.',
    },
    {
      position: 'Campus Mantri',
      organisation: 'Geeks For Geeks',
      duration: 'July 2023 – July 2024',
      location: 'Remote, Noida',
      achieve1:
        'Built a GFG community and promoted beneficial student programs.',
      achieve2:
        'Increased GFG registered users in AEC to over 200 through active promotion.',
    },
  ];

  return (
    <div className="h-screen w-screen bg-[#1e1e2f] text-white px-6 pt-24  flex-col">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-400 underline underline-offset-4">
        Experience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {exp.map((item, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-300">{item.position}</h2>
            <p className="text-gray-300">{item.organisation}</p>
            <p className="text-sm text-gray-400 mt-1">
              {item.duration} • {item.location}
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-200">
              <li>{item.achieve1}</li>
              <li>{item.achieve2}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
