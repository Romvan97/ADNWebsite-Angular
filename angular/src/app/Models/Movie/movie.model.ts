import { Actor } from "../Actor/actor.model";
import { Person } from "../Person/person.model";

export interface Movie{
    id: number,
    title: string,
    description: string,
    releaseYear: number,
    realisator: Person,
    scenarist: Person,
    actors: Actor[],
}