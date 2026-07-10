
require("dotenv").config();
const express = require("express");
const db = require("../../backend_folder/bd");
const cors = require("cors");
const fs = require("fs");
// create the application 

const app = express();


app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Backend is working!");
});

// Get all bookings
app.get("/booking", (req, res) => {

    db.query("SELECT * FROM booking", (err, result) => {

        if (err) {
            res.status(500).send(err);
            return;
        }

        res.json(result);

    });

});

app.post("/booking", (req, res) => {
     console.log(req.body);
    const {
        full_name,
        phone_num,
        email,
        state,
        address,
        package,
        customized_sweets,
        dry_fruits,
        booking_date,
        number_of_people,
        notes
    } = req.body;

    const sql = `
        INSERT INTO booking
        (full_name, phone_num, email, state, address, package,
        customized_sweets, dry_fruits, booking_date, number_of_people, notes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        full_name,
        phone_num,
        email,
        state,
        address,
        package,
        customized_sweets,
        dry_fruits,
        booking_date,
        number_of_people,
        notes
    ];

    db.query(sql, values, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).send("Error inserting data");
        }

        res.json({
    message: "Booking saved successfully!"
     });
    });
});

//admins 


app.post("/admin/login", (req, res) => {
  console.log(req.body);
    const {
        username,
        password,
      
    } = req.body;

    const sql = `
        SELECT * FROM admins
        where username = ? ;
    `;

    const values = [username];

    db.query(sql, values, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).send("Error inserting data");
        }
        if (result.length === 0) {
               return res.json({
                success:false,
                message: "Username not found"
                               });
    }
    if (password !== result[0].user_password) {
        return res.json({
          success:false,
          message: "Wrong password"
    });
    }

    if (result[0].is_active === false) {
    return res.json({
        
        success:false,
        message: "Your account is not active"
    });
    }

        res.json({
            success : true,
            message: "user found successfully!"
     });
    });

});


app.get("/view_booking", (req, res) => {

    const sql = "SELECT * FROM booking";

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error fetching bookings"
            });
        }

        res.json(result);

    });

});



const PORT = process.env.PORT || 5000;

// start the server
app.listen(PORT ,()=>{

    console.log("server is running");
})



//delete button handle

app.delete("/booking/:id", (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM booking WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Error deleting booking"
            });
        }

        res.json({
            message: "Booking deleted successfully"
        });

    });

});


//update 

app.put("/booking/:id", (req, res) => {

    const id = req.params.id;

    const {
        full_name,
        phone_num,
        email,
        state,
        address,
        package,
        customized_sweets,
        dry_fruits,
        booking_date,
        number_of_people,
        notes
    } = req.body;

    const sql = `
        UPDATE booking
        SET
            full_name = ?,
            phone_num = ?,
            email = ?,
            state = ?,
            address = ?,
            package = ?,
            customized_sweets = ?,
            dry_fruits = ?,
            booking_date = ?,
            number_of_people = ?,
            notes = ?
        WHERE id = ?
    `;

    const values = [
        full_name,
        phone_num,
        email,
        state,
        address,
        package,
        customized_sweets,
        dry_fruits,
        booking_date,
        number_of_people,
        notes,
        id
    ];

    db.query(sql, values, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error updating booking"
            });
        }

        res.json({
            message: "Booking updated successfully"
        });

    });

});