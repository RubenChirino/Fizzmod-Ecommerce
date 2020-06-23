export default function getCategories(){  

    const apiURL= `http://remote.fizzmod.com/menu.json`;
    
    return fetch(apiURL).then(res => res.json()).then(response => {
            
            const result = response.map(array => {
                //const { menu } = array;

                //const { id, author, url, download_url } = menu; 

                const { title, href } = array.menu.categories;
         
                return { title, href };
                 
                //return { id, author, url, download_url };
            })

            return result

        })
  
}
