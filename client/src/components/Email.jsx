import React from 'react'
import { Box, Checkbox, Typography, styled } from '@mui/material'
import { Star, StarBorder } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'
import { routes } from '../routes/routes'
import { API_URLS } from '../services/api.urls';
import useApi from '../hooks/useApi';

const Wrapper = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0',
    height: 45,
    width: '100%',
    padding: '0 0 0 0px',
    background: '#f2f6fc',
    cursor: 'pointer',
    '& > div': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        '& > p': {
            fontSize: 14
        }
    }

})

const Indigator = styled(Typography)({
    fontSize: '12px !important',
    background: '#ddd',
    alignSelf: 'center',
    color: '#222',
    padding: '0 4px',
    borderRadius: 4,
    marginLeft: 6
})

const DisplayDate = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 12,
    color: '#5f6368'
})


const Email = ({ email, selectedEmails, setRefreshScreen,setSelectedEmails }) => {

    const toggleStarredServices = useApi(API_URLS.toggleStarredEmail)

    const navigates = useNavigate()
    const toggleStarredEmails = (e) => {
        toggleStarredServices.call({ id: email._id, value: !email.starrted })
        setRefreshScreen(prevState => !prevState);
    }

    const onValueChange = ()=>{
        if(selectedEmails.includes(email._id)){
            setSelectedEmails(prevState => prevState.filter(id => id !== email._id))
        }else{
            setSelectedEmails(prevState => [...prevState , email._id ])
        }
    }

    return (
        <Wrapper>

            <Checkbox
                size='small'
                checked={selectedEmails.includes(email._id)}
                onChange={()=>onValueChange()}
            />
            {
                email.starrted ?
                    <Star size='small' style={{ margin: 10 ,color:'#fff200'}} onClick={(e) => toggleStarredEmails(e)} />
                    : <StarBorder size='small' style={{ margin: 10 }} onClick={(e) => toggleStarredEmails(e)} />
            }

            <Box onClick={(e) => navigates(routes.view.path, { state: { email: email } })}>

                <Typography style={{ width: 200, overflow: 'hidden' }}>{email.name}</Typography>
                <Indigator>Inbox</Indigator>
                <Typography style={{
                    overflowX: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    maxWidth: '55vw',
                }}>
                    {email.subject} {email.body && '-'} {email.body}
                </Typography>
                <DisplayDate>
                    {(new window.Date(email.date)).getDate()}
                    {(new window.Date(email.date)).toLocaleDateString('default', { month: 'long' })}
                </DisplayDate>

            </Box>
        </Wrapper>
    )
}

export default Email