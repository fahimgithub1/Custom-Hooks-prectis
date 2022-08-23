import useCount from "../Hook/use-count";

function PlasCounter() {
  const counter = useCount();

  return (
    <div>
      {counter}
    </div>
  );
}

export default PlasCounter;
