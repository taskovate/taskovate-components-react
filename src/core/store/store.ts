import { makeVar } from '@apollo/client';

export const Space = {
  spaceItemsVar: makeVar([
    { value: "atx_qa", label: "ATX QA", image: 'https://picsum.photos/96/96' },
    { value: "uk_qa", label: "UK QA", image: 'https://picsum.photos/96/96' },
    { value: "la_qa", label: "LA QA", image: 'https://picsum.photos/96/96' },
    { value: "de_qa", label: "DE QA", image: 'https://picsum.photos/96/96' },
    { value: "atx", label: "ATX", image: 'https://picsum.photos/96/96' },
    { value: "uk", label: "UK", image: 'https://picsum.photos/96/96' },
    { value: "la", label: "LA", image: 'https://picsum.photos/96/96' },
    { value: "de", label: "DE", image: 'https://picsum.photos/96/96' },
    { value: "qa_atx", label: "ATX E", image: 'https://picsum.photos/96/96' },
    { value: "qa_uk", label: "UK E", image: 'https://picsum.photos/96/96' },
    { value: "qa_la", label: "LA E", image: 'https://picsum.photos/96/96' },
    { value: "qa_de", label: "DE E", image: 'https://picsum.photos/96/96' },
  ]),
  starredItemsVar: makeVar([]),
};

// TODO: Make Store into a hook
// const { Space } = useStore();
// const store = useStore()
 

