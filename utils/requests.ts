import { Properties } from "@/models/Property";
import axios from "axios";
// Fetch all properties
type Response = Properties & { _id: string };
async function fetchProperties() {
  try {
    const res = await axios.get<Response[]>(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`,
    );

    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { fetchProperties };
