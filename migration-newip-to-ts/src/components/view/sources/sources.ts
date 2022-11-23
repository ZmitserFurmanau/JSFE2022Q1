import { ISources } from '../../../types';
import './sources.css';

class Sources {
    draw(data: ISources) {
        if (data['sources']) {
            const fragment = document.createDocumentFragment(),
                sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp'),
                sourcesDocument = document.querySelector('.sources');

            data['sources'].forEach((item) => {
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

            if (sourcesDocument !== null) {
                sourcesDocument.append(fragment);
            }
        }
    }
}

export default Sources;
