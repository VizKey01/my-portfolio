import { createBoard } from '@wixc3/react-board';
import { Mainpage } from '../../../components/mainpage/mainpage';

export default createBoard({
    name: 'Mainpage',
    Board: () => <Mainpage />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 640,
        windowWidth: 1024,
        canvasWidth: 688
    }
});
