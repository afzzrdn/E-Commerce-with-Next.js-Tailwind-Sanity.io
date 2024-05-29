import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient ({
    projectId: 'ujx3ikn1',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: false,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
}