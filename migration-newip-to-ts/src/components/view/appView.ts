import { ISources, INews } from '../../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: INews) {
        if (data && data.status === 'ok') {
            this.news.draw(data);
        }
    }

    drawSources(data: ISources) {
        if (data && data.status === 'ok') {
            this.sources.draw(data);
        }
    }
}

export default AppView;
