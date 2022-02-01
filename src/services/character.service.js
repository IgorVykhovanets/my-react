export const characterService = {
    getPerson: (person) => fetch(person).then(person => person.json())
}