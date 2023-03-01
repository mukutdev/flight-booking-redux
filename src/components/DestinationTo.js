import React from 'react';

const DestinationTo = () => {
    return (
        <div className="des-from">
        <p>Destination To</p>
        <div className="flex flex-row">
          <img src="./img/icons/Frame.svg" alt="" />
          <select className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
            <option value="" hidden>Please Select</option>
            <option>Dhaka</option>
            <option>Sylhet</option>
            <option>Saidpur</option>
            <option>Cox's Bazar</option>
          </select>
        </div>
      </div>
    );
};

export default DestinationTo;