import * as React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="cards">
        <div className="card card-twitter">
          <h2 className="card-heading">Twitter</h2>
          <h3 className="card-sub-heading">Twitter</h3>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
          </p>
          <a href="" className="card-cta">
            &rarr;
          </a>
        </div>
        <div className=" card card-instagram">
          <h2 className="card-heading">Instagram</h2>
          <h3 className="card-sub-heading">Instagram</h3>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
          </p>
          <a href="" className="card-cta">
            &rarr;
          </a>
        </div>
        <div className="card card-facebook">
          <h2 className="card-heading">Facebook</h2>
          <h3 className="card-sub-heading">Facebook</h3>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
          </p>
          <a href="" className="card-cta">
            &rarr;
          </a>
        </div>
        <div className=" card card-youtube">
          <h2 className="card-heading">Youtube</h2>
          <h3 className="card-sub-heading">Youtube</h3>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
          </p>
          <a href="" className="card-cta">
            &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
