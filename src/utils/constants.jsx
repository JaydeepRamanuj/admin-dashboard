import { AiFillProduct, AiOutlineRise } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";
import {
  FaChartBar,
  FaClock,
  FaDollarSign,
  FaEye,
  FaShoppingBag,
  FaUserCheck,
  FaUsers,
  FaUserTimes,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiUserAdd, HiUsers } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import {
  IoAnalyticsOutline,
  IoAnalyticsSharp,
  IoCheckmarkDoneCircle,
} from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";

export const sideBarMenuItems = [
  {
    name: "Overview",
    icon: <FaChartBar />,
    path: "/",
  },
  {
    name: "Products",
    icon: <FaShoppingBag />,
    path: "/products",
  },
  {
    name: "Users",
    icon: <HiUsers />,
    path: "/users",
  },
  {
    name: "Sales",
    icon: <FaDollarSign />,
    path: "/sales",
  },
  {
    name: "Orders",
    icon: <FaCartShopping />,
    path: "/orders",
  },
  {
    name: "Analytics",
    icon: <IoAnalyticsSharp />,
    path: "/analytics",
  },
];

export const overviewData = [
  {
    name: "Revenue",
    value: "$1,234,567",
    change: 12.5,
    icon: <FaDollarSign />,
  },
  { name: "Users", value: "45,678", change: 8.3, icon: <FaUsers /> },
  { name: "Orders", value: "9,876", change: -3.2, icon: <BiShoppingBag /> },
  { name: "Page Views", value: "1,234,567", change: 15.7, icon: <BsEye /> },
];

export const salesStats = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};

export const orderStats = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765",
};

export const OverviewPageHighlightNumberItems = [
  { name: "Total Sales", value: "$10,000", icon: <RiMoneyRupeeCircleFill /> },
  { name: "New Users", value: "546", icon: <MdPeopleAlt /> },
  { name: "Total Products", value: "643", icon: <FaShoppingBag /> },
  { name: "Conversation Rate", value: "9.7%", icon: <SiGoogleanalytics /> },
];
export const ProductPageHighlightNumberItems = [
  {
    name: "Total products",
    value: "457",
    icon: <FaShoppingBag />,
  },
  { name: "Top selling", value: "362", icon: <AiOutlineRise /> },
  { name: "Low stocks", value: "59", icon: <CgDanger /> },
  {
    name: "Total revenue",
    value: "Rs. 63000",
    icon: <RiMoneyRupeeCircleFill />,
  },
];
export const SalesPageHighlightNumberItems = [
  {
    name: "Total revenue",
    value: "Rs. 63000",
    icon: <RiMoneyRupeeCircleFill />,
  },
  { name: "Avg. Order value", value: "Rs. 493", icon: <FaCartShopping /> },
  { name: "Conversation rate", value: "66%", icon: <AiOutlineRise /> },
  {
    name: "Sales growth",
    value: "11.9%",
    icon: <AiOutlineRise />,
  },
];
export const UsersPageHighlightNumberItems = [
  {
    name: "Total Users",
    value: "93,645",
    icon: <MdPeopleAlt />,
  },
  { name: "New users today", value: "149", icon: <HiUserAdd /> },
  { name: "Active users", value: "75,981", icon: <FaUserCheck /> },
  {
    name: "Users left ",
    value: "6.7%",
    icon: <FaUserTimes />,
  },
];
export const OrderPageHighlightNumberItems = [
  {
    name: "Total Orders",
    value: "325",
    icon: <FaShoppingBag />,
  },
  { name: "Pending Orders", value: "63", icon: <FaClock /> },
  { name: "Completed Orders", value: "262", icon: <IoCheckmarkDoneCircle /> },
  {
    name: "Total revenue",
    value: "Rs. 63000",
    icon: <RiMoneyRupeeCircleFill />,
  },
];
export const AnalyticsPageHighlightNumberItems = [
  {
    name: "Revenue",
    value: "Rs. 63000",
    icon: <RiMoneyRupeeCircleFill />,
    percentage: "12.5",
    isGrowing: true,
  },
  {
    name: "Users",
    value: "93,645",
    icon: <MdPeopleAlt />,
    percentage: "8.3",
    isGrowing: true,
  },
  {
    name: "Orders",
    value: "325",
    icon: <FaShoppingBag />,
    percentage: "3.2",
    isGrowing: false,
  },
  {
    name: "Page Views",
    value: "41,236",
    icon: <FaEye />,
    percentage: "15.7",
    isGrowing: true,
  },
];
