export interface RootObject {
    data: Datum[];
    pagination: Pagination;
    meta: Meta;
}

export interface Meta {
    status: number;
    msg: string;
    response_id: string;
}

export interface Pagination {
    total_count: number;
    count: number;
    offset: number;
}

export interface Datum {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: Images;
    analytics: Analytics;
}

export interface Analytics {
    onload: Onload;
    onclick: Onload;
    onsent: Onload;
}

export interface Onload {
    url: string;
}

export interface Images {
    downsized_large: Downsizedlarge;
    fixed_height_small_still: Downsizedlarge;
    original: Original;
    fixed_height_downsampled: Fixedheightdownsampled;
    downsized_still: Downsizedlarge;
    fixed_height_still: Downsizedlarge;
    downsized_medium: Downsizedlarge;
    downsized: Downsizedlarge;
    preview_webp: Downsizedlarge;
    original_mp4: Originalmp4;
    fixed_height_small: Fixedheightsmall;
    fixed_height: Fixedheightsmall;
    downsized_small: Originalmp4;
    preview: Originalmp4;
    fixed_width_downsampled: Fixedheightdownsampled;
    fixed_width_small_still: Downsizedlarge;
    fixed_width_small: Fixedheightsmall;
    original_still: Downsizedlarge;
    fixed_width_still: Downsizedlarge;
    looping: Looping;
    fixed_width: Fixedheightsmall;
    preview_gif: Downsizedlarge;
    '480w_still': _480wstill;
    hd?: Originalmp4;
}

export interface _480wstill {
    url: string;
    width: string;
    height: string;
    size?: string;
}

export interface Looping {
    mp4: string;
    mp4_size: string;
}

export interface Fixedheightsmall {
    height: string;
    mp4: string;
    mp4_size: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
}

export interface Originalmp4 {
    height: string;
    mp4: string;
    mp4_size: string;
    width: string;
}

export interface Fixedheightdownsampled {
    height: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
}

export interface Original {
    frames: string;
    hash: string;
    height: string;
    mp4: string;
    mp4_size: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
}

export interface Downsizedlarge {
    height: string;
    size: string;
    url: string;
    width: string;
}