const filmes = [
    {
        id: 1,
        title: "Fragmentado",
        description: 'Filme pscicológico',
        duration: 'duas horas'
    },

    {
        id: 2,
        title: "Harry Potter",
        description: 'Bruxaria',
        duration: 'três horas'
    },

    {
        id: 3,
        title: "O Poço",
        description: 'Prisão e pscicológico',
        duration: 'duas horas'
    },
]

const [{id, title, description, duration}] = filmes

filmes.map(filme => console.log(`Filme: ${filme.title}`))