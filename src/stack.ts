/**
 *  Module of Stack structure defination.
 */

 import {LinkedList} from "./ll";

 /**
  * A generic class implementing stack structure.
  */
 export class Stack<T> {
     // properties
     private stack: LinkedList<T> = null;

     //constructor
     constructor(){
         this.stack = new LinkedList<T>()
     }

     //getters
     get toString() {
         return this.stack.toString()
     }

     get isEmpty() {
         return this.stack.isEmpty()
     }

     get top() {
         return this.stack.lhead
     }

     get bottom() {
         return this.stack.lbottom
     }

     //methods
     /**
      * @param value push element into the stack
      */
     public push = (value: T): Stack<T> => {
         this.stack = new LinkedList<T>().append(value)["+"](this.stack)
         return this
     }
     
     /**
      * returns the element at top of the stack
      */
     public pop = (): T => {
         const t = this.stack.lhead
         this.stack = this.stack.ltail
         return t
     }
 }