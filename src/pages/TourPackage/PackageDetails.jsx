import { useParams } from "react-router-dom";
import HappyCustomers from "../../components/HappyCustomers/HappyCustomers";
import ProDetails from "./ProDetails";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const PackageDetails = () => {

  const { tours } = useContext(AuthContext);
  const { packageId } = useParams()
  const tour = tours.find(tour => tour.id == packageId);
  // console.log(tour);

  return (
    <div className="min-h-screen max-w-screen-2xl lg:mx-auto mx-10 lg:pt-40 pt-28">
      
      <ProDetails tour={tour} />

      {/* Happy Customer says */}
      <div className="mb-16">
        <HappyCustomers />
      </div>

    </div>
  )
}

export default PackageDetails







