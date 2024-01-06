/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import './Style.css'

import React from "react";

export default function List({ data, handleEdit, handleDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.telp}</td>
            <td>
              <button
                onClick={() => handleEdit(contact.id)}
                className="btn btn-sm btn-link"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(contact.id)}
                className="btn btn-sm btn-link"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
