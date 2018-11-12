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

/** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string. */
export type Uri = any;

/** An ISO-8601 encoded UTC date string. */
export type DateTime = any;

/** A string containing HTML code. */
export type Html = any;

/** A Git object ID. */
export type GitObjectId = any;

/** An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC. */
export type GitTimestamp = any;

/** Git SSH string */
export type GitSshRemote = any;

/** A valid x509 certificate string */
export type X509Certificate = any;

/** An ISO-8601 encoded date string. */
export type Date = any;
/** An object with an ID. */
export interface Node {
  id: string /** ID of the object. */;
}
/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
export interface Actor {
  avatarUrl: Uri /** A URL pointing to the actor's public avatar. */;
  login: string /** The username of the actor. */;
  resourcePath: Uri /** The HTTP path for this actor. */;
  url: Uri /** The HTTP URL for this actor. */;
}
/** Represents an owner of a registry package. */
export interface RegistryPackageOwner {
  id: string;
}
/** Represents an interface to search packages on an object. */
export interface RegistryPackageSearch {
  id: string;
}
/** Represents an owner of a Project. */
export interface ProjectOwner {
  id: string;
  project?: Project | null /** Find project by number. */;
  projects: ProjectConnection /** A list of projects under the owner. */;
  projectsResourcePath: Uri /** The HTTP path listing owners projects */;
  projectsUrl: Uri /** The HTTP URL listing owners projects */;
  viewerCanCreateProjects: boolean /** Can the current viewer create new projects on this owner. */;
}
/** An object that can be closed */
export interface Closable {
  closed: boolean /** `true` if the object is closed (definition of closed may depend on type) */;
  closedAt?: DateTime | null /** Identifies the date and time when the object was closed. */;
}
/** Entities that can be updated. */
export interface Updatable {
  viewerCanUpdate: boolean /** Check if the current viewer can update this object. */;
}
/** An object that can have users assigned to it. */
export interface Assignable {
  assignees: UserConnection /** A list of Users assigned to this object. */;
}
/** Represents an owner of a Repository. */
export interface RepositoryOwner {
  avatarUrl: Uri /** A URL pointing to the owner's public avatar. */;
  id: string;
  login: string /** The username used to login. */;
  pinnedRepositories: RepositoryConnection /** A list of repositories this user has pinned to their profile */;
  repositories: RepositoryConnection /** A list of repositories that the user owns. */;
  repository?: Repository | null /** Find Repository. */;
  resourcePath: Uri /** The HTTP URL for the owner. */;
  url: Uri /** The HTTP URL for the owner. */;
}
/** Entities that can be subscribed to for web and email notifications. */
export interface Subscribable {
  id: string;
  viewerCanSubscribe: boolean /** Check if the viewer is able to change their subscription status for the repository. */;
  viewerSubscription?: SubscriptionState | null /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */;
}
/** Things that can be starred. */
export interface Starrable {
  id: string;
  stargazers: StargazerConnection /** A list of users who have starred this starrable. */;
  viewerHasStarred: boolean /** Returns a boolean indicating whether the viewing user has starred this starrable. */;
}
/** Represents a type that can be retrieved by a URL. */
export interface UniformResourceLocatable {
  resourcePath: Uri /** The HTML path to this resource. */;
  url: Uri /** The URL to this resource. */;
}
/** A subset of repository info. */
export interface RepositoryInfo {
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  description?: string | null /** The description of the repository. */;
  descriptionHTML: Html /** The description of the repository rendered to HTML. */;
  forkCount: number /** Returns how many forks there are of this repository in the whole network. */;
  hasIssuesEnabled: boolean /** Indicates if the repository has issues feature enabled. */;
  hasWikiEnabled: boolean /** Indicates if the repository has wiki feature enabled. */;
  homepageUrl?: Uri | null /** The repository's URL. */;
  isArchived: boolean /** Indicates if the repository is unmaintained. */;
  isFork: boolean /** Identifies if the repository is a fork. */;
  isLocked: boolean /** Indicates if the repository has been locked or not. */;
  isMirror: boolean /** Identifies if the repository is a mirror. */;
  isPrivate: boolean /** Identifies if the repository is private. */;
  licenseInfo?: License | null /** The license associated with the repository */;
  lockReason?: RepositoryLockReason | null /** The reason the repository has been locked. */;
  mirrorUrl?: Uri | null /** The repository's original mirror URL. */;
  name: string /** The name of the repository. */;
  nameWithOwner: string /** The repository's name with owner. */;
  owner: RepositoryOwner /** The User owner of the repository. */;
  pushedAt?: DateTime | null /** Identifies when the repository was last pushed to. */;
  resourcePath: Uri /** The HTTP path for this repository */;
  shortDescriptionHTML: Html /** A description of the repository, rendered to HTML without any links in it. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL for this repository */;
}
/** Represents a comment. */
export interface Comment {
  author?: Actor | null /** The actor who authored the comment. */;
  authorAssociation: CommentAuthorAssociation /** Author's association with the subject of the comment. */;
  body: string /** The body as Markdown. */;
  bodyHTML: Html /** The body rendered to HTML. */;
  bodyText: string /** The body rendered to text. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  createdViaEmail: boolean /** Check if this comment was created via an email reply. */;
  editor?: Actor | null /** The actor who edited the comment. */;
  id: string;
  includesCreatedEdit: boolean /** Check if this comment was edited and includes an edit with the creation data */;
  lastEditedAt?: DateTime | null /** The moment the editor made the last edit */;
  publishedAt?: DateTime | null /** Identifies when the comment was published at. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  userContentEdits?: UserContentEditConnection | null /** A list of edits to this content. */;
  viewerDidAuthor: boolean /** Did the viewer author this comment. */;
}
/** Comments that can be updated. */
export interface UpdatableComment {
  viewerCannotUpdateReasons: CommentCannotUpdateReason[] /** Reasons why the current viewer can not update this comment. */;
}
/** An object that can have labels assigned to it. */
export interface Labelable {
  labels?: LabelConnection | null /** A list of labels associated with the object. */;
}
/** An object that can be locked. */
export interface Lockable {
  activeLockReason?: LockReason | null /** Reason that the conversation was locked. */;
  locked: boolean /** `true` if the object is locked */;
}
/** Represents a subject that can be reacted on. */
export interface Reactable {
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
  reactionGroups?:
    | ReactionGroup[]
    | null /** A list of reactions grouped by content left on the subject. */;
  reactions: ReactionConnection /** A list of Reactions left on the Issue. */;
  viewerCanReact: boolean /** Can user react to this subject */;
}
/** Represents a object that belongs to a repository. */
export interface RepositoryNode {
  repository: Repository /** The repository associated with this node. */;
}
/** Entities that can be deleted. */
export interface Deletable {
  viewerCanDelete: boolean /** Check if the current viewer can delete this object. */;
}
/** Represents a Git object. */
export interface GitObject {
  abbreviatedOid: string /** An abbreviated version of the Git object ID */;
  commitResourcePath: Uri /** The HTTP path for this Git object */;
  commitUrl: Uri /** The HTTP URL for this Git object */;
  id: string;
  oid: GitObjectId /** The Git object ID */;
  repository: Repository /** The Repository the Git object belongs to */;
}
/** Information about a signature (GPG or S/MIME) on a Commit or Tag. */
export interface GitSignature {
  email: string /** Email used to sign this object. */;
  isValid: boolean /** True if the signature is valid and verified by GitHub. */;
  payload: string /** Payload for GPG signing object. Raw ODB object without the signature header. */;
  signature: string /** ASCII-armored signature header from object. */;
  signer?: User | null /** GitHub user corresponding to the email signing this commit. */;
  state: GitSignatureState /** The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid. */;
  wasSignedByGitHub: boolean /** True if the signature was made with GitHub's signing key. */;
}
/** The query root of GitHub's GraphQL interface. */
export interface Query {
  codeOfConduct?: CodeOfConduct | null /** Look up a code of conduct by its key */;
  codesOfConduct?:
    | (CodeOfConduct | null)[]
    | null /** Look up a code of conduct by its key */;
  license?: License | null /** Look up an open source license by its key */;
  licenses: (License | null)[] /** Return a list of known open source licenses */;
  marketplaceCategories: MarketplaceCategory[] /** Get alphabetically sorted list of Marketplace categories */;
  marketplaceCategory?: MarketplaceCategory | null /** Look up a Marketplace category by its slug. */;
  marketplaceListing?: MarketplaceListing | null /** Look up a single Marketplace listing */;
  marketplaceListings: MarketplaceListingConnection /** Look up Marketplace listings */;
  meta: GitHubMetadata /** Return information about the GitHub instance */;
  node?: Node | null /** Fetches an object given its ID. */;
  nodes: (Node | null)[] /** Lookup nodes by a list of IDs. */;
  organization?: Organization | null /** Lookup a organization by login. */;
  rateLimit?: RateLimit | null /** The client's rate limit information. */;
  relay: Query /** Hack to workaround https://github.com/facebook/relay/issues/112 re-exposing the root query object */;
  repository?: Repository | null /** Lookup a given repository by the owner and repository name. */;
  repositoryOwner?: RepositoryOwner | null /** Lookup a repository owner (ie. either a User or an Organization) by login. */;
  resource?: UniformResourceLocatable | null /** Lookup resource by a URL. */;
  search: SearchResultItemConnection /** Perform a search across resources. */;
  topic?: Topic | null /** Look up a topic by name. */;
  user?: User | null /** Lookup a user by login. */;
  viewer: User /** The currently authenticated user. */;
}
/** The Code of Conduct for a repository */
export interface CodeOfConduct {
  body?: string | null /** The body of the CoC */;
  key: string /** The key for the CoC */;
  name: string /** The formal name of the CoC */;
  url?: Uri | null /** The path to the CoC */;
}
/** A repository's open source license */
export interface License extends Node {
  body: string /** The full text of the license */;
  conditions: (LicenseRule | null)[] /** The conditions set by the license */;
  description?:
    | string
    | null /** A human-readable description of the license */;
  featured: boolean /** Whether the license should be featured */;
  hidden: boolean /** Whether the license should be displayed in license pickers */;
  id: string;
  implementation?:
    | string
    | null /** Instructions on how to implement the license */;
  key: string /** The lowercased SPDX ID of the license */;
  limitations: (LicenseRule | null)[] /** The limitations set by the license */;
  name: string /** The license full name specified by <https://spdx.org/licenses> */;
  nickname?:
    | string
    | null /** Customary short name if applicable (e.g, GPLv3) */;
  permissions: (LicenseRule | null)[] /** The permissions set by the license */;
  pseudoLicense: boolean /** Whether the license is a pseudo-license placeholder (e.g., other, no-license) */;
  spdxId?:
    | string
    | null /** Short identifier specified by <https://spdx.org/licenses> */;
  url?: Uri | null /** URL to the license on <https://choosealicense.com> */;
}
/** Describes a License's conditions, permissions, and limitations */
export interface LicenseRule {
  description: string /** A description of the rule */;
  key: string /** The machine-readable rule key */;
  label: string /** The human-readable rule label */;
}
/** A public description of a Marketplace category. */
export interface MarketplaceCategory extends Node {
  description?: string | null /** The category's description. */;
  howItWorks?:
    | string
    | null /** The technical description of how apps listed in this category work with GitHub. */;
  id: string;
  name: string /** The category's name. */;
  primaryListingCount: number /** How many Marketplace listings have this as their primary category. */;
  resourcePath: Uri /** The HTTP path for this Marketplace category. */;
  secondaryListingCount: number /** How many Marketplace listings have this as their secondary category. */;
  slug: string /** The short name of the category used in its URL. */;
  url: Uri /** The HTTP URL for this Marketplace category. */;
}
/** A listing in the GitHub integration marketplace. */
export interface MarketplaceListing extends Node {
  app?: App | null /** The GitHub App this listing represents. */;
  companyUrl?: Uri | null /** URL to the listing owner's company site. */;
  configurationResourcePath: Uri /** The HTTP path for configuring access to the listing's integration or OAuth app */;
  configurationUrl: Uri /** The HTTP URL for configuring access to the listing's integration or OAuth app */;
  documentationUrl?: Uri | null /** URL to the listing's documentation. */;
  extendedDescription?:
    | string
    | null /** The listing's detailed description. */;
  extendedDescriptionHTML: Html /** The listing's detailed description rendered to HTML. */;
  fullDescription: string /** The listing's introductory description. */;
  fullDescriptionHTML: Html /** The listing's introductory description rendered to HTML. */;
  hasApprovalBeenRequested: boolean /** Whether this listing has been submitted for review from GitHub for approval to be displayed in the Marketplace. */;
  hasPublishedFreeTrialPlans: boolean /** Does this listing have any plans with a free trial? */;
  hasTermsOfService: boolean /** Does this listing have a terms of service link? */;
  howItWorks?:
    | string
    | null /** A technical description of how this app works with GitHub. */;
  howItWorksHTML: Html /** The listing's technical description rendered to HTML. */;
  id: string;
  installationUrl?: Uri | null /** URL to install the product to the viewer's account or organization. */;
  installedForViewer: boolean /** Whether this listing's app has been installed for the current viewer */;
  isApproved: boolean /** Whether this listing has been approved for display in the Marketplace. */;
  isDelisted: boolean /** Whether this listing has been removed from the Marketplace. */;
  isDraft: boolean /** Whether this listing is still an editable draft that has not been submitted for review and is not publicly visible in the Marketplace. */;
  isPaid: boolean /** Whether the product this listing represents is available as part of a paid plan. */;
  isRejected: boolean /** Whether this listing has been rejected by GitHub for display in the Marketplace. */;
  logoBackgroundColor: string /** The hex color code, without the leading '#', for the logo background. */;
  logoUrl?: Uri | null /** URL for the listing's logo image. */;
  name: string /** The listing's full name. */;
  normalizedShortDescription: string /** The listing's very short description without a trailing period or ampersands. */;
  pricingUrl?: Uri | null /** URL to the listing's detailed pricing. */;
  primaryCategory: MarketplaceCategory /** The category that best describes the listing. */;
  privacyPolicyUrl: Uri /** URL to the listing's privacy policy. */;
  resourcePath: Uri /** The HTTP path for the Marketplace listing. */;
  screenshotUrls: (
    | string
    | null)[] /** The URLs for the listing's screenshots. */;
  secondaryCategory?: MarketplaceCategory | null /** An alternate category that describes the listing. */;
  shortDescription: string /** The listing's very short description. */;
  slug: string /** The short name of the listing used in its URL. */;
  statusUrl?: Uri | null /** URL to the listing's status page. */;
  supportEmail?:
    | string
    | null /** An email address for support for this listing's app. */;
  supportUrl: Uri /** Either a URL or an email address for support for this listing's app. */;
  termsOfServiceUrl?: Uri | null /** URL to the listing's terms of service. */;
  url: Uri /** The HTTP URL for the Marketplace listing. */;
  viewerCanAddPlans: boolean /** Can the current viewer add plans for this Marketplace listing. */;
  viewerCanApprove: boolean /** Can the current viewer approve this Marketplace listing. */;
  viewerCanDelist: boolean /** Can the current viewer delist this Marketplace listing. */;
  viewerCanEdit: boolean /** Can the current viewer edit this Marketplace listing. */;
  viewerCanEditCategories: boolean /** Can the current viewer edit the primary and secondary category of thisMarketplace listing. */;
  viewerCanEditPlans: boolean /** Can the current viewer edit the plans for this Marketplace listing. */;
  viewerCanRedraft: boolean /** Can the current viewer return this Marketplace listing to draft stateso it becomes editable again. */;
  viewerCanReject: boolean /** Can the current viewer reject this Marketplace listing by returning it toan editable draft state or rejecting it entirely. */;
  viewerCanRequestApproval: boolean /** Can the current viewer request this listing be reviewed for display inthe Marketplace. */;
  viewerHasPurchased: boolean /** Indicates whether the current user has an active subscription to this Marketplace listing. */;
  viewerHasPurchasedForAllOrganizations: boolean /** Indicates if the current user has purchased a subscription to this Marketplace listingfor all of the organizations the user owns. */;
  viewerIsListingAdmin: boolean /** Does the current viewer role allow them to administer this Marketplace listing. */;
}
/** A GitHub App. */
export interface App extends Node {
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  description?: string | null /** The description of the app. */;
  id: string;
  logoBackgroundColor: string /** The hex color code, without the leading '#', for the logo background. */;
  logoUrl: Uri /** A URL pointing to the app's logo. */;
  name: string /** The name of the app. */;
  slug: string /** A slug based on the name of the app for use in URLs. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The URL to the app's homepage. */;
}
/** Look up Marketplace Listings */
export interface MarketplaceListingConnection {
  edges?: (MarketplaceListingEdge | null)[] | null /** A list of edges. */;
  nodes?: (MarketplaceListing | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface MarketplaceListingEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: MarketplaceListing | null /** The item at the end of the edge. */;
}
/** Information about pagination in a connection. */
export interface PageInfo {
  endCursor?:
    | string
    | null /** When paginating forwards, the cursor to continue. */;
  hasNextPage: boolean /** When paginating forwards, are there more items? */;
  hasPreviousPage: boolean /** When paginating backwards, are there more items? */;
  startCursor?:
    | string
    | null /** When paginating backwards, the cursor to continue. */;
}
/** Represents information about the GitHub instance. */
export interface GitHubMetadata {
  gitHubServicesSha: GitObjectId /** Returns a String that's a SHA of `github-services` */;
  gitIpAddresses?:
    | string[]
    | null /** IP addresses that users connect to for git operations */;
  hookIpAddresses?:
    | string[]
    | null /** IP addresses that service hooks are sent from */;
  importerIpAddresses?:
    | string[]
    | null /** IP addresses that the importer connects from */;
  isPasswordAuthenticationVerifiable: boolean /** Whether or not users are verified */;
  pagesIpAddresses?:
    | string[]
    | null /** IP addresses for GitHub Pages' A records */;
}
/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export interface Organization
  extends Node,
    Actor,
    RegistryPackageOwner,
    RegistryPackageSearch,
    ProjectOwner,
    RepositoryOwner,
    UniformResourceLocatable {
  avatarUrl: Uri /** A URL pointing to the organization's public avatar. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  description?:
    | string
    | null /** The organization's public profile description. */;
  email?: string | null /** The organization's public email. */;
  id: string;
  isVerified: boolean /** Whether the organization has verified its profile email and website. */;
  location?: string | null /** The organization's public profile location. */;
  login: string /** The organization's login name. */;
  members: UserConnection /** A list of users who are members of this organization. */;
  name?: string | null /** The organization's public profile name. */;
  newTeamResourcePath: Uri /** The HTTP path creating a new team */;
  newTeamUrl: Uri /** The HTTP URL creating a new team */;
  organizationBillingEmail?:
    | string
    | null /** The billing email for the organization. */;
  pinnedRepositories: RepositoryConnection /** A list of repositories this user has pinned to their profile */;
  project?: Project | null /** Find project by number. */;
  projects: ProjectConnection /** A list of projects under the owner. */;
  projectsResourcePath: Uri /** The HTTP path listing organization's projects */;
  projectsUrl: Uri /** The HTTP URL listing organization's projects */;
  repositories: RepositoryConnection /** A list of repositories that the user owns. */;
  repository?: Repository | null /** Find Repository. */;
  requiresTwoFactorAuthentication?:
    | boolean
    | null /** When true the organization requires all members, billing managers, and outside collaborators to enable two-factor authentication. */;
  resourcePath: Uri /** The HTTP path for this organization. */;
  samlIdentityProvider?: OrganizationIdentityProvider | null /** The Organization's SAML Identity Providers */;
  team?: Team | null /** Find an organization's team by its slug. */;
  teams: TeamConnection /** A list of teams in this organization. */;
  teamsResourcePath: Uri /** The HTTP path listing organization's teams */;
  teamsUrl: Uri /** The HTTP URL listing organization's teams */;
  url: Uri /** The HTTP URL for this organization. */;
  viewerCanAdminister: boolean /** Organization is adminable by the viewer. */;
  viewerCanCreateProjects: boolean /** Can the current viewer create new projects on this owner. */;
  viewerCanCreateRepositories: boolean /** Viewer can create repositories on this organization */;
  viewerCanCreateTeams: boolean /** Viewer can create teams on this organization. */;
  viewerIsAMember: boolean /** Viewer is an active member of this organization. */;
  websiteUrl?: Uri | null /** The organization's public profile URL. */;
}
/** Projects manage issues, pull requests and notes within a project owner. */
export interface Project extends Node, Closable, Updatable {
  body?: string | null /** The project's description body. */;
  bodyHTML: Html /** The projects description body rendered to HTML. */;
  closed: boolean /** `true` if the object is closed (definition of closed may depend on type) */;
  closedAt?: DateTime | null /** Identifies the date and time when the object was closed. */;
  columns: ProjectColumnConnection /** List of columns in the project */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  creator?: Actor | null /** The actor who originally created the project. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
  name: string /** The project's name. */;
  number: number /** The project's number. */;
  owner: ProjectOwner /** The project's owner. Currently limited to repositories and organizations. */;
  pendingCards: ProjectCardConnection /** List of pending cards in this project */;
  resourcePath: Uri /** The HTTP path for this project */;
  state: ProjectState /** Whether the project is open or closed. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL for this project */;
  viewerCanUpdate: boolean /** Check if the current viewer can update this object. */;
}
/** The connection type for ProjectColumn. */
export interface ProjectColumnConnection {
  edges?: (ProjectColumnEdge | null)[] | null /** A list of edges. */;
  nodes?: (ProjectColumn | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface ProjectColumnEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: ProjectColumn | null /** The item at the end of the edge. */;
}
/** A column inside a project. */
export interface ProjectColumn extends Node {
  cards: ProjectCardConnection /** List of cards in the column */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
  name: string /** The project column's name. */;
  project: Project /** The project that contains this column. */;
  purpose?: ProjectColumnPurpose | null /** The semantic purpose of the column */;
  resourcePath: Uri /** The HTTP path for this project column */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL for this project column */;
}
/** The connection type for ProjectCard. */
export interface ProjectCardConnection {
  edges?: (ProjectCardEdge | null)[] | null /** A list of edges. */;
  nodes?: (ProjectCard | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface ProjectCardEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: ProjectCard | null /** The item at the end of the edge. */;
}
/** A card in a project. */
export interface ProjectCard extends Node {
  column?: ProjectColumn | null /** The project column this card is associated under. A card may only belong to oneproject column at a time. The column field will be null if the card is createdin a pending state and has yet to be associated with a column. Once cards areassociated with a column, they will not become pending in the future. */;
  content?: ProjectCardItem | null /** The card content item */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  creator?: Actor | null /** The actor who created this card */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
  isArchived: boolean /** Whether the card is archived */;
  note?: string | null /** The card note */;
  project: Project /** The project that contains this card. */;
  resourcePath: Uri /** The HTTP path for this card */;
  state?: ProjectCardState | null /** The state of ProjectCard */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL for this card */;
}
/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export interface Issue
  extends Node,
    Assignable,
    Closable,
    Comment,
    Updatable,
    UpdatableComment,
    Labelable,
    Lockable,
    Reactable,
    RepositoryNode,
    Subscribable,
    UniformResourceLocatable {
  activeLockReason?: LockReason | null /** Reason that the conversation was locked. */;
  assignees: UserConnection /** A list of Users assigned to this object. */;
  author?: Actor | null /** The actor who authored the comment. */;
  authorAssociation: CommentAuthorAssociation /** Author's association with the subject of the comment. */;
  body: string /** Identifies the body of the issue. */;
  bodyHTML: Html /** Identifies the body of the issue rendered to HTML. */;
  bodyText: string /** Identifies the body of the issue rendered to text. */;
  closed: boolean /** `true` if the object is closed (definition of closed may depend on type) */;
  closedAt?: DateTime | null /** Identifies the date and time when the object was closed. */;
  comments: IssueCommentConnection /** A list of comments associated with the Issue. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  createdViaEmail: boolean /** Check if this comment was created via an email reply. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  editor?: Actor | null /** The actor who edited the comment. */;
  id: string;
  includesCreatedEdit: boolean /** Check if this comment was edited and includes an edit with the creation data */;
  labels?: LabelConnection | null /** A list of labels associated with the object. */;
  lastEditedAt?: DateTime | null /** The moment the editor made the last edit */;
  locked: boolean /** `true` if the object is locked */;
  milestone?: Milestone | null /** Identifies the milestone associated with the issue. */;
  number: number /** Identifies the issue number. */;
  participants: UserConnection /** A list of Users that are participating in the Issue conversation. */;
  projectCards: ProjectCardConnection /** List of project cards associated with this issue. */;
  publishedAt?: DateTime | null /** Identifies when the comment was published at. */;
  reactionGroups?:
    | ReactionGroup[]
    | null /** A list of reactions grouped by content left on the subject. */;
  reactions: ReactionConnection /** A list of Reactions left on the Issue. */;
  repository: Repository /** The repository associated with this node. */;
  resourcePath: Uri /** The HTTP path for this issue */;
  state: IssueState /** Identifies the state of the issue. */;
  timeline: IssueTimelineConnection /** A list of events, comments, commits, etc. associated with the issue. */;
  title: string /** Identifies the issue title. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL for this issue */;
  userContentEdits?: UserContentEditConnection | null /** A list of edits to this content. */;
  viewerCanReact: boolean /** Can user react to this subject */;
  viewerCanSubscribe: boolean /** Check if the viewer is able to change their subscription status for the repository. */;
  viewerCanUpdate: boolean /** Check if the current viewer can update this object. */;
  viewerCannotUpdateReasons: CommentCannotUpdateReason[] /** Reasons why the current viewer can not update this comment. */;
  viewerDidAuthor: boolean /** Did the viewer author this comment. */;
  viewerSubscription?: SubscriptionState | null /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */;
}
/** The connection type for User. */
export interface UserConnection {
  edges?: (UserEdge | null)[] | null /** A list of edges. */;
  nodes?: (User | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** Represents a user. */
export interface UserEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: User | null /** The item at the end of the edge. */;
}
/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export interface User
  extends Node,
    Actor,
    RegistryPackageOwner,
    RegistryPackageSearch,
    RepositoryOwner,
    UniformResourceLocatable {
  avatarUrl: Uri /** A URL pointing to the user's public avatar. */;
  bio?: string | null /** The user's public profile bio. */;
  bioHTML: Html /** The user's public profile bio as HTML. */;
  commitComments: CommitCommentConnection /** A list of commit comments made by this user. */;
  company?: string | null /** The user's public profile company. */;
  companyHTML: Html /** The user's public profile company as HTML. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  email: string /** The user's publicly visible profile email. */;
  followers: FollowerConnection /** A list of users the given user is followed by. */;
  following: FollowingConnection /** A list of users the given user is following. */;
  gist?: Gist | null /** Find gist by repo name. */;
  gistComments: GistCommentConnection /** A list of gist comments made by this user. */;
  gists: GistConnection /** A list of the Gists the user has created. */;
  id: string;
  isBountyHunter: boolean /** Whether or not this user is a participant in the GitHub Security Bug Bounty. */;
  isCampusExpert: boolean /** Whether or not this user is a participant in the GitHub Campus Experts Program. */;
  isDeveloperProgramMember: boolean /** Whether or not this user is a GitHub Developer Program member. */;
  isEmployee: boolean /** Whether or not this user is a GitHub employee. */;
  isHireable: boolean /** Whether or not the user has marked themselves as for hire. */;
  isSiteAdmin: boolean /** Whether or not this user is a site administrator. */;
  isViewer: boolean /** Whether or not this user is the viewing user. */;
  issueComments: IssueCommentConnection /** A list of issue comments made by this user. */;
  issues: IssueConnection /** A list of issues associated with this user. */;
  location?: string | null /** The user's public profile location. */;
  login: string /** The username used to login. */;
  name?: string | null /** The user's public profile name. */;
  organization?: Organization | null /** Find an organization by its login that the user belongs to. */;
  organizations: OrganizationConnection /** A list of organizations the user belongs to. */;
  pinnedRepositories: RepositoryConnection /** A list of repositories this user has pinned to their profile */;
  publicKeys: PublicKeyConnection /** A list of public keys associated with this user. */;
  pullRequests: PullRequestConnection /** A list of pull requests associated with this user. */;
  repositories: RepositoryConnection /** A list of repositories that the user owns. */;
  repositoriesContributedTo: RepositoryConnection /** A list of repositories that the user recently contributed to. */;
  repository?: Repository | null /** Find Repository. */;
  resourcePath: Uri /** The HTTP path for this user */;
  starredRepositories: StarredRepositoryConnection /** Repositories the user has starred. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL for this user */;
  viewerCanFollow: boolean /** Whether or not the viewer is able to follow the user. */;
  viewerIsFollowing: boolean /** Whether or not this user is followed by the viewer. */;
  watching: RepositoryConnection /** A list of repositories the given user is watching. */;
  websiteUrl?: Uri | null /** A URL pointing to the user's public website/blog. */;
}
/** A list of repositories owned by the subject. */
export interface RepositoryConnection {
  edges?: (RepositoryEdge | null)[] | null /** A list of edges. */;
  nodes?: (Repository | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
  totalDiskUsage: number /** The total size in kilobytes of all repositories in the connection. */;
}
/** An edge in a connection. */
export interface RepositoryEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Repository | null /** The item at the end of the edge. */;
}
/** A repository contains the content for a project. */
export interface Repository
  extends Node,
    ProjectOwner,
    RegistryPackageOwner,
    Subscribable,
    Starrable,
    UniformResourceLocatable,
    RepositoryInfo {
  assignableUsers: UserConnection /** A list of users that can be assigned to issues in this repository. */;
  branchProtectionRules: BranchProtectionRuleConnection /** A list of branch protection rules for this repository. */;
  codeOfConduct?: CodeOfConduct | null /** Returns the code of conduct for this repository */;
  collaborators?: RepositoryCollaboratorConnection | null /** A list of collaborators associated with the repository. */;
  commitComments: CommitCommentConnection /** A list of commit comments associated with the repository. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  defaultBranchRef?: Ref | null /** The Ref associated with the repository's default branch. */;
  deployKeys: DeployKeyConnection /** A list of deploy keys that are on this repository. */;
  deployments: DeploymentConnection /** Deployments associated with the repository */;
  description?: string | null /** The description of the repository. */;
  descriptionHTML: Html /** The description of the repository rendered to HTML. */;
  diskUsage?:
    | number
    | null /** The number of kilobytes this repository occupies on disk. */;
  forkCount: number /** Returns how many forks there are of this repository in the whole network. */;
  forks: RepositoryConnection /** A list of direct forked repositories. */;
  hasIssuesEnabled: boolean /** Indicates if the repository has issues feature enabled. */;
  hasWikiEnabled: boolean /** Indicates if the repository has wiki feature enabled. */;
  homepageUrl?: Uri | null /** The repository's URL. */;
  id: string;
  isArchived: boolean /** Indicates if the repository is unmaintained. */;
  isFork: boolean /** Identifies if the repository is a fork. */;
  isLocked: boolean /** Indicates if the repository has been locked or not. */;
  isMirror: boolean /** Identifies if the repository is a mirror. */;
  isPrivate: boolean /** Identifies if the repository is private. */;
  issue?: Issue | null /** Returns a single issue from the current repository by number. */;
  issueOrPullRequest?: IssueOrPullRequest | null /** Returns a single issue-like object from the current repository by number. */;
  issues: IssueConnection /** A list of issues that have been opened in the repository. */;
  label?: Label | null /** Returns a single label by name */;
  labels?: LabelConnection | null /** A list of labels associated with the repository. */;
  languages?: LanguageConnection | null /** A list containing a breakdown of the language composition of the repository. */;
  licenseInfo?: License | null /** The license associated with the repository */;
  lockReason?: RepositoryLockReason | null /** The reason the repository has been locked. */;
  mentionableUsers: UserConnection /** A list of Users that can be mentioned in the context of the repository. */;
  mergeCommitAllowed: boolean /** Whether or not PRs are merged with a merge commit on this repository. */;
  milestone?: Milestone | null /** Returns a single milestone from the current repository by number. */;
  milestones?: MilestoneConnection | null /** A list of milestones associated with the repository. */;
  mirrorUrl?: Uri | null /** The repository's original mirror URL. */;
  name: string /** The name of the repository. */;
  nameWithOwner: string /** The repository's name with owner. */;
  object?: GitObject | null /** A Git object in the repository */;
  owner: RepositoryOwner /** The User owner of the repository. */;
  parent?: Repository | null /** The repository parent, if this is a fork. */;
  primaryLanguage?: Language | null /** The primary language of the repository's code. */;
  project?: Project | null /** Find project by number. */;
  projects: ProjectConnection /** A list of projects under the owner. */;
  projectsResourcePath: Uri /** The HTTP path listing the repository's projects */;
  projectsUrl: Uri /** The HTTP URL listing the repository's projects */;
  protectedBranches: ProtectedBranchConnection /** A list of protected branches that are on this repository. */;
  pullRequest?: PullRequest | null /** Returns a single pull request from the current repository by number. */;
  pullRequests: PullRequestConnection /** A list of pull requests that have been opened in the repository. */;
  pushedAt?: DateTime | null /** Identifies when the repository was last pushed to. */;
  rebaseMergeAllowed: boolean /** Whether or not rebase-merging is enabled on this repository. */;
  ref?: Ref | null /** Fetch a given ref from the repository */;
  refs?: RefConnection | null /** Fetch a list of refs from the repository */;
  release?: Release | null /** Lookup a single release given various criteria. */;
  releases: ReleaseConnection /** List of releases which are dependent on this repository. */;
  repositoryTopics: RepositoryTopicConnection /** A list of applied repository-topic associations for this repository. */;
  resourcePath: Uri /** The HTTP path for this repository */;
  shortDescriptionHTML: Html /** A description of the repository, rendered to HTML without any links in it. */;
  squashMergeAllowed: boolean /** Whether or not squash-merging is enabled on this repository. */;
  sshUrl: GitSshRemote /** The SSH URL to clone this repository */;
  stargazers: StargazerConnection /** A list of users who have starred this starrable. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL for this repository */;
  viewerCanAdminister: boolean /** Indicates whether the viewer has admin permissions on this repository. */;
  viewerCanCreateProjects: boolean /** Can the current viewer create new projects on this owner. */;
  viewerCanSubscribe: boolean /** Check if the viewer is able to change their subscription status for the repository. */;
  viewerCanUpdateTopics: boolean /** Indicates whether the viewer can update the topics of this repository. */;
  viewerHasStarred: boolean /** Returns a boolean indicating whether the viewing user has starred this starrable. */;
  viewerPermission?: RepositoryPermission | null /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */;
  viewerSubscription?: SubscriptionState | null /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */;
  watchers: UserConnection /** A list of users watching the repository. */;
}
/** The connection type for User. */
export interface StargazerConnection {
  edges?: (StargazerEdge | null)[] | null /** A list of edges. */;
  nodes?: (User | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** Represents a user that's starred a repository. */
export interface StargazerEdge {
  cursor: string /** A cursor for use in pagination. */;
  node: User;
  starredAt: DateTime /** Identifies when the item was starred. */;
}
/** The connection type for BranchProtectionRule. */
export interface BranchProtectionRuleConnection {
  edges?: (BranchProtectionRuleEdge | null)[] | null /** A list of edges. */;
  nodes?: (BranchProtectionRule | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface BranchProtectionRuleEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: BranchProtectionRule | null /** The item at the end of the edge. */;
}
/** A branch protection rule. */
export interface BranchProtectionRule extends Node {
  branchProtectionRuleConflicts: BranchProtectionRuleConflictConnection /** A list of conflicts matching branches protection rule and other branch protection rules */;
  creator?: Actor | null /** The actor who created this branch protection rule. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  dismissesStaleReviews: boolean /** Will new commits pushed to matching branches dismiss pull request review approvals. */;
  id: string;
  isAdminEnforced: boolean /** Can admins overwrite branch protection. */;
  matchingRefs: RefConnection /** Repository refs that are protected by this rule */;
  pattern: string /** Identifies the protection rule pattern. */;
  pushAllowances: PushAllowanceConnection /** A list push allowances for this branch protection rule. */;
  repository?: Repository | null /** The repository associated with this branch protection rule. */;
  requiredApprovingReviewCount?:
    | number
    | null /** Number of approving reviews required to update matching branches. */;
  requiredStatusCheckContexts?:
    | (string | null)[]
    | null /** List of required status check contexts that must pass for commits to be accepted to matching branches. */;
  requiresApprovingReviews: boolean /** Are approving reviews required to update matching branches. */;
  requiresCommitSignatures: boolean /** Are commits required to be signed. */;
  requiresStatusChecks: boolean /** Are status checks required to update matching branches. */;
  requiresStrictStatusChecks: boolean /** Are branches required to be up to date before merging. */;
  restrictsPushes: boolean /** Is pushing to matching branches restricted. */;
  restrictsReviewDismissals: boolean /** Is dismissal of pull request reviews restricted. */;
  reviewDismissalAllowances: ReviewDismissalAllowanceConnection /** A list review dismissal allowances for this branch protection rule. */;
}
/** The connection type for BranchProtectionRuleConflict. */
export interface BranchProtectionRuleConflictConnection {
  edges?:
    | (BranchProtectionRuleConflictEdge | null)[]
    | null /** A list of edges. */;
  nodes?:
    | (BranchProtectionRuleConflict | null)[]
    | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface BranchProtectionRuleConflictEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: BranchProtectionRuleConflict | null /** The item at the end of the edge. */;
}
/** A conflict between two branch protection rules. */
export interface BranchProtectionRuleConflict {
  branchProtectionRule?: BranchProtectionRule | null /** Identifies the branch protection rule. */;
  conflictingBranchProtectionRule?: BranchProtectionRule | null /** Identifies the conflicting branch protection rule. */;
  ref?: Ref | null /** Identifies the branch ref that has conflicting rules */;
}
/** Represents a Git reference. */
export interface Ref extends Node {
  associatedPullRequests: PullRequestConnection /** A list of pull requests with this ref as the head ref. */;
  id: string;
  name: string /** The ref name. */;
  prefix: string /** The ref's prefix, such as `refs/heads/` or `refs/tags/`. */;
  repository: Repository /** The repository the ref belongs to. */;
  target: GitObject /** The object the ref points to. */;
}
/** The connection type for PullRequest. */
export interface PullRequestConnection {
  edges?: (PullRequestEdge | null)[] | null /** A list of edges. */;
  nodes?: (PullRequest | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface PullRequestEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: PullRequest | null /** The item at the end of the edge. */;
}
/** A repository pull request. */
export interface PullRequest
  extends Node,
    Assignable,
    Closable,
    Comment,
    Updatable,
    UpdatableComment,
    Labelable,
    Lockable,
    Reactable,
    RepositoryNode,
    Subscribable,
    UniformResourceLocatable {
  activeLockReason?: LockReason | null /** Reason that the conversation was locked. */;
  additions: number /** The number of additions in this pull request. */;
  assignees: UserConnection /** A list of Users assigned to this object. */;
  author?: Actor | null /** The actor who authored the comment. */;
  authorAssociation: CommentAuthorAssociation /** Author's association with the subject of the comment. */;
  baseRef?: Ref | null /** Identifies the base Ref associated with the pull request. */;
  baseRefName: string /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */;
  baseRefOid: GitObjectId /** Identifies the oid of the base ref associated with the pull request, even if the ref has been deleted. */;
  body: string /** The body as Markdown. */;
  bodyHTML: Html /** The body rendered to HTML. */;
  bodyText: string /** The body rendered to text. */;
  changedFiles: number /** The number of changed files in this pull request. */;
  closed: boolean /** `true` if the pull request is closed */;
  closedAt?: DateTime | null /** Identifies the date and time when the object was closed. */;
  comments: IssueCommentConnection /** A list of comments associated with the pull request. */;
  commits: PullRequestCommitConnection /** A list of commits present in this pull request's head branch not present in the base branch. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  createdViaEmail: boolean /** Check if this comment was created via an email reply. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  deletions: number /** The number of deletions in this pull request. */;
  editor?: Actor | null /** The actor who edited this pull request's body. */;
  headRef?: Ref | null /** Identifies the head Ref associated with the pull request. */;
  headRefName: string /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */;
  headRefOid: GitObjectId /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */;
  headRepository?: Repository | null /** The repository associated with this pull request's head Ref. */;
  headRepositoryOwner?: RepositoryOwner | null /** The owner of the repository associated with this pull request's head Ref. */;
  id: string;
  includesCreatedEdit: boolean /** Check if this comment was edited and includes an edit with the creation data */;
  isCrossRepository: boolean /** The head and base repositories are different. */;
  labels?: LabelConnection | null /** A list of labels associated with the object. */;
  lastEditedAt?: DateTime | null /** The moment the editor made the last edit */;
  locked: boolean /** `true` if the pull request is locked */;
  maintainerCanModify: boolean /** Indicates whether maintainers can modify the pull request. */;
  mergeCommit?: Commit | null /** The commit that was created when this pull request was merged. */;
  mergeable: MergeableState /** Whether or not the pull request can be merged based on the existence of merge conflicts. */;
  merged: boolean /** Whether or not the pull request was merged. */;
  mergedAt?: DateTime | null /** The date and time that the pull request was merged. */;
  mergedBy?: Actor | null /** The actor who merged the pull request. */;
  milestone?: Milestone | null /** Identifies the milestone associated with the pull request. */;
  number: number /** Identifies the pull request number. */;
  participants: UserConnection /** A list of Users that are participating in the Pull Request conversation. */;
  permalink: Uri /** The permalink to the pull request. */;
  potentialMergeCommit?: Commit | null /** The commit that GitHub automatically generated to test if this pull request could be merged. This field will not return a value if the pull request is merged, or if the test merge commit is still being generated. See the `mergeable` field for more details on the mergeability of the pull request. */;
  projectCards: ProjectCardConnection /** List of project cards associated with this pull request. */;
  publishedAt?: DateTime | null /** Identifies when the comment was published at. */;
  reactionGroups?:
    | ReactionGroup[]
    | null /** A list of reactions grouped by content left on the subject. */;
  reactions: ReactionConnection /** A list of Reactions left on the Issue. */;
  repository: Repository /** The repository associated with this node. */;
  resourcePath: Uri /** The HTTP path for this pull request. */;
  revertResourcePath: Uri /** The HTTP path for reverting this pull request. */;
  revertUrl: Uri /** The HTTP URL for reverting this pull request. */;
  reviewRequests?: ReviewRequestConnection | null /** A list of review requests associated with the pull request. */;
  reviews?: PullRequestReviewConnection | null /** A list of reviews associated with the pull request. */;
  state: PullRequestState /** Identifies the state of the pull request. */;
  suggestedReviewers: (SuggestedReviewer | null)[] /** A list of reviewer suggestions based on commit history and past review comments. */;
  timeline: PullRequestTimelineConnection /** A list of events, comments, commits, etc. associated with the pull request. */;
  title: string /** Identifies the pull request title. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL for this pull request. */;
  userContentEdits?: UserContentEditConnection | null /** A list of edits to this content. */;
  viewerCanApplySuggestion: boolean /** Whether or not the viewer can apply suggestion. */;
  viewerCanReact: boolean /** Can user react to this subject */;
  viewerCanSubscribe: boolean /** Check if the viewer is able to change their subscription status for the repository. */;
  viewerCanUpdate: boolean /** Check if the current viewer can update this object. */;
  viewerCannotUpdateReasons: CommentCannotUpdateReason[] /** Reasons why the current viewer can not update this comment. */;
  viewerDidAuthor: boolean /** Did the viewer author this comment. */;
  viewerSubscription?: SubscriptionState | null /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */;
}
/** A list of edits to content. */
export interface UserContentEditConnection {
  edges?: (UserContentEditEdge | null)[] | null /** A list of edges. */;
  nodes?: (UserContentEdit | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface UserContentEditEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: UserContentEdit | null /** The item at the end of the edge. */;
}
/** An edit on user content */
export interface UserContentEdit extends Node {
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  deletedAt?: DateTime | null /** Identifies the date and time when the object was deleted. */;
  deletedBy?: Actor | null /** The actor who deleted this content */;
  diff?: string | null /** A summary of the changes for this edit */;
  editedAt: DateTime /** When this content was edited */;
  editor?: Actor | null /** The actor who edited this content */;
  id: string;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
}
/** The connection type for Label. */
export interface LabelConnection {
  edges?: (LabelEdge | null)[] | null /** A list of edges. */;
  nodes?: (Label | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface LabelEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Label | null /** The item at the end of the edge. */;
}
/** A label for categorizing Issues or Milestones with a given Repository. */
export interface Label extends Node {
  color: string /** Identifies the label color. */;
  createdAt?: DateTime | null /** Identifies the date and time when the label was created. */;
  description?: string | null /** A brief description of this label. */;
  id: string;
  isDefault: boolean /** Indicates whether or not this is a default label. */;
  issues: IssueConnection /** A list of issues associated with this label. */;
  name: string /** Identifies the label name. */;
  pullRequests: PullRequestConnection /** A list of pull requests associated with this label. */;
  repository: Repository /** The repository associated with this label. */;
  resourcePath: Uri /** The HTTP path for this label. */;
  updatedAt?: DateTime | null /** Identifies the date and time when the label was last updated. */;
  url: Uri /** The HTTP URL for this label. */;
}
/** The connection type for Issue. */
export interface IssueConnection {
  edges?: (IssueEdge | null)[] | null /** A list of edges. */;
  nodes?: (Issue | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface IssueEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Issue | null /** The item at the end of the edge. */;
}
/** A group of emoji reactions to a particular piece of content. */
export interface ReactionGroup {
  content: ReactionContent /** Identifies the emoji reaction. */;
  createdAt?: DateTime | null /** Identifies when the reaction was created. */;
  subject: Reactable /** The subject that was reacted to. */;
  users: ReactingUserConnection /** Users who have reacted to the reaction subject with the emotion represented by this reaction group */;
  viewerHasReacted: boolean /** Whether or not the authenticated user has left a reaction on the subject. */;
}
/** The connection type for User. */
export interface ReactingUserConnection {
  edges?: (ReactingUserEdge | null)[] | null /** A list of edges. */;
  nodes?: (User | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** Represents a user that's made a reaction. */
export interface ReactingUserEdge {
  cursor: string /** A cursor for use in pagination. */;
  node: User;
  reactedAt: DateTime /** The moment when the user made the reaction. */;
}
/** A list of reactions that have been left on the subject. */
export interface ReactionConnection {
  edges?: (ReactionEdge | null)[] | null /** A list of edges. */;
  nodes?: (Reaction | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
  viewerHasReacted: boolean /** Whether or not the authenticated user has left a reaction on the subject. */;
}
/** An edge in a connection. */
export interface ReactionEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Reaction | null /** The item at the end of the edge. */;
}
/** An emoji reaction to a particular piece of content. */
export interface Reaction extends Node {
  content: ReactionContent /** Identifies the emoji reaction. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
  reactable: Reactable /** The reactable piece of content */;
  user?: User | null /** Identifies the user who created this reaction. */;
}
/** The connection type for IssueComment. */
export interface IssueCommentConnection {
  edges?: (IssueCommentEdge | null)[] | null /** A list of edges. */;
  nodes?: (IssueComment | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface IssueCommentEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: IssueComment | null /** The item at the end of the edge. */;
}
/** Represents a comment on an Issue. */
export interface IssueComment
  extends Node,
    Comment,
    Deletable,
    Updatable,
    UpdatableComment,
    Reactable,
    RepositoryNode {
  author?: Actor | null /** The actor who authored the comment. */;
  authorAssociation: CommentAuthorAssociation /** Author's association with the subject of the comment. */;
  body: string /** The body as Markdown. */;
  bodyHTML: Html /** The body rendered to HTML. */;
  bodyText: string /** The body rendered to text. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  createdViaEmail: boolean /** Check if this comment was created via an email reply. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  editor?: Actor | null /** The actor who edited the comment. */;
  id: string;
  includesCreatedEdit: boolean /** Check if this comment was edited and includes an edit with the creation data */;
  issue: Issue /** Identifies the issue associated with the comment. */;
  lastEditedAt?: DateTime | null /** The moment the editor made the last edit */;
  publishedAt?: DateTime | null /** Identifies when the comment was published at. */;
  pullRequest?: PullRequest | null /** Returns the pull request associated with the comment, if this comment was made on apull request. */;
  reactionGroups?:
    | ReactionGroup[]
    | null /** A list of reactions grouped by content left on the subject. */;
  reactions: ReactionConnection /** A list of Reactions left on the Issue. */;
  repository: Repository /** The repository associated with this node. */;
  resourcePath: Uri /** The HTTP path for this issue comment */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL for this issue comment */;
  userContentEdits?: UserContentEditConnection | null /** A list of edits to this content. */;
  viewerCanDelete: boolean /** Check if the current viewer can delete this object. */;
  viewerCanReact: boolean /** Can user react to this subject */;
  viewerCanUpdate: boolean /** Check if the current viewer can update this object. */;
  viewerCannotUpdateReasons: CommentCannotUpdateReason[] /** Reasons why the current viewer can not update this comment. */;
  viewerDidAuthor: boolean /** Did the viewer author this comment. */;
}
/** The connection type for PullRequestCommit. */
export interface PullRequestCommitConnection {
  edges?: (PullRequestCommitEdge | null)[] | null /** A list of edges. */;
  nodes?: (PullRequestCommit | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface PullRequestCommitEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: PullRequestCommit | null /** The item at the end of the edge. */;
}
/** Represents a Git commit part of a pull request. */
export interface PullRequestCommit extends Node, UniformResourceLocatable {
  commit: Commit /** The Git commit object */;
  id: string;
  pullRequest: PullRequest /** The pull request this commit belongs to */;
  resourcePath: Uri /** The HTTP path for this pull request commit */;
  url: Uri /** The HTTP URL for this pull request commit */;
}
/** Represents a Git commit. */
export interface Commit extends Node, GitObject, Subscribable {
  abbreviatedOid: string /** An abbreviated version of the Git object ID */;
  additions: number /** The number of additions in this commit. */;
  author?: GitActor | null /** Authorship details of the commit. */;
  authoredByCommitter: boolean /** Check if the committer and the author match. */;
  authoredDate: DateTime /** The datetime when this commit was authored. */;
  blame: Blame /** Fetches `git blame` information. */;
  changedFiles: number /** The number of changed files in this commit. */;
  comments: CommitCommentConnection /** Comments made on the commit. */;
  commitResourcePath: Uri /** The HTTP path for this Git object */;
  commitUrl: Uri /** The HTTP URL for this Git object */;
  committedDate: DateTime /** The datetime when this commit was committed. */;
  committedViaWeb: boolean /** Check if commited via GitHub web UI. */;
  committer?: GitActor | null /** Committership details of the commit. */;
  deletions: number /** The number of deletions in this commit. */;
  history: CommitHistoryConnection /** The linear commit history starting from (and including) this commit, in the same order as `git log`. */;
  id: string;
  message: string /** The Git commit message */;
  messageBody: string /** The Git commit message body */;
  messageBodyHTML: Html /** The commit message body rendered to HTML. */;
  messageHeadline: string /** The Git commit message headline */;
  messageHeadlineHTML: Html /** The commit message headline rendered to HTML. */;
  oid: GitObjectId /** The Git object ID */;
  parents: CommitConnection /** The parents of a commit. */;
  pushedDate?: DateTime | null /** The datetime when this commit was pushed. */;
  repository: Repository /** The Repository this commit belongs to */;
  resourcePath: Uri /** The HTTP path for this commit */;
  signature?: GitSignature | null /** Commit signing information, if present. */;
  status?: Status | null /** Status information for this commit */;
  tarballUrl: Uri /** Returns a URL to download a tarball archive for a repository.Note: For private repositories, these links are temporary and expire after five minutes. */;
  tree: Tree /** Commit's root Tree */;
  treeResourcePath: Uri /** The HTTP path for the tree of this commit */;
  treeUrl: Uri /** The HTTP URL for the tree of this commit */;
  url: Uri /** The HTTP URL for this commit */;
  viewerCanSubscribe: boolean /** Check if the viewer is able to change their subscription status for the repository. */;
  viewerSubscription?: SubscriptionState | null /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */;
  zipballUrl: Uri /** Returns a URL to download a zipball archive for a repository.Note: For private repositories, these links are temporary and expire after five minutes. */;
}
/** Represents an actor in a Git commit (ie. an author or committer). */
export interface GitActor {
  avatarUrl: Uri /** A URL pointing to the author's public avatar. */;
  date?: GitTimestamp | null /** The timestamp of the Git action (authoring or committing). */;
  email?: string | null /** The email in the Git commit. */;
  name?: string | null /** The name in the Git commit. */;
  user?: User | null /** The GitHub user corresponding to the email field. Null if no such user exists. */;
}
/** Represents a Git blame. */
export interface Blame {
  ranges: BlameRange[] /** The list of ranges from a Git blame. */;
}
/** Represents a range of information from a Git blame. */
export interface BlameRange {
  age: number /** Identifies the recency of the change, from 1 (new) to 10 (old). This is calculated as a 2-quantile and determines the length of distance between the median age of all the changes in the file and the recency of the current range's change. */;
  commit: Commit /** Identifies the line author */;
  endingLine: number /** The ending line for the range */;
  startingLine: number /** The starting line for the range */;
}
/** The connection type for CommitComment. */
export interface CommitCommentConnection {
  edges?: (CommitCommentEdge | null)[] | null /** A list of edges. */;
  nodes?: (CommitComment | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface CommitCommentEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: CommitComment | null /** The item at the end of the edge. */;
}
/** Represents a comment on a given Commit. */
export interface CommitComment
  extends Node,
    Comment,
    Deletable,
    Updatable,
    UpdatableComment,
    Reactable,
    RepositoryNode {
  author?: Actor | null /** The actor who authored the comment. */;
  authorAssociation: CommentAuthorAssociation /** Author's association with the subject of the comment. */;
  body: string /** Identifies the comment body. */;
  bodyHTML: Html /** Identifies the comment body rendered to HTML. */;
  bodyText: string /** The body rendered to text. */;
  commit?: Commit | null /** Identifies the commit associated with the comment, if the commit exists. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  createdViaEmail: boolean /** Check if this comment was created via an email reply. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  editor?: Actor | null /** The actor who edited the comment. */;
  id: string;
  includesCreatedEdit: boolean /** Check if this comment was edited and includes an edit with the creation data */;
  lastEditedAt?: DateTime | null /** The moment the editor made the last edit */;
  path?:
    | string
    | null /** Identifies the file path associated with the comment. */;
  position?:
    | number
    | null /** Identifies the line position associated with the comment. */;
  publishedAt?: DateTime | null /** Identifies when the comment was published at. */;
  reactionGroups?:
    | ReactionGroup[]
    | null /** A list of reactions grouped by content left on the subject. */;
  reactions: ReactionConnection /** A list of Reactions left on the Issue. */;
  repository: Repository /** The repository associated with this node. */;
  resourcePath: Uri /** The HTTP path permalink for this commit comment. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL permalink for this commit comment. */;
  userContentEdits?: UserContentEditConnection | null /** A list of edits to this content. */;
  viewerCanDelete: boolean /** Check if the current viewer can delete this object. */;
  viewerCanReact: boolean /** Can user react to this subject */;
  viewerCanUpdate: boolean /** Check if the current viewer can update this object. */;
  viewerCannotUpdateReasons: CommentCannotUpdateReason[] /** Reasons why the current viewer can not update this comment. */;
  viewerDidAuthor: boolean /** Did the viewer author this comment. */;
}
/** The connection type for Commit. */
export interface CommitHistoryConnection {
  edges?: (CommitEdge | null)[] | null;
  nodes?: (Commit | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface CommitEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Commit | null /** The item at the end of the edge. */;
}
/** The connection type for Commit. */
export interface CommitConnection {
  edges?: (CommitEdge | null)[] | null /** A list of edges. */;
  nodes?: (Commit | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** Represents a commit status. */
export interface Status extends Node {
  commit?: Commit | null /** The commit this status is attached to. */;
  context?: StatusContext | null /** Looks up an individual status context by context name. */;
  contexts: StatusContext[] /** The individual status contexts for this commit. */;
  id: string;
  state: StatusState /** The combined commit status. */;
}
/** Represents an individual commit status context */
export interface StatusContext extends Node {
  commit?: Commit | null /** This commit this status context is attached to. */;
  context: string /** The name of this status context. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  creator?: Actor | null /** The actor who created this status context. */;
  description?: string | null /** The description for this status context. */;
  id: string;
  state: StatusState /** The state of this status context. */;
  targetUrl?: Uri | null /** The URL for this status context. */;
}
/** Represents a Git tree. */
export interface Tree extends Node, GitObject {
  abbreviatedOid: string /** An abbreviated version of the Git object ID */;
  commitResourcePath: Uri /** The HTTP path for this Git object */;
  commitUrl: Uri /** The HTTP URL for this Git object */;
  entries?: TreeEntry[] | null /** A list of tree entries. */;
  id: string;
  oid: GitObjectId /** The Git object ID */;
  repository: Repository /** The Repository the Git object belongs to */;
}
/** Represents a Git tree entry. */
export interface TreeEntry {
  mode: number /** Entry file mode. */;
  name: string /** Entry file name. */;
  object?: GitObject | null /** Entry file object. */;
  oid: GitObjectId /** Entry file Git object ID. */;
  repository: Repository /** The Repository the tree entry belongs to */;
  type: string /** Entry file type. */;
}
/** Represents a Milestone object on a given repository. */
export interface Milestone extends Node, Closable, UniformResourceLocatable {
  closed: boolean /** `true` if the object is closed (definition of closed may depend on type) */;
  closedAt?: DateTime | null /** Identifies the date and time when the object was closed. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  creator?: Actor | null /** Identifies the actor who created the milestone. */;
  description?:
    | string
    | null /** Identifies the description of the milestone. */;
  dueOn?: DateTime | null /** Identifies the due date of the milestone. */;
  id: string;
  issues: IssueConnection /** A list of issues associated with the milestone. */;
  number: number /** Identifies the number of the milestone. */;
  pullRequests: PullRequestConnection /** A list of pull requests associated with the milestone. */;
  repository: Repository /** The repository associated with this milestone. */;
  resourcePath: Uri /** The HTTP path for this milestone */;
  state: MilestoneState /** Identifies the state of the milestone. */;
  title: string /** Identifies the title of the milestone. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL for this milestone */;
}
/** The connection type for ReviewRequest. */
export interface ReviewRequestConnection {
  edges?: (ReviewRequestEdge | null)[] | null /** A list of edges. */;
  nodes?: (ReviewRequest | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface ReviewRequestEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: ReviewRequest | null /** The item at the end of the edge. */;
}
/** A request for a user to review a pull request. */
export interface ReviewRequest extends Node {
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
  pullRequest: PullRequest /** Identifies the pull request associated with this review request. */;
  requestedReviewer?: RequestedReviewer | null /** The reviewer that is requested. */;
}
/** A team of users in an organization. */
export interface Team extends Node, Subscribable {
  ancestors: TeamConnection /** A list of teams that are ancestors of this team. */;
  avatarUrl?: Uri | null /** A URL pointing to the team's avatar. */;
  childTeams: TeamConnection /** List of child teams belonging to this team */;
  combinedSlug: string /** The slug corresponding to the organization and team. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  description?: string | null /** The description of the team. */;
  editTeamResourcePath: Uri /** The HTTP path for editing this team */;
  editTeamUrl: Uri /** The HTTP URL for editing this team */;
  id: string;
  invitations?: OrganizationInvitationConnection | null /** A list of pending invitations for users to this team */;
  members: TeamMemberConnection /** A list of users who are members of this team. */;
  membersResourcePath: Uri /** The HTTP path for the team' members */;
  membersUrl: Uri /** The HTTP URL for the team' members */;
  name: string /** The name of the team. */;
  newTeamResourcePath: Uri /** The HTTP path creating a new team */;
  newTeamUrl: Uri /** The HTTP URL creating a new team */;
  organization: Organization /** The organization that owns this team. */;
  parentTeam?: Team | null /** The parent team of the team. */;
  privacy: TeamPrivacy /** The level of privacy the team has. */;
  repositories: TeamRepositoryConnection /** A list of repositories this team has access to. */;
  repositoriesResourcePath: Uri /** The HTTP path for this team's repositories */;
  repositoriesUrl: Uri /** The HTTP URL for this team's repositories */;
  resourcePath: Uri /** The HTTP path for this team */;
  slug: string /** The slug corresponding to the team. */;
  teamsResourcePath: Uri /** The HTTP path for this team's teams */;
  teamsUrl: Uri /** The HTTP URL for this team's teams */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL for this team */;
  viewerCanAdminister: boolean /** Team is adminable by the viewer. */;
  viewerCanSubscribe: boolean /** Check if the viewer is able to change their subscription status for the repository. */;
  viewerSubscription?: SubscriptionState | null /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */;
}
/** The connection type for Team. */
export interface TeamConnection {
  edges?: (TeamEdge | null)[] | null /** A list of edges. */;
  nodes?: (Team | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface TeamEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Team | null /** The item at the end of the edge. */;
}
/** The connection type for OrganizationInvitation. */
export interface OrganizationInvitationConnection {
  edges?: (OrganizationInvitationEdge | null)[] | null /** A list of edges. */;
  nodes?: (OrganizationInvitation | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface OrganizationInvitationEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: OrganizationInvitation | null /** The item at the end of the edge. */;
}
/** An Invitation for a user to an organization. */
export interface OrganizationInvitation extends Node {
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  email?:
    | string
    | null /** The email address of the user invited to the organization. */;
  id: string;
  invitationType: OrganizationInvitationType /** The type of invitation that was sent (e.g. email, user). */;
  invitee?: User | null /** The user who was invited to the organization. */;
  inviter: User /** The user who created the invitation. */;
  organization: Organization /** The organization the invite is for */;
  role: OrganizationInvitationRole /** The user's pending role in the organization (e.g. member, owner). */;
}
/** The connection type for User. */
export interface TeamMemberConnection {
  edges?: (TeamMemberEdge | null)[] | null /** A list of edges. */;
  nodes?: (User | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** Represents a user who is a member of a team. */
export interface TeamMemberEdge {
  cursor: string /** A cursor for use in pagination. */;
  memberAccessResourcePath: Uri /** The HTTP path to the organization's member access page. */;
  memberAccessUrl: Uri /** The HTTP URL to the organization's member access page. */;
  node: User;
  role: TeamMemberRole /** The role the member has on the team. */;
}
/** The connection type for Repository. */
export interface TeamRepositoryConnection {
  edges?: (TeamRepositoryEdge | null)[] | null /** A list of edges. */;
  nodes?: (Repository | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** Represents a team repository. */
export interface TeamRepositoryEdge {
  cursor: string /** A cursor for use in pagination. */;
  node: Repository;
  permission: RepositoryPermission /** The permission level the team has on the repository */;
}
/** The connection type for PullRequestReview. */
export interface PullRequestReviewConnection {
  edges?: (PullRequestReviewEdge | null)[] | null /** A list of edges. */;
  nodes?: (PullRequestReview | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface PullRequestReviewEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: PullRequestReview | null /** The item at the end of the edge. */;
}
/** A review object for a given pull request. */
export interface PullRequestReview
  extends Node,
    Comment,
    Deletable,
    Updatable,
    UpdatableComment,
    RepositoryNode {
  author?: Actor | null /** The actor who authored the comment. */;
  authorAssociation: CommentAuthorAssociation /** Author's association with the subject of the comment. */;
  body: string /** Identifies the pull request review body. */;
  bodyHTML: Html /** The body of this review rendered to HTML. */;
  bodyText: string /** The body of this review rendered as plain text. */;
  comments: PullRequestReviewCommentConnection /** A list of review comments for the current pull request review. */;
  commit?: Commit | null /** Identifies the commit associated with this pull request review. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  createdViaEmail: boolean /** Check if this comment was created via an email reply. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  editor?: Actor | null /** The actor who edited the comment. */;
  id: string;
  includesCreatedEdit: boolean /** Check if this comment was edited and includes an edit with the creation data */;
  lastEditedAt?: DateTime | null /** The moment the editor made the last edit */;
  onBehalfOf: TeamConnection /** A list of teams that this review was made on behalf of. */;
  publishedAt?: DateTime | null /** Identifies when the comment was published at. */;
  pullRequest: PullRequest /** Identifies the pull request associated with this pull request review. */;
  repository: Repository /** The repository associated with this node. */;
  resourcePath: Uri /** The HTTP path permalink for this PullRequestReview. */;
  state: PullRequestReviewState /** Identifies the current state of the pull request review. */;
  submittedAt?: DateTime | null /** Identifies when the Pull Request Review was submitted */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL permalink for this PullRequestReview. */;
  userContentEdits?: UserContentEditConnection | null /** A list of edits to this content. */;
  viewerCanDelete: boolean /** Check if the current viewer can delete this object. */;
  viewerCanUpdate: boolean /** Check if the current viewer can update this object. */;
  viewerCannotUpdateReasons: CommentCannotUpdateReason[] /** Reasons why the current viewer can not update this comment. */;
  viewerDidAuthor: boolean /** Did the viewer author this comment. */;
}
/** The connection type for PullRequestReviewComment. */
export interface PullRequestReviewCommentConnection {
  edges?:
    | (PullRequestReviewCommentEdge | null)[]
    | null /** A list of edges. */;
  nodes?: (PullRequestReviewComment | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface PullRequestReviewCommentEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: PullRequestReviewComment | null /** The item at the end of the edge. */;
}
/** A review comment associated with a given repository pull request. */
export interface PullRequestReviewComment
  extends Node,
    Comment,
    Deletable,
    Updatable,
    UpdatableComment,
    Reactable,
    RepositoryNode {
  author?: Actor | null /** The actor who authored the comment. */;
  authorAssociation: CommentAuthorAssociation /** Author's association with the subject of the comment. */;
  body: string /** The comment body of this review comment. */;
  bodyHTML: Html /** The comment body of this review comment rendered to HTML. */;
  bodyText: string /** The comment body of this review comment rendered as plain text. */;
  commit: Commit /** Identifies the commit associated with the comment. */;
  createdAt: DateTime /** Identifies when the comment was created. */;
  createdViaEmail: boolean /** Check if this comment was created via an email reply. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  diffHunk: string /** The diff hunk to which the comment applies. */;
  draftedAt: DateTime /** Identifies when the comment was created in a draft state. */;
  editor?: Actor | null /** The actor who edited the comment. */;
  id: string;
  includesCreatedEdit: boolean /** Check if this comment was edited and includes an edit with the creation data */;
  lastEditedAt?: DateTime | null /** The moment the editor made the last edit */;
  originalCommit?: Commit | null /** Identifies the original commit associated with the comment. */;
  originalPosition: number /** The original line index in the diff to which the comment applies. */;
  outdated: boolean /** Identifies when the comment body is outdated */;
  path: string /** The path to which the comment applies. */;
  position?:
    | number
    | null /** The line index in the diff to which the comment applies. */;
  publishedAt?: DateTime | null /** Identifies when the comment was published at. */;
  pullRequest: PullRequest /** The pull request associated with this review comment. */;
  pullRequestReview?: PullRequestReview | null /** The pull request review associated with this review comment. */;
  reactionGroups?:
    | ReactionGroup[]
    | null /** A list of reactions grouped by content left on the subject. */;
  reactions: ReactionConnection /** A list of Reactions left on the Issue. */;
  replyTo?: PullRequestReviewComment | null /** The comment this is a reply to. */;
  repository: Repository /** The repository associated with this node. */;
  resourcePath: Uri /** The HTTP path permalink for this review comment. */;
  state: PullRequestReviewCommentState /** Identifies the state of the comment. */;
  updatedAt: DateTime /** Identifies when the comment was last updated. */;
  url: Uri /** The HTTP URL permalink for this review comment. */;
  userContentEdits?: UserContentEditConnection | null /** A list of edits to this content. */;
  viewerCanDelete: boolean /** Check if the current viewer can delete this object. */;
  viewerCanReact: boolean /** Can user react to this subject */;
  viewerCanUpdate: boolean /** Check if the current viewer can update this object. */;
  viewerCannotUpdateReasons: CommentCannotUpdateReason[] /** Reasons why the current viewer can not update this comment. */;
  viewerDidAuthor: boolean /** Did the viewer author this comment. */;
}
/** A suggestion to review a pull request based on a user's commit history and review comments. */
export interface SuggestedReviewer {
  isAuthor: boolean /** Is this suggestion based on past commits? */;
  isCommenter: boolean /** Is this suggestion based on past review comments? */;
  reviewer: User /** Identifies the user suggested to review the pull request. */;
}
/** The connection type for PullRequestTimelineItem. */
export interface PullRequestTimelineConnection {
  edges?: (PullRequestTimelineItemEdge | null)[] | null /** A list of edges. */;
  nodes?: (PullRequestTimelineItem | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface PullRequestTimelineItemEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: PullRequestTimelineItem | null /** The item at the end of the edge. */;
}
/** A thread of comments on a commit. */
export interface CommitCommentThread extends Node, RepositoryNode {
  comments: CommitCommentConnection /** The comments that exist in this thread. */;
  commit: Commit /** The commit the comments were made on. */;
  id: string;
  path?: string | null /** The file the comments were made on. */;
  position?:
    | number
    | null /** The position in the diff for the commit that the comment was made on. */;
  repository: Repository /** The repository associated with this node. */;
}
/** A threaded list of comments for a given pull request. */
export interface PullRequestReviewThread extends Node {
  comments: PullRequestReviewCommentConnection /** A list of pull request comments associated with the thread. */;
  id: string;
  pullRequest: PullRequest /** Identifies the pull request associated with this thread. */;
  repository: Repository /** Identifies the repository associated with this thread. */;
}
/** Represents a 'closed' event on any `Closable`. */
export interface ClosedEvent extends Node, UniformResourceLocatable {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  closable: Closable /** Object that was closed. */;
  closer?: Closer | null /** Object which triggered the creation of this event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  resourcePath: Uri /** The HTTP path for this closed event. */;
  url: Uri /** The HTTP URL for this closed event. */;
}
/** Represents a 'reopened' event on any `Closable`. */
export interface ReopenedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  closable: Closable /** Object that was reopened. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
}
/** Represents a 'subscribed' event on a given `Subscribable`. */
export interface SubscribedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  subscribable: Subscribable /** Object referenced by event. */;
}
/** Represents an 'unsubscribed' event on a given `Subscribable`. */
export interface UnsubscribedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  subscribable: Subscribable /** Object referenced by event. */;
}
/** Represents a 'merged' event on a given pull request. */
export interface MergedEvent extends Node, UniformResourceLocatable {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  commit?: Commit | null /** Identifies the commit associated with the `merge` event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  mergeRef?: Ref | null /** Identifies the Ref associated with the `merge` event. */;
  mergeRefName: string /** Identifies the name of the Ref associated with the `merge` event. */;
  pullRequest: PullRequest /** PullRequest referenced by event. */;
  resourcePath: Uri /** The HTTP path for this merged event. */;
  url: Uri /** The HTTP URL for this merged event. */;
}
/** Represents a 'referenced' event on a given `ReferencedSubject`. */
export interface ReferencedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  commit?: Commit | null /** Identifies the commit associated with the 'referenced' event. */;
  commitRepository: Repository /** Identifies the repository associated with the 'referenced' event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  isCrossRepository: boolean /** Reference originated in a different repository. */;
  isDirectReference: boolean /** Checks if the commit message itself references the subject. Can be false in the case of a commit comment reference. */;
  subject: ReferencedSubject /** Object referenced by event. */;
}
/** Represents a mention made by one issue or pull request to another. */
export interface CrossReferencedEvent extends Node, UniformResourceLocatable {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  isCrossRepository: boolean /** Reference originated in a different repository. */;
  referencedAt: DateTime /** Identifies when the reference was made. */;
  resourcePath: Uri /** The HTTP path for this pull request. */;
  source: ReferencedSubject /** Issue or pull request that made the reference. */;
  target: ReferencedSubject /** Issue or pull request to which the reference was made. */;
  url: Uri /** The HTTP URL for this pull request. */;
  willCloseTarget: boolean /** Checks if the target will be closed when the source is merged. */;
}
/** Represents an 'assigned' event on any assignable object. */
export interface AssignedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  assignable: Assignable /** Identifies the assignable associated with the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  user?: User | null /** Identifies the user who was assigned. */;
}
/** Represents an 'unassigned' event on any assignable object. */
export interface UnassignedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  assignable: Assignable /** Identifies the assignable associated with the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  user?: User | null /** Identifies the subject (user) who was unassigned. */;
}
/** Represents a 'labeled' event on a given issue or pull request. */
export interface LabeledEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  label: Label /** Identifies the label associated with the 'labeled' event. */;
  labelable: Labelable /** Identifies the `Labelable` associated with the event. */;
}
/** Represents an 'unlabeled' event on a given issue or pull request. */
export interface UnlabeledEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  label: Label /** Identifies the label associated with the 'unlabeled' event. */;
  labelable: Labelable /** Identifies the `Labelable` associated with the event. */;
}
/** Represents a 'milestoned' event on a given issue or pull request. */
export interface MilestonedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  milestoneTitle: string /** Identifies the milestone title associated with the 'milestoned' event. */;
  subject: MilestoneItem /** Object referenced by event. */;
}
/** Represents a 'demilestoned' event on a given issue or pull request. */
export interface DemilestonedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  milestoneTitle: string /** Identifies the milestone title associated with the 'demilestoned' event. */;
  subject: MilestoneItem /** Object referenced by event. */;
}
/** Represents a 'renamed' event on a given issue or pull request */
export interface RenamedTitleEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  currentTitle: string /** Identifies the current title of the issue or pull request. */;
  id: string;
  previousTitle: string /** Identifies the previous title of the issue or pull request. */;
  subject: RenamedTitleSubject /** Subject that was renamed. */;
}
/** Represents a 'locked' event on a given issue or pull request. */
export interface LockedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  lockReason?: LockReason | null /** Reason that the conversation was locked (optional). */;
  lockable: Lockable /** Object that was locked. */;
}
/** Represents an 'unlocked' event on a given issue or pull request. */
export interface UnlockedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  lockable: Lockable /** Object that was unlocked. */;
}
/** Represents a 'deployed' event on a given pull request. */
export interface DeployedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  deployment: Deployment /** The deployment associated with the 'deployed' event. */;
  id: string;
  pullRequest: PullRequest /** PullRequest referenced by event. */;
  ref?: Ref | null /** The ref associated with the 'deployed' event. */;
}
/** Represents triggered deployment instance. */
export interface Deployment extends Node {
  commit?: Commit | null /** Identifies the commit sha of the deployment. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  creator?: Actor | null /** Identifies the actor who triggered the deployment. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  description?: string | null /** The deployment description. */;
  environment?:
    | string
    | null /** The environment to which this deployment was made. */;
  id: string;
  latestStatus?: DeploymentStatus | null /** The latest status of this deployment. */;
  payload?:
    | string
    | null /** Extra information that a deployment system might need. */;
  ref?: Ref | null /** Identifies the Ref of the deployment, if the deployment was created by ref. */;
  repository: Repository /** Identifies the repository associated with the deployment. */;
  state?: DeploymentState | null /** The current state of the deployment. */;
  statuses?: DeploymentStatusConnection | null /** A list of statuses associated with the deployment. */;
  task?: string | null /** The deployment task. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
}
/** Describes the status of a given deployment attempt. */
export interface DeploymentStatus extends Node {
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  creator?: Actor | null /** Identifies the actor who triggered the deployment. */;
  deployment: Deployment /** Identifies the deployment associated with status. */;
  description?:
    | string
    | null /** Identifies the description of the deployment. */;
  environmentUrl?: Uri | null /** Identifies the environment URL of the deployment. */;
  id: string;
  logUrl?: Uri | null /** Identifies the log URL of the deployment. */;
  state: DeploymentStatusState /** Identifies the current state of the deployment. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
}
/** The connection type for DeploymentStatus. */
export interface DeploymentStatusConnection {
  edges?: (DeploymentStatusEdge | null)[] | null /** A list of edges. */;
  nodes?: (DeploymentStatus | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface DeploymentStatusEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: DeploymentStatus | null /** The item at the end of the edge. */;
}
/** Represents a 'deployment_environment_changed' event on a given pull request. */
export interface DeploymentEnvironmentChangedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  deploymentStatus: DeploymentStatus /** The deployment status that updated the deployment environment. */;
  id: string;
  pullRequest: PullRequest /** PullRequest referenced by event. */;
}
/** Represents a 'head_ref_deleted' event on a given pull request. */
export interface HeadRefDeletedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  headRef?: Ref | null /** Identifies the Ref associated with the `head_ref_deleted` event. */;
  headRefName: string /** Identifies the name of the Ref associated with the `head_ref_deleted` event. */;
  id: string;
  pullRequest: PullRequest /** PullRequest referenced by event. */;
}
/** Represents a 'head_ref_restored' event on a given pull request. */
export interface HeadRefRestoredEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  pullRequest: PullRequest /** PullRequest referenced by event. */;
}
/** Represents a 'head_ref_force_pushed' event on a given pull request. */
export interface HeadRefForcePushedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  afterCommit?: Commit | null /** Identifies the after commit SHA for the 'head_ref_force_pushed' event. */;
  beforeCommit?: Commit | null /** Identifies the before commit SHA for the 'head_ref_force_pushed' event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  pullRequest: PullRequest /** PullRequest referenced by event. */;
  ref?: Ref | null /** Identifies the fully qualified ref name for the 'head_ref_force_pushed' event. */;
}
/** Represents a 'base_ref_force_pushed' event on a given pull request. */
export interface BaseRefForcePushedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  afterCommit?: Commit | null /** Identifies the after commit SHA for the 'base_ref_force_pushed' event. */;
  beforeCommit?: Commit | null /** Identifies the before commit SHA for the 'base_ref_force_pushed' event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  pullRequest: PullRequest /** PullRequest referenced by event. */;
  ref?: Ref | null /** Identifies the fully qualified ref name for the 'base_ref_force_pushed' event. */;
}
/** Represents an 'review_requested' event on a given pull request. */
export interface ReviewRequestedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  pullRequest: PullRequest /** PullRequest referenced by event. */;
  requestedReviewer?: RequestedReviewer | null /** Identifies the reviewer whose review was requested. */;
}
/** Represents an 'review_request_removed' event on a given pull request. */
export interface ReviewRequestRemovedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  pullRequest: PullRequest /** PullRequest referenced by event. */;
  requestedReviewer?: RequestedReviewer | null /** Identifies the reviewer whose review request was removed. */;
}
/** Represents a 'review_dismissed' event on a given issue or pull request. */
export interface ReviewDismissedEvent extends Node, UniformResourceLocatable {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
  message: string /** Identifies the message associated with the 'review_dismissed' event. */;
  messageHtml: Html /** The message associated with the event, rendered to HTML. */;
  previousReviewState: PullRequestReviewState /** Identifies the previous state of the review with the 'review_dismissed' event. */;
  pullRequest: PullRequest /** PullRequest referenced by event. */;
  pullRequestCommit?: PullRequestCommit | null /** Identifies the commit which caused the review to become stale. */;
  resourcePath: Uri /** The HTTP path for this review dismissed event. */;
  review?: PullRequestReview | null /** Identifies the review associated with the 'review_dismissed' event. */;
  url: Uri /** The HTTP URL for this review dismissed event. */;
}
/** The connection type for Ref. */
export interface RefConnection {
  edges?: (RefEdge | null)[] | null /** A list of edges. */;
  nodes?: (Ref | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface RefEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Ref | null /** The item at the end of the edge. */;
}
/** The connection type for PushAllowance. */
export interface PushAllowanceConnection {
  edges?: (PushAllowanceEdge | null)[] | null /** A list of edges. */;
  nodes?: (PushAllowance | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface PushAllowanceEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: PushAllowance | null /** The item at the end of the edge. */;
}
/** A team or user who has the ability to push to a protected branch. */
export interface PushAllowance extends Node {
  actor?: PushAllowanceActor | null /** The actor that can push. */;
  branchProtectionRule?: BranchProtectionRule | null /** Identifies the branch protection rule associated with the allowed user or team. */;
  id: string;
  protectedBranch: ProtectedBranch /** Identifies the protected branch associated with the allowed user or team. */;
}
/** A repository protected branch. */
export interface ProtectedBranch extends Node {
  creator?: Actor | null /** The actor who created this protected branch. */;
  hasDismissableStaleReviews: boolean /** Will new commits pushed to this branch dismiss pull request review approvals. */;
  hasRequiredReviews: boolean /** Are reviews required to update this branch. */;
  hasRequiredStatusChecks: boolean /** Are status checks required to update this branch. */;
  hasRestrictedPushes: boolean /** Is pushing to this branch restricted. */;
  hasRestrictedReviewDismissals: boolean /** Is dismissal of pull request reviews restricted. */;
  hasStrictRequiredStatusChecks: boolean /** Are branches required to be up to date before merging. */;
  id: string;
  isAdminEnforced: boolean /** Can admins overwrite branch protection. */;
  name: string /** The name of the protected branch rule. */;
  pushAllowances: PushAllowanceConnection /** A list push allowances for this protected branch. */;
  repository: Repository /** The repository associated with this protected branch. */;
  requiredStatusCheckContexts?:
    | (string | null)[]
    | null /** List of required status check contexts that must pass for commits to be accepted to this branch. */;
  reviewDismissalAllowances: ReviewDismissalAllowanceConnection /** A list review dismissal allowances for this protected branch. */;
}
/** The connection type for ReviewDismissalAllowance. */
export interface ReviewDismissalAllowanceConnection {
  edges?:
    | (ReviewDismissalAllowanceEdge | null)[]
    | null /** A list of edges. */;
  nodes?: (ReviewDismissalAllowance | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface ReviewDismissalAllowanceEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: ReviewDismissalAllowance | null /** The item at the end of the edge. */;
}
/** A team or user who has the ability to dismiss a review on a protected branch. */
export interface ReviewDismissalAllowance extends Node {
  actor?: ReviewDismissalAllowanceActor | null /** The actor that can dismiss. */;
  branchProtectionRule?: BranchProtectionRule | null /** Identifies the branch protection rule associated with the allowed user or team. */;
  id: string;
  protectedBranch: ProtectedBranch /** Identifies the protected branch associated with the allowed user or team. */;
}
/** The connection type for User. */
export interface RepositoryCollaboratorConnection {
  edges?: (RepositoryCollaboratorEdge | null)[] | null /** A list of edges. */;
  nodes?: (User | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** Represents a user who is a collaborator of a repository. */
export interface RepositoryCollaboratorEdge {
  cursor: string /** A cursor for use in pagination. */;
  node: User;
  permission: RepositoryPermission /** The permission the user has on the repository. */;
}
/** The connection type for DeployKey. */
export interface DeployKeyConnection {
  edges?: (DeployKeyEdge | null)[] | null /** A list of edges. */;
  nodes?: (DeployKey | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface DeployKeyEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: DeployKey | null /** The item at the end of the edge. */;
}
/** A repository deploy key. */
export interface DeployKey extends Node {
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  id: string;
  key: string /** The deploy key. */;
  readOnly: boolean /** Whether or not the deploy key is read only. */;
  title: string /** The deploy key title. */;
  verified: boolean /** Whether or not the deploy key has been verified. */;
}
/** The connection type for Deployment. */
export interface DeploymentConnection {
  edges?: (DeploymentEdge | null)[] | null /** A list of edges. */;
  nodes?: (Deployment | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface DeploymentEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Deployment | null /** The item at the end of the edge. */;
}
/** A list of languages associated with the parent. */
export interface LanguageConnection {
  edges?: (LanguageEdge | null)[] | null /** A list of edges. */;
  nodes?: (Language | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
  totalSize: number /** The total size in bytes of files written in that language. */;
}
/** Represents the language of a repository. */
export interface LanguageEdge {
  cursor: string;
  node: Language;
  size: number /** The number of bytes of code written in the language. */;
}
/** Represents a given language found in repositories. */
export interface Language extends Node {
  color?: string | null /** The color defined for the current language. */;
  id: string;
  name: string /** The name of the current language. */;
}
/** The connection type for Milestone. */
export interface MilestoneConnection {
  edges?: (MilestoneEdge | null)[] | null /** A list of edges. */;
  nodes?: (Milestone | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface MilestoneEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Milestone | null /** The item at the end of the edge. */;
}
/** A list of projects associated with the owner. */
export interface ProjectConnection {
  edges?: (ProjectEdge | null)[] | null /** A list of edges. */;
  nodes?: (Project | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface ProjectEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Project | null /** The item at the end of the edge. */;
}
/** The connection type for ProtectedBranch. */
export interface ProtectedBranchConnection {
  edges?: (ProtectedBranchEdge | null)[] | null /** A list of edges. */;
  nodes?: (ProtectedBranch | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface ProtectedBranchEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: ProtectedBranch | null /** The item at the end of the edge. */;
}
/** A release contains the content for a release. */
export interface Release extends Node, UniformResourceLocatable {
  author?: User | null /** The author of the release */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  description?: string | null /** Identifies the description of the release. */;
  id: string;
  isDraft: boolean /** Whether or not the release is a draft */;
  isPrerelease: boolean /** Whether or not the release is a prerelease */;
  name?: string | null /** Identifies the title of the release. */;
  publishedAt?: DateTime | null /** Identifies the date and time when the release was created. */;
  releaseAssets: ReleaseAssetConnection /** List of releases assets which are dependent on this release. */;
  resourcePath: Uri /** The HTTP path for this issue */;
  tag?: Ref | null /** The Git tag the release points to */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL for this issue */;
}
/** The connection type for ReleaseAsset. */
export interface ReleaseAssetConnection {
  edges?: (ReleaseAssetEdge | null)[] | null /** A list of edges. */;
  nodes?: (ReleaseAsset | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface ReleaseAssetEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: ReleaseAsset | null /** The item at the end of the edge. */;
}
/** A release asset contains the content for a release asset. */
export interface ReleaseAsset extends Node {
  contentType: string /** The asset's content-type */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  downloadCount: number /** The number of times this asset was downloaded */;
  downloadUrl: Uri /** Identifies the URL where you can download the release asset via the browser. */;
  id: string;
  name: string /** Identifies the title of the release asset. */;
  release?: Release | null /** Release that the asset is associated with */;
  size: number /** The size (in bytes) of the asset */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  uploadedBy: User /** The user that performed the upload */;
  url: Uri /** Identifies the URL of the release asset. */;
}
/** The connection type for Release. */
export interface ReleaseConnection {
  edges?: (ReleaseEdge | null)[] | null /** A list of edges. */;
  nodes?: (Release | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface ReleaseEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Release | null /** The item at the end of the edge. */;
}
/** The connection type for RepositoryTopic. */
export interface RepositoryTopicConnection {
  edges?: (RepositoryTopicEdge | null)[] | null /** A list of edges. */;
  nodes?: (RepositoryTopic | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface RepositoryTopicEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: RepositoryTopic | null /** The item at the end of the edge. */;
}
/** A repository-topic connects a repository to a topic. */
export interface RepositoryTopic extends Node, UniformResourceLocatable {
  id: string;
  resourcePath: Uri /** The HTTP path for this repository-topic. */;
  topic: Topic /** The topic. */;
  url: Uri /** The HTTP URL for this repository-topic. */;
}
/** A topic aggregates entities that are related to a subject. */
export interface Topic extends Node, Starrable {
  id: string;
  name: string /** The topic's name. */;
  relatedTopics: Topic[] /** A list of related topics, including aliases of this topic, sorted with the most relevantfirst. */;
  stargazers: StargazerConnection /** A list of users who have starred this starrable. */;
  viewerHasStarred: boolean /** Returns a boolean indicating whether the viewing user has starred this starrable. */;
}
/** The connection type for User. */
export interface FollowerConnection {
  edges?: (UserEdge | null)[] | null /** A list of edges. */;
  nodes?: (User | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** The connection type for User. */
export interface FollowingConnection {
  edges?: (UserEdge | null)[] | null /** A list of edges. */;
  nodes?: (User | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** A Gist. */
export interface Gist extends Node, Starrable {
  comments: GistCommentConnection /** A list of comments associated with the gist */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  description?: string | null /** The gist description. */;
  id: string;
  isPublic: boolean /** Whether the gist is public or not. */;
  name: string /** The gist name. */;
  owner?: RepositoryOwner | null /** The gist owner. */;
  pushedAt?: DateTime | null /** Identifies when the gist was last pushed to. */;
  stargazers: StargazerConnection /** A list of users who have starred this starrable. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  viewerHasStarred: boolean /** Returns a boolean indicating whether the viewing user has starred this starrable. */;
}
/** The connection type for GistComment. */
export interface GistCommentConnection {
  edges?: (GistCommentEdge | null)[] | null /** A list of edges. */;
  nodes?: (GistComment | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface GistCommentEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: GistComment | null /** The item at the end of the edge. */;
}
/** Represents a comment on an Gist. */
export interface GistComment
  extends Node,
    Comment,
    Deletable,
    Updatable,
    UpdatableComment {
  author?: Actor | null /** The actor who authored the comment. */;
  authorAssociation: CommentAuthorAssociation /** Author's association with the gist. */;
  body: string /** Identifies the comment body. */;
  bodyHTML: Html /** The comment body rendered to HTML. */;
  bodyText: string /** The body rendered to text. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  createdViaEmail: boolean /** Check if this comment was created via an email reply. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  editor?: Actor | null /** The actor who edited the comment. */;
  gist: Gist /** The associated gist. */;
  id: string;
  includesCreatedEdit: boolean /** Check if this comment was edited and includes an edit with the creation data */;
  lastEditedAt?: DateTime | null /** The moment the editor made the last edit */;
  publishedAt?: DateTime | null /** Identifies when the comment was published at. */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  userContentEdits?: UserContentEditConnection | null /** A list of edits to this content. */;
  viewerCanDelete: boolean /** Check if the current viewer can delete this object. */;
  viewerCanUpdate: boolean /** Check if the current viewer can update this object. */;
  viewerCannotUpdateReasons: CommentCannotUpdateReason[] /** Reasons why the current viewer can not update this comment. */;
  viewerDidAuthor: boolean /** Did the viewer author this comment. */;
}
/** The connection type for Gist. */
export interface GistConnection {
  edges?: (GistEdge | null)[] | null /** A list of edges. */;
  nodes?: (Gist | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface GistEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Gist | null /** The item at the end of the edge. */;
}
/** The connection type for Organization. */
export interface OrganizationConnection {
  edges?: (OrganizationEdge | null)[] | null /** A list of edges. */;
  nodes?: (Organization | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface OrganizationEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Organization | null /** The item at the end of the edge. */;
}
/** The connection type for PublicKey. */
export interface PublicKeyConnection {
  edges?: (PublicKeyEdge | null)[] | null /** A list of edges. */;
  nodes?: (PublicKey | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface PublicKeyEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: PublicKey | null /** The item at the end of the edge. */;
}
/** A user's public key. */
export interface PublicKey extends Node {
  id: string;
  key: string /** The public key string */;
}
/** The connection type for Repository. */
export interface StarredRepositoryConnection {
  edges?: (StarredRepositoryEdge | null)[] | null /** A list of edges. */;
  nodes?: (Repository | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** Represents a starred repository. */
export interface StarredRepositoryEdge {
  cursor: string /** A cursor for use in pagination. */;
  node: Repository;
  starredAt: DateTime /** Identifies when the item was starred. */;
}
/** The connection type for IssueTimelineItem. */
export interface IssueTimelineConnection {
  edges?: (IssueTimelineItemEdge | null)[] | null /** A list of edges. */;
  nodes?: (IssueTimelineItem | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface IssueTimelineItemEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: IssueTimelineItem | null /** The item at the end of the edge. */;
}
/** An Identity Provider configured to provision SAML and SCIM identities for Organizations */
export interface OrganizationIdentityProvider extends Node {
  digestMethod?: Uri | null /** The digest algorithm used to sign SAML requests for the Identity Provider. */;
  externalIdentities: ExternalIdentityConnection /** External Identities provisioned by this Identity Provider */;
  id: string;
  idpCertificate?: X509Certificate | null /** The x509 certificate used by the Identity Provder to sign assertions and responses. */;
  issuer?:
    | string
    | null /** The Issuer Entity ID for the SAML Identity Provider */;
  organization?: Organization | null /** Organization this Identity Provider belongs to */;
  signatureMethod?: Uri | null /** The signature algorithm used to sign SAML requests for the Identity Provider. */;
  ssoUrl?: Uri | null /** The URL endpoint for the Identity Provider's SAML SSO. */;
}
/** The connection type for ExternalIdentity. */
export interface ExternalIdentityConnection {
  edges?: (ExternalIdentityEdge | null)[] | null /** A list of edges. */;
  nodes?: (ExternalIdentity | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface ExternalIdentityEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: ExternalIdentity | null /** The item at the end of the edge. */;
}
/** An external identity provisioned by SAML SSO or SCIM. */
export interface ExternalIdentity extends Node {
  guid: string /** The GUID for this identity */;
  id: string;
  organizationInvitation?: OrganizationInvitation | null /** Organization invitation for this SCIM-provisioned external identity */;
  samlIdentity?: ExternalIdentitySamlAttributes | null /** SAML Identity attributes */;
  scimIdentity?: ExternalIdentityScimAttributes | null /** SCIM Identity attributes */;
  user?: User | null /** User linked to this external identity. Will be NULL if this identity has not been claimed by an organization member. */;
}
/** SAML attributes for the External Identity */
export interface ExternalIdentitySamlAttributes {
  nameId?: string | null /** The NameID of the SAML identity */;
}
/** SCIM attributes for the External Identity */
export interface ExternalIdentityScimAttributes {
  username?: string | null /** The userName of the SCIM identity */;
}
/** Represents the client's rate limit. */
export interface RateLimit {
  cost: number /** The point cost for the current query counting against the rate limit. */;
  limit: number /** The maximum number of points the client is permitted to consume in a 60 minute window. */;
  nodeCount: number /** The maximum number of nodes this query may return */;
  remaining: number /** The number of points remaining in the current rate limit window. */;
  resetAt: DateTime /** The time at which the current rate limit window resets in UTC epoch seconds. */;
}
/** A list of results that matched against a search query. */
export interface SearchResultItemConnection {
  codeCount: number /** The number of pieces of code that matched the search query. */;
  edges?: (SearchResultItemEdge | null)[] | null /** A list of edges. */;
  issueCount: number /** The number of issues that matched the search query. */;
  nodes?: (SearchResultItem | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  repositoryCount: number /** The number of repositories that matched the search query. */;
  userCount: number /** The number of users that matched the search query. */;
  wikiCount: number /** The number of wiki pages that matched the search query. */;
}
/** An edge in a connection. */
export interface SearchResultItemEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: SearchResultItem | null /** The item at the end of the edge. */;
  textMatches?:
    | (TextMatch | null)[]
    | null /** Text matches on the result found. */;
}
/** A text match within a search result. */
export interface TextMatch {
  fragment: string /** The specific text fragment within the property matched on. */;
  highlights: TextMatchHighlight[] /** Highlights within the matched fragment. */;
  property: string /** The property matched on. */;
}
/** Represents a single highlight in a search result match. */
export interface TextMatchHighlight {
  beginIndice: number /** The indice in the fragment where the matched text begins. */;
  endIndice: number /** The indice in the fragment where the matched text ends. */;
  text: string /** The text matched. */;
}
/** The root query for implementing GraphQL mutations. */
export interface Mutation {
  acceptTopicSuggestion?: AcceptTopicSuggestionPayload | null /** Applies a suggested topic to the repository. */;
  addComment?: AddCommentPayload | null /** Adds a comment to an Issue or Pull Request. */;
  addProjectCard?: AddProjectCardPayload | null /** Adds a card to a ProjectColumn. Either `contentId` or `note` must be provided but **not** both. */;
  addProjectColumn?: AddProjectColumnPayload | null /** Adds a column to a Project. */;
  addPullRequestReview?: AddPullRequestReviewPayload | null /** Adds a review to a Pull Request. */;
  addPullRequestReviewComment?: AddPullRequestReviewCommentPayload | null /** Adds a comment to a review. */;
  addReaction?: AddReactionPayload | null /** Adds a reaction to a subject. */;
  addStar?: AddStarPayload | null /** Adds a star to a Starrable. */;
  createBranchProtectionRule?: CreateBranchProtectionRulePayload | null /** Create a new branch protection rule */;
  createProject?: CreateProjectPayload | null /** Creates a new project. */;
  declineTopicSuggestion?: DeclineTopicSuggestionPayload | null /** Rejects a suggested topic for the repository. */;
  deleteBranchProtectionRule?: DeleteBranchProtectionRulePayload | null /** Delete a branch protection rule */;
  deleteProject?: DeleteProjectPayload | null /** Deletes a project. */;
  deleteProjectCard?: DeleteProjectCardPayload | null /** Deletes a project card. */;
  deleteProjectColumn?: DeleteProjectColumnPayload | null /** Deletes a project column. */;
  deletePullRequestReview?: DeletePullRequestReviewPayload | null /** Deletes a pull request review. */;
  dismissPullRequestReview?: DismissPullRequestReviewPayload | null /** Dismisses an approved or rejected pull request review. */;
  lockLockable?: LockLockablePayload | null /** Lock a lockable object */;
  moveProjectCard?: MoveProjectCardPayload | null /** Moves a project card to another place. */;
  moveProjectColumn?: MoveProjectColumnPayload | null /** Moves a project column to another place. */;
  removeOutsideCollaborator?: RemoveOutsideCollaboratorPayload | null /** Removes outside collaborator from all repositories in an organization. */;
  removeReaction?: RemoveReactionPayload | null /** Removes a reaction from a subject. */;
  removeStar?: RemoveStarPayload | null /** Removes a star from a Starrable. */;
  requestReviews?: RequestReviewsPayload | null /** Set review requests on a pull request. */;
  submitPullRequestReview?: SubmitPullRequestReviewPayload | null /** Submits a pending pull request review. */;
  unlockLockable?: UnlockLockablePayload | null /** Unlock a lockable object */;
  updateBranchProtectionRule?: UpdateBranchProtectionRulePayload | null /** Create a new branch protection rule */;
  updateProject?: UpdateProjectPayload | null /** Updates an existing project. */;
  updateProjectCard?: UpdateProjectCardPayload | null /** Updates an existing project card. */;
  updateProjectColumn?: UpdateProjectColumnPayload | null /** Updates an existing project column. */;
  updatePullRequestReview?: UpdatePullRequestReviewPayload | null /** Updates the body of a pull request review. */;
  updatePullRequestReviewComment?: UpdatePullRequestReviewCommentPayload | null /** Updates a pull request review comment. */;
  updateSubscription?: UpdateSubscriptionPayload | null /** Updates the state for subscribable subjects. */;
  updateTopics?: UpdateTopicsPayload | null /** Replaces the repository's topics with the given topics. */;
}
/** Autogenerated return type of AcceptTopicSuggestion */
export interface AcceptTopicSuggestionPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  topic: Topic /** The accepted topic.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `topic` will change from `Topic!` to `Topic`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of AddComment */
export interface AddCommentPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  commentEdge: IssueCommentEdge /** The edge from the subject's comment connection.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `commentEdge` will change from `IssueCommentEdge!` to `IssueCommentEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  subject: Node /** The subject**Upcoming Change on 2019-01-01 UTC****Description:** Type for `subject` will change from `Node!` to `Node`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  timelineEdge: IssueTimelineItemEdge /** The edge from the subject's timeline connection.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `timelineEdge` will change from `IssueTimelineItemEdge!` to `IssueTimelineItemEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of AddProjectCard */
export interface AddProjectCardPayload {
  cardEdge: ProjectCardEdge /** The edge from the ProjectColumn's card connection.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `cardEdge` will change from `ProjectCardEdge!` to `ProjectCardEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  projectColumn: Project /** The ProjectColumn**Upcoming Change on 2019-01-01 UTC****Description:** Type for `projectColumn` will change from `Project!` to `Project`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of AddProjectColumn */
export interface AddProjectColumnPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  columnEdge: ProjectColumnEdge /** The edge from the project's column connection.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `columnEdge` will change from `ProjectColumnEdge!` to `ProjectColumnEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  project: Project /** The project**Upcoming Change on 2019-01-01 UTC****Description:** Type for `project` will change from `Project!` to `Project`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of AddPullRequestReview */
export interface AddPullRequestReviewPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  pullRequestReview: PullRequestReview /** The newly created pull request review.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequestReview` will change from `PullRequestReview!` to `PullRequestReview`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  reviewEdge: PullRequestReviewEdge /** The edge from the pull request's review connection.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `reviewEdge` will change from `PullRequestReviewEdge!` to `PullRequestReviewEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of AddPullRequestReviewComment */
export interface AddPullRequestReviewCommentPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  comment: PullRequestReviewComment /** The newly created comment.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `comment` will change from `PullRequestReviewComment!` to `PullRequestReviewComment`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  commentEdge: PullRequestReviewCommentEdge /** The edge from the review's comment connection.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `commentEdge` will change from `PullRequestReviewCommentEdge!` to `PullRequestReviewCommentEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of AddReaction */
export interface AddReactionPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  reaction: Reaction /** The reaction object.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `reaction` will change from `Reaction!` to `Reaction`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  subject: Reactable /** The reactable subject.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `subject` will change from `Reactable!` to `Reactable`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of AddStar */
export interface AddStarPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  starrable: Starrable /** The starrable.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `starrable` will change from `Starrable!` to `Starrable`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of CreateBranchProtectionRule */
export interface CreateBranchProtectionRulePayload {
  branchProtectionRule?: BranchProtectionRule | null /** The newly created BranchProtectionRule. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated return type of CreateProject */
export interface CreateProjectPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  project: Project /** The new project.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `project` will change from `Project!` to `Project`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of DeclineTopicSuggestion */
export interface DeclineTopicSuggestionPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  topic: Topic /** The declined topic.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `topic` will change from `Topic!` to `Topic`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of DeleteBranchProtectionRule */
export interface DeleteBranchProtectionRulePayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated return type of DeleteProject */
export interface DeleteProjectPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  owner: ProjectOwner /** The repository or organization the project was removed from.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `owner` will change from `ProjectOwner!` to `ProjectOwner`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of DeleteProjectCard */
export interface DeleteProjectCardPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  column: ProjectColumn /** The column the deleted card was in.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `column` will change from `ProjectColumn!` to `ProjectColumn`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  deletedCardId: string /** The deleted card ID.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `deletedCardId` will change from `ID!` to `ID`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of DeleteProjectColumn */
export interface DeleteProjectColumnPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  deletedColumnId: string /** The deleted column ID.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `deletedColumnId` will change from `ID!` to `ID`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  project: Project /** The project the deleted column was in.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `project` will change from `Project!` to `Project`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of DeletePullRequestReview */
export interface DeletePullRequestReviewPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  pullRequestReview: PullRequestReview /** The deleted pull request review.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequestReview` will change from `PullRequestReview!` to `PullRequestReview`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of DismissPullRequestReview */
export interface DismissPullRequestReviewPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  pullRequestReview: PullRequestReview /** The dismissed pull request review.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequestReview` will change from `PullRequestReview!` to `PullRequestReview`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of LockLockable */
export interface LockLockablePayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  lockedRecord?: Lockable | null /** The item that was locked. */;
}
/** Autogenerated return type of MoveProjectCard */
export interface MoveProjectCardPayload {
  cardEdge: ProjectCardEdge /** The new edge of the moved card.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `cardEdge` will change from `ProjectCardEdge!` to `ProjectCardEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated return type of MoveProjectColumn */
export interface MoveProjectColumnPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  columnEdge: ProjectColumnEdge /** The new edge of the moved column.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `columnEdge` will change from `ProjectColumnEdge!` to `ProjectColumnEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of RemoveOutsideCollaborator */
export interface RemoveOutsideCollaboratorPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  removedUser: User /** The user that was removed as an outside collaborator.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `removedUser` will change from `User!` to `User`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of RemoveReaction */
export interface RemoveReactionPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  reaction: Reaction /** The reaction object.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `reaction` will change from `Reaction!` to `Reaction`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  subject: Reactable /** The reactable subject.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `subject` will change from `Reactable!` to `Reactable`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of RemoveStar */
export interface RemoveStarPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  starrable: Starrable /** The starrable.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `starrable` will change from `Starrable!` to `Starrable`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of RequestReviews */
export interface RequestReviewsPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  pullRequest: PullRequest /** The pull request that is getting requests.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequest` will change from `PullRequest!` to `PullRequest`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  requestedReviewersEdge: UserEdge /** The edge from the pull request to the requested reviewers.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `requestedReviewersEdge` will change from `UserEdge!` to `UserEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of SubmitPullRequestReview */
export interface SubmitPullRequestReviewPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  pullRequestReview: PullRequestReview /** The submitted pull request review.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequestReview` will change from `PullRequestReview!` to `PullRequestReview`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of UnlockLockable */
export interface UnlockLockablePayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  unlockedRecord?: Lockable | null /** The item that was unlocked. */;
}
/** Autogenerated return type of UpdateBranchProtectionRule */
export interface UpdateBranchProtectionRulePayload {
  branchProtectionRule?: BranchProtectionRule | null /** The newly created BranchProtectionRule. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated return type of UpdateProject */
export interface UpdateProjectPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  project: Project /** The updated project.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `project` will change from `Project!` to `Project`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of UpdateProjectCard */
export interface UpdateProjectCardPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  projectCard: ProjectCard /** The updated ProjectCard.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `projectCard` will change from `ProjectCard!` to `ProjectCard`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of UpdateProjectColumn */
export interface UpdateProjectColumnPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  projectColumn: ProjectColumn /** The updated project column.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `projectColumn` will change from `ProjectColumn!` to `ProjectColumn`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of UpdatePullRequestReview */
export interface UpdatePullRequestReviewPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  pullRequestReview: PullRequestReview /** The updated pull request review.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequestReview` will change from `PullRequestReview!` to `PullRequestReview`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of UpdatePullRequestReviewComment */
export interface UpdatePullRequestReviewCommentPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  pullRequestReviewComment: PullRequestReviewComment /** The updated comment.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequestReviewComment` will change from `PullRequestReviewComment!` to `PullRequestReviewComment`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of UpdateSubscription */
export interface UpdateSubscriptionPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  subscribable: Subscribable /** The input subscribable entity.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `subscribable` will change from `Subscribable!` to `Subscribable`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** Autogenerated return type of UpdateTopics */
export interface UpdateTopicsPayload {
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
  invalidTopicNames?:
    | string[]
    | null /** Names of the provided topics that are not valid. */;
  repository: Repository /** The updated repository.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `repository` will change from `Repository!` to `Repository`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
}
/** An edge in a connection. */
export interface RepositoryInvitationEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: RepositoryInvitation | null /** The item at the end of the edge. */;
}
/** An invitation for a user to be added to a repository. */
export interface RepositoryInvitation extends Node {
  id: string;
  invitee: User /** The user who received the invitation. */;
  inviter: User /** The user who created the invitation. */;
  permission: RepositoryPermission /** The permission granted on this repository by this invitation. */;
  repository?: RepositoryInfo | null /** The Repository the user is invited to. */;
}
/** A special type of user which takes actions on behalf of GitHub Apps. */
export interface Bot extends Node, Actor, UniformResourceLocatable {
  avatarUrl: Uri /** A URL pointing to the GitHub App's public avatar. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
  login: string /** The username of the actor. */;
  resourcePath: Uri /** The HTTP path for this bot */;
  updatedAt: DateTime /** Identifies the date and time when the object was last updated. */;
  url: Uri /** The HTTP URL for this bot */;
}
/** Represents a Git blob. */
export interface Blob extends Node, GitObject {
  abbreviatedOid: string /** An abbreviated version of the Git object ID */;
  byteSize: number /** Byte size of Blob object */;
  commitResourcePath: Uri /** The HTTP path for this Git object */;
  commitUrl: Uri /** The HTTP URL for this Git object */;
  id: string;
  isBinary: boolean /** Indicates whether the Blob is binary or text */;
  isTruncated: boolean /** Indicates whether the contents is truncated */;
  oid: GitObjectId /** The Git object ID */;
  repository: Repository /** The Repository the Git object belongs to */;
  text?: string | null /** UTF8 text data or null if the Blob is binary */;
}
/** An edge in a connection. */
export interface PullRequestTimelineItemsEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: PullRequestTimelineItems | null /** The item at the end of the edge. */;
}
/** Represents a 'base_ref_changed' event on a given issue or pull request. */
export interface BaseRefChangedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
}
/** Represents a 'added_to_project' event on a given issue or pull request. */
export interface AddedToProjectEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
}
/** Represents a 'comment_deleted' event on a given issue or pull request. */
export interface CommentDeletedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
}
/** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
export interface ConvertedNoteToIssueEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
}
/** Represents a 'mentioned' event on a given issue or pull request. */
export interface MentionedEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
}
/** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
export interface MovedColumnsInProjectEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
}
/** Represents a 'removed_from_project' event on a given issue or pull request. */
export interface RemovedFromProjectEvent extends Node {
  actor?: Actor | null /** Identifies the actor who performed the event. */;
  createdAt: DateTime /** Identifies the date and time when the object was created. */;
  databaseId?:
    | number
    | null /** Identifies the primary key from the database. */;
  id: string;
}
/** An edge in a connection. */
export interface IssueTimelineItemsEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: IssueTimelineItems | null /** The item at the end of the edge. */;
}
/** The connection type for Topic. */
export interface TopicConnection {
  edges?: (TopicEdge | null)[] | null /** A list of edges. */;
  nodes?: (Topic | null)[] | null /** A list of nodes. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount: number /** Identifies the total count of items in the connection. */;
}
/** An edge in a connection. */
export interface TopicEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: Topic | null /** The item at the end of the edge. */;
}
/** An edge in a connection. */
export interface AppEdge {
  cursor: string /** A cursor for use in pagination. */;
  node?: App | null /** The item at the end of the edge. */;
}
/** Represents a GPG signature on a Commit or Tag. */
export interface GpgSignature extends GitSignature {
  email: string /** Email used to sign this object. */;
  isValid: boolean /** True if the signature is valid and verified by GitHub. */;
  keyId?:
    | string
    | null /** Hex-encoded ID of the key that signed this object. */;
  payload: string /** Payload for GPG signing object. Raw ODB object without the signature header. */;
  signature: string /** ASCII-armored signature header from object. */;
  signer?: User | null /** GitHub user corresponding to the email signing this commit. */;
  state: GitSignatureState /** The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid. */;
  wasSignedByGitHub: boolean /** True if the signature was made with GitHub's signing key. */;
}
/** Represents an S/MIME signature on a Commit or Tag. */
export interface SmimeSignature extends GitSignature {
  email: string /** Email used to sign this object. */;
  isValid: boolean /** True if the signature is valid and verified by GitHub. */;
  payload: string /** Payload for GPG signing object. Raw ODB object without the signature header. */;
  signature: string /** ASCII-armored signature header from object. */;
  signer?: User | null /** GitHub user corresponding to the email signing this commit. */;
  state: GitSignatureState /** The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid. */;
  wasSignedByGitHub: boolean /** True if the signature was made with GitHub's signing key. */;
}
/** Represents a Git tag. */
export interface Tag extends Node, GitObject {
  abbreviatedOid: string /** An abbreviated version of the Git object ID */;
  commitResourcePath: Uri /** The HTTP path for this Git object */;
  commitUrl: Uri /** The HTTP URL for this Git object */;
  id: string;
  message?: string | null /** The Git tag message. */;
  name: string /** The Git tag name. */;
  oid: GitObjectId /** The Git object ID */;
  repository: Repository /** The Repository the Git object belongs to */;
  tagger?: GitActor | null /** Details about the tag author. */;
  target: GitObject /** The Git object the tag points to. */;
}
/** Represents an unknown signature on a Commit or Tag. */
export interface UnknownSignature extends GitSignature {
  email: string /** Email used to sign this object. */;
  isValid: boolean /** True if the signature is valid and verified by GitHub. */;
  payload: string /** Payload for GPG signing object. Raw ODB object without the signature header. */;
  signature: string /** ASCII-armored signature header from object. */;
  signer?: User | null /** GitHub user corresponding to the email signing this commit. */;
  state: GitSignatureState /** The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid. */;
  wasSignedByGitHub: boolean /** True if the signature was made with GitHub's signing key. */;
}
/** Ordering options for repository connections */
export interface RepositoryOrder {
  field: RepositoryOrderField /** The field to order repositories by. */;
  direction: OrderDirection /** The ordering direction. */;
}
/** Ways in which star connections can be ordered. */
export interface StarOrder {
  field: StarOrderField /** The field in which to order nodes by. */;
  direction: OrderDirection /** The direction in which to order nodes. */;
}
/** Ways in which lists of issues can be ordered upon return. */
export interface IssueOrder {
  field: IssueOrderField /** The field in which to order issues by. */;
  direction: OrderDirection /** The direction in which to order issues by the specified field. */;
}
/** Ways in which lists of reactions can be ordered upon return. */
export interface ReactionOrder {
  field: ReactionOrderField /** The field in which to order reactions by. */;
  direction: OrderDirection /** The direction in which to order reactions by the specified field. */;
}
/** Specifies an author for filtering Git commits. */
export interface CommitAuthor {
  id?:
    | string
    | null /** ID of a User to filter by. If non-null, only commits authored by this user will be returned. This field takes precedence over emails. */;
  emails?:
    | string[]
    | null /** Email addresses to filter by. Commits authored by any of the specified email addresses will be returned. */;
}
/** Ways in which team connections can be ordered. */
export interface TeamOrder {
  field: TeamOrderField /** The field in which to order nodes by. */;
  direction: OrderDirection /** The direction in which to order nodes. */;
}
/** Ordering options for team member connections */
export interface TeamMemberOrder {
  field: TeamMemberOrderField /** The field to order team members by. */;
  direction: OrderDirection /** The ordering direction. */;
}
/** Ordering options for team repository connections */
export interface TeamRepositoryOrder {
  field: TeamRepositoryOrderField /** The field to order repositories by. */;
  direction: OrderDirection /** The ordering direction. */;
}
/** Ordering options for language connections. */
export interface LanguageOrder {
  field: LanguageOrderField /** The field to order languages by. */;
  direction: OrderDirection /** The ordering direction. */;
}
/** Ordering options for milestone connections. */
export interface MilestoneOrder {
  field: MilestoneOrderField /** The field to order milestones by. */;
  direction: OrderDirection /** The ordering direction. */;
}
/** Ways in which lists of projects can be ordered upon return. */
export interface ProjectOrder {
  field: ProjectOrderField /** The field in which to order projects by. */;
  direction: OrderDirection /** The direction in which to order projects by the specified field. */;
}
/** Ways in which lists of git refs can be ordered upon return. */
export interface RefOrder {
  field: RefOrderField /** The field in which to order refs by. */;
  direction: OrderDirection /** The direction in which to order refs by the specified field. */;
}
/** Ways in which lists of releases can be ordered upon return. */
export interface ReleaseOrder {
  field: ReleaseOrderField /** The field in which to order releases by. */;
  direction: OrderDirection /** The direction in which to order releases by the specified field. */;
}
/** Ordering options for gist connections */
export interface GistOrder {
  field: GistOrderField /** The field to order repositories by. */;
  direction: OrderDirection /** The ordering direction. */;
}
/** Autogenerated input type of AcceptTopicSuggestion */
export interface AcceptTopicSuggestionInput {
  repositoryId: string /** The Node ID of the repository. */;
  name: string /** The name of the suggested topic. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of AddComment */
export interface AddCommentInput {
  subjectId: string /** The Node ID of the subject to modify. */;
  body: string /** The contents of the comment. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of AddProjectCard */
export interface AddProjectCardInput {
  projectColumnId: string /** The Node ID of the ProjectColumn. */;
  contentId?:
    | string
    | null /** The content of the card. Must be a member of the ProjectCardItem union */;
  note?: string | null /** The note on the card. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of AddProjectColumn */
export interface AddProjectColumnInput {
  projectId: string /** The Node ID of the project. */;
  name: string /** The name of the column. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of AddPullRequestReview */
export interface AddPullRequestReviewInput {
  pullRequestId: string /** The Node ID of the pull request to modify. */;
  commitOID?: GitObjectId | null /** The commit OID the review pertains to. */;
  body?: string | null /** The contents of the review body comment. */;
  event?: PullRequestReviewEvent | null /** The event to perform on the pull request review. */;
  comments?:
    | (DraftPullRequestReviewComment | null)[]
    | null /** The review line comments. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Specifies a review comment to be left with a Pull Request Review. */
export interface DraftPullRequestReviewComment {
  path: string /** Path to the file being commented on. */;
  position: number /** Position in the file to leave a comment on. */;
  body: string /** Body of the comment to leave. */;
}
/** Autogenerated input type of AddPullRequestReviewComment */
export interface AddPullRequestReviewCommentInput {
  pullRequestReviewId: string /** The Node ID of the review to modify. */;
  commitOID?: GitObjectId | null /** The SHA of the commit to comment on. */;
  body: string /** The text of the comment. */;
  path?: string | null /** The relative path of the file to comment on. */;
  position?: number | null /** The line index in the diff to comment on. */;
  inReplyTo?: string | null /** The comment id to reply to. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of AddReaction */
export interface AddReactionInput {
  subjectId: string /** The Node ID of the subject to modify. */;
  content: ReactionContent /** The name of the emoji to react with. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of AddStar */
export interface AddStarInput {
  starrableId: string /** The Starrable ID to star. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of CreateBranchProtectionRule */
export interface CreateBranchProtectionRuleInput {
  repositoryId: string /** The global relay id of the repository in which a new branch protection rule should be created in. */;
  pattern: string /** The glob-like pattern used to determine matching branches. */;
  requiresApprovingReviews?:
    | boolean
    | null /** Are approving reviews required to update matching branches. */;
  requiredApprovingReviewCount?:
    | number
    | null /** Number of approving reviews required to update matching branches. */;
  requiresCommitSignatures?:
    | boolean
    | null /** Are commits required to be signed. */;
  isAdminEnforced?:
    | boolean
    | null /** Can admins overwrite branch protection. */;
  requiresStatusChecks?:
    | boolean
    | null /** Are status checks required to update matching branches. */;
  requiresStrictStatusChecks?:
    | boolean
    | null /** Are branches required to be up to date before merging. */;
  requiresCodeOwnerReviews?:
    | boolean
    | null /** Are reviews from code owners required to update matching branches. */;
  dismissesStaleReviews?:
    | boolean
    | null /** Will new commits pushed to matching branches dismiss pull request review approvals. */;
  restrictsReviewDismissals?:
    | boolean
    | null /** Is dismissal of pull request reviews restricted. */;
  reviewDismissalActorIds?:
    | string[]
    | null /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */;
  restrictsPushes?:
    | boolean
    | null /** Is pushing to matching branches restricted. */;
  pushActorIds?:
    | string[]
    | null /** A list of User or Team IDs allowed to push to matching branches. */;
  requiredStatusCheckContexts?:
    | string[]
    | null /** List of required status check contexts that must pass for commits to be accepted to matching branches. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of CreateProject */
export interface CreateProjectInput {
  ownerId: string /** The owner ID to create the project under. */;
  name: string /** The name of project. */;
  body?: string | null /** The description of project. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of DeclineTopicSuggestion */
export interface DeclineTopicSuggestionInput {
  repositoryId: string /** The Node ID of the repository. */;
  name: string /** The name of the suggested topic. */;
  reason: TopicSuggestionDeclineReason /** The reason why the suggested topic is declined. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of DeleteBranchProtectionRule */
export interface DeleteBranchProtectionRuleInput {
  branchProtectionRuleId: string /** The global relay id of the branch protection rule to be deleted. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of DeleteProject */
export interface DeleteProjectInput {
  projectId: string /** The Project ID to update. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of DeleteProjectCard */
export interface DeleteProjectCardInput {
  cardId: string /** The id of the card to delete. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of DeleteProjectColumn */
export interface DeleteProjectColumnInput {
  columnId: string /** The id of the column to delete. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of DeletePullRequestReview */
export interface DeletePullRequestReviewInput {
  pullRequestReviewId: string /** The Node ID of the pull request review to delete. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of DismissPullRequestReview */
export interface DismissPullRequestReviewInput {
  pullRequestReviewId: string /** The Node ID of the pull request review to modify. */;
  message: string /** The contents of the pull request review dismissal message. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of LockLockable */
export interface LockLockableInput {
  lockableId: string /** ID of the issue or pull request to be locked. */;
  lockReason?: LockReason | null /** A reason for why the issue or pull request will be locked. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of MoveProjectCard */
export interface MoveProjectCardInput {
  cardId: string /** The id of the card to move. */;
  columnId: string /** The id of the column to move it into. */;
  afterCardId?:
    | string
    | null /** Place the new card after the card with this id. Pass null to place it at the top. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of MoveProjectColumn */
export interface MoveProjectColumnInput {
  columnId: string /** The id of the column to move. */;
  afterColumnId?:
    | string
    | null /** Place the new column after the column with this id. Pass null to place it at the front. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of RemoveOutsideCollaborator */
export interface RemoveOutsideCollaboratorInput {
  userId: string /** The ID of the outside collaborator to remove. */;
  organizationId: string /** The ID of the organization to remove the outside collaborator from. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of RemoveReaction */
export interface RemoveReactionInput {
  subjectId: string /** The Node ID of the subject to modify. */;
  content: ReactionContent /** The name of the emoji reaction to remove. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of RemoveStar */
export interface RemoveStarInput {
  starrableId: string /** The Starrable ID to unstar. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of RequestReviews */
export interface RequestReviewsInput {
  pullRequestId: string /** The Node ID of the pull request to modify. */;
  userIds?: string[] | null /** The Node IDs of the user to request. */;
  teamIds?: string[] | null /** The Node IDs of the team to request. */;
  union?: boolean | null /** Add users to the set rather than replace. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of SubmitPullRequestReview */
export interface SubmitPullRequestReviewInput {
  pullRequestReviewId: string /** The Pull Request Review ID to submit. */;
  event: PullRequestReviewEvent /** The event to send to the Pull Request Review. */;
  body?: string | null /** The text field to set on the Pull Request Review. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of UnlockLockable */
export interface UnlockLockableInput {
  lockableId: string /** ID of the issue or pull request to be unlocked. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of UpdateBranchProtectionRule */
export interface UpdateBranchProtectionRuleInput {
  branchProtectionRuleId: string /** The global relay id of the branch protection rule to be updated. */;
  pattern?:
    | string
    | null /** The glob-like pattern used to determine matching branches. */;
  requiresApprovingReviews?:
    | boolean
    | null /** Are approving reviews required to update matching branches. */;
  requiredApprovingReviewCount?:
    | number
    | null /** Number of approving reviews required to update matching branches. */;
  requiresCommitSignatures?:
    | boolean
    | null /** Are commits required to be signed. */;
  isAdminEnforced?:
    | boolean
    | null /** Can admins overwrite branch protection. */;
  requiresStatusChecks?:
    | boolean
    | null /** Are status checks required to update matching branches. */;
  requiresStrictStatusChecks?:
    | boolean
    | null /** Are branches required to be up to date before merging. */;
  requiresCodeOwnerReviews?:
    | boolean
    | null /** Are reviews from code owners required to update matching branches. */;
  dismissesStaleReviews?:
    | boolean
    | null /** Will new commits pushed to matching branches dismiss pull request review approvals. */;
  restrictsReviewDismissals?:
    | boolean
    | null /** Is dismissal of pull request reviews restricted. */;
  reviewDismissalActorIds?:
    | string[]
    | null /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */;
  restrictsPushes?:
    | boolean
    | null /** Is pushing to matching branches restricted. */;
  pushActorIds?:
    | string[]
    | null /** A list of User or Team IDs allowed to push to matching branches. */;
  requiredStatusCheckContexts?:
    | string[]
    | null /** List of required status check contexts that must pass for commits to be accepted to matching branches. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of UpdateProject */
export interface UpdateProjectInput {
  projectId: string /** The Project ID to update. */;
  name?: string | null /** The name of project. */;
  body?: string | null /** The description of project. */;
  state?: ProjectState | null /** Whether the project is open or closed. */;
  public?: boolean | null /** Whether the project is public or not. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of UpdateProjectCard */
export interface UpdateProjectCardInput {
  projectCardId: string /** The ProjectCard ID to update. */;
  isArchived?:
    | boolean
    | null /** Whether or not the ProjectCard should be archived */;
  note?: string | null /** The note of ProjectCard. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of UpdateProjectColumn */
export interface UpdateProjectColumnInput {
  projectColumnId: string /** The ProjectColumn ID to update. */;
  name: string /** The name of project column. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of UpdatePullRequestReview */
export interface UpdatePullRequestReviewInput {
  pullRequestReviewId: string /** The Node ID of the pull request review to modify. */;
  body: string /** The contents of the pull request review body. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of UpdatePullRequestReviewComment */
export interface UpdatePullRequestReviewCommentInput {
  pullRequestReviewCommentId: string /** The Node ID of the comment to modify. */;
  body: string /** The text of the comment. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of UpdateSubscription */
export interface UpdateSubscriptionInput {
  subscribableId: string /** The Node ID of the subscribable object to modify. */;
  state: SubscriptionState /** The new state of the subscription. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Autogenerated input type of UpdateTopics */
export interface UpdateTopicsInput {
  repositoryId: string /** The Node ID of the repository. */;
  topicNames: string[] /** An array of topic names. */;
  clientMutationId?:
    | string
    | null /** A unique identifier for the client performing the mutation. */;
}
/** Ways in which lists of issues can be ordered upon return. */
export interface PullRequestOrder {
  field: PullRequestOrderField /** The field in which to order pull requests by. */;
  direction: OrderDirection /** The direction in which to order pull requests by the specified field. */;
}
export interface CodeOfConductQueryArgs {
  key: string /** The code of conduct's key */;
}
export interface LicenseQueryArgs {
  key: string /** The license's downcased SPDX ID */;
}
export interface MarketplaceCategoriesQueryArgs {
  includeCategories?:
    | string[]
    | null /** Return only the specified categories. */;
  excludeEmpty?: boolean | null /** Exclude categories with no listings. */;
  excludeSubcategories?:
    | boolean
    | null /** Returns top level categories only, excluding any subcategories. */;
}
export interface MarketplaceCategoryQueryArgs {
  slug: string /** The URL slug of the category. */;
  useTopicAliases?:
    | boolean
    | null /** Also check topic aliases for the category slug */;
}
export interface MarketplaceListingQueryArgs {
  slug: string /** Select the listing that matches this slug. It's the short name of the listing used in its URL. */;
}
export interface MarketplaceListingsQueryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  categorySlug?:
    | string
    | null /** Select only listings with the given category. */;
  useTopicAliases?:
    | boolean
    | null /** Also check topic aliases for the category slug */;
  viewerCanAdmin?:
    | boolean
    | null /** Select listings to which user has admin access. If omitted, listings visible to theviewer are returned. */;
  adminId?:
    | string
    | null /** Select listings that can be administered by the specified user. */;
  organizationId?:
    | string
    | null /** Select listings for products owned by the specified organization. */;
  allStates?:
    | boolean
    | null /** Select listings visible to the viewer even if they are not approved. If omitted orfalse, only approved listings will be returned. */;
  slugs?:
    | (string | null)[]
    | null /** Select the listings with these slugs, if they are visible to the viewer. */;
  primaryCategoryOnly?:
    | boolean
    | null /** Select only listings where the primary category matches the given category slug. */;
  withFreeTrialsOnly?:
    | boolean
    | null /** Select only listings that offer a free trial. */;
}
export interface NodeQueryArgs {
  id: string /** ID of the object. */;
}
export interface NodesQueryArgs {
  ids: string[] /** The list of node IDs. */;
}
export interface OrganizationQueryArgs {
  login: string /** The organization's login. */;
}
export interface RateLimitQueryArgs {
  dryRun?:
    | boolean
    | null /** If true, calculate the cost for the query without evaluating it */;
}
export interface RepositoryQueryArgs {
  owner: string /** The login field of a user or organization */;
  name: string /** The name of the repository */;
}
export interface RepositoryOwnerQueryArgs {
  login: string /** The username to lookup the owner by. */;
}
export interface ResourceQueryArgs {
  url: Uri /** The URL. */;
}
export interface SearchQueryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  query: string /** The search string to look for. */;
  type: SearchType /** The types of search items to search within. */;
}
export interface TopicQueryArgs {
  name: string /** The topic's name. */;
}
export interface UserQueryArgs {
  login: string /** The user's login. */;
}
export interface LogoUrlMarketplaceListingArgs {
  size?: number | null /** The size in pixels of the resulting square image. */;
}
export interface LogoUrlAppArgs {
  size?: number | null /** The size of the resulting image. */;
}
export interface AvatarUrlOrganizationArgs {
  size?: number | null /** The size of the resulting square image. */;
}
export interface MembersOrganizationArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface PinnedRepositoriesOrganizationArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
  orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
  affiliations?:
    | (RepositoryAffiliation | null)[]
    | null /** Array of viewer's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the current viewer owns. */;
  ownerAffiliations?:
    | (RepositoryAffiliation | null)[]
    | null /** Array of owner's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the organization or user being viewed owns. */;
  isLocked?:
    | boolean
    | null /** If non-null, filters repositories according to whether they have been locked */;
}
export interface ProjectOrganizationArgs {
  number: number /** The project number to find. */;
}
export interface ProjectsOrganizationArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  orderBy?: ProjectOrder | null /** Ordering options for projects returned from the connection */;
  search?:
    | string
    | null /** Query to search projects by, currently only searching by name. */;
  states?:
    | ProjectState[]
    | null /** A list of states to filter the projects by. */;
}
export interface RepositoriesOrganizationArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
  orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
  affiliations?:
    | (RepositoryAffiliation | null)[]
    | null /** Array of viewer's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the current viewer owns. */;
  ownerAffiliations?:
    | (RepositoryAffiliation | null)[]
    | null /** Array of owner's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the organization or user being viewed owns. */;
  isLocked?:
    | boolean
    | null /** If non-null, filters repositories according to whether they have been locked */;
  isFork?:
    | boolean
    | null /** If non-null, filters repositories according to whether they are forks of another repository */;
}
export interface RepositoryOrganizationArgs {
  name: string /** Name of Repository to find. */;
}
export interface TeamOrganizationArgs {
  slug: string /** The name or slug of the team to find. */;
}
export interface TeamsOrganizationArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  privacy?: TeamPrivacy | null /** If non-null, filters teams according to privacy */;
  role?: TeamRole | null /** If non-null, filters teams according to whether the viewer is an admin or member on team */;
  query?:
    | string
    | null /** If non-null, filters teams with query on team name and team slug */;
  userLogins?: string[] | null /** User logins to filter by */;
  orderBy?: TeamOrder | null /** Ordering options for teams returned from the connection */;
  ldapMapped?:
    | boolean
    | null /** If true, filters teams that are mapped to an LDAP Group (Enterprise only) */;
  rootTeamsOnly?: boolean | null /** If true, restrict to only root teams */;
}
export interface ColumnsProjectArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface PendingCardsProjectArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  archivedStates?:
    | (ProjectCardArchivedState | null)[]
    | null /** A list of archived states to filter the cards by */;
}
export interface CardsProjectColumnArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  archivedStates?:
    | (ProjectCardArchivedState | null)[]
    | null /** A list of archived states to filter the cards by */;
}
export interface AssigneesIssueArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface CommentsIssueArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface LabelsIssueArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface ParticipantsIssueArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface ProjectCardsIssueArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  archivedStates?:
    | (ProjectCardArchivedState | null)[]
    | null /** A list of archived states to filter the cards by */;
}
export interface ReactionsIssueArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  content?: ReactionContent | null /** Allows filtering Reactions by emoji. */;
  orderBy?: ReactionOrder | null /** Allows specifying the order in which reactions are returned. */;
}
export interface TimelineIssueArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  since?: DateTime | null /** Allows filtering timeline events by a `since` timestamp. */;
}
export interface UserContentEditsIssueArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface AvatarUrlUserArgs {
  size?: number | null /** The size of the resulting square image. */;
}
export interface CommitCommentsUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface FollowersUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface FollowingUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface GistUserArgs {
  name: string /** The gist name to find. */;
}
export interface GistCommentsUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface GistsUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  privacy?: GistPrivacy | null /** Filters Gists according to privacy. */;
  orderBy?: GistOrder | null /** Ordering options for gists returned from the connection */;
}
export interface IssueCommentsUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface IssuesUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  orderBy?: IssueOrder | null /** Ordering options for issues returned from the connection. */;
  labels?:
    | string[]
    | null /** A list of label names to filter the pull requests by. */;
  states?: IssueState[] | null /** A list of states to filter the issues by. */;
}
export interface OrganizationUserArgs {
  login: string /** The login of the organization to find. */;
}
export interface OrganizationsUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface PinnedRepositoriesUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
  orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
  affiliations?:
    | (RepositoryAffiliation | null)[]
    | null /** Array of viewer's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the current viewer owns. */;
  ownerAffiliations?:
    | (RepositoryAffiliation | null)[]
    | null /** Array of owner's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the organization or user being viewed owns. */;
  isLocked?:
    | boolean
    | null /** If non-null, filters repositories according to whether they have been locked */;
}
export interface PublicKeysUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface PullRequestsUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  states?:
    | PullRequestState[]
    | null /** A list of states to filter the pull requests by. */;
  labels?:
    | string[]
    | null /** A list of label names to filter the pull requests by. */;
  headRefName?:
    | string
    | null /** The head ref name to filter the pull requests by. */;
  baseRefName?:
    | string
    | null /** The base ref name to filter the pull requests by. */;
  orderBy?: IssueOrder | null /** Ordering options for pull requests returned from the connection. */;
}
export interface RepositoriesUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
  orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
  affiliations?:
    | (RepositoryAffiliation | null)[]
    | null /** Array of viewer's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the current viewer owns. */;
  ownerAffiliations?:
    | (RepositoryAffiliation | null)[]
    | null /** Array of owner's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the organization or user being viewed owns. */;
  isLocked?:
    | boolean
    | null /** If non-null, filters repositories according to whether they have been locked */;
  isFork?:
    | boolean
    | null /** If non-null, filters repositories according to whether they are forks of another repository */;
}
export interface RepositoriesContributedToUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
  orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
  isLocked?:
    | boolean
    | null /** If non-null, filters repositories according to whether they have been locked */;
  includeUserRepositories?:
    | boolean
    | null /** If true, include user repositories */;
  contributionTypes?:
    | (RepositoryContributionType | null)[]
    | null /** If non-null, include only the specified types of contributions. The GitHub.com UI uses [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY] */;
}
export interface RepositoryUserArgs {
  name: string /** Name of Repository to find. */;
}
export interface StarredRepositoriesUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  ownedByViewer?:
    | boolean
    | null /** Filters starred repositories to only return repositories owned by the viewer. */;
  orderBy?: StarOrder | null /** Order for connection */;
}
export interface WatchingUserArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
  orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
  affiliations?:
    | (RepositoryAffiliation | null)[]
    | null /** Affiliation options for repositories returned from the connection */;
  ownerAffiliations?:
    | (RepositoryAffiliation | null)[]
    | null /** Array of owner's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the organization or user being viewed owns. */;
  isLocked?:
    | boolean
    | null /** If non-null, filters repositories according to whether they have been locked */;
}
export interface AssignableUsersRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface BranchProtectionRulesRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface CollaboratorsRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  affiliation?: CollaboratorAffiliation | null /** Collaborators affiliation level with a repository. */;
}
export interface CommitCommentsRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface DeployKeysRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface DeploymentsRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  environments?: string[] | null /** Environments to list deployments for */;
}
export interface ForksRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
  orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
  affiliations?:
    | (RepositoryAffiliation | null)[]
    | null /** Array of viewer's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the current viewer owns. */;
  ownerAffiliations?:
    | (RepositoryAffiliation | null)[]
    | null /** Array of owner's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the organization or user being viewed owns. */;
  isLocked?:
    | boolean
    | null /** If non-null, filters repositories according to whether they have been locked */;
}
export interface IssueRepositoryArgs {
  number: number /** The number for the issue to be returned. */;
}
export interface IssueOrPullRequestRepositoryArgs {
  number: number /** The number for the issue to be returned. */;
}
export interface IssuesRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  orderBy?: IssueOrder | null /** Ordering options for issues returned from the connection. */;
  labels?:
    | string[]
    | null /** A list of label names to filter the pull requests by. */;
  states?: IssueState[] | null /** A list of states to filter the issues by. */;
}
export interface LabelRepositoryArgs {
  name: string /** Label name */;
}
export interface LabelsRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  query?:
    | string
    | null /** If provided, searches labels by name and description. */;
}
export interface LanguagesRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  orderBy?: LanguageOrder | null /** Order for connection */;
}
export interface MentionableUsersRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface MilestoneRepositoryArgs {
  number: number /** The number for the milestone to be returned. */;
}
export interface MilestonesRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  states?:
    | MilestoneState[]
    | null /** Filter by the state of the milestones. */;
  orderBy?: MilestoneOrder | null /** Ordering options for milestones. */;
}
export interface ObjectRepositoryArgs {
  oid?: GitObjectId | null /** The Git object ID */;
  expression?:
    | string
    | null /** A Git revision expression suitable for rev-parse */;
}
export interface ProjectRepositoryArgs {
  number: number /** The project number to find. */;
}
export interface ProjectsRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  orderBy?: ProjectOrder | null /** Ordering options for projects returned from the connection */;
  search?:
    | string
    | null /** Query to search projects by, currently only searching by name. */;
  states?:
    | ProjectState[]
    | null /** A list of states to filter the projects by. */;
}
export interface ProtectedBranchesRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface PullRequestRepositoryArgs {
  number: number /** The number for the pull request to be returned. */;
}
export interface PullRequestsRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  states?:
    | PullRequestState[]
    | null /** A list of states to filter the pull requests by. */;
  labels?:
    | string[]
    | null /** A list of label names to filter the pull requests by. */;
  headRefName?:
    | string
    | null /** The head ref name to filter the pull requests by. */;
  baseRefName?:
    | string
    | null /** The base ref name to filter the pull requests by. */;
  orderBy?: IssueOrder | null /** Ordering options for pull requests returned from the connection. */;
}
export interface RefRepositoryArgs {
  qualifiedName: string /** The ref to retrieve. Fully qualified matches are checked in order (`refs/heads/master`) before falling back onto checks for short name matches (`master`). */;
}
export interface RefsRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  refPrefix: string /** A ref name prefix like `refs/heads/`, `refs/tags/`, etc. */;
  direction?: OrderDirection | null /** DEPRECATED: use orderBy. The ordering direction. */;
  orderBy?: RefOrder | null /** Ordering options for refs returned from the connection. */;
}
export interface ReleaseRepositoryArgs {
  tagName: string /** The name of the Tag the Release was created from */;
}
export interface ReleasesRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  orderBy?: ReleaseOrder | null /** Order for connection */;
}
export interface RepositoryTopicsRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface ShortDescriptionHtmlRepositoryArgs {
  limit?: number | null /** How many characters to return. */;
}
export interface StargazersRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  orderBy?: StarOrder | null /** Order for connection */;
}
export interface WatchersRepositoryArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface BranchProtectionRuleConflictsBranchProtectionRuleArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface MatchingRefsBranchProtectionRuleArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface PushAllowancesBranchProtectionRuleArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface ReviewDismissalAllowancesBranchProtectionRuleArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface AssociatedPullRequestsRefArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  states?:
    | PullRequestState[]
    | null /** A list of states to filter the pull requests by. */;
  labels?:
    | string[]
    | null /** A list of label names to filter the pull requests by. */;
  headRefName?:
    | string
    | null /** The head ref name to filter the pull requests by. */;
  baseRefName?:
    | string
    | null /** The base ref name to filter the pull requests by. */;
  orderBy?: IssueOrder | null /** Ordering options for pull requests returned from the connection. */;
}
export interface AssigneesPullRequestArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface CommentsPullRequestArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface CommitsPullRequestArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface LabelsPullRequestArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface ParticipantsPullRequestArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface ProjectCardsPullRequestArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  archivedStates?:
    | (ProjectCardArchivedState | null)[]
    | null /** A list of archived states to filter the cards by */;
}
export interface ReactionsPullRequestArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  content?: ReactionContent | null /** Allows filtering Reactions by emoji. */;
  orderBy?: ReactionOrder | null /** Allows specifying the order in which reactions are returned. */;
}
export interface ReviewRequestsPullRequestArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface ReviewsPullRequestArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  states?:
    | PullRequestReviewState[]
    | null /** A list of states to filter the reviews. */;
  author?: string | null /** Filter by author of the review. */;
}
export interface TimelinePullRequestArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  since?: DateTime | null /** Allows filtering timeline events by a `since` timestamp. */;
}
export interface UserContentEditsPullRequestArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface IssuesLabelArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  orderBy?: IssueOrder | null /** Ordering options for issues returned from the connection. */;
  labels?:
    | string[]
    | null /** A list of label names to filter the pull requests by. */;
  states?: IssueState[] | null /** A list of states to filter the issues by. */;
}
export interface PullRequestsLabelArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  states?:
    | PullRequestState[]
    | null /** A list of states to filter the pull requests by. */;
  labels?:
    | string[]
    | null /** A list of label names to filter the pull requests by. */;
  headRefName?:
    | string
    | null /** The head ref name to filter the pull requests by. */;
  baseRefName?:
    | string
    | null /** The base ref name to filter the pull requests by. */;
  orderBy?: IssueOrder | null /** Ordering options for pull requests returned from the connection. */;
}
export interface UsersReactionGroupArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface ReactionsIssueCommentArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  content?: ReactionContent | null /** Allows filtering Reactions by emoji. */;
  orderBy?: ReactionOrder | null /** Allows specifying the order in which reactions are returned. */;
}
export interface UserContentEditsIssueCommentArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface BlameCommitArgs {
  path: string /** The file whose Git blame information you want. */;
}
export interface CommentsCommitArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface HistoryCommitArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  path?:
    | string
    | null /** If non-null, filters history to only show commits touching files under this path. */;
  author?: CommitAuthor | null /** If non-null, filters history to only show commits with matching authorship. */;
  since?: GitTimestamp | null /** Allows specifying a beginning time or date for fetching commits. */;
  until?: GitTimestamp | null /** Allows specifying an ending time or date for fetching commits. */;
}
export interface ParentsCommitArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface AvatarUrlGitActorArgs {
  size?: number | null /** The size of the resulting square image. */;
}
export interface ReactionsCommitCommentArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  content?: ReactionContent | null /** Allows filtering Reactions by emoji. */;
  orderBy?: ReactionOrder | null /** Allows specifying the order in which reactions are returned. */;
}
export interface UserContentEditsCommitCommentArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface ContextStatusArgs {
  name: string /** The context name. */;
}
export interface IssuesMilestoneArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  orderBy?: IssueOrder | null /** Ordering options for issues returned from the connection. */;
  labels?:
    | string[]
    | null /** A list of label names to filter the pull requests by. */;
  states?: IssueState[] | null /** A list of states to filter the issues by. */;
}
export interface PullRequestsMilestoneArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  states?:
    | PullRequestState[]
    | null /** A list of states to filter the pull requests by. */;
  labels?:
    | string[]
    | null /** A list of label names to filter the pull requests by. */;
  headRefName?:
    | string
    | null /** The head ref name to filter the pull requests by. */;
  baseRefName?:
    | string
    | null /** The base ref name to filter the pull requests by. */;
  orderBy?: IssueOrder | null /** Ordering options for pull requests returned from the connection. */;
}
export interface AncestorsTeamArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface AvatarUrlTeamArgs {
  size?: number | null /** The size in pixels of the resulting square image. */;
}
export interface ChildTeamsTeamArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  orderBy?: TeamOrder | null /** Order for connection */;
  userLogins?: string[] | null /** User logins to filter by */;
  immediateOnly?:
    | boolean
    | null /** Whether to list immediate child teams or all descendant child teams. */;
}
export interface InvitationsTeamArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface MembersTeamArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  query?: string | null /** The search string to look for. */;
  membership?: TeamMembershipType | null /** Filter by membership type */;
  role?: TeamMemberRole | null /** Filter by team member role */;
  orderBy?: TeamMemberOrder | null /** Order for the connection. */;
}
export interface RepositoriesTeamArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  query?: string | null /** The search string to look for. */;
  orderBy?: TeamRepositoryOrder | null /** Order for the connection. */;
}
export interface CommentsPullRequestReviewArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface OnBehalfOfPullRequestReviewArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface UserContentEditsPullRequestReviewArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface ReactionsPullRequestReviewCommentArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  content?: ReactionContent | null /** Allows filtering Reactions by emoji. */;
  orderBy?: ReactionOrder | null /** Allows specifying the order in which reactions are returned. */;
}
export interface UserContentEditsPullRequestReviewCommentArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface CommentsCommitCommentThreadArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface CommentsPullRequestReviewThreadArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface StatusesDeploymentArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface PushAllowancesProtectedBranchArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface ReviewDismissalAllowancesProtectedBranchArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface ReleaseAssetsReleaseArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  name?: string | null /** A list of names to filter the assets by. */;
}
export interface StargazersTopicArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  orderBy?: StarOrder | null /** Order for connection */;
}
export interface CommentsGistArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface StargazersGistArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
  orderBy?: StarOrder | null /** Order for connection */;
}
export interface UserContentEditsGistCommentArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface ExternalIdentitiesOrganizationIdentityProviderArgs {
  first?: number | null /** Returns the first _n_ elements from the list. */;
  after?:
    | string
    | null /** Returns the elements in the list that come after the specified cursor. */;
  last?: number | null /** Returns the last _n_ elements from the list. */;
  before?:
    | string
    | null /** Returns the elements in the list that come before the specified cursor. */;
}
export interface AcceptTopicSuggestionMutationArgs {
  input: AcceptTopicSuggestionInput;
}
export interface AddCommentMutationArgs {
  input: AddCommentInput;
}
export interface AddProjectCardMutationArgs {
  input: AddProjectCardInput;
}
export interface AddProjectColumnMutationArgs {
  input: AddProjectColumnInput;
}
export interface AddPullRequestReviewMutationArgs {
  input: AddPullRequestReviewInput;
}
export interface AddPullRequestReviewCommentMutationArgs {
  input: AddPullRequestReviewCommentInput;
}
export interface AddReactionMutationArgs {
  input: AddReactionInput;
}
export interface AddStarMutationArgs {
  input: AddStarInput;
}
export interface CreateBranchProtectionRuleMutationArgs {
  input: CreateBranchProtectionRuleInput;
}
export interface CreateProjectMutationArgs {
  input: CreateProjectInput;
}
export interface DeclineTopicSuggestionMutationArgs {
  input: DeclineTopicSuggestionInput;
}
export interface DeleteBranchProtectionRuleMutationArgs {
  input: DeleteBranchProtectionRuleInput;
}
export interface DeleteProjectMutationArgs {
  input: DeleteProjectInput;
}
export interface DeleteProjectCardMutationArgs {
  input: DeleteProjectCardInput;
}
export interface DeleteProjectColumnMutationArgs {
  input: DeleteProjectColumnInput;
}
export interface DeletePullRequestReviewMutationArgs {
  input: DeletePullRequestReviewInput;
}
export interface DismissPullRequestReviewMutationArgs {
  input: DismissPullRequestReviewInput;
}
export interface LockLockableMutationArgs {
  input: LockLockableInput;
}
export interface MoveProjectCardMutationArgs {
  input: MoveProjectCardInput;
}
export interface MoveProjectColumnMutationArgs {
  input: MoveProjectColumnInput;
}
export interface RemoveOutsideCollaboratorMutationArgs {
  input: RemoveOutsideCollaboratorInput;
}
export interface RemoveReactionMutationArgs {
  input: RemoveReactionInput;
}
export interface RemoveStarMutationArgs {
  input: RemoveStarInput;
}
export interface RequestReviewsMutationArgs {
  input: RequestReviewsInput;
}
export interface SubmitPullRequestReviewMutationArgs {
  input: SubmitPullRequestReviewInput;
}
export interface UnlockLockableMutationArgs {
  input: UnlockLockableInput;
}
export interface UpdateBranchProtectionRuleMutationArgs {
  input: UpdateBranchProtectionRuleInput;
}
export interface UpdateProjectMutationArgs {
  input: UpdateProjectInput;
}
export interface UpdateProjectCardMutationArgs {
  input: UpdateProjectCardInput;
}
export interface UpdateProjectColumnMutationArgs {
  input: UpdateProjectColumnInput;
}
export interface UpdatePullRequestReviewMutationArgs {
  input: UpdatePullRequestReviewInput;
}
export interface UpdatePullRequestReviewCommentMutationArgs {
  input: UpdatePullRequestReviewCommentInput;
}
export interface UpdateSubscriptionMutationArgs {
  input: UpdateSubscriptionInput;
}
export interface UpdateTopicsMutationArgs {
  input: UpdateTopicsInput;
}
export interface AvatarUrlBotArgs {
  size?: number | null /** The size of the resulting square image. */;
}
/** The possible archived states of a project card. */
export enum ProjectCardArchivedState {
  ARCHIVED = "ARCHIVED",
  NOT_ARCHIVED = "NOT_ARCHIVED"
}
/** The privacy of a repository */
export enum RepositoryPrivacy {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE"
}
/** Properties by which repository connections can be ordered. */
export enum RepositoryOrderField {
  CREATED_AT = "CREATED_AT",
  UPDATED_AT = "UPDATED_AT",
  PUSHED_AT = "PUSHED_AT",
  NAME = "NAME",
  STARGAZERS = "STARGAZERS"
}
/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  ASC = "ASC",
  DESC = "DESC"
}
/** The affiliation of a user to a repository */
export enum RepositoryAffiliation {
  OWNER = "OWNER",
  COLLABORATOR = "COLLABORATOR",
  ORGANIZATION_MEMBER = "ORGANIZATION_MEMBER"
}
/** The possible states of a subscription. */
export enum SubscriptionState {
  UNSUBSCRIBED = "UNSUBSCRIBED",
  SUBSCRIBED = "SUBSCRIBED",
  IGNORED = "IGNORED"
}
/** Properties by which star connections can be ordered. */
export enum StarOrderField {
  STARRED_AT = "STARRED_AT"
}
/** The possible reasons a given repository could be in a locked state. */
export enum RepositoryLockReason {
  MOVING = "MOVING",
  BILLING = "BILLING",
  RENAME = "RENAME",
  MIGRATING = "MIGRATING"
}
/** The possible states of a pull request. */
export enum PullRequestState {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  MERGED = "MERGED"
}
/** Properties by which issue connections can be ordered. */
export enum IssueOrderField {
  CREATED_AT = "CREATED_AT",
  UPDATED_AT = "UPDATED_AT",
  COMMENTS = "COMMENTS"
}
/** A comment author association with repository. */
export enum CommentAuthorAssociation {
  MEMBER = "MEMBER",
  OWNER = "OWNER",
  COLLABORATOR = "COLLABORATOR",
  CONTRIBUTOR = "CONTRIBUTOR",
  FIRST_TIME_CONTRIBUTOR = "FIRST_TIME_CONTRIBUTOR",
  FIRST_TIMER = "FIRST_TIMER",
  NONE = "NONE"
}
/** The possible errors that will prevent a user from updating a comment. */
export enum CommentCannotUpdateReason {
  INSUFFICIENT_ACCESS = "INSUFFICIENT_ACCESS",
  LOCKED = "LOCKED",
  LOGIN_REQUIRED = "LOGIN_REQUIRED",
  MAINTENANCE = "MAINTENANCE",
  VERIFIED_EMAIL_REQUIRED = "VERIFIED_EMAIL_REQUIRED"
}
/** The possible states of an issue. */
export enum IssueState {
  OPEN = "OPEN",
  CLOSED = "CLOSED"
}
/** The possible reasons that an issue or pull request was locked. */
export enum LockReason {
  OFF_TOPIC = "OFF_TOPIC",
  TOO_HEATED = "TOO_HEATED",
  RESOLVED = "RESOLVED",
  SPAM = "SPAM"
}
/** Emojis that can be attached to Issues, Pull Requests and Comments. */
export enum ReactionContent {
  THUMBS_UP = "THUMBS_UP",
  THUMBS_DOWN = "THUMBS_DOWN",
  LAUGH = "LAUGH",
  HOORAY = "HOORAY",
  CONFUSED = "CONFUSED",
  HEART = "HEART"
}
/** A list of fields that reactions can be ordered by. */
export enum ReactionOrderField {
  CREATED_AT = "CREATED_AT"
}
/** The state of a Git signature. */
export enum GitSignatureState {
  VALID = "VALID",
  INVALID = "INVALID",
  MALFORMED_SIG = "MALFORMED_SIG",
  UNKNOWN_KEY = "UNKNOWN_KEY",
  BAD_EMAIL = "BAD_EMAIL",
  UNVERIFIED_EMAIL = "UNVERIFIED_EMAIL",
  NO_USER = "NO_USER",
  UNKNOWN_SIG_TYPE = "UNKNOWN_SIG_TYPE",
  UNSIGNED = "UNSIGNED",
  GPGVERIFY_UNAVAILABLE = "GPGVERIFY_UNAVAILABLE",
  GPGVERIFY_ERROR = "GPGVERIFY_ERROR",
  NOT_SIGNING_KEY = "NOT_SIGNING_KEY",
  EXPIRED_KEY = "EXPIRED_KEY",
  OCSP_PENDING = "OCSP_PENDING",
  OCSP_ERROR = "OCSP_ERROR",
  BAD_CERT = "BAD_CERT",
  OCSP_REVOKED = "OCSP_REVOKED"
}
/** The possible commit status states. */
export enum StatusState {
  EXPECTED = "EXPECTED",
  ERROR = "ERROR",
  FAILURE = "FAILURE",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS"
}
/** Whether or not a PullRequest can be merged. */
export enum MergeableState {
  MERGEABLE = "MERGEABLE",
  CONFLICTING = "CONFLICTING",
  UNKNOWN = "UNKNOWN"
}
/** The possible states of a milestone. */
export enum MilestoneState {
  OPEN = "OPEN",
  CLOSED = "CLOSED"
}
/** Properties by which team connections can be ordered. */
export enum TeamOrderField {
  NAME = "NAME"
}
/** The possible organization invitation types. */
export enum OrganizationInvitationType {
  USER = "USER",
  EMAIL = "EMAIL"
}
/** The possible organization invitation roles. */
export enum OrganizationInvitationRole {
  DIRECT_MEMBER = "DIRECT_MEMBER",
  ADMIN = "ADMIN",
  BILLING_MANAGER = "BILLING_MANAGER",
  REINSTATE = "REINSTATE"
}
/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
export enum TeamMembershipType {
  IMMEDIATE = "IMMEDIATE",
  CHILD_TEAM = "CHILD_TEAM",
  ALL = "ALL"
}
/** The possible team member roles; either 'maintainer' or 'member'. */
export enum TeamMemberRole {
  MAINTAINER = "MAINTAINER",
  MEMBER = "MEMBER"
}
/** Properties by which team member connections can be ordered. */
export enum TeamMemberOrderField {
  LOGIN = "LOGIN",
  CREATED_AT = "CREATED_AT"
}
/** The possible team privacy values. */
export enum TeamPrivacy {
  SECRET = "SECRET",
  VISIBLE = "VISIBLE"
}
/** Properties by which team repository connections can be ordered. */
export enum TeamRepositoryOrderField {
  CREATED_AT = "CREATED_AT",
  UPDATED_AT = "UPDATED_AT",
  PUSHED_AT = "PUSHED_AT",
  NAME = "NAME",
  PERMISSION = "PERMISSION",
  STARGAZERS = "STARGAZERS"
}
/** The access level to a repository */
export enum RepositoryPermission {
  ADMIN = "ADMIN",
  WRITE = "WRITE",
  READ = "READ"
}
/** The possible states of a pull request review. */
export enum PullRequestReviewState {
  PENDING = "PENDING",
  COMMENTED = "COMMENTED",
  APPROVED = "APPROVED",
  CHANGES_REQUESTED = "CHANGES_REQUESTED",
  DISMISSED = "DISMISSED"
}
/** The possible states of a pull request review comment. */
export enum PullRequestReviewCommentState {
  PENDING = "PENDING",
  SUBMITTED = "SUBMITTED"
}
/** The possible states for a deployment status. */
export enum DeploymentStatusState {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  INACTIVE = "INACTIVE",
  ERROR = "ERROR"
}
/** The possible states in which a deployment can be. */
export enum DeploymentState {
  ABANDONED = "ABANDONED",
  ACTIVE = "ACTIVE",
  DESTROYED = "DESTROYED",
  ERROR = "ERROR",
  FAILURE = "FAILURE",
  INACTIVE = "INACTIVE",
  PENDING = "PENDING"
}
/** Collaborators affiliation level with a subject. */
export enum CollaboratorAffiliation {
  OUTSIDE = "OUTSIDE",
  DIRECT = "DIRECT",
  ALL = "ALL"
}
/** Properties by which language connections can be ordered. */
export enum LanguageOrderField {
  SIZE = "SIZE"
}
/** Properties by which milestone connections can be ordered. */
export enum MilestoneOrderField {
  DUE_DATE = "DUE_DATE",
  CREATED_AT = "CREATED_AT",
  UPDATED_AT = "UPDATED_AT",
  NUMBER = "NUMBER"
}
/** Properties by which project connections can be ordered. */
export enum ProjectOrderField {
  CREATED_AT = "CREATED_AT",
  UPDATED_AT = "UPDATED_AT",
  NAME = "NAME"
}
/** State of the project; either 'open' or 'closed' */
export enum ProjectState {
  OPEN = "OPEN",
  CLOSED = "CLOSED"
}
/** Properties by which ref connections can be ordered. */
export enum RefOrderField {
  TAG_COMMIT_DATE = "TAG_COMMIT_DATE",
  ALPHABETICAL = "ALPHABETICAL"
}
/** Properties by which release connections can be ordered. */
export enum ReleaseOrderField {
  CREATED_AT = "CREATED_AT",
  NAME = "NAME"
}
/** The privacy of a Gist */
export enum GistPrivacy {
  PUBLIC = "PUBLIC",
  SECRET = "SECRET",
  ALL = "ALL"
}
/** Properties by which gist connections can be ordered. */
export enum GistOrderField {
  CREATED_AT = "CREATED_AT",
  UPDATED_AT = "UPDATED_AT",
  PUSHED_AT = "PUSHED_AT"
}
/** The reason a repository is listed as 'contributed'. */
export enum RepositoryContributionType {
  COMMIT = "COMMIT",
  ISSUE = "ISSUE",
  PULL_REQUEST = "PULL_REQUEST",
  REPOSITORY = "REPOSITORY",
  PULL_REQUEST_REVIEW = "PULL_REQUEST_REVIEW"
}
/** Various content states of a ProjectCard */
export enum ProjectCardState {
  CONTENT_ONLY = "CONTENT_ONLY",
  NOTE_ONLY = "NOTE_ONLY",
  REDACTED = "REDACTED"
}
/** The semantic purpose of the column - todo, in progress, or done. */
export enum ProjectColumnPurpose {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE"
}
/** The role of a user on a team. */
export enum TeamRole {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER"
}
/** Represents the individual results of a search. */
export enum SearchType {
  ISSUE = "ISSUE",
  REPOSITORY = "REPOSITORY",
  USER = "USER"
}
/** The possible events to perform on a pull request review. */
export enum PullRequestReviewEvent {
  COMMENT = "COMMENT",
  APPROVE = "APPROVE",
  REQUEST_CHANGES = "REQUEST_CHANGES",
  DISMISS = "DISMISS"
}
/** Reason that the suggested topic is declined. */
export enum TopicSuggestionDeclineReason {
  NOT_RELEVANT = "NOT_RELEVANT",
  TOO_SPECIFIC = "TOO_SPECIFIC",
  PERSONAL_PREFERENCE = "PERSONAL_PREFERENCE",
  TOO_GENERAL = "TOO_GENERAL"
}
/** The possible default permissions for repositories. */
export enum DefaultRepositoryPermissionField {
  NONE = "NONE",
  READ = "READ",
  WRITE = "WRITE",
  ADMIN = "ADMIN"
}
/** Properties by which pull_requests connections can be ordered. */
export enum PullRequestOrderField {
  CREATED_AT = "CREATED_AT",
  UPDATED_AT = "UPDATED_AT"
}
/** The possible PubSub channels for an issue. */
export enum IssuePubSubTopic {
  UPDATED = "UPDATED",
  MARKASREAD = "MARKASREAD",
  TIMELINE = "TIMELINE",
  STATE = "STATE"
}
/** The possible PubSub channels for a pull request. */
export enum PullRequestPubSubTopic {
  UPDATED = "UPDATED",
  MARKASREAD = "MARKASREAD",
  HEAD_REF = "HEAD_REF",
  TIMELINE = "TIMELINE",
  STATE = "STATE"
}
/** The possible item types found in a timeline. */
export enum PullRequestTimelineItemsItemType {
  PULL_REQUEST_COMMIT = "PULL_REQUEST_COMMIT",
  PULL_REQUEST_COMMIT_COMMENT_THREAD = "PULL_REQUEST_COMMIT_COMMENT_THREAD",
  PULL_REQUEST_REVIEW = "PULL_REQUEST_REVIEW",
  PULL_REQUEST_REVIEW_THREAD = "PULL_REQUEST_REVIEW_THREAD",
  PULL_REQUEST_REVISION_MARKER = "PULL_REQUEST_REVISION_MARKER",
  BASE_REF_CHANGED_EVENT = "BASE_REF_CHANGED_EVENT",
  BASE_REF_FORCE_PUSHED_EVENT = "BASE_REF_FORCE_PUSHED_EVENT",
  DEPLOYED_EVENT = "DEPLOYED_EVENT",
  DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT = "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT",
  HEAD_REF_DELETED_EVENT = "HEAD_REF_DELETED_EVENT",
  HEAD_REF_FORCE_PUSHED_EVENT = "HEAD_REF_FORCE_PUSHED_EVENT",
  HEAD_REF_RESTORED_EVENT = "HEAD_REF_RESTORED_EVENT",
  MERGED_EVENT = "MERGED_EVENT",
  REVIEW_DISMISSED_EVENT = "REVIEW_DISMISSED_EVENT",
  REVIEW_REQUESTED_EVENT = "REVIEW_REQUESTED_EVENT",
  REVIEW_REQUEST_REMOVED_EVENT = "REVIEW_REQUEST_REMOVED_EVENT",
  ISSUE_COMMENT = "ISSUE_COMMENT",
  CROSS_REFERENCED_EVENT = "CROSS_REFERENCED_EVENT",
  ADDED_TO_PROJECT_EVENT = "ADDED_TO_PROJECT_EVENT",
  ASSIGNED_EVENT = "ASSIGNED_EVENT",
  CLOSED_EVENT = "CLOSED_EVENT",
  COMMENT_DELETED_EVENT = "COMMENT_DELETED_EVENT",
  CONVERTED_NOTE_TO_ISSUE_EVENT = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  DEMILESTONED_EVENT = "DEMILESTONED_EVENT",
  LABELED_EVENT = "LABELED_EVENT",
  LOCKED_EVENT = "LOCKED_EVENT",
  MENTIONED_EVENT = "MENTIONED_EVENT",
  MILESTONED_EVENT = "MILESTONED_EVENT",
  MOVED_COLUMNS_IN_PROJECT_EVENT = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  REFERENCED_EVENT = "REFERENCED_EVENT",
  REMOVED_FROM_PROJECT_EVENT = "REMOVED_FROM_PROJECT_EVENT",
  RENAMED_TITLE_EVENT = "RENAMED_TITLE_EVENT",
  REOPENED_EVENT = "REOPENED_EVENT",
  SUBSCRIBED_EVENT = "SUBSCRIBED_EVENT",
  UNASSIGNED_EVENT = "UNASSIGNED_EVENT",
  UNLABELED_EVENT = "UNLABELED_EVENT",
  UNLOCKED_EVENT = "UNLOCKED_EVENT",
  UNSUBSCRIBED_EVENT = "UNSUBSCRIBED_EVENT"
}
/** The possible item types found in a timeline. */
export enum IssueTimelineItemsItemType {
  ISSUE_COMMENT = "ISSUE_COMMENT",
  CROSS_REFERENCED_EVENT = "CROSS_REFERENCED_EVENT",
  ADDED_TO_PROJECT_EVENT = "ADDED_TO_PROJECT_EVENT",
  ASSIGNED_EVENT = "ASSIGNED_EVENT",
  CLOSED_EVENT = "CLOSED_EVENT",
  COMMENT_DELETED_EVENT = "COMMENT_DELETED_EVENT",
  CONVERTED_NOTE_TO_ISSUE_EVENT = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  DEMILESTONED_EVENT = "DEMILESTONED_EVENT",
  LABELED_EVENT = "LABELED_EVENT",
  LOCKED_EVENT = "LOCKED_EVENT",
  MENTIONED_EVENT = "MENTIONED_EVENT",
  MILESTONED_EVENT = "MILESTONED_EVENT",
  MOVED_COLUMNS_IN_PROJECT_EVENT = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  REFERENCED_EVENT = "REFERENCED_EVENT",
  REMOVED_FROM_PROJECT_EVENT = "REMOVED_FROM_PROJECT_EVENT",
  RENAMED_TITLE_EVENT = "RENAMED_TITLE_EVENT",
  REOPENED_EVENT = "REOPENED_EVENT",
  SUBSCRIBED_EVENT = "SUBSCRIBED_EVENT",
  UNASSIGNED_EVENT = "UNASSIGNED_EVENT",
  UNLABELED_EVENT = "UNLABELED_EVENT",
  UNLOCKED_EVENT = "UNLOCKED_EVENT",
  UNSUBSCRIBED_EVENT = "UNSUBSCRIBED_EVENT"
}
/** The affiliation type between collaborator and repository. */
export enum RepositoryCollaboratorAffiliation {
  ALL = "ALL",
  OUTSIDE = "OUTSIDE"
}
/** Types that can be inside Project Cards. */
export type ProjectCardItem = Issue | PullRequest;

/** Types that can be requested reviewers. */
export type RequestedReviewer = User | Team;

/** An item in an pull request timeline */
export type PullRequestTimelineItem =
  | Commit
  | CommitCommentThread
  | PullRequestReview
  | PullRequestReviewThread
  | PullRequestReviewComment
  | IssueComment
  | ClosedEvent
  | ReopenedEvent
  | SubscribedEvent
  | UnsubscribedEvent
  | MergedEvent
  | ReferencedEvent
  | CrossReferencedEvent
  | AssignedEvent
  | UnassignedEvent
  | LabeledEvent
  | UnlabeledEvent
  | MilestonedEvent
  | DemilestonedEvent
  | RenamedTitleEvent
  | LockedEvent
  | UnlockedEvent
  | DeployedEvent
  | DeploymentEnvironmentChangedEvent
  | HeadRefDeletedEvent
  | HeadRefRestoredEvent
  | HeadRefForcePushedEvent
  | BaseRefForcePushedEvent
  | ReviewRequestedEvent
  | ReviewRequestRemovedEvent
  | ReviewDismissedEvent;

/** The object which triggered a `ClosedEvent`. */
export type Closer = Commit | PullRequest;

/** Any referencable object */
export type ReferencedSubject = Issue | PullRequest;

/** Types that can be inside a Milestone. */
export type MilestoneItem = Issue | PullRequest;

/** An object which has a renamable title */
export type RenamedTitleSubject = Issue | PullRequest;

/** Types that can be an actor. */
export type PushAllowanceActor = User | Team;

/** Types that can be an actor. */
export type ReviewDismissalAllowanceActor = User | Team;

/** Used for return value of Repository.issueOrPullRequest. */
export type IssueOrPullRequest = Issue | PullRequest;

/** An item in an issue timeline */
export type IssueTimelineItem =
  | Commit
  | IssueComment
  | CrossReferencedEvent
  | ClosedEvent
  | ReopenedEvent
  | SubscribedEvent
  | UnsubscribedEvent
  | ReferencedEvent
  | AssignedEvent
  | UnassignedEvent
  | LabeledEvent
  | UnlabeledEvent
  | MilestonedEvent
  | DemilestonedEvent
  | RenamedTitleEvent
  | LockedEvent
  | UnlockedEvent;

/** The results of a search. */
export type SearchResultItem =
  | Issue
  | PullRequest
  | Repository
  | User
  | Organization
  | MarketplaceListing;

/** An item in a pull request timeline */
export type PullRequestTimelineItems =
  | PullRequestCommit
  | PullRequestReview
  | PullRequestReviewThread
  | BaseRefChangedEvent
  | BaseRefForcePushedEvent
  | DeployedEvent
  | DeploymentEnvironmentChangedEvent
  | HeadRefDeletedEvent
  | HeadRefForcePushedEvent
  | HeadRefRestoredEvent
  | MergedEvent
  | ReviewDismissedEvent
  | ReviewRequestedEvent
  | ReviewRequestRemovedEvent
  | IssueComment
  | CrossReferencedEvent
  | AddedToProjectEvent
  | AssignedEvent
  | ClosedEvent
  | CommentDeletedEvent
  | ConvertedNoteToIssueEvent
  | DemilestonedEvent
  | LabeledEvent
  | LockedEvent
  | MentionedEvent
  | MilestonedEvent
  | MovedColumnsInProjectEvent
  | ReferencedEvent
  | RemovedFromProjectEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | SubscribedEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnsubscribedEvent;

/** An item in an issue timeline */
export type IssueTimelineItems =
  | IssueComment
  | CrossReferencedEvent
  | AddedToProjectEvent
  | AssignedEvent
  | ClosedEvent
  | CommentDeletedEvent
  | ConvertedNoteToIssueEvent
  | DemilestonedEvent
  | LabeledEvent
  | LockedEvent
  | MentionedEvent
  | MilestonedEvent
  | MovedColumnsInProjectEvent
  | ReferencedEvent
  | RemovedFromProjectEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | SubscribedEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnsubscribedEvent;

/** Types that can be inside Collection Items. */
export type CollectionItemContent = Repository | Organization | User;

/** The query root of GitHub's GraphQL interface. */
export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    codeOfConduct?: CodeOfConductResolver<
      CodeOfConduct | null,
      any,
      Context
    > /** Look up a code of conduct by its key */;
    codesOfConduct?: CodesOfConductResolver<
      (CodeOfConduct | null)[] | null,
      any,
      Context
    > /** Look up a code of conduct by its key */;
    license?: LicenseResolver<
      License | null,
      any,
      Context
    > /** Look up an open source license by its key */;
    licenses?: LicensesResolver<
      (License | null)[],
      any,
      Context
    > /** Return a list of known open source licenses */;
    marketplaceCategories?: MarketplaceCategoriesResolver<
      MarketplaceCategory[],
      any,
      Context
    > /** Get alphabetically sorted list of Marketplace categories */;
    marketplaceCategory?: MarketplaceCategoryResolver<
      MarketplaceCategory | null,
      any,
      Context
    > /** Look up a Marketplace category by its slug. */;
    marketplaceListing?: MarketplaceListingResolver<
      MarketplaceListing | null,
      any,
      Context
    > /** Look up a single Marketplace listing */;
    marketplaceListings?: MarketplaceListingsResolver<
      MarketplaceListingConnection,
      any,
      Context
    > /** Look up Marketplace listings */;
    meta?: MetaResolver<
      GitHubMetadata,
      any,
      Context
    > /** Return information about the GitHub instance */;
    node?: NodeResolver<
      Node | null,
      any,
      Context
    > /** Fetches an object given its ID. */;
    nodes?: NodesResolver<
      (Node | null)[],
      any,
      Context
    > /** Lookup nodes by a list of IDs. */;
    organization?: OrganizationResolver<
      Organization | null,
      any,
      Context
    > /** Lookup a organization by login. */;
    rateLimit?: RateLimitResolver<
      RateLimit | null,
      any,
      Context
    > /** The client's rate limit information. */;
    relay?: RelayResolver<
      Query,
      any,
      Context
    > /** Hack to workaround https://github.com/facebook/relay/issues/112 re-exposing the root query object */;
    repository?: RepositoryResolver<
      Repository | null,
      any,
      Context
    > /** Lookup a given repository by the owner and repository name. */;
    repositoryOwner?: RepositoryOwnerResolver<
      RepositoryOwner | null,
      any,
      Context
    > /** Lookup a repository owner (ie. either a User or an Organization) by login. */;
    resource?: ResourceResolver<
      UniformResourceLocatable | null,
      any,
      Context
    > /** Lookup resource by a URL. */;
    search?: SearchResolver<
      SearchResultItemConnection,
      any,
      Context
    > /** Perform a search across resources. */;
    topic?: TopicResolver<
      Topic | null,
      any,
      Context
    > /** Look up a topic by name. */;
    user?: UserResolver<
      User | null,
      any,
      Context
    > /** Lookup a user by login. */;
    viewer?: ViewerResolver<
      User,
      any,
      Context
    > /** The currently authenticated user. */;
  }

  export type CodeOfConductResolver<
    R = CodeOfConduct | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CodeOfConductArgs>;
  export interface CodeOfConductArgs {
    key: string /** The code of conduct's key */;
  }

  export type CodesOfConductResolver<
    R = (CodeOfConduct | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LicenseResolver<
    R = License | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, LicenseArgs>;
  export interface LicenseArgs {
    key: string /** The license's downcased SPDX ID */;
  }

  export type LicensesResolver<
    R = (License | null)[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MarketplaceCategoriesResolver<
    R = MarketplaceCategory[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MarketplaceCategoriesArgs>;
  export interface MarketplaceCategoriesArgs {
    includeCategories?:
      | string[]
      | null /** Return only the specified categories. */;
    excludeEmpty?: boolean | null /** Exclude categories with no listings. */;
    excludeSubcategories?:
      | boolean
      | null /** Returns top level categories only, excluding any subcategories. */;
  }

  export type MarketplaceCategoryResolver<
    R = MarketplaceCategory | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MarketplaceCategoryArgs>;
  export interface MarketplaceCategoryArgs {
    slug: string /** The URL slug of the category. */;
    useTopicAliases?:
      | boolean
      | null /** Also check topic aliases for the category slug */;
  }

  export type MarketplaceListingResolver<
    R = MarketplaceListing | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MarketplaceListingArgs>;
  export interface MarketplaceListingArgs {
    slug: string /** Select the listing that matches this slug. It's the short name of the listing used in its URL. */;
  }

  export type MarketplaceListingsResolver<
    R = MarketplaceListingConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MarketplaceListingsArgs>;
  export interface MarketplaceListingsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    categorySlug?:
      | string
      | null /** Select only listings with the given category. */;
    useTopicAliases?:
      | boolean
      | null /** Also check topic aliases for the category slug */;
    viewerCanAdmin?:
      | boolean
      | null /** Select listings to which user has admin access. If omitted, listings visible to theviewer are returned. */;
    adminId?:
      | string
      | null /** Select listings that can be administered by the specified user. */;
    organizationId?:
      | string
      | null /** Select listings for products owned by the specified organization. */;
    allStates?:
      | boolean
      | null /** Select listings visible to the viewer even if they are not approved. If omitted orfalse, only approved listings will be returned. */;
    slugs?:
      | (string | null)[]
      | null /** Select the listings with these slugs, if they are visible to the viewer. */;
    primaryCategoryOnly?:
      | boolean
      | null /** Select only listings where the primary category matches the given category slug. */;
    withFreeTrialsOnly?:
      | boolean
      | null /** Select only listings that offer a free trial. */;
  }

  export type MetaResolver<
    R = GitHubMetadata,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, NodeArgs>;
  export interface NodeArgs {
    id: string /** ID of the object. */;
  }

  export type NodesResolver<
    R = (Node | null)[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, NodesArgs>;
  export interface NodesArgs {
    ids: string[] /** The list of node IDs. */;
  }

  export type OrganizationResolver<
    R = Organization | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, OrganizationArgs>;
  export interface OrganizationArgs {
    login: string /** The organization's login. */;
  }

  export type RateLimitResolver<
    R = RateLimit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RateLimitArgs>;
  export interface RateLimitArgs {
    dryRun?:
      | boolean
      | null /** If true, calculate the cost for the query without evaluating it */;
  }

  export type RelayResolver<R = Query, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type RepositoryResolver<
    R = Repository | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RepositoryArgs>;
  export interface RepositoryArgs {
    owner: string /** The login field of a user or organization */;
    name: string /** The name of the repository */;
  }

  export type RepositoryOwnerResolver<
    R = RepositoryOwner | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RepositoryOwnerArgs>;
  export interface RepositoryOwnerArgs {
    login: string /** The username to lookup the owner by. */;
  }

  export type ResourceResolver<
    R = UniformResourceLocatable | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ResourceArgs>;
  export interface ResourceArgs {
    url: Uri /** The URL. */;
  }

  export type SearchResolver<
    R = SearchResultItemConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SearchArgs>;
  export interface SearchArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    query: string /** The search string to look for. */;
    type: SearchType /** The types of search items to search within. */;
  }

  export type TopicResolver<
    R = Topic | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, TopicArgs>;
  export interface TopicArgs {
    name: string /** The topic's name. */;
  }

  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserArgs>;
  export interface UserArgs {
    login: string /** The user's login. */;
  }

  export type ViewerResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** The Code of Conduct for a repository */
export namespace CodeOfConductResolvers {
  export interface Resolvers<Context = any> {
    body?: BodyResolver<string | null, any, Context> /** The body of the CoC */;
    key?: KeyResolver<string, any, Context> /** The key for the CoC */;
    name?: NameResolver<string, any, Context> /** The formal name of the CoC */;
    url?: UrlResolver<Uri | null, any, Context> /** The path to the CoC */;
  }

  export type BodyResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type KeyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A repository's open source license */
export namespace LicenseResolvers {
  export interface Resolvers<Context = any> {
    body?: BodyResolver<
      string,
      any,
      Context
    > /** The full text of the license */;
    conditions?: ConditionsResolver<
      (LicenseRule | null)[],
      any,
      Context
    > /** The conditions set by the license */;
    description?: DescriptionResolver<
      string | null,
      any,
      Context
    > /** A human-readable description of the license */;
    featured?: FeaturedResolver<
      boolean,
      any,
      Context
    > /** Whether the license should be featured */;
    hidden?: HiddenResolver<
      boolean,
      any,
      Context
    > /** Whether the license should be displayed in license pickers */;
    id?: IdResolver<string, any, Context>;
    implementation?: ImplementationResolver<
      string | null,
      any,
      Context
    > /** Instructions on how to implement the license */;
    key?: KeyResolver<
      string,
      any,
      Context
    > /** The lowercased SPDX ID of the license */;
    limitations?: LimitationsResolver<
      (LicenseRule | null)[],
      any,
      Context
    > /** The limitations set by the license */;
    name?: NameResolver<
      string,
      any,
      Context
    > /** The license full name specified by <https://spdx.org/licenses> */;
    nickname?: NicknameResolver<
      string | null,
      any,
      Context
    > /** Customary short name if applicable (e.g, GPLv3) */;
    permissions?: PermissionsResolver<
      (LicenseRule | null)[],
      any,
      Context
    > /** The permissions set by the license */;
    pseudoLicense?: PseudoLicenseResolver<
      boolean,
      any,
      Context
    > /** Whether the license is a pseudo-license placeholder (e.g., other, no-license) */;
    spdxId?: SpdxIdResolver<
      string | null,
      any,
      Context
    > /** Short identifier specified by <https://spdx.org/licenses> */;
    url?: UrlResolver<
      Uri | null,
      any,
      Context
    > /** URL to the license on <https://choosealicense.com> */;
  }

  export type BodyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ConditionsResolver<
    R = (LicenseRule | null)[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FeaturedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HiddenResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ImplementationResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type KeyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LimitationsResolver<
    R = (LicenseRule | null)[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NicknameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PermissionsResolver<
    R = (LicenseRule | null)[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PseudoLicenseResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SpdxIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Describes a License's conditions, permissions, and limitations */
export namespace LicenseRuleResolvers {
  export interface Resolvers<Context = any> {
    description?: DescriptionResolver<
      string,
      any,
      Context
    > /** A description of the rule */;
    key?: KeyResolver<
      string,
      any,
      Context
    > /** The machine-readable rule key */;
    label?: LabelResolver<
      string,
      any,
      Context
    > /** The human-readable rule label */;
  }

  export type DescriptionResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type KeyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LabelResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** A public description of a Marketplace category. */
export namespace MarketplaceCategoryResolvers {
  export interface Resolvers<Context = any> {
    description?: DescriptionResolver<
      string | null,
      any,
      Context
    > /** The category's description. */;
    howItWorks?: HowItWorksResolver<
      string | null,
      any,
      Context
    > /** The technical description of how apps listed in this category work with GitHub. */;
    id?: IdResolver<string, any, Context>;
    name?: NameResolver<string, any, Context> /** The category's name. */;
    primaryListingCount?: PrimaryListingCountResolver<
      number,
      any,
      Context
    > /** How many Marketplace listings have this as their primary category. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this Marketplace category. */;
    secondaryListingCount?: SecondaryListingCountResolver<
      number,
      any,
      Context
    > /** How many Marketplace listings have this as their secondary category. */;
    slug?: SlugResolver<
      string,
      any,
      Context
    > /** The short name of the category used in its URL. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this Marketplace category. */;
  }

  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HowItWorksResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
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
  export type PrimaryListingCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SecondaryListingCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** A listing in the GitHub integration marketplace. */
export namespace MarketplaceListingResolvers {
  export interface Resolvers<Context = any> {
    app?: AppResolver<
      App | null,
      any,
      Context
    > /** The GitHub App this listing represents. */;
    companyUrl?: CompanyUrlResolver<
      Uri | null,
      any,
      Context
    > /** URL to the listing owner's company site. */;
    configurationResourcePath?: ConfigurationResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for configuring access to the listing's integration or OAuth app */;
    configurationUrl?: ConfigurationUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for configuring access to the listing's integration or OAuth app */;
    documentationUrl?: DocumentationUrlResolver<
      Uri | null,
      any,
      Context
    > /** URL to the listing's documentation. */;
    extendedDescription?: ExtendedDescriptionResolver<
      string | null,
      any,
      Context
    > /** The listing's detailed description. */;
    extendedDescriptionHTML?: ExtendedDescriptionHtmlResolver<
      Html,
      any,
      Context
    > /** The listing's detailed description rendered to HTML. */;
    fullDescription?: FullDescriptionResolver<
      string,
      any,
      Context
    > /** The listing's introductory description. */;
    fullDescriptionHTML?: FullDescriptionHtmlResolver<
      Html,
      any,
      Context
    > /** The listing's introductory description rendered to HTML. */;
    hasApprovalBeenRequested?: HasApprovalBeenRequestedResolver<
      boolean,
      any,
      Context
    > /** Whether this listing has been submitted for review from GitHub for approval to be displayed in the Marketplace. */;
    hasPublishedFreeTrialPlans?: HasPublishedFreeTrialPlansResolver<
      boolean,
      any,
      Context
    > /** Does this listing have any plans with a free trial? */;
    hasTermsOfService?: HasTermsOfServiceResolver<
      boolean,
      any,
      Context
    > /** Does this listing have a terms of service link? */;
    howItWorks?: HowItWorksResolver<
      string | null,
      any,
      Context
    > /** A technical description of how this app works with GitHub. */;
    howItWorksHTML?: HowItWorksHtmlResolver<
      Html,
      any,
      Context
    > /** The listing's technical description rendered to HTML. */;
    id?: IdResolver<string, any, Context>;
    installationUrl?: InstallationUrlResolver<
      Uri | null,
      any,
      Context
    > /** URL to install the product to the viewer's account or organization. */;
    installedForViewer?: InstalledForViewerResolver<
      boolean,
      any,
      Context
    > /** Whether this listing's app has been installed for the current viewer */;
    isApproved?: IsApprovedResolver<
      boolean,
      any,
      Context
    > /** Whether this listing has been approved for display in the Marketplace. */;
    isDelisted?: IsDelistedResolver<
      boolean,
      any,
      Context
    > /** Whether this listing has been removed from the Marketplace. */;
    isDraft?: IsDraftResolver<
      boolean,
      any,
      Context
    > /** Whether this listing is still an editable draft that has not been submitted for review and is not publicly visible in the Marketplace. */;
    isPaid?: IsPaidResolver<
      boolean,
      any,
      Context
    > /** Whether the product this listing represents is available as part of a paid plan. */;
    isRejected?: IsRejectedResolver<
      boolean,
      any,
      Context
    > /** Whether this listing has been rejected by GitHub for display in the Marketplace. */;
    logoBackgroundColor?: LogoBackgroundColorResolver<
      string,
      any,
      Context
    > /** The hex color code, without the leading '#', for the logo background. */;
    logoUrl?: LogoUrlResolver<
      Uri | null,
      any,
      Context
    > /** URL for the listing's logo image. */;
    name?: NameResolver<string, any, Context> /** The listing's full name. */;
    normalizedShortDescription?: NormalizedShortDescriptionResolver<
      string,
      any,
      Context
    > /** The listing's very short description without a trailing period or ampersands. */;
    pricingUrl?: PricingUrlResolver<
      Uri | null,
      any,
      Context
    > /** URL to the listing's detailed pricing. */;
    primaryCategory?: PrimaryCategoryResolver<
      MarketplaceCategory,
      any,
      Context
    > /** The category that best describes the listing. */;
    privacyPolicyUrl?: PrivacyPolicyUrlResolver<
      Uri,
      any,
      Context
    > /** URL to the listing's privacy policy. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for the Marketplace listing. */;
    screenshotUrls?: ScreenshotUrlsResolver<
      (string | null)[],
      any,
      Context
    > /** The URLs for the listing's screenshots. */;
    secondaryCategory?: SecondaryCategoryResolver<
      MarketplaceCategory | null,
      any,
      Context
    > /** An alternate category that describes the listing. */;
    shortDescription?: ShortDescriptionResolver<
      string,
      any,
      Context
    > /** The listing's very short description. */;
    slug?: SlugResolver<
      string,
      any,
      Context
    > /** The short name of the listing used in its URL. */;
    statusUrl?: StatusUrlResolver<
      Uri | null,
      any,
      Context
    > /** URL to the listing's status page. */;
    supportEmail?: SupportEmailResolver<
      string | null,
      any,
      Context
    > /** An email address for support for this listing's app. */;
    supportUrl?: SupportUrlResolver<
      Uri,
      any,
      Context
    > /** Either a URL or an email address for support for this listing's app. */;
    termsOfServiceUrl?: TermsOfServiceUrlResolver<
      Uri | null,
      any,
      Context
    > /** URL to the listing's terms of service. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for the Marketplace listing. */;
    viewerCanAddPlans?: ViewerCanAddPlansResolver<
      boolean,
      any,
      Context
    > /** Can the current viewer add plans for this Marketplace listing. */;
    viewerCanApprove?: ViewerCanApproveResolver<
      boolean,
      any,
      Context
    > /** Can the current viewer approve this Marketplace listing. */;
    viewerCanDelist?: ViewerCanDelistResolver<
      boolean,
      any,
      Context
    > /** Can the current viewer delist this Marketplace listing. */;
    viewerCanEdit?: ViewerCanEditResolver<
      boolean,
      any,
      Context
    > /** Can the current viewer edit this Marketplace listing. */;
    viewerCanEditCategories?: ViewerCanEditCategoriesResolver<
      boolean,
      any,
      Context
    > /** Can the current viewer edit the primary and secondary category of thisMarketplace listing. */;
    viewerCanEditPlans?: ViewerCanEditPlansResolver<
      boolean,
      any,
      Context
    > /** Can the current viewer edit the plans for this Marketplace listing. */;
    viewerCanRedraft?: ViewerCanRedraftResolver<
      boolean,
      any,
      Context
    > /** Can the current viewer return this Marketplace listing to draft stateso it becomes editable again. */;
    viewerCanReject?: ViewerCanRejectResolver<
      boolean,
      any,
      Context
    > /** Can the current viewer reject this Marketplace listing by returning it toan editable draft state or rejecting it entirely. */;
    viewerCanRequestApproval?: ViewerCanRequestApprovalResolver<
      boolean,
      any,
      Context
    > /** Can the current viewer request this listing be reviewed for display inthe Marketplace. */;
    viewerHasPurchased?: ViewerHasPurchasedResolver<
      boolean,
      any,
      Context
    > /** Indicates whether the current user has an active subscription to this Marketplace listing. */;
    viewerHasPurchasedForAllOrganizations?: ViewerHasPurchasedForAllOrganizationsResolver<
      boolean,
      any,
      Context
    > /** Indicates if the current user has purchased a subscription to this Marketplace listingfor all of the organizations the user owns. */;
    viewerIsListingAdmin?: ViewerIsListingAdminResolver<
      boolean,
      any,
      Context
    > /** Does the current viewer role allow them to administer this Marketplace listing. */;
  }

  export type AppResolver<
    R = App | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CompanyUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ConfigurationResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ConfigurationUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DocumentationUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ExtendedDescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ExtendedDescriptionHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FullDescriptionResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FullDescriptionHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasApprovalBeenRequestedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasPublishedFreeTrialPlansResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasTermsOfServiceResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HowItWorksResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HowItWorksHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type InstallationUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InstalledForViewerResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsApprovedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsDelistedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsDraftResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsPaidResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsRejectedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LogoBackgroundColorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LogoUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, LogoUrlArgs>;
  export interface LogoUrlArgs {
    size?:
      | number
      | null /** The size in pixels of the resulting square image. */;
  }

  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NormalizedShortDescriptionResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PricingUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PrimaryCategoryResolver<
    R = MarketplaceCategory,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PrivacyPolicyUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ScreenshotUrlsResolver<
    R = (string | null)[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SecondaryCategoryResolver<
    R = MarketplaceCategory | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ShortDescriptionResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type StatusUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SupportEmailResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SupportUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TermsOfServiceUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ViewerCanAddPlansResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanApproveResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanDelistResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanEditResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanEditCategoriesResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanEditPlansResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanRedraftResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanRejectResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanRequestApprovalResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerHasPurchasedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerHasPurchasedForAllOrganizationsResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerIsListingAdminResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A GitHub App. */
export namespace AppResolvers {
  export interface Resolvers<Context = any> {
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    description?: DescriptionResolver<
      string | null,
      any,
      Context
    > /** The description of the app. */;
    id?: IdResolver<string, any, Context>;
    logoBackgroundColor?: LogoBackgroundColorResolver<
      string,
      any,
      Context
    > /** The hex color code, without the leading '#', for the logo background. */;
    logoUrl?: LogoUrlResolver<
      Uri,
      any,
      Context
    > /** A URL pointing to the app's logo. */;
    name?: NameResolver<string, any, Context> /** The name of the app. */;
    slug?: SlugResolver<
      string,
      any,
      Context
    > /** A slug based on the name of the app for use in URLs. */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<Uri, any, Context> /** The URL to the app's homepage. */;
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LogoBackgroundColorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LogoUrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context,
    LogoUrlArgs
  >;
  export interface LogoUrlArgs {
    size?: number | null /** The size of the resulting image. */;
  }

  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type SlugResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Look up Marketplace Listings */
export namespace MarketplaceListingConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (MarketplaceListingEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (MarketplaceListing | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (MarketplaceListingEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (MarketplaceListing | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace MarketplaceListingEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      MarketplaceListing | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = MarketplaceListing | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Information about pagination in a connection. */
export namespace PageInfoResolvers {
  export interface Resolvers<Context = any> {
    endCursor?: EndCursorResolver<
      string | null,
      any,
      Context
    > /** When paginating forwards, the cursor to continue. */;
    hasNextPage?: HasNextPageResolver<
      boolean,
      any,
      Context
    > /** When paginating forwards, are there more items? */;
    hasPreviousPage?: HasPreviousPageResolver<
      boolean,
      any,
      Context
    > /** When paginating backwards, are there more items? */;
    startCursor?: StartCursorResolver<
      string | null,
      any,
      Context
    > /** When paginating backwards, the cursor to continue. */;
  }

  export type EndCursorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasNextPageResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasPreviousPageResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StartCursorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents information about the GitHub instance. */
export namespace GitHubMetadataResolvers {
  export interface Resolvers<Context = any> {
    gitHubServicesSha?: GitHubServicesShaResolver<
      GitObjectId,
      any,
      Context
    > /** Returns a String that's a SHA of `github-services` */;
    gitIpAddresses?: GitIpAddressesResolver<
      string[] | null,
      any,
      Context
    > /** IP addresses that users connect to for git operations */;
    hookIpAddresses?: HookIpAddressesResolver<
      string[] | null,
      any,
      Context
    > /** IP addresses that service hooks are sent from */;
    importerIpAddresses?: ImporterIpAddressesResolver<
      string[] | null,
      any,
      Context
    > /** IP addresses that the importer connects from */;
    isPasswordAuthenticationVerifiable?: IsPasswordAuthenticationVerifiableResolver<
      boolean,
      any,
      Context
    > /** Whether or not users are verified */;
    pagesIpAddresses?: PagesIpAddressesResolver<
      string[] | null,
      any,
      Context
    > /** IP addresses for GitHub Pages' A records */;
  }

  export type GitHubServicesShaResolver<
    R = GitObjectId,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type GitIpAddressesResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HookIpAddressesResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ImporterIpAddressesResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsPasswordAuthenticationVerifiableResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PagesIpAddressesResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export namespace OrganizationResolvers {
  export interface Resolvers<Context = any> {
    avatarUrl?: AvatarUrlResolver<
      Uri,
      any,
      Context
    > /** A URL pointing to the organization's public avatar. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    description?: DescriptionResolver<
      string | null,
      any,
      Context
    > /** The organization's public profile description. */;
    email?: EmailResolver<
      string | null,
      any,
      Context
    > /** The organization's public email. */;
    id?: IdResolver<string, any, Context>;
    isVerified?: IsVerifiedResolver<
      boolean,
      any,
      Context
    > /** Whether the organization has verified its profile email and website. */;
    location?: LocationResolver<
      string | null,
      any,
      Context
    > /** The organization's public profile location. */;
    login?: LoginResolver<
      string,
      any,
      Context
    > /** The organization's login name. */;
    members?: MembersResolver<
      UserConnection,
      any,
      Context
    > /** A list of users who are members of this organization. */;
    name?: NameResolver<
      string | null,
      any,
      Context
    > /** The organization's public profile name. */;
    newTeamResourcePath?: NewTeamResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path creating a new team */;
    newTeamUrl?: NewTeamUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL creating a new team */;
    organizationBillingEmail?: OrganizationBillingEmailResolver<
      string | null,
      any,
      Context
    > /** The billing email for the organization. */;
    pinnedRepositories?: PinnedRepositoriesResolver<
      RepositoryConnection,
      any,
      Context
    > /** A list of repositories this user has pinned to their profile */;
    project?: ProjectResolver<
      Project | null,
      any,
      Context
    > /** Find project by number. */;
    projects?: ProjectsResolver<
      ProjectConnection,
      any,
      Context
    > /** A list of projects under the owner. */;
    projectsResourcePath?: ProjectsResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path listing organization's projects */;
    projectsUrl?: ProjectsUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL listing organization's projects */;
    repositories?: RepositoriesResolver<
      RepositoryConnection,
      any,
      Context
    > /** A list of repositories that the user owns. */;
    repository?: RepositoryResolver<
      Repository | null,
      any,
      Context
    > /** Find Repository. */;
    requiresTwoFactorAuthentication?: RequiresTwoFactorAuthenticationResolver<
      boolean | null,
      any,
      Context
    > /** When true the organization requires all members, billing managers, and outside collaborators to enable two-factor authentication. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this organization. */;
    samlIdentityProvider?: SamlIdentityProviderResolver<
      OrganizationIdentityProvider | null,
      any,
      Context
    > /** The Organization's SAML Identity Providers */;
    team?: TeamResolver<
      Team | null,
      any,
      Context
    > /** Find an organization's team by its slug. */;
    teams?: TeamsResolver<
      TeamConnection,
      any,
      Context
    > /** A list of teams in this organization. */;
    teamsResourcePath?: TeamsResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path listing organization's teams */;
    teamsUrl?: TeamsUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL listing organization's teams */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this organization. */;
    viewerCanAdminister?: ViewerCanAdministerResolver<
      boolean,
      any,
      Context
    > /** Organization is adminable by the viewer. */;
    viewerCanCreateProjects?: ViewerCanCreateProjectsResolver<
      boolean,
      any,
      Context
    > /** Can the current viewer create new projects on this owner. */;
    viewerCanCreateRepositories?: ViewerCanCreateRepositoriesResolver<
      boolean,
      any,
      Context
    > /** Viewer can create repositories on this organization */;
    viewerCanCreateTeams?: ViewerCanCreateTeamsResolver<
      boolean,
      any,
      Context
    > /** Viewer can create teams on this organization. */;
    viewerIsAMember?: ViewerIsAMemberResolver<
      boolean,
      any,
      Context
    > /** Viewer is an active member of this organization. */;
    websiteUrl?: WebsiteUrlResolver<
      Uri | null,
      any,
      Context
    > /** The organization's public profile URL. */;
  }

  export type AvatarUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AvatarUrlArgs>;
  export interface AvatarUrlArgs {
    size?: number | null /** The size of the resulting square image. */;
  }

  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsVerifiedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LocationResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LoginResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MembersResolver<
    R = UserConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MembersArgs>;
  export interface MembersArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NewTeamResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NewTeamUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OrganizationBillingEmailResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PinnedRepositoriesResolver<
    R = RepositoryConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PinnedRepositoriesArgs>;
  export interface PinnedRepositoriesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
    orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
    affiliations?:
      | (RepositoryAffiliation | null)[]
      | null /** Array of viewer's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the current viewer owns. */;
    ownerAffiliations?:
      | (RepositoryAffiliation | null)[]
      | null /** Array of owner's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the organization or user being viewed owns. */;
    isLocked?:
      | boolean
      | null /** If non-null, filters repositories according to whether they have been locked */;
  }

  export type ProjectResolver<
    R = Project | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ProjectArgs>;
  export interface ProjectArgs {
    number: number /** The project number to find. */;
  }

  export type ProjectsResolver<
    R = ProjectConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ProjectsArgs>;
  export interface ProjectsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    orderBy?: ProjectOrder | null /** Ordering options for projects returned from the connection */;
    search?:
      | string
      | null /** Query to search projects by, currently only searching by name. */;
    states?:
      | ProjectState[]
      | null /** A list of states to filter the projects by. */;
  }

  export type ProjectsResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProjectsUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoriesResolver<
    R = RepositoryConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RepositoriesArgs>;
  export interface RepositoriesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
    orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
    affiliations?:
      | (RepositoryAffiliation | null)[]
      | null /** Array of viewer's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the current viewer owns. */;
    ownerAffiliations?:
      | (RepositoryAffiliation | null)[]
      | null /** Array of owner's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the organization or user being viewed owns. */;
    isLocked?:
      | boolean
      | null /** If non-null, filters repositories according to whether they have been locked */;
    isFork?:
      | boolean
      | null /** If non-null, filters repositories according to whether they are forks of another repository */;
  }

  export type RepositoryResolver<
    R = Repository | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RepositoryArgs>;
  export interface RepositoryArgs {
    name: string /** Name of Repository to find. */;
  }

  export type RequiresTwoFactorAuthenticationResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SamlIdentityProviderResolver<
    R = OrganizationIdentityProvider | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TeamResolver<
    R = Team | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, TeamArgs>;
  export interface TeamArgs {
    slug: string /** The name or slug of the team to find. */;
  }

  export type TeamsResolver<
    R = TeamConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, TeamsArgs>;
  export interface TeamsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    privacy?: TeamPrivacy | null /** If non-null, filters teams according to privacy */;
    role?: TeamRole | null /** If non-null, filters teams according to whether the viewer is an admin or member on team */;
    query?:
      | string
      | null /** If non-null, filters teams with query on team name and team slug */;
    userLogins?: string[] | null /** User logins to filter by */;
    orderBy?: TeamOrder | null /** Ordering options for teams returned from the connection */;
    ldapMapped?:
      | boolean
      | null /** If true, filters teams that are mapped to an LDAP Group (Enterprise only) */;
    rootTeamsOnly?: boolean | null /** If true, restrict to only root teams */;
  }

  export type TeamsResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TeamsUrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ViewerCanAdministerResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanCreateProjectsResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanCreateRepositoriesResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanCreateTeamsResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerIsAMemberResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WebsiteUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Projects manage issues, pull requests and notes within a project owner. */
export namespace ProjectResolvers {
  export interface Resolvers<Context = any> {
    body?: BodyResolver<
      string | null,
      any,
      Context
    > /** The project's description body. */;
    bodyHTML?: BodyHtmlResolver<
      Html,
      any,
      Context
    > /** The projects description body rendered to HTML. */;
    closed?: ClosedResolver<
      boolean,
      any,
      Context
    > /** `true` if the object is closed (definition of closed may depend on type) */;
    closedAt?: ClosedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies the date and time when the object was closed. */;
    columns?: ColumnsResolver<
      ProjectColumnConnection,
      any,
      Context
    > /** List of columns in the project */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    creator?: CreatorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who originally created the project. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
    name?: NameResolver<string, any, Context> /** The project's name. */;
    number?: NumberResolver<number, any, Context> /** The project's number. */;
    owner?: OwnerResolver<
      ProjectOwner,
      any,
      Context
    > /** The project's owner. Currently limited to repositories and organizations. */;
    pendingCards?: PendingCardsResolver<
      ProjectCardConnection,
      any,
      Context
    > /** List of pending cards in this project */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this project */;
    state?: StateResolver<
      ProjectState,
      any,
      Context
    > /** Whether the project is open or closed. */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<Uri, any, Context> /** The HTTP URL for this project */;
    viewerCanUpdate?: ViewerCanUpdateResolver<
      boolean,
      any,
      Context
    > /** Check if the current viewer can update this object. */;
  }

  export type BodyResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClosedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClosedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ColumnsResolver<
    R = ProjectColumnConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ColumnsArgs>;
  export interface ColumnsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
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
  export type NumberResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = ProjectOwner,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PendingCardsResolver<
    R = ProjectCardConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PendingCardsArgs>;
  export interface PendingCardsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    archivedStates?:
      | (ProjectCardArchivedState | null)[]
      | null /** A list of archived states to filter the cards by */;
  }

  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StateResolver<
    R = ProjectState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ViewerCanUpdateResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for ProjectColumn. */
export namespace ProjectColumnConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (ProjectColumnEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (ProjectColumn | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (ProjectColumnEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (ProjectColumn | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ProjectColumnEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      ProjectColumn | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = ProjectColumn | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A column inside a project. */
export namespace ProjectColumnResolvers {
  export interface Resolvers<Context = any> {
    cards?: CardsResolver<
      ProjectCardConnection,
      any,
      Context
    > /** List of cards in the column */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
    name?: NameResolver<string, any, Context> /** The project column's name. */;
    project?: ProjectResolver<
      Project,
      any,
      Context
    > /** The project that contains this column. */;
    purpose?: PurposeResolver<
      ProjectColumnPurpose | null,
      any,
      Context
    > /** The semantic purpose of the column */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this project column */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this project column */;
  }

  export type CardsResolver<
    R = ProjectCardConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CardsArgs>;
  export interface CardsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    archivedStates?:
      | (ProjectCardArchivedState | null)[]
      | null /** A list of archived states to filter the cards by */;
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
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
  export type ProjectResolver<
    R = Project,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PurposeResolver<
    R = ProjectColumnPurpose | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** The connection type for ProjectCard. */
export namespace ProjectCardConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (ProjectCardEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (ProjectCard | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (ProjectCardEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (ProjectCard | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ProjectCardEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      ProjectCard | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = ProjectCard | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A card in a project. */
export namespace ProjectCardResolvers {
  export interface Resolvers<Context = any> {
    column?: ColumnResolver<
      ProjectColumn | null,
      any,
      Context
    > /** The project column this card is associated under. A card may only belong to oneproject column at a time. The column field will be null if the card is createdin a pending state and has yet to be associated with a column. Once cards areassociated with a column, they will not become pending in the future. */;
    content?: ContentResolver<
      ProjectCardItem | null,
      any,
      Context
    > /** The card content item */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    creator?: CreatorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who created this card */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
    isArchived?: IsArchivedResolver<
      boolean,
      any,
      Context
    > /** Whether the card is archived */;
    note?: NoteResolver<string | null, any, Context> /** The card note */;
    project?: ProjectResolver<
      Project,
      any,
      Context
    > /** The project that contains this card. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this card */;
    state?: StateResolver<
      ProjectCardState | null,
      any,
      Context
    > /** The state of ProjectCard */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<Uri, any, Context> /** The HTTP URL for this card */;
  }

  export type ColumnResolver<
    R = ProjectColumn | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = ProjectCardItem | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsArchivedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NoteResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProjectResolver<
    R = Project,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StateResolver<
    R = ProjectCardState | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export namespace IssueResolvers {
  export interface Resolvers<Context = any> {
    activeLockReason?: ActiveLockReasonResolver<
      LockReason | null,
      any,
      Context
    > /** Reason that the conversation was locked. */;
    assignees?: AssigneesResolver<
      UserConnection,
      any,
      Context
    > /** A list of Users assigned to this object. */;
    author?: AuthorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who authored the comment. */;
    authorAssociation?: AuthorAssociationResolver<
      CommentAuthorAssociation,
      any,
      Context
    > /** Author's association with the subject of the comment. */;
    body?: BodyResolver<
      string,
      any,
      Context
    > /** Identifies the body of the issue. */;
    bodyHTML?: BodyHtmlResolver<
      Html,
      any,
      Context
    > /** Identifies the body of the issue rendered to HTML. */;
    bodyText?: BodyTextResolver<
      string,
      any,
      Context
    > /** Identifies the body of the issue rendered to text. */;
    closed?: ClosedResolver<
      boolean,
      any,
      Context
    > /** `true` if the object is closed (definition of closed may depend on type) */;
    closedAt?: ClosedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies the date and time when the object was closed. */;
    comments?: CommentsResolver<
      IssueCommentConnection,
      any,
      Context
    > /** A list of comments associated with the Issue. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    createdViaEmail?: CreatedViaEmailResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was created via an email reply. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    editor?: EditorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who edited the comment. */;
    id?: IdResolver<string, any, Context>;
    includesCreatedEdit?: IncludesCreatedEditResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was edited and includes an edit with the creation data */;
    labels?: LabelsResolver<
      LabelConnection | null,
      any,
      Context
    > /** A list of labels associated with the object. */;
    lastEditedAt?: LastEditedAtResolver<
      DateTime | null,
      any,
      Context
    > /** The moment the editor made the last edit */;
    locked?: LockedResolver<
      boolean,
      any,
      Context
    > /** `true` if the object is locked */;
    milestone?: MilestoneResolver<
      Milestone | null,
      any,
      Context
    > /** Identifies the milestone associated with the issue. */;
    number?: NumberResolver<
      number,
      any,
      Context
    > /** Identifies the issue number. */;
    participants?: ParticipantsResolver<
      UserConnection,
      any,
      Context
    > /** A list of Users that are participating in the Issue conversation. */;
    projectCards?: ProjectCardsResolver<
      ProjectCardConnection,
      any,
      Context
    > /** List of project cards associated with this issue. */;
    publishedAt?: PublishedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies when the comment was published at. */;
    reactionGroups?: ReactionGroupsResolver<
      ReactionGroup[] | null,
      any,
      Context
    > /** A list of reactions grouped by content left on the subject. */;
    reactions?: ReactionsResolver<
      ReactionConnection,
      any,
      Context
    > /** A list of Reactions left on the Issue. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The repository associated with this node. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this issue */;
    state?: StateResolver<
      IssueState,
      any,
      Context
    > /** Identifies the state of the issue. */;
    timeline?: TimelineResolver<
      IssueTimelineConnection,
      any,
      Context
    > /** A list of events, comments, commits, etc. associated with the issue. */;
    title?: TitleResolver<
      string,
      any,
      Context
    > /** Identifies the issue title. */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<Uri, any, Context> /** The HTTP URL for this issue */;
    userContentEdits?: UserContentEditsResolver<
      UserContentEditConnection | null,
      any,
      Context
    > /** A list of edits to this content. */;
    viewerCanReact?: ViewerCanReactResolver<
      boolean,
      any,
      Context
    > /** Can user react to this subject */;
    viewerCanSubscribe?: ViewerCanSubscribeResolver<
      boolean,
      any,
      Context
    > /** Check if the viewer is able to change their subscription status for the repository. */;
    viewerCanUpdate?: ViewerCanUpdateResolver<
      boolean,
      any,
      Context
    > /** Check if the current viewer can update this object. */;
    viewerCannotUpdateReasons?: ViewerCannotUpdateReasonsResolver<
      CommentCannotUpdateReason[],
      any,
      Context
    > /** Reasons why the current viewer can not update this comment. */;
    viewerDidAuthor?: ViewerDidAuthorResolver<
      boolean,
      any,
      Context
    > /** Did the viewer author this comment. */;
    viewerSubscription?: ViewerSubscriptionResolver<
      SubscriptionState | null,
      any,
      Context
    > /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */;
  }

  export type ActiveLockReasonResolver<
    R = LockReason | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AssigneesResolver<
    R = UserConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AssigneesArgs>;
  export interface AssigneesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type AuthorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AuthorAssociationResolver<
    R = CommentAuthorAssociation,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type BodyHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyTextResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClosedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClosedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommentsResolver<
    R = IssueCommentConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CommentsArgs>;
  export interface CommentsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedViaEmailResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EditorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IncludesCreatedEditResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LabelsResolver<
    R = LabelConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, LabelsArgs>;
  export interface LabelsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type LastEditedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LockedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MilestoneResolver<
    R = Milestone | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NumberResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ParticipantsResolver<
    R = UserConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ParticipantsArgs>;
  export interface ParticipantsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type ProjectCardsResolver<
    R = ProjectCardConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ProjectCardsArgs>;
  export interface ProjectCardsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    archivedStates?:
      | (ProjectCardArchivedState | null)[]
      | null /** A list of archived states to filter the cards by */;
  }

  export type PublishedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReactionGroupsResolver<
    R = ReactionGroup[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReactionsResolver<
    R = ReactionConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReactionsArgs>;
  export interface ReactionsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    content?: ReactionContent | null /** Allows filtering Reactions by emoji. */;
    orderBy?: ReactionOrder | null /** Allows specifying the order in which reactions are returned. */;
  }

  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StateResolver<
    R = IssueState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TimelineResolver<
    R = IssueTimelineConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, TimelineArgs>;
  export interface TimelineArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    since?: DateTime | null /** Allows filtering timeline events by a `since` timestamp. */;
  }

  export type TitleResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserContentEditsResolver<
    R = UserContentEditConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserContentEditsArgs>;
  export interface UserContentEditsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type ViewerCanReactResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanSubscribeResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanUpdateResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCannotUpdateReasonsResolver<
    R = CommentCannotUpdateReason[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerDidAuthorResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerSubscriptionResolver<
    R = SubscriptionState | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for User. */
export namespace UserConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (UserEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (User | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (UserEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (User | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a user. */
export namespace UserEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      User | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export namespace UserResolvers {
  export interface Resolvers<Context = any> {
    avatarUrl?: AvatarUrlResolver<
      Uri,
      any,
      Context
    > /** A URL pointing to the user's public avatar. */;
    bio?: BioResolver<
      string | null,
      any,
      Context
    > /** The user's public profile bio. */;
    bioHTML?: BioHtmlResolver<
      Html,
      any,
      Context
    > /** The user's public profile bio as HTML. */;
    commitComments?: CommitCommentsResolver<
      CommitCommentConnection,
      any,
      Context
    > /** A list of commit comments made by this user. */;
    company?: CompanyResolver<
      string | null,
      any,
      Context
    > /** The user's public profile company. */;
    companyHTML?: CompanyHtmlResolver<
      Html,
      any,
      Context
    > /** The user's public profile company as HTML. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    email?: EmailResolver<
      string,
      any,
      Context
    > /** The user's publicly visible profile email. */;
    followers?: FollowersResolver<
      FollowerConnection,
      any,
      Context
    > /** A list of users the given user is followed by. */;
    following?: FollowingResolver<
      FollowingConnection,
      any,
      Context
    > /** A list of users the given user is following. */;
    gist?: GistResolver<
      Gist | null,
      any,
      Context
    > /** Find gist by repo name. */;
    gistComments?: GistCommentsResolver<
      GistCommentConnection,
      any,
      Context
    > /** A list of gist comments made by this user. */;
    gists?: GistsResolver<
      GistConnection,
      any,
      Context
    > /** A list of the Gists the user has created. */;
    id?: IdResolver<string, any, Context>;
    isBountyHunter?: IsBountyHunterResolver<
      boolean,
      any,
      Context
    > /** Whether or not this user is a participant in the GitHub Security Bug Bounty. */;
    isCampusExpert?: IsCampusExpertResolver<
      boolean,
      any,
      Context
    > /** Whether or not this user is a participant in the GitHub Campus Experts Program. */;
    isDeveloperProgramMember?: IsDeveloperProgramMemberResolver<
      boolean,
      any,
      Context
    > /** Whether or not this user is a GitHub Developer Program member. */;
    isEmployee?: IsEmployeeResolver<
      boolean,
      any,
      Context
    > /** Whether or not this user is a GitHub employee. */;
    isHireable?: IsHireableResolver<
      boolean,
      any,
      Context
    > /** Whether or not the user has marked themselves as for hire. */;
    isSiteAdmin?: IsSiteAdminResolver<
      boolean,
      any,
      Context
    > /** Whether or not this user is a site administrator. */;
    isViewer?: IsViewerResolver<
      boolean,
      any,
      Context
    > /** Whether or not this user is the viewing user. */;
    issueComments?: IssueCommentsResolver<
      IssueCommentConnection,
      any,
      Context
    > /** A list of issue comments made by this user. */;
    issues?: IssuesResolver<
      IssueConnection,
      any,
      Context
    > /** A list of issues associated with this user. */;
    location?: LocationResolver<
      string | null,
      any,
      Context
    > /** The user's public profile location. */;
    login?: LoginResolver<
      string,
      any,
      Context
    > /** The username used to login. */;
    name?: NameResolver<
      string | null,
      any,
      Context
    > /** The user's public profile name. */;
    organization?: OrganizationResolver<
      Organization | null,
      any,
      Context
    > /** Find an organization by its login that the user belongs to. */;
    organizations?: OrganizationsResolver<
      OrganizationConnection,
      any,
      Context
    > /** A list of organizations the user belongs to. */;
    pinnedRepositories?: PinnedRepositoriesResolver<
      RepositoryConnection,
      any,
      Context
    > /** A list of repositories this user has pinned to their profile */;
    publicKeys?: PublicKeysResolver<
      PublicKeyConnection,
      any,
      Context
    > /** A list of public keys associated with this user. */;
    pullRequests?: PullRequestsResolver<
      PullRequestConnection,
      any,
      Context
    > /** A list of pull requests associated with this user. */;
    repositories?: RepositoriesResolver<
      RepositoryConnection,
      any,
      Context
    > /** A list of repositories that the user owns. */;
    repositoriesContributedTo?: RepositoriesContributedToResolver<
      RepositoryConnection,
      any,
      Context
    > /** A list of repositories that the user recently contributed to. */;
    repository?: RepositoryResolver<
      Repository | null,
      any,
      Context
    > /** Find Repository. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this user */;
    starredRepositories?: StarredRepositoriesResolver<
      StarredRepositoryConnection,
      any,
      Context
    > /** Repositories the user has starred. */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<Uri, any, Context> /** The HTTP URL for this user */;
    viewerCanFollow?: ViewerCanFollowResolver<
      boolean,
      any,
      Context
    > /** Whether or not the viewer is able to follow the user. */;
    viewerIsFollowing?: ViewerIsFollowingResolver<
      boolean,
      any,
      Context
    > /** Whether or not this user is followed by the viewer. */;
    watching?: WatchingResolver<
      RepositoryConnection,
      any,
      Context
    > /** A list of repositories the given user is watching. */;
    websiteUrl?: WebsiteUrlResolver<
      Uri | null,
      any,
      Context
    > /** A URL pointing to the user's public website/blog. */;
  }

  export type AvatarUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AvatarUrlArgs>;
  export interface AvatarUrlArgs {
    size?: number | null /** The size of the resulting square image. */;
  }

  export type BioResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BioHtmlResolver<R = Html, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type CommitCommentsResolver<
    R = CommitCommentConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CommitCommentsArgs>;
  export interface CommitCommentsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type CompanyResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CompanyHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type FollowersResolver<
    R = FollowerConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FollowersArgs>;
  export interface FollowersArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type FollowingResolver<
    R = FollowingConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FollowingArgs>;
  export interface FollowingArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type GistResolver<
    R = Gist | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GistArgs>;
  export interface GistArgs {
    name: string /** The gist name to find. */;
  }

  export type GistCommentsResolver<
    R = GistCommentConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GistCommentsArgs>;
  export interface GistCommentsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type GistsResolver<
    R = GistConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GistsArgs>;
  export interface GistsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    privacy?: GistPrivacy | null /** Filters Gists according to privacy. */;
    orderBy?: GistOrder | null /** Ordering options for gists returned from the connection */;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsBountyHunterResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsCampusExpertResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsDeveloperProgramMemberResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsEmployeeResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsHireableResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsSiteAdminResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsViewerResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IssueCommentsResolver<
    R = IssueCommentConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, IssueCommentsArgs>;
  export interface IssueCommentsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type IssuesResolver<
    R = IssueConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, IssuesArgs>;
  export interface IssuesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    orderBy?: IssueOrder | null /** Ordering options for issues returned from the connection. */;
    labels?:
      | string[]
      | null /** A list of label names to filter the pull requests by. */;
    states?:
      | IssueState[]
      | null /** A list of states to filter the issues by. */;
  }

  export type LocationResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LoginResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OrganizationResolver<
    R = Organization | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, OrganizationArgs>;
  export interface OrganizationArgs {
    login: string /** The login of the organization to find. */;
  }

  export type OrganizationsResolver<
    R = OrganizationConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, OrganizationsArgs>;
  export interface OrganizationsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type PinnedRepositoriesResolver<
    R = RepositoryConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PinnedRepositoriesArgs>;
  export interface PinnedRepositoriesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
    orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
    affiliations?:
      | (RepositoryAffiliation | null)[]
      | null /** Array of viewer's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the current viewer owns. */;
    ownerAffiliations?:
      | (RepositoryAffiliation | null)[]
      | null /** Array of owner's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the organization or user being viewed owns. */;
    isLocked?:
      | boolean
      | null /** If non-null, filters repositories according to whether they have been locked */;
  }

  export type PublicKeysResolver<
    R = PublicKeyConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PublicKeysArgs>;
  export interface PublicKeysArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type PullRequestsResolver<
    R = PullRequestConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PullRequestsArgs>;
  export interface PullRequestsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    states?:
      | PullRequestState[]
      | null /** A list of states to filter the pull requests by. */;
    labels?:
      | string[]
      | null /** A list of label names to filter the pull requests by. */;
    headRefName?:
      | string
      | null /** The head ref name to filter the pull requests by. */;
    baseRefName?:
      | string
      | null /** The base ref name to filter the pull requests by. */;
    orderBy?: IssueOrder | null /** Ordering options for pull requests returned from the connection. */;
  }

  export type RepositoriesResolver<
    R = RepositoryConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RepositoriesArgs>;
  export interface RepositoriesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
    orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
    affiliations?:
      | (RepositoryAffiliation | null)[]
      | null /** Array of viewer's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the current viewer owns. */;
    ownerAffiliations?:
      | (RepositoryAffiliation | null)[]
      | null /** Array of owner's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the organization or user being viewed owns. */;
    isLocked?:
      | boolean
      | null /** If non-null, filters repositories according to whether they have been locked */;
    isFork?:
      | boolean
      | null /** If non-null, filters repositories according to whether they are forks of another repository */;
  }

  export type RepositoriesContributedToResolver<
    R = RepositoryConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RepositoriesContributedToArgs>;
  export interface RepositoriesContributedToArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
    orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
    isLocked?:
      | boolean
      | null /** If non-null, filters repositories according to whether they have been locked */;
    includeUserRepositories?:
      | boolean
      | null /** If true, include user repositories */;
    contributionTypes?:
      | (RepositoryContributionType | null)[]
      | null /** If non-null, include only the specified types of contributions. The GitHub.com UI uses [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY] */;
  }

  export type RepositoryResolver<
    R = Repository | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RepositoryArgs>;
  export interface RepositoryArgs {
    name: string /** Name of Repository to find. */;
  }

  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StarredRepositoriesResolver<
    R = StarredRepositoryConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StarredRepositoriesArgs>;
  export interface StarredRepositoriesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    ownedByViewer?:
      | boolean
      | null /** Filters starred repositories to only return repositories owned by the viewer. */;
    orderBy?: StarOrder | null /** Order for connection */;
  }

  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ViewerCanFollowResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerIsFollowingResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WatchingResolver<
    R = RepositoryConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, WatchingArgs>;
  export interface WatchingArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
    orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
    affiliations?:
      | (RepositoryAffiliation | null)[]
      | null /** Affiliation options for repositories returned from the connection */;
    ownerAffiliations?:
      | (RepositoryAffiliation | null)[]
      | null /** Array of owner's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the organization or user being viewed owns. */;
    isLocked?:
      | boolean
      | null /** If non-null, filters repositories according to whether they have been locked */;
  }

  export type WebsiteUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A list of repositories owned by the subject. */
export namespace RepositoryConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (RepositoryEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Repository | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
    totalDiskUsage?: TotalDiskUsageResolver<
      number,
      any,
      Context
    > /** The total size in kilobytes of all repositories in the connection. */;
  }

  export type EdgesResolver<
    R = (RepositoryEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Repository | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalDiskUsageResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace RepositoryEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Repository | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Repository | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A repository contains the content for a project. */
export namespace RepositoryResolvers {
  export interface Resolvers<Context = any> {
    assignableUsers?: AssignableUsersResolver<
      UserConnection,
      any,
      Context
    > /** A list of users that can be assigned to issues in this repository. */;
    branchProtectionRules?: BranchProtectionRulesResolver<
      BranchProtectionRuleConnection,
      any,
      Context
    > /** A list of branch protection rules for this repository. */;
    codeOfConduct?: CodeOfConductResolver<
      CodeOfConduct | null,
      any,
      Context
    > /** Returns the code of conduct for this repository */;
    collaborators?: CollaboratorsResolver<
      RepositoryCollaboratorConnection | null,
      any,
      Context
    > /** A list of collaborators associated with the repository. */;
    commitComments?: CommitCommentsResolver<
      CommitCommentConnection,
      any,
      Context
    > /** A list of commit comments associated with the repository. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    defaultBranchRef?: DefaultBranchRefResolver<
      Ref | null,
      any,
      Context
    > /** The Ref associated with the repository's default branch. */;
    deployKeys?: DeployKeysResolver<
      DeployKeyConnection,
      any,
      Context
    > /** A list of deploy keys that are on this repository. */;
    deployments?: DeploymentsResolver<
      DeploymentConnection,
      any,
      Context
    > /** Deployments associated with the repository */;
    description?: DescriptionResolver<
      string | null,
      any,
      Context
    > /** The description of the repository. */;
    descriptionHTML?: DescriptionHtmlResolver<
      Html,
      any,
      Context
    > /** The description of the repository rendered to HTML. */;
    diskUsage?: DiskUsageResolver<
      number | null,
      any,
      Context
    > /** The number of kilobytes this repository occupies on disk. */;
    forkCount?: ForkCountResolver<
      number,
      any,
      Context
    > /** Returns how many forks there are of this repository in the whole network. */;
    forks?: ForksResolver<
      RepositoryConnection,
      any,
      Context
    > /** A list of direct forked repositories. */;
    hasIssuesEnabled?: HasIssuesEnabledResolver<
      boolean,
      any,
      Context
    > /** Indicates if the repository has issues feature enabled. */;
    hasWikiEnabled?: HasWikiEnabledResolver<
      boolean,
      any,
      Context
    > /** Indicates if the repository has wiki feature enabled. */;
    homepageUrl?: HomepageUrlResolver<
      Uri | null,
      any,
      Context
    > /** The repository's URL. */;
    id?: IdResolver<string, any, Context>;
    isArchived?: IsArchivedResolver<
      boolean,
      any,
      Context
    > /** Indicates if the repository is unmaintained. */;
    isFork?: IsForkResolver<
      boolean,
      any,
      Context
    > /** Identifies if the repository is a fork. */;
    isLocked?: IsLockedResolver<
      boolean,
      any,
      Context
    > /** Indicates if the repository has been locked or not. */;
    isMirror?: IsMirrorResolver<
      boolean,
      any,
      Context
    > /** Identifies if the repository is a mirror. */;
    isPrivate?: IsPrivateResolver<
      boolean,
      any,
      Context
    > /** Identifies if the repository is private. */;
    issue?: IssueResolver<
      Issue | null,
      any,
      Context
    > /** Returns a single issue from the current repository by number. */;
    issueOrPullRequest?: IssueOrPullRequestResolver<
      IssueOrPullRequest | null,
      any,
      Context
    > /** Returns a single issue-like object from the current repository by number. */;
    issues?: IssuesResolver<
      IssueConnection,
      any,
      Context
    > /** A list of issues that have been opened in the repository. */;
    label?: LabelResolver<
      Label | null,
      any,
      Context
    > /** Returns a single label by name */;
    labels?: LabelsResolver<
      LabelConnection | null,
      any,
      Context
    > /** A list of labels associated with the repository. */;
    languages?: LanguagesResolver<
      LanguageConnection | null,
      any,
      Context
    > /** A list containing a breakdown of the language composition of the repository. */;
    licenseInfo?: LicenseInfoResolver<
      License | null,
      any,
      Context
    > /** The license associated with the repository */;
    lockReason?: LockReasonResolver<
      RepositoryLockReason | null,
      any,
      Context
    > /** The reason the repository has been locked. */;
    mentionableUsers?: MentionableUsersResolver<
      UserConnection,
      any,
      Context
    > /** A list of Users that can be mentioned in the context of the repository. */;
    mergeCommitAllowed?: MergeCommitAllowedResolver<
      boolean,
      any,
      Context
    > /** Whether or not PRs are merged with a merge commit on this repository. */;
    milestone?: MilestoneResolver<
      Milestone | null,
      any,
      Context
    > /** Returns a single milestone from the current repository by number. */;
    milestones?: MilestonesResolver<
      MilestoneConnection | null,
      any,
      Context
    > /** A list of milestones associated with the repository. */;
    mirrorUrl?: MirrorUrlResolver<
      Uri | null,
      any,
      Context
    > /** The repository's original mirror URL. */;
    name?: NameResolver<
      string,
      any,
      Context
    > /** The name of the repository. */;
    nameWithOwner?: NameWithOwnerResolver<
      string,
      any,
      Context
    > /** The repository's name with owner. */;
    object?: ObjectResolver<
      GitObject | null,
      any,
      Context
    > /** A Git object in the repository */;
    owner?: OwnerResolver<
      RepositoryOwner,
      any,
      Context
    > /** The User owner of the repository. */;
    parent?: ParentResolver<
      Repository | null,
      any,
      Context
    > /** The repository parent, if this is a fork. */;
    primaryLanguage?: PrimaryLanguageResolver<
      Language | null,
      any,
      Context
    > /** The primary language of the repository's code. */;
    project?: ProjectResolver<
      Project | null,
      any,
      Context
    > /** Find project by number. */;
    projects?: ProjectsResolver<
      ProjectConnection,
      any,
      Context
    > /** A list of projects under the owner. */;
    projectsResourcePath?: ProjectsResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path listing the repository's projects */;
    projectsUrl?: ProjectsUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL listing the repository's projects */;
    protectedBranches?: ProtectedBranchesResolver<
      ProtectedBranchConnection,
      any,
      Context
    > /** A list of protected branches that are on this repository. */;
    pullRequest?: PullRequestResolver<
      PullRequest | null,
      any,
      Context
    > /** Returns a single pull request from the current repository by number. */;
    pullRequests?: PullRequestsResolver<
      PullRequestConnection,
      any,
      Context
    > /** A list of pull requests that have been opened in the repository. */;
    pushedAt?: PushedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies when the repository was last pushed to. */;
    rebaseMergeAllowed?: RebaseMergeAllowedResolver<
      boolean,
      any,
      Context
    > /** Whether or not rebase-merging is enabled on this repository. */;
    ref?: RefResolver<
      Ref | null,
      any,
      Context
    > /** Fetch a given ref from the repository */;
    refs?: RefsResolver<
      RefConnection | null,
      any,
      Context
    > /** Fetch a list of refs from the repository */;
    release?: ReleaseResolver<
      Release | null,
      any,
      Context
    > /** Lookup a single release given various criteria. */;
    releases?: ReleasesResolver<
      ReleaseConnection,
      any,
      Context
    > /** List of releases which are dependent on this repository. */;
    repositoryTopics?: RepositoryTopicsResolver<
      RepositoryTopicConnection,
      any,
      Context
    > /** A list of applied repository-topic associations for this repository. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this repository */;
    shortDescriptionHTML?: ShortDescriptionHtmlResolver<
      Html,
      any,
      Context
    > /** A description of the repository, rendered to HTML without any links in it. */;
    squashMergeAllowed?: SquashMergeAllowedResolver<
      boolean,
      any,
      Context
    > /** Whether or not squash-merging is enabled on this repository. */;
    sshUrl?: SshUrlResolver<
      GitSshRemote,
      any,
      Context
    > /** The SSH URL to clone this repository */;
    stargazers?: StargazersResolver<
      StargazerConnection,
      any,
      Context
    > /** A list of users who have starred this starrable. */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this repository */;
    viewerCanAdminister?: ViewerCanAdministerResolver<
      boolean,
      any,
      Context
    > /** Indicates whether the viewer has admin permissions on this repository. */;
    viewerCanCreateProjects?: ViewerCanCreateProjectsResolver<
      boolean,
      any,
      Context
    > /** Can the current viewer create new projects on this owner. */;
    viewerCanSubscribe?: ViewerCanSubscribeResolver<
      boolean,
      any,
      Context
    > /** Check if the viewer is able to change their subscription status for the repository. */;
    viewerCanUpdateTopics?: ViewerCanUpdateTopicsResolver<
      boolean,
      any,
      Context
    > /** Indicates whether the viewer can update the topics of this repository. */;
    viewerHasStarred?: ViewerHasStarredResolver<
      boolean,
      any,
      Context
    > /** Returns a boolean indicating whether the viewing user has starred this starrable. */;
    viewerPermission?: ViewerPermissionResolver<
      RepositoryPermission | null,
      any,
      Context
    > /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */;
    viewerSubscription?: ViewerSubscriptionResolver<
      SubscriptionState | null,
      any,
      Context
    > /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */;
    watchers?: WatchersResolver<
      UserConnection,
      any,
      Context
    > /** A list of users watching the repository. */;
  }

  export type AssignableUsersResolver<
    R = UserConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AssignableUsersArgs>;
  export interface AssignableUsersArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type BranchProtectionRulesResolver<
    R = BranchProtectionRuleConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BranchProtectionRulesArgs>;
  export interface BranchProtectionRulesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type CodeOfConductResolver<
    R = CodeOfConduct | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CollaboratorsResolver<
    R = RepositoryCollaboratorConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CollaboratorsArgs>;
  export interface CollaboratorsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    affiliation?: CollaboratorAffiliation | null /** Collaborators affiliation level with a repository. */;
  }

  export type CommitCommentsResolver<
    R = CommitCommentConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CommitCommentsArgs>;
  export interface CommitCommentsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DefaultBranchRefResolver<
    R = Ref | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DeployKeysResolver<
    R = DeployKeyConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeployKeysArgs>;
  export interface DeployKeysArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type DeploymentsResolver<
    R = DeploymentConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeploymentsArgs>;
  export interface DeploymentsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    environments?: string[] | null /** Environments to list deployments for */;
  }

  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DiskUsageResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ForkCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ForksResolver<
    R = RepositoryConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ForksArgs>;
  export interface ForksArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    privacy?: RepositoryPrivacy | null /** If non-null, filters repositories according to privacy */;
    orderBy?: RepositoryOrder | null /** Ordering options for repositories returned from the connection */;
    affiliations?:
      | (RepositoryAffiliation | null)[]
      | null /** Array of viewer's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the current viewer owns. */;
    ownerAffiliations?:
      | (RepositoryAffiliation | null)[]
      | null /** Array of owner's affiliation options for repositories returned from the connection. For example, OWNER will include only repositories that the organization or user being viewed owns. */;
    isLocked?:
      | boolean
      | null /** If non-null, filters repositories according to whether they have been locked */;
  }

  export type HasIssuesEnabledResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasWikiEnabledResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HomepageUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsArchivedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsForkResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsLockedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsMirrorResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsPrivateResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IssueResolver<
    R = Issue | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, IssueArgs>;
  export interface IssueArgs {
    number: number /** The number for the issue to be returned. */;
  }

  export type IssueOrPullRequestResolver<
    R = IssueOrPullRequest | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, IssueOrPullRequestArgs>;
  export interface IssueOrPullRequestArgs {
    number: number /** The number for the issue to be returned. */;
  }

  export type IssuesResolver<
    R = IssueConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, IssuesArgs>;
  export interface IssuesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    orderBy?: IssueOrder | null /** Ordering options for issues returned from the connection. */;
    labels?:
      | string[]
      | null /** A list of label names to filter the pull requests by. */;
    states?:
      | IssueState[]
      | null /** A list of states to filter the issues by. */;
  }

  export type LabelResolver<
    R = Label | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, LabelArgs>;
  export interface LabelArgs {
    name: string /** Label name */;
  }

  export type LabelsResolver<
    R = LabelConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, LabelsArgs>;
  export interface LabelsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    query?:
      | string
      | null /** If provided, searches labels by name and description. */;
  }

  export type LanguagesResolver<
    R = LanguageConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, LanguagesArgs>;
  export interface LanguagesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    orderBy?: LanguageOrder | null /** Order for connection */;
  }

  export type LicenseInfoResolver<
    R = License | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LockReasonResolver<
    R = RepositoryLockReason | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MentionableUsersResolver<
    R = UserConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MentionableUsersArgs>;
  export interface MentionableUsersArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type MergeCommitAllowedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MilestoneResolver<
    R = Milestone | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MilestoneArgs>;
  export interface MilestoneArgs {
    number: number /** The number for the milestone to be returned. */;
  }

  export type MilestonesResolver<
    R = MilestoneConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MilestonesArgs>;
  export interface MilestonesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    states?:
      | MilestoneState[]
      | null /** Filter by the state of the milestones. */;
    orderBy?: MilestoneOrder | null /** Ordering options for milestones. */;
  }

  export type MirrorUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameWithOwnerResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ObjectResolver<
    R = GitObject | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ObjectArgs>;
  export interface ObjectArgs {
    oid?: GitObjectId | null /** The Git object ID */;
    expression?:
      | string
      | null /** A Git revision expression suitable for rev-parse */;
  }

  export type OwnerResolver<
    R = RepositoryOwner,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ParentResolver<
    R = Repository | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PrimaryLanguageResolver<
    R = Language | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProjectResolver<
    R = Project | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ProjectArgs>;
  export interface ProjectArgs {
    number: number /** The project number to find. */;
  }

  export type ProjectsResolver<
    R = ProjectConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ProjectsArgs>;
  export interface ProjectsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    orderBy?: ProjectOrder | null /** Ordering options for projects returned from the connection */;
    search?:
      | string
      | null /** Query to search projects by, currently only searching by name. */;
    states?:
      | ProjectState[]
      | null /** A list of states to filter the projects by. */;
  }

  export type ProjectsResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProjectsUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProtectedBranchesResolver<
    R = ProtectedBranchConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ProtectedBranchesArgs>;
  export interface ProtectedBranchesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type PullRequestResolver<
    R = PullRequest | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PullRequestArgs>;
  export interface PullRequestArgs {
    number: number /** The number for the pull request to be returned. */;
  }

  export type PullRequestsResolver<
    R = PullRequestConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PullRequestsArgs>;
  export interface PullRequestsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    states?:
      | PullRequestState[]
      | null /** A list of states to filter the pull requests by. */;
    labels?:
      | string[]
      | null /** A list of label names to filter the pull requests by. */;
    headRefName?:
      | string
      | null /** The head ref name to filter the pull requests by. */;
    baseRefName?:
      | string
      | null /** The base ref name to filter the pull requests by. */;
    orderBy?: IssueOrder | null /** Ordering options for pull requests returned from the connection. */;
  }

  export type PushedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RebaseMergeAllowedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RefResolver<
    R = Ref | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RefArgs>;
  export interface RefArgs {
    qualifiedName: string /** The ref to retrieve. Fully qualified matches are checked in order (`refs/heads/master`) before falling back onto checks for short name matches (`master`). */;
  }

  export type RefsResolver<
    R = RefConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RefsArgs>;
  export interface RefsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    refPrefix: string /** A ref name prefix like `refs/heads/`, `refs/tags/`, etc. */;
    direction?: OrderDirection | null /** DEPRECATED: use orderBy. The ordering direction. */;
    orderBy?: RefOrder | null /** Ordering options for refs returned from the connection. */;
  }

  export type ReleaseResolver<
    R = Release | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReleaseArgs>;
  export interface ReleaseArgs {
    tagName: string /** The name of the Tag the Release was created from */;
  }

  export type ReleasesResolver<
    R = ReleaseConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReleasesArgs>;
  export interface ReleasesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    orderBy?: ReleaseOrder | null /** Order for connection */;
  }

  export type RepositoryTopicsResolver<
    R = RepositoryTopicConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RepositoryTopicsArgs>;
  export interface RepositoryTopicsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ShortDescriptionHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ShortDescriptionHtmlArgs>;
  export interface ShortDescriptionHtmlArgs {
    limit?: number | null /** How many characters to return. */;
  }

  export type SquashMergeAllowedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SshUrlResolver<
    R = GitSshRemote,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StargazersResolver<
    R = StargazerConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StargazersArgs>;
  export interface StargazersArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    orderBy?: StarOrder | null /** Order for connection */;
  }

  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ViewerCanAdministerResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanCreateProjectsResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanSubscribeResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanUpdateTopicsResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerHasStarredResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerPermissionResolver<
    R = RepositoryPermission | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerSubscriptionResolver<
    R = SubscriptionState | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WatchersResolver<
    R = UserConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, WatchersArgs>;
  export interface WatchersArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }
}
/** The connection type for User. */
export namespace StargazerConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (StargazerEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (User | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (StargazerEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (User | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a user that's starred a repository. */
export namespace StargazerEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<User, any, Context>;
    starredAt?: StarredAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies when the item was starred. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type StarredAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for BranchProtectionRule. */
export namespace BranchProtectionRuleConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (BranchProtectionRuleEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (BranchProtectionRule | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (BranchProtectionRuleEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (BranchProtectionRule | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace BranchProtectionRuleEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      BranchProtectionRule | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = BranchProtectionRule | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A branch protection rule. */
export namespace BranchProtectionRuleResolvers {
  export interface Resolvers<Context = any> {
    branchProtectionRuleConflicts?: BranchProtectionRuleConflictsResolver<
      BranchProtectionRuleConflictConnection,
      any,
      Context
    > /** A list of conflicts matching branches protection rule and other branch protection rules */;
    creator?: CreatorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who created this branch protection rule. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    dismissesStaleReviews?: DismissesStaleReviewsResolver<
      boolean,
      any,
      Context
    > /** Will new commits pushed to matching branches dismiss pull request review approvals. */;
    id?: IdResolver<string, any, Context>;
    isAdminEnforced?: IsAdminEnforcedResolver<
      boolean,
      any,
      Context
    > /** Can admins overwrite branch protection. */;
    matchingRefs?: MatchingRefsResolver<
      RefConnection,
      any,
      Context
    > /** Repository refs that are protected by this rule */;
    pattern?: PatternResolver<
      string,
      any,
      Context
    > /** Identifies the protection rule pattern. */;
    pushAllowances?: PushAllowancesResolver<
      PushAllowanceConnection,
      any,
      Context
    > /** A list push allowances for this branch protection rule. */;
    repository?: RepositoryResolver<
      Repository | null,
      any,
      Context
    > /** The repository associated with this branch protection rule. */;
    requiredApprovingReviewCount?: RequiredApprovingReviewCountResolver<
      number | null,
      any,
      Context
    > /** Number of approving reviews required to update matching branches. */;
    requiredStatusCheckContexts?: RequiredStatusCheckContextsResolver<
      (string | null)[] | null,
      any,
      Context
    > /** List of required status check contexts that must pass for commits to be accepted to matching branches. */;
    requiresApprovingReviews?: RequiresApprovingReviewsResolver<
      boolean,
      any,
      Context
    > /** Are approving reviews required to update matching branches. */;
    requiresCommitSignatures?: RequiresCommitSignaturesResolver<
      boolean,
      any,
      Context
    > /** Are commits required to be signed. */;
    requiresStatusChecks?: RequiresStatusChecksResolver<
      boolean,
      any,
      Context
    > /** Are status checks required to update matching branches. */;
    requiresStrictStatusChecks?: RequiresStrictStatusChecksResolver<
      boolean,
      any,
      Context
    > /** Are branches required to be up to date before merging. */;
    restrictsPushes?: RestrictsPushesResolver<
      boolean,
      any,
      Context
    > /** Is pushing to matching branches restricted. */;
    restrictsReviewDismissals?: RestrictsReviewDismissalsResolver<
      boolean,
      any,
      Context
    > /** Is dismissal of pull request reviews restricted. */;
    reviewDismissalAllowances?: ReviewDismissalAllowancesResolver<
      ReviewDismissalAllowanceConnection,
      any,
      Context
    > /** A list review dismissal allowances for this branch protection rule. */;
  }

  export type BranchProtectionRuleConflictsResolver<
    R = BranchProtectionRuleConflictConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BranchProtectionRuleConflictsArgs>;
  export interface BranchProtectionRuleConflictsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type CreatorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DismissesStaleReviewsResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsAdminEnforcedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MatchingRefsResolver<
    R = RefConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MatchingRefsArgs>;
  export interface MatchingRefsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type PatternResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PushAllowancesResolver<
    R = PushAllowanceConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PushAllowancesArgs>;
  export interface PushAllowancesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type RepositoryResolver<
    R = Repository | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RequiredApprovingReviewCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RequiredStatusCheckContextsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RequiresApprovingReviewsResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RequiresCommitSignaturesResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RequiresStatusChecksResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RequiresStrictStatusChecksResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RestrictsPushesResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RestrictsReviewDismissalsResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReviewDismissalAllowancesResolver<
    R = ReviewDismissalAllowanceConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReviewDismissalAllowancesArgs>;
  export interface ReviewDismissalAllowancesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }
}
/** The connection type for BranchProtectionRuleConflict. */
export namespace BranchProtectionRuleConflictConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (BranchProtectionRuleConflictEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (BranchProtectionRuleConflict | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (BranchProtectionRuleConflictEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (BranchProtectionRuleConflict | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace BranchProtectionRuleConflictEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      BranchProtectionRuleConflict | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = BranchProtectionRuleConflict | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A conflict between two branch protection rules. */
export namespace BranchProtectionRuleConflictResolvers {
  export interface Resolvers<Context = any> {
    branchProtectionRule?: BranchProtectionRuleResolver<
      BranchProtectionRule | null,
      any,
      Context
    > /** Identifies the branch protection rule. */;
    conflictingBranchProtectionRule?: ConflictingBranchProtectionRuleResolver<
      BranchProtectionRule | null,
      any,
      Context
    > /** Identifies the conflicting branch protection rule. */;
    ref?: RefResolver<
      Ref | null,
      any,
      Context
    > /** Identifies the branch ref that has conflicting rules */;
  }

  export type BranchProtectionRuleResolver<
    R = BranchProtectionRule | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ConflictingBranchProtectionRuleResolver<
    R = BranchProtectionRule | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RefResolver<
    R = Ref | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a Git reference. */
export namespace RefResolvers {
  export interface Resolvers<Context = any> {
    associatedPullRequests?: AssociatedPullRequestsResolver<
      PullRequestConnection,
      any,
      Context
    > /** A list of pull requests with this ref as the head ref. */;
    id?: IdResolver<string, any, Context>;
    name?: NameResolver<string, any, Context> /** The ref name. */;
    prefix?: PrefixResolver<
      string,
      any,
      Context
    > /** The ref's prefix, such as `refs/heads/` or `refs/tags/`. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The repository the ref belongs to. */;
    target?: TargetResolver<
      GitObject,
      any,
      Context
    > /** The object the ref points to. */;
  }

  export type AssociatedPullRequestsResolver<
    R = PullRequestConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AssociatedPullRequestsArgs>;
  export interface AssociatedPullRequestsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    states?:
      | PullRequestState[]
      | null /** A list of states to filter the pull requests by. */;
    labels?:
      | string[]
      | null /** A list of label names to filter the pull requests by. */;
    headRefName?:
      | string
      | null /** The head ref name to filter the pull requests by. */;
    baseRefName?:
      | string
      | null /** The base ref name to filter the pull requests by. */;
    orderBy?: IssueOrder | null /** Ordering options for pull requests returned from the connection. */;
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
  export type PrefixResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TargetResolver<
    R = GitObject,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for PullRequest. */
export namespace PullRequestConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (PullRequestEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (PullRequest | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (PullRequestEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (PullRequest | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace PullRequestEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      PullRequest | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = PullRequest | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A repository pull request. */
export namespace PullRequestResolvers {
  export interface Resolvers<Context = any> {
    activeLockReason?: ActiveLockReasonResolver<
      LockReason | null,
      any,
      Context
    > /** Reason that the conversation was locked. */;
    additions?: AdditionsResolver<
      number,
      any,
      Context
    > /** The number of additions in this pull request. */;
    assignees?: AssigneesResolver<
      UserConnection,
      any,
      Context
    > /** A list of Users assigned to this object. */;
    author?: AuthorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who authored the comment. */;
    authorAssociation?: AuthorAssociationResolver<
      CommentAuthorAssociation,
      any,
      Context
    > /** Author's association with the subject of the comment. */;
    baseRef?: BaseRefResolver<
      Ref | null,
      any,
      Context
    > /** Identifies the base Ref associated with the pull request. */;
    baseRefName?: BaseRefNameResolver<
      string,
      any,
      Context
    > /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */;
    baseRefOid?: BaseRefOidResolver<
      GitObjectId,
      any,
      Context
    > /** Identifies the oid of the base ref associated with the pull request, even if the ref has been deleted. */;
    body?: BodyResolver<string, any, Context> /** The body as Markdown. */;
    bodyHTML?: BodyHtmlResolver<
      Html,
      any,
      Context
    > /** The body rendered to HTML. */;
    bodyText?: BodyTextResolver<
      string,
      any,
      Context
    > /** The body rendered to text. */;
    changedFiles?: ChangedFilesResolver<
      number,
      any,
      Context
    > /** The number of changed files in this pull request. */;
    closed?: ClosedResolver<
      boolean,
      any,
      Context
    > /** `true` if the pull request is closed */;
    closedAt?: ClosedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies the date and time when the object was closed. */;
    comments?: CommentsResolver<
      IssueCommentConnection,
      any,
      Context
    > /** A list of comments associated with the pull request. */;
    commits?: CommitsResolver<
      PullRequestCommitConnection,
      any,
      Context
    > /** A list of commits present in this pull request's head branch not present in the base branch. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    createdViaEmail?: CreatedViaEmailResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was created via an email reply. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    deletions?: DeletionsResolver<
      number,
      any,
      Context
    > /** The number of deletions in this pull request. */;
    editor?: EditorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who edited this pull request's body. */;
    headRef?: HeadRefResolver<
      Ref | null,
      any,
      Context
    > /** Identifies the head Ref associated with the pull request. */;
    headRefName?: HeadRefNameResolver<
      string,
      any,
      Context
    > /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */;
    headRefOid?: HeadRefOidResolver<
      GitObjectId,
      any,
      Context
    > /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */;
    headRepository?: HeadRepositoryResolver<
      Repository | null,
      any,
      Context
    > /** The repository associated with this pull request's head Ref. */;
    headRepositoryOwner?: HeadRepositoryOwnerResolver<
      RepositoryOwner | null,
      any,
      Context
    > /** The owner of the repository associated with this pull request's head Ref. */;
    id?: IdResolver<string, any, Context>;
    includesCreatedEdit?: IncludesCreatedEditResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was edited and includes an edit with the creation data */;
    isCrossRepository?: IsCrossRepositoryResolver<
      boolean,
      any,
      Context
    > /** The head and base repositories are different. */;
    labels?: LabelsResolver<
      LabelConnection | null,
      any,
      Context
    > /** A list of labels associated with the object. */;
    lastEditedAt?: LastEditedAtResolver<
      DateTime | null,
      any,
      Context
    > /** The moment the editor made the last edit */;
    locked?: LockedResolver<
      boolean,
      any,
      Context
    > /** `true` if the pull request is locked */;
    maintainerCanModify?: MaintainerCanModifyResolver<
      boolean,
      any,
      Context
    > /** Indicates whether maintainers can modify the pull request. */;
    mergeCommit?: MergeCommitResolver<
      Commit | null,
      any,
      Context
    > /** The commit that was created when this pull request was merged. */;
    mergeable?: MergeableResolver<
      MergeableState,
      any,
      Context
    > /** Whether or not the pull request can be merged based on the existence of merge conflicts. */;
    merged?: MergedResolver<
      boolean,
      any,
      Context
    > /** Whether or not the pull request was merged. */;
    mergedAt?: MergedAtResolver<
      DateTime | null,
      any,
      Context
    > /** The date and time that the pull request was merged. */;
    mergedBy?: MergedByResolver<
      Actor | null,
      any,
      Context
    > /** The actor who merged the pull request. */;
    milestone?: MilestoneResolver<
      Milestone | null,
      any,
      Context
    > /** Identifies the milestone associated with the pull request. */;
    number?: NumberResolver<
      number,
      any,
      Context
    > /** Identifies the pull request number. */;
    participants?: ParticipantsResolver<
      UserConnection,
      any,
      Context
    > /** A list of Users that are participating in the Pull Request conversation. */;
    permalink?: PermalinkResolver<
      Uri,
      any,
      Context
    > /** The permalink to the pull request. */;
    potentialMergeCommit?: PotentialMergeCommitResolver<
      Commit | null,
      any,
      Context
    > /** The commit that GitHub automatically generated to test if this pull request could be merged. This field will not return a value if the pull request is merged, or if the test merge commit is still being generated. See the `mergeable` field for more details on the mergeability of the pull request. */;
    projectCards?: ProjectCardsResolver<
      ProjectCardConnection,
      any,
      Context
    > /** List of project cards associated with this pull request. */;
    publishedAt?: PublishedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies when the comment was published at. */;
    reactionGroups?: ReactionGroupsResolver<
      ReactionGroup[] | null,
      any,
      Context
    > /** A list of reactions grouped by content left on the subject. */;
    reactions?: ReactionsResolver<
      ReactionConnection,
      any,
      Context
    > /** A list of Reactions left on the Issue. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The repository associated with this node. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this pull request. */;
    revertResourcePath?: RevertResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for reverting this pull request. */;
    revertUrl?: RevertUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for reverting this pull request. */;
    reviewRequests?: ReviewRequestsResolver<
      ReviewRequestConnection | null,
      any,
      Context
    > /** A list of review requests associated with the pull request. */;
    reviews?: ReviewsResolver<
      PullRequestReviewConnection | null,
      any,
      Context
    > /** A list of reviews associated with the pull request. */;
    state?: StateResolver<
      PullRequestState,
      any,
      Context
    > /** Identifies the state of the pull request. */;
    suggestedReviewers?: SuggestedReviewersResolver<
      (SuggestedReviewer | null)[],
      any,
      Context
    > /** A list of reviewer suggestions based on commit history and past review comments. */;
    timeline?: TimelineResolver<
      PullRequestTimelineConnection,
      any,
      Context
    > /** A list of events, comments, commits, etc. associated with the pull request. */;
    title?: TitleResolver<
      string,
      any,
      Context
    > /** Identifies the pull request title. */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this pull request. */;
    userContentEdits?: UserContentEditsResolver<
      UserContentEditConnection | null,
      any,
      Context
    > /** A list of edits to this content. */;
    viewerCanApplySuggestion?: ViewerCanApplySuggestionResolver<
      boolean,
      any,
      Context
    > /** Whether or not the viewer can apply suggestion. */;
    viewerCanReact?: ViewerCanReactResolver<
      boolean,
      any,
      Context
    > /** Can user react to this subject */;
    viewerCanSubscribe?: ViewerCanSubscribeResolver<
      boolean,
      any,
      Context
    > /** Check if the viewer is able to change their subscription status for the repository. */;
    viewerCanUpdate?: ViewerCanUpdateResolver<
      boolean,
      any,
      Context
    > /** Check if the current viewer can update this object. */;
    viewerCannotUpdateReasons?: ViewerCannotUpdateReasonsResolver<
      CommentCannotUpdateReason[],
      any,
      Context
    > /** Reasons why the current viewer can not update this comment. */;
    viewerDidAuthor?: ViewerDidAuthorResolver<
      boolean,
      any,
      Context
    > /** Did the viewer author this comment. */;
    viewerSubscription?: ViewerSubscriptionResolver<
      SubscriptionState | null,
      any,
      Context
    > /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */;
  }

  export type ActiveLockReasonResolver<
    R = LockReason | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AdditionsResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AssigneesResolver<
    R = UserConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AssigneesArgs>;
  export interface AssigneesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type AuthorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AuthorAssociationResolver<
    R = CommentAuthorAssociation,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BaseRefResolver<
    R = Ref | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BaseRefNameResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BaseRefOidResolver<
    R = GitObjectId,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type BodyHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyTextResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChangedFilesResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClosedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClosedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommentsResolver<
    R = IssueCommentConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CommentsArgs>;
  export interface CommentsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type CommitsResolver<
    R = PullRequestCommitConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CommitsArgs>;
  export interface CommitsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedViaEmailResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DeletionsResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EditorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HeadRefResolver<
    R = Ref | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HeadRefNameResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HeadRefOidResolver<
    R = GitObjectId,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HeadRepositoryResolver<
    R = Repository | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HeadRepositoryOwnerResolver<
    R = RepositoryOwner | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IncludesCreatedEditResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsCrossRepositoryResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LabelsResolver<
    R = LabelConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, LabelsArgs>;
  export interface LabelsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type LastEditedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LockedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MaintainerCanModifyResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MergeCommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MergeableResolver<
    R = MergeableState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MergedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MergedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MergedByResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MilestoneResolver<
    R = Milestone | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NumberResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ParticipantsResolver<
    R = UserConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ParticipantsArgs>;
  export interface ParticipantsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type PermalinkResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PotentialMergeCommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProjectCardsResolver<
    R = ProjectCardConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ProjectCardsArgs>;
  export interface ProjectCardsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    archivedStates?:
      | (ProjectCardArchivedState | null)[]
      | null /** A list of archived states to filter the cards by */;
  }

  export type PublishedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReactionGroupsResolver<
    R = ReactionGroup[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReactionsResolver<
    R = ReactionConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReactionsArgs>;
  export interface ReactionsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    content?: ReactionContent | null /** Allows filtering Reactions by emoji. */;
    orderBy?: ReactionOrder | null /** Allows specifying the order in which reactions are returned. */;
  }

  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RevertResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RevertUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReviewRequestsResolver<
    R = ReviewRequestConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReviewRequestsArgs>;
  export interface ReviewRequestsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type ReviewsResolver<
    R = PullRequestReviewConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReviewsArgs>;
  export interface ReviewsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    states?:
      | PullRequestReviewState[]
      | null /** A list of states to filter the reviews. */;
    author?: string | null /** Filter by author of the review. */;
  }

  export type StateResolver<
    R = PullRequestState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SuggestedReviewersResolver<
    R = (SuggestedReviewer | null)[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TimelineResolver<
    R = PullRequestTimelineConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, TimelineArgs>;
  export interface TimelineArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    since?: DateTime | null /** Allows filtering timeline events by a `since` timestamp. */;
  }

  export type TitleResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserContentEditsResolver<
    R = UserContentEditConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserContentEditsArgs>;
  export interface UserContentEditsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type ViewerCanApplySuggestionResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanReactResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanSubscribeResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanUpdateResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCannotUpdateReasonsResolver<
    R = CommentCannotUpdateReason[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerDidAuthorResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerSubscriptionResolver<
    R = SubscriptionState | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A list of edits to content. */
export namespace UserContentEditConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (UserContentEditEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (UserContentEdit | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (UserContentEditEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (UserContentEdit | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace UserContentEditEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      UserContentEdit | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = UserContentEdit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edit on user content */
export namespace UserContentEditResolvers {
  export interface Resolvers<Context = any> {
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    deletedAt?: DeletedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies the date and time when the object was deleted. */;
    deletedBy?: DeletedByResolver<
      Actor | null,
      any,
      Context
    > /** The actor who deleted this content */;
    diff?: DiffResolver<
      string | null,
      any,
      Context
    > /** A summary of the changes for this edit */;
    editedAt?: EditedAtResolver<
      DateTime,
      any,
      Context
    > /** When this content was edited */;
    editor?: EditorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who edited this content */;
    id?: IdResolver<string, any, Context>;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DeletedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DeletedByResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DiffResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EditedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EditorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for Label. */
export namespace LabelConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (LabelEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Label | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (LabelEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Label | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace LabelEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Label | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Label | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A label for categorizing Issues or Milestones with a given Repository. */
export namespace LabelResolvers {
  export interface Resolvers<Context = any> {
    color?: ColorResolver<
      string,
      any,
      Context
    > /** Identifies the label color. */;
    createdAt?: CreatedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies the date and time when the label was created. */;
    description?: DescriptionResolver<
      string | null,
      any,
      Context
    > /** A brief description of this label. */;
    id?: IdResolver<string, any, Context>;
    isDefault?: IsDefaultResolver<
      boolean,
      any,
      Context
    > /** Indicates whether or not this is a default label. */;
    issues?: IssuesResolver<
      IssueConnection,
      any,
      Context
    > /** A list of issues associated with this label. */;
    name?: NameResolver<string, any, Context> /** Identifies the label name. */;
    pullRequests?: PullRequestsResolver<
      PullRequestConnection,
      any,
      Context
    > /** A list of pull requests associated with this label. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The repository associated with this label. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this label. */;
    updatedAt?: UpdatedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies the date and time when the label was last updated. */;
    url?: UrlResolver<Uri, any, Context> /** The HTTP URL for this label. */;
  }

  export type ColorResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type CreatedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsDefaultResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IssuesResolver<
    R = IssueConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, IssuesArgs>;
  export interface IssuesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    orderBy?: IssueOrder | null /** Ordering options for issues returned from the connection. */;
    labels?:
      | string[]
      | null /** A list of label names to filter the pull requests by. */;
    states?:
      | IssueState[]
      | null /** A list of states to filter the issues by. */;
  }

  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PullRequestsResolver<
    R = PullRequestConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PullRequestsArgs>;
  export interface PullRequestsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    states?:
      | PullRequestState[]
      | null /** A list of states to filter the pull requests by. */;
    labels?:
      | string[]
      | null /** A list of label names to filter the pull requests by. */;
    headRefName?:
      | string
      | null /** The head ref name to filter the pull requests by. */;
    baseRefName?:
      | string
      | null /** The base ref name to filter the pull requests by. */;
    orderBy?: IssueOrder | null /** Ordering options for pull requests returned from the connection. */;
  }

  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** The connection type for Issue. */
export namespace IssueConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (IssueEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Issue | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (IssueEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Issue | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace IssueEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Issue | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Issue | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A group of emoji reactions to a particular piece of content. */
export namespace ReactionGroupResolvers {
  export interface Resolvers<Context = any> {
    content?: ContentResolver<
      ReactionContent,
      any,
      Context
    > /** Identifies the emoji reaction. */;
    createdAt?: CreatedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies when the reaction was created. */;
    subject?: SubjectResolver<
      Reactable,
      any,
      Context
    > /** The subject that was reacted to. */;
    users?: UsersResolver<
      ReactingUserConnection,
      any,
      Context
    > /** Users who have reacted to the reaction subject with the emotion represented by this reaction group */;
    viewerHasReacted?: ViewerHasReactedResolver<
      boolean,
      any,
      Context
    > /** Whether or not the authenticated user has left a reaction on the subject. */;
  }

  export type ContentResolver<
    R = ReactionContent,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SubjectResolver<
    R = Reactable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UsersResolver<
    R = ReactingUserConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UsersArgs>;
  export interface UsersArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type ViewerHasReactedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for User. */
export namespace ReactingUserConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (ReactingUserEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (User | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (ReactingUserEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (User | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a user that's made a reaction. */
export namespace ReactingUserEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<User, any, Context>;
    reactedAt?: ReactedAtResolver<
      DateTime,
      any,
      Context
    > /** The moment when the user made the reaction. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ReactedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A list of reactions that have been left on the subject. */
export namespace ReactionConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (ReactionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Reaction | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
    viewerHasReacted?: ViewerHasReactedResolver<
      boolean,
      any,
      Context
    > /** Whether or not the authenticated user has left a reaction on the subject. */;
  }

  export type EdgesResolver<
    R = (ReactionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Reaction | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerHasReactedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ReactionEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Reaction | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Reaction | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An emoji reaction to a particular piece of content. */
export namespace ReactionResolvers {
  export interface Resolvers<Context = any> {
    content?: ContentResolver<
      ReactionContent,
      any,
      Context
    > /** Identifies the emoji reaction. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
    reactable?: ReactableResolver<
      Reactable,
      any,
      Context
    > /** The reactable piece of content */;
    user?: UserResolver<
      User | null,
      any,
      Context
    > /** Identifies the user who created this reaction. */;
  }

  export type ContentResolver<
    R = ReactionContent,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ReactableResolver<
    R = Reactable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for IssueComment. */
export namespace IssueCommentConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (IssueCommentEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (IssueComment | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (IssueCommentEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (IssueComment | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace IssueCommentEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      IssueComment | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = IssueComment | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a comment on an Issue. */
export namespace IssueCommentResolvers {
  export interface Resolvers<Context = any> {
    author?: AuthorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who authored the comment. */;
    authorAssociation?: AuthorAssociationResolver<
      CommentAuthorAssociation,
      any,
      Context
    > /** Author's association with the subject of the comment. */;
    body?: BodyResolver<string, any, Context> /** The body as Markdown. */;
    bodyHTML?: BodyHtmlResolver<
      Html,
      any,
      Context
    > /** The body rendered to HTML. */;
    bodyText?: BodyTextResolver<
      string,
      any,
      Context
    > /** The body rendered to text. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    createdViaEmail?: CreatedViaEmailResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was created via an email reply. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    editor?: EditorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who edited the comment. */;
    id?: IdResolver<string, any, Context>;
    includesCreatedEdit?: IncludesCreatedEditResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was edited and includes an edit with the creation data */;
    issue?: IssueResolver<
      Issue,
      any,
      Context
    > /** Identifies the issue associated with the comment. */;
    lastEditedAt?: LastEditedAtResolver<
      DateTime | null,
      any,
      Context
    > /** The moment the editor made the last edit */;
    publishedAt?: PublishedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies when the comment was published at. */;
    pullRequest?: PullRequestResolver<
      PullRequest | null,
      any,
      Context
    > /** Returns the pull request associated with the comment, if this comment was made on apull request. */;
    reactionGroups?: ReactionGroupsResolver<
      ReactionGroup[] | null,
      any,
      Context
    > /** A list of reactions grouped by content left on the subject. */;
    reactions?: ReactionsResolver<
      ReactionConnection,
      any,
      Context
    > /** A list of Reactions left on the Issue. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The repository associated with this node. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this issue comment */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this issue comment */;
    userContentEdits?: UserContentEditsResolver<
      UserContentEditConnection | null,
      any,
      Context
    > /** A list of edits to this content. */;
    viewerCanDelete?: ViewerCanDeleteResolver<
      boolean,
      any,
      Context
    > /** Check if the current viewer can delete this object. */;
    viewerCanReact?: ViewerCanReactResolver<
      boolean,
      any,
      Context
    > /** Can user react to this subject */;
    viewerCanUpdate?: ViewerCanUpdateResolver<
      boolean,
      any,
      Context
    > /** Check if the current viewer can update this object. */;
    viewerCannotUpdateReasons?: ViewerCannotUpdateReasonsResolver<
      CommentCannotUpdateReason[],
      any,
      Context
    > /** Reasons why the current viewer can not update this comment. */;
    viewerDidAuthor?: ViewerDidAuthorResolver<
      boolean,
      any,
      Context
    > /** Did the viewer author this comment. */;
  }

  export type AuthorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AuthorAssociationResolver<
    R = CommentAuthorAssociation,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type BodyHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyTextResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedViaEmailResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EditorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IncludesCreatedEditResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IssueResolver<R = Issue, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LastEditedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PublishedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestResolver<
    R = PullRequest | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReactionGroupsResolver<
    R = ReactionGroup[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReactionsResolver<
    R = ReactionConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReactionsArgs>;
  export interface ReactionsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    content?: ReactionContent | null /** Allows filtering Reactions by emoji. */;
    orderBy?: ReactionOrder | null /** Allows specifying the order in which reactions are returned. */;
  }

  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserContentEditsResolver<
    R = UserContentEditConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserContentEditsArgs>;
  export interface UserContentEditsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type ViewerCanDeleteResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanReactResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanUpdateResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCannotUpdateReasonsResolver<
    R = CommentCannotUpdateReason[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerDidAuthorResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for PullRequestCommit. */
export namespace PullRequestCommitConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (PullRequestCommitEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (PullRequestCommit | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (PullRequestCommitEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (PullRequestCommit | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace PullRequestCommitEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      PullRequestCommit | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = PullRequestCommit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a Git commit part of a pull request. */
export namespace PullRequestCommitResolvers {
  export interface Resolvers<Context = any> {
    commit?: CommitResolver<Commit, any, Context> /** The Git commit object */;
    id?: IdResolver<string, any, Context>;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** The pull request this commit belongs to */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this pull request commit */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this pull request commit */;
  }

  export type CommitResolver<
    R = Commit,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Represents a Git commit. */
export namespace CommitResolvers {
  export interface Resolvers<Context = any> {
    abbreviatedOid?: AbbreviatedOidResolver<
      string,
      any,
      Context
    > /** An abbreviated version of the Git object ID */;
    additions?: AdditionsResolver<
      number,
      any,
      Context
    > /** The number of additions in this commit. */;
    author?: AuthorResolver<
      GitActor | null,
      any,
      Context
    > /** Authorship details of the commit. */;
    authoredByCommitter?: AuthoredByCommitterResolver<
      boolean,
      any,
      Context
    > /** Check if the committer and the author match. */;
    authoredDate?: AuthoredDateResolver<
      DateTime,
      any,
      Context
    > /** The datetime when this commit was authored. */;
    blame?: BlameResolver<
      Blame,
      any,
      Context
    > /** Fetches `git blame` information. */;
    changedFiles?: ChangedFilesResolver<
      number,
      any,
      Context
    > /** The number of changed files in this commit. */;
    comments?: CommentsResolver<
      CommitCommentConnection,
      any,
      Context
    > /** Comments made on the commit. */;
    commitResourcePath?: CommitResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this Git object */;
    commitUrl?: CommitUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this Git object */;
    committedDate?: CommittedDateResolver<
      DateTime,
      any,
      Context
    > /** The datetime when this commit was committed. */;
    committedViaWeb?: CommittedViaWebResolver<
      boolean,
      any,
      Context
    > /** Check if commited via GitHub web UI. */;
    committer?: CommitterResolver<
      GitActor | null,
      any,
      Context
    > /** Committership details of the commit. */;
    deletions?: DeletionsResolver<
      number,
      any,
      Context
    > /** The number of deletions in this commit. */;
    history?: HistoryResolver<
      CommitHistoryConnection,
      any,
      Context
    > /** The linear commit history starting from (and including) this commit, in the same order as `git log`. */;
    id?: IdResolver<string, any, Context>;
    message?: MessageResolver<
      string,
      any,
      Context
    > /** The Git commit message */;
    messageBody?: MessageBodyResolver<
      string,
      any,
      Context
    > /** The Git commit message body */;
    messageBodyHTML?: MessageBodyHtmlResolver<
      Html,
      any,
      Context
    > /** The commit message body rendered to HTML. */;
    messageHeadline?: MessageHeadlineResolver<
      string,
      any,
      Context
    > /** The Git commit message headline */;
    messageHeadlineHTML?: MessageHeadlineHtmlResolver<
      Html,
      any,
      Context
    > /** The commit message headline rendered to HTML. */;
    oid?: OidResolver<GitObjectId, any, Context> /** The Git object ID */;
    parents?: ParentsResolver<
      CommitConnection,
      any,
      Context
    > /** The parents of a commit. */;
    pushedDate?: PushedDateResolver<
      DateTime | null,
      any,
      Context
    > /** The datetime when this commit was pushed. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The Repository this commit belongs to */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this commit */;
    signature?: SignatureResolver<
      GitSignature | null,
      any,
      Context
    > /** Commit signing information, if present. */;
    status?: StatusResolver<
      Status | null,
      any,
      Context
    > /** Status information for this commit */;
    tarballUrl?: TarballUrlResolver<
      Uri,
      any,
      Context
    > /** Returns a URL to download a tarball archive for a repository.Note: For private repositories, these links are temporary and expire after five minutes. */;
    tree?: TreeResolver<Tree, any, Context> /** Commit's root Tree */;
    treeResourcePath?: TreeResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for the tree of this commit */;
    treeUrl?: TreeUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for the tree of this commit */;
    url?: UrlResolver<Uri, any, Context> /** The HTTP URL for this commit */;
    viewerCanSubscribe?: ViewerCanSubscribeResolver<
      boolean,
      any,
      Context
    > /** Check if the viewer is able to change their subscription status for the repository. */;
    viewerSubscription?: ViewerSubscriptionResolver<
      SubscriptionState | null,
      any,
      Context
    > /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */;
    zipballUrl?: ZipballUrlResolver<
      Uri,
      any,
      Context
    > /** Returns a URL to download a zipball archive for a repository.Note: For private repositories, these links are temporary and expire after five minutes. */;
  }

  export type AbbreviatedOidResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AdditionsResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AuthorResolver<
    R = GitActor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AuthoredByCommitterResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AuthoredDateResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BlameResolver<R = Blame, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context,
    BlameArgs
  >;
  export interface BlameArgs {
    path: string /** The file whose Git blame information you want. */;
  }

  export type ChangedFilesResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommentsResolver<
    R = CommitCommentConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CommentsArgs>;
  export interface CommentsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type CommitResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommitUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommittedDateResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommittedViaWebResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommitterResolver<
    R = GitActor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DeletionsResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HistoryResolver<
    R = CommitHistoryConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, HistoryArgs>;
  export interface HistoryArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    path?:
      | string
      | null /** If non-null, filters history to only show commits touching files under this path. */;
    author?: CommitAuthor | null /** If non-null, filters history to only show commits with matching authorship. */;
    since?: GitTimestamp | null /** Allows specifying a beginning time or date for fetching commits. */;
    until?: GitTimestamp | null /** Allows specifying an ending time or date for fetching commits. */;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MessageResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MessageBodyResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MessageBodyHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MessageHeadlineResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MessageHeadlineHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OidResolver<
    R = GitObjectId,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ParentsResolver<
    R = CommitConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ParentsArgs>;
  export interface ParentsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type PushedDateResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SignatureResolver<
    R = GitSignature | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = Status | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TarballUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TreeResolver<R = Tree, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TreeResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TreeUrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ViewerCanSubscribeResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerSubscriptionResolver<
    R = SubscriptionState | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ZipballUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents an actor in a Git commit (ie. an author or committer). */
export namespace GitActorResolvers {
  export interface Resolvers<Context = any> {
    avatarUrl?: AvatarUrlResolver<
      Uri,
      any,
      Context
    > /** A URL pointing to the author's public avatar. */;
    date?: DateResolver<
      GitTimestamp | null,
      any,
      Context
    > /** The timestamp of the Git action (authoring or committing). */;
    email?: EmailResolver<
      string | null,
      any,
      Context
    > /** The email in the Git commit. */;
    name?: NameResolver<
      string | null,
      any,
      Context
    > /** The name in the Git commit. */;
    user?: UserResolver<
      User | null,
      any,
      Context
    > /** The GitHub user corresponding to the email field. Null if no such user exists. */;
  }

  export type AvatarUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AvatarUrlArgs>;
  export interface AvatarUrlArgs {
    size?: number | null /** The size of the resulting square image. */;
  }

  export type DateResolver<
    R = GitTimestamp | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a Git blame. */
export namespace BlameResolvers {
  export interface Resolvers<Context = any> {
    ranges?: RangesResolver<
      BlameRange[],
      any,
      Context
    > /** The list of ranges from a Git blame. */;
  }

  export type RangesResolver<
    R = BlameRange[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a range of information from a Git blame. */
export namespace BlameRangeResolvers {
  export interface Resolvers<Context = any> {
    age?: AgeResolver<
      number,
      any,
      Context
    > /** Identifies the recency of the change, from 1 (new) to 10 (old). This is calculated as a 2-quantile and determines the length of distance between the median age of all the changes in the file and the recency of the current range's change. */;
    commit?: CommitResolver<
      Commit,
      any,
      Context
    > /** Identifies the line author */;
    endingLine?: EndingLineResolver<
      number,
      any,
      Context
    > /** The ending line for the range */;
    startingLine?: StartingLineResolver<
      number,
      any,
      Context
    > /** The starting line for the range */;
  }

  export type AgeResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type CommitResolver<
    R = Commit,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EndingLineResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StartingLineResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for CommitComment. */
export namespace CommitCommentConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (CommitCommentEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (CommitComment | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (CommitCommentEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (CommitComment | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace CommitCommentEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      CommitComment | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = CommitComment | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a comment on a given Commit. */
export namespace CommitCommentResolvers {
  export interface Resolvers<Context = any> {
    author?: AuthorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who authored the comment. */;
    authorAssociation?: AuthorAssociationResolver<
      CommentAuthorAssociation,
      any,
      Context
    > /** Author's association with the subject of the comment. */;
    body?: BodyResolver<
      string,
      any,
      Context
    > /** Identifies the comment body. */;
    bodyHTML?: BodyHtmlResolver<
      Html,
      any,
      Context
    > /** Identifies the comment body rendered to HTML. */;
    bodyText?: BodyTextResolver<
      string,
      any,
      Context
    > /** The body rendered to text. */;
    commit?: CommitResolver<
      Commit | null,
      any,
      Context
    > /** Identifies the commit associated with the comment, if the commit exists. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    createdViaEmail?: CreatedViaEmailResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was created via an email reply. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    editor?: EditorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who edited the comment. */;
    id?: IdResolver<string, any, Context>;
    includesCreatedEdit?: IncludesCreatedEditResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was edited and includes an edit with the creation data */;
    lastEditedAt?: LastEditedAtResolver<
      DateTime | null,
      any,
      Context
    > /** The moment the editor made the last edit */;
    path?: PathResolver<
      string | null,
      any,
      Context
    > /** Identifies the file path associated with the comment. */;
    position?: PositionResolver<
      number | null,
      any,
      Context
    > /** Identifies the line position associated with the comment. */;
    publishedAt?: PublishedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies when the comment was published at. */;
    reactionGroups?: ReactionGroupsResolver<
      ReactionGroup[] | null,
      any,
      Context
    > /** A list of reactions grouped by content left on the subject. */;
    reactions?: ReactionsResolver<
      ReactionConnection,
      any,
      Context
    > /** A list of Reactions left on the Issue. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The repository associated with this node. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path permalink for this commit comment. */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL permalink for this commit comment. */;
    userContentEdits?: UserContentEditsResolver<
      UserContentEditConnection | null,
      any,
      Context
    > /** A list of edits to this content. */;
    viewerCanDelete?: ViewerCanDeleteResolver<
      boolean,
      any,
      Context
    > /** Check if the current viewer can delete this object. */;
    viewerCanReact?: ViewerCanReactResolver<
      boolean,
      any,
      Context
    > /** Can user react to this subject */;
    viewerCanUpdate?: ViewerCanUpdateResolver<
      boolean,
      any,
      Context
    > /** Check if the current viewer can update this object. */;
    viewerCannotUpdateReasons?: ViewerCannotUpdateReasonsResolver<
      CommentCannotUpdateReason[],
      any,
      Context
    > /** Reasons why the current viewer can not update this comment. */;
    viewerDidAuthor?: ViewerDidAuthorResolver<
      boolean,
      any,
      Context
    > /** Did the viewer author this comment. */;
  }

  export type AuthorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AuthorAssociationResolver<
    R = CommentAuthorAssociation,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type BodyHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyTextResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedViaEmailResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EditorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IncludesCreatedEditResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LastEditedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PositionResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PublishedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReactionGroupsResolver<
    R = ReactionGroup[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReactionsResolver<
    R = ReactionConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReactionsArgs>;
  export interface ReactionsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    content?: ReactionContent | null /** Allows filtering Reactions by emoji. */;
    orderBy?: ReactionOrder | null /** Allows specifying the order in which reactions are returned. */;
  }

  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserContentEditsResolver<
    R = UserContentEditConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserContentEditsArgs>;
  export interface UserContentEditsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type ViewerCanDeleteResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanReactResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanUpdateResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCannotUpdateReasonsResolver<
    R = CommentCannotUpdateReason[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerDidAuthorResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for Commit. */
export namespace CommitHistoryConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<(CommitEdge | null)[] | null, any, Context>;
    nodes?: NodesResolver<
      (Commit | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (CommitEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Commit | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace CommitEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Commit | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for Commit. */
export namespace CommitConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (CommitEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Commit | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (CommitEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Commit | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a commit status. */
export namespace StatusResolvers {
  export interface Resolvers<Context = any> {
    commit?: CommitResolver<
      Commit | null,
      any,
      Context
    > /** The commit this status is attached to. */;
    context?: ContextResolver<
      StatusContext | null,
      any,
      Context
    > /** Looks up an individual status context by context name. */;
    contexts?: ContextsResolver<
      StatusContext[],
      any,
      Context
    > /** The individual status contexts for this commit. */;
    id?: IdResolver<string, any, Context>;
    state?: StateResolver<
      StatusState,
      any,
      Context
    > /** The combined commit status. */;
  }

  export type CommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContextResolver<
    R = StatusContext | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ContextArgs>;
  export interface ContextArgs {
    name: string /** The context name. */;
  }

  export type ContextsResolver<
    R = StatusContext[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type StateResolver<
    R = StatusState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents an individual commit status context */
export namespace StatusContextResolvers {
  export interface Resolvers<Context = any> {
    commit?: CommitResolver<
      Commit | null,
      any,
      Context
    > /** This commit this status context is attached to. */;
    context?: ContextResolver<
      string,
      any,
      Context
    > /** The name of this status context. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    creator?: CreatorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who created this status context. */;
    description?: DescriptionResolver<
      string | null,
      any,
      Context
    > /** The description for this status context. */;
    id?: IdResolver<string, any, Context>;
    state?: StateResolver<
      StatusState,
      any,
      Context
    > /** The state of this status context. */;
    targetUrl?: TargetUrlResolver<
      Uri | null,
      any,
      Context
    > /** The URL for this status context. */;
  }

  export type CommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContextResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type StateResolver<
    R = StatusState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TargetUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a Git tree. */
export namespace TreeResolvers {
  export interface Resolvers<Context = any> {
    abbreviatedOid?: AbbreviatedOidResolver<
      string,
      any,
      Context
    > /** An abbreviated version of the Git object ID */;
    commitResourcePath?: CommitResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this Git object */;
    commitUrl?: CommitUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this Git object */;
    entries?: EntriesResolver<
      TreeEntry[] | null,
      any,
      Context
    > /** A list of tree entries. */;
    id?: IdResolver<string, any, Context>;
    oid?: OidResolver<GitObjectId, any, Context> /** The Git object ID */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The Repository the Git object belongs to */;
  }

  export type AbbreviatedOidResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommitResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommitUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EntriesResolver<
    R = TreeEntry[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type OidResolver<
    R = GitObjectId,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a Git tree entry. */
export namespace TreeEntryResolvers {
  export interface Resolvers<Context = any> {
    mode?: ModeResolver<number, any, Context> /** Entry file mode. */;
    name?: NameResolver<string, any, Context> /** Entry file name. */;
    object?: ObjectResolver<
      GitObject | null,
      any,
      Context
    > /** Entry file object. */;
    oid?: OidResolver<
      GitObjectId,
      any,
      Context
    > /** Entry file Git object ID. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The Repository the tree entry belongs to */;
    type?: TypeResolver<string, any, Context> /** Entry file type. */;
  }

  export type ModeResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ObjectResolver<
    R = GitObject | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OidResolver<
    R = GitObjectId,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Represents a Milestone object on a given repository. */
export namespace MilestoneResolvers {
  export interface Resolvers<Context = any> {
    closed?: ClosedResolver<
      boolean,
      any,
      Context
    > /** `true` if the object is closed (definition of closed may depend on type) */;
    closedAt?: ClosedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies the date and time when the object was closed. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    creator?: CreatorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who created the milestone. */;
    description?: DescriptionResolver<
      string | null,
      any,
      Context
    > /** Identifies the description of the milestone. */;
    dueOn?: DueOnResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies the due date of the milestone. */;
    id?: IdResolver<string, any, Context>;
    issues?: IssuesResolver<
      IssueConnection,
      any,
      Context
    > /** A list of issues associated with the milestone. */;
    number?: NumberResolver<
      number,
      any,
      Context
    > /** Identifies the number of the milestone. */;
    pullRequests?: PullRequestsResolver<
      PullRequestConnection,
      any,
      Context
    > /** A list of pull requests associated with the milestone. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The repository associated with this milestone. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this milestone */;
    state?: StateResolver<
      MilestoneState,
      any,
      Context
    > /** Identifies the state of the milestone. */;
    title?: TitleResolver<
      string,
      any,
      Context
    > /** Identifies the title of the milestone. */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<Uri, any, Context> /** The HTTP URL for this milestone */;
  }

  export type ClosedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClosedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DueOnResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IssuesResolver<
    R = IssueConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, IssuesArgs>;
  export interface IssuesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    orderBy?: IssueOrder | null /** Ordering options for issues returned from the connection. */;
    labels?:
      | string[]
      | null /** A list of label names to filter the pull requests by. */;
    states?:
      | IssueState[]
      | null /** A list of states to filter the issues by. */;
  }

  export type NumberResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestsResolver<
    R = PullRequestConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PullRequestsArgs>;
  export interface PullRequestsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    states?:
      | PullRequestState[]
      | null /** A list of states to filter the pull requests by. */;
    labels?:
      | string[]
      | null /** A list of label names to filter the pull requests by. */;
    headRefName?:
      | string
      | null /** The head ref name to filter the pull requests by. */;
    baseRefName?:
      | string
      | null /** The base ref name to filter the pull requests by. */;
    orderBy?: IssueOrder | null /** Ordering options for pull requests returned from the connection. */;
  }

  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StateResolver<
    R = MilestoneState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** The connection type for ReviewRequest. */
export namespace ReviewRequestConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (ReviewRequestEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (ReviewRequest | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (ReviewRequestEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (ReviewRequest | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ReviewRequestEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      ReviewRequest | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = ReviewRequest | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A request for a user to review a pull request. */
export namespace ReviewRequestResolvers {
  export interface Resolvers<Context = any> {
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** Identifies the pull request associated with this review request. */;
    requestedReviewer?: RequestedReviewerResolver<
      RequestedReviewer | null,
      any,
      Context
    > /** The reviewer that is requested. */;
  }

  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RequestedReviewerResolver<
    R = RequestedReviewer | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A team of users in an organization. */
export namespace TeamResolvers {
  export interface Resolvers<Context = any> {
    ancestors?: AncestorsResolver<
      TeamConnection,
      any,
      Context
    > /** A list of teams that are ancestors of this team. */;
    avatarUrl?: AvatarUrlResolver<
      Uri | null,
      any,
      Context
    > /** A URL pointing to the team's avatar. */;
    childTeams?: ChildTeamsResolver<
      TeamConnection,
      any,
      Context
    > /** List of child teams belonging to this team */;
    combinedSlug?: CombinedSlugResolver<
      string,
      any,
      Context
    > /** The slug corresponding to the organization and team. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    description?: DescriptionResolver<
      string | null,
      any,
      Context
    > /** The description of the team. */;
    editTeamResourcePath?: EditTeamResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for editing this team */;
    editTeamUrl?: EditTeamUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for editing this team */;
    id?: IdResolver<string, any, Context>;
    invitations?: InvitationsResolver<
      OrganizationInvitationConnection | null,
      any,
      Context
    > /** A list of pending invitations for users to this team */;
    members?: MembersResolver<
      TeamMemberConnection,
      any,
      Context
    > /** A list of users who are members of this team. */;
    membersResourcePath?: MembersResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for the team' members */;
    membersUrl?: MembersUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for the team' members */;
    name?: NameResolver<string, any, Context> /** The name of the team. */;
    newTeamResourcePath?: NewTeamResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path creating a new team */;
    newTeamUrl?: NewTeamUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL creating a new team */;
    organization?: OrganizationResolver<
      Organization,
      any,
      Context
    > /** The organization that owns this team. */;
    parentTeam?: ParentTeamResolver<
      Team | null,
      any,
      Context
    > /** The parent team of the team. */;
    privacy?: PrivacyResolver<
      TeamPrivacy,
      any,
      Context
    > /** The level of privacy the team has. */;
    repositories?: RepositoriesResolver<
      TeamRepositoryConnection,
      any,
      Context
    > /** A list of repositories this team has access to. */;
    repositoriesResourcePath?: RepositoriesResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this team's repositories */;
    repositoriesUrl?: RepositoriesUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this team's repositories */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this team */;
    slug?: SlugResolver<
      string,
      any,
      Context
    > /** The slug corresponding to the team. */;
    teamsResourcePath?: TeamsResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this team's teams */;
    teamsUrl?: TeamsUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this team's teams */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<Uri, any, Context> /** The HTTP URL for this team */;
    viewerCanAdminister?: ViewerCanAdministerResolver<
      boolean,
      any,
      Context
    > /** Team is adminable by the viewer. */;
    viewerCanSubscribe?: ViewerCanSubscribeResolver<
      boolean,
      any,
      Context
    > /** Check if the viewer is able to change their subscription status for the repository. */;
    viewerSubscription?: ViewerSubscriptionResolver<
      SubscriptionState | null,
      any,
      Context
    > /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */;
  }

  export type AncestorsResolver<
    R = TeamConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AncestorsArgs>;
  export interface AncestorsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type AvatarUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AvatarUrlArgs>;
  export interface AvatarUrlArgs {
    size?:
      | number
      | null /** The size in pixels of the resulting square image. */;
  }

  export type ChildTeamsResolver<
    R = TeamConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ChildTeamsArgs>;
  export interface ChildTeamsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    orderBy?: TeamOrder | null /** Order for connection */;
    userLogins?: string[] | null /** User logins to filter by */;
    immediateOnly?:
      | boolean
      | null /** Whether to list immediate child teams or all descendant child teams. */;
  }

  export type CombinedSlugResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EditTeamResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EditTeamUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type InvitationsResolver<
    R = OrganizationInvitationConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, InvitationsArgs>;
  export interface InvitationsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type MembersResolver<
    R = TeamMemberConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MembersArgs>;
  export interface MembersArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    query?: string | null /** The search string to look for. */;
    membership?: TeamMembershipType | null /** Filter by membership type */;
    role?: TeamMemberRole | null /** Filter by team member role */;
    orderBy?: TeamMemberOrder | null /** Order for the connection. */;
  }

  export type MembersResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MembersUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NewTeamResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NewTeamUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OrganizationResolver<
    R = Organization,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ParentTeamResolver<
    R = Team | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PrivacyResolver<
    R = TeamPrivacy,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoriesResolver<
    R = TeamRepositoryConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RepositoriesArgs>;
  export interface RepositoriesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    query?: string | null /** The search string to look for. */;
    orderBy?: TeamRepositoryOrder | null /** Order for the connection. */;
  }

  export type RepositoriesResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoriesUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TeamsResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TeamsUrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ViewerCanAdministerResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanSubscribeResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerSubscriptionResolver<
    R = SubscriptionState | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for Team. */
export namespace TeamConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (TeamEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Team | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (TeamEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Team | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace TeamEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Team | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Team | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for OrganizationInvitation. */
export namespace OrganizationInvitationConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (OrganizationInvitationEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (OrganizationInvitation | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (OrganizationInvitationEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (OrganizationInvitation | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace OrganizationInvitationEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      OrganizationInvitation | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = OrganizationInvitation | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An Invitation for a user to an organization. */
export namespace OrganizationInvitationResolvers {
  export interface Resolvers<Context = any> {
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    email?: EmailResolver<
      string | null,
      any,
      Context
    > /** The email address of the user invited to the organization. */;
    id?: IdResolver<string, any, Context>;
    invitationType?: InvitationTypeResolver<
      OrganizationInvitationType,
      any,
      Context
    > /** The type of invitation that was sent (e.g. email, user). */;
    invitee?: InviteeResolver<
      User | null,
      any,
      Context
    > /** The user who was invited to the organization. */;
    inviter?: InviterResolver<
      User,
      any,
      Context
    > /** The user who created the invitation. */;
    organization?: OrganizationResolver<
      Organization,
      any,
      Context
    > /** The organization the invite is for */;
    role?: RoleResolver<
      OrganizationInvitationRole,
      any,
      Context
    > /** The user's pending role in the organization (e.g. member, owner). */;
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type InvitationTypeResolver<
    R = OrganizationInvitationType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InviteeResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InviterResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type OrganizationResolver<
    R = Organization,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RoleResolver<
    R = OrganizationInvitationRole,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for User. */
export namespace TeamMemberConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (TeamMemberEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (User | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (TeamMemberEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (User | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a user who is a member of a team. */
export namespace TeamMemberEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    memberAccessResourcePath?: MemberAccessResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path to the organization's member access page. */;
    memberAccessUrl?: MemberAccessUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL to the organization's member access page. */;
    node?: NodeResolver<User, any, Context>;
    role?: RoleResolver<
      TeamMemberRole,
      any,
      Context
    > /** The role the member has on the team. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MemberAccessResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MemberAccessUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type RoleResolver<
    R = TeamMemberRole,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for Repository. */
export namespace TeamRepositoryConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (TeamRepositoryEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Repository | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (TeamRepositoryEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Repository | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a team repository. */
export namespace TeamRepositoryEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<Repository, any, Context>;
    permission?: PermissionResolver<
      RepositoryPermission,
      any,
      Context
    > /** The permission level the team has on the repository */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PermissionResolver<
    R = RepositoryPermission,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for PullRequestReview. */
export namespace PullRequestReviewConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (PullRequestReviewEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (PullRequestReview | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (PullRequestReviewEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (PullRequestReview | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace PullRequestReviewEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      PullRequestReview | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = PullRequestReview | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A review object for a given pull request. */
export namespace PullRequestReviewResolvers {
  export interface Resolvers<Context = any> {
    author?: AuthorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who authored the comment. */;
    authorAssociation?: AuthorAssociationResolver<
      CommentAuthorAssociation,
      any,
      Context
    > /** Author's association with the subject of the comment. */;
    body?: BodyResolver<
      string,
      any,
      Context
    > /** Identifies the pull request review body. */;
    bodyHTML?: BodyHtmlResolver<
      Html,
      any,
      Context
    > /** The body of this review rendered to HTML. */;
    bodyText?: BodyTextResolver<
      string,
      any,
      Context
    > /** The body of this review rendered as plain text. */;
    comments?: CommentsResolver<
      PullRequestReviewCommentConnection,
      any,
      Context
    > /** A list of review comments for the current pull request review. */;
    commit?: CommitResolver<
      Commit | null,
      any,
      Context
    > /** Identifies the commit associated with this pull request review. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    createdViaEmail?: CreatedViaEmailResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was created via an email reply. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    editor?: EditorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who edited the comment. */;
    id?: IdResolver<string, any, Context>;
    includesCreatedEdit?: IncludesCreatedEditResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was edited and includes an edit with the creation data */;
    lastEditedAt?: LastEditedAtResolver<
      DateTime | null,
      any,
      Context
    > /** The moment the editor made the last edit */;
    onBehalfOf?: OnBehalfOfResolver<
      TeamConnection,
      any,
      Context
    > /** A list of teams that this review was made on behalf of. */;
    publishedAt?: PublishedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies when the comment was published at. */;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** Identifies the pull request associated with this pull request review. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The repository associated with this node. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path permalink for this PullRequestReview. */;
    state?: StateResolver<
      PullRequestReviewState,
      any,
      Context
    > /** Identifies the current state of the pull request review. */;
    submittedAt?: SubmittedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies when the Pull Request Review was submitted */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL permalink for this PullRequestReview. */;
    userContentEdits?: UserContentEditsResolver<
      UserContentEditConnection | null,
      any,
      Context
    > /** A list of edits to this content. */;
    viewerCanDelete?: ViewerCanDeleteResolver<
      boolean,
      any,
      Context
    > /** Check if the current viewer can delete this object. */;
    viewerCanUpdate?: ViewerCanUpdateResolver<
      boolean,
      any,
      Context
    > /** Check if the current viewer can update this object. */;
    viewerCannotUpdateReasons?: ViewerCannotUpdateReasonsResolver<
      CommentCannotUpdateReason[],
      any,
      Context
    > /** Reasons why the current viewer can not update this comment. */;
    viewerDidAuthor?: ViewerDidAuthorResolver<
      boolean,
      any,
      Context
    > /** Did the viewer author this comment. */;
  }

  export type AuthorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AuthorAssociationResolver<
    R = CommentAuthorAssociation,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type BodyHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyTextResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommentsResolver<
    R = PullRequestReviewCommentConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CommentsArgs>;
  export interface CommentsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type CommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedViaEmailResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EditorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IncludesCreatedEditResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LastEditedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OnBehalfOfResolver<
    R = TeamConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, OnBehalfOfArgs>;
  export interface OnBehalfOfArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type PublishedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StateResolver<
    R = PullRequestReviewState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SubmittedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserContentEditsResolver<
    R = UserContentEditConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserContentEditsArgs>;
  export interface UserContentEditsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type ViewerCanDeleteResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanUpdateResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCannotUpdateReasonsResolver<
    R = CommentCannotUpdateReason[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerDidAuthorResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for PullRequestReviewComment. */
export namespace PullRequestReviewCommentConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (PullRequestReviewCommentEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (PullRequestReviewComment | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (PullRequestReviewCommentEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (PullRequestReviewComment | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace PullRequestReviewCommentEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      PullRequestReviewComment | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = PullRequestReviewComment | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A review comment associated with a given repository pull request. */
export namespace PullRequestReviewCommentResolvers {
  export interface Resolvers<Context = any> {
    author?: AuthorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who authored the comment. */;
    authorAssociation?: AuthorAssociationResolver<
      CommentAuthorAssociation,
      any,
      Context
    > /** Author's association with the subject of the comment. */;
    body?: BodyResolver<
      string,
      any,
      Context
    > /** The comment body of this review comment. */;
    bodyHTML?: BodyHtmlResolver<
      Html,
      any,
      Context
    > /** The comment body of this review comment rendered to HTML. */;
    bodyText?: BodyTextResolver<
      string,
      any,
      Context
    > /** The comment body of this review comment rendered as plain text. */;
    commit?: CommitResolver<
      Commit,
      any,
      Context
    > /** Identifies the commit associated with the comment. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies when the comment was created. */;
    createdViaEmail?: CreatedViaEmailResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was created via an email reply. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    diffHunk?: DiffHunkResolver<
      string,
      any,
      Context
    > /** The diff hunk to which the comment applies. */;
    draftedAt?: DraftedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies when the comment was created in a draft state. */;
    editor?: EditorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who edited the comment. */;
    id?: IdResolver<string, any, Context>;
    includesCreatedEdit?: IncludesCreatedEditResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was edited and includes an edit with the creation data */;
    lastEditedAt?: LastEditedAtResolver<
      DateTime | null,
      any,
      Context
    > /** The moment the editor made the last edit */;
    originalCommit?: OriginalCommitResolver<
      Commit | null,
      any,
      Context
    > /** Identifies the original commit associated with the comment. */;
    originalPosition?: OriginalPositionResolver<
      number,
      any,
      Context
    > /** The original line index in the diff to which the comment applies. */;
    outdated?: OutdatedResolver<
      boolean,
      any,
      Context
    > /** Identifies when the comment body is outdated */;
    path?: PathResolver<
      string,
      any,
      Context
    > /** The path to which the comment applies. */;
    position?: PositionResolver<
      number | null,
      any,
      Context
    > /** The line index in the diff to which the comment applies. */;
    publishedAt?: PublishedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies when the comment was published at. */;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** The pull request associated with this review comment. */;
    pullRequestReview?: PullRequestReviewResolver<
      PullRequestReview | null,
      any,
      Context
    > /** The pull request review associated with this review comment. */;
    reactionGroups?: ReactionGroupsResolver<
      ReactionGroup[] | null,
      any,
      Context
    > /** A list of reactions grouped by content left on the subject. */;
    reactions?: ReactionsResolver<
      ReactionConnection,
      any,
      Context
    > /** A list of Reactions left on the Issue. */;
    replyTo?: ReplyToResolver<
      PullRequestReviewComment | null,
      any,
      Context
    > /** The comment this is a reply to. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The repository associated with this node. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path permalink for this review comment. */;
    state?: StateResolver<
      PullRequestReviewCommentState,
      any,
      Context
    > /** Identifies the state of the comment. */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies when the comment was last updated. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL permalink for this review comment. */;
    userContentEdits?: UserContentEditsResolver<
      UserContentEditConnection | null,
      any,
      Context
    > /** A list of edits to this content. */;
    viewerCanDelete?: ViewerCanDeleteResolver<
      boolean,
      any,
      Context
    > /** Check if the current viewer can delete this object. */;
    viewerCanReact?: ViewerCanReactResolver<
      boolean,
      any,
      Context
    > /** Can user react to this subject */;
    viewerCanUpdate?: ViewerCanUpdateResolver<
      boolean,
      any,
      Context
    > /** Check if the current viewer can update this object. */;
    viewerCannotUpdateReasons?: ViewerCannotUpdateReasonsResolver<
      CommentCannotUpdateReason[],
      any,
      Context
    > /** Reasons why the current viewer can not update this comment. */;
    viewerDidAuthor?: ViewerDidAuthorResolver<
      boolean,
      any,
      Context
    > /** Did the viewer author this comment. */;
  }

  export type AuthorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AuthorAssociationResolver<
    R = CommentAuthorAssociation,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type BodyHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyTextResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommitResolver<
    R = Commit,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedViaEmailResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DiffHunkResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DraftedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EditorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IncludesCreatedEditResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LastEditedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OriginalCommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OriginalPositionResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OutdatedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PathResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PositionResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PublishedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestReviewResolver<
    R = PullRequestReview | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReactionGroupsResolver<
    R = ReactionGroup[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReactionsResolver<
    R = ReactionConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReactionsArgs>;
  export interface ReactionsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    content?: ReactionContent | null /** Allows filtering Reactions by emoji. */;
    orderBy?: ReactionOrder | null /** Allows specifying the order in which reactions are returned. */;
  }

  export type ReplyToResolver<
    R = PullRequestReviewComment | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StateResolver<
    R = PullRequestReviewCommentState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserContentEditsResolver<
    R = UserContentEditConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserContentEditsArgs>;
  export interface UserContentEditsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type ViewerCanDeleteResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanReactResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanUpdateResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCannotUpdateReasonsResolver<
    R = CommentCannotUpdateReason[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerDidAuthorResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A suggestion to review a pull request based on a user's commit history and review comments. */
export namespace SuggestedReviewerResolvers {
  export interface Resolvers<Context = any> {
    isAuthor?: IsAuthorResolver<
      boolean,
      any,
      Context
    > /** Is this suggestion based on past commits? */;
    isCommenter?: IsCommenterResolver<
      boolean,
      any,
      Context
    > /** Is this suggestion based on past review comments? */;
    reviewer?: ReviewerResolver<
      User,
      any,
      Context
    > /** Identifies the user suggested to review the pull request. */;
  }

  export type IsAuthorResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsCommenterResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReviewerResolver<
    R = User,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for PullRequestTimelineItem. */
export namespace PullRequestTimelineConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (PullRequestTimelineItemEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (PullRequestTimelineItem | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (PullRequestTimelineItemEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (PullRequestTimelineItem | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace PullRequestTimelineItemEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      PullRequestTimelineItem | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = PullRequestTimelineItem | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A thread of comments on a commit. */
export namespace CommitCommentThreadResolvers {
  export interface Resolvers<Context = any> {
    comments?: CommentsResolver<
      CommitCommentConnection,
      any,
      Context
    > /** The comments that exist in this thread. */;
    commit?: CommitResolver<
      Commit,
      any,
      Context
    > /** The commit the comments were made on. */;
    id?: IdResolver<string, any, Context>;
    path?: PathResolver<
      string | null,
      any,
      Context
    > /** The file the comments were made on. */;
    position?: PositionResolver<
      number | null,
      any,
      Context
    > /** The position in the diff for the commit that the comment was made on. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The repository associated with this node. */;
  }

  export type CommentsResolver<
    R = CommitCommentConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CommentsArgs>;
  export interface CommentsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type CommitResolver<
    R = Commit,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PositionResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A threaded list of comments for a given pull request. */
export namespace PullRequestReviewThreadResolvers {
  export interface Resolvers<Context = any> {
    comments?: CommentsResolver<
      PullRequestReviewCommentConnection,
      any,
      Context
    > /** A list of pull request comments associated with the thread. */;
    id?: IdResolver<string, any, Context>;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** Identifies the pull request associated with this thread. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** Identifies the repository associated with this thread. */;
  }

  export type CommentsResolver<
    R = PullRequestReviewCommentConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CommentsArgs>;
  export interface CommentsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'closed' event on any `Closable`. */
export namespace ClosedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    closable?: ClosableResolver<
      Closable,
      any,
      Context
    > /** Object that was closed. */;
    closer?: CloserResolver<
      Closer | null,
      any,
      Context
    > /** Object which triggered the creation of this event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this closed event. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this closed event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClosableResolver<
    R = Closable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CloserResolver<
    R = Closer | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Represents a 'reopened' event on any `Closable`. */
export namespace ReopenedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    closable?: ClosableResolver<
      Closable,
      any,
      Context
    > /** Object that was reopened. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClosableResolver<
    R = Closable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Represents a 'subscribed' event on a given `Subscribable`. */
export namespace SubscribedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    subscribable?: SubscribableResolver<
      Subscribable,
      any,
      Context
    > /** Object referenced by event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type SubscribableResolver<
    R = Subscribable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents an 'unsubscribed' event on a given `Subscribable`. */
export namespace UnsubscribedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    subscribable?: SubscribableResolver<
      Subscribable,
      any,
      Context
    > /** Object referenced by event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type SubscribableResolver<
    R = Subscribable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'merged' event on a given pull request. */
export namespace MergedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    commit?: CommitResolver<
      Commit | null,
      any,
      Context
    > /** Identifies the commit associated with the `merge` event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    mergeRef?: MergeRefResolver<
      Ref | null,
      any,
      Context
    > /** Identifies the Ref associated with the `merge` event. */;
    mergeRefName?: MergeRefNameResolver<
      string,
      any,
      Context
    > /** Identifies the name of the Ref associated with the `merge` event. */;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** PullRequest referenced by event. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this merged event. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this merged event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MergeRefResolver<
    R = Ref | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MergeRefNameResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Represents a 'referenced' event on a given `ReferencedSubject`. */
export namespace ReferencedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    commit?: CommitResolver<
      Commit | null,
      any,
      Context
    > /** Identifies the commit associated with the 'referenced' event. */;
    commitRepository?: CommitRepositoryResolver<
      Repository,
      any,
      Context
    > /** Identifies the repository associated with the 'referenced' event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    isCrossRepository?: IsCrossRepositoryResolver<
      boolean,
      any,
      Context
    > /** Reference originated in a different repository. */;
    isDirectReference?: IsDirectReferenceResolver<
      boolean,
      any,
      Context
    > /** Checks if the commit message itself references the subject. Can be false in the case of a commit comment reference. */;
    subject?: SubjectResolver<
      ReferencedSubject,
      any,
      Context
    > /** Object referenced by event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommitRepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsCrossRepositoryResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsDirectReferenceResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SubjectResolver<
    R = ReferencedSubject,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a mention made by one issue or pull request to another. */
export namespace CrossReferencedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    isCrossRepository?: IsCrossRepositoryResolver<
      boolean,
      any,
      Context
    > /** Reference originated in a different repository. */;
    referencedAt?: ReferencedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies when the reference was made. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this pull request. */;
    source?: SourceResolver<
      ReferencedSubject,
      any,
      Context
    > /** Issue or pull request that made the reference. */;
    target?: TargetResolver<
      ReferencedSubject,
      any,
      Context
    > /** Issue or pull request to which the reference was made. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this pull request. */;
    willCloseTarget?: WillCloseTargetResolver<
      boolean,
      any,
      Context
    > /** Checks if the target will be closed when the source is merged. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsCrossRepositoryResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReferencedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SourceResolver<
    R = ReferencedSubject,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TargetResolver<
    R = ReferencedSubject,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type WillCloseTargetResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents an 'assigned' event on any assignable object. */
export namespace AssignedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    assignable?: AssignableResolver<
      Assignable,
      any,
      Context
    > /** Identifies the assignable associated with the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    user?: UserResolver<
      User | null,
      any,
      Context
    > /** Identifies the user who was assigned. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AssignableResolver<
    R = Assignable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents an 'unassigned' event on any assignable object. */
export namespace UnassignedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    assignable?: AssignableResolver<
      Assignable,
      any,
      Context
    > /** Identifies the assignable associated with the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    user?: UserResolver<
      User | null,
      any,
      Context
    > /** Identifies the subject (user) who was unassigned. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AssignableResolver<
    R = Assignable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'labeled' event on a given issue or pull request. */
export namespace LabeledEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    label?: LabelResolver<
      Label,
      any,
      Context
    > /** Identifies the label associated with the 'labeled' event. */;
    labelable?: LabelableResolver<
      Labelable,
      any,
      Context
    > /** Identifies the `Labelable` associated with the event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LabelResolver<R = Label, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LabelableResolver<
    R = Labelable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents an 'unlabeled' event on a given issue or pull request. */
export namespace UnlabeledEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    label?: LabelResolver<
      Label,
      any,
      Context
    > /** Identifies the label associated with the 'unlabeled' event. */;
    labelable?: LabelableResolver<
      Labelable,
      any,
      Context
    > /** Identifies the `Labelable` associated with the event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LabelResolver<R = Label, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LabelableResolver<
    R = Labelable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'milestoned' event on a given issue or pull request. */
export namespace MilestonedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    milestoneTitle?: MilestoneTitleResolver<
      string,
      any,
      Context
    > /** Identifies the milestone title associated with the 'milestoned' event. */;
    subject?: SubjectResolver<
      MilestoneItem,
      any,
      Context
    > /** Object referenced by event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MilestoneTitleResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SubjectResolver<
    R = MilestoneItem,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'demilestoned' event on a given issue or pull request. */
export namespace DemilestonedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    milestoneTitle?: MilestoneTitleResolver<
      string,
      any,
      Context
    > /** Identifies the milestone title associated with the 'demilestoned' event. */;
    subject?: SubjectResolver<
      MilestoneItem,
      any,
      Context
    > /** Object referenced by event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MilestoneTitleResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SubjectResolver<
    R = MilestoneItem,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'renamed' event on a given issue or pull request */
export namespace RenamedTitleEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    currentTitle?: CurrentTitleResolver<
      string,
      any,
      Context
    > /** Identifies the current title of the issue or pull request. */;
    id?: IdResolver<string, any, Context>;
    previousTitle?: PreviousTitleResolver<
      string,
      any,
      Context
    > /** Identifies the previous title of the issue or pull request. */;
    subject?: SubjectResolver<
      RenamedTitleSubject,
      any,
      Context
    > /** Subject that was renamed. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CurrentTitleResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PreviousTitleResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SubjectResolver<
    R = RenamedTitleSubject,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'locked' event on a given issue or pull request. */
export namespace LockedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    lockReason?: LockReasonResolver<
      LockReason | null,
      any,
      Context
    > /** Reason that the conversation was locked (optional). */;
    lockable?: LockableResolver<
      Lockable,
      any,
      Context
    > /** Object that was locked. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LockReasonResolver<
    R = LockReason | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LockableResolver<
    R = Lockable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents an 'unlocked' event on a given issue or pull request. */
export namespace UnlockedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    lockable?: LockableResolver<
      Lockable,
      any,
      Context
    > /** Object that was unlocked. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LockableResolver<
    R = Lockable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'deployed' event on a given pull request. */
export namespace DeployedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    deployment?: DeploymentResolver<
      Deployment,
      any,
      Context
    > /** The deployment associated with the 'deployed' event. */;
    id?: IdResolver<string, any, Context>;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** PullRequest referenced by event. */;
    ref?: RefResolver<
      Ref | null,
      any,
      Context
    > /** The ref associated with the 'deployed' event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DeploymentResolver<
    R = Deployment,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RefResolver<
    R = Ref | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents triggered deployment instance. */
export namespace DeploymentResolvers {
  export interface Resolvers<Context = any> {
    commit?: CommitResolver<
      Commit | null,
      any,
      Context
    > /** Identifies the commit sha of the deployment. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    creator?: CreatorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who triggered the deployment. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    description?: DescriptionResolver<
      string | null,
      any,
      Context
    > /** The deployment description. */;
    environment?: EnvironmentResolver<
      string | null,
      any,
      Context
    > /** The environment to which this deployment was made. */;
    id?: IdResolver<string, any, Context>;
    latestStatus?: LatestStatusResolver<
      DeploymentStatus | null,
      any,
      Context
    > /** The latest status of this deployment. */;
    payload?: PayloadResolver<
      string | null,
      any,
      Context
    > /** Extra information that a deployment system might need. */;
    ref?: RefResolver<
      Ref | null,
      any,
      Context
    > /** Identifies the Ref of the deployment, if the deployment was created by ref. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** Identifies the repository associated with the deployment. */;
    state?: StateResolver<
      DeploymentState | null,
      any,
      Context
    > /** The current state of the deployment. */;
    statuses?: StatusesResolver<
      DeploymentStatusConnection | null,
      any,
      Context
    > /** A list of statuses associated with the deployment. */;
    task?: TaskResolver<
      string | null,
      any,
      Context
    > /** The deployment task. */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
  }

  export type CommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EnvironmentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LatestStatusResolver<
    R = DeploymentStatus | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PayloadResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RefResolver<
    R = Ref | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StateResolver<
    R = DeploymentState | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StatusesResolver<
    R = DeploymentStatusConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StatusesArgs>;
  export interface StatusesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type TaskResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Describes the status of a given deployment attempt. */
export namespace DeploymentStatusResolvers {
  export interface Resolvers<Context = any> {
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    creator?: CreatorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who triggered the deployment. */;
    deployment?: DeploymentResolver<
      Deployment,
      any,
      Context
    > /** Identifies the deployment associated with status. */;
    description?: DescriptionResolver<
      string | null,
      any,
      Context
    > /** Identifies the description of the deployment. */;
    environmentUrl?: EnvironmentUrlResolver<
      Uri | null,
      any,
      Context
    > /** Identifies the environment URL of the deployment. */;
    id?: IdResolver<string, any, Context>;
    logUrl?: LogUrlResolver<
      Uri | null,
      any,
      Context
    > /** Identifies the log URL of the deployment. */;
    state?: StateResolver<
      DeploymentStatusState,
      any,
      Context
    > /** Identifies the current state of the deployment. */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DeploymentResolver<
    R = Deployment,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EnvironmentUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LogUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StateResolver<
    R = DeploymentStatusState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for DeploymentStatus. */
export namespace DeploymentStatusConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (DeploymentStatusEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (DeploymentStatus | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (DeploymentStatusEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (DeploymentStatus | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DeploymentStatusEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      DeploymentStatus | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = DeploymentStatus | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'deployment_environment_changed' event on a given pull request. */
export namespace DeploymentEnvironmentChangedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    deploymentStatus?: DeploymentStatusResolver<
      DeploymentStatus,
      any,
      Context
    > /** The deployment status that updated the deployment environment. */;
    id?: IdResolver<string, any, Context>;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** PullRequest referenced by event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DeploymentStatusResolver<
    R = DeploymentStatus,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'head_ref_deleted' event on a given pull request. */
export namespace HeadRefDeletedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    headRef?: HeadRefResolver<
      Ref | null,
      any,
      Context
    > /** Identifies the Ref associated with the `head_ref_deleted` event. */;
    headRefName?: HeadRefNameResolver<
      string,
      any,
      Context
    > /** Identifies the name of the Ref associated with the `head_ref_deleted` event. */;
    id?: IdResolver<string, any, Context>;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** PullRequest referenced by event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HeadRefResolver<
    R = Ref | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HeadRefNameResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'head_ref_restored' event on a given pull request. */
export namespace HeadRefRestoredEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** PullRequest referenced by event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'head_ref_force_pushed' event on a given pull request. */
export namespace HeadRefForcePushedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    afterCommit?: AfterCommitResolver<
      Commit | null,
      any,
      Context
    > /** Identifies the after commit SHA for the 'head_ref_force_pushed' event. */;
    beforeCommit?: BeforeCommitResolver<
      Commit | null,
      any,
      Context
    > /** Identifies the before commit SHA for the 'head_ref_force_pushed' event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** PullRequest referenced by event. */;
    ref?: RefResolver<
      Ref | null,
      any,
      Context
    > /** Identifies the fully qualified ref name for the 'head_ref_force_pushed' event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AfterCommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BeforeCommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RefResolver<
    R = Ref | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'base_ref_force_pushed' event on a given pull request. */
export namespace BaseRefForcePushedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    afterCommit?: AfterCommitResolver<
      Commit | null,
      any,
      Context
    > /** Identifies the after commit SHA for the 'base_ref_force_pushed' event. */;
    beforeCommit?: BeforeCommitResolver<
      Commit | null,
      any,
      Context
    > /** Identifies the before commit SHA for the 'base_ref_force_pushed' event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** PullRequest referenced by event. */;
    ref?: RefResolver<
      Ref | null,
      any,
      Context
    > /** Identifies the fully qualified ref name for the 'base_ref_force_pushed' event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AfterCommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BeforeCommitResolver<
    R = Commit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RefResolver<
    R = Ref | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents an 'review_requested' event on a given pull request. */
export namespace ReviewRequestedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** PullRequest referenced by event. */;
    requestedReviewer?: RequestedReviewerResolver<
      RequestedReviewer | null,
      any,
      Context
    > /** Identifies the reviewer whose review was requested. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RequestedReviewerResolver<
    R = RequestedReviewer | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents an 'review_request_removed' event on a given pull request. */
export namespace ReviewRequestRemovedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** PullRequest referenced by event. */;
    requestedReviewer?: RequestedReviewerResolver<
      RequestedReviewer | null,
      any,
      Context
    > /** Identifies the reviewer whose review request was removed. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RequestedReviewerResolver<
    R = RequestedReviewer | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'review_dismissed' event on a given issue or pull request. */
export namespace ReviewDismissedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
    message?: MessageResolver<
      string,
      any,
      Context
    > /** Identifies the message associated with the 'review_dismissed' event. */;
    messageHtml?: MessageHtmlResolver<
      Html,
      any,
      Context
    > /** The message associated with the event, rendered to HTML. */;
    previousReviewState?: PreviousReviewStateResolver<
      PullRequestReviewState,
      any,
      Context
    > /** Identifies the previous state of the review with the 'review_dismissed' event. */;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** PullRequest referenced by event. */;
    pullRequestCommit?: PullRequestCommitResolver<
      PullRequestCommit | null,
      any,
      Context
    > /** Identifies the commit which caused the review to become stale. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this review dismissed event. */;
    review?: ReviewResolver<
      PullRequestReview | null,
      any,
      Context
    > /** Identifies the review associated with the 'review_dismissed' event. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this review dismissed event. */;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MessageResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MessageHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousReviewStateResolver<
    R = PullRequestReviewState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestCommitResolver<
    R = PullRequestCommit | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReviewResolver<
    R = PullRequestReview | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** The connection type for Ref. */
export namespace RefConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (RefEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Ref | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (RefEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Ref | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace RefEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Ref | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Ref | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for PushAllowance. */
export namespace PushAllowanceConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (PushAllowanceEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (PushAllowance | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (PushAllowanceEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (PushAllowance | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace PushAllowanceEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      PushAllowance | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = PushAllowance | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A team or user who has the ability to push to a protected branch. */
export namespace PushAllowanceResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      PushAllowanceActor | null,
      any,
      Context
    > /** The actor that can push. */;
    branchProtectionRule?: BranchProtectionRuleResolver<
      BranchProtectionRule | null,
      any,
      Context
    > /** Identifies the branch protection rule associated with the allowed user or team. */;
    id?: IdResolver<string, any, Context>;
    protectedBranch?: ProtectedBranchResolver<
      ProtectedBranch,
      any,
      Context
    > /** Identifies the protected branch associated with the allowed user or team. */;
  }

  export type ActorResolver<
    R = PushAllowanceActor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BranchProtectionRuleResolver<
    R = BranchProtectionRule | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ProtectedBranchResolver<
    R = ProtectedBranch,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A repository protected branch. */
export namespace ProtectedBranchResolvers {
  export interface Resolvers<Context = any> {
    creator?: CreatorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who created this protected branch. */;
    hasDismissableStaleReviews?: HasDismissableStaleReviewsResolver<
      boolean,
      any,
      Context
    > /** Will new commits pushed to this branch dismiss pull request review approvals. */;
    hasRequiredReviews?: HasRequiredReviewsResolver<
      boolean,
      any,
      Context
    > /** Are reviews required to update this branch. */;
    hasRequiredStatusChecks?: HasRequiredStatusChecksResolver<
      boolean,
      any,
      Context
    > /** Are status checks required to update this branch. */;
    hasRestrictedPushes?: HasRestrictedPushesResolver<
      boolean,
      any,
      Context
    > /** Is pushing to this branch restricted. */;
    hasRestrictedReviewDismissals?: HasRestrictedReviewDismissalsResolver<
      boolean,
      any,
      Context
    > /** Is dismissal of pull request reviews restricted. */;
    hasStrictRequiredStatusChecks?: HasStrictRequiredStatusChecksResolver<
      boolean,
      any,
      Context
    > /** Are branches required to be up to date before merging. */;
    id?: IdResolver<string, any, Context>;
    isAdminEnforced?: IsAdminEnforcedResolver<
      boolean,
      any,
      Context
    > /** Can admins overwrite branch protection. */;
    name?: NameResolver<
      string,
      any,
      Context
    > /** The name of the protected branch rule. */;
    pushAllowances?: PushAllowancesResolver<
      PushAllowanceConnection,
      any,
      Context
    > /** A list push allowances for this protected branch. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The repository associated with this protected branch. */;
    requiredStatusCheckContexts?: RequiredStatusCheckContextsResolver<
      (string | null)[] | null,
      any,
      Context
    > /** List of required status check contexts that must pass for commits to be accepted to this branch. */;
    reviewDismissalAllowances?: ReviewDismissalAllowancesResolver<
      ReviewDismissalAllowanceConnection,
      any,
      Context
    > /** A list review dismissal allowances for this protected branch. */;
  }

  export type CreatorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasDismissableStaleReviewsResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasRequiredReviewsResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasRequiredStatusChecksResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasRestrictedPushesResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasRestrictedReviewDismissalsResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasStrictRequiredStatusChecksResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsAdminEnforcedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PushAllowancesResolver<
    R = PushAllowanceConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PushAllowancesArgs>;
  export interface PushAllowancesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RequiredStatusCheckContextsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReviewDismissalAllowancesResolver<
    R = ReviewDismissalAllowanceConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReviewDismissalAllowancesArgs>;
  export interface ReviewDismissalAllowancesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }
}
/** The connection type for ReviewDismissalAllowance. */
export namespace ReviewDismissalAllowanceConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (ReviewDismissalAllowanceEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (ReviewDismissalAllowance | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (ReviewDismissalAllowanceEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (ReviewDismissalAllowance | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ReviewDismissalAllowanceEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      ReviewDismissalAllowance | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = ReviewDismissalAllowance | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A team or user who has the ability to dismiss a review on a protected branch. */
export namespace ReviewDismissalAllowanceResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      ReviewDismissalAllowanceActor | null,
      any,
      Context
    > /** The actor that can dismiss. */;
    branchProtectionRule?: BranchProtectionRuleResolver<
      BranchProtectionRule | null,
      any,
      Context
    > /** Identifies the branch protection rule associated with the allowed user or team. */;
    id?: IdResolver<string, any, Context>;
    protectedBranch?: ProtectedBranchResolver<
      ProtectedBranch,
      any,
      Context
    > /** Identifies the protected branch associated with the allowed user or team. */;
  }

  export type ActorResolver<
    R = ReviewDismissalAllowanceActor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BranchProtectionRuleResolver<
    R = BranchProtectionRule | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ProtectedBranchResolver<
    R = ProtectedBranch,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for User. */
export namespace RepositoryCollaboratorConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (RepositoryCollaboratorEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (User | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (RepositoryCollaboratorEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (User | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a user who is a collaborator of a repository. */
export namespace RepositoryCollaboratorEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<User, any, Context>;
    permission?: PermissionResolver<
      RepositoryPermission,
      any,
      Context
    > /** The permission the user has on the repository. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PermissionResolver<
    R = RepositoryPermission,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for DeployKey. */
export namespace DeployKeyConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (DeployKeyEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (DeployKey | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (DeployKeyEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (DeployKey | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DeployKeyEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      DeployKey | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = DeployKey | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A repository deploy key. */
export namespace DeployKeyResolvers {
  export interface Resolvers<Context = any> {
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    id?: IdResolver<string, any, Context>;
    key?: KeyResolver<string, any, Context> /** The deploy key. */;
    readOnly?: ReadOnlyResolver<
      boolean,
      any,
      Context
    > /** Whether or not the deploy key is read only. */;
    title?: TitleResolver<string, any, Context> /** The deploy key title. */;
    verified?: VerifiedResolver<
      boolean,
      any,
      Context
    > /** Whether or not the deploy key has been verified. */;
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type KeyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ReadOnlyResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type VerifiedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for Deployment. */
export namespace DeploymentConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (DeploymentEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Deployment | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (DeploymentEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Deployment | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DeploymentEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Deployment | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Deployment | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A list of languages associated with the parent. */
export namespace LanguageConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (LanguageEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Language | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
    totalSize?: TotalSizeResolver<
      number,
      any,
      Context
    > /** The total size in bytes of files written in that language. */;
  }

  export type EdgesResolver<
    R = (LanguageEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Language | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalSizeResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents the language of a repository. */
export namespace LanguageEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<string, any, Context>;
    node?: NodeResolver<Language, any, Context>;
    size?: SizeResolver<
      number,
      any,
      Context
    > /** The number of bytes of code written in the language. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Language,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SizeResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Represents a given language found in repositories. */
export namespace LanguageResolvers {
  export interface Resolvers<Context = any> {
    color?: ColorResolver<
      string | null,
      any,
      Context
    > /** The color defined for the current language. */;
    id?: IdResolver<string, any, Context>;
    name?: NameResolver<
      string,
      any,
      Context
    > /** The name of the current language. */;
  }

  export type ColorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
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
}
/** The connection type for Milestone. */
export namespace MilestoneConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (MilestoneEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Milestone | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (MilestoneEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Milestone | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace MilestoneEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Milestone | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Milestone | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A list of projects associated with the owner. */
export namespace ProjectConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (ProjectEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Project | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (ProjectEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Project | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ProjectEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Project | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Project | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for ProtectedBranch. */
export namespace ProtectedBranchConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (ProtectedBranchEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (ProtectedBranch | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (ProtectedBranchEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (ProtectedBranch | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ProtectedBranchEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      ProtectedBranch | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = ProtectedBranch | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A release contains the content for a release. */
export namespace ReleaseResolvers {
  export interface Resolvers<Context = any> {
    author?: AuthorResolver<
      User | null,
      any,
      Context
    > /** The author of the release */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    description?: DescriptionResolver<
      string | null,
      any,
      Context
    > /** Identifies the description of the release. */;
    id?: IdResolver<string, any, Context>;
    isDraft?: IsDraftResolver<
      boolean,
      any,
      Context
    > /** Whether or not the release is a draft */;
    isPrerelease?: IsPrereleaseResolver<
      boolean,
      any,
      Context
    > /** Whether or not the release is a prerelease */;
    name?: NameResolver<
      string | null,
      any,
      Context
    > /** Identifies the title of the release. */;
    publishedAt?: PublishedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies the date and time when the release was created. */;
    releaseAssets?: ReleaseAssetsResolver<
      ReleaseAssetConnection,
      any,
      Context
    > /** List of releases assets which are dependent on this release. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this issue */;
    tag?: TagResolver<
      Ref | null,
      any,
      Context
    > /** The Git tag the release points to */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<Uri, any, Context> /** The HTTP URL for this issue */;
  }

  export type AuthorResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsDraftResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsPrereleaseResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PublishedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReleaseAssetsResolver<
    R = ReleaseAssetConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReleaseAssetsArgs>;
  export interface ReleaseAssetsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    name?: string | null /** A list of names to filter the assets by. */;
  }

  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TagResolver<
    R = Ref | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** The connection type for ReleaseAsset. */
export namespace ReleaseAssetConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (ReleaseAssetEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (ReleaseAsset | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (ReleaseAssetEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (ReleaseAsset | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ReleaseAssetEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      ReleaseAsset | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = ReleaseAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A release asset contains the content for a release asset. */
export namespace ReleaseAssetResolvers {
  export interface Resolvers<Context = any> {
    contentType?: ContentTypeResolver<
      string,
      any,
      Context
    > /** The asset's content-type */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    downloadCount?: DownloadCountResolver<
      number,
      any,
      Context
    > /** The number of times this asset was downloaded */;
    downloadUrl?: DownloadUrlResolver<
      Uri,
      any,
      Context
    > /** Identifies the URL where you can download the release asset via the browser. */;
    id?: IdResolver<string, any, Context>;
    name?: NameResolver<
      string,
      any,
      Context
    > /** Identifies the title of the release asset. */;
    release?: ReleaseResolver<
      Release | null,
      any,
      Context
    > /** Release that the asset is associated with */;
    size?: SizeResolver<
      number,
      any,
      Context
    > /** The size (in bytes) of the asset */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    uploadedBy?: UploadedByResolver<
      User,
      any,
      Context
    > /** The user that performed the upload */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** Identifies the URL of the release asset. */;
  }

  export type ContentTypeResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DownloadCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DownloadUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
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
  export type ReleaseResolver<
    R = Release | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SizeResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UploadedByResolver<
    R = User,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** The connection type for Release. */
export namespace ReleaseConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (ReleaseEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Release | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (ReleaseEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Release | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ReleaseEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Release | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Release | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for RepositoryTopic. */
export namespace RepositoryTopicConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (RepositoryTopicEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (RepositoryTopic | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (RepositoryTopicEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (RepositoryTopic | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace RepositoryTopicEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      RepositoryTopic | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = RepositoryTopic | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A repository-topic connects a repository to a topic. */
export namespace RepositoryTopicResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this repository-topic. */;
    topic?: TopicResolver<Topic, any, Context> /** The topic. */;
    url?: UrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this repository-topic. */;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TopicResolver<R = Topic, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** A topic aggregates entities that are related to a subject. */
export namespace TopicResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    name?: NameResolver<string, any, Context> /** The topic's name. */;
    relatedTopics?: RelatedTopicsResolver<
      Topic[],
      any,
      Context
    > /** A list of related topics, including aliases of this topic, sorted with the most relevantfirst. */;
    stargazers?: StargazersResolver<
      StargazerConnection,
      any,
      Context
    > /** A list of users who have starred this starrable. */;
    viewerHasStarred?: ViewerHasStarredResolver<
      boolean,
      any,
      Context
    > /** Returns a boolean indicating whether the viewing user has starred this starrable. */;
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
  export type RelatedTopicsResolver<
    R = Topic[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StargazersResolver<
    R = StargazerConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StargazersArgs>;
  export interface StargazersArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    orderBy?: StarOrder | null /** Order for connection */;
  }

  export type ViewerHasStarredResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for User. */
export namespace FollowerConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (UserEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (User | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (UserEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (User | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for User. */
export namespace FollowingConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (UserEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (User | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (UserEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (User | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A Gist. */
export namespace GistResolvers {
  export interface Resolvers<Context = any> {
    comments?: CommentsResolver<
      GistCommentConnection,
      any,
      Context
    > /** A list of comments associated with the gist */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    description?: DescriptionResolver<
      string | null,
      any,
      Context
    > /** The gist description. */;
    id?: IdResolver<string, any, Context>;
    isPublic?: IsPublicResolver<
      boolean,
      any,
      Context
    > /** Whether the gist is public or not. */;
    name?: NameResolver<string, any, Context> /** The gist name. */;
    owner?: OwnerResolver<
      RepositoryOwner | null,
      any,
      Context
    > /** The gist owner. */;
    pushedAt?: PushedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies when the gist was last pushed to. */;
    stargazers?: StargazersResolver<
      StargazerConnection,
      any,
      Context
    > /** A list of users who have starred this starrable. */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    viewerHasStarred?: ViewerHasStarredResolver<
      boolean,
      any,
      Context
    > /** Returns a boolean indicating whether the viewing user has starred this starrable. */;
  }

  export type CommentsResolver<
    R = GistCommentConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CommentsArgs>;
  export interface CommentsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsPublicResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type OwnerResolver<
    R = RepositoryOwner | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PushedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StargazersResolver<
    R = StargazerConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StargazersArgs>;
  export interface StargazersArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
    orderBy?: StarOrder | null /** Order for connection */;
  }

  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerHasStarredResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for GistComment. */
export namespace GistCommentConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (GistCommentEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (GistComment | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (GistCommentEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (GistComment | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace GistCommentEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      GistComment | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = GistComment | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a comment on an Gist. */
export namespace GistCommentResolvers {
  export interface Resolvers<Context = any> {
    author?: AuthorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who authored the comment. */;
    authorAssociation?: AuthorAssociationResolver<
      CommentAuthorAssociation,
      any,
      Context
    > /** Author's association with the gist. */;
    body?: BodyResolver<
      string,
      any,
      Context
    > /** Identifies the comment body. */;
    bodyHTML?: BodyHtmlResolver<
      Html,
      any,
      Context
    > /** The comment body rendered to HTML. */;
    bodyText?: BodyTextResolver<
      string,
      any,
      Context
    > /** The body rendered to text. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    createdViaEmail?: CreatedViaEmailResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was created via an email reply. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    editor?: EditorResolver<
      Actor | null,
      any,
      Context
    > /** The actor who edited the comment. */;
    gist?: GistResolver<Gist, any, Context> /** The associated gist. */;
    id?: IdResolver<string, any, Context>;
    includesCreatedEdit?: IncludesCreatedEditResolver<
      boolean,
      any,
      Context
    > /** Check if this comment was edited and includes an edit with the creation data */;
    lastEditedAt?: LastEditedAtResolver<
      DateTime | null,
      any,
      Context
    > /** The moment the editor made the last edit */;
    publishedAt?: PublishedAtResolver<
      DateTime | null,
      any,
      Context
    > /** Identifies when the comment was published at. */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    userContentEdits?: UserContentEditsResolver<
      UserContentEditConnection | null,
      any,
      Context
    > /** A list of edits to this content. */;
    viewerCanDelete?: ViewerCanDeleteResolver<
      boolean,
      any,
      Context
    > /** Check if the current viewer can delete this object. */;
    viewerCanUpdate?: ViewerCanUpdateResolver<
      boolean,
      any,
      Context
    > /** Check if the current viewer can update this object. */;
    viewerCannotUpdateReasons?: ViewerCannotUpdateReasonsResolver<
      CommentCannotUpdateReason[],
      any,
      Context
    > /** Reasons why the current viewer can not update this comment. */;
    viewerDidAuthor?: ViewerDidAuthorResolver<
      boolean,
      any,
      Context
    > /** Did the viewer author this comment. */;
  }

  export type AuthorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AuthorAssociationResolver<
    R = CommentAuthorAssociation,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type BodyHtmlResolver<
    R = Html,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyTextResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedViaEmailResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EditorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type GistResolver<R = Gist, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IncludesCreatedEditResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LastEditedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PublishedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UserContentEditsResolver<
    R = UserContentEditConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserContentEditsArgs>;
  export interface UserContentEditsArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type ViewerCanDeleteResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCanUpdateResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerCannotUpdateReasonsResolver<
    R = CommentCannotUpdateReason[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewerDidAuthorResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for Gist. */
export namespace GistConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (GistEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Gist | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (GistEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Gist | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace GistEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Gist | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Gist | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for Organization. */
export namespace OrganizationConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (OrganizationEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Organization | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (OrganizationEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Organization | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace OrganizationEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Organization | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Organization | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for PublicKey. */
export namespace PublicKeyConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (PublicKeyEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (PublicKey | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (PublicKeyEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (PublicKey | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace PublicKeyEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      PublicKey | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = PublicKey | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A user's public key. */
export namespace PublicKeyResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    key?: KeyResolver<string, any, Context> /** The public key string */;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type KeyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** The connection type for Repository. */
export namespace StarredRepositoryConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (StarredRepositoryEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Repository | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (StarredRepositoryEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Repository | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a starred repository. */
export namespace StarredRepositoryEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<Repository, any, Context>;
    starredAt?: StarredAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies when the item was starred. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StarredAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for IssueTimelineItem. */
export namespace IssueTimelineConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (IssueTimelineItemEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (IssueTimelineItem | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (IssueTimelineItemEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (IssueTimelineItem | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace IssueTimelineItemEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      IssueTimelineItem | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = IssueTimelineItem | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An Identity Provider configured to provision SAML and SCIM identities for Organizations */
export namespace OrganizationIdentityProviderResolvers {
  export interface Resolvers<Context = any> {
    digestMethod?: DigestMethodResolver<
      Uri | null,
      any,
      Context
    > /** The digest algorithm used to sign SAML requests for the Identity Provider. */;
    externalIdentities?: ExternalIdentitiesResolver<
      ExternalIdentityConnection,
      any,
      Context
    > /** External Identities provisioned by this Identity Provider */;
    id?: IdResolver<string, any, Context>;
    idpCertificate?: IdpCertificateResolver<
      X509Certificate | null,
      any,
      Context
    > /** The x509 certificate used by the Identity Provder to sign assertions and responses. */;
    issuer?: IssuerResolver<
      string | null,
      any,
      Context
    > /** The Issuer Entity ID for the SAML Identity Provider */;
    organization?: OrganizationResolver<
      Organization | null,
      any,
      Context
    > /** Organization this Identity Provider belongs to */;
    signatureMethod?: SignatureMethodResolver<
      Uri | null,
      any,
      Context
    > /** The signature algorithm used to sign SAML requests for the Identity Provider. */;
    ssoUrl?: SsoUrlResolver<
      Uri | null,
      any,
      Context
    > /** The URL endpoint for the Identity Provider's SAML SSO. */;
  }

  export type DigestMethodResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ExternalIdentitiesResolver<
    R = ExternalIdentityConnection,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ExternalIdentitiesArgs>;
  export interface ExternalIdentitiesArgs {
    first?: number | null /** Returns the first _n_ elements from the list. */;
    after?:
      | string
      | null /** Returns the elements in the list that come after the specified cursor. */;
    last?: number | null /** Returns the last _n_ elements from the list. */;
    before?:
      | string
      | null /** Returns the elements in the list that come before the specified cursor. */;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IdpCertificateResolver<
    R = X509Certificate | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IssuerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OrganizationResolver<
    R = Organization | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SignatureMethodResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SsoUrlResolver<
    R = Uri | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for ExternalIdentity. */
export namespace ExternalIdentityConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (ExternalIdentityEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (ExternalIdentity | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (ExternalIdentityEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (ExternalIdentity | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ExternalIdentityEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      ExternalIdentity | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = ExternalIdentity | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An external identity provisioned by SAML SSO or SCIM. */
export namespace ExternalIdentityResolvers {
  export interface Resolvers<Context = any> {
    guid?: GuidResolver<string, any, Context> /** The GUID for this identity */;
    id?: IdResolver<string, any, Context>;
    organizationInvitation?: OrganizationInvitationResolver<
      OrganizationInvitation | null,
      any,
      Context
    > /** Organization invitation for this SCIM-provisioned external identity */;
    samlIdentity?: SamlIdentityResolver<
      ExternalIdentitySamlAttributes | null,
      any,
      Context
    > /** SAML Identity attributes */;
    scimIdentity?: ScimIdentityResolver<
      ExternalIdentityScimAttributes | null,
      any,
      Context
    > /** SCIM Identity attributes */;
    user?: UserResolver<
      User | null,
      any,
      Context
    > /** User linked to this external identity. Will be NULL if this identity has not been claimed by an organization member. */;
  }

  export type GuidResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type OrganizationInvitationResolver<
    R = OrganizationInvitation | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SamlIdentityResolver<
    R = ExternalIdentitySamlAttributes | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ScimIdentityResolver<
    R = ExternalIdentityScimAttributes | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** SAML attributes for the External Identity */
export namespace ExternalIdentitySamlAttributesResolvers {
  export interface Resolvers<Context = any> {
    nameId?: NameIdResolver<
      string | null,
      any,
      Context
    > /** The NameID of the SAML identity */;
  }

  export type NameIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** SCIM attributes for the External Identity */
export namespace ExternalIdentityScimAttributesResolvers {
  export interface Resolvers<Context = any> {
    username?: UsernameResolver<
      string | null,
      any,
      Context
    > /** The userName of the SCIM identity */;
  }

  export type UsernameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents the client's rate limit. */
export namespace RateLimitResolvers {
  export interface Resolvers<Context = any> {
    cost?: CostResolver<
      number,
      any,
      Context
    > /** The point cost for the current query counting against the rate limit. */;
    limit?: LimitResolver<
      number,
      any,
      Context
    > /** The maximum number of points the client is permitted to consume in a 60 minute window. */;
    nodeCount?: NodeCountResolver<
      number,
      any,
      Context
    > /** The maximum number of nodes this query may return */;
    remaining?: RemainingResolver<
      number,
      any,
      Context
    > /** The number of points remaining in the current rate limit window. */;
    resetAt?: ResetAtResolver<
      DateTime,
      any,
      Context
    > /** The time at which the current rate limit window resets in UTC epoch seconds. */;
  }

  export type CostResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NodeCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RemainingResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResetAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A list of results that matched against a search query. */
export namespace SearchResultItemConnectionResolvers {
  export interface Resolvers<Context = any> {
    codeCount?: CodeCountResolver<
      number,
      any,
      Context
    > /** The number of pieces of code that matched the search query. */;
    edges?: EdgesResolver<
      (SearchResultItemEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    issueCount?: IssueCountResolver<
      number,
      any,
      Context
    > /** The number of issues that matched the search query. */;
    nodes?: NodesResolver<
      (SearchResultItem | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    repositoryCount?: RepositoryCountResolver<
      number,
      any,
      Context
    > /** The number of repositories that matched the search query. */;
    userCount?: UserCountResolver<
      number,
      any,
      Context
    > /** The number of users that matched the search query. */;
    wikiCount?: WikiCountResolver<
      number,
      any,
      Context
    > /** The number of wiki pages that matched the search query. */;
  }

  export type CodeCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (SearchResultItemEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IssueCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (SearchResultItem | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UserCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WikiCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace SearchResultItemEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      SearchResultItem | null,
      any,
      Context
    > /** The item at the end of the edge. */;
    textMatches?: TextMatchesResolver<
      (TextMatch | null)[] | null,
      any,
      Context
    > /** Text matches on the result found. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = SearchResultItem | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TextMatchesResolver<
    R = (TextMatch | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A text match within a search result. */
export namespace TextMatchResolvers {
  export interface Resolvers<Context = any> {
    fragment?: FragmentResolver<
      string,
      any,
      Context
    > /** The specific text fragment within the property matched on. */;
    highlights?: HighlightsResolver<
      TextMatchHighlight[],
      any,
      Context
    > /** Highlights within the matched fragment. */;
    property?: PropertyResolver<
      string,
      any,
      Context
    > /** The property matched on. */;
  }

  export type FragmentResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HighlightsResolver<
    R = TextMatchHighlight[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PropertyResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a single highlight in a search result match. */
export namespace TextMatchHighlightResolvers {
  export interface Resolvers<Context = any> {
    beginIndice?: BeginIndiceResolver<
      number,
      any,
      Context
    > /** The indice in the fragment where the matched text begins. */;
    endIndice?: EndIndiceResolver<
      number,
      any,
      Context
    > /** The indice in the fragment where the matched text ends. */;
    text?: TextResolver<string, any, Context> /** The text matched. */;
  }

  export type BeginIndiceResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EndIndiceResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TextResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** The root query for implementing GraphQL mutations. */
export namespace MutationResolvers {
  export interface Resolvers<Context = any> {
    acceptTopicSuggestion?: AcceptTopicSuggestionResolver<
      AcceptTopicSuggestionPayload | null,
      any,
      Context
    > /** Applies a suggested topic to the repository. */;
    addComment?: AddCommentResolver<
      AddCommentPayload | null,
      any,
      Context
    > /** Adds a comment to an Issue or Pull Request. */;
    addProjectCard?: AddProjectCardResolver<
      AddProjectCardPayload | null,
      any,
      Context
    > /** Adds a card to a ProjectColumn. Either `contentId` or `note` must be provided but **not** both. */;
    addProjectColumn?: AddProjectColumnResolver<
      AddProjectColumnPayload | null,
      any,
      Context
    > /** Adds a column to a Project. */;
    addPullRequestReview?: AddPullRequestReviewResolver<
      AddPullRequestReviewPayload | null,
      any,
      Context
    > /** Adds a review to a Pull Request. */;
    addPullRequestReviewComment?: AddPullRequestReviewCommentResolver<
      AddPullRequestReviewCommentPayload | null,
      any,
      Context
    > /** Adds a comment to a review. */;
    addReaction?: AddReactionResolver<
      AddReactionPayload | null,
      any,
      Context
    > /** Adds a reaction to a subject. */;
    addStar?: AddStarResolver<
      AddStarPayload | null,
      any,
      Context
    > /** Adds a star to a Starrable. */;
    createBranchProtectionRule?: CreateBranchProtectionRuleResolver<
      CreateBranchProtectionRulePayload | null,
      any,
      Context
    > /** Create a new branch protection rule */;
    createProject?: CreateProjectResolver<
      CreateProjectPayload | null,
      any,
      Context
    > /** Creates a new project. */;
    declineTopicSuggestion?: DeclineTopicSuggestionResolver<
      DeclineTopicSuggestionPayload | null,
      any,
      Context
    > /** Rejects a suggested topic for the repository. */;
    deleteBranchProtectionRule?: DeleteBranchProtectionRuleResolver<
      DeleteBranchProtectionRulePayload | null,
      any,
      Context
    > /** Delete a branch protection rule */;
    deleteProject?: DeleteProjectResolver<
      DeleteProjectPayload | null,
      any,
      Context
    > /** Deletes a project. */;
    deleteProjectCard?: DeleteProjectCardResolver<
      DeleteProjectCardPayload | null,
      any,
      Context
    > /** Deletes a project card. */;
    deleteProjectColumn?: DeleteProjectColumnResolver<
      DeleteProjectColumnPayload | null,
      any,
      Context
    > /** Deletes a project column. */;
    deletePullRequestReview?: DeletePullRequestReviewResolver<
      DeletePullRequestReviewPayload | null,
      any,
      Context
    > /** Deletes a pull request review. */;
    dismissPullRequestReview?: DismissPullRequestReviewResolver<
      DismissPullRequestReviewPayload | null,
      any,
      Context
    > /** Dismisses an approved or rejected pull request review. */;
    lockLockable?: LockLockableResolver<
      LockLockablePayload | null,
      any,
      Context
    > /** Lock a lockable object */;
    moveProjectCard?: MoveProjectCardResolver<
      MoveProjectCardPayload | null,
      any,
      Context
    > /** Moves a project card to another place. */;
    moveProjectColumn?: MoveProjectColumnResolver<
      MoveProjectColumnPayload | null,
      any,
      Context
    > /** Moves a project column to another place. */;
    removeOutsideCollaborator?: RemoveOutsideCollaboratorResolver<
      RemoveOutsideCollaboratorPayload | null,
      any,
      Context
    > /** Removes outside collaborator from all repositories in an organization. */;
    removeReaction?: RemoveReactionResolver<
      RemoveReactionPayload | null,
      any,
      Context
    > /** Removes a reaction from a subject. */;
    removeStar?: RemoveStarResolver<
      RemoveStarPayload | null,
      any,
      Context
    > /** Removes a star from a Starrable. */;
    requestReviews?: RequestReviewsResolver<
      RequestReviewsPayload | null,
      any,
      Context
    > /** Set review requests on a pull request. */;
    submitPullRequestReview?: SubmitPullRequestReviewResolver<
      SubmitPullRequestReviewPayload | null,
      any,
      Context
    > /** Submits a pending pull request review. */;
    unlockLockable?: UnlockLockableResolver<
      UnlockLockablePayload | null,
      any,
      Context
    > /** Unlock a lockable object */;
    updateBranchProtectionRule?: UpdateBranchProtectionRuleResolver<
      UpdateBranchProtectionRulePayload | null,
      any,
      Context
    > /** Create a new branch protection rule */;
    updateProject?: UpdateProjectResolver<
      UpdateProjectPayload | null,
      any,
      Context
    > /** Updates an existing project. */;
    updateProjectCard?: UpdateProjectCardResolver<
      UpdateProjectCardPayload | null,
      any,
      Context
    > /** Updates an existing project card. */;
    updateProjectColumn?: UpdateProjectColumnResolver<
      UpdateProjectColumnPayload | null,
      any,
      Context
    > /** Updates an existing project column. */;
    updatePullRequestReview?: UpdatePullRequestReviewResolver<
      UpdatePullRequestReviewPayload | null,
      any,
      Context
    > /** Updates the body of a pull request review. */;
    updatePullRequestReviewComment?: UpdatePullRequestReviewCommentResolver<
      UpdatePullRequestReviewCommentPayload | null,
      any,
      Context
    > /** Updates a pull request review comment. */;
    updateSubscription?: UpdateSubscriptionResolver<
      UpdateSubscriptionPayload | null,
      any,
      Context
    > /** Updates the state for subscribable subjects. */;
    updateTopics?: UpdateTopicsResolver<
      UpdateTopicsPayload | null,
      any,
      Context
    > /** Replaces the repository's topics with the given topics. */;
  }

  export type AcceptTopicSuggestionResolver<
    R = AcceptTopicSuggestionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AcceptTopicSuggestionArgs>;
  export interface AcceptTopicSuggestionArgs {
    input: AcceptTopicSuggestionInput;
  }

  export type AddCommentResolver<
    R = AddCommentPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddCommentArgs>;
  export interface AddCommentArgs {
    input: AddCommentInput;
  }

  export type AddProjectCardResolver<
    R = AddProjectCardPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddProjectCardArgs>;
  export interface AddProjectCardArgs {
    input: AddProjectCardInput;
  }

  export type AddProjectColumnResolver<
    R = AddProjectColumnPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddProjectColumnArgs>;
  export interface AddProjectColumnArgs {
    input: AddProjectColumnInput;
  }

  export type AddPullRequestReviewResolver<
    R = AddPullRequestReviewPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddPullRequestReviewArgs>;
  export interface AddPullRequestReviewArgs {
    input: AddPullRequestReviewInput;
  }

  export type AddPullRequestReviewCommentResolver<
    R = AddPullRequestReviewCommentPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddPullRequestReviewCommentArgs>;
  export interface AddPullRequestReviewCommentArgs {
    input: AddPullRequestReviewCommentInput;
  }

  export type AddReactionResolver<
    R = AddReactionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddReactionArgs>;
  export interface AddReactionArgs {
    input: AddReactionInput;
  }

  export type AddStarResolver<
    R = AddStarPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddStarArgs>;
  export interface AddStarArgs {
    input: AddStarInput;
  }

  export type CreateBranchProtectionRuleResolver<
    R = CreateBranchProtectionRulePayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateBranchProtectionRuleArgs>;
  export interface CreateBranchProtectionRuleArgs {
    input: CreateBranchProtectionRuleInput;
  }

  export type CreateProjectResolver<
    R = CreateProjectPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateProjectArgs>;
  export interface CreateProjectArgs {
    input: CreateProjectInput;
  }

  export type DeclineTopicSuggestionResolver<
    R = DeclineTopicSuggestionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeclineTopicSuggestionArgs>;
  export interface DeclineTopicSuggestionArgs {
    input: DeclineTopicSuggestionInput;
  }

  export type DeleteBranchProtectionRuleResolver<
    R = DeleteBranchProtectionRulePayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeleteBranchProtectionRuleArgs>;
  export interface DeleteBranchProtectionRuleArgs {
    input: DeleteBranchProtectionRuleInput;
  }

  export type DeleteProjectResolver<
    R = DeleteProjectPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeleteProjectArgs>;
  export interface DeleteProjectArgs {
    input: DeleteProjectInput;
  }

  export type DeleteProjectCardResolver<
    R = DeleteProjectCardPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeleteProjectCardArgs>;
  export interface DeleteProjectCardArgs {
    input: DeleteProjectCardInput;
  }

  export type DeleteProjectColumnResolver<
    R = DeleteProjectColumnPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeleteProjectColumnArgs>;
  export interface DeleteProjectColumnArgs {
    input: DeleteProjectColumnInput;
  }

  export type DeletePullRequestReviewResolver<
    R = DeletePullRequestReviewPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeletePullRequestReviewArgs>;
  export interface DeletePullRequestReviewArgs {
    input: DeletePullRequestReviewInput;
  }

  export type DismissPullRequestReviewResolver<
    R = DismissPullRequestReviewPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DismissPullRequestReviewArgs>;
  export interface DismissPullRequestReviewArgs {
    input: DismissPullRequestReviewInput;
  }

  export type LockLockableResolver<
    R = LockLockablePayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, LockLockableArgs>;
  export interface LockLockableArgs {
    input: LockLockableInput;
  }

  export type MoveProjectCardResolver<
    R = MoveProjectCardPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MoveProjectCardArgs>;
  export interface MoveProjectCardArgs {
    input: MoveProjectCardInput;
  }

  export type MoveProjectColumnResolver<
    R = MoveProjectColumnPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MoveProjectColumnArgs>;
  export interface MoveProjectColumnArgs {
    input: MoveProjectColumnInput;
  }

  export type RemoveOutsideCollaboratorResolver<
    R = RemoveOutsideCollaboratorPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveOutsideCollaboratorArgs>;
  export interface RemoveOutsideCollaboratorArgs {
    input: RemoveOutsideCollaboratorInput;
  }

  export type RemoveReactionResolver<
    R = RemoveReactionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveReactionArgs>;
  export interface RemoveReactionArgs {
    input: RemoveReactionInput;
  }

  export type RemoveStarResolver<
    R = RemoveStarPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveStarArgs>;
  export interface RemoveStarArgs {
    input: RemoveStarInput;
  }

  export type RequestReviewsResolver<
    R = RequestReviewsPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RequestReviewsArgs>;
  export interface RequestReviewsArgs {
    input: RequestReviewsInput;
  }

  export type SubmitPullRequestReviewResolver<
    R = SubmitPullRequestReviewPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SubmitPullRequestReviewArgs>;
  export interface SubmitPullRequestReviewArgs {
    input: SubmitPullRequestReviewInput;
  }

  export type UnlockLockableResolver<
    R = UnlockLockablePayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UnlockLockableArgs>;
  export interface UnlockLockableArgs {
    input: UnlockLockableInput;
  }

  export type UpdateBranchProtectionRuleResolver<
    R = UpdateBranchProtectionRulePayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateBranchProtectionRuleArgs>;
  export interface UpdateBranchProtectionRuleArgs {
    input: UpdateBranchProtectionRuleInput;
  }

  export type UpdateProjectResolver<
    R = UpdateProjectPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateProjectArgs>;
  export interface UpdateProjectArgs {
    input: UpdateProjectInput;
  }

  export type UpdateProjectCardResolver<
    R = UpdateProjectCardPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateProjectCardArgs>;
  export interface UpdateProjectCardArgs {
    input: UpdateProjectCardInput;
  }

  export type UpdateProjectColumnResolver<
    R = UpdateProjectColumnPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateProjectColumnArgs>;
  export interface UpdateProjectColumnArgs {
    input: UpdateProjectColumnInput;
  }

  export type UpdatePullRequestReviewResolver<
    R = UpdatePullRequestReviewPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdatePullRequestReviewArgs>;
  export interface UpdatePullRequestReviewArgs {
    input: UpdatePullRequestReviewInput;
  }

  export type UpdatePullRequestReviewCommentResolver<
    R = UpdatePullRequestReviewCommentPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdatePullRequestReviewCommentArgs>;
  export interface UpdatePullRequestReviewCommentArgs {
    input: UpdatePullRequestReviewCommentInput;
  }

  export type UpdateSubscriptionResolver<
    R = UpdateSubscriptionPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateSubscriptionArgs>;
  export interface UpdateSubscriptionArgs {
    input: UpdateSubscriptionInput;
  }

  export type UpdateTopicsResolver<
    R = UpdateTopicsPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateTopicsArgs>;
  export interface UpdateTopicsArgs {
    input: UpdateTopicsInput;
  }
}
/** Autogenerated return type of AcceptTopicSuggestion */
export namespace AcceptTopicSuggestionPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    topic?: TopicResolver<
      Topic,
      any,
      Context
    > /** The accepted topic.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `topic` will change from `Topic!` to `Topic`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TopicResolver<R = Topic, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Autogenerated return type of AddComment */
export namespace AddCommentPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    commentEdge?: CommentEdgeResolver<
      IssueCommentEdge,
      any,
      Context
    > /** The edge from the subject's comment connection.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `commentEdge` will change from `IssueCommentEdge!` to `IssueCommentEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
    subject?: SubjectResolver<
      Node,
      any,
      Context
    > /** The subject**Upcoming Change on 2019-01-01 UTC****Description:** Type for `subject` will change from `Node!` to `Node`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
    timelineEdge?: TimelineEdgeResolver<
      IssueTimelineItemEdge,
      any,
      Context
    > /** The edge from the subject's timeline connection.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `timelineEdge` will change from `IssueTimelineItemEdge!` to `IssueTimelineItemEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommentEdgeResolver<
    R = IssueCommentEdge,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SubjectResolver<R = Node, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TimelineEdgeResolver<
    R = IssueTimelineItemEdge,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of AddProjectCard */
export namespace AddProjectCardPayloadResolvers {
  export interface Resolvers<Context = any> {
    cardEdge?: CardEdgeResolver<
      ProjectCardEdge,
      any,
      Context
    > /** The edge from the ProjectColumn's card connection.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `cardEdge` will change from `ProjectCardEdge!` to `ProjectCardEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    projectColumn?: ProjectColumnResolver<
      Project,
      any,
      Context
    > /** The ProjectColumn**Upcoming Change on 2019-01-01 UTC****Description:** Type for `projectColumn` will change from `Project!` to `Project`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type CardEdgeResolver<
    R = ProjectCardEdge,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProjectColumnResolver<
    R = Project,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of AddProjectColumn */
export namespace AddProjectColumnPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    columnEdge?: ColumnEdgeResolver<
      ProjectColumnEdge,
      any,
      Context
    > /** The edge from the project's column connection.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `columnEdge` will change from `ProjectColumnEdge!` to `ProjectColumnEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
    project?: ProjectResolver<
      Project,
      any,
      Context
    > /** The project**Upcoming Change on 2019-01-01 UTC****Description:** Type for `project` will change from `Project!` to `Project`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ColumnEdgeResolver<
    R = ProjectColumnEdge,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProjectResolver<
    R = Project,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of AddPullRequestReview */
export namespace AddPullRequestReviewPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    pullRequestReview?: PullRequestReviewResolver<
      PullRequestReview,
      any,
      Context
    > /** The newly created pull request review.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequestReview` will change from `PullRequestReview!` to `PullRequestReview`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
    reviewEdge?: ReviewEdgeResolver<
      PullRequestReviewEdge,
      any,
      Context
    > /** The edge from the pull request's review connection.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `reviewEdge` will change from `PullRequestReviewEdge!` to `PullRequestReviewEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestReviewResolver<
    R = PullRequestReview,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReviewEdgeResolver<
    R = PullRequestReviewEdge,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of AddPullRequestReviewComment */
export namespace AddPullRequestReviewCommentPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    comment?: CommentResolver<
      PullRequestReviewComment,
      any,
      Context
    > /** The newly created comment.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `comment` will change from `PullRequestReviewComment!` to `PullRequestReviewComment`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
    commentEdge?: CommentEdgeResolver<
      PullRequestReviewCommentEdge,
      any,
      Context
    > /** The edge from the review's comment connection.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `commentEdge` will change from `PullRequestReviewCommentEdge!` to `PullRequestReviewCommentEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommentResolver<
    R = PullRequestReviewComment,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommentEdgeResolver<
    R = PullRequestReviewCommentEdge,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of AddReaction */
export namespace AddReactionPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    reaction?: ReactionResolver<
      Reaction,
      any,
      Context
    > /** The reaction object.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `reaction` will change from `Reaction!` to `Reaction`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
    subject?: SubjectResolver<
      Reactable,
      any,
      Context
    > /** The reactable subject.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `subject` will change from `Reactable!` to `Reactable`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReactionResolver<
    R = Reaction,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SubjectResolver<
    R = Reactable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of AddStar */
export namespace AddStarPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    starrable?: StarrableResolver<
      Starrable,
      any,
      Context
    > /** The starrable.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `starrable` will change from `Starrable!` to `Starrable`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StarrableResolver<
    R = Starrable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of CreateBranchProtectionRule */
export namespace CreateBranchProtectionRulePayloadResolvers {
  export interface Resolvers<Context = any> {
    branchProtectionRule?: BranchProtectionRuleResolver<
      BranchProtectionRule | null,
      any,
      Context
    > /** The newly created BranchProtectionRule. */;
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
  }

  export type BranchProtectionRuleResolver<
    R = BranchProtectionRule | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of CreateProject */
export namespace CreateProjectPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    project?: ProjectResolver<
      Project,
      any,
      Context
    > /** The new project.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `project` will change from `Project!` to `Project`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProjectResolver<
    R = Project,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of DeclineTopicSuggestion */
export namespace DeclineTopicSuggestionPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    topic?: TopicResolver<
      Topic,
      any,
      Context
    > /** The declined topic.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `topic` will change from `Topic!` to `Topic`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TopicResolver<R = Topic, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Autogenerated return type of DeleteBranchProtectionRule */
export namespace DeleteBranchProtectionRulePayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of DeleteProject */
export namespace DeleteProjectPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    owner?: OwnerResolver<
      ProjectOwner,
      any,
      Context
    > /** The repository or organization the project was removed from.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `owner` will change from `ProjectOwner!` to `ProjectOwner`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = ProjectOwner,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of DeleteProjectCard */
export namespace DeleteProjectCardPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    column?: ColumnResolver<
      ProjectColumn,
      any,
      Context
    > /** The column the deleted card was in.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `column` will change from `ProjectColumn!` to `ProjectColumn`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
    deletedCardId?: DeletedCardIdResolver<
      string,
      any,
      Context
    > /** The deleted card ID.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `deletedCardId` will change from `ID!` to `ID`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ColumnResolver<
    R = ProjectColumn,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DeletedCardIdResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of DeleteProjectColumn */
export namespace DeleteProjectColumnPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    deletedColumnId?: DeletedColumnIdResolver<
      string,
      any,
      Context
    > /** The deleted column ID.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `deletedColumnId` will change from `ID!` to `ID`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
    project?: ProjectResolver<
      Project,
      any,
      Context
    > /** The project the deleted column was in.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `project` will change from `Project!` to `Project`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DeletedColumnIdResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProjectResolver<
    R = Project,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of DeletePullRequestReview */
export namespace DeletePullRequestReviewPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    pullRequestReview?: PullRequestReviewResolver<
      PullRequestReview,
      any,
      Context
    > /** The deleted pull request review.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequestReview` will change from `PullRequestReview!` to `PullRequestReview`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestReviewResolver<
    R = PullRequestReview,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of DismissPullRequestReview */
export namespace DismissPullRequestReviewPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    pullRequestReview?: PullRequestReviewResolver<
      PullRequestReview,
      any,
      Context
    > /** The dismissed pull request review.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequestReview` will change from `PullRequestReview!` to `PullRequestReview`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestReviewResolver<
    R = PullRequestReview,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of LockLockable */
export namespace LockLockablePayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    lockedRecord?: LockedRecordResolver<
      Lockable | null,
      any,
      Context
    > /** The item that was locked. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LockedRecordResolver<
    R = Lockable | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of MoveProjectCard */
export namespace MoveProjectCardPayloadResolvers {
  export interface Resolvers<Context = any> {
    cardEdge?: CardEdgeResolver<
      ProjectCardEdge,
      any,
      Context
    > /** The new edge of the moved card.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `cardEdge` will change from `ProjectCardEdge!` to `ProjectCardEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
  }

  export type CardEdgeResolver<
    R = ProjectCardEdge,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of MoveProjectColumn */
export namespace MoveProjectColumnPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    columnEdge?: ColumnEdgeResolver<
      ProjectColumnEdge,
      any,
      Context
    > /** The new edge of the moved column.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `columnEdge` will change from `ProjectColumnEdge!` to `ProjectColumnEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ColumnEdgeResolver<
    R = ProjectColumnEdge,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of RemoveOutsideCollaborator */
export namespace RemoveOutsideCollaboratorPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    removedUser?: RemovedUserResolver<
      User,
      any,
      Context
    > /** The user that was removed as an outside collaborator.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `removedUser` will change from `User!` to `User`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RemovedUserResolver<
    R = User,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of RemoveReaction */
export namespace RemoveReactionPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    reaction?: ReactionResolver<
      Reaction,
      any,
      Context
    > /** The reaction object.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `reaction` will change from `Reaction!` to `Reaction`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
    subject?: SubjectResolver<
      Reactable,
      any,
      Context
    > /** The reactable subject.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `subject` will change from `Reactable!` to `Reactable`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReactionResolver<
    R = Reaction,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SubjectResolver<
    R = Reactable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of RemoveStar */
export namespace RemoveStarPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    starrable?: StarrableResolver<
      Starrable,
      any,
      Context
    > /** The starrable.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `starrable` will change from `Starrable!` to `Starrable`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StarrableResolver<
    R = Starrable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of RequestReviews */
export namespace RequestReviewsPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    pullRequest?: PullRequestResolver<
      PullRequest,
      any,
      Context
    > /** The pull request that is getting requests.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequest` will change from `PullRequest!` to `PullRequest`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
    requestedReviewersEdge?: RequestedReviewersEdgeResolver<
      UserEdge,
      any,
      Context
    > /** The edge from the pull request to the requested reviewers.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `requestedReviewersEdge` will change from `UserEdge!` to `UserEdge`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestResolver<
    R = PullRequest,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RequestedReviewersEdgeResolver<
    R = UserEdge,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of SubmitPullRequestReview */
export namespace SubmitPullRequestReviewPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    pullRequestReview?: PullRequestReviewResolver<
      PullRequestReview,
      any,
      Context
    > /** The submitted pull request review.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequestReview` will change from `PullRequestReview!` to `PullRequestReview`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestReviewResolver<
    R = PullRequestReview,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of UnlockLockable */
export namespace UnlockLockablePayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    unlockedRecord?: UnlockedRecordResolver<
      Lockable | null,
      any,
      Context
    > /** The item that was unlocked. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UnlockedRecordResolver<
    R = Lockable | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of UpdateBranchProtectionRule */
export namespace UpdateBranchProtectionRulePayloadResolvers {
  export interface Resolvers<Context = any> {
    branchProtectionRule?: BranchProtectionRuleResolver<
      BranchProtectionRule | null,
      any,
      Context
    > /** The newly created BranchProtectionRule. */;
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
  }

  export type BranchProtectionRuleResolver<
    R = BranchProtectionRule | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of UpdateProject */
export namespace UpdateProjectPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    project?: ProjectResolver<
      Project,
      any,
      Context
    > /** The updated project.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `project` will change from `Project!` to `Project`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProjectResolver<
    R = Project,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of UpdateProjectCard */
export namespace UpdateProjectCardPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    projectCard?: ProjectCardResolver<
      ProjectCard,
      any,
      Context
    > /** The updated ProjectCard.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `projectCard` will change from `ProjectCard!` to `ProjectCard`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProjectCardResolver<
    R = ProjectCard,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of UpdateProjectColumn */
export namespace UpdateProjectColumnPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    projectColumn?: ProjectColumnResolver<
      ProjectColumn,
      any,
      Context
    > /** The updated project column.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `projectColumn` will change from `ProjectColumn!` to `ProjectColumn`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProjectColumnResolver<
    R = ProjectColumn,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of UpdatePullRequestReview */
export namespace UpdatePullRequestReviewPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    pullRequestReview?: PullRequestReviewResolver<
      PullRequestReview,
      any,
      Context
    > /** The updated pull request review.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequestReview` will change from `PullRequestReview!` to `PullRequestReview`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestReviewResolver<
    R = PullRequestReview,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of UpdatePullRequestReviewComment */
export namespace UpdatePullRequestReviewCommentPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    pullRequestReviewComment?: PullRequestReviewCommentResolver<
      PullRequestReviewComment,
      any,
      Context
    > /** The updated comment.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `pullRequestReviewComment` will change from `PullRequestReviewComment!` to `PullRequestReviewComment`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PullRequestReviewCommentResolver<
    R = PullRequestReviewComment,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of UpdateSubscription */
export namespace UpdateSubscriptionPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    subscribable?: SubscribableResolver<
      Subscribable,
      any,
      Context
    > /** The input subscribable entity.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `subscribable` will change from `Subscribable!` to `Subscribable`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SubscribableResolver<
    R = Subscribable,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Autogenerated return type of UpdateTopics */
export namespace UpdateTopicsPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** A unique identifier for the client performing the mutation. */;
    invalidTopicNames?: InvalidTopicNamesResolver<
      string[] | null,
      any,
      Context
    > /** Names of the provided topics that are not valid. */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The updated repository.**Upcoming Change on 2019-01-01 UTC****Description:** Type for `repository` will change from `Repository!` to `Repository`.**Reason:** In preparation for an upcoming change to the way we report mutation errors, non-nullable payload fields are becoming nullable. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InvalidTopicNamesResolver<
    R = string[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace RepositoryInvitationEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      RepositoryInvitation | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = RepositoryInvitation | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An invitation for a user to be added to a repository. */
export namespace RepositoryInvitationResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    invitee?: InviteeResolver<
      User,
      any,
      Context
    > /** The user who received the invitation. */;
    inviter?: InviterResolver<
      User,
      any,
      Context
    > /** The user who created the invitation. */;
    permission?: PermissionResolver<
      RepositoryPermission,
      any,
      Context
    > /** The permission granted on this repository by this invitation. */;
    repository?: RepositoryResolver<
      RepositoryInfo | null,
      any,
      Context
    > /** The Repository the user is invited to. */;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type InviteeResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type InviterResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PermissionResolver<
    R = RepositoryPermission,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryResolver<
    R = RepositoryInfo | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A special type of user which takes actions on behalf of GitHub Apps. */
export namespace BotResolvers {
  export interface Resolvers<Context = any> {
    avatarUrl?: AvatarUrlResolver<
      Uri,
      any,
      Context
    > /** A URL pointing to the GitHub App's public avatar. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
    login?: LoginResolver<
      string,
      any,
      Context
    > /** The username of the actor. */;
    resourcePath?: ResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this bot */;
    updatedAt?: UpdatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was last updated. */;
    url?: UrlResolver<Uri, any, Context> /** The HTTP URL for this bot */;
  }

  export type AvatarUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AvatarUrlArgs>;
  export interface AvatarUrlArgs {
    size?: number | null /** The size of the resulting square image. */;
  }

  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LoginResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<R = Uri, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Represents a Git blob. */
export namespace BlobResolvers {
  export interface Resolvers<Context = any> {
    abbreviatedOid?: AbbreviatedOidResolver<
      string,
      any,
      Context
    > /** An abbreviated version of the Git object ID */;
    byteSize?: ByteSizeResolver<
      number,
      any,
      Context
    > /** Byte size of Blob object */;
    commitResourcePath?: CommitResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this Git object */;
    commitUrl?: CommitUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this Git object */;
    id?: IdResolver<string, any, Context>;
    isBinary?: IsBinaryResolver<
      boolean,
      any,
      Context
    > /** Indicates whether the Blob is binary or text */;
    isTruncated?: IsTruncatedResolver<
      boolean,
      any,
      Context
    > /** Indicates whether the contents is truncated */;
    oid?: OidResolver<GitObjectId, any, Context> /** The Git object ID */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The Repository the Git object belongs to */;
    text?: TextResolver<
      string | null,
      any,
      Context
    > /** UTF8 text data or null if the Blob is binary */;
  }

  export type AbbreviatedOidResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ByteSizeResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommitResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommitUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsBinaryResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsTruncatedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OidResolver<
    R = GitObjectId,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TextResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace PullRequestTimelineItemsEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      PullRequestTimelineItems | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = PullRequestTimelineItems | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a 'base_ref_changed' event on a given issue or pull request. */
export namespace BaseRefChangedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Represents a 'added_to_project' event on a given issue or pull request. */
export namespace AddedToProjectEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Represents a 'comment_deleted' event on a given issue or pull request. */
export namespace CommentDeletedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
export namespace ConvertedNoteToIssueEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Represents a 'mentioned' event on a given issue or pull request. */
export namespace MentionedEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
export namespace MovedColumnsInProjectEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** Represents a 'removed_from_project' event on a given issue or pull request. */
export namespace RemovedFromProjectEventResolvers {
  export interface Resolvers<Context = any> {
    actor?: ActorResolver<
      Actor | null,
      any,
      Context
    > /** Identifies the actor who performed the event. */;
    createdAt?: CreatedAtResolver<
      DateTime,
      any,
      Context
    > /** Identifies the date and time when the object was created. */;
    databaseId?: DatabaseIdResolver<
      number | null,
      any,
      Context
    > /** Identifies the primary key from the database. */;
    id?: IdResolver<string, any, Context>;
  }

  export type ActorResolver<
    R = Actor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DatabaseIdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** An edge in a connection. */
export namespace IssueTimelineItemsEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      IssueTimelineItems | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = IssueTimelineItems | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** The connection type for Topic. */
export namespace TopicConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<
      (TopicEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    nodes?: NodesResolver<
      (Topic | null)[] | null,
      any,
      Context
    > /** A list of nodes. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number,
      any,
      Context
    > /** Identifies the total count of items in the connection. */;
  }

  export type EdgesResolver<
    R = (TopicEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = (Topic | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace TopicEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Topic | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Topic | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace AppEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      string,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      App | null,
      any,
      Context
    > /** The item at the end of the edge. */;
  }

  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = App | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a GPG signature on a Commit or Tag. */
export namespace GpgSignatureResolvers {
  export interface Resolvers<Context = any> {
    email?: EmailResolver<
      string,
      any,
      Context
    > /** Email used to sign this object. */;
    isValid?: IsValidResolver<
      boolean,
      any,
      Context
    > /** True if the signature is valid and verified by GitHub. */;
    keyId?: KeyIdResolver<
      string | null,
      any,
      Context
    > /** Hex-encoded ID of the key that signed this object. */;
    payload?: PayloadResolver<
      string,
      any,
      Context
    > /** Payload for GPG signing object. Raw ODB object without the signature header. */;
    signature?: SignatureResolver<
      string,
      any,
      Context
    > /** ASCII-armored signature header from object. */;
    signer?: SignerResolver<
      User | null,
      any,
      Context
    > /** GitHub user corresponding to the email signing this commit. */;
    state?: StateResolver<
      GitSignatureState,
      any,
      Context
    > /** The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid. */;
    wasSignedByGitHub?: WasSignedByGitHubResolver<
      boolean,
      any,
      Context
    > /** True if the signature was made with GitHub's signing key. */;
  }

  export type EmailResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsValidResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type KeyIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PayloadResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SignatureResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SignerResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StateResolver<
    R = GitSignatureState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WasSignedByGitHubResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents an S/MIME signature on a Commit or Tag. */
export namespace SmimeSignatureResolvers {
  export interface Resolvers<Context = any> {
    email?: EmailResolver<
      string,
      any,
      Context
    > /** Email used to sign this object. */;
    isValid?: IsValidResolver<
      boolean,
      any,
      Context
    > /** True if the signature is valid and verified by GitHub. */;
    payload?: PayloadResolver<
      string,
      any,
      Context
    > /** Payload for GPG signing object. Raw ODB object without the signature header. */;
    signature?: SignatureResolver<
      string,
      any,
      Context
    > /** ASCII-armored signature header from object. */;
    signer?: SignerResolver<
      User | null,
      any,
      Context
    > /** GitHub user corresponding to the email signing this commit. */;
    state?: StateResolver<
      GitSignatureState,
      any,
      Context
    > /** The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid. */;
    wasSignedByGitHub?: WasSignedByGitHubResolver<
      boolean,
      any,
      Context
    > /** True if the signature was made with GitHub's signing key. */;
  }

  export type EmailResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsValidResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PayloadResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SignatureResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SignerResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StateResolver<
    R = GitSignatureState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WasSignedByGitHubResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents a Git tag. */
export namespace TagResolvers {
  export interface Resolvers<Context = any> {
    abbreviatedOid?: AbbreviatedOidResolver<
      string,
      any,
      Context
    > /** An abbreviated version of the Git object ID */;
    commitResourcePath?: CommitResourcePathResolver<
      Uri,
      any,
      Context
    > /** The HTTP path for this Git object */;
    commitUrl?: CommitUrlResolver<
      Uri,
      any,
      Context
    > /** The HTTP URL for this Git object */;
    id?: IdResolver<string, any, Context>;
    message?: MessageResolver<
      string | null,
      any,
      Context
    > /** The Git tag message. */;
    name?: NameResolver<string, any, Context> /** The Git tag name. */;
    oid?: OidResolver<GitObjectId, any, Context> /** The Git object ID */;
    repository?: RepositoryResolver<
      Repository,
      any,
      Context
    > /** The Repository the Git object belongs to */;
    tagger?: TaggerResolver<
      GitActor | null,
      any,
      Context
    > /** Details about the tag author. */;
    target?: TargetResolver<
      GitObject,
      any,
      Context
    > /** The Git object the tag points to. */;
  }

  export type AbbreviatedOidResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommitResourcePathResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommitUrlResolver<
    R = Uri,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MessageResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type OidResolver<
    R = GitObjectId,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RepositoryResolver<
    R = Repository,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TaggerResolver<
    R = GitActor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TargetResolver<
    R = GitObject,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Represents an unknown signature on a Commit or Tag. */
export namespace UnknownSignatureResolvers {
  export interface Resolvers<Context = any> {
    email?: EmailResolver<
      string,
      any,
      Context
    > /** Email used to sign this object. */;
    isValid?: IsValidResolver<
      boolean,
      any,
      Context
    > /** True if the signature is valid and verified by GitHub. */;
    payload?: PayloadResolver<
      string,
      any,
      Context
    > /** Payload for GPG signing object. Raw ODB object without the signature header. */;
    signature?: SignatureResolver<
      string,
      any,
      Context
    > /** ASCII-armored signature header from object. */;
    signer?: SignerResolver<
      User | null,
      any,
      Context
    > /** GitHub user corresponding to the email signing this commit. */;
    state?: StateResolver<
      GitSignatureState,
      any,
      Context
    > /** The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid. */;
    wasSignedByGitHub?: WasSignedByGitHubResolver<
      boolean,
      any,
      Context
    > /** True if the signature was made with GitHub's signing key. */;
  }

  export type EmailResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsValidResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PayloadResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SignatureResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SignerResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StateResolver<
    R = GitSignatureState,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WasSignedByGitHubResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
