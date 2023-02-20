import React, { useRef } from "react"
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { Div, Img, Button, Input } from "../../styles/style";
import { attachImgState } from "../../recoil/state";

const Image = styled(Img)`
    object-fit: cover;
`

const WriteImgAttach = () => {
    const imgs = useRecoilValue(attachImgState)

    console.log(imgs)

    const deleteEvent = (e) => {
        // console.log(e)
        // setShowImages([
        //     ...showImages.slice(0, idx),
        //     ...showImages.slice(idx + 1, showImages.length),
        //   ])
    }

    return (
        imgs.map((img, index) =>
            <Div key={index} position='relative' margin='0 20px'>
                <Image src={img} width='80px' height='80px' borderRadius='4px'/>
                <Button position='absolute' right='-14px' top='-10px' onClick={deleteEvent}>
                    <Img src={require('../../img/close_attach_img.svg').default} cursor='pointer' width='18px'/>
                </Button>
            </Div>)
    )
}

export default WriteImgAttach