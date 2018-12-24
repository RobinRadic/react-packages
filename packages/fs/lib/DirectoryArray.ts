import { Directory } from './Directory';

export class DirectoryArray<T extends Directory = Directory> extends Array<T> implements Array<T> {

}
