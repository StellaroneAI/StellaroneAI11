import { 
  users, 
  claims, 
  patients, 
  revenueMetrics, 
  contactRequests,
  type User, 
  type InsertUser,
  type Claim,
  type InsertClaim,
  type Patient,
  type InsertPatient,
  type RevenueMetric,
  type InsertRevenueMetric,
  type ContactRequest,
  type InsertContactRequest,
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getClaims(): Promise<Claim[]>;
  createClaim(claim: InsertClaim): Promise<Claim>;
  
  getPatients(): Promise<Patient[]>;
  createPatient(patient: InsertPatient): Promise<Patient>;
  
  getRevenueMetrics(): Promise<RevenueMetric[]>;
  createRevenueMetric(metric: InsertRevenueMetric): Promise<RevenueMetric>;
  
  getContactRequests(): Promise<ContactRequest[]>;
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private claims: Map<number, Claim>;
  private patients: Map<number, Patient>;
  private revenueMetrics: Map<number, RevenueMetric>;
  private contactRequests: Map<number, ContactRequest>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.claims = new Map();
    this.patients = new Map();
    this.revenueMetrics = new Map();
    this.contactRequests = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getClaims(): Promise<Claim[]> {
    return Array.from(this.claims.values());
  }

  async createClaim(insertClaim: InsertClaim): Promise<Claim> {
    const id = this.currentId++;
    const claim: Claim = { ...insertClaim, id };
    this.claims.set(id, claim);
    return claim;
  }

  async getPatients(): Promise<Patient[]> {
    return Array.from(this.patients.values());
  }

  async createPatient(insertPatient: InsertPatient): Promise<Patient> {
    const id = this.currentId++;
    const patient: Patient = { ...insertPatient, id };
    this.patients.set(id, patient);
    return patient;
  }

  async getRevenueMetrics(): Promise<RevenueMetric[]> {
    return Array.from(this.revenueMetrics.values());
  }

  async createRevenueMetric(insertMetric: InsertRevenueMetric): Promise<RevenueMetric> {
    const id = this.currentId++;
    const metric: RevenueMetric = { ...insertMetric, id };
    this.revenueMetrics.set(id, metric);
    return metric;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values());
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = this.currentId++;
    const request: ContactRequest = { 
      ...insertRequest, 
      id, 
      createdAt: new Date() 
    };
    this.contactRequests.set(id, request);
    return request;
  }
}

export const storage = new MemStorage();
