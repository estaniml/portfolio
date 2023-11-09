import { client } from '@/lib/sanity'
import groq from 'groq'

export async function getData(slug: string | null ) {
  
    if( slug ) {
      const query = groq`*[_type == "project" && slug.current == $slug]`;
    
      const project = await client.fetch(query, { slug });
    
      return project;
  
    } else {
      const query = groq`*[_type == "project"]`
  
      const data = await client.fetch(query)
      
      return data
    }
    
  }

  export const revalidate = 60;
