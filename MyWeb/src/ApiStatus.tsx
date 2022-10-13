type Args = {
  status: "idle" | "success" | "error" | "loading";
};
const ApiStatus = ({ status }: Args) => {
  switch (status) {
    case "error":
      return <div>Error from backend</div>;
    case "idle":
      return <div>Idle</div>;
    case "loading":
      return <div>Loading data ...</div>;
    default:
      throw Error("Unknow Api State");
  }
};
export default ApiStatus;
