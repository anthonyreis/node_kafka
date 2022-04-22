export default function getAnimal() {
    const categories = [{
        name: 'DOG',
        noises: ['woof', 'bark']
    }, {
        name: 'CAT',
        noises: ['purr', 'meow']
    }];

    const category = categories[Math.floor(Math.random() * categories.length)];
    const noise = category.noises[Math.floor(Math.random() * category.noises.length)];

    return {
        category: category.name,
        noise
    }
}
