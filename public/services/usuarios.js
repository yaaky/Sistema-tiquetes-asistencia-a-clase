async function getusers() {
    try {
        const response = await fetch("http://localhost:3003/users/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export { getusers };

//////////LLAMADO POST//////////

async function postusers(nombre,correo) {
    try {
     
        const userData = { 
            nombre,
            correo,
            
        
        };



        const response = await fetch("http://localhost:3003/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postusers}

//////////////LLAMADO UPDATE/////////////


async function updateusers(nombre,apellido,edad,id) 
{
    try {
     
        const userData = { 
            nombre, 
            apellido,
            edad
        
        };


        


        const response = await fetch("http://localhost:3000/users/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateusers}



//////////////LLAMADO DELETE/////////////


async function deleteuser(id) {
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { deleteuser };