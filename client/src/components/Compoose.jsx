import { useState } from 'react'
import React from 'react'
import { Dialog, styled, Box, Typography, InputBase, TextField, Button, } from '@mui/material'
import { Close, DeleteOutline } from '@mui/icons-material'
import useApi from '../hooks/useApi'
import { API_URLS } from '../services/api.urls'

const dialogStyle = {
    width: '80%',
    height: '90%',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0px 0'
}
const Header = styled(Box)({
    display: 'flex',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f6fc',
    '& > p ': {
        fontSize: 14,
        fontWeight: 500
    }
})
const InputWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    '& > div ': {
        fontSize: 15,
        borderBottom: '2px sloid #F5F5F5',
        marginTop: 10
    }
})
const Footer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 0,
    padding: '15px 10px 10px 10px',
    marginRight: 10
})
const SendButton = styled(Button)({
    backgroundColor: "#0B57D0",
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: 20,
    width: '100px'
})

const Compoose = ({ openDialog, setOpenDialog }) => {
    const [data, setData] = useState({});
    const sendEmailServices = useApi(API_URLS.saveSendMails)
    const saveDraftServices = useApi(API_URLS.saveDraftMails)


    const colseComposeDialog = (e) => {
        e.preventDefault();
        const paylod = {
            to: data.to,
            from: "pc.aniruddhasonawane@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'MasterMail',
            starrted: false,
            type: "drafts"

        };


        saveDraftServices.call(paylod)

        if (!saveDraftServices) {
            setOpenDialog(false)
            setData({})
        } else {
            // console.log('Error occured at else', sendEmailServices.error)
        }
        setOpenDialog(false)

    }

    const sendMail = (e) => {
        e.preventDefault();

        if (window.Email) {
            window.Email.send({
                // ...config,
                SecureToken: "c187e1cc-eef4-4bc7-b981-e858bac1712e",
                To: data.to,
                From: "pc.aniruddhasonawane@gmail.com",
                Subject: data.subject,
                Body: data.body
            }).then(
                message => alert(message)
            );
        }

        const paylod = {
            to: data.to,
            from: "pc.aniruddhasonawane@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'MasterMail',
            starrted: false,
            type: "send"

        };


        sendEmailServices.call(paylod)

        if (!sendEmailServices) {
            setOpenDialog(false)
            setData({})


        } else {
            // console.log('Error occured at else', sendEmailServices.error)
        }
        setOpenDialog(false)
    }

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <Dialog
            open={openDialog}
            onClose={colseComposeDialog}
            PaperProps={{ sx: dialogStyle }}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize='small' onClick={(e) => colseComposeDialog(e)} />
            </Header>
            <InputWrapper>
                <InputBase placeholder='To' onChange={(e) => onValueChange(e)} name='to' />
                <InputBase placeholder='Subject' onChange={(e) => onValueChange(e)} name='subject' />
            </InputWrapper>
            <TextField
                rows={18}
                multiline
                sx={{ '& .MuiOutlinedInput-notchedOutline ': { border: 'none' } }}
                onChange={(e) => onValueChange(e)}
                name='body'
            />
            <Footer>
                <SendButton onClick={(e) => sendMail(e)} >Send</SendButton>
                <DeleteOutline onClick={() => setOpenDialog(false)} />
            </Footer>
        </Dialog>
    )
}

export default Compoose