### how to use
add props parameter for your component func. 
and use it on component
when u call component at parent component write your props and your propses value
if u forgot this, your component will get error !

u can data bind just one way like this! (one-way-binding)
explain:
u cant bind your data from child component to parent component
just bind from parent component to child component!

### if u want to validate your props at code base:
u should install :
npm install prop-types


and add this after component function:
```
HelloUser.propTypes = {
    userName: PropTypes.string.isRequired,
};
```
this is say userName should bi string and cant be empty
