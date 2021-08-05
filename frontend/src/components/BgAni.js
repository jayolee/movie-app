import React, { useState, useEffect } from 'react';
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    ani: {
        position: 'absolute',
        opacity: '.3',
        animation: '$bgani 25s infinite',
    },
    '@keyframes bgani': {
        '0%': {
            top: '-50%',
            left: '-5%'
        },
        '20%': {
            top: '-50%',
            left: '0%'
        },
        '40%': {
            top: '-55%',
            left: '0%'
        },
        '60%': {
            top: '-55%',
            left: '-3%'
        },
        '80%': {
            top: '-49%',
            left: '-3%'
        },
        '100%': {
            top: '-49%',
            left: '-5%'
        }
    }
})
export default function BgAni(props) {
    const imageList = props.imageList
    const classes = useStyles();
    const [curImage, setCurImage] = useState(Math.floor(Math.random() * (imageList.length - 1)));
    const [aniClass, setAniClass] = useState('');
    useEffect(() => {
        const intervalImg = setInterval(() => {
            setCurImage(Math.floor(Math.random() * (imageList.length - 1)))
        }, 5000)
        setAniClass(classes.ani)
        return () => clearInterval(intervalImg);
    }, [])

    return (
        <Box style={{ overflow: 'hidden', position: 'relative', opacity: '.5' }} width='100%' height='100vh' >
            <img src={imageList[curImage].url} className={aniClass} width='105%' />
        </Box>
    )
}