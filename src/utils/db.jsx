import axios from "axios";

const apiCleveland = axios.create({ baseURL: "https://openaccess-api.clevelandart.org/api" });
const apiChicago = axios.create({ baseURL: "https://api.artic.edu/api/v1" });

export async function getArtworksCleveland() {
  try {
    const { data } = await apiCleveland.get("/artworks/?has_image=1&fields=id,title,current_location,creation_date,type,url,images,tombstone");
    const transformedData = data.data.map((item) => ({
      ...item,
      image: item.images.web.url,
      current_location: `Cleveland Museum of Arts: ${item.current_location}`,
    }));
    return transformedData;
  } catch (error) {
    throw error;
  }
}

export async function getArtworksArtInstituteOfChicago() {
  try {
    const { data } = await apiChicago.get(
      "/artworks?fields=id,title,thumbnail,artwork_type_title,artist_title,image_id,date_end,on_loan_display&limit=100"
    );
    const transformedData = data.data.map((item) => ({
      ...item,
      image: `https://www.artic.edu/iiif/2/${item.image_id}/full/200,/0/default.jpg`,
      tombstone: item.thumbnail?.alt_text,
      current_location: item.on_loan_display,
      creation_date: item.date_end,
      type: item.artwork_type_title,
    }));
    return transformedData;
  } catch (error) {
    throw error;
  }
}
