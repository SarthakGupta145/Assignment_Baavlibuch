router.post('/api/add-person', async (req, res) => {
    try {
      const { id } = req.body;
      await Person.create({ id });
      res.json({ success: true, message: 'Person added successfully' });
    } catch (error) {
      console.error('Error adding person:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });
  