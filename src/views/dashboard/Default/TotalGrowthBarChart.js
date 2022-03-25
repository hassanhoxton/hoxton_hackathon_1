import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { Grid, MenuItem, TextField, Typography } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// chart data
import chartDataManagement from './chart-data/total-growth-bar-chart';
import chartDataAdvisor from './chart-data/total-growth-bar-chart-advisor';
import chartDataCordinator from './chart-data/total-growth-bar-chart-cordinator';

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
    const customization = useSelector((state) => state.customization);
    const userType = useSelector((state) => state.customization.userType);
    const chartData = userType == 0 ? chartDataManagement : userType == 1 ? chartDataAdvisor : chartDataCordinator;

    useEffect(() => {
        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`bar-chart`, 'updateOptions', chartData);
        }
    }, [isLoading]);

    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle2">Opportunities Oversight</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* <Grid item>
                                    <TextField
                                        id="standard-select-currency"
                                        select
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                    >
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid> */}
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Chart {...chartData} />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

TotalGrowthBarChart.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;
