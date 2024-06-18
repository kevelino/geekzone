import axios from "axios";

// const ENDPOINT = import.meta.env.SECRET_MT_ENDPOINT_URL;
const ENDPOINT = "https://geekzone.pythonanywhere.com/api/";


export const getLastPost = async () => {
  const url = "get-last-article";
  try {
    const response = await axios.get(`${ENDPOINT}${url}`);
    console.log(response.data);
    
    
    return response.data; // Retourne les données de la réponse
  } catch (error) {
    console.error(error);
    return null; // Retourne null en cas d'erreur
  }
};


// export const getLatesPosts = async (number) => {
//     const params = new URLSearchParams({ number });
//     const url = `get-lastest-articles`
//     const response = await fetch(`${ENDPOINT}${url}?${params}`).catch((err) => { console.error(err) });
//     const json = await response.json();
//     return json;
// }

export const getLatesPosts = async (number) => {
  const url = `get-lastest-articles`;
  try {
    const response = await axios.get(`${ENDPOINT}${url}`, {
      params: { number }, // Ajoute le paramètre 'number' à l'URL
    });
    return response.data; 
  } catch (error) {
    console.error(error);
    return null; 
  }
};

export const getLastCategoryPost = async () => {
  const url = "get-last-post-by-category";
  try {
    const response = await axios.get(`${ENDPOINT}${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getWeekEvent = async () => {
  const url = "get-week-event";
  try {
    const response = await axios.get(`${ENDPOINT}${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const getTopPosts = async () => {
  const url = "get-top-posts";
  try {
    const response = await axios.get(`${ENDPOINT}${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const getTopCategories = async () => {
  const url = "get-tops-categories";
  try {
    const response = await axios.get(`${ENDPOINT}${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllPosts = async () => {
  const url = "get-all-articles";
  try {
    const response = await axios.get(`${ENDPOINT}${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPreviousMonthPosts = async () => {
  const url = "get-previous-month-posts";
  try {
    const response = await axios.get(`${ENDPOINT}${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllCategories = async () => {
  const url = "get-all-categories";
  try {
    const response = await axios.get(`${ENDPOINT}${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCategoriesPost = async (slug) => {
  const url = `get-category-posts/${slug}`;
  try {
    const response = await axios.get(`${ENDPOINT}${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSugeredPosts = async (active_post_reference) => {
  const url = `get_sugered_posts`;
  try {
    const response = await axios.get(`${ENDPOINT}${url}`, {
      params: { active_post_reference },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export async function incrementViews(reference) {
  const apiUrl = `post-increment-views/${reference}`;

  try {
    const response = await axios.put(`${ENDPOINT}${apiUrl}`);

    if (response.status === 200) {
      console.log('Nombre de vues incrémenté avec succès.');
    } else {
      throw new Error('Une erreur s\'est produite lors de la mise à jour du nombre de vues.');
    }
  } catch (error) {
    console.error(error.message);
  }
}