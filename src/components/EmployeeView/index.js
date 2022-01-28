import React from "react";

const EmployeeView = ({ employee, index, length }) => {
  const { name, city, country, employer, title, favoriteMovies } = employee;

  return (
    <div>
      <p>
        {index + 1}/{length}
      </p>
      <h3>
        {name.first} {name.last}
      </h3>
      <p>From: {(city, country)}</p>
      <p>Job Title: {title}</p>
      <p>Employer: {employer}</p>
      <h3>
        Favorite Movies: 1. {favoriteMovies[0]}
        2. {favoriteMovies[1]}
        3. {favoriteMovies[2]}
      </h3>
    </div>
  );
};

export default EmployeeView;
