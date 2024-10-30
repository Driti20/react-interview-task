import { Link } from "react-router-dom";
import { getStatusTag } from "./helpers";

export const jobData = [
  {
    key: "test1",
    name: "Greenwood Construction",
    status: getStatusTag("COMPLETED"),
    category: ["Sidewalk Shed", "Scaffold", "Shoring"],
  },
  {
    key: "test2",
    name: "Lakeside Renovation",
    status: getStatusTag("ONPROGRESS"),
    category: ["Scaffold", "Shoring"],
  },
  {
    key: "test3",
    name: "Skyline Apartments",
    status: getStatusTag("ONHOLD"),
    category: ["Scaffold"],
  },
  {
    key: "test4",
    name: "Mountainview Tower",
    status: getStatusTag("COMPLETED"),
    category: ["Shoring"],
  },
  {
    key: "test5",
    name: "City Square Complex",
    status: getStatusTag("ONPROGRESS"),
    category: ["Sidewalk Shed", "Scaffold", "Shoring"],
  },
  {
    key: "test6",
    name: "Eastside Mall",
    status: getStatusTag("ONHOLD"),
    category: ["Sidewalk Shed", "Scaffold", "Shoring"],
  },
  {
    key: "test7",
    name: "Harbor Bridge Repair",
    status: getStatusTag("COMPLETED"),
    category: ["Sidewalk Shed"],
  },
  {
    key: "test8",
    name: "Downtown Plaza",
    status: getStatusTag("ONPROGRESS"),
    category: ["Sidewalk Shed", "Shoring"],
  },
  {
    key: "test9",
    name: "Sunset Villas",
    status: getStatusTag("COMPLETED"),
    category: ["Sidewalk Shed", "Scaffold"],
  },
  {
    key: "test10",
    name: "Broadway Avenue",
    status: getStatusTag("ONHOLD"),
    category: ["Sidewalk Shed", "Scaffold", "Shoring"],
  },
];
export const columns = [
  {
    title: "Jobsite Name",
    dataIndex: "name",
    key: "jobsite",
    align: "center",
    render: (text, { key }) => (
      <Link to={`/jobsite?id=${key}`} className={"styles.jobsiteText"}>
        {text}
      </Link>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

export const categoryColumns = [
  {
    title: "Nr.",
    dataIndex: "nr",
    key: "nr",
  },
  {
    title: "Item",
    dataIndex: "item",
    key: "item",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Notes",
    dataIndex: "notes",
    key: "notes",
  },
];

export const categories = [
  {
    nr: "1",
    item: "M3M5",
    quantity: "10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:'Shoring'
  },
  {
    nr: "2",
    item: "M3M5",
    quantity: "10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:'Sidewalk Shed'
  },
  {
    nr: "3",
    item: "M3M5",
    quantity: "10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:'Scaffold'
  },
  {
    nr: "4",
    item: "sdMd3M5",
    quantity: "10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:'Shoring'
  },
  {
    nr: "5",
    item: "M3Mfda5",
    quantity: "102",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:'Sidewalk Shed'
  },
  {
    nr: "6",
    item: "M3Msad5",
    quantity: "0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:'Scaffold'
  },
  {
    nr: "7",
    item: "M3wweM5",
    quantity: "10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:'Shoring'
  },
  {
    nr: "8",
    item: "M3,mM5",
    quantity: "10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:'Sidewalk Shed'
  },
  {
    nr: "9",
    item: "M323M5",
    quantity: "10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:'Scaffold'
  },
  {
    nr: "10",
    item: "M3M33335",
    quantity: "10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:'Shoring'
  },
  {
    nr: "11",
    item: "M3M425",
    quantity: "10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:'Sidewalk Shed'
  },
  {
    nr: "12",
    item: "M3asd33M5",
    quantity: "10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:'Scaffold'
  },
];

export const itemOptions = [
  { label: "A1B2C3", value: "A1B2C3" },
  { label: "D4E5F6", value: "D4E5F6" },
  { label: "G7H8I9", value: "G7H8I9" },
  { label: "J0K1L2", value: "J0K1L2" },
  { label: "M3N4O5", value: "M3N4O5" },
  { label: "P6Q7R8", value: "P6Q7R8" },
  { label: "S9T0U1", value: "S9T0U1" },
  { label: "V2W3X4", value: "V2W3X4" },
  { label: "Y5Z6A7", value: "Y5Z6A7" },
  { label: "B8C9D0", value: "B8C9D0" }
];