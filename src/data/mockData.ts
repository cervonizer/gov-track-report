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
  },
  {
    id: '3',
    name: 'Jennifer Martinez',
    party: 'Democratic',
    position: 'Representative',
    state: 'Florida',
    district: '7th District',
    termStart: '2022-01-03',
    termEnd: '2025-01-03',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    biography: 'Representative Martinez represents Florida\'s 7th District, focusing on education reform and affordable housing initiatives.',
    website: 'https://martinez.house.gov',
    email: 'contact@martinez.house.gov',
    phone: '(202) 225-7891',
    committeeMemberships: ['Education and Labor', 'Financial Services'],
    voteRecords: [
      {
        id: 'v6',
        title: 'Affordable Housing Act',
        description: 'Legislation to increase funding for affordable housing programs.',
        date: '2023-12-05',
        vote: 'Yes',
        billNumber: 'H.R. 5623',
        category: 'Housing'
      },
      {
        id: 'v7',
        title: 'Education Funding Bill',
        description: 'Bill to increase federal funding for public schools.',
        date: '2023-11-28',
        vote: 'Yes',
        billNumber: 'H.R. 5201',
        category: 'Education'
      },
      {
        id: 'v8',
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
        id: 'p6',
        title: 'Increase Education Funding',
        description: 'Secure additional federal funding for public schools in the district.',
        datePromised: '2021-09-15',
        deadline: '2024-12-31',
        status: 'In Progress',
        progress: 68,
        category: 'Education'
      },
      {
        id: 'p7',
        title: 'Affordable Housing Initiative',
        description: 'Create 5,000 new affordable housing units in the district.',
        datePromised: '2021-09-15',
        deadline: '2025-01-01',
        status: 'In Progress',
        progress: 55,
        category: 'Housing'
      }
    ],
    proposals: [
      {
        id: 'pr4',
        title: 'Teacher Salary Enhancement Act',
        description: 'Legislation to increase teacher salaries and benefits.',
        dateProposed: '2023-09-12',
        status: 'Active',
        category: 'Education',
        supportLevel: 71
      }
    ]
  },
  {
    id: '4',
    name: 'Robert Williams',
    party: 'Republican',
    position: 'Senator',
    state: 'Georgia',
    district: undefined,
    termStart: '2017-01-03',
    termEnd: '2025-01-03',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    biography: 'Senator Williams has represented Georgia for over 7 years, championing agricultural interests and veterans\' affairs.',
    website: 'https://williams.senate.gov',
    email: 'contact@williams.senate.gov',
    phone: '(202) 224-5628',
    committeeMemberships: ['Agriculture, Nutrition, and Forestry', 'Veterans\' Affairs', 'Armed Services'],
    voteRecords: [
      {
        id: 'v9',
        title: 'Farm Bill Reauthorization',
        description: 'Five-year reauthorization of federal farm and nutrition programs.',
        date: '2023-12-10',
        vote: 'Yes',
        billNumber: 'S. 4672',
        category: 'Agriculture'
      },
      {
        id: 'v10',
        title: 'Veterans Healthcare Expansion',
        description: 'Bill to expand healthcare services for military veterans.',
        date: '2023-11-22',
        vote: 'Yes',
        billNumber: 'S. 3891',
        category: 'Veterans Affairs'
      },
      {
        id: 'v11',
        title: 'Climate Change Response Act',
        description: 'Comprehensive climate legislation to reduce carbon emissions by 50% by 2030.',
        date: '2023-10-28',
        vote: 'No',
        billNumber: 'S. 1298',
        category: 'Environment'
      }
    ],
    promises: [
      {
        id: 'p8',
        title: 'Support Georgia Farmers',
        description: 'Advocate for policies that protect and support Georgia\'s agricultural industry.',
        datePromised: '2016-10-01',
        deadline: '2024-12-31',
        status: 'Fulfilled',
        progress: 100,
        category: 'Agriculture'
      },
      {
        id: 'p9',
        title: 'Improve Veterans Services',
        description: 'Expand access to healthcare and benefits for Georgia veterans.',
        datePromised: '2016-10-01',
        deadline: '2024-12-31',
        status: 'In Progress',
        progress: 82,
        category: 'Veterans Affairs'
      }
    ],
    proposals: [
      {
        id: 'pr5',
        title: 'Rural Broadband Expansion',
        description: 'Initiative to bring high-speed internet to rural Georgia communities.',
        dateProposed: '2023-07-18',
        status: 'Active',
        category: 'Technology',
        supportLevel: 76
      },
      {
        id: 'pr6',
        title: 'Veterans Mental Health Act',
        description: 'Comprehensive mental health support for military veterans.',
        dateProposed: '2023-05-30',
        status: 'Passed',
        category: 'Veterans Affairs',
        supportLevel: 89
      }
    ]
  },
  {
    id: '5',
    name: 'Elizabeth Thompson',
    party: 'Democratic',
    position: 'Presidential Candidate',
    state: 'United States',
    district: undefined,
    termStart: '2024-01-15',
    termEnd: '2025-11-05',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    biography: 'Former Governor and Senator, Elizabeth Thompson is running for President on a platform of healthcare reform, climate action, and economic justice.',
    website: 'https://thompson2024.com',
    email: 'contact@thompson2024.com',
    phone: '(555) 024-2024',
    committeeMemberships: ['Campaign Committee'],
    voteRecords: [
      {
        id: 'v12',
        title: 'Medicare for All Act',
        description: 'Legislation to establish universal healthcare coverage.',
        date: '2023-08-15',
        vote: 'Yes',
        billNumber: 'H.R. 1976',
        category: 'Healthcare'
      },
      {
        id: 'v13',
        title: 'Green New Deal Resolution',
        description: 'Resolution calling for comprehensive climate action.',
        date: '2023-07-20',
        vote: 'Yes',
        billNumber: 'H.Res. 109',
        category: 'Environment'
      }
    ],
    promises: [
      {
        id: 'p10',
        title: 'Universal Healthcare',
        description: 'Implement Medicare for All within the first term.',
        datePromised: '2024-01-15',
        deadline: '2029-01-20',
        status: 'In Progress',
        progress: 25,
        category: 'Healthcare'
      },
      {
        id: 'p11',
        title: 'Climate Action Plan',
        description: 'Achieve net-zero emissions by 2040.',
        datePromised: '2024-01-15',
        deadline: '2040-12-31',
        status: 'In Progress',
        progress: 15,
        category: 'Environment'
      },
      {
        id: 'p12',
        title: 'Economic Justice',
        description: 'Raise federal minimum wage to $20/hour.',
        datePromised: '2024-01-15',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 10,
        category: 'Economy'
      }
    ],
    proposals: [
      {
        id: 'pr7',
        title: 'National Healthcare Plan',
        description: 'Comprehensive universal healthcare system for all Americans.',
        dateProposed: '2024-02-01',
        status: 'Active',
        category: 'Healthcare',
        supportLevel: 58
      },
      {
        id: 'pr8',
        title: 'Clean Energy Investment',
        description: '$2 trillion investment in renewable energy infrastructure.',
        dateProposed: '2024-03-15',
        status: 'Active',
        category: 'Environment',
        supportLevel: 62
      }
    ]
  },
  {
    id: '6',
    name: 'James Anderson',
    party: 'Republican',
    position: 'Presidential Candidate',
    state: 'United States',
    district: undefined,
    termStart: '2024-02-01',
    termEnd: '2025-11-05',
    imageUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&crop=face',
    biography: 'Former CEO and Governor, James Anderson is running for President with a focus on economic growth, national security, and conservative values.',
    website: 'https://anderson2024.com',
    email: 'contact@anderson2024.com',
    phone: '(555) 024-2025',
    committeeMemberships: ['Campaign Committee'],
    voteRecords: [
      {
        id: 'v14',
        title: 'Tax Cuts and Jobs Act',
        description: 'Major tax reform legislation to reduce corporate and individual taxes.',
        date: '2023-09-10',
        vote: 'Yes',
        billNumber: 'H.R. 4820',
        category: 'Economy'
      },
      {
        id: 'v15',
        title: 'Border Security Enhancement Act',
        description: 'Legislation to strengthen border security and immigration enforcement.',
        date: '2023-08-25',
        vote: 'Yes',
        billNumber: 'S. 3245',
        category: 'Immigration'
      }
    ],
    promises: [
      {
        id: 'p13',
        title: 'Economic Growth',
        description: 'Create 5 million new jobs through tax cuts and deregulation.',
        datePromised: '2024-02-01',
        deadline: '2028-12-31',
        status: 'In Progress',
        progress: 20,
        category: 'Economy'
      },
      {
        id: 'p14',
        title: 'Secure Borders',
        description: 'Complete border security infrastructure and reform immigration system.',
        datePromised: '2024-02-01',
        deadline: '2027-12-31',
        status: 'In Progress',
        progress: 18,
        category: 'Immigration'
      },
      {
        id: 'p15',
        title: 'Energy Independence',
        description: 'Achieve complete energy independence through domestic production.',
        datePromised: '2024-02-01',
        deadline: '2028-12-31',
        status: 'In Progress',
        progress: 12,
        category: 'Energy'
      }
    ],
    proposals: [
      {
        id: 'pr9',
        title: 'American Jobs Act',
        description: 'Tax incentives for businesses to create jobs and invest in America.',
        dateProposed: '2024-02-15',
        status: 'Active',
        category: 'Economy',
        supportLevel: 54
      },
      {
        id: 'pr10',
        title: 'National Security Enhancement',
        description: 'Increased defense spending and border security measures.',
        dateProposed: '2024-03-01',
        status: 'Active',
        category: 'National Security',
        supportLevel: 61
      }
    ]
  }
];