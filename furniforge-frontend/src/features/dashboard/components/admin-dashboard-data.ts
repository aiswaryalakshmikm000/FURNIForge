import { DollarSign, Package, UserPlus, CreditCard, AlertTriangle } from "lucide-react";


export const stats = [
  { title: "Total Revenue", value: "₹28,60,000", icon: DollarSign, color: "text-accent"},
  { title: "Active Projects", value: "18", icon: Package, color: "text-accent" },
  { title: "Open Leads", value: "12", icon: UserPlus, color: "text-accent" },
  { title: "Pending Payments", value: "₹6,45,000", icon: CreditCard, color: "text-[hsl(var(--mustard))]"},
  { title: "Overdue Alerts", value: "2", icon: AlertTriangle, color: "text-destructive"},
];

export const weeklyData = [
  { name: "Mon", revenue: 25000 },
  { name: "Tue", revenue: 42000 },
  { name: "Wed", revenue: 18000 },
  { name: "Thu", revenue: 51000 },
  { name: "Fri", revenue: 35000 },
  { name: "Sat", revenue: 62000 },
  { name: "Sun", revenue: 20000 },
];

export const monthlyData = [
  { name: "Sep", revenue: 220000 },
  { name: "Oct", revenue: 380000 },
  { name: "Nov", revenue: 410000 },
  { name: "Dec", revenue: 340000 },
  { name: "Jan", revenue: 520000 },
  { name: "Feb", revenue: 690000 },
];

export const yearlyData = [
  { name: "2023", revenue: 1800000 },
  { name: "2024", revenue: 3200000 },
  { name: "2025", revenue: 4600000 },
  { name: "2026", revenue: 2860000 },
];

export const bestDesigners = [
  { name: "Arun Mehta", projects: 8, revenue: "₹8,50,000", rating: 4.8 },
  { name: "Sneha Kulkarni", projects: 6, revenue: "₹6,20,000", rating: 4.6 },
  { name: "Rahul Desai", projects: 5, revenue: "₹5,80,000", rating: 4.5},
];

export const topClients = [
  { name: "John Doe", totalSpent: "₹2,85,000", projects: 2, type: "Wardrobe + TV Unit" },
  { name: "Priya Sharma", totalSpent: "₹1,85,000", projects: 1, type: "Wardrobe" },
  { name: "Amit Joshi", totalSpent: "₹1,45,000", projects: 1, type: "Sofa", },
];

export const pendingPayments = [
  { client: "John Doe", project: "Sliding Wardrobe", amount: "₹62,500", dueDate: "Mar 10, 2026", stage: "40% Before Installation", overdue: false },
  { client: "Priya Sharma", project: "Walk-in Wardrobe", amount: "₹1,11,000", dueDate: "Mar 15, 2026", stage: "60% Advance", overdue: false },
  { client: "Amit Joshi", project: "L-Shape Sofa", amount: "₹87,000", dueDate: "Feb 10, 2026", stage: "60% Advance", overdue: true },
];
