import unixWonderSound from '../music/unixWonderSound.mp3';
import learnSound from '../music/learnSound.mp3';
import binarySound from '../music/binarySound.mp3';

const selectSound = (location) => {
    const checkUrl = (keyWord) => {
        if (location.includes(keyWord)) return location;
    }

    switch (location) {
        case checkUrl('unix'):
            return unixWonderSound;

        case checkUrl('binaries'):
            return binarySound;

        default:
            return learnSound;
    }
}

export default selectSound;
