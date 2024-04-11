import React from 'react'
import { Button, styled, List, Box, ListItem } from '@mui/material'
import { CreateOutlined } from '@mui/icons-material'
import SIDEBAR_DATA from '../config/sidebar.config'
import Compoose from './Compoose'
import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { routes } from '../routes/routes'


const ComposeStyle = styled(Button)({
    backgroundColor: '#c2e7ff',
    color: '#001d53',
    padding: 15,
    maxWidth: '60%',
    textTransform: 'none',
    borderRadius: 16
})
const Container = styled(Box)({
    padding: 10,
    '& > ul': {
        padding: '10px 0 0 5px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer',
        '& > a': {
            textDecoration: 'none',
            color: 'inherit'
        }
    },
    '& > ul > a > li > svg': {
        marginRight: 20
    }

})
const SideBarContent = () => {
    const [openDialog, setOpenDialog] = useState(false)

    const { type } = useParams()

    const toggleDialog = () => {
        setOpenDialog(!openDialog)
    }
    return (
        <>
            <Container>
                <ComposeStyle onClick={toggleDialog}>
                    <CreateOutlined />
                    Compose
                </ComposeStyle>
                <List>
                    {
                        SIDEBAR_DATA.map((data) => (
                            <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`} >

                                <ListItem style={type === data.name.toLowerCase() ? {
                                    backgroundColor: '#d3e3fd',
                                    borderRadius: '0 16px 16px 0'
                                } : {}}>

                                    <data.icon fontSize='small' />
                                    {data.title}

                                </ListItem>

                            </NavLink>
                        ))
                    }
                </List>
                <Compoose openDialog={openDialog} setOpenDialog={setOpenDialog} />
            </Container>
        </>
    )
}

export default SideBarContent