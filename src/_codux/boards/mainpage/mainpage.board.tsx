import { createBoard } from '@wixc3/react-board';
import { Mainpage } from '../../../components/mainpage/mainpage';

export default createBoard({
    name: 'Mainpage',
    Board: () => <Mainpage />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 638,
        windowWidth: 1258,
        canvasWidth: 1282,
    },
});
