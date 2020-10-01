const cards = [
  {
    id: 'card-1',
    title: 'Prototipo en Figma',
  },
  {
    id: 'card-2',
    title: 'Esqueleto en React',
  },
  {
    id: 'card-3',
    title: 'Crear data base',
  },
  {
    id: 'card-4',
    title: 'Prototipo en baja calidad',
  },
  {
    id: 'card-5',
    title: 'Entrevistas Usuarios',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Backlog',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'Todo',
      cards: [],
    },
    'list-3': {
      id: 'list-3',
      title: 'Doing',
      cards: [],
    },
    'list-4': {
      id: 'list-4',
      title: 'Review',
      cards: [],
    },
    'list-5': {
      id: 'list-5',
      title: 'Done',
      cards: [],
    },
  },
  listIds: ['list-1', 'list-2', 'list-3', 'list-4', 'list-5'],
};

export default data;