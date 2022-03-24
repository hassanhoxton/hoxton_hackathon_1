// project imports
import MainCard from 'ui-component/cards/MainCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { memo, useState } from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import { CardHeader, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// ==============================|| SAMPLE PAGE ||============================== //

// a little function to help us with reordering the result
const reorder = async (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

function Widget({ widget, index, column, handleClickOpen }) {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Draggable draggableId={widget.id} index={index}>
            {(provided) => (
                <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card sx={{ boxShadow: 3, maxWidth: 345, minWidth: 300, margin: '15px 0' }} variant="outlined">
                        <CardHeader
                            sx={{ padding: '10px', alignItems: 'start' }}
                            avatar={
                                <Avatar sx={{ bgcolor: '#232b62', color: '#FFF' }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '85px' }}>
                                    <IconButton
                                        size="small"
                                        aria-label="settings"
                                        sx={{ color: red[900] }}
                                        onClick={() => handleClickOpen(column, widget.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </Box>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken,
                                    shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
                                    shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves,
                                    garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about
                                    10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring,
                                    until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp
                                    and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened
                                    and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
                                </Typography>
                                <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Box>
            )}
        </Draggable>
    );
}
const WidgetList = memo(function WidgetList({ widgets, id, handleClickOpen, handleRemove }) {
    return [...(widgets || [])]?.map((widget, index) => (
        <Widget widget={widget} index={index} key={widget.id} column={id} handleClickOpen={handleClickOpen} handleRemove={handleRemove} />
    ));
});

function Column({ droppableId, widgets, handleClickOpen, handleRemove }) {
    return (
        <Droppable droppableId={droppableId}>
            {(provided) => (
                <Box ref={provided.innerRef} {...provided.droppableProps} sx={{ minWidth: 300, maxWidth: 345, minHeight: 200 }}>
                    <Typography variant="h3" gutterBottom component="div" color="#232b62">
                        {droppableId}
                    </Typography>
                    <WidgetList widgets={widgets} id={droppableId} handleClickOpen={handleClickOpen} handleRemove={handleRemove} />
                    {provided.placeholder}
                </Box>
            )}
        </Droppable>
    );
}

const SamplePage = () => {
    const [colors] = useState({
        'First Meetings (Scheduled)': '#b9f5c9',
        'First Meeting (Completed)': '#ffebbe',
        'LOA (Sent)': '#1e88e5',
        'LOA (Received)': '#cfc4e6',
        Swerves: '#ccddf5',
        'Worth Chasing': '#eec59d',
        'Not Worth Chasing': '#c8f1ab',
        Dead: '#e7bdae',
        Other: '#e3e3e3'
    });
    const [items, setItems] = useState({
        'First Meetings (Scheduled)': [
            {
                id: 'widget-1',
                content: 'hello'
            },
            {
                id: 'widget-2',
                content: 'this'
            },
            {
                id: 'widget-3',
                content: 'is'
            },
            {
                id: 'widget-4',
                content: 'so99ynoodles'
            }
        ],
        'First Meeting (Completed)': [
            {
                id: 'widget-5',
                content: 'I am'
            },
            {
                id: 'widget-6',
                content: 'a Web'
            },
            {
                id: 'widget-7',
                content: 'developer'
            }
        ],
        'LOA (Sent)': [
            {
                id: 'widget-8',
                content: 'I am'
            },
            {
                id: 'widget-9',
                content: 'a Web'
            },
            {
                id: 'widget-10',
                content: 'developer'
            }
        ],
        'LOA (Received)': [
            {
                id: 'widget-11',
                content: 'I am'
            },
            {
                id: 'widget-12',
                content: 'a Web'
            },
            {
                id: 'widget-13',
                content: 'developer'
            }
        ],
        Swerves: [
            {
                id: 'widget-14',
                content: 'I am'
            },
            {
                id: 'widget-15',
                content: 'a Web'
            },
            {
                id: 'widget-16',
                content: 'developer'
            }
        ],
        'Worth Chasing': [
            {
                id: 'widget-17',
                content: 'I am'
            },
            {
                id: 'widget-18',
                content: 'a Web'
            },
            {
                id: 'widget-19',
                content: 'developer'
            }
        ],
        'Not Worth Chasing': [
            {
                id: 'widget-20',
                content: 'I am'
            },
            {
                id: 'widget-21',
                content: 'a Web'
            },
            {
                id: 'widget-22',
                content: 'developer'
            }
        ],
        Dead: [
            {
                id: 'widget-23',
                content: 'I am'
            },
            {
                id: 'widget-24',
                content: 'a Web'
            },
            {
                id: 'widget-25',
                content: 'developer'
            }
        ],
        Other: [
            {
                id: 'widget-26',
                content: 'I am'
            },
            {
                id: 'widget-27',
                content: 'a Web'
            },
            {
                id: 'widget-28',
                content: 'developer'
            }
        ]
    });
    const [value, setValue] = useState('1');
    const [open, setOpen] = useState(false);
    const [open_note, setOpenNote] = useState(false);
    const [old, setOld] = useState(null);
    const handleClickOpen = (column, id) => {
        setOpen({ column, id });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseNote = () => {
        setOpenNote(false);
        if (old) {
            setItems({ ...old });
            setOld(null);
        }
    };

    const handleRemove = () => {
        setItems({
            ...items,
            [open?.column]: items[open?.column].filter((i) => i.id !== open.id)
        });
        setOpen(false);
    };

    async function onDragEnd(result) {
        const { source, destination } = result;
        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId) {
            if (destination.index === source.index) {
                return;
            }

            const widgets = await reorder(items[source.droppableId], source.index, destination.index);
            setItems({
                ...items,
                [source.droppableId]: widgets
            });
        } else {
            setOpenNote(true);
            setOld({ ...items });
            const startColumn = [...items[source.droppableId]];
            const finishColumn = [...items[destination.droppableId]];
            const [removed] = startColumn.splice(source.index, 1);
            finishColumn.splice(destination.index, 0, removed);
            setItems({
                ...items,
                [source.droppableId]: startColumn,
                [destination.droppableId]: finishColumn
            });
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MainCard title="Sales page">
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Kanban view" value="1" />
                            <Tab label="Tabular view" value="2" />
                        </TabList>
                    </Box>
                    <Box sx={{ overflow: 'auto', display: 'block' }}>
                        <TabPanel value="1" sx={{ display: 'block', overflow: 'auto', padding: 0 }}>
                            <DragDropContext onDragEnd={onDragEnd}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'nowrap',
                                        width: '100%',
                                        alignItems: 'baseline',
                                        p: 1,
                                        m: 1,
                                        bgcolor: 'background.paper',
                                        borderRadius: 1,
                                        overflow: 'auto'
                                    }}
                                >
                                    {Object.keys(items).map((column, index) => (
                                        <Box
                                            sx={{
                                                padding: '20px',
                                                margin: '0 10px',
                                                borderRadius: 2,
                                                backgroundColor: '#e3f2fd',
                                                borderTop: `5px solid ${colors[column]}`
                                            }}
                                            key={index}
                                        >
                                            <Column
                                                widgets={items[column]}
                                                droppableId={column}
                                                handleClickOpen={handleClickOpen}
                                                handleRemove={handleRemove}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            </DragDropContext>
                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                    </Box>
                </TabContext>
            </Box>

            <Dialog open={!!open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    <Typography variant="h3" gutterBottom component="div">
                        {'Are you sure?'}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        If you will be remove this item you will not be able to get it back!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleRemove} color="error">
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={!!open_note}
                onClose={handleCloseNote}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant="h3" gutterBottom component="div">
                        {'Activity comment'}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TextField
                            id="standard-multiline-static"
                            label="Comment..."
                            multiline
                            rows={4}
                            variant="standard"
                            sx={{ width: 500 }}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseNote}>Cancel</Button>
                    <Button onClick={() => setOpenNote(false) && setOld(null)} color="success">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </MainCard>
    );
};

export default SamplePage;
