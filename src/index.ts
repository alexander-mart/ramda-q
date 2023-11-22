import * as R from 'ramda'

export const findObject = (
    predicate: string,
    value: any,
    array_of_objects: any[]
) => R.find(R.propEq(value, predicate), array_of_objects)

export const findValue = (
    predicate: string,
    value: any,
    property: string,
    array_of_objects: any[]
) => R.prop(property, findObject(predicate, value, array_of_objects))
