import dbConnect from "@/config/dbConnect";
import Property, { Properties } from "@/models/Property";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await dbConnect();

    const properties: Array<Properties> = await Property.find({});
    if (properties)
      return NextResponse.json(properties, {
        status: 200,
      });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something Went Wrong" },
      { status: 500 },
    );
  }
};
