import VolunteerFinder from "@/components/VolunteerFinder";
import { RailedLayout } from "@/components/RailedLayout";
import { getAllShelters } from "@/lib/shelters";

export const metadata = {
  title: "Volunteer near you — find shelters that need help",
  description:
    "Enter your city or zip and find homeless shelters, day centers, and food programs near you that accept volunteers. Phone numbers and websites for every listing.",
};

export default function VolunteerPage() {
  return (
    <RailedLayout>
      <VolunteerFinder shelters={getAllShelters()} />
    </RailedLayout>
  );
}
