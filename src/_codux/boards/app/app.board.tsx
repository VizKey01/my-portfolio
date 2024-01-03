import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 856,
        windowHeight: 851,
        canvasWidth: 1298,
        canvasHeight: 491,
        windowBackgroundColor: '#ffffff'
    }
});
