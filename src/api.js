import URL from './config'

async function getAllPosts() {
    const r = await fetch(`${URL}/posts/`).then(response => response.json());
    return r; 
}


async function getTagById(id) {
    const r = await fetch(`${URL}/tags/${id}`).then(response => response.json());
    return r; 
}

async function getPostById(id) {
    const r = await fetch(`${URL}/posts/${id}`).then(response => response.json());
    return r; 
}





export {
    getAllPosts,
    getTagById,
    getPostById
}