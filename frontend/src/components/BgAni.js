import React, { useState, useEffect } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    ani: {
        position: 'absolute',
        opacity: '.3',
        animation: '$bgani 25s infinite',
    },
    '@keyframes bgani': {
        '0%': {
            top: '-5%',
            left: '-5%',
        },
        '20%': {
            top: '-5%',
            left: '0%',
        },
        '40%': {
            top: '-1%',
            left: '0%',
        },
        '60%': {
            top: '-1%',
            left: '-3%',
        },
        '80%': {
            top: '-3%',
            left: '-3%',
        },
        '100%': {
            top: '-3%',
            left: '-5%',
        },
    },
});
export default function BgAni(props) {
    const imageList = props.imageList;
    const classes = useStyles();
    const [curImage, setCurImage] = useState(
        Math.floor(Math.random() * (imageList.length - 1))
    );
    const [aniClass, setAniClass] = useState('');
    useEffect(() => {
        const intervalImg = setInterval(() => {
            setCurImage(Math.floor(Math.random() * (imageList.length - 1)));
        }, 5000);
        setAniClass(classes.ani);
        return () => clearInterval(intervalImg);
    }, []);

    return (
        <Box
            style={{ overflow: 'hidden', position: 'relative', opacity: '.5' }}
            width='100%'
            height='100vh'
        >
            <Box width='105%' height='105%' className={aniClass}>
                <img
                    src={imageList[curImage].url}
                    width='100%'
                    height='100%'
                    style={{ objectFit: 'cover' }}
                />
            </Box>
        </Box>
    );
}
