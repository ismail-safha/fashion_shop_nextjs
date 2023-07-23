import { getToken } from "next-auth/jwt";
import Order from "../../../models/Order";
import db from "../../../utils/db";

const secret = process.env.NEXTAUTH_SECRET;
const handler = async (req, res) => {
  const user = await getToken({ req: req, secret: secret });
  if (!user) {
    return res.status(401).send("signin required");
  }
  await db.connect();
  const newOrder = new Order({
    ...req.body,
    user: user._id,
  });

  const order = await newOrder.save();
  res.status(201).send(order);
};
export default handler;
