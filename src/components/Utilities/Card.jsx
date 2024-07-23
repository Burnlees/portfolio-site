import React from "react";

export const Card = ({ img, title, desc, finished, setCaseStudy }) => {
  const handleClick = () => {
    setCaseStudy((currStudy) => {
      return title;
    });
  };

  return (
    <div className="card glass w-96">
      <figure>
        <img src={img} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-primary-100 font-light tracking-tight">{desc}</p>
        <div className="card-actions justify-end">
          {finished ? (
            <button
              className="btn bg-primary-600 text-primary-900 hover:text-primary-100 hover:bg-primary-900"
              onClick={handleClick}
            >
              Case Study
            </button>
          ) : (
            <button className="btn bg-primary-900 text-primary-100">
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
