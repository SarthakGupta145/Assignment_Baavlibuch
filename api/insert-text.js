router.post('/api/insert-text', async (req, res) => {
    try {
      const { text } = req.body;
      await TextModel.create({ text });
      res.json({ success: true, message: 'Text inserted successfully' });
    } catch (error) {
      console.error('Error inserting text:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });
  