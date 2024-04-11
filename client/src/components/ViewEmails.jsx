import React from 'react'
import { useOutletContext, useLocation } from 'react-router-dom'
import { Box, Typography, styled } from '@mui/material';
import { ArrowBack, Delete,AccountCircleRounded } from '@mui/icons-material';
// import { emptyProfilePic } from '../constants/constant';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';

const IconWrapper = styled(Box)({
  padding: 15,

})
const SubjectWrapper = styled(Typography)({
  fontSize: 22,
  margin: '10px 0 20px 75px',
  display: 'flex'

})
const Indigator = styled(Box)({
  fontSize: 12,
  backgroundColor: '#ddd',
  color: '#222',
  padding: '2px 6px',
  borderRadius: 6,
  marginLeft: 6,
  alignSelf: 'center'

})

const Container = styled(Box)({
  // marginLeft:15,

  padding: '12px 25px 0px 11px',
  // width:'100%',
  display:'flex'
})
const Wrapper = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding: '12px 25px 0px 15px',
    '& > p > span':{
      fontSize:12,
      color:'#5E5E5E'
    }
});

const DateWrapper = styled(Box)({
  // paddingRight:25
})
const BodyWrapper = styled(Typography)({
  paddingLeft:15
})

function ViewEmails() {

  const { openDrawer } = useOutletContext()
  const { state } = useLocation();
  const { email } = state;

  const moveEmailsTotrashService = useApi(API_URLS.moveEmailToTrash)

  const deleteEmail = ()=>{
    moveEmailsTotrashService.call([email._id])
    window.history.back()
  }

  return (
    <Box style={openDrawer ? { marginLeft: 250, width: '100%' } : { width: '100%' }}>

      <IconWrapper>
        <ArrowBack onClick={() => window.history.back()} color='action' fontSize='small' />
        <Delete color='action' fontSize='small' style={{ marginLeft: 40 }} onClick={() =>deleteEmail()} />
      </IconWrapper>

      <SubjectWrapper>
        {email.subject}
        <Indigator component={'span'}>Inbox</Indigator>
      </SubjectWrapper>

      <Container>
        {/* <img src={emptyProfilePic} alt='dp' style={{height:50,width:'auto',borderRadius:100,objectFit:'contain'}} /> */}
        <AccountCircleRounded style={{width:50,fontSize:60}}/>
        <Box>
          <Wrapper>
            <Typography>{email.name}
              <Box component={'span'}>&nbsp;&#60;{email.to}&#62;</Box>
            </Typography>
            <DateWrapper>
              {(new window.Date(email.date)).getDate()}&nbsp;
              {(new window.Date(email.date)).toLocaleDateString('default', { month: 'long' })},
              {(new window.Date(email.date)).getFullYear()},
              {(new window.Date(email.date)).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}

            </DateWrapper>
          </Wrapper>
          <BodyWrapper style={{marginTop:30,wordWrap:'break-word'}}>{email.body}</BodyWrapper>
        </Box>

      </Container>
    </Box>
  )
}

export default ViewEmails