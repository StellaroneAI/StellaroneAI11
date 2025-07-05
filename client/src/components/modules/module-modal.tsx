import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Check, Bot } from "lucide-react";

interface ModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  module: {
    title: string;
    features: string[];
    benefits: Array<{
      title: string;
      description: string;
    }>;
    metrics?: Array<{
      label: string;
      value: string;
      color: string;
    }>;
  } | null;
}

export default function ModuleModal({ isOpen, onClose, module }: ModuleModalProps) {
  if (!module) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900">{module.title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          <div>
            <h4 className="text-xl font-semibold text-blue-900 mb-4">Key Features</h4>
            <ul className="space-y-3 text-gray-600">
              {module.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-green-500 mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-900 mb-4">Benefits</h4>
            <div className="space-y-4">
              {module.benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-600 mb-2">{benefit.title}</h5>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
            {module.metrics && (
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Performance Metrics</h4>
                <div className="space-y-4">
                  {module.metrics.map((metric, index) => (
                    <div key={index} className={`${metric.color} text-white p-4 rounded-lg`}>
                      <h5 className="font-semibold mb-2">{metric.label}</h5>
                      <p className="text-2xl font-bold">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
