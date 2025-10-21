export default function Benefits() {
  return (
    <div className="flex w-full flex-col gap-4 p-8">
      <div className="w-1/4 border-b border-red-600">
        <h1 className="text-3xl text-red-600">Our Benefits</h1>
      </div>
      <h2 className="text-3xl font-medium">
        Protect what matters most — enjoy life confidently with benefits that
        truly have you covered.{" "}
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }, (c) => (
          <Card />
        ))}
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="col-span-1 overflow-hidden rounded-xl bg-white p-4 shadow-xl">
      <h3 className="text-xl font-bold text-red-600">BEST PLAN</h3>
      <p className="text-justify">
        Endowment insurance provides both protection and savings. It pays a lump
        sum either after a specific period or in case of the insured’s passing,
        making it ideal for future goals like education, home purchase, or
        retirement.
      </p>
    </div>
  );
}
