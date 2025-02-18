## what is useEffect ?
useEffect is a React Hook used to menage side effects in components.
side effects may include:
* api calls
* dom manipulations
* subscriptions
* timers (setTimeout, setInterval)
* global event listeners (window.addEvemtListener)

## how to use ?
```
useEffect(effectFunction, dependancyArray)
```
efectFunction -> cod block to be executed
dependancyArray -> Dependency array (useEffect is triggered when certain variables change)

## details
you can review this project (react7) for "how to use details"