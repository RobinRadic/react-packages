import { File } from './File';

export class FileArray<T extends File = File> extends Array<T> implements Array<T> {

}
