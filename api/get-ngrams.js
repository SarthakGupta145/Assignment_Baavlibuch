router.get('/api/get-ngrams', async (req, res) => {
    try {
      // Fetch the most recent 2 strings from the TextModel
      const recentTexts = await TextModel.find().sort({ _id: -1 }).limit(2);
  
      // Call Django API
      const response = await axios.post('http://your-django-api-endpoint', {
        text1: recentTexts[0].text,
        text2: recentTexts[1].text,
      });
  
      // Return the Ngrams to the frontend
      res.json({ success: true, ngrams: response.data.ngrams });
    } catch (error) {
      console.error('Error fetching Ngrams:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });
  