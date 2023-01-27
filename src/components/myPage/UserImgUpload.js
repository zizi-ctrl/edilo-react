import React, { useRef } from "react"
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { FlexDiv, Div, Img, Button, Input } from "../../styles/style";
import { userImgState } from "../../recoil/backendState";
import { UserImg, Icon } from "./Profile";

const UserImgUpload = () => {
    const [ userImg, setUserImg ] = useRecoilState(userImgState)
    const inputRef = useRef(null)
    
    console.log(userImg)
    // https://cdn.pixabay.com/photo/2021/08/24/01/44/cat-6569156__340.jpg

    const onUploadImageBtnClick = () => {
        inputRef.current.click()
    }

    const onUploadImage = () => {
        const file = inputRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file); // 업로드한 파일 URL로
        reader.onloadend = () => {  // 읽기 완료되면
            setUserImg(reader.result);
        };
        console.log(userImg)
    }

    return (
        <Div width='130px' height='130px'>
            <Input display='none' type='file' accept='image/*' ref={inputRef} onChange={onUploadImage}/>
            <UserImg borderRadius='50%' width='100%' height='100%' src={userImg}/>
            <Button onClick={onUploadImageBtnClick} position='relative' bottom='30px' left='90px'>
                <Img src={require('../../img/camera.svg').default} cursor='pointer'/>
            </Button>
        </Div>
    )
}

export default UserImgUpload