import React, { useState, useEffect } from "react";

import './viewAllBooking.css'



function ViewAll_booking() {

    const [bookings, setBookings] = useState([]);
    const [search, setSearch] = useState("");
  
   const filteredBookings = bookings.filter((booking) =>
        booking.full_name.toLowerCase().includes(search.toLowerCase())
   );






  useEffect(() => {
    fetch("http://localhost:5000/view_booking")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  
  //handleDelete FUnction
  
const handleDelete = async (id) => {

    console.log("Button clicked", id);

    try {

        const response = await fetch(`http://localhost:5000/booking/${id}`, {
            method: "DELETE",
        });

        console.log(response);

        const data = await response.json();

        console.log(data);

        alert(data.message);

        setBookings((prevBookings) =>
            prevBookings.filter((booking) => booking.id !== id)
        );

    } catch (error) {

        console.log(error);

    }

};



  return (
    <div className="view_booking">
      <div className="serach_container">
        <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
   />
      </div>
      <h2>All Bookings</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>State</th>
            <th>Address</th>
            <th>Package</th>
            <th>Customized Sweets</th>
            <th>Dry Fruits</th>
            <th>Booking Date</th>
            <th>People</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
  {filteredBookings.map((booking) => (
    <tr key={booking.id}>
      <td>{booking.id}</td>
      <td>{booking.full_name}</td>
      <td>{booking.phone_num}</td>
      <td>{booking.email}</td>
      <td>{booking.state}</td>
      <td>{booking.address}</td>
      <td>{booking.package}</td>
      <td>{booking.customized_sweets ? "Yes" : "No"}</td>
      <td>{booking.dry_fruits ? "Yes" : "No"}</td>
      <td>{booking.booking_date}</td>
      <td>{booking.number_of_people}</td>
      <td>{booking.notes}</td>

      <td>
        <div className="button_row">
      

          <button
            id="delete_btn"
            onClick={() => handleDelete(booking.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

</table>
          

  




</div>
              )};
  
export default ViewAll_booking;