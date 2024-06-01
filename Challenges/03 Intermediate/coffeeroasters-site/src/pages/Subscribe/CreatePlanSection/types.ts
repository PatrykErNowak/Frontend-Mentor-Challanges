type PlanCategory = 'preferencees' | 'beanType' | 'quantity' | 'grind' | 'deliveries';
interface Plan {
  preferencees: 'capsule' | 'filter' | 'espresso' | null;
  beanType: 'single origin' | 'decaf' | 'blender' | null;
  quantity: '250g' | '500g' | '1000g' | null;
  grind: 'wholebean' | 'filter' | 'cafetiére' | null;
  deliveries: 'every week' | 'every 2 weeks' | 'every month' | null;
}

export type { Plan, PlanCategory };
