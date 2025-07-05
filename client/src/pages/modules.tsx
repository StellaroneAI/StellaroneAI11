import { useState } from "react";
import ModuleCard from "@/components/modules/module-card";
import ModuleModal from "@/components/modules/module-modal";
import { moduleDetails } from "@/lib/mock-data";
import { Link2, Bot, File, CreditCard, AlertCircle, Users, BarChart3 } from "lucide-react";

export default function Modules() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modules = [
    {
      id: "integrate",
      icon: <Link2 className="text-xl" />,
      title: "stellar.integrate()",
      subtitle: "Smart EHR & PMS Integration",
      features: [
        "Bi-directional APIs (HL7, FHIR, JSON)",
        "Real-time charge capture",
        "Appointment + eligibility bots",
      ],
      color: "bg-blue-600",
    },
    {
      id: "claimAI",
      icon: <Bot className="text-xl" />,
      title: "stellar.claimAI()",
      subtitle: "Automated Claim Creation",
      features: [
        "CPT/ICD code validation (NLP-based)",
        "99% clean-claim rate",
        "Custom payer rules engine",
      ],
      color: "bg-green-600",
    },
    {
      id: "contracts",
      icon: <File className="text-xl" />,
      title: "stellar.contracts()",
      subtitle: "Dynamic Payer Contract Management",
      features: [
        "Fee schedule imports",
        "Contract vs. Paid tracking",
        "Leakage reporting",
      ],
      color: "bg-orange-600",
    },
    {
      id: "paymentAI",
      icon: <CreditCard className="text-xl" />,
      title: "stellar.paymentAI()",
      subtitle: "ERA & EOB Reconciliation",
      features: [
        "Auto-posting from 835s / EOBs",
        "Payment vs expected analysis",
        "Alerts for underpayments",
      ],
      color: "bg-purple-600",
    },
    {
      id: "denialAI",
      icon: <AlertCircle className="text-xl" />,
      title: "stellar.denialAI()",
      subtitle: "Intelligent Denial Management",
      features: [
        "Real-time alerts for rejections",
        "Auto-routing to coders / AR team",
        "Appeal letter generation with LLMs",
      ],
      color: "bg-red-600",
    },
    {
      id: "patients",
      icon: <Users className="text-xl" />,
      title: "stellar.patients()",
      subtitle: "Smart Patient Billing",
      features: [
        "SMS/email/WhatsApp billing nudges",
        "Payment plans & reminders",
        "Razorpay/Stripe integration",
      ],
      color: "bg-teal-600",
    },
    {
      id: "analytics",
      icon: <BarChart3 className="text-xl" />,
      title: "stellar.analytics()",
      subtitle: "BI Dashboard & Revenue Insights",
      features: [
        "Cash collected vs expected",
        "Denial trend analysis",
        "Daily/weekly/monthly RCM health",
      ],
      color: "bg-indigo-600",
    },
  ];

  const handleModuleClick = (moduleId: string) => {
    setSelectedModule(moduleId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedModule(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Complete RCM Module Suite</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Seven integrated modules covering every aspect of your revenue cycle management
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              icon={module.icon}
              title={module.title}
              subtitle={module.subtitle}
              features={module.features}
              color={module.color}
              onClick={() => handleModuleClick(module.id)}
            />
          ))}
        </div>
      </div>

      <ModuleModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        module={selectedModule ? moduleDetails[selectedModule as keyof typeof moduleDetails] : null}
      />
    </div>
  );
}
