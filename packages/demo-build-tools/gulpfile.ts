import { Gulpclass, Task } from '@radic/build-tools'

@Gulpclass()
export class Gulpfile {
    @Task('build') build() {
        console.log('build')
    }
}
