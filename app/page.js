import Hero from './Home/Hero';

export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 2000)); // 
  return <Hero />;
}
