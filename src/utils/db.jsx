import axios from "axios";

const apiCleveland = axios.create({ baseURL: "https://openaccess-api.clevelandart.org/api" });

export async function getArtworks() {
  try {
    const { data } = await apiCleveland.get(
      "/artworks/?has_image=1&fields=id,title,current_location,creation_date,collection,type,url,images,tombstone"
    );
    return data.data;
  } catch (error) {
    throw error;
  }
}
