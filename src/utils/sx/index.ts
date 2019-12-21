import {
  jsx,
  SxStyleProp,
  Box,
  Container,
  Flex,
  Header,
  Footer,
  Layout,
  Main
} from 'theme-ui';
import { ComponentProps } from 'react';
import { getClassName } from './utils';
import { cx } from 'emotion';

type SxOpts<Props> = {
  defaultProps?: {
    [Prop in keyof Props]?: Props[Prop];
  };
};

type SxStyleGetterOrSxStyle<Props> =
  | ((props: Props) => SxStyleProp)
  | SxStyleProp;

/**
 * @description
 * Takes react components and applies sx styles based on additional props.
 * This is similar to "styled" but not the same!
 * Usage:
 * ```
 * type MyButtonProps = {
 *   fontSize: string;
 * }
 *
 * export const MyButton = sx(Button)<MyButtonProps>(
 *   ({ fontSize }) => ({
 *     fontSize,
 *     color: 'green',
 *   })
 * );
 * ```
 */
export function sx<Tag extends React.ComponentType<any>>(Component: Tag) {
  return <ExtraProps = {}>(
    sx: SxStyleGetterOrSxStyle<ComponentProps<Tag> & ExtraProps>,
    sxOpts?: SxOpts<ComponentProps<Tag> & ExtraProps>
  ) => {
    // generate a (hopefully) unique classname
    const className = getClassName();

    // create the new component via theme-uis jsx,
    // apply the sx prop and merge classnames
    const SxComponent = (props: ComponentProps<Tag> & ExtraProps) =>
      jsx(Component, {
        ...props,
        sx: sx instanceof Function ? sx(props) : sx,
        className: cx(className, props.className)
      });

    // set a somewhat meaningful display name based on child component
    SxComponent.displayName = `sx(${Component.displayName ?? 'Component'})`;

    // allow to set defaultProps via options
    SxComponent.defaultProps = sxOpts?.defaultProps ?? {};

    // allow this component to be used as a selector
    SxComponent.toString = () => `.${className}`;

    // fake export this as a string intersection
    // to make it usable as an object key
    return SxComponent as typeof SxComponent & string;
  };
}

// add shortcuts for the main theme ui components
sx.Box = sx(Box);
sx.Container = sx(Container);
sx.Flex = sx(Flex);
sx.Header = sx(Header);
sx.Footer = sx(Footer);
sx.Layout = sx(Layout);
sx.Main = sx(Main);
