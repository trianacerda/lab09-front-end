const URL = 'https://warm-taiga-31161.herokuapp.com';


export const getAllAnimals = async () => {
    const resp = await fetch(`${URL}/animals`);
    const data = await resp.json();
    return data;
};

export const getAnimalById = async (id) => {
    const resp = await fetch(`${URL}/animals/${id}`);
    const data = await resp.json();
    return data;
};

export const getTypes = async () => {
    const resp = await fetch(`${URL}/types`);
    const data = await resp.json();
    return data;
};