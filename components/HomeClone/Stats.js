const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Paid out to creators", value: "$70M" },
];

export default function Stats() {
  return (
    <div className="bg-gray-50 py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="mx-auto text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
          Our Statistics
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
       Trusted by Artisans and Customers
          </p>
        </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
