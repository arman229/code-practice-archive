import { people } from './Personaldata';

export default function AgeFilter() {
    const ageFilter = people.filter((person) => {
        return person.age === 50 || person.name === 'Mohammad Abdus Salam';
    });

    const listItem = ageFilter.map((person) => <li>{person.name}</li>);

    return <ul>{listItem}</ul>;
}
