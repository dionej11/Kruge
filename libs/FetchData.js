import Cookie from 'js-cookie';

export const GetCategories = async () => {
    const response = await fetch('http://localhost:3000/categories', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookie.get('JWT'),
        }
    });
    const data = await response.json();
    return data;
}

export const PutCategory = async (newCategory, id) => {
    const response = await fetch(`http://localhost:3000/categories/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookie.get('JWT'),
        },
        body: JSON.stringify(newCategory)
    });
    const data = await response.json();
    const categories = await GetCategories();
    
    return categories;
}

export const PostCategory = async (newCategory) => {
    const response = await fetch(`http://localhost:3000/new_category`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookie.get('JWT'),
        },
        body: JSON.stringify(newCategory)
    });
    const data = await response.json();
    const categories = await GetCategories();
    
    return categories;
}

export const DeleteCategory = async (id) => {
    const response = await fetch(`http://localhost:3000/categories/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookie.get('JWT'),
        },
    });
    const data = await response.json();
    const categories = await GetCategories();
    
    return categories;
}