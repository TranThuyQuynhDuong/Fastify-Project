import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
//pages
//category
const CreateCategory = React.lazy(() => import('./views/page/category/CreateCategory'))
const CategoryList = React.lazy(() => import('./views/page/category/CategoryList'))
const UpdateCategory = React.lazy(() => import('./views/page/category/UpdateCategory'))
const DetailCategory = React.lazy(() => import('./views/page/category/DetailCategory'))
const ListTrashCate = React.lazy(() => import('./views/page/category/ListTrashCat'))
////product
const ProductList = React.lazy(() => import('./views/page/product/ProductList'))
const ProductDetail = React.lazy(() => import('./views/page/product/ProductDetail'))
const ProductCreate = React.lazy(() => import('./views/page/product/ProductCreate'))
const ProductUpdate = React.lazy(() => import('./views/page/product/ProductUpdate'))
const ListTrashPro = React.lazy(() => import('./views/page/product/ListProductTrash'))



///////////////////
const UserList = React.lazy(() => import('./views/page/member/MemberList'))
const MemberDetail = React.lazy(() => import('./views/page/member/MemberDetail'))
const ListTrashMember = React.lazy(() => import('./views/page/member/ListTrashMember'))
const UpdateMember = React.lazy(() => import('./views/page/member/MemberUpdate'))
const CreateMember = React.lazy(() => import('./views/page/member/CreateMember'))

//////////////////////////////
const BrandList = React.lazy(() => import('./views/page/brand/BrandList'))
const BrandDetail = React.lazy(() => import('./views/page/brand/BrandDetail'))
const ListTrashBrand = React.lazy(() => import('./views/page/brand/ListTrash'))
const UpdateBrand = React.lazy(() => import('./views/page/brand/UpdateBrand'))
const CreateBrand = React.lazy(() => import('./views/page/brand/BrandCreate'))
///////////////////////////

const BannerList = React.lazy(() => import('./views/page/Banner/BannerList'))
const BannerCreate = React.lazy(() => import('./views/page/Banner/BannerCreate'))
const ListTrashBanner = React.lazy(() => import('./views/page/Banner/ListTrashBanner'))
const BannerDetail = React.lazy(() => import('./views/page/Banner/BannerDetail'))
const BannerUpdate = React.lazy(() => import('./views/page/Banner/BannerUpdate'))
/////////////////////////////
const BlogList = React.lazy(() => import('./views/page/blog/BlogList'))
const BlogCreate = React.lazy(() => import('./views/page/blog/BlogCreate'))
const ListTrashBlog = React.lazy(() => import('./views/page/blog/BlogListTrash'))
const BlogDetail = React.lazy(() => import('./views/page/blog/BlogDetail'))
const BlogUpdate = React.lazy(() => import('./views/page/blog/BlogUpdate'))
////////////////////////
const CustomerList = React.lazy(() => import('./views/page/Customer/CustomerList'))
const CustomerCreate = React.lazy(() => import('./views/page/Customer/CreateCustomer'))
const ListTrashCustomer = React.lazy(() => import('./views/page/Customer/ListTrashCustomer'))
const CustomerDetail = React.lazy(() => import('./views/page/Customer/CustomerDetail'))
const CustomerUpdate = React.lazy(() => import('./views/page/Customer/CustomerUpdate'))
/////////////////////////
const DiscountedList = React.lazy(() => import('./views/page/DiscountedProduct/DiscountedList'))
const DiscountedCreate = React.lazy(() => import('./views/page/DiscountedProduct/DiscountedCreate'))
const DiscounCreatePro = React.lazy(() => import('./views/page/DiscountedProduct/DiscountedProCreate'))
const ListTrashDiscounted = React.lazy(() => import('./views/page/DiscountedProduct/DiscountedTrash'))
const DiscountedProDetail = React.lazy(() => import('./views/page/DiscountedProduct/DiscountedProductDetail'))
const DiscountedUpdate = React.lazy(() => import('./views/page/DiscountedProduct/DiscountedUpdate'))
////////////////////////////
const SaleList = React.lazy(() => import('./views/page/Sale/SaleList'))
const SaleCreate = React.lazy(() => import('./views/page/Sale/CreateSale'))
const ListTrashSale = React.lazy(() => import('./views/page/Sale/ListTrashSale'))
const SaleDetail = React.lazy(() => import('./views/page/Sale/SaleDetail'))
const SaleUpdate = React.lazy(() => import('./views/page/Sale/SaleUpdate'))
////////////////////////////////////
const TopicList = React.lazy(() => import('./views/page/Topic/TopicList'))
const TopicCreate = React.lazy(() => import('./views/page/Topic/CreateList'))
const ListTrashTopic = React.lazy(() => import('./views/page/Topic/ListTrashTopic'))
const TopicDetail = React.lazy(() => import('./views/page/Topic/TopicDetail'))
const TopicUpdate = React.lazy(() => import('./views/page/Topic/TopicUpdate'))
//////////////////////////////////
const OrderList = React.lazy(() => import('./views/page/Order/OrderList'))
const OrderDetail = React.lazy(() => import('./views/page/Order/OrderDetail'))
const OrderCancel = React.lazy(() => import('./views/page/Order/OrderCancel'))



    

