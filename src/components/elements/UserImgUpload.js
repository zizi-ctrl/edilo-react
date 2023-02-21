import React, { useRef } from "react"
import { useRecoilState } from "recoil";

import { UserImg } from "../containers/Profile";
import { userImgState } from "../../recoil/backendState";
import { Div, Img, Button, Input } from "../../styles/style";


const UserImgUpload = () => {
    const [userImg, setUserImg] = useRecoilState(userImgState)
    const inputRef = useRef(null)

    console.log(userImg)
    // https://cdn.pixabay.com/photo/2021/08/24/01/44/cat-6569156__340.jpg

    const onUploadImageBtnClick = () => {
        inputRef.current.click()
    }

    const imgUploadAction = async (reader) => {
        const imgResult = reader.result
        try {
            const response = await fetch(process.env.REACT_APP_BACK_HOST_IP + "/account/profileImg", {
                "method": "PUT",
                "mode": 'cors', // no-cors, *cors, same-origin
                "credentials": "include",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                    "imgValue": imgResult,
                })
            })
            const result = await response.json()
            console.log(result)

            if (result.success) {
                setUserImg(imgResult);
            }
            else {
                alert(`${result.message}`)
            }
        }
        catch (err) {
            console.log(`ERR : ${err}`)
        }
    }

    const useOnUploadImage = async () => {
        const file = inputRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file); // 업로드한 파일 URL로
        reader.onloadend = () => {  // 읽기 완료되면
            imgUploadAction(reader)
        };

        console.log(userImg)
    }


    return (
        <Div width='130px' height='130px'>
            <Input display='none' type='file' accept='image/*' ref={inputRef} onChange={useOnUploadImage} />
            <UserImg borderRadius='50%' width='100%' height='100%' src={userImg} />
            <Button onClick={onUploadImageBtnClick} position='relative' bottom='30px' left='90px'>
                <Img src={require('../../img/camera.svg').default} cursor='pointer' />
            </Button>
        </Div>
    )
}


export default UserImgUpload