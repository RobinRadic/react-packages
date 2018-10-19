import { find } from 'globule';

find('packages/api/node_modules/**/graphql/package.json').forEach(p => console.log('- ' + p))
