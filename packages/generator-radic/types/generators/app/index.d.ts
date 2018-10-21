import Generator from '../../lib/Generator';
declare class AppGenerator extends Generator {
    protected answers: {
        generators: string[];
    };
    prompting(): Promise<void>;
    writing(): void;
}
export = AppGenerator;
