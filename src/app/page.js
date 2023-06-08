"use client"; // Making it a client compoent to use useEfect and useState
// ! Importing
import React, { useEffect, useState, useRef } from "react";
import Card from "./components/card";
import SkeletonCard from "./components/skeletonCard";

const IndexPage = () => {
  // To store the data of the random user
  const [users, setUsers] = useState([]);
  //  To check if it is still loading
  // Use to show or hide the skeleton laoding
  const isLoadingRef = useRef(true);
  // No of cards we want to display
  const cards = 15;

  // Getting all the users from https://randomuser.me
  // Using useEffect to refresh the page when all the data are fetched
  useEffect(() => {
    const fetchUsers = async () => {
      isLoadingRef.current = true; // Set isLoading to true before fetching users

      try {
        const response = await fetch(
          `https://randomuser.me/api/?results=${cards}`
        );
        const data = await response.json();
        setUsers(data.results);
        isLoadingRef.current = false; // Set isLoading to false after fetching users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {/* Hiding the skeleton loading when all the data is fetched */}
      {isLoadingRef.current && SkeletonCard({ cards })}
      {/* Displaying the users */}
      {/* passing each and every user to this compoent and rendering it one by one */}
      {users.map((user, index) => Card(index, user))}
    </div>
  );
};

export default IndexPage;
