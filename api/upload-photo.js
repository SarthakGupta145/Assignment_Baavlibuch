router.post('/api/upload-photo', upload.single('photo'), async (req, res) => {
    const { id, friendId } = req.body;
    const photoPath = req.file.path;
  
    // Store encrypted photo
    // ...
  
    // Update friend's friendList
    try {
      const friend = await Friend.findOne({ id: friendId });
      if (friend) {
        friend.friendList.push(id);
        await friend.save();
      }
      res.json({ success: true, message: 'Photo uploaded and friendList updated' });
    } catch (error) {
      console.error('Error updating friendList:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });
  