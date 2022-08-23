import useCount from "./Hook/use-count";

function Baccounter() {
  const counter = useCount(false);

  return (
    <div>
      {counter}
    </div>
  );
}

export default Baccounter;
