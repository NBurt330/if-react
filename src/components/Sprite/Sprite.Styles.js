import { createUseStyles } from 'react-jss';

export const spriteStyles = () => ({
    sprite: {
        position: 'absolute',
        visibility: 'hidden',
    },
});

export const useSpriteStyles = createUseStyles(spriteStyles);
