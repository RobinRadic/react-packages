import jestSnapshot from 'jest-snapshot';

export default (mochaContext: any) => (name: any) => {

    let file = mochaContext.test ? mochaContext.test.file : mochaContext.file;

    const snapshotState = new jestSnapshot.SnapshotState(file, {
        updateSnapshot: process.env.SNAPSHOT_UPDATE ? 'all' : 'new'
    });

    const matcher = jestSnapshot.toMatchSnapshot.bind({
        snapshotState,
        currentTestName: makeTestTitle(test)
    });

    const result = matcher(this.actual, name);
    snapshotState.save();

    expect.assert(result.pass, ! result.pass ? result.report() : '');

    return this;
};

function makeTestTitle(test) {
    let next    = test;
    const title = [];

    for ( ; ; ) {
        if ( ! next.parent ) {
            break;
        }

        title.push(next.title);
        next = next.parent;
    }

    return title.reverse().join(' ');

}
