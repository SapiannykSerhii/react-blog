const initialState ={

  posts: [
    {
      id: '1',
      title: 'Main Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'Movie'
    },

    {
      id: '2',
      title: 'First Article title',
      shortDescription: 'Short description of the article...',
      content: 'First content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'Steve Jobs',
      category: 'Game'
    },

    {
      id: '3',
      title: 'Second Article title',
      shortDescription: 'Short description of the article...',
      content: 'Second content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'Taras Shevchenko',
      category: 'Writer'
    },

    {
      id: '4',
      title: 'Third Article title',
      shortDescription: 'Short description of the article...',
      content: 'Third Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'Ivan Sirko',
      category: 'History'
    }
  ],

  categories: [ 
    {
      id: 1,
      name: 'Movie'
    },
    {
      id: 2,
      name: 'Game'
    },
    {
      id: 3,
      name: 'Writer'
    },
    {
      id: 4,
      name: 'History'
    }

  ]
}

export default initialState;