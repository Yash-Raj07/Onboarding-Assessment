import { Question } from '../types';



export const questions: Question[] = [
  {
    id: 'q1',
    category: 'Concerns',
    type: 'single',
    question: "What concerns you most about today's financial environment?",
    options: [
      'Inflation and rising costs',
      'Banking instability',
      'Government overreach or policy changes',
      'Wealth preservation',
      'Digital currency transition (CBDCs)',
      'Global instability'
    ]
  },
  {
    id: 'q2',
    category: 'Risk',
    type: 'single',
    question: 'If a major disruption occurred, what would concern you most?',
    options: [
      'Bank withdrawal limits',
      'Currency devaluation',
      'Crypto regulation or restrictions',
      'Stock market crash',
      'Tax law changes',
      'Global instability'
    ]
  },
  {
    id: 'q3',
    category: 'Goals',
    type: 'single',
    question: 'What is your primary goal right now?',
    options: [
      'Protect what I already have',
      'Grow wealth during volatility',
      'Build generational wealth',
      'Learn the fundamentals',
      'Prepare for worst-case scenarios',
      'Global instability'
    ]
  },
  {
    id: 'q4',
    category: 'Assets',
    type: 'single',
    question: 'Approximate investable assets',
    options: [
      'Under $10,000',
      '$10,000-$100,000',
      '$100,000-$500,000',
      '$500,000+',
      'Prefer not to say'
    ]
  },
  {
    id: 'q5',
    category: 'Holdings',
    type: 'multi',
    question: 'Which of the following do you currently hold?',
    options: [
      'Physical gold or silver',
      'Cryptocurrency (selfcustody wallet)',
      'Cryptocurrency (exchange only)',
      'LLC, Trust, or formal legal structure',
      'None of the above'
    ]
  },
  {
    id: 'q6',
    category: 'Estate',
    type: 'single',
    question: 'Do you currently have estate planning in place?',
    options: [
      'Yes - Trust',
      'Yes - Will',
      'No',
      'Prefer not to say'
    ]
  },
  {
    id: 'q7',
    category: 'Storage',
    type: 'single',
    question: 'How do you store digital assets (if applicable)?',
    options: [
      'Hardware wallet',
      'Software wallet',
      'On an exchange',
      'I do not hold digital assets',
      'Prefer not to say'
    ]
  },
  {
    id: 'q8',
    category: 'Banking',
    type: 'single',
    question: 'How diversified is your banking setup?',
    options: [
      'Multiple banks',
      'One bank',
      'I do not use traditional banks',
      'I do not hold digital assets',
      'Prefer not to say'
    ]
  },
  {
    id: 'q9',
    category: 'CBDC',
    type: 'slider',
    question: 'How familiar are you with Central Bank Digital Currencies (CBDCs)',
    min: 1,
    max: 5,
    description: 'Scale 1-5'
  },
  {
    id: 'q9b',
    category: 'Trusts',
    type: 'slider',
    question: 'How familiar are you with trusts and legal structures?',
    min: 1,
    max: 5,
    description: 'Scale 1-5'
  },
  {
    id: 'q9c',
    category: 'Protection',
    type: 'slider',
    question: 'How familiar are you with asset protection strategies?',
    min: 1,
    max: 5,
    description: 'Scale 1-5'
  },
  {
    id: 'q9d',
    category: 'Custody',
    type: 'slider',
    question: 'How familiar are you with cold wallets / self-custody?',
    min: 1,
    max: 5,
    description: 'Scale 1-5'
  },
  {
    id: 'q10',
    category: 'Experience',
    type: 'multi',
    question: 'Have you experienced any of the following?',
    options: [
      '2008 financial crisis',
      'Bank failure or restricted withdrawals',
      'Rapid inflation period',
      'None of the above'
    ]
  },
  {
    id: 'q11',
    category: 'Confidence',
    type: 'single',
    question: 'How comfortable are you implementing new financial strategies?',
    options: [
      'Very comfortable',
      'Somewhat comfortable',
      'Not comfortable',
      'Prefer not to say'
    ]
  },
  {
    id: 'q12',
    category: 'Offshore',
    type: 'single',
    question: 'Are you interested in offshore diversification strategies?',
    options: ['Yes, I am', 'No, I am not']
  },
  {
    id: 'q13',
    category: 'Crypto',
    type: 'single',
    question: 'Are you interested in digital asset exposure?',
    options: ['Yes', 'No']
  },
  {
    id: 'q14',
    category: 'Legal',
    type: 'single',
    question: 'Are you interested in legal restructuring or trusts?',
    options: ['Yes', 'No']
  },
  {
    id: 'q15',
    category: 'AI',
    type: 'single',
    question: 'Would AI-guided education and planning support be valuable to you?',
    options: ['Yes', 'No']
  },
  {
    id: 'q16',
    category: 'Alerts',
    type: 'single',
    question: 'Would real-time economic alerts be valuable to you?',
    options: ['Yes', 'No']
  }
];

// List of all categories for the top progress bar
export const categories = [
  'Concerns', 'Risk', 'Goals', 'Assets', 'Holdings', 'Estate', 
  'Storage', 'Banking', 'CBDC', 'Trusts', 'Protection', 'Custody', 
  'Experience', 'Confidence', 'Offshore', 'Crypto', 'Legal', 'AI', 'Alerts'
];
