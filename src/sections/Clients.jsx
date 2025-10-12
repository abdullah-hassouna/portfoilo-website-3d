import React from "react";
import { clientReviews } from "../constans";

const Clients = () => {
  return (
    <section className="c-space my-20 ">
      <h3 className="head-text">Here are some of Our Clients</h3>
      <div className="client-container">
        {clientReviews.map((client) => (
          <div key={client.id} className="client-review">
            <div>
              <p className="text-white font-light">{client.review}</p>
              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">
                      {client.name}
                    </p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {client.position}
                    </p>
                  </div>
                </div>
                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
