export default function Statistics() {
  const stats = [
    { label: 'Projects', value: 150 },
    { label: 'Supporters', value: 5000 },
    { label: 'People Served', value: 25000 },
  ];

  return (
    <section className="p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center rounded-lg shadow-sm bg-second-lightest overflow-hidden">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex-1 p-8 text-center">
            <h2 className="text-4xl font-bold text-main">{stat.value}</h2>
            <div className="w-12 mx-auto border-t-2 border-black mt-2 mb-4"></div>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
        <div className="flex-1 p-8 text-center bg-main text-white">
          <h3 className="text-xl font-semibold">Be Part of the Change</h3>
          <p className="mt-2">
            <a href="#" className="text-white underline">
              become volunteer
            </a>
            <span className="text-white">→</span>
          </p>
        </div>
      </div>
    </section>
  );
}
