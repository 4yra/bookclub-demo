import React from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive'

// Components
import { HeaderNav, MobileNav } from './components/Navigation/Navbars';
import { SearchBar } from './components/Search/SearchBar';
import { ClubsBar, MessageBoard, UserDashboard } from './components/UI/ContentComp';
import { Stack } from '@mui/system';

import userdata from "./components/testContent/users.json"
import clubfeed from "./components/testContent/clubfeed.json"
import xp from './components/UI/xp.png'

import './App.css';

const Container = ({children}) => {
  return (<div className="container">{children}</div>);
};



function App() {
  const ContentView = () => {
    return (
      <>
          <MediaQuery minWidth={821} >
            <Stack direction="row" spacing={1} className="body-cont-desctop">
              <Stack className='div-one'>
                {/* 1111111111 */}
                <UserDashboard data={userdata} pic={xp}/>
              </Stack>
              <Stack spacing={1} className='div-two'>
                <Stack style={{height:'100%'}}>
                {/* 2222222222 */}
                <MessageBoard data={clubfeed}/>
                </Stack>
              </Stack>
  
              <Stack className='div-three'>
                <ClubsBar dir='column' height='100%'>
                {/* 3333333333 */}
                </ClubsBar>
              </Stack>
            </Stack>
          </MediaQuery>
          
          {/* <MediaQuery minWidth={768} maxWidth={991}></MediaQuery> */}
          
          <MediaQuery maxWidth={820} className="body-cont-mobil">
            <Stack spacing={0} style={{width:'100%'}}>
              <div  style={{boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.04)', display:'flex', alignItems:'CENTER'}}>
                <ClubsBar dir='row' height='15%' >
                {/* Header Clubs Row */}
                </ClubsBar>
              </div>
              <Stack style={{ height:'calc(96vh - 163px)'}}>
              { profile &&
                <MessageBoard data={clubfeed}/>
              }
              </Stack>
            </Stack>
          </MediaQuery>
  
      </>
    );
  };

  const isDesktop = useMediaQuery({ minWidth: 821 });
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const [profile, setProfile] = useState(false)

  return (
  <Container className='container'>
        <HeaderNav>
          <SearchBar />
          <div style={{display:'flex', alignItems:'center', fontSize:'0.8rem'}}>
            {isDesktop && 
            <>
              <p style={{margin:'0 20px 0 0'}}>Book</p>
            </>
            }
            <p>Login</p>
          </div>
        </HeaderNav>
    <ContentView/>
      {isMobile && 
        <MobileNav profile={(data) => setProfile(data)}/>
      }
  </Container>
  );
}

export default App;
