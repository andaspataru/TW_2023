function testNumbers(a,b){

    try{
        if(a<b){
            throw new Error('Error msg');
        }
        return a/b;

    } catch(error){
        console.log(error.message);

    }finally{
     console.log('Finished execution')
    }
}

const res=testNumbers(12,1);
console.log(res);