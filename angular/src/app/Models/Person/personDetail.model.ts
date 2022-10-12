
import { ActIn } from "../Actor/actIn.model";
import { Movie } from "../Movie/movie.model";

export interface Person{
    id: number,
    lastName: string,
    firstName: string,
    realMovies: Movie[],
    scenMovies: Movie[],
    actAs: ActIn[]
}