////////////////////
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
////////////////////category
  { path: '/category/createcategory', name: 'CreateCategory', element: CreateCategory },
  { path: '/category/categorylist/:page/:limit', name: 'CategoryList', element: CategoryList },
  { path: '/category/updatecategory/:id', name: 'UpdateCategory', element: UpdateCategory },
  { path: '/category/detailcategory/:id', name: 'DetailCategory', element: DetailCategory },
  { path: '/category/list-trash', name: 'ListTrashCate', element: ListTrashCate },
///////////////////product
{ path: '/product/createproduct', name: 'CreateProduct', element: ProductCreate },
{ path: '/product/productlist/:page/:limit', name: 'ProductList', element: ProductList },
{ path: '/product/productdetail/:id', name: 'ProductDetail', element: ProductDetail },
{ path: '/product/updateproduct/:id', name: 'ProductUpdate', element: ProductUpdate },
{ path: '/product/list-trash', name: 'ListTrashPro', element: ListTrashPro },

//////////////////user
  { path: '/user/userlist/:roles', name: 'UserList', element: UserList },
  { path: '/user/memberdetail/:id', name: 'MemberDetail', element: MemberDetail },
  { path: '/user/list-trash', name: 'ListTrashMember', element: ListTrashMember },
  { path: '/user/updatemember/:id', name: 'UpdateMember', element: UpdateMember },
  { path: '/user/createmember', name: 'CreateMember', element: CreateMember },

////////////////Brand
{ path: '/brand/brandlist/:page/:limit', name: 'BrandList', element: BrandList },
{ path: '/brand/branddetail/:id', name: 'BrandDetail', element: BrandDetail },
{ path: '/brand/list-trash', name: 'ListTrashBrand', element: ListTrashBrand },
{ path: '/brand/updatebrand/:id', name: 'UpdateBrand', element: UpdateBrand },
{ path: '/brand/createbrand', name: 'CreateBrand', element: CreateBrand },

//////////////////////////////////////////
{ path: '/banner/bannerlist', name: 'BannerList', element: BannerList },
{ path: '/banner/bannerdetail/:id', name: 'BannerDetail', element: BannerDetail },
{ path: '/banner/bannerupdate/:id', name: 'BannerUpdate', element: BannerUpdate },
{ path: '/banner/list-trash', name: 'ListTrashBanner', element: ListTrashBanner },
{ path: '/banner/createbanner', name: 'BannerCreate', element: BannerCreate },
////////////////////////////////////////
{ path: '/blog/bloglist', name: 'BlogList', element: BlogList },
{ path: '/blog/blogdetail/:id', name: 'BlogDetail', element: BlogDetail },
{ path: '/blog/blogupdate/:id', name: 'BlogUpdate', element: BlogUpdate },
{ path: '/blog/list-trash', name: 'ListTrashBlog', element: ListTrashBlog },
{ path: '/blog/createblog', name: 'BlogCreate', element: BlogCreate },
////////////////////////////////////////
{ path: '/customer/customerlist', name: 'CustomerList', element: CustomerList },
{ path: '/customer/customerdetail/:id', name: 'CustomerDetail', element: CustomerDetail },
{ path: '/customer/customerupdate/:id', name: 'CustomerUpdate', element: CustomerUpdate },
{ path: '/customer/list-trash', name: 'ListTrashCustomer', element: ListTrashCustomer },
{ path: '/customer/createcustomer', name: 'CustomerCreate', element: CustomerCreate },
/////////////////////////////////////
{ path: '/discounted/discountedlist/:page/:limit', name: 'DiscountedList', element: DiscountedList },
{ path: '/discounted/discountedprodetail/:id', name: 'DiscountedProDetail', element: DiscountedProDetail },
{ path: '/discounted/discountedupdate/:id', name: 'DiscountedUpdate', element: DiscountedUpdate },
{ path: '/discounted/list-trash', name: 'ListTrashDiscounted', element: ListTrashDiscounted },
{ path: '/discounted/discuntedcreate/:id', name: 'DiscountedCreate', element: DiscountedCreate },
{ path: '/discounted/creatediscuntedpro/1/10', name: 'DiscounCreatePro', element: DiscounCreatePro },
//////////////////////////////////
{ path: '/sale/salelist', name: 'SaleList', element: SaleList },
{ path: '/sale/saledetail/:id', name: 'SaleDetail', element: SaleDetail },
{ path: '/sale/saleupdate/:id', name: 'SaleUpdate', element: SaleUpdate },
{ path: '/sale/list-trash', name: 'ListTrashSale', element: ListTrashSale },
{ path: '/sale/createsale', name: 'SaleCreate', element: SaleCreate },
///////////////////////////////
{ path: '/topic/topiclist', name: 'TopicList', element: TopicList },
{ path: '/topic/topicdetail/:id', name: 'TopicDetail', element: TopicDetail },
{ path: '/topic/topicupdate/:id', name: 'TopicUpdate', element: TopicUpdate },
{ path: '/topic/list-trash', name: 'ListTrashTopic', element: ListTrashTopic },
{ path: '/topic/createtopic', name: 'TopicCreate', element: TopicCreate },
////////////
{ path: '/order/orderlist/:page/:limit', name: 'OrderList', element: OrderList },
{ path: '/order/orderdetail/:id', name: 'OrderDetail', element: OrderDetail },
{ path: '/order/ordercancel/:page/:limit', name: 'OrderCancel', element: OrderCancel },





]

export default routes
