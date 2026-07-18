import React, { useState } from "react";

import './Book.css'

function Book() {

    const [formData, setFormData] = useState({
    full_name: "",
    phone_num: "",
    email: "",
    state: "",
    address: "",
    package: "",
    customized_sweets: false,
    dry_fruits: false,
    booking_date: "",
    number_of_people: "",
    notes: ""
    });

    const handleSubmit = async (e) => {
    e.preventDefault();

     const response = await fetch("https://web-development-projrcts.onrender.com/booking", {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log(data);


    setFormData({
    full_name: "",
    phone_num: "",
    email: "",
    state: "",
    address: "",
    package: "",
    customized_sweets: false,
    dry_fruits: false,
    booking_date: "",
    number_of_people: "",
    notes: ""
});
   };

  return (

      
     <div className="gloabl_div_container">
          
           {/* nav_bar */}

            
        <div className="book_nav_bar">
          <div className="book_logo">
            <img src="../components/pictures_folder/logo_changed_version.jpg" alt="" />
          </div>


          <div className="book_nav_list">
            <nav>
              <a href="#home" >الرئيسية</a>
              <a href="#services">الخدمات</a>
              <button id="contact_btn" onClick={()=>document.getElementById("footer")?.scrollIntoView({behavior:"smooth"})}>اتصل بنا</button>
            </nav>
          </div>
        </div>

{/* form  */}
<form className="booking_form" onSubmit={handleSubmit}>

    <h2>احجز الآن</h2>

    <input
        type="text"
        placeholder="الاسم الكامل"
        required
        value={formData.full_name}
        onChange={(e) =>
            setFormData({ ...formData, full_name: e.target.value })
        }
    />

    <input
        type="tel"
        placeholder="رقم الهاتف"
        pattern="0[5-7][0-9]{8}"
        title="يرجى إدخال رقم هاتف جزائري صحيح (مثال: 0550123456)"
        required
        value={formData.phone_num}
        onChange={(e) =>
            setFormData({ ...formData, phone_num: e.target.value })
        }
    />

    <input
        type="email"
        placeholder="البريد الإلكتروني (اختياري)"
        value={formData.email}
        onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
        }
    />

    <input
        type="text"
        placeholder="الولاية"
        required
        value={formData.state}
        onChange={(e) =>
            setFormData({ ...formData, state: e.target.value })
        }
    />

    <input
        type="text"
        placeholder="العنوان"
        required
        value={formData.address}
        onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
        }
    />

    <label>الباقة الرئيسية</label>

    <select
        required
        value={formData.package}
        onChange={(e) =>
            setFormData({ ...formData, package: e.target.value })
        }
    >
        <option value="">اختر الباقة</option>
        <option value="basic">جاكوزي بسيط</option>
        <option value="decor">جاكوزي مع ديكور الغرفة</option>
    </select>

    <h3>الخدمات الإضافية</h3>

    <label className="checkbox_label">
        <input
            type="checkbox"
            checked={formData.customized_sweets}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    customized_sweets: e.target.checked,
                })
            }
        />
        <span>حلويات مخصصة</span>
    </label>

    <label className="checkbox_label">
        <input
            type="checkbox"
            checked={formData.dry_fruits}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    dry_fruits: e.target.checked,
                })
            }
        />
        <span>طبق فواكه جافة</span>
    </label>

    <input
        type="date"
        required
        value={formData.booking_date}
        onChange={(e) =>
            setFormData({ ...formData, booking_date: e.target.value })
        }
    />

    <input
        type="number"
        min="1"
        placeholder="عدد الأشخاص"
        value={formData.number_of_people}
        onChange={(e) =>
            setFormData({
                ...formData,
                number_of_people: e.target.value,
            })
        }
    />

    <textarea
        placeholder="ملاحظات إضافية"
        rows="5"
        value={formData.notes}
        onChange={(e) =>
            setFormData({ ...formData, notes: e.target.value })
        }
    />

    <button type="submit">
        تأكيد الحجز
    </button>

  </form>      </div>



  )
}

export default Book