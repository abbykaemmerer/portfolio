import * as pages from './pages';

export default (state) => `
<main>
<h2>WORKING?</h2>
${pages[state.pageContent](state)}
</main>
`;
