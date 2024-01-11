import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'App',
    Board: () =>
        // <MemoryRouter>
        <App />
    /* </MemoryRouter> */
    ,
    environmentProps: {
        windowWidth: 914,
        windowHeight: 601,
        canvasWidth: 915,
        canvasHeight: 847,
        windowBackgroundColor: '#ffffff',
    },
});
