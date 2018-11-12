/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
};

/** A date string with format Y-m-d. Example: "2018-01-01" */
export type Date = any;

export type Mixed = any;

export type Assoc = any;

/** A date string with format Y-m-d H:i:s+P. Example: "2018-01-01 13:00:00+00:00" */
export type DateTimeTz = any;
/** Interface for types that have a globally unique ID */
export interface Node {
  id: string /** Global ID that can be used to resolve any type that implements the Node interface. */;
}

export interface Query {
  me?: User | null;
  version?: string | null;
  users?: UserPaginator | null;
  user?: User | null;
  userByUsername?: User | null;
  userByEmail?: User | null;
  roles?: RolePaginator | null;
  role?: UserRole | null;
  roleBySlug?: UserRole | null;
  pages?: PagePaginator | null;
  page?: Page | null;
  pageBySlug?: Page | null;
  pageByPath?: Page | null;
  menus?: MenuPaginator | null;
  menu?: NavigationMenu | null;
  menuBySlug?: NavigationMenu | null;
  menuTree?: MenuTree | null;
  blocks?: BlockPaginator | null;
  configuration?: Configuration[] | null;
  posts?: PostPaginator | null;
  post?: Post | null;
  view?: ViewQueryResponse | null;
  node?: Node | null;
}

export interface User {
  id?: string | null;
  roles?: UserRole[] | null;
  created_at?: Date | null;
  updated_at?: Date | null;
  deleted_at?: Date | null;
  email?: string | null;
  permissions?: string[] | null;
  username?: string | null;
  display_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  activated?: boolean | null;
  enabled?: boolean | null;
}

export interface UserRole {
  id?: string | null;
  name?: string | null;
  slug?: string | null;
  description?: string | null;
  permissions?: string[] | null;
}

export interface UserPaginator {
  paginatorInfo: PaginatorInfo;
  data: User[];
}

export interface PaginatorInfo {
  count: number /** {"kind":"StringValue","value":"Total count of available items in the page.","block":false} */;
  currentPage: number /** {"kind":"StringValue","value":"Current pagination page.","block":false} */;
  firstItem: number /** {"kind":"StringValue","value":"Index of first item in the current page.","block":false} */;
  hasMorePages: boolean /** {"kind":"StringValue","value":"If collection has more pages.","block":false} */;
  lastItem: number /** {"kind":"StringValue","value":"Index of last item in the current page.","block":false} */;
  lastPage: number /** {"kind":"StringValue","value":"Last page number of the collection.","block":false} */;
  perPage: number /** {"kind":"StringValue","value":"Number of items per page in the collection.","block":false} */;
  total: number /** {"kind":"StringValue","value":"Total items available in the collection.","block":false} */;
}

export interface RolePaginator {
  paginatorInfo: PaginatorInfo;
  data: UserRole[];
}

export interface PagePaginator {
  paginatorInfo: PaginatorInfo;
  data: Page[];
}

export interface Page {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  path?: string | null;
  content?: string | null;
  type?: PageType | null;
  parent?: Page | null;
  children?: Page[] | null;
  siblings?: Page[] | null;
  visible?: boolean | null;
  enabled?: boolean | null;
  exact?: boolean | null;
  home?: boolean | null;
  meta_title?: string | null;
  meta_description?: string | null;
  themeLayout?: string | null;
  allowedRoles?: UserRole[] | null;
}

export interface PageType {
  id?: string | null;
  name?: string | null;
  slug?: string | null;
  description?: string | null;
}

export interface MenuPaginator {
  paginatorInfo: PaginatorInfo;
  data: NavigationMenu[];
}

export interface NavigationMenu {
  id?: string | null;
  name?: string | null;
  slug?: string | null;
  description?: string | null;
  links?: NavigationLink[] | null;
}

export interface NavigationLink {
  menu?: NavigationMenu | null;
  children?: NavigationLink[] | null;
  target?: string | null;
  class?: string | null;
  parent?: NavigationLink | null;
  allowedRoles?: UserRole[] | null;
}

export interface MenuTree {
  id: string;
  sort_order: number;
  slug: string;
  name: string;
  description?: string | null;
  children?: MenuTreeItem[] | null;
}

