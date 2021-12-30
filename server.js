// // // class Car{
// // //     constructor(name,model){
// // //         this.name=name;
// // //         this.model=model
// // //     }
// // // }


// // // Car.prototype.xyz=function(name,model) {
// // //     console.log("Your car name is: "+this.name)
// // //     console.log("Your car Model is: "+this.model)
// // // }


// // // var Fcar =new Car("Mustang",2010)
// // // var Scar=new Car("Ferrari",2009)
// // // Fcar.xyz()
// // // Scar.xyz()



// // // myjson={
// // //     "name":"Zeeshan",
// // //     "id":43798
// // // }



// // var name="Zeeshan"
// // console.log(`My name is: ${name}`);



// function xyz(name, ...args){



//     let xyz=0
//     for(let i in args){
//         xyz += args[i]

//     }
//     console.log(`YOur name is ${name}: ${xyz}`)

// }

// var arr=[20,30,50]
// xyz("Zeeshan",...arr)



var arr=["Zeeshan","BsCS",100,200]

var [name,bs,regno,exno]=arr



function xyz(fname,bach,...args){
    let sum=0
    for(var i in args){
        sum += args[i]
    }
    console.log(`Your name is ${fname}, Your Degree is ${bach}, And Number Sum is ${sum}`);


}

xyz(...arr)

