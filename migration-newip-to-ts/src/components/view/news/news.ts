import { INews } from '../../../types';
import './news.css';

class News {
    draw(data: Array<INews>) {
        const news = data.length >= 10 ? data.filter((_item: INews, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item: INews, idx: number) => {
            const newsClone = <Element>newsItemTemp.content.cloneNode(true),
                newsItem = newsClone.querySelector('.news__item'),
                newsMetaPhoto = <HTMLElement>newsClone.querySelector('.news__meta-photo'),
                newsMetaAuthor = newsClone.querySelector('.news__meta-author'),
                newsMetaData = newsClone.querySelector('.news__meta-date'),
                newsDescriptionTitle = newsClone.querySelector('.news__description-title'),
                newsDescriptionSource = newsClone.querySelector('.news__description-source'),
                newsDescriptionContent = newsClone.querySelector('.news__description-content'),
                newsReadMore = newsClone.querySelector('.news__read-more a');

            if (newsItem !== null && idx % 2) {
                newsItem.classList.add('alt');
            }
            if (newsMetaPhoto !== null) {
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }
            if (newsMetaAuthor !== null) {
                newsMetaAuthor.textContent = item.author || item.sources.name;
            }
            if (newsMetaData !== null) {
                newsMetaData.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            (newsDescriptionTitle as HTMLElement).textContent = item.title;
            (newsDescriptionSource as HTMLElement).textContent = item.sources.name;
            (newsDescriptionContent as HTMLElement).textContent = item.description;
            (newsReadMore as HTMLElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsDocument = document.querySelector('.news');

        if (newsDocument !== null) {
            newsDocument.innerHTML = '';
            newsDocument.appendChild(fragment);
        }
    }
}

export default News;
