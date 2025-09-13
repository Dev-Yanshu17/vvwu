var str=require('./strmodule');
let s="ABC abc";
console.log(str.strtoggle(s));
let v="ABC abc";
r=' ';
{
    for(let i=0;i<v.length;i++)
        {
            c=v[i];
            a=v.charCodeAt(i) //string ascci value print
            if(a>=65 && a<=91){
                a+=32;
                r+=(String.fromCharCode(a));
            }else if (a>=97 && a<=122){
                a-=32;
                r+=(String.fromCharCode(a));
        
            }
            else{
                r+=(String.fromCharCode(a));
            }
            
        }
}
console.log(r);

    
//console.log(v.toLowerCase());

// var strop={
//     strlower:function
// };
// Module.export=strop;