import { Stack } from '@mui/system';
import LinearProgress from '@mui/material/LinearProgress';

import b1 from './b1.png'
import b2 from './b2.png'

export const ClubsBar = (props) => {
    return (
        <Stack direction={props.dir} style={{height:props.height, display:'flex', alignItems:'center'}}>
            <div style={{margin:'10px'}}>
                <img style={{height:'80px', width:'80px', borderRadius:'50px', }} src={b1} alt=''/>
                <p style={{margin:'0', textAlign:'center', fontSize:'0.8rem'}}>Book Club 1</p>
            </div>
            <div style={{margin:'10px'}}>
                <img style={{height:'80px', width:'80px', borderRadius:'50px', }} src={b2} alt=''/>
                <p style={{margin:'0', textAlign:'center', fontSize:'0.8rem'}}>Book Club 2</p>
            </div>
        </Stack>
    )
}

export const MessageBoard = (props) => {
    const postDiv = {
        border:'solid 1px black',
        width:'90%',
        padding:'10px',
        margin:'5px',
        borderRadius:'10px',
        
    }
    return (
        <Stack style={{display:'flex', alignItems:'center', overflowY:'scroll'}}>
                {
                  props.data.b1.map(c =>(
                    <div key={c.postid} style={postDiv}>
                      <h5>{c.userid}</h5>
                      <p>{c.text}</p>
                    </div>
                  ))
                }
        </Stack>
    )
}

export const UserDashboard = (props) => {
    const userDiv = {
        width:'90%',
        padding:'10px',
        margin:'5px',
        borderRadius:'10px',
        textAlign:'center',
        
    }
    return (
        <Stack style={userDiv}>
            <div style={{height:'140px', width:'140px', borderRadius:'20px', margin:'10px auto'}}>
                <img style={{height:'140px', width:'140px', borderRadius:'20px', }} src={props.pic} alt=''/>
            </div>
                <h4>{props.data.m1.username}</h4>
            <div>
                <p>{props.data.m1.wordcount}</p>
            </div>
            <div>
                <p>Current reading: Title</p>
                <LinearProgress variant="determinate" value={30} />
            </div>
      </Stack>
    )
}