import dbConnect from "../../lib/dbConnect";
import Contact from "../../models/Contact.js";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const newContact = new Contact(body);
    await newContact.save();
    return NextResponse(
      JSON.stringify({ message: "Contact is created", contact: newContact }),
      { status: 201 }
    );
  } catch (err) {
    return NextResponse(JSON.stringify({ message: err }), { status: 400 });
  }
}
