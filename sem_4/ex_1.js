function incraseSalary(arr, proc){
  try{
    if(!Array.isArray(arr)){
    throw new Error('Not array!');
   }
   if(typeof proc !== 'number'){
    throw new Error('Not number!');
   }
  const newArr=arr.map(el=> el+(el*proc/100));

  return newArr;
  } catch(error){
    console.log(error.message);
  }
}

const arr=[1000, 2300, 4000];
const p=10;

const rez=incraseSalary(arr,p);
console.log(rez);