const URL = 'https://u-cord.herokuapp.com:443';

export const userApiclient = (() => {
    return {
        postUser: async user => {
            const response = await fetch(`${URL}/U-cord/users/newUser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (!response.ok) throw new Error('The response Failed');
        },

        getUserByMail: async mail => {
            return await fetch(`${URL}/U-cord/users/${mail}`).then(response => {
                if (!response.ok) throw new Error('The response Failed');
                return response.json();
            });
        },
    };
})();
