import { useState } from "react";
import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react";
import { useAuth } from "../context/AuthContext";
import { ArrowRight } from "lucide-react";

import { Card } from "../components/ui/Card";
import { Select } from "../components/ui/Select";
import { Textarea } from "../components/ui/Textarea";
import { Button } from "../components/ui/Button";

const goalOptions = [
  { value: "bulk", label: "Build Muscule (Bulk)" },
  { value: "cut", label: "Lose Fat (Cut)" },
  { value: "recomp", label: "Body Recomposition" },
  { value: "strength", label: "Build Strength" },
  { value: "endurance", label: "Improve Endurance" },
];

const experianceOptions = [
  { value: "beginner", label: "Beginner (0-1)" },
  { value: "intermediate", label: "Intermediate (1-3 years)" },
  { value: "advanced", label: "Advanced (3+ years)" },
];

const daysOptions = [
  { value: "2", label: "2 days per week" },
  { value: "3", label: "3 days per week" },
  { value: "4", label: "4 days per week" },
  { value: "5", label: "5 days per week" },
  { value: "6", label: "6 days per week" },
];

const sessionOptions = [
  { value: "30", label: "30 minutes" },
  { value: "45", label: "45 minutes" },
  { value: "60", label: "60 minutes" },
  { value: "90", label: "90 minutes" },
];

const equipmentOptions = [
  { value: "full_gym", label: "Full Gym Access" },
  { value: "home", label: "Home Gym" },
  { value: "dumbbells", label: "Dumbbells Only" },
];

const splitOptions = [
  { value: "full_body", label: "Full Body" },
  { value: "upper_lower", label: "Upper/Lower Split" },
  { value: "ppl", label: "Push/Pull/Legs" },
  { value: "custom", label: "Let AI Decide" },
];

export default function Onboarding() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    goal: "bulk",
    experience: "intermediate",
    daysPerWeek: "4",
    sessionLength: "60",
    equipment: "full_gym",
    injuries: "",
    preferredSplit: "upper_lower",
  });

  function updateForm(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleQuestionnaire(e: React.SubmitEvent) {
    e.preventDefault();

    console.log("Submitted");
  }

  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <SignedIn>
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="max-w-xl mx-auto">
          {/*@todo -> Progress Indicator */}

          {/* Step 1: Questionnaire */}
          <Card variant="bordered">
            <h1 className="text-2xl font-bold mb-2">Tell Us About Yourself</h1>
            <p className="text-muted mb-6">
              Help us create the perfect plan for you
            </p>
            <form className="space-y-5" onSubmit={handleQuestionnaire}>
              <Select
                id="goal"
                label="What's your primary goal?"
                options={goalOptions}
                value={formData.goal}
                onChange={(e) => updateForm("goal", e.target.value)}
              />

              <Select
                id="experience"
                label="Training Experience"
                options={experianceOptions}
                value={formData.experience}
                onChange={(e) => updateForm("experience", e.target.value)}
              />

              <div className="grid grid-cols-2 gap-4">
                <Select
                  id="daysPerWeek"
                  label="Days Per Week"
                  options={daysOptions}
                  value={formData.daysPerWeek}
                  onChange={(e) => updateForm("daysPerWeek", e.target.value)}
                />

                <Select
                  id="sessionLength"
                  label="Session Length"
                  options={sessionOptions}
                  value={formData.sessionLength}
                  onChange={(e) => updateForm("sessionLength", e.target.value)}
                />
              </div>

              <Select
                id="equipment"
                label="Equipment Access"
                options={equipmentOptions}
                value={formData.equipment}
                onChange={(e) => updateForm("equipment", e.target.value)}
              />

              <Select
                id="preferredSplit"
                label="Preferred Training Split"
                options={splitOptions}
                value={formData.preferredSplit}
                onChange={(e) => updateForm("preferredSplit", e.target.value)}
              />

              <Textarea
                id="injuries"
                label="Any injuries or limitations (optional)"
                placeholder="E.g., lower back issues, shoulder impingement..."
                rows={3}
                value={formData.injuries}
                onChange={(e) => updateForm("injuries", e.target.value)}
              />

              <div className="flex gap-3 pt-2">
                <Button type="submit" className="flex-1 gap-2">
                  Generate my Plan <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </Card>

          {/* Step 2: Generating */}
        </div>
      </div>
    </SignedIn>
  );
}
