class response {
    constructor(data=null,error=null)
    {
        this.error = error;
        this.data = data;
    }
    success(res){
        return res.status(200).json({
            status:"succes",
            data:this.data
        });
    }
    created(res){
        return res.status(201).json({
            status:"created",
            data:this.data
        });
    }
    error500(res){
        res.status(500).json({
            status:"error",
            error:this.error
        });
    }
    error400(res){
        res.status(400).json({
            status:"error",
            error:this.error
        });
    }
    notFound(res){
        res.status(404).json({
            status:"not found",
            error:""
        });
    }

}
module.exports = response;