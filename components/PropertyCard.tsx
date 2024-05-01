import { Properties } from "@/models/Property";

interface Props {
  property: Properties;
}

function PropertyCard({ property }: Props) {
  return <div>{property.name}</div>;
}

export default PropertyCard;
