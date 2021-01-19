import {
  ClockCircleOutlined,
  CommentOutlined,
  HomeOutlined,
  ShopOutlined,
  TeamOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [
  {
    key: 'previous-history',
    path: `${APP_PREFIX_PATH}/previous-history`,
    title: 'History',
    icon: ClockCircleOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'home',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Home',
    icon: HomeOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'teams',
    path: `${APP_PREFIX_PATH}/teams`,
    title: 'Teams',
    icon: TeamOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'helpdesk',
    path: `${APP_PREFIX_PATH}/helpdesk`,
    title: 'Help Desk',
    icon: CommentOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'wallet',
    path: `${APP_PREFIX_PATH}/wallet`,
    title: 'Wallet',
    icon: WalletOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'oneline-shop',
    path: `${APP_PREFIX_PATH}/online-shop`,
    title: 'Shop',
    icon: ShopOutlined,
    breadcrumb: false,
    submenu: []
  }
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
