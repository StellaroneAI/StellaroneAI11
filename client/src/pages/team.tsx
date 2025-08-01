import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Team() {
  const teamMembers = [
    {
      name: "Praveen Kumar J",
      role: "Founder & CEO",
      description: "Healthcare entrepreneur with 15+ years of experience in revenue cycle management and healthcare technology innovation.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Sarathkumar Mani",
      role: "Co-Founder & CTO",
      description: "Technology leader specializing in AI/ML applications for healthcare, with expertise in building scalable healthcare platforms.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Mukesh",
      role: "Co-Founder",
      description: "Healthcare operations expert driving strategic initiatives and revenue cycle optimization for healthcare providers.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Tharun",
      role: "Co-Founder",
      description: "Technology and AI specialist focused on developing intelligent healthcare solutions and platform scalability.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Pavithra",
      role: "Co-Founder",
      description: "Healthcare operations and clinical workflow expert specializing in revenue cycle management and patient experience.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
  ];



  const offices = [
    {
      flag: "🇮🇳",
      location: "India Operations",
      details: "Bengaluru & Jaipur",
      focus: "Serving diagnostic labs, clinics, and hospitals",
    },
    {
      flag: "🇺🇸",
      location: "US Operations",
      details: "Remote delivery model",
      focus: "HIPAA-ready modules and services",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Founding Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Healthcare and technology experts united as cofounders to revolutionize revenue cycle management
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Leadership Team */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{member.name}</h3>
                <Badge variant="secondary" className="mb-4">
                  {member.role}
                </Badge>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Global Presence */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Global Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{office.flag}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900">{office.location}</h3>
                      <p className="text-gray-600">{office.details}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{office.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Culture */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-6 max-w-4xl mx-auto">
            To build a healthcare infrastructure where <strong>no money is left on the table</strong>, 
            and <strong>every provider gets paid fully, fast, and fairly</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Leveraging AI and automation to revolutionize healthcare revenue cycles</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Delivering world-class solutions with measurable outcomes</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Partnership</h3>
              <p className="text-gray-600">Building long-term relationships with healthcare providers globally</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
