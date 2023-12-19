import { Connection } from "mongoose"

router.post('/api/log-connection', async (req,res)=>{
    try{
        await Connection.create({});
        res.json({success:true,message:'Connection logged successfully'});
    }
    catch (error)
    {
        console.error('Error logging connection:',error);
        res.status(500).json({success:false,error: 'Internal Server Error' });
    }
});