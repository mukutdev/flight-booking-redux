import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookingTable from "./components/BookingTable";
import Header from "./components/Header";
import { booking, deleteBooking } from "./redux/booking/action";

function App() {

  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    guests: '',
    ticketClass: '',
  });
  const bookings= useSelector((state) => state.bookings)
  const dispatch = useDispatch()

    const handleInputChange=(event)=> {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    
    }

    const handleBooking = (e)=>{
        e.preventDefault()
        dispatch(booking(formData))
        formRef.current.reset();
    }

    const handleRemove = id =>{

      dispatch(deleteBooking(id))

    }

  return (
    <div className="App">
      <Header/>


  <section>
    {/* <!-- Input Data --> */}
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form ref={formRef}  className="first-hero lws-inputform" onSubmit={handleBooking} >
          {/* <!-- From --> */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select onChange={handleInputChange} className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                <option value="" hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- To --> */}
          <div className="des-from">
        <p>Destination To</p>
        <div className="flex flex-row">
          <img src="./img/icons/Frame.svg" alt="" />
          <select onChange={handleInputChange} className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
            <option value="" hidden>Please Select</option>
            <option>Dhaka</option>
            <option>Sylhet</option>
            <option>Saidpur</option>
            <option>Cox's Bazar</option>
          </select>
        </div>
      </div>

          {/* <!-- Date --> */}
          <div  className="des-from">
            <p>Journey Date</p>
            <input onChange={handleInputChange} type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
          </div>

          {/* <!-- Guests --> */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (1).svg" alt="" />
              <select onChange={handleInputChange} className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                <option value="" hidden>Please Select</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- Class --> */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (3).svg" alt="" />
              <select onChange={handleInputChange} className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                <option value="" hidden>Please Select</option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button className="addCity" type="submit" id="lws-addCity">
            <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span  className="text-sm disabled:pointer-events-none"
             disabled={bookings.length >= 3 ? true : false} >Book</span>
          </button>
        </form>
      </div>
    </div>

    {/* <!-- Preview Data --> */}
    <div className="table-container">
      <table className="booking-table">
        {
          bookings.length > 0 && <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">Class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        }
       {

        bookings.map(booking => <BookingTable key={booking.id} booking={booking} handleRemove={handleRemove} />)

       }
      </table>
    </div>
  </section>
    </div>
  );
}

export default App;
