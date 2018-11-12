import { DefaultLinkType, DefaultLinkTypeProps } from './DefaultLinkType';
import { PageLinkType, PageLinkTypeProps } from './PageLinkType';
import { UrlLinkType, UrlLinkTypeProps } from './UrlLinkType';
import { SubmenuLinkType, SubmenuLinkTypeProps } from './SubmenuLinkType';

const linkTypes = {
    'anomaly.extension.url_link_type'  : UrlLinkType,
    'anomaly.extension.page_link_type' : PageLinkType,
    'radic.extension.submenu_link_type': SubmenuLinkType
}

export {
    linkTypes,
    DefaultLinkType, DefaultLinkTypeProps,
    PageLinkType, PageLinkTypeProps,
    UrlLinkType, UrlLinkTypeProps,
    SubmenuLinkType, SubmenuLinkTypeProps
};