async function getSolis() {
    try {
        const response = await fetch("http://localhost:3003/Solis/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching Solis');
        }

        const Solis = await response.json();
        return Solis;
    } catch (error) {
        console.error('Error fetching Solis:', error);
        throw error;
    }
}

export { getSolis };

//////////LLAMADO POST//////////

async function postSolis(soli) {
    try {
     
        const SolisData = { 
            soli
        };



        const response = await fetch("http://localhost:3003/Solis", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(SolisData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting Solis:', error);
        throw error;
    }
}

export{postSolis}

//////////////LLAMADO UPDATE/////////////


async function updateSolis(soli,id) 
{
    try {
     
        const SolisData = { 
        
         soli
        
        };


        


        const response = await fetch("http://localhost:3003/Solis/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(SolisData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update Solis:', error);
        throw error;
    }
}

export{updateSolis}



//////////////LLAMADO DELETE/////////////


async function deleteSolis(id) {
    try {
        const response = await fetch(`http://localhost:3003/Solis/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting Solis with id ${id}`);
        }

        return { message: `Solis with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting Solis:', error);
        throw error;
    }
}

export { deleteSolis };