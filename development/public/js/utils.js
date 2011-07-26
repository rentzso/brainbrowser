/* 
 * Copyright (C) 2011 McGill University
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Array.prototype.min = function() {
  var increment = 50000;
  if(this.length > increment){
    var reduced_array = [];
    for(var i=0;i<this.length;i+=increment) {
      reduced_array.push(Math.min.apply(Math, this.slice(i,i+increment-1)));
    }
  }else {
    return Math.min.apply(Math, this);
  }
  return reduced_array.min();

};
Array.prototype.max = function(array) {
  var increment = 50000;
  if(this.length > increment){
    var reduced_array = [];
    for(var i=0;i<this.length;i+=increment) {
      reduced_array.push(Math.max.apply(Math, this.slice(i,i+increment-1)));
    }
  }else {
    return Math.max.apply(Math, this);
  }
  return reduced_array.max();
};

/*
 * Only works with primitive. 
 */
function cloneArray(original) {
  var new_array = new Array(original.length);
  for(var i=0; i< new_array.length; i++) {
    new_array[i] = original[i];
  }
    
  return new_array;
}

function rotateUint16Array90Left(array,width,height){
  var new_array = new Uint16Array(width*height);
  
  for(var i = 0; i< width; i++){
    for(var j=0; j< height; j++)  {
      new_array[i*height+j] = array[j*width+(width-i)];

      
    }
  }
  return new_array;
}


function rotateUint16Array90Right(array,width,height){
  var new_array = new Uint16Array(width*height);
  
  for(var i = 0; i< width; i++){
    for(var j=0; j< height; j++)  {
      new_array[i*height+j] = array[(height-j)*width+i];

      
    }
  }
  return new_array;
}

function interpolateDataArray(first,second,percentage,blah) {
  console.log(first.values.length);
//  if(first.length != second.length) {
  //  console.log("can't interpolate different array size");
    //throw "can't interpolate different array size";
 // }
  var length = first.values.length;  

  var new_array = new Array(length);
      console.log("Percentage: " + percentage);
  for(var i = 0; i< length; i++) {
    if(blah){
      new_array[i] = (first.values[i]*(100-percentage*100)+second.values[i]*(percentage*100))/100;            
    }else {
      new_array[i] = (first.values[i]*(100-percentage*100)+second.values[i]*(percentage*100))/100;            
    }

      

  }
  console.log(new_array.length);
  return new_array;
}