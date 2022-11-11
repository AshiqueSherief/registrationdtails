import React from "react";

function regComponent({ children }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>sl.no</th>
            <th>Name</th>
            <th>Phone no</th>
            <th>Email</th>
            <th>Password no</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default regComponent;
