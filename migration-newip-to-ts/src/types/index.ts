/* eslint-disable prettier/prettier */
export interface ISources {
    status: string;
    id: string;
    name: string;
    sources: {
        description: string;
        url: string;
        category: string;
        language: string;
        country: string;
    };
}

export interface INews {
    status: string;
    title: string;
    author: string;
    publishedAt: string;
    url: string;
    description: string;
    urlToImage: string;
    sources: {
        id: string;
        name: string;
        description: string;
        category: string;
        language: string;
        country: string;
    };
    articles: {
        id: string;
        name: string;
        description: string;
        category: string;
        language: string;
        country: string;
    };
}
