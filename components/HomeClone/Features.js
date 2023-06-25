const incentives = [
  {
    name: "Promoting Pakistani Culture",
    description:
      "We passionately promote Pakistani culture and art, sharing its beauty with the world.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
  },
  {
    name: "Swift Delivery",
    description:
      "We ensure seamless and timely delivery, guaranteeing your order reaches your doorstep promptly",
    imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg",
  },
  {
    name: "Exquisite Quality",
    description:
      "We offer handicrafts of exceptional quality, meticulously crafted with the finest materials.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
  },
  {
    name: "Empowering Artisans",
    description:
      "We empower artisans through fair compensation and promotion of their incredible craftsmanship.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
  },
];

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {incentives.map((incentive) => (
            <div key={incentive.name}>
              <img src={incentive.imageSrc} alt="" className="h-24 w-auto" />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {incentive.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {incentive.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
