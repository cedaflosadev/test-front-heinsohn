/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../../../shared/interfaces/user.interface";
import { API_URL } from "../../../config/constants";
import SearchInput from "../../components/search-user/SearchUser";
import TableUser from "../../components/table-user/TableUser";
import "./HomeUser.css";

const HomeUser: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>(API_URL, {
        params: { search: searchTerm },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    const newTimeout = setTimeout(() => {
      fetchUsers();
    }, 500);
    setTypingTimeout(newTimeout);
  }, [searchTerm]);

  return (
    <>
      <h2 className="title-page">Lista de Usuarios</h2>

      <SearchInput
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />

      <TableUser users={users} />
    </>
  );
};

export default HomeUser;
