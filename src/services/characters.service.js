export const CharactersService = {
    getAll: (person) => fetch(person).then(person => person.json())
};