import axios from "axios";

export async function getArtworks() {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      params: {
        fields: "id",
      },
    };

    const response = await axios.get("https://openaccess-api.clevelandart.org/api/artworks", config);

    return response.data;
  } catch (error) {
    throw error;
  }
}
