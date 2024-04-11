// useEffect
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";
import { Box, Checkbox, styled, List } from "@mui/material";
import { DeleteOutline } from '@mui/icons-material'
import Email from "./Email";
import NoMails from "./common/NoMails";
import { EMPTY_TABS } from "../constants/constant";


const MainHeader = styled(Box)({
    display: 'flex',
    // justifyContent:'center',
    alignItems: 'center',
    padding: '20px  0px 0px 0px'
})

function EmailMain() {

    const [selectedEmails, setSelectedEmails] = useState([])
    const [refreshScreen, setRefreshScreen] = useState(false)
    const { openDrawer } = useOutletContext();
    const { type } = useParams();

    const getEmailService = useApi(API_URLS.getEmailFromType); 
    const moveEmailsToTrash  = useApi(API_URLS.moveEmailToTrash)
    const deleteEmailsfromTrashService  = useApi(API_URLS.deleteEmailfromTrash)

    useEffect(() => {
        getEmailService.call({}, type);
    }, [type,refreshScreen]);

    const selectAllEmails = (e)=>{
        if(e.target.checked){
            const emails = getEmailService?.response?.map(email => email._id);
            setSelectedEmails(emails);
        }else{
            setSelectedEmails([]);
        }
    }

    const deleteSelectedEmails = (e)=>{
        if(type === 'trash'){
            deleteEmailsfromTrashService.call(selectedEmails)
        }else{
            moveEmailsToTrash.call(selectedEmails)
        }
        setRefreshScreen(prevState => !prevState);
    }

    return (
        <Box
            style={
                openDrawer ? { marginLeft: 250, width: "calc(100% - 250px)" } : { width: "100%" }
            }
        >
            <MainHeader>
                <Checkbox size="small" onChange={(e)=> selectAllEmails(e)}/>
                <DeleteOutline size="small" onClick={(e)=> deleteSelectedEmails(e)} />
            </MainHeader>


            <List>
                {
                    getEmailService?.response?.map((email) => (
                        <Email 
                            key={email._id} 
                            email={email}
                            selectedEmails={selectedEmails}
                            setRefreshScreen={setRefreshScreen}
                            setSelectedEmails={setSelectedEmails}
                        />
                    ))
                }
            </List>
            {
                 getEmailService?.response?.length === 0 &&
                 <NoMails message={EMPTY_TABS[type]} />
            }

        </Box>
    );
}

export default EmailMain;
