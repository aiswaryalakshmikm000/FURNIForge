export type LeadStatus = "Assigned" | "Unassigned";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  location: string;
  types: string[];
  date: string;
  assignedTo: string;
  status: LeadStatus;
  source: string;
};