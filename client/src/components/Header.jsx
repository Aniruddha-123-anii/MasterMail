import { AppBar, Toolbar, styled, InputBase, Box } from '@mui/material';
import { Menu as MenuIcon, Search, Tune, HelpOutlineOutlined ,SettingsOutlined,Apps,AccountCircleOutlined} from '@mui/icons-material';
import React from 'react'
import DemoLogo from '../components/DemoLogo';

const StyledAppbar = styled(AppBar)({
    background: "#F5F5F5",
    boxShadow: "none"

})
const SearchWrapper = styled(Box)({
    background: '#EAF1FB' ,
    marginLeft: 80,
    borderRadius: 8,
    // maxWidth: 720,
    // minWidth: 690,
    height: 49,
    width:'100%',

    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: '0 20px',
    '& > div': {
        width: '100%',
        margin: 115
    }
})

const OptionsWrapper = styled(Box)({
    display:'flex',
    justifyContent:'end',
    alignItems:'center',
    width:'100%',
    gap:20,

    
})
const Header = ({toggleOpenDrawer}) => {
    return (
        <StyledAppbar position='static'>
            <Toolbar>
                <MenuIcon color='action' onClick={toggleOpenDrawer} />
                {/* <img src={gmaillogo} alt="logo" style={{ width: 115, marginLeft: 15 }} /> */}
                <DemoLogo />
                <SearchWrapper>
                    <Search color='action' />
                    <InputBase color='action' placeholder='Search Mail' />
                    <Tune color='action' />
                </SearchWrapper>
                <OptionsWrapper
                    sx={{ display: {  sm: 'none', md: 'flex' } }}
                >
                    <HelpOutlineOutlined color='action'/>
                    <SettingsOutlined color='action'/>
                    <Apps color='action'/>
                    <AccountCircleOutlined color='action'/>
                </OptionsWrapper>
            </Toolbar>
        </StyledAppbar>
    )
}

export default Header   