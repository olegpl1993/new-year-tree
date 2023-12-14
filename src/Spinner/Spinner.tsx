import "./Spinner.scss";

function Spinner() {
  return (
    <div className="spinner">
        <div className="cube">
          <div className="cube__polygon cube__polygon--top">1</div>
          <div className="cube__polygon cube__polygon--back">2</div>
          <div className="cube__polygon cube__polygon--left">3</div>
          <div className="cube__polygon cube__polygon--right">4</div>
          <div className="cube__polygon cube__polygon--front">5</div>
          <div className="cube__polygon cube__polygon--bottom">6</div>
        </div>
    </div>
  );
}

export default Spinner;
