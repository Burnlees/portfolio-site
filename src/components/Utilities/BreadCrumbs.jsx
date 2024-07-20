import React from "react";

export const BreadCrumbs = ({ setCaseStudy, title }) => {
  const handleProjectsClick = () => {
    setCaseStudy(() => {
        return null
    })
  };

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <a onClick={handleProjectsClick}>Projects</a>
        </li>
        <li>{title}</li>
      </ul>
    </div>
  );
};