export interface MenuTreeItem {
  id: string;
  children?: MenuTreeItem[] | null;
  type: MenuTreeItemType;
  entry: MenuTreeItemEntry;
  target?: string | null;
  class?: string | null;
  icon?: string | null;
  parent_id?: string | null;
  url?: string | null;
  title?: string | null;
}

export interface MenuTreeItemType {
  id: string;
  name: string;
  namespace: string;
  type: string;
}

export interface MenuTreeItemEntry {
  id: string;
  sort_order: number;
  title: string;
  description?: string | null;
  page?: MenuTreeItemEntryPage | null;
  url?: string | null;
}

export interface MenuTreeItemEntryPage {
  id: string;
  sort_order: number;
  str_id: string;
  slug: string;
  path: string;
  title: string;
  home?: boolean | null;
  visible?: boolean | null;
  enabled?: boolean | null;
  exact?: boolean | null;
}

export interface BlockPaginator {
  paginatorInfo: PaginatorInfo;
  data: Block[];
}

export interface Block {
  title?: string | null;
  area?: BlockArea | null;
  extension?: Assoc | null;
  displayTitle?: boolean | null;
}

export interface BlockArea {
  name?: string | null;
  slug?: string | null;
  description?: string | null;
}

export interface Configuration {
  scope?: string | null;
  key?: string | null;
  value?: string | null;
}

export interface PostPaginator {
  paginatorInfo: PaginatorInfo;
  data: Post[];
}

export interface Post {
  id?: string | null;
  title?: string | null;
  summary?: string | null;
  slug?: string | null;
  type?: PostType | null;
  publish_at?: DateTimeTz | null;
  author?: User | null;
  category?: PostCategory | null;
  featured?: boolean | null;
  enabled?: boolean | null;
  tags?: string[] | null;
}

export interface PostType {
  name?: string | null;
  slug?: string | null;
  description?: string | null;
}

export interface PostCategory {
  name?: string | null;
  slug?: string | null;
  description?: string | null;
}

export interface ViewQueryResponse {
  data?: Assoc | null;
  content?: string | null;
}

export interface QueryConstraints {
  where?: WhereConstraint[] | null;
  orderBy?: OrderByConstraint[] | null;
}

export interface WhereConstraint {
  column: string;
  operator?: Operator | null;
  value: Mixed;
  boolean?: LogicalOperator | null;
}

export interface OrderByConstraint {
  column: string;
  order: Order;
}
export interface UsersQueryArgs {
  count?: number | null;
  page?: number | null;
  query?: QueryConstraints | null;
}
export interface UserQueryArgs {
  id: string;
}
export interface UserByUsernameQueryArgs {
  username: string;
}
export interface UserByEmailQueryArgs {
  email: string;
}
export interface RolesQueryArgs {
  count?: number | null;
  page?: number | null;
  query?: QueryConstraints | null;
}
export interface RoleQueryArgs {
  id: string;
}
export interface RoleBySlugQueryArgs {
  slug: string;
}
export interface PagesQueryArgs {
  count?: number | null;
  page?: number | null;
  query?: QueryConstraints | null;
}
export interface PageQueryArgs {
  id: string;
}
export interface PageBySlugQueryArgs {
  slug: string;
}
export interface PageByPathQueryArgs {
  path: string;
}
export interface MenusQueryArgs {
  count?: number | null;
  page?: number | null;
  query?: QueryConstraints | null;
}
export interface MenuQueryArgs {
  id: string;
}
export interface MenuBySlugQueryArgs {
  slug: string;
}
export interface MenuTreeQueryArgs {
  identifier: string;
}
export interface BlocksQueryArgs {
  count?: number | null;
  page?: number | null;
  query?: QueryConstraints | null;
}
export interface PostsQueryArgs {
  count?: number | null;
  page?: number | null;
  query?: QueryConstraints | null;
}
export interface PostQueryArgs {
  id: string;
}
export interface ViewQueryArgs {
  uri: string;
  method?: string | null;
  parameters?: Assoc | null;
}
export interface NodeQueryArgs {
  id: string;
}

