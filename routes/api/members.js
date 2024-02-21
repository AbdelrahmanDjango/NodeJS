const express = require('express');
const router = express.Router()
const members = require('../../members.js');
const uuid = require('uuid');

// Get all members.
router.get('/', (req,res) => {
    res.json(members);
});

// Get specify member with id.
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(filteredMembers);
    } else {
        res.status(404).json({ error: 'Id not found.' });
    }
    
});

// Post a new member by create new object and push it to original Array.
router.post('/', (req, res) => {
    const newMember = {
        id : uuid.v4(),
        Name : req.body.Name,
        job : req.body.job
    };
    if (!newMember.Name ||  !newMember.job) {
        return res.status(400).json({error : 'Include name and job.'});
    };
    members.push(newMember);
    res.send(newMember);
})

// Update specify member by get his id and update data ...
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found){
        // Store data that's come from req body in variable.
        const updMember = req.body;
        // Same idea of filter, param give us access on original Array.
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)){
                // With param, we check if the variable has a new data, if not; keep the data without changes.
                member.Name = updMember.Name ? updMember.Name : member.Name;
                member.job = updMember.job ? updMember.job : member.job;
                res.json({msg : 'Member updated', member})
            }
        });
    } else {
        res.status(404).json({error : 'ID is wrong'})
    };
})

module.exports = router;