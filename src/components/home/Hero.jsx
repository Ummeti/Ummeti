import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-314px)]">
      <div className="absolute inset-0 bg-cover bg-center bg-[url(/bg-1.jpg)] bg-fixed"></div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-2xl">
          Be a helping hand now
        </h1>
        <p className="mb-6 text-lg drop-shadow-2xl">
          Contribute to building a better future for the nation
        </p>
        <Link
          href="/donate"
          className="px-6 py-3 bg-main hover:bg-main-light text-white duration-300 font-semibold rounded-lg shadow-lg"
        >
          Donate now
        </Link>
      </div>
    </section>
  );
}
