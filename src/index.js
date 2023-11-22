import * as R from 'ramda'


export const findObject = (
    predicate,
    value,
    array_of_objects
) => R.find(R.propEq(value, predicate), array_of_objects)

export const findValue = (
    predicate,
    value,
    property,
    array_of_objects
) => R.prop(property, findObject(predicate, value, array_of_objects))