export enum Operator {
  IN = "IN",
  NOT_IN = "NOT_IN",
  LIKE = "LIKE",
  NOT_LIKE = "NOT_LIKE",
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL"
}

export enum LogicalOperator {
  AND = "AND",
  OR = "OR"
}

export enum Order {
  ASC = "ASC",
  DESC = "DESC"
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    me?: MeResolver<User | null, any, Context>;
    version?: VersionResolver<string | null, any, Context>;
    users?: UsersResolver<UserPaginator | null, any, Context>;
    user?: UserResolver<User | null, any, Context>;
    userByUsername?: UserByUsernameResolver<User | null, any, Context>;
    userByEmail?: UserByEmailResolver<User | null, any, Context>;
    roles?: RolesResolver<RolePaginator | null, any, Context>;
    role?: RoleResolver<UserRole | null, any, Context>;
    roleBySlug?: RoleBySlugResolver<UserRole | null, any, Context>;
    pages?: PagesResolver<PagePaginator | null, any, Context>;
    page?: PageResolver<Page | null, any, Context>;
    pageBySlug?: PageBySlugResolver<Page | null, any, Context>;
    pageByPath?: PageByPathResolver<Page | null, any, Context>;
    menus?: MenusResolver<MenuPaginator | null, any, Context>;
    menu?: MenuResolver<NavigationMenu | null, any, Context>;
    menuBySlug?: MenuBySlugResolver<NavigationMenu | null, any, Context>;
    menuTree?: MenuTreeResolver<MenuTree | null, any, Context>;
    blocks?: BlocksResolver<BlockPaginator | null, any, Context>;
    configuration?: ConfigurationResolver<Configuration[] | null, any, Context>;
    posts?: PostsResolver<PostPaginator | null, any, Context>;
    post?: PostResolver<Post | null, any, Context>;
    view?: ViewResolver<ViewQueryResponse | null, any, Context>;
    node?: NodeResolver<Node | null, any, Context>;
  }

  export type MeResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UsersResolver<
    R = UserPaginator | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UsersArgs>;
  export interface UsersArgs {
    count?: number | null;
    page?: number | null;
    query?: QueryConstraints | null;
  }

  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserArgs>;
  export interface UserArgs {
    id: string;
  }

  export type UserByUsernameResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserByUsernameArgs>;
  export interface UserByUsernameArgs {
    username: string;
  }

  export type UserByEmailResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserByEmailArgs>;
  export interface UserByEmailArgs {
    email: string;
  }

  export type RolesResolver<
    R = RolePaginator | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RolesArgs>;
  export interface RolesArgs {
    count?: number | null;
    page?: number | null;
    query?: QueryConstraints | null;
  }

  export type RoleResolver<
    R = UserRole | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RoleArgs>;
  export interface RoleArgs {
    id: string;
  }

  export type RoleBySlugResolver<
    R = UserRole | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RoleBySlugArgs>;
  export interface RoleBySlugArgs {
    slug: string;
  }

  export type PagesResolver<
    R = PagePaginator | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PagesArgs>;
  export interface PagesArgs {
    count?: number | null;
    page?: number | null;
    query?: QueryConstraints | null;
  }

  export type PageResolver<
    R = Page | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PageArgs>;
  export interface PageArgs {
    id: string;
  }

  export type PageBySlugResolver<
    R = Page | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PageBySlugArgs>;
  export interface PageBySlugArgs {
    slug: string;
  }

  export type PageByPathResolver<
    R = Page | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PageByPathArgs>;
  export interface PageByPathArgs {
    path: string;
  }

  export type MenusResolver<
    R = MenuPaginator | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MenusArgs>;
  export interface MenusArgs {
    count?: number | null;
    page?: number | null;
    query?: QueryConstraints | null;
  }

  export type MenuResolver<
    R = NavigationMenu | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MenuArgs>;
  export interface MenuArgs {
    id: string;
  }

  export type MenuBySlugResolver<
    R = NavigationMenu | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MenuBySlugArgs>;
  export interface MenuBySlugArgs {
    slug: string;
  }

  export type MenuTreeResolver<
    R = MenuTree | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MenuTreeArgs>;
  export interface MenuTreeArgs {
    identifier: string;
  }

  export type BlocksResolver<
    R = BlockPaginator | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BlocksArgs>;
  export interface BlocksArgs {
    count?: number | null;
    page?: number | null;
    query?: QueryConstraints | null;
  }

  export type ConfigurationResolver<
    R = Configuration[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PostsResolver<
    R = PostPaginator | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PostsArgs>;
  export interface PostsArgs {
    count?: number | null;
    page?: number | null;
    query?: QueryConstraints | null;
  }

  export type PostResolver<
    R = Post | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PostArgs>;
  export interface PostArgs {
    id: string;
  }

  export type ViewResolver<
    R = ViewQueryResponse | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ViewArgs>;
  export interface ViewArgs {
    uri: string;
    method?: string | null;
    parameters?: Assoc | null;
  }

  export type NodeResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, NodeArgs>;
  export interface NodeArgs {
    id: string;
  }
}

