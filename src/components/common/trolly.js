import React from "react";

export default function trolly() {
  return (
    <div className="container-fluid normal-font main-container .marginB">
      <div className="row py-5">
        <div className="tab-selection-container p-0">
          <div className="trolly-tab-selection">
            <img src="/trolly.png" className="trolly-img absolute-center"></img>
          </div>
          <div className="lunch-tab-selection">
            <img src="/lunch.png" className="trolly-img absolute-center"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
