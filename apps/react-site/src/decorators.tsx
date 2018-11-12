
import hoistNonReactStatics from 'hoist-non-react-statics';


export function hot<T>(module: NodeModule, hoist = false) {
    return (TargetComponent) => {
        if ( DEV ) {
            let decorator = require('react-hot-loader').hot(module);
            if ( ! hoist ) {
                return decorator(TargetComponent);
            }
            return hoistNonReactStatics(TargetComponent, decorator(TargetComponent))
        }
        return TargetComponent;
    }
}