export namespace UserResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    roles?: RolesResolver<UserRole[] | null, any, Context>;
    created_at?: CreatedAtResolver<Date | null, any, Context>;
    updated_at?: UpdatedAtResolver<Date | null, any, Context>;
    deleted_at?: DeletedAtResolver<Date | null, any, Context>;
    email?: EmailResolver<string | null, any, Context>;
    permissions?: PermissionsResolver<string[] | null, any, Context>;
    username?: UsernameResolver<string | null, any, Context>;
    display_name?: DisplayNameResolver<string | null, any, Context>;
    first_name?: FirstNameResolver<string | null, any, Context>;
    last_name?: LastNameResolver<string | null, any, Context>;
    activated?: ActivatedResolver<boolean | null, any, Context>;
    enabled?: EnabledResolver<boolean | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RolesResolver<
    R = UserRole[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DeletedAtResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PermissionsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UsernameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DisplayNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FirstNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ActivatedResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EnabledResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace UserRoleResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    name?: NameResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    description?: DescriptionResolver<string | null, any, Context>;
    permissions?: PermissionsResolver<string[] | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PermissionsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace UserPaginatorResolvers {
  export interface Resolvers<Context = any> {
    paginatorInfo?: PaginatorInfoResolver<PaginatorInfo, any, Context>;
    data?: DataResolver<User[], any, Context>;
  }

  export type PaginatorInfoResolver<
    R = PaginatorInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DataResolver<R = User[], Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace PaginatorInfoResolvers {
  export interface Resolvers<Context = any> {
    count?: CountResolver<
      number,
      any,
      Context
    > /** {"kind":"StringValue","value":"Total count of available items in the page.","block":false} */;
    currentPage?: CurrentPageResolver<
      number,
      any,
      Context
    > /** {"kind":"StringValue","value":"Current pagination page.","block":false} */;
    firstItem?: FirstItemResolver<
      number,
      any,
      Context
    > /** {"kind":"StringValue","value":"Index of first item in the current page.","block":false} */;
    hasMorePages?: HasMorePagesResolver<
      boolean,
      any,
      Context
    > /** {"kind":"StringValue","value":"If collection has more pages.","block":false} */;
    lastItem?: LastItemResolver<
      number,
      any,
      Context
    > /** {"kind":"StringValue","value":"Index of last item in the current page.","block":false} */;
    lastPage?: LastPageResolver<
      number,
      any,
      Context
    > /** {"kind":"StringValue","value":"Last page number of the collection.","block":false} */;
    perPage?: PerPageResolver<
      number,
      any,
      Context
    > /** {"kind":"StringValue","value":"Number of items per page in the collection.","block":false} */;
    total?: TotalResolver<
      number,
      any,
      Context
    > /** {"kind":"StringValue","value":"Total items available in the collection.","block":false} */;
  }

  export type CountResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type CurrentPageResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FirstItemResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasMorePagesResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LastItemResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LastPageResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PerPageResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace RolePaginatorResolvers {
  export interface Resolvers<Context = any> {
    paginatorInfo?: PaginatorInfoResolver<PaginatorInfo, any, Context>;
    data?: DataResolver<UserRole[], any, Context>;
  }

  export type PaginatorInfoResolver<
    R = PaginatorInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DataResolver<
    R = UserRole[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PagePaginatorResolvers {
  export interface Resolvers<Context = any> {
    paginatorInfo?: PaginatorInfoResolver<PaginatorInfo, any, Context>;
    data?: DataResolver<Page[], any, Context>;
  }

  export type PaginatorInfoResolver<
    R = PaginatorInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DataResolver<R = Page[], Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace PageResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    path?: PathResolver<string | null, any, Context>;
    content?: ContentResolver<string | null, any, Context>;
    type?: TypeResolver<PageType | null, any, Context>;
    parent?: ParentResolver<Page | null, any, Context>;
    children?: ChildrenResolver<Page[] | null, any, Context>;
    siblings?: SiblingsResolver<Page[] | null, any, Context>;
    visible?: VisibleResolver<boolean | null, any, Context>;
    enabled?: EnabledResolver<boolean | null, any, Context>;
    exact?: ExactResolver<boolean | null, any, Context>;
    home?: HomeResolver<boolean | null, any, Context>;
    meta_title?: MetaTitleResolver<string | null, any, Context>;
    meta_description?: MetaDescriptionResolver<string | null, any, Context>;
    themeLayout?: ThemeLayoutResolver<string | null, any, Context>;
    allowedRoles?: AllowedRolesResolver<UserRole[] | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = PageType | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ParentResolver<
    R = Page | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = Page[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SiblingsResolver<
    R = Page[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type VisibleResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EnabledResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ExactResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HomeResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MetaTitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MetaDescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ThemeLayoutResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AllowedRolesResolver<
    R = UserRole[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PageTypeResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    name?: NameResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    description?: DescriptionResolver<string | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MenuPaginatorResolvers {
  export interface Resolvers<Context = any> {
    paginatorInfo?: PaginatorInfoResolver<PaginatorInfo, any, Context>;
    data?: DataResolver<NavigationMenu[], any, Context>;
  }

  export type PaginatorInfoResolver<
    R = PaginatorInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DataResolver<
    R = NavigationMenu[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace NavigationMenuResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    name?: NameResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    description?: DescriptionResolver<string | null, any, Context>;
    links?: LinksResolver<NavigationLink[] | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LinksResolver<
    R = NavigationLink[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace NavigationLinkResolvers {
  export interface Resolvers<Context = any> {
    menu?: MenuResolver<NavigationMenu | null, any, Context>;
    children?: ChildrenResolver<NavigationLink[] | null, any, Context>;
    target?: TargetResolver<string | null, any, Context>;
    class?: ClassResolver<string | null, any, Context>;
    parent?: ParentResolver<NavigationLink | null, any, Context>;
    allowedRoles?: AllowedRolesResolver<UserRole[] | null, any, Context>;
  }

  export type MenuResolver<
    R = NavigationMenu | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = NavigationLink[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TargetResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClassResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ParentResolver<
    R = NavigationLink | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AllowedRolesResolver<
    R = UserRole[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MenuTreeResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    sort_order?: SortOrderResolver<number, any, Context>;
    slug?: SlugResolver<string, any, Context>;
    name?: NameResolver<string, any, Context>;
    description?: DescriptionResolver<string | null, any, Context>;
    children?: ChildrenResolver<MenuTreeItem[] | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type SortOrderResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = MenuTreeItem[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MenuTreeItemResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    children?: ChildrenResolver<MenuTreeItem[] | null, any, Context>;
    type?: TypeResolver<MenuTreeItemType, any, Context>;
    entry?: EntryResolver<MenuTreeItemEntry, any, Context>;
    target?: TargetResolver<string | null, any, Context>;
    class?: ClassResolver<string | null, any, Context>;
    icon?: IconResolver<string | null, any, Context>;
    parent_id?: ParentIdResolver<string | null, any, Context>;
    url?: UrlResolver<string | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ChildrenResolver<
    R = MenuTreeItem[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = MenuTreeItemType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EntryResolver<
    R = MenuTreeItemEntry,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TargetResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClassResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IconResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ParentIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MenuTreeItemTypeResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    name?: NameResolver<string, any, Context>;
    namespace?: NamespaceResolver<string, any, Context>;
    type?: TypeResolver<string, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NamespaceResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace MenuTreeItemEntryResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    sort_order?: SortOrderResolver<number, any, Context>;
    title?: TitleResolver<string, any, Context>;
    description?: DescriptionResolver<string | null, any, Context>;
    page?: PageResolver<MenuTreeItemEntryPage | null, any, Context>;
    url?: UrlResolver<string | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type SortOrderResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageResolver<
    R = MenuTreeItemEntryPage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MenuTreeItemEntryPageResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    sort_order?: SortOrderResolver<number, any, Context>;
    str_id?: StrIdResolver<string, any, Context>;
    slug?: SlugResolver<string, any, Context>;
    path?: PathResolver<string, any, Context>;
    title?: TitleResolver<string, any, Context>;
    home?: HomeResolver<boolean | null, any, Context>;
    visible?: VisibleResolver<boolean | null, any, Context>;
    enabled?: EnabledResolver<boolean | null, any, Context>;
    exact?: ExactResolver<boolean | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type SortOrderResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StrIdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type SlugResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PathResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TitleResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type HomeResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type VisibleResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EnabledResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ExactResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace BlockPaginatorResolvers {
  export interface Resolvers<Context = any> {
    paginatorInfo?: PaginatorInfoResolver<PaginatorInfo, any, Context>;
    data?: DataResolver<Block[], any, Context>;
  }

  export type PaginatorInfoResolver<
    R = PaginatorInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DataResolver<R = Block[], Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace BlockResolvers {
  export interface Resolvers<Context = any> {
    title?: TitleResolver<string | null, any, Context>;
    area?: AreaResolver<BlockArea | null, any, Context>;
    extension?: ExtensionResolver<Assoc | null, any, Context>;
    displayTitle?: DisplayTitleResolver<boolean | null, any, Context>;
  }

  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AreaResolver<
    R = BlockArea | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ExtensionResolver<
    R = Assoc | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DisplayTitleResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace BlockAreaResolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    description?: DescriptionResolver<string | null, any, Context>;
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace ConfigurationResolvers {
  export interface Resolvers<Context = any> {
    scope?: ScopeResolver<string | null, any, Context>;
    key?: KeyResolver<string | null, any, Context>;
    value?: ValueResolver<string | null, any, Context>;
  }

  export type ScopeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type KeyResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PostPaginatorResolvers {
  export interface Resolvers<Context = any> {
    paginatorInfo?: PaginatorInfoResolver<PaginatorInfo, any, Context>;
    data?: DataResolver<Post[], any, Context>;
  }

  export type PaginatorInfoResolver<
    R = PaginatorInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DataResolver<R = Post[], Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace PostResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    summary?: SummaryResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    type?: TypeResolver<PostType | null, any, Context>;
    publish_at?: PublishAtResolver<DateTimeTz | null, any, Context>;
    author?: AuthorResolver<User | null, any, Context>;
    category?: CategoryResolver<PostCategory | null, any, Context>;
    featured?: FeaturedResolver<boolean | null, any, Context>;
    enabled?: EnabledResolver<boolean | null, any, Context>;
    tags?: TagsResolver<string[] | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SummaryResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = PostType | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PublishAtResolver<
    R = DateTimeTz | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AuthorResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CategoryResolver<
    R = PostCategory | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FeaturedResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EnabledResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TagsResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PostTypeResolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    description?: DescriptionResolver<string | null, any, Context>;
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PostCategoryResolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    description?: DescriptionResolver<string | null, any, Context>;
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace ViewQueryResponseResolvers {
  export interface Resolvers<Context = any> {
    data?: DataResolver<Assoc | null, any, Context>;
    content?: ContentResolver<string | null, any, Context>;
  }

  export type DataResolver<
    R = Assoc | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
