const testimonials = [
  {
    body: "Good material. Satisfied. Thanks for the mini gift of chocolate. That made my day",
    author: {
      name: "Hammad Baig",
      handle: "Hammad Baig",
    },
  },
  {
    body: "Delivery waqt par hui aur sath mein aapki khaas mohabbat se bhare hue note or chocolate ne mera dil jeet liya",
    author: {
      name: "Saima Malik",
      handle: "Saima Malik",
    },
  },
  {
    body: "Outstanding quality reflecting Pakistani heritage. Great packaging and amazing customer service. Highly recommended!",
    author: {
      name: "Ali Hassan",
      handle: "Ali Hassan",
    },
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What our customers are saying
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-3 lg:columns-3 sm:text-[0]">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:w-[100%] sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 flex flex-col items-center">
                  <blockquote className="text-gray-900 my-4 md:my-5 text-center">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex flex-col items-center">
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonial.author.name}
                    </div>
                    {/* <div className="text-gray-600">{`@${testimonial.author.handle}`}</div> */}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
