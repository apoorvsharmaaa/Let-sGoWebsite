import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  extension: { type: String },
  Phone: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
