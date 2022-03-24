import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

import ChartDataMonthManagement from './chart-data/total-order-month-line-chart';
import ChartDataMonthAdvisor from './chart-data/total-order-month-line-chart-advisor';
import ChartDataMonthCordinator from './chart-data/total-order-month-line-chart-cordinator';
import ChartDataQuaterlyManagement from './chart-data/total-order-quaterly-line-chart';
import ChartDataQuaterlyAdvisor from './chart-data/total-order-quaterly-line-chart-advisor';
import ChartDataQuaterlyCordinator from './chart-data/total-order-quaterly-line-chart-cordinator';
import ChartDataYearManagement from './chart-data/total-order-year-line-chart';
import ChartDataYearAdvisor from './chart-data/total-order-year-line-chart-advisor';
import ChartDataYearCordinator from './chart-data/total-order-year-line-chart-cordinator';
// import ChartDataYear from './chart-data/total-o÷rder-year-line-chart';

// assets
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useSelector } from 'react-redux';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
        position: 'relative',
        zIndex: 5
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.primary[800],
        borderRadius: '50%',
        zIndex: 1,
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: 1,
        width: 210,
        height: 210,
        background: theme.palette.primary[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard = ({ isLoading }) => {
    const theme = useTheme();
    const userType = useSelector((state) => state.customization.userType);

    const [timeValue, setTimeValue] = useState(0);
    const handleChangeTime = (event, newValue) => {
        setTimeValue(newValue);
    };

    const userMonthChartData = userType == 0 ? ChartDataMonthManagement : userType == 1 ? ChartDataMonthAdvisor : ChartDataMonthCordinator;
    const userQuaterlyChartData =
        userType == 0 ? ChartDataQuaterlyManagement : userType == 1 ? ChartDataQuaterlyAdvisor : ChartDataQuaterlyCordinator;
    const userYearChartData = userType == 0 ? ChartDataYearManagement : userType == 1 ? ChartDataYearAdvisor : ChartDataYearCordinator;
    return (
        <>
            {isLoading ? (
                <SkeletonTotalOrderCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2.25 }}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.largeAvatar,
                                                backgroundColor: theme.palette.primary[800],
                                                color: '#fff',
                                                mt: 1
                                            }}
                                        >
                                            <AttachMoneyIcon fontSize="inherit" fill="white" />
                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            disableElevation
                                            variant={timeValue == 0 ? 'contained' : 'text'}
                                            size="small"
                                            sx={{ color: 'inherit' }}
                                            onClick={(e) => handleChangeTime(e, 0)}
                                        >
                                            Monthly
                                        </Button>
                                        <Button
                                            disableElevation
                                            variant={timeValue == 1 ? 'contained' : 'text'}
                                            size="small"
                                            sx={{ color: 'inherit' }}
                                            onClick={(e) => handleChangeTime(e, 1)}
                                        >
                                            Quaterly
                                        </Button>
                                        <Button
                                            disableElevation
                                            variant={!timeValue == 2 ? 'contained' : 'text'}
                                            size="small"
                                            sx={{ color: 'inherit' }}
                                            onClick={(e) => handleChangeTime(e, 2)}
                                        >
                                            Yearly
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ mb: 0.75 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs={6}>
                                        <Grid container alignItems="center">
                                            <Grid item>
                                                {timeValue == 0 ? (
                                                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                        {userType == 2 ? '$3,816.0' : userType == 1 ? '$25,727.0' : '$97,367.0'}
                                                    </Typography>
                                                ) : timeValue == 1 ? (
                                                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                        {userType == 2 ? '$6,816.0' : userType == 1 ? '$45,727.0' : '$4,37,367.0'}
                                                    </Typography>
                                                ) : (
                                                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                        {userType == 2 ? '$10,816.0' : userType == 1 ? '$85,727.0' : '$7,97,367.0'}
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item>
                                                <Avatar
                                                    sx={{
                                                        ...theme.typography.smallAvatar,
                                                        cursor: 'pointer',
                                                        backgroundColor: theme.palette.primary[200],
                                                        color: theme.palette.primary.dark
                                                    }}
                                                >
                                                    <ArrowDownwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography
                                                    sx={{
                                                        fontSize: '1rem',
                                                        fontWeight: 500,
                                                        color: theme.palette.primary[200]
                                                    }}
                                                >
                                                    Commission Breakdown
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {timeValue == 0 ? (
                                            <Chart {...userMonthChartData} />
                                        ) : timeValue == 1 ? (
                                            <Chart {...userQuaterlyChartData} />
                                        ) : (
                                            <Chart {...userYearChartData} />
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

TotalOrderLineChartCard.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalOrderLineChartCard;
