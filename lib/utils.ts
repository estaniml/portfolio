
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


