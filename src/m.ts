export const a = 'abc';
export const b = 'bbb';
export const exsitDir = function(dir:string){
  try {
    const fileInfo = Deno.lstatSync(dir);
    return fileInfo.isDirectory;
  }catch(e){
    return false;
  }
};