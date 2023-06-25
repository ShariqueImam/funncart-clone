import { CheckCircleIcon } from "@heroicons/react/20/solid";

const benefits = [
  "Reach a wider audience and sell your art and handicrafts like never before",
  "Earn competitive compensation that truly reflects the value of your creative work",
  "Experience true artistic freedom as we handle inventory, marketing, delivery, and more for you",
];

export default function Example() {
  return (
    <div className="bg-white py-12 md:py-24 text-black">
      <main className="relative">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-gray-200 px-6 py-16 rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
            <div className="w-full flex-auto bg-gray-200">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Sell your Art & Handicrafts{" "}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-900">
                Unlock new opportunities to showcase and sell your unique creations through our platform.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-black sm:grid-cols-1"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon
                      className="h-7 w-5 flex-none"
                      aria-hidden="true"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-indigo-400"
                >
                  Join Us <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
