// const Bhyyu = new Object() /* Yeh ek SingleTon Object hai */

const tinderUser = {

} /* Yeh SingleTon Nhi hai  */

tinderUser.id = "123abb"
tinderUser.name = "Somesh"
tinderUser.isloggedIn = false 

// console.log(tinderUser);

const regularUser = {

        email : "Sanu@12121",
        "Full name ": {

                 userFullName : {

                        First_name : "janu",
                        last_name : "betu"  

                }
    }

}

// console.log(regularUser["Full name "]["userFullName"]["First_name"]); /* Yeh Tarika hai
// hai, Object ke Ander Object ko Acces karne Ka */

const Object1 = { 1: "a", 2: "b"}
const Object2 = { 3: "c", 4: "d"}

// const merge = Object.assign({}, Object1, Object2) /* Iss Tara Hum Do Object ko Merge kar Sakte
//  hai */
// console.log(merge);

// const MergeLastestWay = { ...Object1, ...Object2 } /* Yeh latest Way hai Do Ya do Se Jada
// Object ko Merge karne ka Ek new Array mein */
// console.log(MergeLastestWay);

console.log(Object.keys(tinderUser)); /* 📌 Yeh Sab Key Array ke form mai aa gyi */

console.log((Object.values(tinderUser))); /* Isse hum Object ko Array ke form mai print kar sakte
hai */

console.log(tinderUser.hasOwnProperty("id")); /* Yeh bata hai object ke ander key hai ya nhi
yeh batata hai */
