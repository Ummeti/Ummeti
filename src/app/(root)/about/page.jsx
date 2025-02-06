import Breadcrumb from '@/components/widgets/Breadcrumb';
import Image from 'next/image';

export default function About() {
  return (
    <section className="px-4 sm:px-6 md:px-8 mx-auto py-20 max-w-6xl">
      <Breadcrumb />
      <div className="mt-4">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/bg-4.jpg"
              alt="about Us image"
              fill
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h1 className="text-gray-900 text-3xl font-bold font-manrope leading-normal lg:text-start text-center">
                About Ummati
              </h1>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Ummati is a global organization aimed at supporting the issues
                of the Islamic nation and advocating for the Palestinian cause.
                It operates dynamically across different countries within a
                practical framework, striving to achieve its central goal, which
                is the unity of the Islamic nation
              </p>
            </div>
            <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
              <div className="flex-col justify-start items-start inline-flex">
                <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                  33+
                </h2>
                <h3 className="text-gray-500 text-base font-normal leading-relaxed">
                  Projects
                </h3>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                  125+
                </h2>
                <h3 className="text-gray-500 text-base font-normal leading-relaxed">
                  Supporters
                </h3>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                  52+
                </h2>
                <h3 className="text-gray-500 text-base font-normal leading-relaxed">
                  People Served
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid md:grid-cols-2 gap-8 grid-flow-dense">
          <div className="order-1 md:order-none">
            <div>
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                Ummati's Vision
              </h2>
              <p className="text-gray-600 mt-2">
                A global organization working within an institutional framework
                that serves as a hub for organizations, individuals, and
                entities to invest their efforts in a structured manner. It
                seeks to develop effective products and coordinate efforts on
                various fronts, with a primary focus on the Palestinian cause
              </p>
            </div>
            <div>
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal mt-4">
                Ummati's Objectives
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-2">
                <li>
                  Unifying and coordinating the efforts of the Islamic nation in
                  humanitarian and Islamic causes, particularly the Palestinian
                  cause
                </li>
                <li>
                  Unifying and coordinating the efforts of the Islamic nation in
                  humanitarian and Islamic causes, particularly the Palestinian
                  cause
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal mt-4">
                What Sets Amni Apart?
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-2">
                <li>A global network with access to resources</li>
                <li>Institutional work</li>
                <li>Transparency</li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal mt-4">
                Targeted Groups
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-2">
                <li>Those affected by wars</li>
                <li>Refugees</li>
                <li>Displaced individuals</li>
                <li>Oppressed and marginalized groups</li>
                <li>Orphans and those in need</li>
              </ul>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="/bg-1.jpg" alt="Ummati" fill objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
