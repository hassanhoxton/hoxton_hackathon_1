import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CordinatorIcon from '@mui/icons-material/Person';
import AdvisorIcon from '@mui/icons-material/AccountBox';
import ManagementIcon from '@mui/icons-material/Badge';
import { useSelector, useDispatch } from 'react-redux';
import MultipleSelectChip from '../../MultySelect';

export default function Switcher() {
    // const [value, setValue] = React.useState(0);
    const userType = useSelector((state) => state.customization.userType);
    const dispatch = useDispatch();
    const setUserType = (value) => ({ type: 'SET_USER_TYPE', value });
    return (
        <Box sx={{ position: 'fixed', bottom: 0, left: 0 }}>
            <MultipleSelectChip />
            <BottomNavigation
                showLabels
                value={userType}
                onChange={(event, newValue) => {
                    // setValue(newValue);
                    dispatch(setUserType(newValue));
                }}
            >
                <BottomNavigationAction label="Mgmt" icon={<ManagementIcon />} />
                <BottomNavigationAction label="Advisor" icon={<AdvisorIcon />} />
                <BottomNavigationAction label="Cordinator" icon={<CordinatorIcon />} />
            </BottomNavigation>
        </Box>
    );
}
