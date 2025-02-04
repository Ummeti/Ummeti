import React from 'react';
import Accordion from '../widgets/Accordion';

const goals = [
  {
    title: 'Who are we?',
    description:
      'We are a group of young professionals from diverse fields, including administration, engineering, accounting, and law. Brought together by shared interests, we are united by a vision to make a positive impact on society.',
  },
  {
    title: 'Our Vision',
    description:
      'To become a leading force in community service, driving innovation, and promoting sustainable development.',
  },
  {
    title: 'Our Mission',
    description: [
      'Develop and implement community projects that address societal needs and drive meaningful change.',
      'Partner with local and international organizations to exchange expertise and adopt best practices.',
      'Empower our members through continuous training, skill development, and professional growth.',
    ],
  },
  {
    title: 'Our Goals',
    description: [
      'Raise community awareness and foster a culture of volunteerism.',
      'Launch sustainable development projects across various sectors.',
      'Promote social solidarity and provide support to those in need.',
      'Encourage innovation and creativity among young people.',
      'Build strong partnerships at both local and international levels.',
    ],
  },
  {
    title: 'Our Values',
    description: [
      'Integrity and transparency in all our endeavors.',
      'Collaboration and teamwork to achieve greater impact.',
      'Commitment to excellence and achieving meaningful goals.',
      'Respect for diversity, inclusion, and equal opportunities.',
      'Lifelong learning and continuous self-improvement.',
    ],
  },
];

export default function Goals() {
  return (
    <section>
      <div className="space-y-4 px-4 sm:px-6 md:px-8 pt-20 mx-auto max-w-6xl">
        {goals.map((goal, index) => (
          <Accordion
            key={index}
            title={goal.title}
            description={goal.description}
          />
        ))}
      </div>
    </section>
  );
}
