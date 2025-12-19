import { BookOpen, Video, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResourcesSection = () => {
  const resources = [
    {
      icon: BookOpen,
      category: "Books",
      items: [
        { title: "Don't Make Me Think", author: "Steve Krug" },
        { title: "The Design of Everyday Things", author: "Don Norman" },
        { title: "Refactoring UI", author: "Adam Wathan & Steve Schoger" },
        { title: "100 Things Every Designer Needs to Know", author: "Susan Weinschenk" },
      ],
    },
    {
      icon: Video,
      category: "Courses",
      items: [
        { title: "Google UX Design Certificate", author: "Coursera" },
        { title: "UI/UX Design Specialization", author: "CalArts" },
        { title: "Figma UI Design Tutorial", author: "DesignCourse" },
        { title: "Interaction Design Foundation", author: "IDF" },
      ],
    },
    {
      icon: Globe,
      category: "Websites",
      items: [
        { title: "Nielsen Norman Group", author: "nngroup.com" },
        { title: "Smashing Magazine", author: "smashingmagazine.com" },
        { title: "UX Collective", author: "uxdesign.cc" },
        { title: "Laws of UX", author: "lawsofux.com" },
      ],
    },
    {
      icon: Users,
      category: "Communities",
      items: [
        { title: "Dribbble", author: "Design Inspiration" },
        { title: "Behance", author: "Creative Portfolios" },
        { title: "Designer Hangout", author: "Slack Community" },
        { title: "UX Research Community", author: "Reddit & Discord" },
      ],
    },
  ];

  return (
    <section id="resources" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Keep Learning</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Resources & Learning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Continue your UI/UX journey with these curated books, courses, and communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.category}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <resource.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">{resource.category}</h3>
              <ul className="space-y-3">
                {resource.items.map((item) => (
                  <li key={item.title} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{item.author}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 md:p-16">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your UI/UX Journey?
          </h3>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Practice what you've learned by building real projects. The best way to master UI/UX is through hands-on experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="heroOutline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Case Studies
            </Button>
            <Button variant="hero" size="lg">
              Start Building
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
