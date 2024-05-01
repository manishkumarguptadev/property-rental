import { Properties } from "@/models/Property";
import Image from "next/image";
import {
  FaBath,
  FaBed,
  FaMapMarker,
  FaMoneyBill,
  FaRulerCombined,
} from "react-icons/fa";

interface Props {
  property: Properties & { _id: string };
}

function PropertyCard({ property }: Props) {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates?.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates?.weekly) {
      return `${rates?.weekly.toLocaleString()}/wk`;
    } else if (rates?.nightly) {
      return `${rates?.nightly.toLocaleString()}/night`;
    }
  };
  return (
    <div className="relative rounded-xl shadow-md">
      <Image
        src={property.images[0]}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full rounded-t-xl"
      />
      <div className="p-4">
        <div className="mb-6 text-left md:text-center lg:text-left">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute right-[10px] top-[10px] rounded-lg bg-white px-4 py-2 text-right font-bold text-blue-500 md:text-center lg:text-right">
          {getRateDisplay()}
        </h3>

        <div className="mb-4 flex justify-center gap-4 text-gray-500">
          <p>
            <FaBed className="fa-solid fa-bed"></FaBed> {property.beds}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="fa-solid fa-bath"></FaBath> {property.baths}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="fa-solid fa-ruler-combined"></FaRulerCombined>
            {property.square_feet}{" "}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="mb-4 flex justify-center gap-4 text-sm text-green-900">
          {property.rates?.nightly && (
            <p>
              <FaMoneyBill className="mr-2 inline" /> Nightly
            </p>
          )}

          {property.rates?.weekly && (
            <p>
              <FaMoneyBill className="mr-2 inline" /> Weekly
            </p>
          )}

          {property.rates?.monthly && (
            <p>
              <FaMoneyBill className="mr-2 inline" /> Monthly
            </p>
          )}
        </div>

        <div className="mb-5 border border-gray-100"></div>

        <div className="mb-4 flex flex-col justify-between lg:flex-row">
          <div className="mb-4 flex gap-2 align-middle lg:mb-0">
            <FaMapMarker className="fa-solid fa-location-dot text-lg text-orange-700"></FaMapMarker>
            <span className="text-orange-700">
              {" "}
              {property.location?.city} {property.location?.state}
            </span>
          </div>
          <a
            href={`/properties/${property._id}`}
            className="h-[36px] rounded-lg bg-blue-500 px-4 py-2 text-center text-sm text-white hover:bg-blue-600"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
