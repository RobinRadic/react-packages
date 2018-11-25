/// <reference types="react"/>


/**
 * Your file needs to be clean of any root level import or exports. That would turn the file into a module and disconnect it from the global type declaration namespace.

 More : https://basarat.gitbooks.io/typescript/content/docs/project/modules.html
 */

declare const expect: Chai.ExpectStatic
declare const should: Chai.Should
declare const assert: Chai.AssertStatic


declare function For<T>({ each, of, index }: { each: string; of: T[]; index?: string });

declare function If({ condition }: { condition: boolean });

declare function Choose();

declare function When({ condition }: { condition: boolean });

declare function Otherwise();

declare function With(props: { [ id: string ]: any });

declare namespace NodeJS {
    import { DOMWindow } from 'jsdom';

    interface Global {
        window: DOMWindow
        document: Document
        navigator: { userAgent: string }
        requestAnimationFrame:(cb) => any
        cancelAnimationFrame:(id) => any
    }
}

interface Object {
    should: Chai.Assertion;
}

declare namespace Mocha {
    interface InterfaceContributions {
        'mocha-typescript': any
    }
}

