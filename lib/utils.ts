import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { client } from '@/lib/sanity'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getData() {
  const query = `*[_type == "project"]`

  const data = await client.fetch(query)
  
  return data
}