import { createClient }  from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
    space:  import.meta.env.VITE_SPACEID,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
    environment: "master"
})

export const useFetchProjects = () => { 
    const [loading,setloading] = useState(true);
    const [projects,setProjects] = useState([]);

    const getData = async()=> {
        try {
            const response = await client.getEntries({content_type:'projects'});
                const projects = response.items.map((item)=> {
                const {title , url , image } = item.fields;
                const id = item.sys.id
                const img = image?.fields?.file?.url;
                return {title,url,img,id}
            })
            setProjects(projects);
            setloading(false);

        }catch (error) {
            setloading(false);
        }
    }

    useEffect(()=> {
        getData();
    },[]);

    return {loading,projects};
}






