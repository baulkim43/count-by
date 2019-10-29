
$(document).ready(function(){

 $(".countForm").submit(function(event) {
  event.preventDefault();

  var countToNum = parseInt($("#countTo").val());
  console.log(countToNum)
  var countByNum = parseInt($("#countBy").val());
  console.log(countByNum)
  if (isNaN(countToNum && countByNum)){
    alert("make sure to input all fields with only Numbers!")
  }else if (countByNum > countToNum){
    alert("that doesnt make sense")
  }else{
    for (count= countByNum; count <= countToNum; count += countByNum )
    alert(count);

  }
 })

})
