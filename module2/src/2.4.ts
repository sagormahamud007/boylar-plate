{
    // ganeric interface
    interface Developer<T, X=null> {
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseYear:number
        }
        smartWatch: T;
        bike?:X
        }

type EmaillabWatch={
    brand:string;
    model:string;
    display:string
   }

   const poorDeveloper : Developer<EmaillabWatch>={
    name:"shagor",
    computer:{
        brand:"Lenovo",
        model:"90 c t",
        releaseYear:2023
    },
    smartWatch:{
        brand:"Emailab",
        model:"kw66",
        display:"OLED",
    }
   }
   

interface appleWatch{
    brand:string;
    model:string;
    heartTrack:boolean;
    sleepTrack:boolean
   }

interface BikeBrand{
    brand:string;
    model:string;
}

   const richDeveloper : Developer<appleWatch, BikeBrand>={
    name:"shagor",
    computer:{
        brand:"HP",
        model:"90 c t",
        releaseYear:2022
    },
    smartWatch:{
        brand:"apple watch",
        model:"ksirsddf5",
        heartTrack:true, 
        sleepTrack:true
  },
  bike:{
    brand:"Yeama",
    model:"45dd"
  }
    //
}
}