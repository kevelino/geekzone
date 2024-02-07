const ENDPOINT = import.meta.env.SECRET_MT_ENDPOINT_URL;

export const getLastPost = async () => {
    const url = "get-last-article"
    const response = await fetch(`${ENDPOINT}${url}`).catch((err) => { console.error(err) });
    const json = await response.json();
    return json;
}



export const getLatesPosts = async (number) => {
    const params = new URLSearchParams({ number });
    const url = `get-lastest-articles`
    const response = await fetch(`${ENDPOINT}${url}?${params}`).catch((err) => { console.error(err) });
    const json = await response.json();
    return json;
}


export const getLastCategoryPost = async () => {
    const url = "get-last-post-by-category"
    const response = await fetch(`${ENDPOINT}${url}`).catch((err) => { console.error(err) });
    const json = await response.json();
    return json;
}



export const getWeekEvent= async () => {
    const url = "get-week-event"
    const response = await fetch(`${ENDPOINT}${url}`).catch((err) => { console.error(err) });
    const json = await response.json();
    return json;
}


export const getTopPosts = async () => {
    const url = "get-top-posts"
    const response = await fetch(`${ENDPOINT}${url}`).catch((err) => { console.error(err) });
    const json = await response.json();
    return json;
}

export const getTopCategories = async () => {
    const url = "get-tops-categories"
    const response = await fetch(`${ENDPOINT}${url}`).catch((err) => { console.error(err) });
    const json = await response.json();
    return json;
}


export const getAllPosts = async () => {
    const url = "get-all-articles"
    const response = await fetch(`${ENDPOINT}${url}`).catch((err) => { console.error(err) });
    const json = await response.json();
    return json;
}


export const getPreviousMonthPosts = async () => {
    const url = "get-previous-month-posts"
    const response = await fetch(`${ENDPOINT}${url}`).catch((err) => { console.error(err) });
    const json = await response.json();
    return json;
}



export const getAllCategories = async () => {
    const url = "get-all-categories"
    const response = await fetch(`${ENDPOINT}${url}`).catch((err) => { console.error(err) });
    const json = await response.json();
    return json;
}


export const getCategoriesPost = async (slug) => {
    const url = `get-category-posts/${slug}`;
    const response = await fetch(`${ENDPOINT}${url}`).catch((err) => { console.error(err) });
    const json = await response.json();
    return json;
}


export const getSugeredPosts = async (active_post_reference) => {
    const params = new URLSearchParams({ active_post_reference });
    const url = `get_sugered_posts`;
    const response = await fetch(`${ENDPOINT}${url}?${params}`).catch((err) => { console.error(err) });
    const json = await response.json();
    return json;
}


export async function incrementViews(reference) {
  const apiUrl = `post-increment-views/${reference}`; // Remplacez 'localhost:8000' par l'URL de votre API Django

  try {
    const response = await fetch(`${ENDPOINT}${apiUrl}`, {
      method: 'PUT'
    });

    if (response.ok) {
      console.log('Nombre de vues incrémenté avec succès.');
    } else {
      throw new Error('Une erreur s\'est produite lors de la mise à jour du nombre de vues.');
    }
  } catch (error) {
    console.error(error.message);
  }
}