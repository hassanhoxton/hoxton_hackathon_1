import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { CardHeader, Grid, IconButton } from '@mui/material';

export default function Filters() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selected, setSelected] = useState(null);
    const openFilter = Boolean(anchorEl);
    const handleClickFilter = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseFilter = (id) => {
        setSelected(id);
        setAnchorEl(null);
    };

    const items = {
        BDM: [
            'First Meetings(Scheduled)',
            'First Meeting(Completed) ',
            'LOA (Sent)',
            'LOA(Received) ',
            'Swerves',
            'Worth Chasing',
            'Not Worth Chasing',
            'Dead'
        ],
        SALES: [
            'LOA(Sent)',
            'LOA (Received)',
            'Transfer Values Added',
            'Proposal Stage',
            'Deal Agreed',
            'Dbar  PTSR 1st Call ',
            'Dbar PTSR 2nd Call',
            'Transfer in Process',
            'Client'
        ],
        ADDITIONAL: ['Above 90 days', 'Follow ups', 'Didnot sit', 'Worth Chasing', 'Call backs']
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={openFilter ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openFilter ? 'true' : undefined}
                onClick={handleClickFilter}
            >
                <FilterAltIcon /> Filter
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openFilter}
                onClose={handleCloseFilter}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <Grid sx={{ maxWidth: '600px' }} container spacing={2}>
                    {/* {Object.keys(items).map((item, index) => (
                                    <Grid key={index} item xs={6}>
                                        <MenuItem
                                            onClick={() => handleCloseFilter(index)}
                                            sx={{ background: index === selected ? '#ccddf5' : '#fff' }}
                                        >
                                            <Avatar
                                                sx={{ bgcolor: colors[item], color: '#232b62', marginRight: '5px' }}
                                                aria-label="recipe"
                                            >
                                                {item[0]}
                                            </Avatar>
                                            {item}
                                        </MenuItem>
                                    </Grid>
                                ))} */}
                    <Grid container spacing={1} sx={{ width: '1000px' }}>
                        {Object.keys(items).map((key) => (
                            <Grid item xs={4}>
                                <List
                                    sx={{ width: '100%', maxWidth: '400px', padding: 3, bgcolor: 'background.paper' }}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    subheader={
                                        <ListSubheader component="div" id="nested-list-subheader">
                                            {key} View
                                        </ListSubheader>
                                    }
                                >
                                    {Object.values(items[key]).map((listitem) => (
                                        <ListItemButton sx={{ marginleft: 2 }}>
                                            <ListItemText primary={listitem} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Menu>
        </div>
    );
}
