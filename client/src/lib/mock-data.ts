export const revenueData = [
  { name: 'Jan', revenue: 720000, claims: 1200, denials: 45 },
  { name: 'Feb', revenue: 760000, claims: 1300, denials: 38 },
  { name: 'Mar', revenue: 800000, claims: 1400, denials: 42 },
  { name: 'Apr', revenue: 825000, claims: 1450, denials: 35 },
  { name: 'May', revenue: 870000, claims: 1500, denials: 32 },
  { name: 'Jun', revenue: 892000, claims: 1550, denials: 28 },
];

export const claimStatusData = [
  { name: 'Approved', value: 75, color: '#00A86B' },
  { name: 'Pending', value: 15, color: '#FF6B35' },
  { name: 'Denied', value: 5, color: '#E74C3C' },
  { name: 'In Review', value: 5, color: '#0066CC' },
];

export const denialReasonsData = [
  { name: 'Missing Prior Authorization', value: 23 },
  { name: 'Incorrect Coding', value: 18 },
  { name: 'Duplicate Claim', value: 12 },
  { name: 'Missing Documentation', value: 10 },
  { name: 'Other', value: 37 },
];

export const payerPerformanceData = [
  { name: 'Blue Cross Blue Shield', performance: 98.2, paymentTime: 18 },
  { name: 'Aetna', performance: 96.8, paymentTime: 22 },
  { name: 'UnitedHealth', performance: 94.5, paymentTime: 25 },
  { name: 'Cigna', performance: 95.1, paymentTime: 21 },
  { name: 'Humana', performance: 93.8, paymentTime: 28 },
];

export const topServices = [
  { name: 'Cardiology Consultations', revenue: 234567 },
  { name: 'Diagnostic Imaging', revenue: 189432 },
  { name: 'Surgical Procedures', revenue: 156789 },
  { name: 'Emergency Services', revenue: 145623 },
  { name: 'Laboratory Services', revenue: 98765 },
];

export const recentActivity = [
  {
    id: 1,
    type: 'success',
    message: 'Claim #CLM-2024-001847 processed successfully',
    details: 'Payment posted: $2,456.78',
    timestamp: '2 min ago',
  },
  {
    id: 2,
    type: 'warning',
    message: 'Denial alert: Missing prior authorization',
    details: 'Claim #CLM-2024-001848 requires attention',
    timestamp: '5 min ago',
  },
  {
    id: 3,
    type: 'info',
    message: 'Patient payment received',
    details: 'Account #ACC-789456: $125.00',
    timestamp: '12 min ago',
  },
];

