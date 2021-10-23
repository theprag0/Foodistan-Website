import React from "react";
import { FaStar, FaShoppingBag, FaLocationArrow } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi";
import { GiScooter } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";

const listing = [
  {
    name: "Dominoz",
    type: "snacks",
    address: "Sector-1",
    distance: "1km",
  },
  {
    name: "Pizza Wings",
    type: "Pizza",
    address: "Sector-2",
    distance: "2km",
  },
  {
    name: "Pizza Wings New",
    type: "Pizza Snacks",
    address: "Sector-3",
    distance: "3km",
  },
  {
    name: "Dominoz",
    type: "snacks",
    address: "Sector-1",
    distance: "1km",
  },
  {
    name: "Pizza Wings",
    type: "Pizza",
    address: "Sector-2",
    distance: "2km",
  },
  {
    name: "Pizza Wings New",
    type: "Pizza Snacks",
    address: "Sector-3",
    distance: "3km",
  },
  {
    name: "Pizza Wings New",
    type: "Pizza Snacks",
    address: "Sector-3",
    distance: "3km",
  },
  {
    name: "Dominoz",
    type: "snacks",
    address: "Sector-1",
    distance: "1km",
  },
  {
    name: "Pizza Wings",
    type: "Pizza",
    address: "Sector-2",
    distance: "2km",
  },
];

export default function listingCards() {
  return (
    <>
      <div className="container-fluid normal-font main-container">
        <div className="row my-2">
          {" "}
          {listing.map((item, i) => {
            return (
              <div
                className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mx-auto my-3"
                key={i}
              >
                <div className="card">
                  <div className="card-image-container">
                    <img
                      className="card-image"
                      src="/food1.jpeg"
                      alt="not found"
                    />
                    <div className="card-image-footer">
                      <p className="h-100 d-flex align-items-center noraml-font">
                        <MdVerifiedUser />
                        Foodistan - Certified{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="card-details">
                    <div className="card-details-container">
                      <div className="card-details-container-padding">
                        <h1 className="font-weight-bolder pt-4 pb-2 heading-font">
                          {" "}
                          {item.name}{" "}
                        </h1>{" "}
                        <h3 className="pb-2 text-muted"> {item.type} </h3>{" "}
                        <p className="pb-2 text-warning">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </p>{" "}
                        <p className="py-2">
                          <HiCurrencyRupee className="heading-font" />
                          Cost For Two{" "}
                        </p>{" "}
                        <p className="py-2">
                          <GiScooter className="heading-font" />
                          Delivery{" "}
                        </p>{" "}
                        <p className="py-2">
                          <FaShoppingBag className="normal-heading-font" />
                          Takeaway{" "}
                        </p>{" "}
                      </div>{" "}
                      <div className="card-details-footer d-flex flex-row align-items-center justify-content-around text-light">
                        <p>
                          <IoLocationSharp className="heading-font" />{" "}
                          {item.address}{" "}
                        </p>{" "}
                        <p>
                          <FaLocationArrow className="heading-font" />{" "}
                          {item.distance}{" "}
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
