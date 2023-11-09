import { client } from '@/lib/sanity'
import groq from 'groq'

export async function getData(slug: string | null ) {

    const revalidate = 60
  
    if( slug ) {
      const query = groq`*[_type == "project" && slug.current == $slug]`;
    
      const project = await client.fetch(query, { slug, next: { revalidate } });
    
      return project;
  
    } else {
      const query = groq`*[_type == "project"]`
  
      const data = await client.fetch(query, { next: { revalidate }})
      
      return data
    }
    
  }