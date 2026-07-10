import "./admin_dashboard.css";

import { FaHome } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaSpa } from "react-icons/fa";
import Login from "./Login";
import {Link} from 'react-router-dom'

function Admin_dashboard() {
  return (
    <div className="admin_dashboard">

      {/* Sidebar */}
      <aside className="admin_sideBar">

        <div className="admin_logo">
             <h2>Dashboard</h2>
            
        </div>

        <nav className="admin_menu">
          <ul>

            <li>
              <a href="#" className="active">
                <FaHome />
                Home
              </a>
            </li>

            <li>
             <Link to="./viewAll_booking">
               <FaRegAddressBook />
                View All Bookings
             </Link>
            </li>

            <li>
              <Link to="./viewAll_booking">
                <IoSearch />
                Search Booking
              </Link>
            </li>

          </ul>
        </nav>

        <div className="logout">
         <Link to='/admin'>
            <MdLogout />
              Logout
          </Link>
        
        </div>

      </aside>

      {/* Main Content */}

      {/* <main className="dashboard_content">

        

        <section className="cards">

          <div className="card">
            <h3>Total Bookings</h3>
            <h2>158</h2>
          </div>

          <div className="card">
            <h3>Today's Bookings</h3>
            <h2>12</h2>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <h2>5</h2>
          </div>

          <div className="card">
            <h3>Completed</h3>
            <h2>141</h2>
          </div>

        </section>

      </main> */}

    </div>
  );
}

export default Admin_dashboard;