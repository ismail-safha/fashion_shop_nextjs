// pages/api/sendEmail.js
// way 1
// use the next js templates
// import { renderToStaticMarkup } from "react-dom/server";
// import nodemailer from "nodemailer";
// import EmailTemplate from "../../components/EmailTemplate";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).end(); // Method Not Allowed
//   }

//   try {
//     // Extract the order data from the request body
//     const { shippingAddress, totalPrice, cartItems } = req.body;

//     // Create an instance of the EmailTemplate component
//     const emailTemplateInstance = (
//       <EmailTemplate
//         shippingAddress={shippingAddress}
//         totalPrice={totalPrice}
//         cartItems={cartItems}
//       />
//     );

//     // Configure Nodemailer
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "ismail1bsn@gmail.com",
//   pass: process.env.GMAIL_PASS,
//
//       },
//     });

//     // Convert the EmailTemplate component to an HTML string
//     const emailContent = renderToStaticMarkup(emailTemplateInstance);

// // Compose the email content
// const emailContent = `
//   New Order Information:
//   Shipping Address: ${shippingAddress.fullName}, ${
//   shippingAddress.address
// }, ${shippingAddress.city}, ${shippingAddress.phone}
//   Total Price: $${totalPrice}
//   Order Items:
//   ${cartItems.map(
//     (item) => `${item.name} - ${item.quantity} x $${item.price}`
//   )}
// `;

//     // Send the email
//     await transporter.sendMail({
//       from: "ismail1bsn@gmail.com", // Your Gmail email address (same as the "user" in the transporter config)
//       to: "ismail1bsn@gmail.com", // Replace with the admin's email address
//       subject: "New Order Placed",
//       text: emailContent,
//     });

//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Error sending email" });
//   }
// }

//use html templates

// way 2

import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { cartItems, shippingAddress, totalPrice } = req.body;

    const filePath = path.join(process.cwd(), "emails", "template.html");
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = handlebars.compile(source);

    const replacements = {
      shippingAddress: {
        fullName: shippingAddress.fullName,
        address: shippingAddress.address,
        phone: shippingAddress.phone,
      },
      cartItems: cartItems.map((item) => ({
        item: {
          name: item.name,
          price: item.price,
          image: item.image,
        },
        quantity: item.quantity,
      })),
      totalPrice: totalPrice,
    };

    const htmlToSend = template(replacements);

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: "ismail1bsn@gmail.com", // Your Gmail email address (same as the "user" in the transporter config)
      to: "ismail1bsn@gmail.com", // Replace with the admin's email address
      subject: "New Order Placed",
      html: htmlToSend,
    });

    // Return a response to indicate the success of the email sending
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
}

//===end test 4
