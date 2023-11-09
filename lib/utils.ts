
import imageUrlBuilder from '@sanity/image-url'
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { client } from '@/lib/sanity'
import { StaticImageData } from 'next/image';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const builder = imageUrlBuilder(client)

export function urlFor(source : string | StaticImageData ) {
  return builder.image(source)
}

export async function getData(slug: string | null ) {

  const revalidate = 60

  if( slug ) {
    const query = `*[_type == "project" && slug.current == $slug]`;
  
    const project = await client.fetch(query, { slug, next: { revalidate } });
  
    return project;

  } else {
    const query = `*[_type == "project"]`

    const data = await client.fetch(query, { next: { revalidate }})
    
    return data
  }
  
}
