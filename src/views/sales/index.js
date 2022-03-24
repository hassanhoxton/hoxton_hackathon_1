// material-ui
// import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

// ==============================|| SAMPLE PAGE ||============================== //
const getItems = (count) =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
        id: `item-${k}`,
        content: `item ${k}`
    }));

const grid = 8;

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250
});

const getItemStyle = (draggableStyle, isDragging) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

// a little function to help us with reordering the result
const reorder = async (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const SamplePage = () => {
    const [items, setItems] = useState(getItems(10));
    const [value, setValue] = useState('1');

    const onDragEnd = async (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        setItems(await reorder(items, result.source.index, result.destination.index));
    };

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
                    <TabPanel value="1">
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                                        {items &&
                                            items?.map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div>
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.dragHandleProps}
                                                                {...provided.draggableProps}
                                                                style={getItemStyle(provided.draggableProps.style, snapshot.isDragging)}
                                                            >
                                                                {item.content}
                                                            </div>
                                                            {provided.placeholder}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                </TabContext>
            </Box>
        </MainCard>
    );
};

export default SamplePage;
