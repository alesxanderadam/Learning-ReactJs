import { useNavigate } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import useFetchHouses from "../hooks/HouseHooks";
import { currencyFormatter } from "../types/config";
const HouseList = () => {
  const { data, status, isSuccess } = useFetchHouses();
  const nav = useNavigate();
  if (!isSuccess) {
    return <ApiStatus status={status} />;
  }
  return (
    <div>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">The House Market</h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Coutry</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((h) => (
              <tr key={h.id} onClick={() => nav(`/house/${h.id}`)}>
                <td>{h.address}</td>
                <td>{h.country}</td>
                <td>{currencyFormatter.format(h.price)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default HouseList;
