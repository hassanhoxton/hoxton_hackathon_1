import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { Grid, Typography } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// chart data
import chartDataManagement from './chart-data/ratiochart';
import chartDataAdvisor from './chart-data/ratiochart-advisor';
import chartDataCordinator from './chart-data/ratiochart-cordinator';

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const OpportunitiesChart = ({ isLoading }) => {
    const customization = useSelector((state) => state.customization);
    const userType = useSelector((state) => state.customization.userType);

    const chartData = userType == 2 ? chartDataManagement : userType == 1 ? chartDataAdvisor : chartDataCordinator;

    const { navType } = customization;

    useEffect(() => {
        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`pie-chart`, 'updateOptions', chartData);
        }
    }, [navType, isLoading]);

    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard style={{ height: 350 }}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle2">Success Ratio</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
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

OpportunitiesChart.propTypes = {
    isLoading: PropTypes.bool
};

export default OpportunitiesChart;
