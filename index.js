class Formatter {
  //add static methods here
  static capitalize(str){
    return (str.charAt(0).toUpperCase() + str.slice(1))
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-'\s]+/g,'')
  }

  static titleize(str){

    let tempArray = [] 
    tempArray = str.split(" ")
    let titleizedArray = [] 
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']

    for(const key in tempArray){
      if (key == 0){
        (tempArray[key].length > 1) ? titleizedArray.push(this.capitalize(tempArray[key])) : titleizedArray.push(tempArray[key].charAt(0).toUpperCase())
      }else{
        if (excludedWords.includes(tempArray[key])){
          titleizedArray.push(tempArray[key])
        }else{
          (tempArray[key].length>1) ? titleizedArray.push(this.capitalize(tempArray[key])) : titleizedArray.push(tempArray[key].charAt(0).toUpperCase())
        }
      }
    }
    let titleizedStr = ""
    for(const key in titleizedArray){
      if (key == titleizedArray.length-1){
        titleizedStr = `${titleizedStr} ${titleizedArray[key]}`
      }else if (key == 0){
        titleizedStr = `${titleizedArray[key]}`
      }else{
        titleizedStr = `${titleizedStr} ${titleizedArray[key]}`
      }
    }
    return titleizedStr
  }
}