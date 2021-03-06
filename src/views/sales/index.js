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
import { CardHeader, Grid, IconButton } from '@mui/material';
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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PushPinIcon from '@mui/icons-material/PushPin';
import moment from 'moment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import StarBorder from '@mui/icons-material/StarBorder';
import Filters from './filters';

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

function Widget({ widget, index, column, handleClickOpen, handlePin }) {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Draggable draggableId={widget.id} index={index}>
            {(provided) => (
                <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card
                        sx={{
                            border: 0,
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                            maxWidth: 345,
                            minWidth: 300,
                            margin: '15px 0',
                            position: 'relative'
                        }}
                        variant="outlined"
                    >
                        <CardHeader
                            sx={{ padding: '10px 18px 10px 10px', alignItems: 'start', maxHeight: '55px' }}
                            avatar={
                                <Avatar sx={{ bgcolor: '#232b62', color: '#FFF' }} aria-label="recipe">
                                    {widget.name[0]}
                                </Avatar>
                            }
                            action={
                                <Box>
                                    <IconButton
                                        size="small"
                                        aria-label="settings"
                                        sx={{ color: red[900] }}
                                        onClick={() => handleClickOpen(column, widget.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            }
                            title={widget.name}
                            subheader={moment(widget.created_at).format('LLL')}
                        />
                        <CardActions sx={{ padding: '0 10px 10px 10px' }} disableSpacing>
                            <IconButton
                                size="small"
                                aria-label="settings"
                                sx={{ color: widget.is_pinned ? '#f5c65c' : '#e3e3e3', left: '3px' }}
                                onClick={() => handlePin(column, widget.id)}
                            >
                                <PushPinIcon />
                            </IconButton>
                            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken,
                                    shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
                                    shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment??n, bay leaves,
                                    garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about
                                    10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring,
                                    until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp
                                    and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened
                                    and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don???t open.)
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
const WidgetList = memo(function WidgetList({ widgets, id, handleClickOpen, handleRemove, handlePin }) {
    return [...(widgets.sort((x, y) => (x.is_pinned === y.is_pinned ? 0 : x.is_pinned ? -1 : 1)) || [])]?.map((widget, index) => (
        <Widget
            widget={widget}
            index={index}
            key={widget.id}
            column={id}
            handleClickOpen={handleClickOpen}
            handlePin={handlePin}
            handleRemove={handleRemove}
        />
    ));
});

function Column({ droppableId, widgets, handleClickOpen, handleRemove, handlePin }) {
    return (
        <Droppable droppableId={droppableId}>
            {(provided) => (
                <Box ref={provided.innerRef} {...provided.droppableProps} sx={{ minWidth: 300, maxWidth: 345, minHeight: 200 }}>
                    <Typography
                        variant="h3"
                        gutterBottom
                        component="div"
                        color="#232b62"
                        sx={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                        <span>{droppableId}</span>
                        <span>({widgets.length})</span>
                    </Typography>
                    <WidgetList
                        widgets={widgets}
                        id={droppableId}
                        handleClickOpen={handleClickOpen}
                        handlePin={handlePin}
                        handleRemove={handleRemove}
                    />
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
                content: 'hello',
                name: 'Liam Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-2',
                content: 'this',
                name: 'Noah Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-3',
                content: 'is',
                name: 'Oliver Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-4',
                content: 'so99ynoodles',
                name: 'Elijah Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: true
            }
        ],
        'First Meeting (Completed)': [
            {
                id: 'widget-5',
                content: 'I am',
                name: 'William Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-6',
                content: 'a Web',
                name: 'James Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-7',
                content: 'developer',
                name: 'Benjamin Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            }
        ],
        'LOA (Sent)': [
            {
                id: 'widget-8',
                content: 'I am',
                name: 'Lucas Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-9',
                content: 'a Web',
                name: 'Henry Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-10',
                content: 'developer',
                name: 'Alexander Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            }
        ],
        'LOA (Received)': [
            {
                id: 'widget-11',
                content: 'I am',
                name: 'Olivia Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-12',
                content: 'a Web',
                name: 'Emma Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-13',
                content: 'developer',
                name: 'Ava Doe',
                email: 'ava@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            }
        ],
        Swerves: [
            {
                id: 'widget-14',
                content: 'I am',
                name: 'John Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-15',
                content: 'a Web',
                name: 'Charlotte Doe',
                email: 'charlotte@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-16',
                content: 'developer',
                name: 'Sophia Doe',
                email: 'sophia@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            }
        ],
        'Worth Chasing': [
            {
                id: 'widget-17',
                content: 'I am',
                name: 'John Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-18',
                content: 'a Web',
                name: 'Amelia Doe',
                email: 'amelia@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-19',
                content: 'developer',
                name: 'Isabella Doe',
                email: 'isabella@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            }
        ],
        'Not Worth Chasing': [
            {
                id: 'widget-20',
                content: 'I am',
                name: 'Mia Doe',
                email: 'mia@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-21',
                content: 'a Web',
                name: 'Evelyn Doe',
                email: 'evelyn@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-22',
                content: 'developer',
                name: 'Harper Doe',
                email: 'harper@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            }
        ],
        Dead: [
            {
                id: 'widget-23',
                content: 'I am',
                name: 'Liam Doe',
                email: 'liam@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-24',
                content: 'a Web',
                name: 'Olivia Doe',
                email: 'olivia@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-25',
                content: 'developer',
                name: 'John Doe',
                email: 'john@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            }
        ],
        Other: [
            {
                id: 'widget-26',
                content: 'I am',
                name: 'Noah Doe',
                email: 'noah@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-27',
                content: 'a Web',
                name: 'Emma Doe',
                email: 'emma@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
            },
            {
                id: 'widget-28',
                content: 'developer',
                name: 'Oliver Doe',
                email: 'oliver@doe.com',
                phone: '+475876098',
                created_at: new Date().toISOString(),
                is_pinned: false
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

    const handlePin = (column, id) => {
        const old = { ...items };
        old[column].map((item) => {
            if (item.id === id) item.is_pinned = !item.is_pinned;

            return item;
        });
        setItems(old);
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

    return (
        <MainCard
            title={
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h3" component="div">
                        Sales page
                    </Typography>
                    <Filters />
                </Box>
            }
        >
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
                                                backgroundColor: '#f8f8f8',
                                                borderTop: `10px solid ${colors[column]}`
                                            }}
                                            key={index}
                                        >
                                            <Column
                                                widgets={items[column]}
                                                droppableId={column}
                                                handleClickOpen={handleClickOpen}
                                                handleRemove={handleRemove}
                                                handlePin={handlePin}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            </DragDropContext>
                        </TabPanel>
                        <TabPanel value="2" sx={{ padding: 0 }}>
                            <Box sx={{ background: '#f8f8f8', padding: 1 }}>
                                {Object.keys(items).map((row, index) => (
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id={`panel1a-header-${index}`}
                                            sx={{ borderLeft: `10px solid ${colors[row]}` }}
                                        >
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Typography>{row}</Typography>
                                                <span>({items[row].length})</span>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <TableContainer component={Paper}>
                                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell align="center">Name</TableCell>
                                                            <TableCell align="center">Phone</TableCell>
                                                            <TableCell align="center">Email</TableCell>
                                                            <TableCell align="center">Created at</TableCell>
                                                            <TableCell align="center">Last activity</TableCell>
                                                            <TableCell align="center">Updated at</TableCell>
                                                            <TableCell align="center"></TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {items[row]
                                                            .sort((x, y) => (x.is_pinned === y.is_pinned ? 0 : x.is_pinned ? -1 : 1))
                                                            .map((item, index) => (
                                                                <TableRow
                                                                    key={index}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        {item.name}
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        {item.phone}
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        {item.email}
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        {moment(item.created_at).format('LLL')}
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        {moment(item.created_at).format('LLL')}
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        {moment(item.created_at).format('LLL')}
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        <IconButton
                                                                            size="small"
                                                                            aria-label="settings"
                                                                            sx={{ color: item.is_pinned ? '#f5c65c' : '#e3e3e3' }}
                                                                            onClick={() => handlePin(row, item.id)}
                                                                        >
                                                                            <PushPinIcon />
                                                                        </IconButton>
                                                                    </TableCell>
                                                                </TableRow>
                                                            ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </Box>
                        </TabPanel>
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
