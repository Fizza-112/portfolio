//creating object

const student = {  // student is an object
    fullName: "Fizza",
    age: 22,
    cgp: 2.66,
    isPass: true,  // 'true' should be lowercase in JavaScript
  };

  //two method to access keys
  console.log(student.cgp);    //siraf key ko access kerna mean variable ko access kerna as by name like
                               //fullName,age,cgp,ispass
  console.log(student["age"]);                           

  //ager kisi chiz ko update kerna ho 

  student["age"]= student["age"]+ 1 ;               //porani age may + 1 ker diya

  



