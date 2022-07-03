import { ISources } from '../../../types';
import './sources.css';

class Sources {
    draw(data: Array<ISources>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item: ISources) => {
            const sourceClone = <Element>sourceItemTemp.content.cloneNode(true),
                sourceItemName = sourceClone.querySelector('.source__item-name'),
                sourceItem = sourceClone.querySelector('.source__item');

            if (sourceItemName !== null) {
                sourceItemName.textContent = item.name;
            }
            if (sourceItem !== null) {
                sourceItem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesDocument = document.querySelector('.sources');

        if (sourcesDocument !== null) {
            sourcesDocument.append(fragment);
        }
    }
}

export default Sources;
