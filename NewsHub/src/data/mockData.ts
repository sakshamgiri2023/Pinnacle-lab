import { Article, Category, Comment } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Politics', slug: 'politics', color: '#dc2626' },
  { id: '2', name: 'Technology', slug: 'technology', color: '#2563eb' },
  { id: '3', name: 'Sports', slug: 'sports', color: '#16a34a' },
  { id: '4', name: 'World', slug: 'world', color: '#ea580c' },
  { id: '5', name: 'Entertainment', slug: 'entertainment', color: '#9333ea' },
  { id: '6', name: 'Business', slug: 'business', color: '#0891b2' },
  { id: '7', name: 'Health', slug: 'health', color: '#059669' },
  { id: '8', name: 'Science', slug: 'science', color: '#7c3aed' },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'Breaking: Major Climate Summit Reaches Historic Agreement',
    summary: 'World leaders commit to unprecedented climate action with binding emissions targets.',
    content: `In a groundbreaking development at the Global Climate Summit, world leaders have reached a historic agreement that sets binding emissions targets for the next decade. The agreement, signed by representatives from over 190 countries, marks a significant milestone in international climate cooperation.

The accord includes several key provisions:
- Mandatory 50% reduction in carbon emissions by 2030
- $100 billion annual climate fund for developing nations
- Transition to renewable energy sources by 2035
- Enhanced forest protection and restoration programs

Environmental scientists and activists have hailed the agreement as a crucial step forward, though some argue that more aggressive action is needed to address the climate crisis effectively.

The implementation of these measures will require significant economic and technological investments from participating nations, but experts believe the long-term benefits far outweigh the costs.`,
    author: 'Sarah Johnson',
    publishedAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T12:45:00Z',
    category: 'World',
    tags: ['climate change', 'environment', 'politics', 'international'],
    imageUrl: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true,
    views: 15420,
    readTime: 5
  },
  {
    id: '2',
    title: 'Revolutionary AI Technology Transforms Healthcare Diagnosis',
    summary: 'New artificial intelligence system shows 95% accuracy in early disease detection.',
    content: `A revolutionary artificial intelligence system developed by researchers at leading tech companies has demonstrated remarkable success in early disease detection, achieving 95% accuracy rates in clinical trials.

The AI system, named MediCore, uses advanced machine learning algorithms to analyze medical imaging data, blood test results, and patient symptoms to identify potential health issues before they become critical.

Key features of the technology include:
- Real-time analysis of medical data
- Integration with existing hospital systems
- Predictive modeling for disease progression
- Personalized treatment recommendations

Dr. Emily Chen, lead researcher on the project, stated: "This technology has the potential to save millions of lives by catching diseases in their earliest stages when treatment is most effective."

The system is currently undergoing final regulatory approval and is expected to be deployed in major hospitals within the next six months.`,
    author: 'Michael Rodriguez',
    publishedAt: '2024-01-14T14:20:00Z',
    updatedAt: '2024-01-14T16:30:00Z',
    category: 'Technology',
    tags: ['AI', 'healthcare', 'innovation', 'medical'],
    imageUrl: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true,
    views: 8750,
    readTime: 4
  },
  {
    id: '3',
    title: 'Championship Finals Set Records for Viewership',
    summary: 'Sports fans worldwide tune in for the most-watched championship game in history.',
    content: `The championship finals broke all previous viewership records, with over 2.1 billion people tuning in worldwide to watch the historic match. The game, which went into overtime, showcased exceptional athletic performance and sportsmanship.

Record-breaking moments included:
- Highest single-game attendance in stadium history
- Most social media interactions during a live sports event
- Peak concurrent streaming viewers across all platforms
- International broadcast in 180 countries

The economic impact of the event is estimated at over $500 million in local revenue, including tourism, hospitality, and merchandise sales.

Athletes from both teams demonstrated remarkable skill and determination, making this championship one for the history books. The victory celebration continued late into the night as fans celebrated across the globe.`,
    author: 'David Thompson',
    publishedAt: '2024-01-13T20:15:00Z',
    updatedAt: '2024-01-13T22:00:00Z',
    category: 'Sports',
    tags: ['championship', 'sports', 'records', 'viewership'],
    imageUrl: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    views: 12340,
    readTime: 3
  },
  {
    id: '4',
    title: 'Global Economy Shows Signs of Recovery After Recent Challenges',
    summary: 'Economic indicators point to steady growth across major markets worldwide.',
    content: `Recent economic data suggests a positive trend in global markets, with key indicators showing steady recovery across major economies. The International Monetary Fund has revised its growth projections upward for the coming year.

Positive indicators include:
- Unemployment rates declining in major economies
- Consumer confidence reaching pre-pandemic levels
- Manufacturing output increasing by 8% quarter-over-quarter
- International trade volumes recovering to historical norms

Financial experts attribute this recovery to coordinated policy responses, technological innovation, and adaptive business strategies. However, challenges remain, including supply chain disruptions and geopolitical tensions.

The service sector has shown particularly strong growth, while traditional manufacturing continues to modernize with digital technologies. Investment in renewable energy and sustainable technologies has also contributed significantly to economic growth.`,
    author: 'Lisa Wang',
    publishedAt: '2024-01-12T09:45:00Z',
    updatedAt: '2024-01-12T11:20:00Z',
    category: 'Business',
    tags: ['economy', 'recovery', 'finance', 'global markets'],
    imageUrl: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    views: 6890,
    readTime: 4
  },
  {
    id: '5',
    title: 'Breakthrough in Quantum Computing Achieved by Research Team',
    summary: 'Scientists demonstrate practical quantum computer capable of solving complex problems.',
    content: `A team of quantum physicists has achieved a major breakthrough in quantum computing, demonstrating a practical quantum computer capable of solving complex mathematical problems exponentially faster than traditional computers.

The quantum computer, featuring 1000 stable qubits, successfully completed calculations that would take classical computers thousands of years to complete. This advancement brings quantum computing closer to real-world applications.

Potential applications include:
- Cryptography and cybersecurity
- Drug discovery and molecular modeling
- Financial modeling and risk analysis
- Climate simulation and weather prediction
- Artificial intelligence optimization

The research team overcame significant technical challenges, including quantum decoherence and error correction, to maintain stable quantum states for extended periods.

This breakthrough is expected to revolutionize multiple industries and accelerate scientific research across various fields. Tech companies and governments are already investing heavily in quantum computing infrastructure.`,
    author: 'Dr. Robert Kim',
    publishedAt: '2024-01-11T13:30:00Z',
    updatedAt: '2024-01-11T15:45:00Z',
    category: 'Science',
    tags: ['quantum computing', 'technology', 'breakthrough', 'research'],
    imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    views: 9850,
    readTime: 6
  },
  {
    id: '6',
    title: 'New Mental Health Initiative Launched Nationwide',
    summary: 'Comprehensive program aims to improve mental health support and awareness.',
    content: `A comprehensive mental health initiative has been launched nationwide, aiming to improve access to mental health services and reduce stigma surrounding mental health issues.

The program includes:
- 24/7 mental health hotlines in multiple languages
- Free counseling services in underserved communities
- Mental health education in schools and workplaces
- Digital platforms for remote therapy sessions
- Training programs for healthcare professionals

Early pilot programs have shown promising results, with a 40% increase in people seeking mental health support and improved treatment outcomes. The initiative is funded through a combination of government support and private partnerships.

Mental health advocates praise the comprehensive approach, noting that it addresses both immediate needs and long-term systemic issues. The program is expected to serve over 10 million people in its first year.`,
    author: 'Dr. Maria Garcia',
    publishedAt: '2024-01-10T11:00:00Z',
    updatedAt: '2024-01-10T13:15:00Z',
    category: 'Health',
    tags: ['mental health', 'healthcare', 'public health', 'support'],
    imageUrl: 'https://images.pexels.com/photos/3958455/pexels-photo-3958455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    views: 5670,
    readTime: 4
  }
];

export const comments: Comment[] = [
  {
    id: '1',
    articleId: '1',
    userId: 'user1',
    username: 'EcoWarrior',
    content: 'This is exactly what we needed! Finally, world leaders are taking serious action on climate change.',
    createdAt: '2024-01-15T15:30:00Z'
  },
  {
    id: '2',
    articleId: '1',
    userId: 'user2',
    username: 'SkepticalReader',
    content: 'I hope this agreement has real enforcement mechanisms. We\'ve seen promises before.',
    createdAt: '2024-01-15T16:45:00Z'
  },
  {
    id: '3',
    articleId: '2',
    userId: 'user3',
    username: 'TechEnthusiast',
    content: 'Amazing breakthrough! AI in healthcare could revolutionize how we approach medicine.',
    createdAt: '2024-01-14T18:20:00Z'
  }
];