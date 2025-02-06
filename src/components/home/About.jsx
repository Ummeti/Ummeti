import Accordion from '@/components/widgets/Accordion';
import Image from 'next/image';

export default function About() {
  const goals = [
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

  return (
    <section className="pt-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="md:grid grid-cols-5 items-start">
          <div className="col-span-3 space-y-4 p-4 sm:px-6 md:px-8 py-6">
            <h2 className="text-black font-manrope text-4xl font-semibold leading-10 md:text-left text-center">
              Who are we?
            </h2>
            <p className="text-gray-600 text-lg font-normal leading-7 md:text-left text-center">
              We are a group of young professionals from diverse fields,
              including administration, engineering, accounting, and law.
              Brought together by shared interests, we are united by a vision to
              make a positive impact on society.
            </p>
            <div className="relative aspect-video flex md:items-center md:justify-start justify-center rounded-lg overflow-hidden">
              <Image src="/bg.jpg" alt="" fill objectFit="cover" />
            </div>
          </div>
          <div className="border-l-2 md:border-second border-white p-4 sm:px-6 md:px-8 py-6 col-span-2">
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <Accordion
                  key={index}
                  title={goal.title}
                  description={goal.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
