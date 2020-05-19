import {exsitDir} from 'http://localhost:5000/www/koaTest.ts';
///import {exsitDir} from './m.ts';

if(!(exsitDir("new_dir"))){
  await Deno.mkdir("new_dir");
}

setTimeout(async ()=>{
  console.log('删除文件夹start！');
  await Deno.remove("new_dir");
  console.log('删除文件夹成功！');
}, 5000);
