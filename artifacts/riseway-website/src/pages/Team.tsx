import { PageLayout, PageHeader } from "@/components/layout/PageLayout";
import { IMAGES } from "@/lib/constants";
import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const BOARD_MEMBERS = [
  {
    name: "Roger B. Abim Karmon SR.",
    title: "Board Chairman",
    image: `${BASE}/team_cm.jpg`,
  },
  {
    name: "Sylvester Morlu",
    title: "Vice Chairman",
    image: `${BASE}/team_vc.jpg`,
  },
  {
    name: "Mrs. Amie T. Sirleaf",
    title: "Financial Secretary",
    image: `${BASE}/team_fs.jpg`,
  },
  {
    name: "Stephen Tw Mulbah III",
    title: "Secretary General",
    image: `${BASE}/secretary.jpg`,
  },
  {
    name: "Hon. Ellen Attoh Wreh",
    title: "Board Member",
    image: `${BASE}/team_bm.jpg`,
  },
  {
    name: "Cyrus Alpha Wachuku",
    title: "Member",
    image: `${BASE}/team_m.jpg`,
  },
  {
    name: "Cooper B. Saysay",
    title: "Member",
    image: `${BASE}/team_bm2.jpg`,
  },
];

const ADMINISTRATORS = [
  {
    name: "Stephen Tw Mulbah III",
    title: "Director General",
    image: `${BASE}/a4c549a3-4360-41d9-9b63-b114d034e39a_1774484255905.jpg`,
  },
  {
    name: "William H. Varney",
    title: "Administrator",
    image: `${BASE}/team_adm.jpg`,
  },
  {
    name: "Jeroy U. Clinton",
    title: "Director Of Training & Curriculum",
    image: `${BASE}/team_adg.jpg`,
  },
  {
    name: "Sayo Seasay",
    title: "Admission & Records Finance Officer",
    image: `${BASE}/team_arfo.jpg`,
  },
  {
    name: "Abenego B. Richards",
    title: "Students Affairs Officer",
    image: `${BASE}/team_sao.jpg`,
  },
  {
    name: "Safia B. Dunor",
    title: "Office Assistant",
    image: `${BASE}/team_oa.jpg`,
  },
];

const FOUNDERS = [
  {
    name: "Stephen Tw Mulbah III",
    title: "Founder",
    image: `${BASE}/secretary.jpg`,
  },
  {
    name: "William H. Varney",
    title: "Co-Founder",
    image: `${BASE}/team_adm2.jpg`,
  },
  {
    name: "Alexander Teddy Appleton",
    title: "Co-Founder",
    image: `${BASE}/team_cof.jpg`,
  },
  {
    name: "Victor T. Borbordee",
    title: "Co-Founder",
    image: `${BASE}/team_cof1.jpg`,
  },
  {
    name: "Jeroy U. Clinton",
    title: "Co-Founder",
    image: `${BASE}/team_cof2.jpg`,
  },
  {
    name: "Prince A. Clark",
    title: "Co-Founder",
    image: `${BASE}/team_cof3.jpg`,
  },
];

function MemberCard({ name, title, image, index }: { name: string; title: string; image: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.08 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="h-64 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 text-center">
        <h4 className="font-display font-bold text-primary text-lg leading-tight mb-1">{name}</h4>
        <p className="text-accent font-semibold text-sm">{title}</p>
      </div>
    </motion.div>
  );
}

function TeamSection({ title, members, accent }: { title: string; members: typeof BOARD_MEMBERS; accent: string }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className={`w-1.5 h-12 rounded-full ${accent}`} />
          <div>
            <h2 className="text-3xl font-display font-bold text-primary">{title}</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <MemberCard key={i} index={i} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Team() {
  return (
    <PageLayout>
      <PageHeader
        title="Our Team"
        description="The dedicated people behind RISE-WAY Technical And Professional Institute."
        image={IMAGES.review}
      />

      <div className="bg-slate-50 divide-y divide-gray-100">
        <TeamSection title="Board Members" members={BOARD_MEMBERS} accent="bg-primary" />
        <TeamSection title="Administrators" members={ADMINISTRATORS} accent="bg-accent" />
        <TeamSection title="Founders & Co-Founders" members={FOUNDERS} accent="bg-blue-500" />
      </div>
    </PageLayout>
  );
}
