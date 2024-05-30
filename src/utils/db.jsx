import axios from "axios";

export async function getArtworks() {
  try {
    const data = await axios.get("https://openaccess-api.clevelandart.org/api/artworks/", {
      params: {
        fields: "id,current_location,title,creation_date,collection,type,description,url,images",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}
