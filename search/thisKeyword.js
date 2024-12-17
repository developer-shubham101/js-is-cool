(function () {
  console.log(this);
}
)()

function test(){
  console.log(this);
} 
new test()

test()