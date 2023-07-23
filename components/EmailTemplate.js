import React from "react";

const EmailTemplate = ({ shippingAddress, totalPrice, cartItems }) => {
  return (
    <div className="email">
      <h2 className="text-2xl font-bold mb-4">New Order Information</h2>
      <p>
        <strong>Shipping Address:</strong>{" "}
        {`${shippingAddress.fullName}, ${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.phone}`}
      </p>
      <p>
        <strong>Total Price:</strong>
        <span className="text-[#000] font-bold"> ${totalPrice}</span>
      </p>
      <h3 className="text-xl font-bold mt-4">Order Items:</h3>
      <ul className="list-disc ml-8">
        {cartItems.map((item) => (
          <li
            key={item._id}
          >{`${item.name} - ${item.quantity} x $${item.price}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmailTemplate;
