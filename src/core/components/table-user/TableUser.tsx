import React from "react";
import { User } from "../../../shared/interfaces/user.interface";
import "./TableUser.css";

interface TableUserProps {
  users: User[];
}

const TableUser: React.FC<TableUserProps> = ({ users }) => {
  return (
    <>
      {users.length !== 0 ? (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="no-data-message">No hay Registros</p>
      )}
    </>
  );
};

export default TableUser;
