import banner from "../assets/banner.png";

export default function Services() {
  return (
    <div className="flex w-full flex-col gap-4 p-8">
      <div className="w-1/4 border-b border-red-600">
        <h1 className="text-3xl text-red-600">Our Services</h1>
      </div>
      <h2 className="max-w-80 text-3xl font-medium">
        We’re covering all the life insurance fields
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }, (c) => (
          <Card />
        ))}
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="col-span-1 grid grid-rows-2 overflow-hidden rounded-xl shadow-xl bg-white">
      <img className="rounded-xl" src={banner} alt="" />

      <div className="p-4">
        <div className="border-b border-red-600 max-w-2/3 ">
        <h3 className="text-xl font-medium">Endowment Insurance</h3>
        </div><p className="text-justify text-black/50">
          Endowment insurance provides both protection and savings. It pays a
          lump sum either after a specific period or in case of the insured’s
          passing, making it ideal for future goals like education, home
          purchase, or retirement.
        </p>
      </div>
    </div>
  );
}
