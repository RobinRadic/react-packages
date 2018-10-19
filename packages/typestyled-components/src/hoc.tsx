import React, { ComponentClass } from 'react';
import { Cache, Registry, defaultRenderer, shallowCompare } from 'react-typestyle';
import { Plugin, SheetGenerator, StaticStyle, StyleGenerator } from 'react-typestyle/types';
import PropTypes from 'prop-types';
import { classes } from 'typestyle';

export type InputSheet<P> = StyleGenerator<P> | StaticStyle | SheetGenerator<P>
export type ThemedInputSheet<P, THEME extends any = any> = InputSheet<P> | InputSheet<P & { theme: THEME }>;

export type ClassNames = { root?: string }

export interface InjectedProps {
    className?: string
}

export interface Options {
    plugins?: Plugin[];
    renderer: Registry;

    shouldStylesUpdate<P>(props: P, nextProps: P): boolean;
}

export interface ComponentOptions<P> {
    styles?: ThemedInputSheet<P> | { root?: ThemedInputSheet<P> };
}

export type StyledStatelessComponent<P = {}> = React.StatelessComponent<P & InjectedProps> & ComponentOptions<P>;

export type HOC = <OriginalProps extends {}>(
    Component: ((React.ComponentClass<OriginalProps & InjectedProps> | React.StatelessComponent<OriginalProps & InjectedProps>) & { styles?: InputSheet<Readonly<OriginalProps>> }),
    componentOptions: ComponentOptions<Readonly<OriginalProps>>
) => ComponentClass<OriginalProps>
export type HOCCreator = (data: Options) => HOC


const hoc: HOCCreator = ({ plugins, renderer, shouldStylesUpdate }: Options): HOC =>
    <OriginalProps extends {}>(
        Component: (
            (
                React.ComponentClass<OriginalProps & InjectedProps>
                | React.StatelessComponent<OriginalProps & InjectedProps>) & { styles?: InputSheet<Readonly<OriginalProps>> }
            ),
        componentOptions: ComponentOptions<Readonly<OriginalProps>> = {}
    ) => {
        type ResultProps = Readonly<OriginalProps>;

        // Get sheet
        const sheet = componentOptions.styles || Component.styles;

        return class extends React.Component<ResultProps> {
            public static defaultProps = Component.defaultProps;
            public static propTypes    = Component.propTypes;

            static contextTypes           = {
                theme: PropTypes.object.isRequired
            }
            public classNames: ClassNames = {};
            public registry               = new Cache<ResultProps>({ plugins }).register(sheet as any);

            /** Handle style sheet attach */
            public componentWillMount() {
                renderer.mount(this.registry);

                this.updateStyles(this.props);
            }

            /** Handle style sheet updates */
            public componentWillReceiveProps(nextProps: ResultProps) {
                if ( shouldStylesUpdate(this.props, nextProps) ) this.updateStyles(nextProps);
            }

            /** Handle style sheet detach */
            public componentWillUnmount() {
                renderer.unmount(this.registry);
            }

            /** React render */
            public render() {
                return <Component className={classes(this.classNames.root)} {...this.props} />;
            }

            /** Update styles */
            public updateStyles(props: ResultProps) {
                this.classNames = this.registry.render({ ...props as any, theme: this.context.theme });
            }
        };
    };

const HoC: HOC = hoc({
    renderer          : defaultRenderer,
    shouldStylesUpdate: shallowCompare,
    plugins           : []
});

export type HocExtension<OriginalProps extends {}> = ComponentClass<OriginalProps>

export const extendHoc = () => <OriginalProps extends {}>(
    Component: React.ComponentClass<OriginalProps>,
    styles?: ThemedInputSheet<OriginalProps>): HocExtension<OriginalProps> => {
    let componentOptions: ComponentOptions<Readonly<OriginalProps>> = {
        styles: {
            root: styles
        }
        // styles: {
        // root: {
        //     backgroundColor: '#333'
        // },
        // bemy: ({ theme }: { theme: Theme }) => ({
        //     backgroundColor: theme.colors.primary
        // })
        // }
    }

    return HoC<OriginalProps>(Component as any, componentOptions)
}
