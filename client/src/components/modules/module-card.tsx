import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  features: string[];
  color: string;
  onClick: () => void;
}

export default function ModuleCard({ icon, title, subtitle, features, color, onClick }: ModuleCardProps) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:border-blue-500"
      onClick={onClick}
    >
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className={`w-12 h-12 ${color} text-white rounded-lg flex items-center justify-center mr-4`}>
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
            <p className="text-gray-500">{subtitle}</p>
          </div>
        </div>
        <ul className="space-y-3 text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="text-green-500 mr-2 h-4 w-4" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
