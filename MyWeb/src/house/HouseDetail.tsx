import { useParams } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import { useFetchHouse } from "../hooks/HouseHooks";
import { currencyFormatter } from "../types/config";
import defaultPhoto from "./defaultPhoto";

const HouseDetail = () => {
  const { id } = useParams();
  if (!id) throw Error("House id not found");
  const houseID = parseInt(id);

  const { data, status, isSuccess } = useFetchHouse(houseID);
  if (!isSuccess) return <ApiStatus status={status} />;
  if (!data) return <div>House not found</div>;

  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <img
              className="img-fluid"
              src={data.photo ? data.photo : defaultPhoto}
              alt="House pic"
            ></img>
          </div>
        </div>
        <div className="col-6">
          <div className="row mt-2">
            <h5 className="col-12">{data.country}</h5>
          </div>
          <div className="row">
            <h3 className="col-12">{data.address}</h3>
          </div>
          <div className="row">
            <h2 className="themeFontColor col-12">
              {currencyFormatter.format(data.price)}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseDetail;
