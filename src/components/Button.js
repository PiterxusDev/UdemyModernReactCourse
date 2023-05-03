import className from "classnames";




function Button({ children, primary, secondary, success, warning, danger, outline, rounded,...rest }) {
    const classes = className('flex items-center px-3 py-1.5 border',{
        'border-blue-700 bg-blue-500 text-white': primary,
        'border-orange-900 bg-orange-700 text-white': secondary,
        'border-green-700 bg-green-500 text-green': success,
        'border-yellow-600 bg-yellow-400 text-white': warning,
        'border-red-700 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,
        'text-white': !outline

    });
    return <button {...rest} className={classes}>{children}</button>
}
Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)

            if (count>1){
                return new Error('Only one of props can be true')
            }
    }
};

export default Button;