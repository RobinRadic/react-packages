import { Gulpclass as BaseGulpclass, MergedTask, SequenceTask, Task } from 'gulpclass'
import { gulp } from '../gulp';

export const Gulpclass = (gulpInstance?) => BaseGulpclass(gulpInstance || gulp)
export { MergedTask, SequenceTask, Task }

