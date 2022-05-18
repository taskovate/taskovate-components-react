import { makeVar } from '@apollo/client';

export const Space = {
  spaceItemsVar: makeVar([
    { value: "1", label: "Chocolate", image: 'https://picsum.photos/96/96' },
    { value: "2", label: "Strawberry", image: 'https://picsum.photos/96/96' },
    { value: "3", label: "Vanilla", image: 'https://picsum.photos/96/96' },
    { value: "4", label: "Coffee", image: 'https://picsum.photos/96/96' },
    { value: "5", label: "Mustard", image: 'https://picsum.photos/96/96' },
    { value: "6", label: "Taco", image: 'https://picsum.photos/96/96' },
    { value: "7", label: "Tea", image: 'https://picsum.photos/96/96' },
    { value: "8", label: "Soda", image: 'https://picsum.photos/96/96' },
    { value: "9", label: "Popcorn", image: 'https://picsum.photos/96/96' }
  ]),
  starredItemsVar: makeVar([]),
};

// TODO: Make Store into a hook
// const { Space } = useStore();
// const store = useStore()
 

