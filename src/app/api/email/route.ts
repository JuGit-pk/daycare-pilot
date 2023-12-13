import { connectDB } from "@/lib/connectDB";
import { Email } from "@/lib/models";

import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email } = await request.json();

  await connectDB();

  const newEmail = new Email({
    email,
  });

  try {
    await newEmail.save();
    return new NextResponse("user is registered", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
