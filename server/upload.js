const IncomingForm = require('formidable').IncomingForm;
module.exports= upload=(req,res)=>{
            let form = new IncomingForm();
            
            form.on('file',(field,file)=>{
                /* file-system API?? */
                })
            form.on('end',()=>{
                res.json();
                })
            form.parse(req);
            };
