useEffect -> this hook runs a function every render of the compnents

the components render initially when it first loads
and it renders all of this to the dom

This also happens when the state changes it render the dom
so that we can see the updated change in the browser

this useEffect is way to run a code on every render

on every render the statement or logic written inside useeffect function run

import {useEffect} from 'react'

useEffect does not return anything to us all we need to is pass a function as a argument to the useEffect
this is the function that run every time there is a re render first initally when all the components loads
then everytime the data changes


useEffect(() => {
console.log('use effect run')
})

inside useEffect we can do something like fetch data or some kind of
authentication and those things are known as side effect in react
we can aslo acces state inside the useEffect

useEffect(() => {
console.log('use effect run')
console.log(blogs) -> blogs is a state here
})

we shouldn't update state inside the useEffect because if we do then we will end up in the 
infinite loop

Dependencies of the useState

lets say we dont want to render the function on every render
when only want to run on the specififc render

we can do it by dependecy array

useEffect(() => {
console.log('use effect run')
}, [])

what these empty Dependencies array does is
make sure that the function inside the useeffect only
  run on the initial render thereafter if the state changes it won't run the 
  function again it only run it once
                                                                                                                                                            
    now lets say there is a state 

    const [name, setName] = useState('mario')

    <button onClick={() => setName('Luigi')}>Change Name</button>
    <p>{name}</p>

    now we want to run the useEffect in the begining when the compnents render
    but now also want to run this useEffect function to run 
      when the name changes it state i.e name state changes

      i.e means the name become the Dependencies 

      useEffect(() => {
        console.log('use effect run')
        }, [name])

        now useeffect is gonna watch the name value
        and if it changes the the function inside the useEffect will execute
          
Dependenciesa array is the second argument to the useEffect



        
