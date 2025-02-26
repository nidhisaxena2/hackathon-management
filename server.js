const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/hackathon', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'));

const Project = require('./models/Project');

app.post('/api/submit', async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json({ message: 'Project submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error submitting project' });
    }
});

app.get('/api/projects', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

app.listen(5000, () => console.log('Server running on port 5000'));
