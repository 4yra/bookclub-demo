import { Stack } from "@mui/system"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


export const SearchBar = () => {
    const SearchInput = {
        borderTopLeftRadius:'10px',
        borderBottomLeftRadius:'10px',
        width:'200px',
        paddingLeft:'8px',
        height:'21px',
        borderWidth:'1px',
        borderColor:'black'
    }
    const SearchSubmit = {
        padding: '0',
        borderTopRightRadius:'10px',
        borderBottomRightRadius:'10px',
        borderWidth:'1px',
        margin:'auto 0 0 2px',
        width: '30px',
        height: '25px',
    }
    
    return (
        <Stack direction='row'>
            <input type='text' style={SearchInput} />
            <button style={SearchSubmit}><SearchOutlinedIcon style={{fontSize:'1.2rem'}}/></button>
        </Stack>
    )
}