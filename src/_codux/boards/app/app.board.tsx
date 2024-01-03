import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 856,
        windowHeight: 601,
        canvasWidth: 850,
        canvasHeight: 847,
        windowBackgroundColor: '#ffffff'
    }
});
