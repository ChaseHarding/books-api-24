const express = require('express')
const router = express.Router();
const Book = require('../models/book')


//route to get all books
router.get('/', async (req, res) => {
    try {
    const books = await Book.find();
    res.json(books);
} catch (err) {
    res.status(500).json({ message: err.message })
}
})

//route to get book by id
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.json(book)
        } else {
            res.status(404).json({ message: 'Book not found' })
        } 
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//route for updating/putting
router.put('/:id', async (req, res) => {
    try {
       const updatedBook = await Book.findByIdAndUpdate(req.params.id, { new: true })
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' })
        }
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//route for deletion
router.delete('/id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        if(!deletedBook) {
            return res.status(404).json({ message: 'Book not found'})
        }
        res.json({ message: 'Book deleted successfully'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//route for new book/posting
router.post('/', async (req,res) => {
    try{
        const newBook = new Book(req.body)
        await newBook.save();
        res.status(201).json(newBook)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router