export const moduleDetails = {
  integrate: {
    title: 'stellar.integrate() - Smart EHR & PMS Integration',
    features: [
      'Bi-directional APIs supporting HL7, FHIR, and JSON formats',
      'Real-time charge capture from EHR systems',
      'Automated appointment scheduling and eligibility verification',
      'Seamless integration with major EHR platforms',
      'Smart data mapping and validation',
      'Real-time synchronization across all systems',
    ],
    benefits: [
      {
        title: 'Reduced Manual Entry',
        description: 'Eliminate up to 85% of manual data entry errors',
      },
      {
        title: 'Real-time Sync',
        description: 'Instant data synchronization across all systems',
      },
      {
        title: 'Enhanced Efficiency',
        description: 'Streamline workflows and reduce processing time',
      },
    ],
  },
  claimAI: {
    title: 'stellar.claimAI() - Automated Claim Creation & Scrubbing',
    features: [
      'NLP-based CPT/ICD code validation and suggestion',
      'Intelligent claim scrubbing with 99% accuracy',
      'Custom payer rules engine for different insurance providers',
      'Automated claim generation from clinical documentation',
      'Real-time validation against payer requirements',
      'Machine learning-powered code optimization',
    ],
    benefits: [
      {
        title: 'Higher Clean Claim Rate',
        description: 'Achieve 99%+ clean claim rates with AI validation',
      },
      {
        title: 'Faster Processing',
        description: 'Reduce claim processing time by 70%',
      },
      {
        title: 'Improved Accuracy',
        description: 'Minimize coding errors and denials',
      },
    ],
    metrics: [
      {
        label: 'Clean Claim Rate',
        value: '99.2%',
        color: 'bg-gradient-to-r from-green-500 to-green-600',
      },
      {
        label: 'Processing Speed',
        value: '< 2 min',
        color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      },
      {
        label: 'Error Reduction',
        value: '87%',
        color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      },
    ],
  },
  contracts: {
    title: 'stellar.contracts() - Dynamic Payer Contract Management',
    features: [
      'Automated fee schedule imports and updates',
      'Real-time contract vs. paid amount tracking',
      'Comprehensive leakage reporting and analytics',
      'Automated contract renewal notifications',
      'Multi-payer contract comparison tools',
      'Revenue optimization recommendations',
    ],
    benefits: [
      {
        title: 'Revenue Recovery',
        description: 'Identify and recover lost revenue through contract analysis',
      },
      {
        title: 'Contract Compliance',
        description: 'Ensure all payments comply with contract terms',
      },
      {
        title: 'Automated Tracking',
        description: 'Monitor contract performance across all payers',
      },
    ],
  },
  paymentAI: {
    title: 'stellar.paymentAI() - ERA & EOB Reconciliation',
    features: [
      'Automated posting from 835 files and EOBs',
      'Intelligent payment variance analysis',
      'Real-time alerts for underpayments',
      'Batch payment processing capabilities',
      'Automated denial reason code interpretation',
      'Payment trend analysis and reporting',
    ],
    benefits: [
      {
        title: 'Faster Posting',
        description: 'Same-day payment posting with 99.5% accuracy',
      },
      {
        title: 'Variance Detection',
        description: 'Automatically identify payment discrepancies',
      },
      {
        title: 'Improved Cash Flow',
        description: 'Accelerate revenue realization by 40%',
      },
    ],
  },
  denialAI: {
    title: 'stellar.denialAI() - Intelligent Denial Management',
    features: [
      'Real-time denial alerts and notifications',
      'Automated routing to appropriate team members',
      'AI-powered appeal letter generation',
      'Denial trend analysis and root cause identification',
      'Automated prior authorization requests',
      'Predictive denial prevention',
    ],
    benefits: [
      {
        title: 'Faster Resolution',
        description: 'Reduce denial resolution time by 60%',
      },
      {
        title: 'Higher Success Rate',
        description: 'Improve appeal success rates by 45%',
      },
      {
        title: 'Proactive Prevention',
        description: 'Prevent denials before they occur',
      },
    ],
  },
  patients: {
    title: 'stellar.patients() - Smart Patient Billing & Follow-Up',
    features: [
      'Multi-channel billing reminders (SMS, email, WhatsApp)',
      'Flexible payment plans and scheduling',
      'Automated follow-up sequences',
      'Integrated payment processing (Razorpay/Stripe)',
      'Patient portal with self-service options',
      'Intelligent payment reminder timing',
    ],
    benefits: [
      {
        title: 'Improved Collection',
        description: 'Increase patient payment collection by 35%',
      },
      {
        title: 'Better Experience',
        description: 'Enhance patient satisfaction with convenient options',
      },
      {
        title: 'Reduced Bad Debt',
        description: 'Minimize bad debt through proactive engagement',
      },
    ],
  },
  analytics: {
    title: 'stellar.analytics() - BI Dashboard & Revenue Insights',
    features: [
      'Real-time cash collection vs. expected analysis',
      'Comprehensive denial trend analysis',
      'Daily, weekly, and monthly RCM health reports',
      'Predictive analytics for revenue forecasting',
      'Benchmarking against industry standards',
      'Customizable dashboards and alerts',
    ],
    benefits: [
      {
        title: 'Data-Driven Decisions',
        description: 'Make informed decisions with real-time insights',
      },
      {
        title: 'Performance Tracking',
        description: 'Monitor KPIs and identify improvement opportunities',
      },
      {
        title: 'Predictive Planning',
        description: 'Forecast revenue and plan resources effectively',
      },
    ],
  },
};
