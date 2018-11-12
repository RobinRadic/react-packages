import React from 'react';
import { Styled } from 'typestyled-components';
import { hot } from 'decorators';
import { DefaultLinkTypeProps } from './DefaultLinkType';
import { NavLink } from 'react-router-dom';
import { strEnsureLeft } from 'utils/general';
import { LinkType } from './LinkType';


const log = require('debug')('components:UrlLinkType');

export interface UrlLinkTypeProps extends DefaultLinkTypeProps {

}

@hot(module)
@Styled()
export class UrlLinkType extends LinkType {
    static displayName  = 'UrlLinkType'
    static defaultProps = {}

    renderTitle() {
        let { link, classNames } = this.props
        return (
            <NavLink to={strEnsureLeft(link.entry.url, '/')}>
                {this.renderIcon()}
                {link.title}
            </NavLink>
        );
    }
}

