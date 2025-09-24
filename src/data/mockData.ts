import { Politician } from '@/types/politician';

export const mockPoliticians: Politician[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    party: 'Democratic',
    position: 'Senator',
    state: 'California',
    district: undefined,
    termStart: '2019-01-03',
    termEnd: '2025-01-03',
    imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face',
    biography: 'Senator Johnson has served California for over 5 years, focusing on healthcare reform and environmental protection.',
    website: 'https://johnson.senate.gov',
    email: 'contact@johnson.senate.gov',
    phone: '(202) 224-3841',
    committeeMemberships: ['Health, Education, Labor and Pensions', 'Environment and Public Works'],
    voteRecords: [
      {
        id: 'v1',
        title: 'Infrastructure Investment Act',
        description: 'Bipartisan legislation to invest $1.2 trillion in infrastructure improvements.',
        date: '2023-11-15',
        vote: 'Yes',
        billNumber: 'H.R. 3684',
        category: 'Infrastructure'
      },
      {
        id: 'v2',
        title: 'Climate Change Response Act',
        description: 'Comprehensive climate legislation to reduce carbon emissions by 50% by 2030.',
        date: '2023-10-28',
        vote: 'Yes',
        billNumber: 'S. 1298',
        category: 'Environment'
      },
      {
        id: 'v3',
        title: 'Defense Authorization Act',
        description: 'Annual defense spending authorization bill.',
        date: '2023-09-14',
        vote: 'No',
        billNumber: 'H.R. 2670',
        category: 'Defense'
      }
    ],
    promises: [
      {
        id: 'p1',
        title: 'Expand Healthcare Access',
        description: 'Work to provide universal healthcare coverage for all Californians.',
        datePromised: '2018-10-15',
        deadline: '2024-12-31',
        status: 'In Progress',
        progress: 65,
        category: 'Healthcare'
      },
      {
        id: 'p2',
        title: 'Reduce Carbon Emissions',
        description: 'Support legislation to achieve carbon neutrality by 2035.',
        datePromised: '2018-10-15',
        deadline: '2025-01-01',
        status: 'Fulfilled',
        progress: 100,
        category: 'Environment'
      },
      {
        id: 'p3',
        title: 'Infrastructure Investment',
        description: 'Secure federal funding for California infrastructure projects.',
        datePromised: '2019-01-20',
        deadline: '2023-12-31',
        status: 'Fulfilled',
        progress: 100,
        category: 'Infrastructure'
      }
    ],
    proposals: [
      {
        id: 'pr1',
        title: 'Green Energy Transition Act',
        description: 'Legislation to accelerate the transition to renewable energy sources.',
        dateProposed: '2023-06-15',
        status: 'Active',
        category: 'Environment',
        supportLevel: 78
      },
      {
        id: 'pr2',
        title: 'Rural Healthcare Expansion',
        description: 'Initiative to improve healthcare access in rural communities.',
        dateProposed: '2023-03-22',
        status: 'Passed',
        category: 'Healthcare',
        supportLevel: 85
      }
    ]
  },
  {
    id: '2',
    name: 'Michael Chen',
    party: 'Republican',
    position: 'Representative',
    state: 'Texas',
    district: '15th District',
    termStart: '2021-01-03',
    termEnd: '2025-01-03',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    biography: 'Representative Chen represents Texas\' 15th District, advocating for small business growth and fiscal responsibility.',
    website: 'https://chen.house.gov',
    email: 'contact@chen.house.gov',
    phone: '(202) 225-4236',
    committeeMemberships: ['Small Business', 'Budget'],
    voteRecords: [
      {
        id: 'v4',
        title: 'Small Business Support Act',
        description: 'Legislation to provide tax relief and support for small businesses.',
        date: '2023-11-20',
        vote: 'Yes',
        billNumber: 'H.R. 4521',
        category: 'Economy'
      },
      {
        id: 'v5',
        title: 'Infrastructure Investment Act',
        description: 'Bipartisan legislation to invest $1.2 trillion in infrastructure improvements.',
        date: '2023-11-15',
        vote: 'Yes',
        billNumber: 'H.R. 3684',
        category: 'Infrastructure'
      }
    ],
    promises: [
      {
        id: 'p4',
        title: 'Support Small Businesses',
        description: 'Advocate for policies that help small businesses thrive and create jobs.',
        datePromised: '2020-09-10',
        deadline: '2024-12-31',
        status: 'In Progress',
        progress: 72,
        category: 'Economy'
      },
      {
        id: 'p5',
        title: 'Reduce Government Spending',
        description: 'Work to eliminate wasteful government spending and reduce the deficit.',
        datePromised: '2020-09-10',
        deadline: '2024-12-31',
        status: 'In Progress',
        progress: 45,
        category: 'Fiscal Policy'
      }
    ],
    proposals: [
      {
        id: 'pr3',
        title: 'Tax Reform for Small Business',
        description: 'Comprehensive tax reform to benefit small business owners.',
        dateProposed: '2023-08-10',
        status: 'Active',
        category: 'Economy',
        supportLevel: 62
      }
    ]
  }
];