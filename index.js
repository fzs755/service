const path= require ("path")
const Koa =require("koa")
const Router= require("koa-router")
// const mongoose= require("mongoose")
const app= new Koa()
const router= new Router
const serve= require("koa-static")

app.use(serve(__dirname+"/public/dist"))

router.get('/1',async(ctx,next)=>{
    ctx.status=301;
    ctx.redirct('/2');
    await next();
});
router.get('/2',async(ctx,next)=>{
    ctx.body='2';
    await next();
})

//app.get("/",(req,res)=>{
//    res.sendFile(path.resolve(__dirname,"../dist","index.html"))
//})

// app.get('/user/get',(req,res)=>{
    // console.log('req',req)
    // console.log('res',res)
    // res.send('get访问成功')
// })
// app.post('/user/post',(req,res)=>{
    // console.log('req',req)
    // console.log('res',res)
    // res.send('post访问成功')
// })
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(5000,()=>{
    console.log("server is ready")
})