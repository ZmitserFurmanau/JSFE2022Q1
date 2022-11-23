import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b8dbe75de98747828758ff4b90f1d1ca', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
