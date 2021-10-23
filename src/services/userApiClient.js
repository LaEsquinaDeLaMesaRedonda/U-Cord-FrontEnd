/* const URL = 'https://u-cord.herokuapp.com:443'; */
const URL = 'http://localhost:8080';
console.log(URL);
export const postUser = async user =>{
    const response = await fetch(`${URL}/U-cord/users/newUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    console.log(response);
    if (!response.ok)
        throw new Error('The response Failed');
}