const express = require('express');
const { authenticateToken } = require('../utils/utilities');
const { addNote, editNote, getAllNotes, deleteNote, updatePinStatus, searchNotes } = require('../controllers/note.controller');
const router = express.Router();

router.post('/add-note', authenticateToken, addNote);
router.put('/edit-note/:noteId', authenticateToken, editNote);
router.get('/get-all-notes', authenticateToken, getAllNotes);
router.delete('/delete-note/:noteId', authenticateToken, deleteNote);
router.put('/update-note-pinned/:noteId', authenticateToken, updatePinStatus);
router.get('/search-notes', authenticateToken, searchNotes);

module.exports = router;