import { GiphyImageDetails } from "./giphyImageDetails";

export interface GiphyDetails {
    title: string;
    url: string;
    images: GiphyImageDetails[];
}
