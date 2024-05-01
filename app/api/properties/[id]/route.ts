import dbConnect from "@/config/dbConnect";
import Property, { Properties } from "@/models/Property";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

export const GET = async (request: NextRequest, { params }: Props) => {
  try {
    await dbConnect();

    const property = await Property.findById<Properties>(params.id);

    if (!property)
      return NextResponse.json(
        { message: "Property not found" },
        {
          status: 404,
        },
      );

    return NextResponse.json(property, {
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
