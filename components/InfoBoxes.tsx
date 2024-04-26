import InfoBox from "./InfoBox";

function InfoBoxes() {
  return (
    <section>
      <div className="container-xl m-auto lg:container">
        <div className="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2">
          <InfoBox
            backgroundColor="bg-gray-100"
            heading="For Renters"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-gray-800",
            }}
          >
            Find your dream rental property. Bookmark awesome properties and
            contact owners.
          </InfoBox>
          <InfoBox
            backgroundColor="bg-blue-100"
            heading="For Property Owners"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-blue-500",
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
}

export default InfoBoxes;
