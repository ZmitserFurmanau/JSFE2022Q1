/* eslint-disable prettier/prettier */
export interface INews {
    status: string;
    totalResults: number;
    articles: [
        {
            author: string;
            content: string;
            description: string;
            publishedAt: string;
            source: { id: string; name: string };
            title: string;
            url: string;
            urlToImage: string;
        }
    ];
}

export interface ISources {
    status: string;
    sources: [
        {
            category: string;
            country: string;
            description: string;
            id: string;
            language: string;
            name: string;
            url: string;
        }
    ];
}
